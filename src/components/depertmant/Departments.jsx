import React, { useEffect } from "react";
import { 
  FaQuran, FaBookOpen, FaMicrophoneAlt, FaSyncAlt, 
  FaHandsHelping, FaUserGraduate, FaComments 
} from "react-icons/fa";
import AOS from "aos";
import "aos/dist/aos.css";
import Container from './../commoncomponents/Container';

const Departments = () => {
  useEffect(() => {
    AOS.init({ duration: 1000, once: true });
  }, []);

  const depts = [
    {
      title: "হিফজুল কুরআন বিভাগ",
      desc: "অভিজ্ঞ হাফেজ সাহেবদের তত্ত্বাবধানে বিশুদ্ধভাবে কুরআন হিফজ করার সুব্যবস্থা।",
      icon: <FaQuran />,
      color: "border-[#1F7A4D]"
    },
    {
      title: "মক্তব বিভাগ",
      desc: "শিশুদের ইসলামের প্রাথমিক শিক্ষা ও শুদ্ধ তিলাওয়াত শেখার বুনিয়াদি বিভাগ।",
      icon: <FaBookOpen />,
      color: "border-[#F4C430]"
    },
    {
      title: "কেরাত প্রশিক্ষণ বিভাগ",
      desc: "মনমুগ্ধকর তিলাওয়াতের জন্য তাজবীদসহ বিশেষ কেরাত প্রশিক্ষণ প্রদান করা হয়।",
      icon: <FaMicrophoneAlt />,
      color: "border-[#1F7A4D]"
    },
    {
      title: "হিফজ রিভিশন বিভাগ",
      desc: "হিফজ সম্পন্নকারীদের জন্য কুরআন মুখস্থ ধরে রাখার বিশেষ পুনরাবৃত্তি শাখা।",
      icon: <FaSyncAlt />,
      color: "border-[#F4C430]"
    },
    {
      title: "এতিমখানা বিভাগ",
      desc: "এতিম ও অসহায় শিশুদের বিনামূল্যে থাকা-খাওয়া ও দ্বীনি শিক্ষার পূর্ণ নিশ্চয়তা।",
      icon: <FaHandsHelping />,
      color: "border-[#1F7A4D]"
    },
    {
      title: "দ্বীনি প্রশিক্ষণ ও নৈতিক শিক্ষা",
      desc: "আদর্শ ও সৎ চরিত্র গঠনের জন্য সুন্নাহ ভিত্তিক ব্যবহারিক ও নৈতিক শিক্ষা।",
      icon: <FaUserGraduate />,
      color: "border-[#F4C430]"
    },
    {
      title: "সাপ্তাহিক সেমিনার",
      desc: "ছাত্রদের প্রতিভা বিকাশে প্রতি সপ্তাহে বক্তৃতা ও বিতর্ক প্রতিযোগিতার আয়োজন।",
      icon: <FaComments />,
      color: "border-[#1F7A4D]"
    }
  ];

  return (
    <section className="py-20 bg-[#F9FBF9]">
      <Container>
        {/* Section Header */}
        <div className="text-center mb-16" data-aos="fade-up">
          <div className="flex justify-center items-center gap-2 mb-3">
            <div className="h-[2px] w-8 bg-[#F4C430]"></div>
            <span className="text-[#F4C430] font-bold uppercase tracking-widest text-sm">আমাদের কার্যাবলী</span>
            <div className="h-[2px] w-8 bg-[#F4C430]"></div>
          </div>
          <h2 className="text-[#1F7A4D] text-3xl md:text-5xl font-black mb-4">
            📚 আমাদের বিভাগসমূহ
          </h2>
          <p className="text-gray-600 max-w-2xl mx-auto font-medium">
            দ্বীনি শিক্ষার বিভিন্ন শাখায় আমরা উন্নত মান ও আদর্শ পরিবেশ নিশ্চিত করছি।
          </p>
        </div>

        {/* Departments Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {depts.map((dept, index) => (
            <div 
              key={index} 
              data-aos="fade-up" 
              data-aos-delay={index * 100}
              className={`group bg-white p-8 rounded-3xl border-t-8 ${dept.color} shadow-sm hover:shadow-2xl hover:-translate-y-2 transition-all duration-500`}
            >
              <div className="flex flex-col items-center text-center">
                <div className="w-16 h-16 bg-[#E8F5E9] text-[#1F7A4D] rounded-2xl flex items-center justify-center text-3xl mb-6 group-hover:bg-[#1F7A4D] group-hover:text-[#F4C430] transition-all duration-500 shadow-inner">
                  {dept.icon}
                </div>
                <h3 className="text-[#1F7A4D] text-xl font-black mb-3 group-hover:text-[#F4C430] transition-colors">
                  {dept.title}
                </h3>
                <p className="text-gray-500 leading-relaxed font-medium">
                  {dept.desc}
                </p>
              </div>
            </div>
          ))}

          {/* Special Join Card */}
          <div 
            data-aos="fade-up" 
            data-aos-delay="700"
            className="bg-[#1F7A4D] p-8 rounded-3xl flex flex-col items-center justify-center text-center shadow-xl relative overflow-hidden group"
          >
            <div className="absolute top-0 right-0 w-24 h-24 bg-[#F4C430] opacity-20 rounded-full -mr-10 -mt-10"></div>
            <h3 className="text-white text-2xl font-bold mb-4">ভর্তি চলছে!</h3>
            <p className="text-white/80 mb-6 font-medium">আপনার সন্তানকে কুরআন শিখাতে আমাদের যেকোনো বিভাগে আজই যুক্ত করুন।</p>
            <button className="bg-[#F4C430] text-[#1F7A4D] px-6 py-3 rounded-full font-bold hover:bg-white transition-all shadow-lg active:scale-95">
              যোগাযোগ করুন
            </button>
          </div>
        </div>
      </Container>
    </section>
  );
};

export default Departments;