import React from "react";
import { FaImages, FaPlus } from "react-icons/fa";

const GalleryHeader = ({ onAddClick, totalImages }) => {
  return (
    <header className="sticky top-0 z-40 bg-white/80 backdrop-blur-xl border-b border-slate-200/60 shadow-sm">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-6">
        <div className="flex items-center justify-between">
          {/* Left: Title */}
          <div className="flex items-center gap-4">
            <div className="flex items-center justify-center w-14 h-14 rounded-2xl bg-gradient-to-br from-emerald-500 to-teal-600 text-white shadow-lg shadow-emerald-500/30">
              <FaImages size={24} />
            </div>
            <div>
              <h1 className="text-2xl md:text-3xl font-black text-slate-800">
                ফটো গ্যালারি ড্যাশবোর্ড
              </h1>
              <p className="text-sm text-slate-500 font-medium mt-0.5">
                মোট {totalImages} টি ছবি
              </p>
            </div>
          </div>

          {/* Right: Add Button (Desktop) */}
          <button
            onClick={onAddClick}
            className="hidden md:flex items-center gap-3 px-6 py-3.5 bg-gradient-to-br from-emerald-500 to-teal-600 text-white rounded-xl font-bold shadow-lg shadow-emerald-500/30 hover:shadow-xl hover:shadow-emerald-500/40 hover:scale-105 active:scale-95 transition-all duration-200"
          >
            <FaPlus size={16} />
            <span>নতুন ছবি যোগ করুন</span>
          </button>
        </div>
      </div>
    </header>
  );
};

export default GalleryHeader;