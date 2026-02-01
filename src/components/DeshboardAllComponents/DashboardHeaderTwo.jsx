import React from "react";
import { FaBell, FaBullhorn, FaPlus } from "react-icons/fa";

const DashboardHeaderTwo = ({ onMarqueeClick, onAddClick }) => {
  return (
    <header className="sticky top-0 z-40 w-full bg-white/70 backdrop-blur-xl border-b border-slate-200/60 shadow-sm">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-4">
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-3">
            <div className="relative">
              <div className="absolute inset-0 bg-emerald-500 blur-xl opacity-40 rounded-full"></div>
              <div className="relative bg-gradient-to-br from-emerald-500 to-emerald-600 p-3 rounded-2xl text-white shadow-lg">
                <FaBell size={20} />
              </div>
            </div>
            <div>
              <h1 className="text-2xl font-bold text-slate-900 tracking-tight">অ্যাডমিন ড্যাশবোর্ড</h1>
              <p className="text-xs text-slate-500 font-medium">নোটিশ ম্যানেজমেন্ট সিস্টেম</p>
            </div>
          </div>
          
          {/* Desktop Buttons */}
          <div className="hidden md:flex items-center gap-3">
            <button 
              onClick={onMarqueeClick} 
              className="flex items-center gap-2 px-5 py-2.5 bg-gradient-to-r from-amber-500 to-orange-500 text-white rounded-xl font-semibold text-sm hover:shadow-lg hover:shadow-amber-500/30 transition-all duration-200 hover:scale-105"
            >
              <FaBullhorn size={16} /> 
              <span>শর্ট নোটিশ</span>
            </button>
            <button 
              onClick={onAddClick} 
              className="flex items-center gap-2 px-5 py-2.5 bg-gradient-to-r from-emerald-500 to-teal-600 text-white rounded-xl font-semibold text-sm hover:shadow-lg hover:shadow-emerald-500/30 transition-all duration-200 hover:scale-105"
            >
              <FaPlus size={16} /> 
              <span>নতুন নোটিশ</span>
            </button>
          </div>
        </div>
      </div>
    </header>
  );
};

export default DashboardHeaderTwo;