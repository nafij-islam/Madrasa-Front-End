import React, { useEffect } from "react";
import { FaQuran, FaGraduationCap, FaHeart, FaUserCheck, FaCheckCircle, FaStar } from "react-icons/fa";
import AOS from "aos";
import "aos/dist/aos.css";
import aboutImg from "../../assets/bannerthrtree.jpeg"; 
import Container from './../commoncomponents/Container';

const AboutHome = () => {
  useEffect(() => {
    AOS.init({ duration: 1000, once: true });
  }, []);

  const goals = [
    "প্রতিটি ঘরে ঘরে কমপক্ষে একজন হাফেজে কুরআন গড়ে তোলা।",
    "এতিম ও অসহায় শিশুদের দ্বীনি শিক্ষা ও উন্নত লালন-পালন নিশ্চিত করা।",
    "শুদ্ধভাবে কুরআন তিলাওয়াত ও তাজবীদ শিক্ষা দেওয়া।",
    "সুন্নাহভিত্তিক জীবন গঠন ও চারিত্রিক আত্মশুদ্ধি অর্জন।"
  ];

  return (
    <div className="bg-[#fcfcfc] px-1 overflow-hidden">
      
      {/* ১. হেডার সেকশন (হোম পেজ স্টাইল) */}
      <section className="relative py-16 bg-[#1F7A4D]">
        <div className="absolute inset-0 opacity-10 bg-[url('https://www.transparenttextures.com/patterns/islamic-art.png')]"></div>
        <Container>
          <div className="relative z-10 text-center" data-aos="fade-up">
            <div className="flex justify-center items-center gap-2 mb-4">
              <div className="h-[2px] w-10 bg-[#F4C430]"></div>
              <span className="text-[#F4C430] font-bold uppercase tracking-widest text-sm">আমাদের সম্পর্কে জানুন</span>
              <div className="h-[2px] w-10 bg-[#F4C430]"></div>
            </div>
            <h1 className="text-white text-3xl md:text-5xl font-black mb-4">
              দ্বীনি শিক্ষার এক নির্ভরযোগ্য প্রতিষ্ঠান
            </h1>
            <p className="text-white/80 max-w-2xl mx-auto text-lg leading-relaxed">
              হযরত শাহ্ আজম রহ. হিফজুল কোরআন দরগাহ্ মডেল মাদ্রাসা ও এতিমখানা—যেখানে আমল ও আখলাকের সমন্বয় ঘটে।
            </p>
          </div>
        </Container>
      </section>

      {/* ২. বর্ণনা ও ইমেজ সেকশন (ব্যানার স্টাইল বর্ডার সহ) */}
      <section className="py-16 md:py-24">
        <Container>
          <div className="flex flex-col lg:flex-row items-center gap-16">
            <div className="lg:w-1/2" data-aos="zoom-in">
              <div className="relative p-2 md:p-4 bg-white rounded-3xl shadow-2xl border-2 border-[#E8F5E9]">
                <div className="overflow-hidden rounded-2xl relative">
                  <img 
                    src={aboutImg} 
                    alt="Madrasah Building" 
                    className="w-full h-full object-cover transform hover:scale-105 transition-transform duration-700"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#1F7A4D]/40 to-transparent"></div>
                </div>
                {/* ভাসমান ব্যাজ */}
                <div className="absolute -bottom-6 -right-6 bg-[#F4C430] text-[#1F7A4D] px-8 py-5 rounded-2xl shadow-xl hidden md:block border-4 border-white">
                  <p className="font-black text-3xl">২০১৮</p>
                  <p className="text-xs font-bold uppercase tracking-wider text-gray-800">প্রতিষ্ঠিত</p>
                </div>
              </div>
            </div>
            
            <div className="lg:w-1/2 space-y-8" data-aos="fade-left">
              <div>
                <h2 className="text-[#1c6f46] text-3xl md:text-4xl font-black leading-tight mb-4">
                  কুরআন-সুন্নাহভিত্তিক বিশুদ্ধ ইসলামী শিক্ষা ও আকিদা বিস্তার
                </h2>
                <div className="h-2 w-20 bg-[#F4C430] rounded-full"></div>
              </div>
              
              <p className="text-gray-600 text-lg leading-relaxed text-justify">
                এই মাদ্রাসা ও এতিমখানা প্রতিষ্ঠিত হয়েছে কুরআন-সুন্নাহভিত্তিক বিশুদ্ধ ইসলামী শিক্ষা ও আহলে সুন্নাত ওয়াল জামাতের আকিদা বিস্তারের লক্ষ্যে। এখানে হিফজুল কুরআন, মক্তবী শিক্ষা ও নৈতিক আত্মশুদ্ধি ও চরিত্র গঠনের প্রতি বিশেষ গুরুত্ব দেওয়া হয়।
              </p>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div className="flex items-center gap-4 p-4 bg-white rounded-xl shadow-sm border-l-4 border-[#1F7A4D]">
                  <FaQuran className="text-[#1F7A4D] text-2xl" />
                  <span className="font-bold text-gray-700">বিশুদ্ধ তিলাওয়াত</span>
                </div>
                <div className="flex items-center gap-4 p-4 bg-white rounded-xl shadow-sm border-l-4 border-[#F4C430]">
                  <FaUserCheck className="text-[#F4C430] text-2xl" />
                  <span className="font-bold text-gray-700">চরিত্র গঠন</span>
                </div>
              </div>
            </div>
          </div>
        </Container>
      </section>

      {/* ৩. লক্ষ্য ও উদ্দেশ্য (কার্ড ডিজাইন) */}
      <section className="py-20 bg-[#E8F5E9]/30">
        <Container>
          <div className="text-center mb-16" data-aos="fade-up">
            <h2 className="text-[#1F7A4D] text-3xl md:text-4xl font-black mb-4">🎯 লক্ষ্য ও উদ্দেশ্য</h2>
            <div className="h-1.5 w-20 bg-[#F4C430] mx-auto rounded-full"></div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {goals.map((goal, index) => (
              <div 
                key={index} 
                data-aos="fade-up" 
                data-aos-delay={index * 100}
                className="bg-white p-6 rounded-2xl border border-gray-100 hover:border-[#1F7A4D] hover:shadow-xl transition-all duration-300 flex items-center gap-5"
              >
                <div className="bg-[#1F7A4D] text-[#F4C430] p-4 rounded-xl shadow-lg">
                  <FaStar size={20} />
                </div>
                <p className="text-gray-700 text-lg font-bold leading-snug">{goal}</p>
              </div>
            ))}
          </div>
        </Container>
      </section>

      {/* ৪. আমাদের বৈশিষ্ট্য (আইকনিক সেকশন) */}
      <section className="py-20 md:py-28">
        <Container>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
            
            <div className="group text-center space-y-5" data-aos="fade-up">
              <div className="w-24 h-24 bg-[#E8F5E9] text-[#1F7A4D] rounded-[2.5rem] flex items-center justify-center mx-auto group-hover:bg-[#1F7A4D] group-hover:text-white group-hover:rotate-[360deg] transition-all duration-700 shadow-lg">
                <FaGraduationCap size={45} />
              </div>
              <h3 className="text-2xl font-black text-[#1F7A4D]">মানসম্মত শিক্ষা</h3>
              <p className="text-gray-500 leading-relaxed font-medium">দক্ষ ও অভিজ্ঞ শিক্ষক মন্ডলী দ্বারা প্রতিটি ছাত্রের প্রতি বিশেষ যত্ন নেওয়া হয়।</p>
            </div>

            <div className="group text-center space-y-5" data-aos="fade-up" data-aos-delay="200">
              <div className="w-24 h-24 bg-[#FFF9E6] text-[#F4C430] rounded-[2.5rem] flex items-center justify-center mx-auto group-hover:bg-[#F4C430] group-hover:text-white group-hover:rotate-[360deg] transition-all duration-700 shadow-lg">
                <FaHeart size={45} />
              </div>
              <h3 className="text-2xl font-black text-[#1F7A4D]">এতিমদের সেবা</h3>
              <p className="text-gray-500 leading-relaxed font-medium">অসহায় ও এতিম শিশুদের জন্য সম্পূর্ণ ফ্রি আবাসন ও উন্নত খাবারের ব্যবস্থা।</p>
            </div>

            <div className="group text-center space-y-5" data-aos="fade-up" data-aos-delay="400">
              <div className="w-24 h-24 bg-[#E8F5E9] text-[#1F7A4D] rounded-[2.5rem] flex items-center justify-center mx-auto group-hover:bg-[#1F7A4D] group-hover:text-white group-hover:rotate-[360deg] transition-all duration-700 shadow-lg">
                <FaQuran size={45} />
              </div>
              <h3 className="text-2xl font-black text-[#1F7A4D]">ইসলামী পরিবেশ</h3>
              <p className="text-gray-500 leading-relaxed font-medium">বিশুদ্ধ আকিদা ও সুন্নাহ মোতাবেক জীবন পরিচালনায় উৎসাহিত করা হয়।</p>
            </div>

          </div>
        </Container>
      </section>

    </div>
  );
};

export default AboutHome;