import React from "react";
import { FaBullhorn, FaTimes, FaCircleNotch } from "react-icons/fa";

const MarqueeModal = ({ isOpen, onClose, marqueeText, onTextChange, onSubmit, isLoading }) => {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-100 flex items-end sm:items-center justify-center bg-slate-900/60 backdrop-blur-md p-4 animate-in fade-in duration-200">
      <div 
        className="w-full max-w-md bg-white rounded-3xl shadow-2xl overflow-hidden animate-in slide-in-from-bottom duration-300 sm:slide-in-from-bottom-0 sm:zoom-in-95"
        onClick={(e) => e.stopPropagation()}
      >
        <div className="bg-gradient-to-r from-amber-500 to-orange-500 px-6 py-5">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-3">
              <FaBullhorn className="text-white text-xl" />
              <h2 className="text-xl font-bold text-white">শর্ট নোটিশ আপডেট</h2>
            </div>
            <button 
              type="button" 
              onClick={onClose} 
              className="text-white/80 hover:text-white hover:bg-white/20 p-2 rounded-full transition"
            >
              <FaTimes size={18} />
            </button>
          </div>
        </div>
        <div className="p-6">
          <textarea 
            rows="4" 
            className="w-full rounded-xl border border-slate-200 bg-slate-50 p-4 text-sm font-medium text-slate-700 placeholder:text-slate-400 focus:outline-none focus:ring-2 focus:ring-amber-500 focus:border-transparent transition resize-none" 
            placeholder="শর্ট নোটিশ নোটিশ লিখুন..." 
            value={marqueeText} 
            onChange={(e) => onTextChange(e.target.value)} 
          />
        </div>
        <div className="px-6 pb-6">
          <button 
            onClick={onSubmit}
            disabled={isLoading} 
            className="w-full py-4 bg-gradient-to-r from-amber-500 to-orange-500 text-white rounded-xl font-bold text-sm hover:shadow-lg hover:shadow-amber-500/30 disabled:opacity-50 disabled:cursor-not-allowed transition-all duration-200"
          >
            {isLoading ? (
              <span className="flex items-center justify-center gap-2">
                <FaCircleNotch className="animate-spin" /> 
                <span>আপলোড হচ্ছে...</span>
              </span>
            ) : (
              "পাবলিশ করুন"
            )}
          </button>
        </div>
      </div>
    </div>
  );
};

export default MarqueeModal;