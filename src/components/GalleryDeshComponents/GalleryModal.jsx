import React from "react";
import { FaTimes, FaCloudUploadAlt, FaCircleNotch } from "react-icons/fa";

const GalleryModal = ({ 
  isOpen, 
  onClose, 
  editId, 
  formData, 
  onFormChange, 
  onImageChange, 
  onSubmit, 
  isSubmitting,
  categories 
}) => {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-[60] flex items-center justify-center p-4 bg-black/60 backdrop-blur-sm animate-in fade-in duration-200">
      <div className="relative w-full max-w-2xl bg-white rounded-3xl shadow-2xl overflow-hidden animate-in zoom-in-95 duration-300">
        
        {/* Header */}
        <div className="flex items-center justify-between p-6 border-b border-slate-200 bg-gradient-to-r from-emerald-50 to-teal-50">
          <h2 className="text-2xl font-black text-slate-800">
            {editId ? "ছবি সম্পাদনা করুন" : "নতুন ছবি যোগ করুন"}
          </h2>
          <button
            onClick={onClose}
            className="p-2 rounded-full hover:bg-white/50 transition-colors"
            disabled={isSubmitting}
          >
            <FaTimes size={20} className="text-slate-600" />
          </button>
        </div>

        {/* Form */}
        <form onSubmit={onSubmit} className="p-6 space-y-6">
          
          {/* Image Upload */}
          <div>
            <label className="block text-sm font-bold text-slate-700 mb-2">
              ছবি নির্বাচন করুন {!editId && <span className="text-red-500">*</span>}
            </label>
            
            <div className="relative">
              <input
                type="file"
                accept="image/*"
                onChange={onImageChange}
                className="hidden"
                id="gallery-image-upload"
                disabled={isSubmitting}
              />
              
              <label
                htmlFor="gallery-image-upload"
                className="block w-full p-6 border-2 border-dashed border-slate-300 rounded-2xl cursor-pointer hover:border-emerald-500 hover:bg-emerald-50/50 transition-all duration-300 group"
              >
                {formData.imagePreview ? (
                  <div className="relative">
                    <img
                      src={formData.imagePreview}
                      alt="Preview"
                      className="w-full h-64 object-cover rounded-xl"
                    />
                    <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity rounded-xl flex items-center justify-center">
                      <span className="text-white font-bold">ছবি পরিবর্তন করুন</span>
                    </div>
                  </div>
                ) : (
                  <div className="text-center">
                    <FaCloudUploadAlt size={48} className="mx-auto text-slate-400 group-hover:text-emerald-500 transition-colors mb-3" />
                    <p className="text-slate-600 font-semibold mb-1">ক্লিক করে ছবি আপলোড করুন</p>
                    <p className="text-xs text-slate-400">PNG, JPG, JPEG (সর্বোচ্চ ৫MB)</p>
                  </div>
                )}
              </label>
            </div>
          </div>

          {/* Title */}
          <div>
            <label className="block text-sm font-bold text-slate-700 mb-2">
              ছবির শিরোনাম <span className="text-red-500">*</span>
            </label>
            <input
              type="text"
              value={formData.title}
              onChange={(e) => onFormChange({ ...formData, title: e.target.value })}
              placeholder="যেমন: মাদ্রাসা ক্যাম্পাস"
              className="w-full px-4 py-3 rounded-xl border-2 border-slate-200 focus:border-emerald-500 focus:ring-4 focus:ring-emerald-500/20 outline-none transition-all"
              disabled={isSubmitting}
              required
            />
          </div>

          {/* Category */}
          <div>
            <label className="block text-sm font-bold text-slate-700 mb-2">
              ক্যাটাগরি নির্বাচন করুন <span className="text-red-500">*</span>
            </label>
            <select
              value={formData.category}
              onChange={(e) => onFormChange({ ...formData, category: e.target.value })}
              className="w-full px-4 py-3 rounded-xl border-2 border-slate-200 focus:border-emerald-500 focus:ring-4 focus:ring-emerald-500/20 outline-none transition-all bg-white"
              disabled={isSubmitting}
              required
            >
              {categories.map((cat) => (
                <option key={cat.key} value={cat.key}>
                  {cat.icon} {cat.label}
                </option>
              ))}
            </select>
          </div>

          {/* Buttons */}
          <div className="flex gap-3 pt-4">
            <button
              type="button"
              onClick={onClose}
              className="flex-1 px-6 py-3.5 bg-slate-100 hover:bg-slate-200 text-slate-700 font-bold rounded-xl transition-all"
              disabled={isSubmitting}
            >
              বাতিল করুন
            </button>
            <button
              type="submit"
              disabled={isSubmitting}
              className="flex-1 px-6 py-3.5 bg-gradient-to-br from-emerald-500 to-teal-600 hover:from-emerald-600 hover:to-teal-700 text-white font-bold rounded-xl shadow-lg shadow-emerald-500/30 hover:shadow-xl hover:shadow-emerald-500/40 disabled:opacity-50 disabled:cursor-not-allowed transition-all flex items-center justify-center gap-2"
            >
              {isSubmitting ? (
                <>
                  <FaCircleNotch className="animate-spin" size={18} />
                  <span>সেভ হচ্ছে...</span>
                </>
              ) : (
                <span>{editId ? "আপডেট করুন" : "সেভ করুন"}</span>
              )}
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default GalleryModal;