import React from "react";
import Container from "./../commoncomponents/Container";
// আগের প্রম্পট অনুযায়ী দাদার ছবি shahazam.png ইমপোর্ট করা হলো
import dadaImage from "../../assets/shahazam.png"; 
import { Link } from 'react-router-dom';
import { FaQuoteLeft, FaArrowRight } from "react-icons/fa";

const AboutTWo = () => {
  return (
    <section className="py-12 md:py-24 bg-white overflow-hidden">
      <Container>
        <div className="flex flex-col lg:flex-row gap-12 items-center lg:items-start">
          
          {/* বাম পাশ: ছবি ও প্রোফাইল কার্ড */}
          <div className="w-full lg:w-[40%] order-1">
            <div className="bg-white border border-[#E8F5E9] rounded-[2rem] p-4 shadow-xl relative group">
              {/* ছবি */}
              <div className="relative overflow-hidden rounded-2xl">
                <img
                  className="w-full h-auto object-cover transform transition-transform duration-700 group-hover:scale-105"
                  src={dadaImage}
                  alt="ওলিয়ে কামিল হযরত শাহ্ আজম রহ."
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#1F7A4D]/80 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 flex items-end justify-center pb-6">
                   <p className="text-white font-bold text-lg">আধ্যাত্মিক রাহবার</p>
                </div>
              </div>

              {/* নাম ও জন্ম-মৃত্যু */}
              <div className="text-center mt-6 mb-2">
                <h3 className="text-[#1F7A4D] font-black text-2xl md:text-3xl mb-3 leading-tight">
                  হযরত শাহ্ আজম (রহ.)
                </h3>
                
                <div className="inline-block bg-[#FFF9E6] rounded-full px-6 py-2 border border-[#F4C430]/30 shadow-sm">
                  <p className="text-[#D97706] font-bold text-sm md:text-base">
                    জন্ম: ১৮৯৬ ইং | ইন্তেকাল: ১৩৮৬ বাংলা
                  </p>
                </div>
                
                <p className="mt-4 text-gray-400 text-sm font-medium tracking-widest uppercase">
                  ওলিয়ে কামিল ও সমাজ সংস্কারক
                </p>
              </div>
            </div>
          </div>

          {/* ডান পাশ: সংক্ষিপ্ত জীবনী (Content) */}
          <div className="w-full lg:w-[60%] order-2">
            <div className="space-y-6">
              <div className="text-center lg:text-left">
                <h4 className="text-[#F4C430] font-bold tracking-[0.2em] uppercase text-sm mb-3">
                  আমাদের অনুপ্রেরণা
                </h4>
                <h2 className="text-[#1F7A4D] text-3xl md:text-5xl font-black mb-6 leading-tight">
                 ওলিয়ে কামিল হযরত শাহ্ আজম রহ. <br/> <span className="text-gray-700">বাতিঘর</span>
                </h2>
                <div className="h-1.5 w-24 bg-[#F4C430] rounded-full mx-auto lg:mx-0"></div>
              </div>

              <div className="text-gray-600 leading-relaxed text-justify text-base md:text-lg space-y-5">
                <p>
                  উপমহাদেশের আধ্যাত্মিক আকাশের এক উজ্জ্বল নক্ষত্র <strong className="text-[#1F7A4D]">ওলিয়ে কামিল হযরত শাহ্ আজম (রহ.)</strong>। ১৮৯৬ সালে মৌলভীবাজারের ভানুগাছের রামপাশা গ্রামে এক সম্ভ্রান্ত ধার্মিক পরিবারে তিনি জন্মগ্রহণ করেন।
                </p>
                
                <p>
                  তিনি ছিলেন একজন দুনিয়াবিমুখ আল্লাহওয়ালা ব্যক্তিত্ব। জাগতিক চাকরিবাকরি বা বিলাসিতার প্রতি তাঁর কোনো মোহ ছিল না। তাঁর জীবনের মূল লক্ষ্য ছিল মানুষের সেবা করা এবং মানুষকে আল্লাহ ও তাঁর রাসুল (সা.)-এর পথে পরিচালিত করা।
                </p>

                <div className="bg-[#F0F7F4] p-6 rounded-2xl border-l-4 border-[#1F7A4D] relative">
                  <FaQuoteLeft className="text-[#1F7A4D]/20 text-4xl absolute top-4 left-4" />
                  <p className="relative z-10 italic font-medium text-gray-700 pl-6">
                    "সুদীর্ঘ ৫০ বছর তিনি দ্বীনের খেদমতে নিজেকে উৎসর্গ করেছিলেন। মসজিদ, মাদ্রাসা, খানকাহ্ প্রতিষ্ঠার পাশাপাশি রাস্তাঘাট নির্মাণ ও জনকল্যাণমূলক কাজে তাঁর অবদান অবিস্মরণীয়।"
                  </p>
                </div>

                <p>
                   তিনি মৌলভীবাজারের খালিশপুরে 'গদ্দীবাড়ী' প্রতিষ্ঠা করেন এবং ঐতিহাসিক খোজার মসজিদ সংস্কারসহ অসংখ্য দ্বীনি প্রতিষ্ঠান আবাদ করেন।
                </p>
              </div>
              
              {/* বাটন (Fixed Version) */}
              <div className="pt-6 flex justify-center lg:justify-start">
                <Link to={'/biographyTwo'}>
                  <button className="flex items-center gap-3 bg-[#1F7A4D] text-white px-8 py-4 rounded-full font-bold hover:bg-[#F4C430] hover:text-[#1F7A4D] transition-all duration-300 shadow-lg hover:shadow-xl active:scale-95">
                    বিস্তারিত জীবনী পড়ুন 
                    <FaArrowRight />
                  </button>
                </Link>
              </div>
            </div>
          </div>

        </div>
      </Container>
    </section>
  );
};

export default AboutTWo;