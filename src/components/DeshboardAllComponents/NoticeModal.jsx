import React from "react";
import { FaTimes, FaCloudUploadAlt, FaCircleNotch } from "react-icons/fa";

const NoticeModal = ({ 
  isOpen, 
  onClose, 
  editId, 
  formData, 
  onFormChange, 
  onImageChange, 
  onSubmit, 
  isSubmitting 
}) => {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-100 flex items-end sm:items-center justify-center bg-slate-900/60 backdrop-blur-md p-0 sm:p-4 animate-in fade-in duration-200">
      <div 
        className="w-full max-w-2xl bg-white rounded-t-3xl sm:rounded-3xl shadow-2xl flex flex-col max-h-[95vh] overflow-hidden animate-in slide-in-from-bottom duration-300 sm:slide-in-from-bottom-0 sm:zoom-in-95"
        onClick={(e) => e.stopPropagation()}
      >
        <div className="bg-gradient-to-r from-emerald-500 to-teal-600 px-6 sm:px-8 py-5">
          <div className="flex items-center justify-between">
            <h2 className="text-xl sm:text-2xl font-bold text-white">
              {editId ? "নোটিশ আপডেট করুন" : "নতুন নোটিশ যোগ করুন"}
            </h2>
            <button 
              type="button" 
              onClick={onClose} 
              className="text-white/80 hover:text-white hover:bg-white/20 p-2 rounded-full transition"
            >
              <FaTimes size={20} />
            </button>
          </div>
        </div>
        
        <div className="overflow-y-auto p-6 sm:p-8 space-y-6">
          <div className="space-y-2">
            <label className="text-xs font-bold text-slate-600 uppercase tracking-wide">শিরোনাম *</label>
            <input 
              className="w-full rounded-xl border border-slate-200 bg-slate-50 px-4 py-3 text-sm font-medium text-slate-700 placeholder:text-slate-400 focus:outline-none focus:ring-2 focus:ring-emerald-500 focus:border-transparent transition" 
              placeholder="নোটিশের শিরোনাম লিখুন"
              value={formData.title} 
              onChange={(e) => onFormChange({ ...formData, title: e.target.value })} 
              required 
            />
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <div className="space-y-2">
              <label className="text-xs font-bold text-slate-600 uppercase tracking-wide">তারিখ *</label>
              <input 
                type="date" 
                className="w-full rounded-xl border border-slate-200 bg-slate-50 px-4 py-3 text-sm font-medium text-slate-700 focus:outline-none focus:ring-2 focus:ring-emerald-500 focus:border-transparent transition" 
                value={formData.date} 
                onChange={(e) => onFormChange({ ...formData, date: e.target.value })} 
                required 
              />
            </div>
            <div className="space-y-2">
              <label className="text-xs font-bold text-slate-600 uppercase tracking-wide">ক্যাটাগরি *</label>
              <select 
                className="w-full rounded-xl border border-slate-200 bg-slate-50 px-4 py-3 text-sm font-medium text-slate-700 focus:outline-none focus:ring-2 focus:ring-emerald-500 focus:border-transparent transition appearance-none cursor-pointer" 
                value={formData.category} 
                onChange={(e) => onFormChange({ ...formData, category: e.target.value })}
              >
                <option value="academic">অ্যাকাডেমিক</option>
                <option value="admission">ভর্তি</option>
                <option value="event">ইভেন্ট</option>
              </select>
            </div>
          </div>

          <div className="space-y-2">
            <label className="text-xs font-bold text-slate-600 uppercase tracking-wide">বর্ণনা</label>
            <textarea 
              rows="4" 
              className="w-full rounded-xl border border-slate-200 bg-slate-50 px-4 py-3 text-sm font-medium text-slate-700 placeholder:text-slate-400 focus:outline-none focus:ring-2 focus:ring-emerald-500 focus:border-transparent transition resize-none" 
              placeholder="নোটিশের বিস্তারিত বর্ণনা লিখুন"
              value={formData.description} 
              onChange={(e) => onFormChange({ ...formData, description: e.target.value })} 
            />
          </div>

          <div className="space-y-2">
            <label className="text-xs font-bold text-slate-600 uppercase tracking-wide">ছবি আপলোড</label>
            <label className="flex flex-col items-center justify-center border-2 border-dashed border-slate-300 rounded-xl py-10 bg-slate-50 cursor-pointer hover:border-emerald-500 hover:bg-emerald-50/30 transition-all duration-200 group">
              {formData.imagePreview ? (
                <div className="relative">
                  <img 
                    src={formData.imagePreview} 
                    className="max-h-48 rounded-xl shadow-lg border-4 border-white" 
                    alt="Preview" 
                  />
                  <div className="absolute inset-0 bg-black/0 group-hover:bg-black/10 rounded-xl transition-colors duration-200"></div>
                </div>
              ) : (
                <div className="text-center">
                  <FaCloudUploadAlt size={48} className="mx-auto text-slate-300 group-hover:text-emerald-500 transition-colors duration-200 mb-3" />
                  <p className="text-sm font-semibold text-slate-600 mb-1">ছবি আপলোড করুন</p>
                  <p className="text-xs text-slate-400">ক্লিক করে ছবি সিলেক্ট করুন</p>
                </div>
              )}
              <input type="file" hidden accept="image/*" onChange={onImageChange} />
            </label>
          </div>
        </div>

        <div className="p-6 sm:p-8 bg-slate-50 border-t border-slate-200">
          <button 
            onClick={onSubmit}
            disabled={isSubmitting} 
            className="w-full py-4 bg-gradient-to-r from-emerald-500 to-teal-600 text-white rounded-xl font-bold text-sm hover:shadow-lg hover:shadow-emerald-500/30 transition-all duration-200 disabled:opacity-50 disabled:cursor-not-allowed"
          >
            {isSubmitting ? (
              <span className="flex items-center justify-center gap-2">
                <FaCircleNotch className="animate-spin" /> 
                <span>সংরক্ষণ হচ্ছে...</span>
              </span>
            ) : (
              editId ? "আপডেট করুন" : "সংরক্ষণ করুন"
            )}
          </button>
        </div>
      </div>
    </div>
  );
};

export default NoticeModal;