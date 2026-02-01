import React, { useState, useEffect } from "react";
import { FaEye, FaImages, FaArrowRight, FaTimes, FaDownload, FaChevronLeft, FaChevronRight } from "react-icons/fa";
import AOS from "aos";
import "aos/dist/aos.css";
import Container from "./../commoncomponents/Container";
import useAxios from "../../hooks/useAxios";

const GalleryCom = () => {
  const axios = useAxios();
  
  const [galleryData, setGalleryData] = useState([]);
  const [loading, setLoading] = useState(true);
  const [showAll, setShowAll] = useState(false);
  const [lightboxOpen, setLightboxOpen] = useState(false);
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const [activeCategory, setActiveCategory] = useState("all");

  // Categories
  const categories = [
    { key: "all", label: "সকল ছবি", icon: "🖼️" },
    { key: "campus", label: "ক্যাম্পাস", icon: "🏫" },
    { key: "academic", label: "একাডেমিক", icon: "📚" },
    { key: "event", label: "ইভেন্ট", icon: "🎉" },
    { key: "spiritual", label: "আধ্যাত্মিক", icon: "🕌" },
    { key: "building", label: "ভবন", icon: "🏛️" },
  ];

  useEffect(() => {
    AOS.init({ duration: 1000, once: true });
  }, []);

  // Fetch gallery data from backend
  useEffect(() => {
    const fetchGallery = async () => {
      try {
        setLoading(true);
        const endpoint = activeCategory === "all" 
          ? "/gallery" 
          : `/gallery?category=${activeCategory}`;
        const res = await axios.get(endpoint);
        setGalleryData(res.data);
      } catch (error) {
        console.error("Error fetching gallery:", error);
        setGalleryData([]);
      } finally {
        setLoading(false);
      }
    };

    fetchGallery();
  }, [axios, activeCategory]);

  const visibleItems = showAll ? galleryData : galleryData.slice(0, 6);

  // Open lightbox
  const openLightbox = (index) => {
    setCurrentImageIndex(index);
    setLightboxOpen(true);
    document.body.style.overflow = 'hidden';
  };

  // Close lightbox
  const closeLightbox = () => {
    setLightboxOpen(false);
    document.body.style.overflow = 'unset';
  };

  // Navigate to next image
  const nextImage = () => {
    setCurrentImageIndex((prev) => (prev + 1) % galleryData.length);
  };

  // Navigate to previous image
  const prevImage = () => {
    setCurrentImageIndex((prev) => (prev - 1 + galleryData.length) % galleryData.length);
  };

  // Download image
  const downloadImage = () => {
    const link = document.createElement('a');
    link.href = galleryData[currentImageIndex].image;
    link.download = `${galleryData[currentImageIndex].title}.jpg`;
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  // Keyboard navigation
  useEffect(() => {
    const handleKeyPress = (e) => {
      if (!lightboxOpen) return;
      
      if (e.key === 'Escape') closeLightbox();
      if (e.key === 'ArrowRight') nextImage();
      if (e.key === 'ArrowLeft') prevImage();
    };

    window.addEventListener('keydown', handleKeyPress);
    return () => window.removeEventListener('keydown', handleKeyPress);
  }, [lightboxOpen]);

  // Category label mapping
  const getCategoryLabel = (category) => {
    const categoryMap = {
      campus: '🏫 ক্যাম্পাস',
      academic: '📚 একাডেমিক',
      event: '🎉 ইভেন্ট',
      spiritual: '🕌 আধ্যাত্মিক',
      building: '🏛️ ভবন'
    };
    return categoryMap[category] || category;
  };

  // Loading state
  if (loading) {
    return (
      <section className="py-20 bg-white">
        <Container>
          <div className="text-center py-20">
            <div className="inline-block h-16 w-16 animate-spin rounded-full border-4 border-[#1F7A4D] border-t-transparent mb-4"></div>
            <p className="text-[#1F7A4D] font-bold text-lg">লোড হচ্ছে...</p>
          </div>
        </Container>
      </section>
    );
  }

  return (
    <section className="py-20 bg-white">
      <Container>
        {/* Header */}
        <div className="text-center mb-16" data-aos="fade-up">
          <div className="flex justify-center items-center gap-2 mb-3">
            <div className="h-[2px] w-8 bg-[#F4C430]"></div>
            <span className="text-[#F4C430] font-bold uppercase tracking-widest text-sm flex items-center gap-2">
              <FaImages /> ফটো গ্যালারি
            </span>
            <div className="h-[2px] w-8 bg-[#F4C430]"></div>
          </div>
          <h2 className="text-[#1F7A4D] text-3xl md:text-5xl font-black mb-4">
            আমাদের কার্যক্রমের কিছু স্থিরচিত্র
          </h2>
          <p className="text-gray-500 max-w-2xl mx-auto font-medium">
            হযরত শাহ আজম রহ. হিফজুল কোরআন দরগাহ মডেল মাদ্রাসার একাডেমিক ও আধ্যাত্মিক পরিবেশের ঝলক।
          </p>
        </div>

        {/* Category Filter */}
        <div className="mb-12" data-aos="fade-up">
          <div className="flex flex-wrap gap-3 justify-center">
            {categories.map((cat) => (
              <button
                key={cat.key}
                onClick={() => {
                  setActiveCategory(cat.key);
                  setShowAll(false); // Reset to showing 6 when changing category
                }}
                className={`flex items-center gap-2 px-6 py-3 rounded-full font-bold transition-all duration-300 ${
                  activeCategory === cat.key
                    ? "bg-[#1F7A4D] text-white shadow-lg scale-105"
                    : "bg-white text-slate-600 hover:bg-slate-50 border-2 border-slate-200 hover:border-[#1F7A4D]/30"
                }`}
              >
                <span className="text-lg">{cat.icon}</span>
                <span>{cat.label}</span>
              </button>
            ))}
          </div>
        </div>

        {/* Empty State */}
        {galleryData.length === 0 ? (
          <div className="text-center py-20 bg-gradient-to-br from-white to-gray-50 rounded-3xl border-2 border-dashed border-gray-200">
            <div className="inline-block p-6 rounded-full bg-slate-50 mb-4">
              <FaImages size={40} className="text-slate-300" />
            </div>
            <h3 className="text-2xl font-bold text-slate-600 mb-2">কোনো ছবি পাওয়া যায়নি</h3>
            <p className="text-slate-400 mb-6">
              {activeCategory === "all" 
                ? "এখনো কোনো ছবি যোগ করা হয়নি" 
                : `"${categories.find(c => c.key === activeCategory)?.label}" ক্যাটাগরিতে এখনো কোনো ছবি নেই`}
            </p>
            {activeCategory !== "all" && (
              <button
                onClick={() => setActiveCategory("all")}
                className="inline-flex items-center gap-2 px-6 py-3 bg-[#1F7A4D] text-white rounded-full font-bold hover:bg-[#F4C430] hover:text-[#1F7A4D] transition-all duration-300"
              >
                সকল ছবি দেখুন
              </button>
            )}
          </div>
        ) : (
          <>
            {/* Gallery Grid */}
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {visibleItems.map((item, index) => (
                <div 
                  key={item._id} 
                  data-aos="zoom-in" 
                  onClick={() => openLightbox(showAll ? index : galleryData.findIndex(img => img._id === item._id))}
                  className="group relative h-72 overflow-hidden rounded-3xl border-4 border-[#E8F5E9] shadow-lg cursor-pointer hover:border-[#F4C430] transition-all duration-300"
                >
                  <img 
                    src={item.image} 
                    alt={item.title} 
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#1F7A4D]/90 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 flex flex-col justify-end p-8">
                    <span className="bg-[#F4C430] text-[#1F7A4D] text-[10px] font-bold uppercase px-3 py-1 rounded-full w-fit mb-2 transform translate-y-4 group-hover:translate-y-0 transition-all duration-500">
                      {getCategoryLabel(item.category)}
                    </span>
                    <h3 className="text-white text-xl font-bold transform translate-y-4 group-hover:translate-y-0 transition-all duration-500 delay-75">
                      {item.title}
                    </h3>
                    <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 bg-white/20 backdrop-blur-md p-4 rounded-full text-white scale-0 group-hover:scale-100 transition-all duration-500">
                      <FaEye size={24} />
                    </div>
                  </div>
                </div>
              ))}
            </div>

            {/* "আরও দেখুন" বাটন */}
            {!showAll && galleryData.length > 6 && (
              <div className="mt-16 text-center" data-aos="fade-up">
                <button 
                  onClick={() => setShowAll(true)}
                  className="group relative inline-flex items-center gap-3 bg-[#1F7A4D] text-white px-10 py-4 rounded-full font-bold text-lg overflow-hidden transition-all hover:bg-[#F4C430] hover:text-[#1F7A4D] shadow-xl hover:shadow-[#F4C430]/20"
                >
                  <span className="relative z-10">আরও ছবি দেখুন</span>
                  <FaArrowRight className="relative z-10 group-hover:translate-x-2 transition-transform" />
                  <div className="absolute inset-0 bg-white/10 opacity-0 group-hover:opacity-100 transition-opacity"></div>
                </button>
              </div>
            )}

            {/* "ছবি কমান" বাটন */}
            {showAll && galleryData.length > 6 && (
              <div className="mt-16 text-center">
                <button 
                  onClick={() => setShowAll(false)}
                  className="text-[#1F7A4D] font-bold hover:underline"
                >
                  ছবি কমিয়ে দেখান
                </button>
              </div>
            )}
          </>
        )}

      </Container>

      {/* ✨ Fullscreen Lightbox Modal ✨ */}
      {lightboxOpen && galleryData.length > 0 && (
        <div className="fixed inset-0 z-[9999] bg-black/95 flex items-center justify-center p-4 animate-in fade-in duration-300">
          {/* Close Button */}
          <button 
            onClick={closeLightbox}
            className="absolute top-4 right-4 md:top-8 md:right-8 z-10 bg-white/10 hover:bg-white/20 backdrop-blur-md p-3 rounded-full text-white transition-all duration-300 hover:scale-110 hover:rotate-90"
            aria-label="Close"
          >
            <FaTimes size={24} />
          </button>

          {/* Download Button */}
          <button 
            onClick={downloadImage}
            className="absolute top-4 right-20 md:top-8 md:right-24 z-10 bg-[#F4C430] hover:bg-[#F4C430]/80 p-3 rounded-full text-[#1F7A4D] transition-all duration-300 hover:scale-110 group"
            title="ডাউনলোড করুন"
          >
            <FaDownload size={20} className="group-hover:animate-bounce" />
          </button>

          {/* Previous Button */}
          <button 
            onClick={prevImage}
            className="absolute left-4 md:left-8 top-1/2 -translate-y-1/2 z-10 bg-white/10 hover:bg-white/20 backdrop-blur-md p-4 rounded-full text-white transition-all duration-300 hover:scale-110"
            aria-label="Previous"
          >
            <FaChevronLeft size={24} />
          </button>

          {/* Next Button */}
          <button 
            onClick={nextImage}
            className="absolute right-4 md:right-8 top-1/2 -translate-y-1/2 z-10 bg-white/10 hover:bg-white/20 backdrop-blur-md p-4 rounded-full text-white transition-all duration-300 hover:scale-110"
            aria-label="Next"
          >
            <FaChevronRight size={24} />
          </button>

          {/* Image Container */}
          <div className="relative max-w-7xl max-h-[90vh] w-full flex flex-col items-center">
            <img 
              src={galleryData[currentImageIndex].image} 
              alt={galleryData[currentImageIndex].title}
              className="max-h-[80vh] w-auto object-contain rounded-2xl shadow-2xl"
            />
            
            {/* Image Info */}
            <div className="mt-6 text-center bg-white/10 backdrop-blur-md rounded-2xl px-8 py-4 max-w-2xl">
              <span className="inline-block bg-[#F4C430] text-[#1F7A4D] text-xs font-bold uppercase px-3 py-1 rounded-full mb-2">
                {getCategoryLabel(galleryData[currentImageIndex].category)}
              </span>
              <h3 className="text-white text-2xl font-bold mb-1">
                {galleryData[currentImageIndex].title}
              </h3>
              <p className="text-white/70 text-sm">
                {currentImageIndex + 1} / {galleryData.length}
              </p>
            </div>
          </div>

          {/* Keyboard Hints */}
          <div className="absolute bottom-4 left-1/2 -translate-x-1/2 flex gap-4 text-white/40 text-xs">
            <span>← পূর্ববর্তী</span>
            <span>•</span>
            <span>পরবর্তী →</span>
            <span>•</span>
            <span>ESC বন্ধ করুন</span>
          </div>

          {/* Click outside to close */}
          <div 
            className="absolute inset-0 -z-10" 
            onClick={closeLightbox}
          ></div>
        </div>
      )}
    </section>
  );
};

export default GalleryCom;