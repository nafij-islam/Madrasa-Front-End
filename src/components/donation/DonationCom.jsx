import React, { useEffect, useState } from "react";
import { FaHeart, FaHandHoldingHeart, FaUniversity, FaMobileAlt, FaQuoteLeft, FaCheckCircle, FaLayerGroup } from "react-icons/fa";
import AOS from "aos";
import "aos/dist/aos.css";
import Container from "./../commoncomponents/Container";

const DonationCom = () => {
  useEffect(() => {
    AOS.init({ duration: 1000, once: true });
  }, []);

  const amounts = ["১০০", "২০০", "৪০০", "৫০০", "১০০০", "২০০০", "৫০০০", "১০০০০", "২০০০", "৫০০০০"];
  
  const funds = [
    "সাধারণ দান", "এতিম ফান্ড", "শিক্ষা বৃত্তি", "যাকাত ফান্ড", 
    "বাড়ী নির্মাণ", "টিউবওয়েল নির্মাণ", "শিক্ষা উপকরণ", 
    "কম্বল বিতরণ", "সুন্নাতে খৎনা", "বিবাহ ফান্ড"
  ];

  const [selectedAmount, setSelectedAmount] = useState(null);
  const [selectedFund, setSelectedFund] = useState("সাধারণ দান");

  return (
    <section className="py-16 md:py-24 bg-[#FDFFF0]">
      <Container>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
          
          {/* ১. বাম পাশ: হাদীস ও বিবরণ */}
          <div className="space-y-8" data-aos="fade-right">
            <div className="inline-flex items-center gap-2 bg-red-100 text-red-600 px-5 py-2 rounded-full shadow-sm border border-red-200">
              <FaHeart className="animate-pulse" />
              <span className="font-bold text-sm uppercase tracking-wider">দান ও সহযোগিতা</span>
            </div>
            
            <h2 className="text-[#1F7A4D] text-3xl md:text-5xl font-black leading-tight">
              আপনার দান একটি <br />
              <span className="text-[#F4C430]">এতিম শিশুর</span> জীবন বদলে দিতে পারে
            </h2>

            <p className="text-gray-700 text-lg leading-relaxed text-justify">
              এই প্রতিষ্ঠান যাকাত, সদকা, ফিতরা ও সাধারণ দান গ্রহণ করে। আপনার সামান্য সহযোগিতা একজন এতিম ছাত্রের সুন্দর ভবিষ্যৎ নিশ্চিত করতে পারে।
            </p>

            {/* হাদীস বক্স */}
            <div className="bg-white p-6 rounded-2xl border-l-8 border-[#F4C430] shadow-md relative overflow-hidden">
              <FaQuoteLeft className="text-[#F4C430]/10 text-6xl absolute top-4 right-4" />
              <p className="text-gray-800 font-medium italic mb-3 relative z-10 leading-relaxed">
                "আল্লাহর কাছে সর্বাধিক প্রিয় আমল হলো, যা সদাসর্বদা নিয়মিত করা হয়, যদিও তা অল্প হয়।"
              </p>
              <span className="text-[#1F7A4D] font-bold text-sm block">— সহীহ বুখারী, হাদীস ৬৪৬৪</span>
            </div>

            {/* বিশেষ সেকশন: তহবিলের তালিকা */}
            <div className="space-y-4">
              <h4 className="text-[#1F7A4D] font-bold text-xl flex items-center gap-2">
                 <FaLayerGroup className="text-[#F4C430]" /> আমাদের তহবিলসমূহ (তহবিলের বিবরণ)
              </h4>
              <div className="grid grid-cols-2 sm:grid-cols-3 gap-3">
                {funds.map((fund, index) => (
                  <div key={index} className="flex items-center gap-2 text-gray-700 font-medium text-sm md:text-base">
                    <FaCheckCircle className="text-[#1F7A4D] shrink-0" />
                    <span>{fund}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* বিশেষ লক্ষ্য কার্ড */}
            <div className="flex items-center gap-4 p-5 bg-[#1F7A4D] text-white rounded-2xl shadow-xl transform hover:scale-105 transition-transform">
              <div className="bg-white/20 p-4 rounded-xl">
                <FaHandHoldingHeart size={30} className="text-[#F4C430]" />
              </div>
              <div>
                <h4 className="font-bold text-xl">বিশেষ লক্ষ্য</h4>
                <p className="text-sm opacity-90 font-medium italic">একজন এতিম ও গরিব বাচ্চার লেখাপড়ার সম্পূর্ণ খরচ বহন করুন।</p>
              </div>
            </div>
          </div>

          {/* ২. ডান পাশ: অনুদান ও পেমেন্ট কার্ড */}
          <div className="bg-white p-6 md:p-10 rounded-[40px] shadow-2xl border border-gray-100" data-aos="fade-left">
            
            {/* তহবিল সিলেক্ট করুন */}
            <div className="mb-8">
              <label className="block text-[#1F7A4D] font-black mb-3 text-lg">তহবিল সিলেক্ট করুন</label>
              <select 
                value={selectedFund}
                onChange={(e) => setSelectedFund(e.target.value)}
                className="w-full p-4 bg-gray-50 border-2 border-gray-100 rounded-2xl focus:border-[#1F7A4D] outline-none font-bold text-gray-700 appearance-none cursor-pointer"
                style={{backgroundImage: 'url("data:image/svg+xml;charset=UTF-8,%3csvg xmlns=\'http://www.w3.org/2000/svg\' viewBox=\'0 0 24 24\' fill=\'none\' stroke=\'currentColor\' stroke-width=\'2\' stroke-linecap=\'round\' stroke-linejoin=\'round\'%3e%3cpolyline points=\'6 9 12 15 18 9\'%3e%3c/polyline%3e%3c/svg%3e")', backgroundRepeat: 'no-repeat', backgroundPosition: 'right 1rem center', backgroundSize: '1em'}}
              >
                {funds.map((fund, index) => (
                  <option key={index} value={fund}>{fund}</option>
                ))}
              </select>
            </div>

            <h3 className="text-[#1F7A4D] text-xl font-black mb-4">অনুদানের পরিমাণ নির্বাচন করুন (৳)</h3>
            
            {/* এমাউন্ট গ্রিড */}
            <div className="grid grid-cols-3 sm:grid-cols-5 gap-2 mb-10">
              {amounts.map((amount) => (
                <button
                  key={amount}
                  onClick={() => setSelectedAmount(amount)}
                  className={`py-3 px-1 rounded-xl font-bold transition-all border-2 text-sm ${
                    selectedAmount === amount 
                    ? "bg-[#1F7A4D] border-[#1F7A4D] text-white shadow-lg scale-105" 
                    : "border-gray-50 bg-gray-50 text-gray-600 hover:border-[#F4C430]"
                  }`}
                >
                  {amount}
                </button>
              ))}
            </div>

            {/* পেমেন্ট মেথড সেকশন */}
            <div className="space-y-6">
              <h4 className="text-gray-800 font-bold border-b pb-2 flex items-center gap-2">
                <FaMobileAlt className="text-[#1F7A4D]" /> মোবাইল ব্যাংকিং (পার্সোনাল)
              </h4>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div className="p-4 bg-pink-50 border border-pink-100 rounded-xl flex justify-between items-center group hover:border-pink-500 transition-colors">
                  <span className="font-bold text-pink-600">বিকাশ</span>
                  <span className="font-mono font-bold text-gray-700 tracking-wider">01725111833</span>
                </div>
                <div className="p-4 bg-orange-50 border border-orange-100 rounded-xl flex justify-between items-center group hover:border-orange-500 transition-colors">
                  <span className="font-bold text-orange-600">নগদ</span>
                  <span className="font-mono font-bold text-gray-700 tracking-wider">017XX-XXXXXX</span>
                </div>
              </div>

              <h4 className="text-gray-800 font-bold border-b pb-2 pt-4 flex items-center gap-2">
                <FaUniversity className="text-[#1F7A4D]" /> ব্যাংক একাউন্ট তথ্য
              </h4>
              
              <div className="p-5 bg-[#F9FBF9] border-2 border-dashed border-[#1F7A4D]/30 rounded-2xl hover:bg-white hover:border-[#1F7A4D] transition-all duration-300">
                <div className="space-y-3">
                  <div className="flex justify-between border-b border-gray-100 pb-1 italic">
                    <span className="text-gray-500 text-sm">ব্যাংকের নাম:</span>
                    <span className="font-bold text-gray-800">ইসলামী ব্যাংক বাংলাদেশ লি:</span>
                  </div>
                  <div className="flex justify-between border-b border-gray-100 pb-1">
                    <span className="text-gray-500 text-sm">হিসাবের নাম:</span>
                    <span className="font-bold text-gray-800 uppercase text-xs">H. Shah Azam Rah. Madrasah</span>
                  </div>
                  <div className="flex justify-between border-b border-gray-100 pb-1">
                    <span className="text-gray-500 text-sm">হিসাব নম্বর:</span>
                    <span className="font-mono font-bold text-[#1F7A4D] text-lg">2050XXXXXXXXXXXXX</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-gray-500 text-sm">শাখা:</span>
                    <span className="font-bold text-gray-800">ঢাকা মেইন শাখা</span>
                  </div>
                </div>
              </div>
            </div>

            <p className="mt-8 text-center text-[10px] md:text-xs text-gray-400 font-medium">
              * অনুদান পাঠানোর পর অনুগ্রহ করে স্ক্রিনশট অথবা ট্রানজেকশন আইডি দিয়ে আমাদের নিশ্চিত করুন।
            </p>
          </div>

        </div>
      </Container>
    </section>
  );
};

export default DonationCom;