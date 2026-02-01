import React, { useEffect } from "react";
import { 
  FaUserCircle, FaGraduationCap, FaBriefcase, FaPrayingHands, 
  FaClock, FaHeart, FaMosque, FaRoad, FaUsers, FaBook, FaHammer 
} from "react-icons/fa";
import AOS from "aos";
import "aos/dist/aos.css";
// ছবি ইমপোর্ট (আপনার পাথ অনুযায়ী ঠিক থাকবে)
import scholarImgtwo from "../assets/shahazam.png"; 
import Container from './../components/commoncomponents/Container';

const BiographyTwo = () => {
  useEffect(() => {
    AOS.init({ duration: 1000, once: true });
  }, []);
 
  // গ্রিড ডাটা (সংক্ষিপ্ত তথ্যগুলো এখানে)
  const infoBlocks = [
    {
      id: 1,
      title: "জন্ম ও বংশ পরিচয়",
      desc: "১৮৯৬ সালে ভানুগাছের রামপাশা গ্রামে এক সম্ভ্রান্ত ধার্মিক পরিবারে জন্মগ্রহণ করেন। পিতা: শেখ মোহাম্মদ ধনাই মিয়া এবং মাতা: হালিমা বিবি।",
      icon: <FaUserCircle />,
      color: "bg-blue-50 text-blue-600"
    },
    {
      id: 2,
      title: "শিক্ষা জীবন",
      desc: "পারিবারিক মক্তব ও স্থানীয় প্রাইমারী স্কুলে প্রাথমিক শিক্ষা অর্জনের পর তিনি নিজ উদ্যোগে উচ্চ শিক্ষা লাভ করেন।",
      icon: <FaGraduationCap />,
      color: "bg-green-50 text-green-600"
    },
    {
      id: 3,
      title: "সাংসারিক ও ত্যাগী জীবন",
      desc: "মাত্র ৩৩ বছর সাংসারিক জীবন যাপনের পর ১৯২৯ সাল থেকে তিনি সংসার ত্যাগী হন। সুদীর্ঘ ৫০ বছর দ্বীনের মেহনতে কাটান। তাঁর ২ ছেলে (মোহাম্মদ আছরব উল্লাহ, মাওলানা মোশাররফ আলী) ও ১ মেয়ে (আছতরী বিবি) ছিলেন।",
      icon: <FaUsers />,
      color: "bg-purple-50 text-purple-600"
    },
    {
      id: 4,
      title: "গদ্দীবাড়ী ও ওয়াকফ",
      desc: "মৌলভীবাজার খালিশপুরে দাদা পীর হযরত খলিলুর রহমান নন্দনপুরী (রহ.) এর নামে 'দারায়ে খলিলিয়া' ও খানকাহ্ প্রতিষ্ঠা করেন। সেখানকার সমস্ত সম্পদ তিনি বড় পীর আব্দুল কাদির জিলানী (রহ.) এর নামে ওয়াকফ করে দেন।",
      icon: <FaMosque />,
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
            ওলিয়ে কামিল হযরত শাহ্ আজম (রহ.)
          </h2>
          <div className="flex justify-center items-center gap-4 text-gray-500 font-bold flex-wrap">
            <span className="flex items-center gap-2 bg-white px-4 py-1 rounded-full shadow-sm">
              জন্ম: ১৮৯৬ ইং
            </span>
            <span className="text-[#F4C430] hidden md:block">●</span>
            <span className="flex items-center gap-2 bg-white px-4 py-1 rounded-full shadow-sm">
              ইন্তেকাল: ১৩৮৬ বাংলা (২৯ শ্রাবণ)
            </span>
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
          
          {/* Left Side: Image, Quote & Spiritual Info */}
          <div className="lg:col-span-5 space-y-8" data-aos="fade-right">
            {/* Image */}
            <div className="relative group">
              <div className="absolute -inset-4 bg-[#1F7A4D]/10 rounded-[3rem] blur-xl group-hover:bg-[#F4C430]/10 transition-all duration-500"></div>
              <div className="relative overflow-hidden rounded-[2.5rem] border-8 border-white shadow-2xl">
                <img 
                  src={scholarImgtwo} 
                  alt="Hazrat Shah Azam Rh." 
                  className="w-full h-auto object-cover transform transition-transform duration-700 group-hover:scale-105"
                />
              </div>
            </div>

            {/* Philosophy Quote */}
            <div className="bg-[#1F7A4D] p-8 rounded-[2rem] text-white relative shadow-xl">
              <div className="absolute -top-4 left-8 text-4xl text-[#F4C430] font-serif">"</div>
              <p className="italic leading-relaxed text-lg">
                তাঁর নেশা ছিল মানুষের সেবা করা। আর নিজে আল্লাহ তাআলাকে চিনা এবং মানুষকেও আল্লাহ ও তাঁর রাসুল (সা.) মুখী বানানো। এই লক্ষ্যেই তিনি জীবন উৎসর্গ করেন।
              </p>
              <h5 className="mt-4 font-bold text-[#F4C430] text-right">— জীবন দর্শন</h5>
            </div>
            
            {/* Spiritual Lineage */}
            <div className="bg-white p-6 rounded-[2rem] border border-gray-100 shadow-lg">
              <h4 className="text-[#1F7A4D] font-bold flex items-center gap-2 mb-3">
                <FaPrayingHands className="text-[#F4C430]" /> আধ্যাত্মিক ধারা (বাইয়াত)
              </h4>
              <ul className="space-y-3 text-gray-600 text-sm leading-relaxed">
                <li className="flex gap-2">
                  <span className="text-[#F4C430] font-bold">➢</span>
                  <span><strong>মুর্শিদ:</strong> ভারতের কৈলাশহরের বিশিষ্ট মরমী কবি হযরত আল্লামা শাহ্ ইয়াছিন (রহ.)। তিনি তাঁর একমাত্র খলিফা ছিলেন।</span>
                </li>
                <li className="flex gap-2">
                  <span className="text-[#F4C430] font-bold">➢</span>
                  <span><strong>দাদা পীর:</strong> নোয়াখালীর লক্ষ্মীপুর নিবাসী হযরত মাওলানা শাহ খলিলুর রহমান নন্দনপুরী (রহ.)।</span>
                </li>
              </ul>
            </div>
          </div>

          {/* Right Side: Detailed Sections */}
          <div className="lg:col-span-7 space-y-8" data-aos="fade-left">
            
            {/* Grid for Birth, Edu, Family, Gaddibari */}
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

            {/* Social Work & Contributions (Detailed) */}
            <div className="bg-[#E8F5E9] p-8 rounded-3xl border border-[#1F7A4D]/10">
              <h4 className="text-[#1F7A4D] font-bold flex items-center gap-2 mb-4 text-xl">
                <FaHammer className="text-[#F4C430]" /> কর্মজীবন ও সমাজসেবা
              </h4>
              <p className="text-gray-700 text-sm mb-4">
                চাকরির প্রতি মোহ ছিল না। তিনি বিভিন্ন স্থানে মসজিদ, মাদ্রাসা, খানকাহ, রাস্তাঘাট ও পুল-কালভার্ট নির্মাণ করেন।
              </p>
              <ul className="space-y-3">
                <li className="flex items-start gap-3 bg-white p-3 rounded-xl shadow-sm">
                  <span className="text-[#F4C430] mt-1"><FaRoad /></span>
                  <span className="text-sm text-gray-600">
                    <strong>ভানুবিল রাস্তা নির্মাণ:</strong> গভীর জলাশয় ও গর্ত ভরাট করে নিজ হাতে রাস্তা চলাচলের উপযোগী করেন। বর্তমানে এটি "হযরত শাহ আজম (রহ.) রোড" নামে পরিচিত।
                  </span>
                </li>
                <li className="flex items-start gap-3 bg-white p-3 rounded-xl shadow-sm">
                  <span className="text-[#F4C430] mt-1"><FaMosque /></span>
                  <span className="text-sm text-gray-600">
                    <strong>ঐতিহাসিক সংস্কার:</strong> গয়গড় খোজার মসজিদ (১৪৭৬ ইং) জঙ্গল পরিষ্কার করে সংস্কার করেন। এছাড়া ৩৬০ আউলিয়ার সফর সঙ্গী শাহ ফাত্তাহ (রহ.) ও হাজী রসুল (রহ.) এর মাজার সংস্কার ও পুকুর খনন করেন।
                  </span>
                </li>
                <li className="flex items-start gap-3 bg-white p-3 rounded-xl shadow-sm">
                  <span className="text-[#F4C430] mt-1"><FaBriefcase /></span>
                  <span className="text-sm text-gray-600">
                    <strong>অন্যান্য অবদান:</strong> জাঙ্গালিয়া মোকামটিলায় কবরস্থান উন্নয়ন, হযরত শাহ ইয়াবাদশাহ (রহ.) এর মাজার সন্ধান এবং ভারত ও কমলগঞ্জের বিভিন্ন স্থানে ওলিদের মাজার সংরক্ষণ ও মুসল্লীদের ওজুর সুবিধার্থে পুকুর খনন।
                  </span>
                </li>
              </ul>
            </div>

            {/* Worship Style (Ibadat) */}
            <div className="bg-white p-8 rounded-3xl border-l-4 border-[#F4C430] shadow-sm">
               <h4 className="text-[#1F7A4D] font-bold flex items-center gap-2 mb-3">
                  <FaHeart className="text-[#F4C430]" /> ইবাদত ও রিয়াজত
               </h4>
               <p className="text-gray-600 text-sm leading-relaxed">
                 তিনি আল্লাহ তায়ালাকে এমনভাবে স্মরণ করতেন যেন তিনি দুনিয়াতে নেই। আল্লাহ শব্দে শ্বাস টান দেওয়ার পর ৪০-৪৫ মিনিট স্তব্ধ থাকতেন। ভক্তদের মতে, জিকিরের সময় মনে হতো তিনি আল্লাহকে দেখছেন। তাঁর জবানে সর্বদা "লা ইলাহা ইল্লাল্লাহু মুহাম্মাদুর রাসুলুল্লাহ" জারি ছিল।
               </p>
            </div>

            {/* Institutions & Book Info */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
               {/* Institutions */}
               <div className="bg-white p-6 rounded-3xl border border-gray-100 shadow-sm">
                  <h4 className="text-[#1F7A4D] font-bold flex items-center gap-2 mb-3">
                    <FaBriefcase className="text-[#F4C430]" /> নামানুসারে প্রতিষ্ঠান
                  </h4>
                  <ul className="text-sm text-gray-600 list-disc list-inside space-y-1">
                     <li>গয়গড় শাহ্ আজম (রহ.) ও হাসান আলী মাদ্রাসা</li>
                     <li>শাহ আজম (রহ.) দরগাহ্ জামে মসজিদ</li>
                     <li>হিফজুল কুরআন দরগাহ্ মডেল মাদ্রাসা</li>
                     <li>ভানুবিল গ্রামে শাহ আজম (রহ.) রোড</li>
                  </ul>
               </div>

               {/* Biography Book Info */}
               <div className="bg-[#FFF9E6] p-6 rounded-3xl border border-[#F4C430]/20 shadow-sm">
                  <h4 className="text-[#1F7A4D] font-bold flex items-center gap-2 mb-3">
                    <FaBook className="text-[#F4C430]" /> জীবনীগ্রন্থ
                  </h4>
                  <p className="text-xs text-gray-600 mb-2">
                    তাঁর নাতি <strong>আলহাজ্ব হযরত মাওলানা শাহ্ মোহাম্মদ মোশাহিদ আলী (রহ.)</strong> জীবনীগ্রন্থের কাজ শুরু করেছিলেন। পাণ্ডুলিপির কাজ চলছে।
                  </p>
                  <p className="text-xs font-bold text-[#1F7A4D]">
                    তথ্য দিতে যোগাযোগ: 01611816603
                  </p>
               </div>
            </div>

            {/* Final Moments Note */}
            <div className="p-6 bg-gradient-to-r from-[#1F7A4D] to-[#145c37] rounded-3xl text-white shadow-xl">
              <h4 className="font-bold text-xl mb-2 flex items-center gap-2">
                <FaClock className="text-[#F4C430]" /> ওফাত ও মাজার শরীফ
              </h4>
              <p className="opacity-90 leading-relaxed text-sm">
                তিনি ১৩৮৬ বাংলা সনের ২৯ শ্রাবণ (পবিত্র রমজান মাসে) মহান রবের ডাকে সাড়া দিয়ে ইন্তেকাল করেন। তাঁর মাজার শরীফ মৌলভীবাজার জেলার কমলগঞ্জ পৌরসভার ৮ নং ওয়ার্ডের রামপাশা গ্রামে অবস্থিত।
              </p>
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
};

export default BiographyTwo;