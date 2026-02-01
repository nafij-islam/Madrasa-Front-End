import React from "react";
import Container from "./../commoncomponents/Container";
import dada from "../../assets/dada ajmi.jpeg";
import { Link } from 'react-router-dom';
import { FaQuoteLeft, FaArrowRight } from "react-icons/fa";

const About = () => {
  return (
    <section className="py-12 md:py-24 bg-white overflow-hidden">
      <Container>
        <div className="flex flex-col lg:flex-row gap-12 items-center lg:items-start">
          
          {/* বাম পাশ: বর্ণনা (About Text) */}
          <div className="w-full lg:w-[60%] order-2 lg:order-1">
            <div className="space-y-6">
              <div className="text-center lg:text-left">
                <h4 className="text-[#F4C430] font-bold tracking-[0.2em] uppercase text-sm mb-3">
                  আমাদের কথা
                </h4>
                <h2 className="text-[#1F7A4D] text-3xl md:text-5xl font-black mb-6 leading-tight">
                  আদর্শ মানুষ গড়ার <br/> <span className="text-gray-700">স্বপ্ন ও সাধনা</span>
                </h2>
                <div className="h-1.5 w-24 bg-[#F4C430] rounded-full mx-auto lg:mx-0"></div>
              </div>

              <div className="text-gray-600 leading-relaxed text-justify text-base md:text-lg space-y-5">
                <p>
                  আলহামদুলিল্লাহ, ওয়াসসালাতু ওয়াসসালামু আলা রাসূলিল্লাহ। আম্মা বা'দ- সর্বশ্রেষ্ঠ জাতি মুসলিম উম্মাহ। এ জাতি শিক্ষা, সংস্কৃতি, অর্থনীতি, রাজনীতির স্বকীয়তা হারিয়েছে অনেক আগেই। ভেঙ্গে চুরমার হয়েছে ঈমানী-আখলাকী বুনিয়াদ। বৃটিশোত্তর ভারতীয় উপমহাদেশ তার জলন্ত স্বাক্ষী।
                </p>
                
                <p>
                  বহুমুখি সঙ্কটে নিপতিত হয় ইসলামের লালনভূমি বাংলাদেশ। ক্রমেই হারাতে থাকে ইসলামী মূল্যবোধ ও ঐতিহ্য। হুমকির মুখে পড়ে মুসলিম উম্মাহর নতুন প্রজন্ম। ষাটের দশক। নুয়ে পড়া সে উম্মাহকে জাগিয়ে তুলতে ও স্থবির দেহে প্রাণ ফিরিয়ে আনতে নতুন করে কদম ফেলে আমাদের এই মিশন।
                </p>

                <div className="bg-[#F0F7F4] p-6 rounded-2xl border-l-4 border-[#1F7A4D] relative">
                  <FaQuoteLeft className="text-[#1F7A4D]/20 text-4xl absolute top-4 left-4" />
                  <p className="relative z-10 italic font-medium text-gray-700 pl-6">
                    "ইসলাম ও সাধারণ শিক্ষার সমন্বয়ে একটি বাস্তবধর্মী শিক্ষা মিশনে আমাদের পথচলা শুরু হয়। যুগোপযোগী দক্ষ আলিমে দ্বীন এবং সমাজের সর্বস্তরের জন্য দেশপ্রেমিক, সৎ ও যোগ্য নাগরিক তৈরিই আমাদের মূল লক্ষ্য।"
                  </p>
                </div>
              </div>
              
              {/* বাটন (Animated) */}
              <div className="pt-6 flex justify-center lg:justify-start">
                <Link to={'/biography'}>
                  <button className="flex items-center gap-3 bg-[#1F7A4D] text-white px-8 py-4 rounded-full font-bold hover:bg-[#F4C430] hover:text-[#1F7A4D] transition-all duration-300 shadow-lg hover:shadow-xl active:scale-95">
                    বিস্তারিত জানুন 
                    <FaArrowRight />
                  </button>
                </Link>
              </div>
            </div>
          </div>

          {/* ডান পাশ: ছবি ও প্রোফাইল কার্ড */}
          <div className="w-full lg:w-[40%] order-1 lg:order-2">
            <div className="bg-white border border-[#E8F5E9] rounded-[2rem] p-4 shadow-xl relative group">
              {/* ছবি */}
              <div className="relative overflow-hidden rounded-2xl">
                <img
                  className="w-full h-auto object-cover transform transition-transform duration-700 group-hover:scale-105"
                  src={dada}
                  alt="মুফতি শাহ মোহাম্মদ মোশাহিদ আলী আজমী"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#1F7A4D]/80 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 flex items-end justify-center pb-6">
                   <p className="text-white font-bold text-lg">স্বপ্নদ্রষ্টা</p>
                </div>
              </div>

              {/* নাম ও জন্ম-মৃত্যু */}
              <div className="text-center mt-6 mb-2">
                <h3 className="text-[#1F7A4D] font-black text-xl md:text-2xl mb-3 leading-tight px-2">
                  আলহাজ্ব হযরত মাওলানা মুফতি শাহ মোহাম্মদ মোশাহিদ আলী আজমী (রহ.)
                </h3>
                
                <div className="inline-block bg-[#FFF9E6] rounded-full px-4 py-2 border border-[#F4C430]/30 shadow-sm">
                  <p className="text-[#D97706] font-bold text-xs md:text-sm">
                    জন্ম: ১ জুলাই ১৯৬৬ | মৃত্যু: ২৭ ফেব্রুয়ারি ২০২৪
                  </p>
                </div>
                
                <p className="mt-4 text-gray-400 text-sm font-medium tracking-widest uppercase">
                  প্রতিষ্ঠাতা ও স্বপ্নদ্রষ্টা
                </p>
              </div>
            </div>
          </div>

        </div>
      </Container>
    </section>
  );
};

export default About;