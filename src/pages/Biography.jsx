import React, { useEffect } from "react";
import { 
  FaUserCircle, FaGraduationCap, FaBriefcase, FaPrayingHands, 
  FaClock, FaHeart, FaMosque, FaBook, FaUsers, FaPlane 
} from "react-icons/fa";
import AOS from "aos";
import "aos/dist/aos.css";
// ছবি ইমপোর্ট (আপনার পাথ অনুযায়ী ঠিক করে নেবেন)
import scholarImg from "../assets/dada ajmi.jpeg"; 
import Container from './../components/commoncomponents/Container';

const Biography = () => {
  useEffect(() => {
    AOS.init({ duration: 1000, once: true });
  }, []);
 
  // গ্রিড ডাটা (সংক্ষিপ্ত তথ্যগুলো এখানে)
  const infoBlocks = [
    {
      id: 1,
      title: "জন্ম ও বংশ পরিচয়",
      desc: "১ জুলাই ১৯৬৬ ইং শুক্রবার, মৌলভীবাজারের কমলগঞ্জ পৌরসভার রামপাশা গ্রামে এক সম্ভ্রান্ত ওলি পরিবারে জন্মগ্রহণ করেন। পিতা: ওলিয়ে কামিল হযরত মাওলানা শাহ মোহাম্মদ মোশাররফ আলী (রহ.) এবং মাতা: রত্নগর্ভা মোছাঃ আয়েশা বেগম।",
      icon: <FaUserCircle />,
      color: "bg-blue-50 text-blue-600"
    },
    {
      id: 2,
      title: "শিক্ষা জীবন",
      desc: "ভানুগাছ সফাত আলী মাদ্রাসা থেকে দাখিল ও আলিম, কুমিল্লা পিপুলিয়া মাদ্রাসা থেকে ফাজিল এবং সোনাকান্দা কামিল মাদ্রাসা থেকে কামিল (মুফতি) ডিগ্রি অর্জন করেন।",
      icon: <FaGraduationCap />,
      color: "bg-green-50 text-green-600"
    },
    {
      id: 3,
      title: "কর্মজীবন",
      desc: "মইনপুর জালালিয়া মাদ্রাসার সুপারিনটেনডেন্ট এবং পরবর্তীতে সিলেট গোয়ালাবাজার আদর্শ উচ্চ বিদ্যালয়ে আমৃত্যু শিক্ষকতা করেন। তিনি ছিলেন প্রতিষ্ঠানের প্রতিষ্ঠাকালীন উস্তাদ।",
      icon: <FaBriefcase />,
      color: "bg-purple-50 text-purple-600"
    },
    {
      id: 4,
      title: "আধ্যাত্মিকতা ও খেলাফত",
      desc: "পিতার নিকট তাসাউফের শিক্ষা এবং আলহাজ্ব হযরত মাওলানা কাজী রফিক আহমদ নকশাবন্দী ছাহেবের নিকট বাইয়াত গ্রহণ করেন। তিনি শাহ আজম (রহ.) দরগাহ্ শরীফের গদ্দীনিশিন ছিলেন।",
      icon: <FaPrayingHands />,
      color: "bg-orange-50 text-orange-600"
    }
  ];

  return (
    <section className="py-20 bg-[#F9FBF9] overflow-hidden">
      <Container>
        {/* Title Section */}
        <div className="text-center mb-16" data-aos="fade-up">
          <h4 className="text-[#F4C430] font-bold tracking-[3px] uppercase text-sm mb-2">জীবন ও কর্ম</h4>
          <h2 className="text-[#1F7A4D] text-3xl md:text-5xl font-black mb-4">
            আলহাজ্ব হযরত মাওলানা মুফতী শাহ্ মোহাম্মদ মোশাহিদ আলী আজমী (রহ.)
          </h2>
          <div className="flex justify-center items-center gap-4 text-gray-500 font-bold flex-wrap">
            <span className="flex items-center gap-2 bg-white px-4 py-1 rounded-full shadow-sm">
              জন্ম: ১ জুলাই ১৯৬৬
            </span>
            <span className="text-[#F4C430] hidden md:block">●</span>
            <span className="flex items-center gap-2 bg-white px-4 py-1 rounded-full shadow-sm">
              ইন্তেকাল: ২৭ ফেব্রুয়ারি ২০২৪
            </span>
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
          
          {/* Left Side: Image, Quote & Highlights */}
          <div className="lg:col-span-5 space-y-8" data-aos="fade-right">
            {/* Image */}
            <div className="relative group">
              <div className="absolute -inset-4 bg-[#1F7A4D]/10 rounded-[3rem] blur-xl group-hover:bg-[#F4C430]/10 transition-all duration-500"></div>
              <div className="relative overflow-hidden rounded-[2.5rem] border-8 border-white shadow-2xl">
                <img 
                  src={scholarImg} 
                  alt="Mufti Shah Mohammad Moshahid Ali Azmi" 
                  className="w-full h-auto object-cover transform transition-transform duration-700 group-hover:scale-105"
                />
              </div>
            </div>

            {/* Philosophy Quote */}
            <div className="bg-[#1F7A4D] p-8 rounded-[2rem] text-white relative shadow-xl">
              <div className="absolute -top-4 left-8 text-4xl text-[#F4C430] font-serif">"</div>
              <p className="italic leading-relaxed text-lg">
                তিনি ছাত্রদের 'বাবা' বলে ডাকতেন এবং মাথায় হাত বুলিয়ে দোয়া করতেন। এতিম ও অসচ্ছল ছাত্রদের শিক্ষা নিশ্চিত করতে তিনি ছিলেন সদা সচেষ্ট।
              </p>
              <h5 className="mt-4 font-bold text-[#F4C430] text-right">— ছাত্রবৎসল উস্তাদ</h5>
            </div>
            
            {/* Family Info */}
            <div className="bg-white p-6 rounded-[2rem] border border-gray-100 shadow-lg">
              <h4 className="text-[#1F7A4D] font-bold flex items-center gap-2 mb-3">
                <FaUsers className="text-[#F4C430]" /> পারিবারিক জীবন
              </h4>
              <p className="text-gray-600 text-sm leading-relaxed">
                তিনি ১ ছেলে ও ৩ মেয়ের জনক। একমাত্র ছেলে ঢাকা দারুন নাজাত সিদ্দিকিয়া কামিল মাদ্রাসা থেকে কামিল সম্পন্ন করে বর্তমানে সুপারিনটেনডেন্ট ও খতিব হিসেবে কর্মরত আছেন।
              </p>
            </div>
          </div>

          {/* Right Side: Detailed Sections */}
          <div className="lg:col-span-7 space-y-8" data-aos="fade-left">
            
            {/* Grid for Birth, Edu, Work, Spiritual */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {infoBlocks.map((item) => (
                <div key={item.id} className="bg-white p-6 rounded-3xl border border-gray-100 shadow-sm hover:shadow-xl transition-all duration-300">
                  <div className={`${item.color} w-12 h-12 rounded-2xl flex items-center justify-center text-xl mb-4`}>
                    {item.icon}
                  </div>
                  <h4 className="text-[#1F7A4D] font-bold text-lg mb-2">{item.title}</h4>
                  <p className="text-gray-600 text-sm leading-relaxed">{item.desc}</p>
                </div>
              ))}
            </div>

            {/* Social Work & Foundation (Detailed) */}
            <div className="bg-[#E8F5E9] p-8 rounded-3xl border border-[#1F7A4D]/10">
              <h4 className="text-[#1F7A4D] font-bold flex items-center gap-2 mb-4 text-xl">
                <FaMosque className="text-[#F4C430]" /> প্রতিষ্ঠান ও সমাজসেবা
              </h4>
              <ul className="space-y-4">
                <li className="flex items-start gap-3 bg-white p-4 rounded-xl shadow-sm">
                  <span className="text-[#F4C430] mt-1 font-bold">➢</span>
                  <span className="text-sm text-gray-600">
                    <strong>মাদ্রাসা প্রতিষ্ঠা:</strong> ২০১৮ সালে দাদাপীর শাহ্ আজম (রহ.) এর মাজার সংলগ্ন "হযরত শাহ্ আজম (রহ.) হিফজুল কুরআন দরগাহ্ মডেল মাদ্রাসা" প্রতিষ্ঠা করেন এবং আমৃত্যু পরিচালক ছিলেন।
                  </span>
                </li>
                <li className="flex items-start gap-3 bg-white p-4 rounded-xl shadow-sm">
                  <span className="text-[#F4C430] mt-1 font-bold">➢</span>
                  <span className="text-sm text-gray-600">
                    <strong>দরগাহ্ ফাউন্ডেশন:</strong> তিনি "হযরত শাহ্ আজম (রহ.) দরগাহ্ ফাউন্ডেশন"-এর সভাপতি ছিলেন। এর মাধ্যমে তিনি গৃহনির্মাণ সামগ্রী, টিউবওয়েল ও আর্থিক সহায়তা প্রদান করতেন।
                  </span>
                </li>
                <li className="flex items-start gap-3 bg-white p-4 rounded-xl shadow-sm">
                  <span className="text-[#F4C430] mt-1 font-bold">➢</span>
                  <span className="text-sm text-gray-600">
                    <strong>মসজিদের খেদমত:</strong> তিনি দরগাহ্ জামে মসজিদের প্রতিষ্ঠাতা সদস্য, ইমাম ও খতিব ছিলেন। মসজিদের উন্নয়নে দেশ-বিদেশ থেকে ফান্ড সংগ্রহ করতেন।
                  </span>
                </li>
              </ul>
            </div>

            {/* Character & Hajj */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
               {/* Character */}
               <div className="bg-white p-6 rounded-3xl border border-gray-100 shadow-sm">
                  <h4 className="text-[#1F7A4D] font-bold flex items-center gap-2 mb-3">
                    <FaHeart className="text-[#F4C430]" /> চরিত্র ও ইবাদত
                  </h4>
                  <p className="text-sm text-gray-600 leading-relaxed">
                     তিনি ছিলেন অত্যন্ত নম্র, ভদ্র ও ক্ষমাশীল। কেউ বেয়াদবি করলেও তিনি সহজে মাফ করে দিতেন। সুললিত কণ্ঠে মোনাজাত করতেন যা মানুষের হৃদয়ে নাড়া দিত। জীবনে এক ওয়াক্ত নামাজও কাজা করেননি।
                  </p>
               </div>

               {/* Hajj */}
               <div className="bg-[#FFF9E6] p-6 rounded-3xl border border-[#F4C430]/20 shadow-sm">
                  <h4 className="text-[#1F7A4D] font-bold flex items-center gap-2 mb-3">
                    <FaPlane className="text-[#F4C430]" /> পবিত্র হজ্জ পালন
                  </h4>
                  <p className="text-sm text-gray-600 leading-relaxed">
                    ইন্তেকালের কয়েক মাস আগে ১০ জুন ২০২৩ সালে তিনি পবিত্র হজ্জ পালন করেন। মদিনা শরীফে ৪৫ দিন অবস্থান করে রওজা মোবারক জিয়ারত ও হজ্জের সকল কার্যক্রম সম্পাদন করেন।
                  </p>
               </div>
            </div>

            {/* Biography Work */}
             <div className="bg-white p-6 rounded-3xl border-l-4 border-[#1F7A4D] shadow-sm">
               <h4 className="text-[#1F7A4D] font-bold flex items-center gap-2 mb-2">
                  <FaBook className="text-[#F4C430]" /> জীবনীগ্রন্থ রচনা
               </h4>
               <p className="text-sm text-gray-600 leading-relaxed">
                 তিনি ৩-৪ বছর ধরে কঠোর পরিশ্রম করে তাঁর দাদাপীর হযরত শাহ্ আজম (রহ.)-এর জীবন ও কারামতের তথ্য সংগ্রহ ও পাণ্ডুলিপি তৈরি করেন। বর্তমানে তাঁর প্রতিষ্ঠানের একজন শিক্ষক এটি প্রকাশের কাজ করছেন।
               </p>
            </div>

            {/* Final Moments Note */}
            <div className="p-6 bg-gradient-to-r from-[#1F7A4D] to-[#145c37] rounded-3xl text-white shadow-xl">
              <h4 className="font-bold text-xl mb-2 flex items-center gap-2">
                <FaClock className="text-[#F4C430]" /> শেষ বিদায় ও দাফন
              </h4>
              <p className="opacity-90 leading-relaxed text-sm">
                ২৭ ফেব্রুয়ারি ২০২৪, মঙ্গলবার বিকাল ৪:১০ মিনিটে ৬১ বছর বয়সে তিনি ইন্তেকাল করেন। দরগাহ্ সংলগ্ন মাঠে বিশাল জানাজার পর তাঁকে তাঁর দাদার স্মৃতিবিজড়িত মসজিদের পাশেই দাফন করা হয়।
              </p>
            </div>

          </div>
        </div>
      </Container>
    </section>
  );
};

export default Biography;