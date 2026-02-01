import React from "react";
import Container from "./Container"; 

const Header = () => {
  return (
    <header className="bg-[#F0F9F1] border-b-2 border-[#1F7A4D] shadow-sm py-2 relative overflow-hidden">
      {/* Background Decor */}
      <div className="absolute top-0 left-0 w-full h-full opacity-10 pointer-events-none">
        <div className="w-16 h-16 bg-[#1F7A4D] rounded-full blur-2xl absolute -top-4 -left-4"></div>
        <div className="w-16 h-16 bg-[#F4C430] rounded-full blur-2xl absolute -bottom-4 -right-4"></div>
      </div>

      <Container>
        <div className="flex flex-col items-center text-center relative z-10">
          
          {/* ১. আরবী নাম (একদম উপরে, ছোট স্পেস) */}
          <h2 className="text-[#2F5BA2] text-sm sm:text-2xl font-serif font-bold leading-none mb-1 mt-0.5">
            حضرت شاه عظم رح حفظ القران درغه مدل مدرسة
          </h2>

          {/* ২. স্থাপিত ব্যাজ (কম্প্যাক্ট) */}
          <div className="inline-block bg-[#1F7A4D] text-white lg:my-2 text-[9px] sm:text-xs px-2 py-1 rounded-full shadow-sm mb-1 leading-none">
            স্থাপিতঃ ২০১৮ ইং | ১৪৩৯-৪০ হিজরী
          </div>

          {/* ৩. মাদ্রাসার নাম (টাইট স্পেসিং) */}
          <div className="mb-2 w-full">
            <h1 className="text-[#1F7A4D] text-base sm:text-2xl md:text-3xl lg:my-2 font-black leading-tight drop-shadow-sm">
              হযরত শাহ্ আজম (রহ.) হিফজুল কোরআন দরগাহ্ মডেল মাদ্রাসা
            </h1>
            <p className="text-[#4B5563] text-[10px] sm:text-sm font-medium tracking-wide leading-tight mt-0.5">
              Hazrat Shah Azam (Rah.) Hifzul Quran Dorgah Model Madrasah
            </p>
          </div>

          {/* ৪. প্রতিষ্ঠাতা ও পরিচালক (Ultra Compact Grid) */}
          <div className="w-full max-w-4xl grid grid-cols-2 gap-2">
            
            {/* বাম পাশ: প্রতিষ্ঠাতা */}
            <div className="bg-white border border-[#1F7A4D]/20 rounded-lg p-1.5 shadow-sm flex flex-col items-center justify-center text-center h-full">
              <span className="text-[#1F7A4D] text-[9px] sm:text-xs font-bold border-b border-[#F4C430] leading-none pb-0.5 mb-0.5">
                প্রতিষ্ঠাতা
              </span>
              <p className="text-[#1F7A4D] font-bold text-[9px] sm:text-sm leading-tight line-clamp-2">
                উস্তাদুল উলামা শাহ্ সুফি হযরত মাওলানা মোশাররফ আলী (রহ.)
              </p>
            </div>

            {/* ডান পাশ: পরিচালক */}
            <div className="bg-white border border-[#1F7A4D]/20 rounded-lg p-1.5 shadow-sm flex flex-col items-center justify-center text-center h-full">
              <span className="text-[#1F7A4D] text-[9px] sm:text-xs font-bold border-b border-[#F4C430] leading-none pb-0.5 mb-0.5">
                আমৃত্যু পরিচালক
              </span>
              <p className="text-[#1F7A4D] font-bold text-[9px] sm:text-sm leading-tight line-clamp-2">
                আলহাজ্ব হযরত মাওলানা শাহ্ মোশাহিদ আলী আজমী (রহ.)
              </p>
            </div>

          </div>
        </div>
      </Container>
    </header>
  );
};

export default Header;