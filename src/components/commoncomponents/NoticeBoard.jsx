import React, { useEffect, useState } from "react";
import Container from "../commoncomponents/Container";
import { Link } from "react-router-dom";
import {
  FaCalendarAlt,
  FaArrowRight,
  FaBullhorn,
  FaBookOpen,
  FaUserGraduate,
  FaMosque,
  FaImage,
  FaClock,
} from "react-icons/fa";
import useAxios from "../../hooks/useAxios";

//  =========================
//    TIME AGO (BANGLA) - WORKING VERSION ✅
// ========================= */
const timeAgoBangla = (dateInput) => {
  if (!dateInput) return "সময় উল্লেখ নেই";
  
  try {
    let postTime;
    
    // Handle different date formats from backend
    if (typeof dateInput === 'string') {
      // Format 1: "2026-01-28" (date only from backend)
      if (/^\d{4}-\d{2}-\d{2}$/.test(dateInput)) {
        postTime = new Date(dateInput + 'T12:00:00');
      }
      // Format 2: "2026-01-28 10:30:45" (datetime with space)
      else if (dateInput.includes(' ')) {
        const [datePart, timePart] = dateInput.split(' ');
        postTime = new Date(datePart + 'T' + timePart);
      }
      // Format 3: ISO format "2026-01-28T10:30:45.000Z"
      else if (dateInput.includes('T')) {
        postTime = new Date(dateInput);
      }
      else {
        postTime = new Date(dateInput);
      }
    } 
    else if (dateInput instanceof Date) {
      postTime = dateInput;
    } 
    else if (typeof dateInput === 'number') {
      postTime = new Date(dateInput);
    }
    else {
      return "সময় অজানা";
    }
    
    // Validate date
    if (!postTime || isNaN(postTime.getTime())) {
      return "তারিখ অবৈধ";
    }
    
    const now = new Date();
    const diffMs = now - postTime;
    const diffSec = Math.floor(diffMs / 1000);
    
    // Handle future dates
    if (diffSec < 0) {
      return "সদ্য প্রকাশিত";
    }
    
    // Less than a minute
    if (diffSec < 60) {
      return "এইমাত্র";
    }
    
    // Minutes
    const diffMin = Math.floor(diffSec / 60);
    if (diffMin < 60) {
      return `${diffMin} মিনিট আগে`;
    }
    
    // Hours
    const diffHour = Math.floor(diffMin / 60);
    if (diffHour < 24) {
      return `${diffHour} ঘণ্টা আগে`;
    }
    
    // Days
    const diffDay = Math.floor(diffHour / 24);
    if (diffDay === 1) {
      return "গতকাল";
    }
    if (diffDay < 7) {
      return `${diffDay} দিন আগে`;
    }
    
    // Weeks
    const diffWeek = Math.floor(diffDay / 7);
    if (diffWeek < 4) {
      return `${diffWeek} সপ্তাহ আগে`;
    }
    
    // Months
    const diffMonth = Math.floor(diffDay / 30);
    if (diffMonth < 12) {
      return `${diffMonth} মাস আগে`;
    }
    
    // Years
    const diffYear = Math.floor(diffDay / 365);
    return `${diffYear} বছর আগে`;
    
  } catch (error) {
    console.error("❌ Date parsing error:", error, "for input:", dateInput);
    return "সময় অজানা";
  }
};

/* =========================
   FORMAT BANGLA DATE
========================= */
const formatBanglaDate = (dateInput) => {
  if (!dateInput) return "";
  
  try {
    let date;
    
    if (typeof dateInput === 'string') {
      if (/^\d{4}-\d{2}-\d{2}$/.test(dateInput)) {
        date = new Date(dateInput + 'T12:00:00');
      } else {
        date = new Date(dateInput);
      }
    } else {
      date = new Date(dateInput);
    }
    
    if (isNaN(date.getTime())) return dateInput;
    
    const day = String(date.getDate()).padStart(2, '0');
    const month = String(date.getMonth() + 1).padStart(2, '0');
    const year = date.getFullYear();
    
    return `${day}/${month}/${year}`;
  } catch (error) {
    return dateInput;
  }
};

