import React, { useEffect, useState } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

import bannerimg from "../../assets/banner.jpeg";
import bannerimgtwo from "../../assets/bannertwo.jpeg";
import bannerimgthree from "../../assets/bannerthrtree.jpeg";

import AOS from "aos";
import "aos/dist/aos.css";

import { FaChevronLeft, FaChevronRight } from "react-icons/fa";
import Container from "./Container";
import useAxios from "../../hooks/useAxios";

/* ======================
   Slider Arrows
====================== */
function SampleNextArrow({ onClick }) {
  return (
    <div
      onClick={onClick}
      className="absolute right-4 md:right-8 top-1/2 -translate-y-1/2 z-20 cursor-pointer bg-[#1F7A4D]/80 hover:bg-[#1F7A4D] text-white p-3 md:p-4 rounded-full transition-all duration-300 shadow-xl hidden sm:block"
    >
      <FaChevronRight size={24} />
    </div>
  );
}

function SamplePrevArrow({ onClick }) {
  return (
    <div
      onClick={onClick}
      className="absolute left-4 md:left-8 top-1/2 -translate-y-1/2 z-20 cursor-pointer bg-[#1F7A4D]/80 hover:bg-[#1F7A4D] text-white p-3 md:p-4 rounded-full transition-all duration-300 shadow-xl hidden sm:block"
    >
      <FaChevronLeft size={24} />
    </div>
  );
}

/* ======================
   Banner Component
====================== */
const Banner = () => {
  const axios = useAxios();

  const [marquee, setMarquee] = useState("");
  const [marqueeLoading, setMarqueeLoading] = useState(true);

  /* AOS Init */
  useEffect(() => {
    AOS.init({
      duration: 800,
      once: false,
    });
  }, []);

  /* Marquee Data Load */
  useEffect(() => {
    axios
      .get("/marquee")
      .then((res) => {
        setMarquee(res.data?.text || "");
        setMarqueeLoading(false);
      })
      .catch((err) => {
        console.error("Marquee load failed", err);
        setMarqueeLoading(false);
      });
  }, [axios]);

  const settings = {
    dots: true,
    infinite: true,
    speed: 1000,
    slidesToShow: 1,
    slidesToScroll: 1,
    nextArrow: <SampleNextArrow />,
    prevArrow: <SamplePrevArrow />,
    autoplay: true,
    autoplaySpeed: 5000,
    fade: true,
    appendDots: (dots) => (
      <div style={{ bottom: "30px" }}>
        <ul className="m-0 custom-dots">{dots}</ul>
      </div>
    ),
  };

  return (
    <section className="bg-white pb-12">
      <Container>

        {/* ===== Marquee Section ===== */}
        <div className="flex items-center bg-[#E8F5E9] border-l-8 border-[#1F7A4D] lg:my-6 my-2 rounded-xl overflow-hidden shadow-md">
          <div className="bg-[#1F7A4D] text-white text-[12px] lg:text-[18px] lg:px-6 pl-2 pr-3 py-3 font-bold whitespace-nowrap">
            ঘোষণা:
          </div>

          <marquee behavior="scroll" direction="left" className="py-2 ">
            <span className="text-base md:text-xl font-semibold text-[#1F7A4D] px-4">
              {marqueeLoading
                ? "ঘোষণা লোড হচ্ছে..."
                : marquee || "বর্তমানে কোনো ঘোষণা নেই"}
            </span>
          </marquee>
        </div>

        {/* ===== Slider Section ===== */}
        <div
          data-aos="fade-up"
          className="relative rounded-2xl overflow-hidden shadow-2xl border-[6px] border-[#E8F5E9]"
        >
          <Slider {...settings}>
            {[bannerimg, bannerimgtwo, bannerimgthree].map((img, i) => (
              <div key={i} className="relative">
                <div className="h-[300px] sm:h-[450px] lg:h-[550px] w-full">
                  <img
                    src={img}
                    alt="Madrasah Banner"
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent"></div>
              </div>
            ))}
          </Slider>
        </div>
      </Container>
    </section>
  );
};

export default Banner;
