import React from "react";
import { FaFacebook, FaYoutube, FaPhone, FaEnvelope, FaMapMarkerAlt, FaChevronRight } from "react-icons/fa";
import { Link } from "react-router";

// আলাদা কন্টেইনার কম্পোনেন্ট (যদি অলরেডি না থাকে)
const Container = ({ children }) => {
  return <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">{children}</div>;
};

const Footer = () => {
  const currentYear = new Date().getFullYear();

  const quickLinks = [
    { name: "হোম", url: "/" },
    { name: "আমাদের পরিচিতি", url: "/আমাদের-পরিচিতি" },
    { name: "শিক্ষক ও প্রশাসন", url: "/শিক্ষক-ও-প্রশাসন" },
    { name: "ভর্তি তথ্য", url: "/ভর্তি-তথ্য" },
    { name: "দান ও সহযোগিতা", url: "/দান-ও-সহযোগিতা" },
  ];

  return (
    <footer className="bg-[#E8F5E9] border-t-1 border-[#1F7A4D]">
      <Container>
        <div className="pt-12 pb-8">
          
          {/* Main Footer Content */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10">
            
            {/* 1. About Section */}
            <div className="space-y-4 text-center md:text-left">
              <h4 className="text-[#1F7A4D] text-xl font-bold border-b-2 border-[#F4C430] inline-block pb-1">
                আমাদের সম্পর্কে
              </h4>
              <p className="text-gray-700 text-sm sm:text-base leading-relaxed">
                হযরত শাহ্ আজম রহ. হিফজুল কোরআন দরগাহ্ মডেল মাদ্রাসা একটি দ্বীনি শিক্ষা প্রতিষ্ঠান। ২০১৮ সাল থেকে আমরা মানসম্মত কুরআন ও আধুনিক শিক্ষা প্রদান করে আসছি।
              </p>
            </div>

            {/* 2. Quick Links Section */}
            <div className="space-y-4 text-center md:text-left">
              <h4 className="text-[#1F7A4D] text-xl font-bold border-b-2 border-[#F4C430] inline-block pb-1">
                প্রয়োজনীয় লিঙ্ক
              </h4>
              <ul className="space-y-2">
                {quickLinks.map((link, index) => (
                  <li key={index}>
                    <a 
                      href={link.url} 
                      className="text-gray-700 hover:text-[#1F7A4D] flex items-center justify-center md:justify-start gap-2 transition-all group"
                    >
                      <FaChevronRight className="text-[10px] text-[#F4C430] group-hover:translate-x-1 transition-transform" />
                      {link.name}
                    </a>
                  </li>
                ))}
              </ul>
            </div>

            {/* 3. Contact Section */}
            <div className="space-y-4 text-center md:text-left">
              <h4 className="text-[#1F7A4D] text-xl font-bold border-b-2 border-[#F4C430] inline-block pb-1">
                যোগাযোগ
              </h4>
              <div className="space-y-3 text-gray-700 text-sm flex flex-col items-center md:items-start">
                <div className="flex items-center gap-3">
                  <div className="bg-white p-2 rounded-full shadow-sm">
                    <FaPhone className="text-[#1F7A4D]" />
                  </div>
                  <span>01611816603</span>
                </div>
                <div className="flex items-center gap-3">
                  <div className="bg-white p-2 rounded-full shadow-sm">
                    <FaEnvelope className="text-[#1F7A4D]" />
                  </div>
                  <span className="break-all">info@madrasah.edu.bd</span>
                </div>
                <div className="flex items-start gap-3 text-center md:text-left">
                  <div className="bg-white p-2 rounded-full shadow-sm">
                    <FaMapMarkerAlt className="text-[#1F7A4D]" />
                  </div>
                  <span>রামপাশা আংশিক,কমলগঞ্জ পৌরসভা, মৌলভীবাজার।</span>
                </div>
              </div>
            </div>

            {/* 4. Social Media Section */}
            <div className="space-y-4 text-center md:text-left">
              <h4 className="text-[#1F7A4D] text-xl font-bold border-b-2 border-[#F4C430] inline-block pb-1">
                সোশ্যাল মিডিয়া
              </h4>
              <p className="text-gray-700 text-sm">আমাদের সাথে যুক্ত থাকুন</p>
              <div className="flex gap-4 justify-center md:justify-start">
                <a 
                  href="https://www.facebook.com/share/165SVDADE8/?mibextid=wwXIfr" 
                  className="bg-[#1F7A4D] text-white p-3 rounded-full hover:bg-[#F4C430] hover:text-[#1F7A4D] transition-all transform hover:-translate-y-1 shadow-md"
                  aria-label="Facebook"
                >
                  <FaFacebook size={20} />
                </a>
                <a 
                  href="#" 
                  className="bg-[#1F7A4D] text-white p-3 rounded-full hover:bg-[#F4C430] hover:text-[#1F7A4D] transition-all transform hover:-translate-y-1 shadow-md"
                  aria-label="YouTube"
                >
                  <FaYoutube size={20} />
                </a>
              </div>
               <div className="mt-10">
            <Link
              to="/admin"
              className="text-center px-4 py-2 bg-[#F4C430] text-[#1F7A4D] font-black rounded"
            >
              Admin
            </Link>
          </div>
            </div>

          </div>

          {/* Divider */}
          <div className="border-t border-[#C8E6C9] mt-10 mb-6"></div>

          {/* Bottom Footer */}
          <div className="flex flex-col md:flex-row justify-between items-center gap-4 text-center md:text-left">
            <div className="space-y-1">
              <p className="text-[#1F7A4D] font-bold text-sm sm:text-base">
                কেন্দ্র কোড : ১৩০ | মাদ্রাসা কোড : ১১২৪৬
              </p>
              <p className="text-gray-500 text-[13px]">
                অফিস সময় : সকাল ১০ :০০ টা থেকে বিকাল ৪:০০ টা
              </p>
            </div>
            
            <div className="text-gray-600 text-[13px] leading-relaxed">
              <p>© {currentYear} হযরত শাহ্ আজম রহ. হিফজুল কোরআন দরগাহ্ মডেল মাদ্রাসা।</p>
              
            </div>
          </div>

        </div>
      </Container>
    </footer>
  );
};

export default Footer;