const NoticeBoard = () => {
  const axios = useAxios();
  const [notices, setNotices] = useState([]);
  const [loading, setLoading] = useState(true);
  const [activeTab, setActiveTab] = useState("all");
  const [visibleCount, setVisibleCount] = useState(6);

  const categories = [
    { key: "all", label: "সকল নোটিশ", icon: <FaMosque /> },
    { key: "academic", label: "অ্যাকাডেমিক", icon: <FaBookOpen /> },
    { key: "admission", label: "ভর্তি তথ্য", icon: <FaUserGraduate /> },
    { key: "event", label: "ইভেন্ট", icon: <FaBullhorn /> },
  ];

  const categoryConfig = {
    academic: { label: "অ্যাকাডেমিক", color: "bg-blue-50 text-blue-600" },
    admission: { label: "ভর্তি", color: "bg-green-50 text-green-600" },
    event: { label: "ইভেন্ট", color: "bg-orange-50 text-orange-600" },
  };

  useEffect(() => {
    axios.get("/posts")
      .then((res) => {
        // Filter out marquee posts
        const regularNotices = res.data.filter(post => 
          post.category && 
          post.category !== 'marquee' && 
          ['academic', 'admission', 'event'].includes(post.category)
        );
        
        // Debug: Check date format
        if (regularNotices.length > 0) {
          console.log("📅 Sample date from backend:", regularNotices[0].date);
          console.log("📅 Date type:", typeof regularNotices[0].date);
          console.log("🕐 Time ago result:", timeAgoBangla(regularNotices[0].createdAt || regularNotices[0].date));
        }
        
        setNotices(regularNotices);
        setLoading(false);
      })
      .catch(err => {
        console.error("❌ নোটিশ লোড করতে সমস্যা:", err);
        setLoading(false);
      });
  }, [axios]);

  const filteredNotices =
    activeTab === "all"
      ? notices
      : notices.filter((n) => n.category === activeTab);

  const featuredNotice = filteredNotices[0];
  const sideNotices = filteredNotices.slice(1, visibleCount);

  if (loading) {
    return (
      <section className="py-20 bg-[#F9FBF9]">
        <Container>
          <div className="text-center">
            <div className="inline-block">
              <div className="animate-spin rounded-full h-16 w-16 border-4 border-[#1F7A4D] border-t-transparent mx-auto mb-4"></div>
              <p className="text-[#1F7A4D] font-bold text-lg">লোড হচ্ছে...</p>
            </div>
          </div>
        </Container>
      </section>
    );
  }

  return (
    <section className="py-20 bg-[#F9FBF9] overflow-hidden">
      <Container>
        {/* Header Section */}
        <div className="text-center mb-16">
          <h4 className="text-[#F4C430] font-bold tracking-[3px] uppercase text-sm mb-2 flex justify-center items-center gap-2">
            <FaBullhorn /> সর্বশেষ আপডেট
          </h4>
          <h2 className="text-[#1F7A4D] text-3xl md:text-5xl font-black mb-4">
            মাদ্রাসা নোটিশ বোর্ড
          </h2>
          <div className="w-24 h-1.5 bg-[#F4C430] mx-auto rounded-full"></div>
        </div>

        {/* Category Tabs */}
        <div className="flex flex-wrap justify-center gap-3 mb-12">
          {categories.map((cat) => (
            <button
              key={cat.key}
              onClick={() => {
                setActiveTab(cat.key);
                setVisibleCount(6);
              }}
              className={`flex items-center gap-2 px-6 py-3 rounded-full font-bold transition-all duration-300 shadow-sm ${
                activeTab === cat.key
                  ? "bg-[#1F7A4D] text-white scale-105 shadow-lg"
                  : "bg-white text-gray-600 hover:bg-gray-50 border border-gray-100"
              }`}
            >
              <span className={activeTab === cat.key ? "text-[#F4C430]" : "text-[#1F7A4D]"}>
                {cat.icon}
              </span>
              {cat.label}
            </button>
          ))}
        </div>

        {filteredNotices.length === 0 ? (
          <div className="text-center py-24 bg-gradient-to-br from-white to-gray-50 rounded-[2.5rem] shadow-xl border-2 border-dashed border-gray-200 relative overflow-hidden">
            <div className="absolute top-0 left-0 w-32 h-32 bg-[#1F7A4D]/5 rounded-full -translate-x-16 -translate-y-16"></div>
            <div className="absolute bottom-0 right-0 w-40 h-40 bg-[#F4C430]/5 rounded-full translate-x-20 translate-y-20"></div>
            
            <div className="relative z-10">
              <div className="relative inline-block mb-6">
                <div className="absolute inset-0 bg-[#1F7A4D]/10 blur-3xl rounded-full"></div>
                <div className="relative bg-white p-8 rounded-full shadow-lg border-4 border-[#F4C430]/20">
                  <FaImage size={60} className="text-[#1F7A4D]/30" />
                </div>
              </div>
              
              <h3 className="text-2xl md:text-3xl font-black text-[#1F7A4D] mb-3">
                কোনো নোটিশ পাওয়া যায়নি
              </h3>
              
              <p className="text-gray-600 font-semibold mb-2 max-w-md mx-auto text-lg">
                {activeTab === "all" 
                  ? "এই মুহূর্তে কোনো নোটিশ প্রকাশিত হয়নি" 
                  : `"${categories.find(c => c.key === activeTab)?.label}" ক্যাটাগরিতে এখনো কোনো নোটিশ নেই`}
              </p>
              
              <p className="text-sm text-gray-400 mb-8">
                নতুন নোটিশ প্রকাশিত হলে এখানে দেখতে পাবেন
              </p>

              {activeTab !== "all" && (
                <button
                  onClick={() => setActiveTab("all")}
                  className="inline-flex items-center gap-2 px-8 py-4 bg-[#1F7A4D] text-white rounded-full font-bold hover:bg-[#F4C430] hover:text-[#1F7A4D] transition-all duration-300 shadow-lg hover:shadow-xl hover:scale-105"
                >
                  <FaMosque /> সকল নোটিশ দেখুন
                </button>
              )}
            </div>
          </div>
        ) : (
          <div className="grid lg:grid-cols-12 gap-8 items-start">
            
            {/* Featured Notice */}
            <div className="lg:col-span-7">
              {featuredNotice && (
                <div className="bg-white rounded-[2.5rem] shadow-xl border border-gray-50 overflow-hidden group">
                  <div className="h-80 sm:h-[400px] bg-gray-100 relative overflow-hidden">
                    {featuredNotice.image ? (
                      <img
                        src={featuredNotice.image}
                        className="w-full h-full object-cover transform transition-transform duration-700 group-hover:scale-105"
                        alt={featuredNotice.title}
                      />
                    ) : (
                      <div className="h-full flex items-center justify-center">
                        <FaMosque size={80} className="text-[#1F7A4D]/10" />
                      </div>
                    )}
                    <div className="absolute top-5 left-5">
                        <span className="bg-[#1F7A4D] text-white px-4 py-1.5 rounded-full text-xs font-bold shadow-lg">
                            নতুন নোটিশ
                        </span>
                    </div>
                  </div>
                  
                  <div className="p-8 md:p-10">
                    <div className="flex flex-wrap gap-4 text-sm font-bold text-gray-500 mb-4">
                      <span className="flex items-center gap-2 bg-[#F9FBF9] px-4 py-1.5 rounded-full border border-gray-100">
                        <FaCalendarAlt className="text-[#F4C430]" /> 
                        {formatBanglaDate(featuredNotice.date)}
                      </span>
                      <span className="flex items-center gap-2 bg-[#F9FBF9] px-4 py-1.5 rounded-full border border-gray-100">
                        <FaClock className="text-[#F4C430]" /> 
                        {timeAgoBangla(featuredNotice.createdAt || featuredNotice.date)}
                      </span>
                    </div>
                    
                    <h3 className="text-2xl md:text-3xl font-black text-[#1F7A4D] mb-4 leading-snug">
                      {featuredNotice.title}
                    </h3>
                    
                    <p className="text-gray-600 line-clamp-3 mb-6 leading-relaxed">
                      {featuredNotice.description}
                    </p>
                    
                    <Link
                      to={`/notice/${featuredNotice._id}`}
                      className="inline-flex items-center gap-2 text-[#1F7A4D] font-black hover:text-[#F4C430] transition-colors group/link"
                    >
                      বিস্তারিত পড়ুন 
                      <FaArrowRight className="transform group-hover/link:translate-x-2 transition-transform" />
                    </Link>
                  </div>
                </div>
              )}
            </div>

            {/* Side Notices */}
            <div className="lg:col-span-5 space-y-5">
              <h4 className="text-[#1F7A4D] font-bold text-xl mb-4 flex items-center gap-2">
                 <div className="w-2 h-8 bg-[#F4C430] rounded-full"></div>
                 অন্যান্য নোটিশসমূহ
              </h4>
              
              <div className="space-y-4">
                {sideNotices.map((n) => (
                    <Link
                    key={n._id}
                    to={`/notice/${n._id}`}
                    className="block bg-white p-6 rounded-[1.8rem] border border-gray-100 shadow-sm hover:shadow-xl hover:border-[#1F7A4D]/20 transition-all duration-300 group"
                    >
                    <div className="flex justify-between items-center mb-3">
                        <span className={`px-4 py-1 rounded-full text-[10px] font-black uppercase tracking-wider ${categoryConfig[n.category]?.color || "bg-gray-50 text-gray-600"}`}>
                        {categoryConfig[n.category]?.label || "সাধারণ"}
                        </span>
                        {/* <span className="text-[10px] font-bold text-gray-400 flex items-center gap-1">
                            <FaClock /> {timeAgoBangla(n.createdAt || n.date)}
                        </span> */}
                    </div>
                    <h4 className="font-bold text-[#1F7A4D] group-hover:text-[#F4C430] transition-colors mb-2 line-clamp-1">
                        {n.title}
                    </h4>
                    <p className="text-xs text-gray-500 line-clamp-2 leading-relaxed">
                        {n.description}
                    </p>
                    </Link>
                ))}
              </div>

              {/* Load More Button */}
              {filteredNotices.length > visibleCount && (
                <button
                  onClick={() => setVisibleCount((p) => p + 5)}
                  className="w-full py-4 mt-4 rounded-[1.5rem] bg-white border-2 border-dashed border-[#1F7A4D]/20 text-[#1F7A4D] font-black hover:bg-[#1F7A4D] hover:text-white transition-all duration-300 flex items-center justify-center gap-2"
                >
                  আরও নোটিশ দেখুন <FaArrowRight size={14} />
                </button>
              )}
            </div>
          </div>
        )}
      </Container>
    </section>
  );
};

export default NoticeBoard;