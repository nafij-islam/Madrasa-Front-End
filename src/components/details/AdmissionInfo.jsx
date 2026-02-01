import React, { useEffect } from "react";
import { FaFileAlt, FaIdCard, FaImage, FaMapMarkerAlt, FaBullhorn, FaCheckCircle } from "react-icons/fa";
import AOS from "aos";
import "aos/dist/aos.css";
import Container from "../commoncomponents/Container";
import { Link } from 'react-router-dom';

const AdmissionInfo = () => {
  useEffect(() => {
    AOS.init({ duration: 1000, once: true });
  }, []);

  const requirements = [
    {
      id: 1,
      text: "জন্ম নিবন্ধনের ফটোকপি",
      icon: <FaFileAlt className="text-[#1F7A4D]" />,
    },
    {
      id: 2,
      text: "ছাত্রের পাসপোর্ট সাইজের ছবি (২ কপি)",
      icon: <FaImage className="text-[#1F7A4D]" />,
    },
    {
      id: 3,
      text: "অভিভাবকের জাতীয় পরিচয়পত্রের (NID) ফটোকপি",
      icon: <FaIdCard className="text-[#1F7A4D]" />,
    },
  ];

  return (
    <section className="py-16 md:py-24 bg-white relative overflow-hidden">
      {/* Decorative Background Elements */}
      <div className="absolute top-0 right-0 w-64 h-64 bg-[#E8F5E9] rounded-full -mr-32 -mt-32 opacity-50"></div>
      <div className="absolute bottom-0 left-0 w-64 h-64 bg-[#FFF9E6] rounded-full -ml-32 -mb-32 opacity-50"></div>

      <Container>
        <div className="max-w-5xl mx-auto">
          <div className="flex flex-col lg:flex-row gap-12 items-center">
            
            {/* Left Side: Badge & Title */}
            <div className="w-full lg:w-1/2 text-center lg:text-left" data-aos="fade-right">
              <div className="inline-flex items-center gap-2 bg-[#1F7A4D] text-[#F4C430] px-5 py-2 rounded-full mb-6 shadow-lg animate-bounce">
                <FaBullhorn />
                <span className="font-bold text-sm md:text-base uppercase tracking-wider">ভর্তি চলছে!!</span>
              </div>
              <h2 className="text-[#1F7A4D] text-3xl md:text-5xl font-black mb-6 leading-tight">
                আপনার সন্তানকে <br /> 
                <span className="text-[#F4C430]">দ্বীনি শিক্ষায়</span> গড়ে তুলুন
              </h2>
              <p className="text-gray-600 text-lg mb-8 leading-relaxed">
                হিফজুল কুরআন, নূরানী ও মক্তব বিভাগে সীমিত আসনে ভর্তি চলছে। আদর্শ মানুষ গড়ার এই মিছিলে আপনার সন্তানকেও শরিক করুন।
              </p>
              
              <div className="p-6 bg-[#E8F5E9] rounded-2xl border-l-8 border-[#1F7A4D] inline-block shadow-sm">
                <div className="flex items-center gap-4 text-[#1F7A4D]">
                  <FaMapMarkerAlt size={24} />
                  <div className="text-left">
                    <h4 className="font-bold text-lg">সরাসরি যোগাযোগ করুন</h4>
                    <p className="font-medium opacity-80 uppercase tracking-tight">মাদ্রাসা অফিস কক্ষ</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Right Side: Admission Requirements Card */}
            <div className="w-full lg:w-1/2" data-aos="fade-left">
              <div className="bg-white p-8 md:p-10 rounded-[30px] shadow-2xl border border-gray-100 relative z-10">
                <div className="absolute top-0 right-0 bg-[#F4C430] text-[#1F7A4D] py-2 px-6 rounded-tr-[30px] rounded-bl-[20px] font-black text-sm uppercase">
                  Admission Info
                </div>
                
                <h3 className="text-[#1F7A4D] text-2xl font-bold mb-8 flex items-center gap-3">
                  📝 ভর্তির প্রয়োজনীয় কাগজপত্র:
                </h3>

                <ul className="space-y-5">
                  {requirements.map((item) => (
                    <li key={item.id} className="flex items-center gap-4 p-4 rounded-xl bg-[#F9FBF9] border border-transparent hover:border-[#1F7A4D] hover:bg-white transition-all group">
                      <div className="bg-white p-3 rounded-lg shadow-sm group-hover:scale-110 transition-transform">
                        {item.icon}
                      </div>
                      <span className="text-gray-700 font-bold text-lg leading-tight">
                        {item.text}
                      </span>
                    </li>
                  ))}
                </ul>

                <div className="mt-10 pt-6 border-t border-dashed border-gray-200 text-center">
                  <p className="text-gray-500 font-medium italic mb-4">
                    "সঠিক সময়, সঠিক সিদ্ধান্ত - আপনার সন্তানের সুন্দর ভবিষ্যৎ"
                  </p>
                  <Link to={'/'}>
                     <button className="w-full bg-[#1F7A4D] text-white py-4 rounded-xl font-bold text-lg shadow-lg hover:bg-[#F4C430] hover:text-[#1F7A4D] transition-all transform hover:-translate-y-1">
                    অফিস লোকেশন দেখুন
                  </button>
                  </Link>
                </div>
              </div>
            </div>

          </div>
        </div>
      </Container>
    </section>
  );
};

export default AdmissionInfo;