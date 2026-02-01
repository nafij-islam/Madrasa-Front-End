import React from "react";
import { FaMapMarkerAlt, FaPhoneAlt, FaDirections } from "react-icons/fa";
import Container from './../commoncomponents/Container';

const Location = () => {
  return (
    <section className="py-12 md:py-20 bg-[#F9FBF9]">
      <Container>
        <div className="flex flex-col lg:flex-row gap-8 lg:gap-12 items-stretch">
          
          {/* Left Side: Contact Info Card */}
          <div className="w-full lg:w-2/5 flex flex-col justify-between">
            <div className="space-y-6">
              {/* Header */}
              <div className="text-center lg:text-left">
                <h4 className="text-[#F4C430] font-bold tracking-widest uppercase text-sm mb-2">খুঁজে নিন</h4>
                <h2 className="text-[#1F7A4D] text-3xl md:text-4xl font-bold">
                  আমাদের অবস্থান
                </h2>
                <div className="h-1.5 w-20 bg-[#F4C430] mt-4 mx-auto lg:mx-0 rounded-full"></div>
              </div>

              <p className="text-gray-600 text-base md:text-lg leading-relaxed text-center lg:text-left">
                হযরত শাহ্ আজম রহ. হিফজুল কোরআন দরগাহ্ মডেল মাদ্রাসায় আপনাকে স্বাগতম। নিচে দেওয়া মানচিত্রের মাধ্যমে আমাদের সঠিক লোকেশন দেখে নিন।
              </p>

              {/* Contact Detail Cards */}
              <div className="grid grid-cols-1 gap-4 mt-8">
                <div className="flex items-center gap-4 p-4 bg-white border-l-4 border-[#1F7A4D] shadow-sm rounded-r-xl group hover:shadow-md transition-all">
                  <div className="bg-[#E8F5E9] p-3 rounded-lg text-[#1F7A4D] group-hover:bg-[#1F7A4D] group-hover:text-white transition-colors">
                    <FaMapMarkerAlt size={20} />
                  </div>
                  <div>
                    <h5 className="font-bold text-[#1F7A4D]">ঠিকানা</h5>
                    <p className="text-gray-600 text-sm font-semibold">ঢাকা, বাংলাদেশ</p>
                  </div>
                </div>

                <div className="flex items-center gap-4 p-4 bg-white border-l-4 border-[#F4C430] shadow-sm rounded-r-xl group hover:shadow-md transition-all">
                  <div className="bg-[#FFF9E6] p-3 rounded-lg text-[#F4C430] group-hover:bg-[#F4C430] group-hover:text-white transition-colors">
                    <FaPhoneAlt size={20} />
                  </div>
                  <div>
                    <h5 className="font-bold text-[#1F7A4D]">যোগাযোগ</h5>
                    <p className="text-gray-600 text-sm font-semibold">09617880099</p>
                  </div>
                </div>
              </div>

              {/* Google Maps Button */}
              <div className="flex justify-center lg:justify-start pt-4">
                <a 
                  href="https://maps.app.goo.gl/peVmxm6bJ2HKCtmC6" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 bg-[#1F7A4D] text-white px-6 py-3 rounded-full font-bold hover:bg-[#F4C430] hover:text-[#1F7A4D] transition-all shadow-lg active:scale-95"
                >
                  <FaDirections /> গুগল ম্যাপে দেখুন
                </a>
              </div>
            </div>
          </div>

          {/* Right Side: Map iframe */}
          <div className="w-full lg:w-3/5 h-[350px] md:h-[450px] lg:h-[500px] min-h-[400px]">
            <div className="w-full h-full rounded-3xl overflow-hidden border-8 border-white shadow-2xl relative">
              <iframe 
                src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d2155.723483901872!2d91.8427337!3d24.3577216!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x37519d56428d52d9%3A0xc32b3406b0fafc91!2z4Ka54Kav4Kaw4KakIOCmtuCmvuCmuSDgpobgppzgpq4gKOCmsOCmueCmgykg4Kau4Ka-4Kac4Ka-4KawIOCmtuCmsOCngOCmqw!5e1!3m2!1sen!2sbd!4v1767970009340!5m2!1sen!2sbd" 
                className="w-full h-full border-0"
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                title="Hazrat Shah Azam Rah Madrasah Location"
              ></iframe>

              {/* Decorative Frame Corner */}
              <div className="absolute top-4 right-4 bg-white/90 backdrop-blur-sm px-4 py-1.5 rounded-full text-[11px] font-black text-[#1F7A4D] shadow-sm border border-[#E8F5E9]">
                মাদ্রাসার লোকেশন
              </div>
            </div>
          </div>

        </div>
      </Container>
    </section>
  );
};

export default Location;
