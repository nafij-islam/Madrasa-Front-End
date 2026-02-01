import React from "react";
import { FaEdit, FaTrash, FaCalendarAlt } from "react-icons/fa";

const GalleryGrid = ({ images, onEdit, onDelete }) => {
  if (images.length === 0) {
    return (
      <div className="text-center py-20 bg-white rounded-3xl border-2 border-dashed border-slate-200">
        <div className="inline-block p-6 rounded-full bg-slate-50 mb-4">
          <FaCalendarAlt size={40} className="text-slate-300" />
        </div>
        <h3 className="text-xl font-bold text-slate-600 mb-2">কোনো ছবি পাওয়া যায়নি</h3>
        <p className="text-slate-400">এই ক্যাটাগরিতে এখনো কোনো ছবি নেই</p>
      </div>
    );
  }

  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
      {images.map((img) => (
        <div
          key={img._id}
          className="group relative bg-white rounded-2xl overflow-hidden border-2 border-slate-100 hover:border-emerald-200 shadow-sm hover:shadow-xl transition-all duration-300"
        >
          {/* Image */}
          <div className="aspect-square overflow-hidden bg-slate-100">
            <img
              src={img.image}
              alt={img.title}
              className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
            />
          </div>

          {/* Info Overlay */}
          <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300">
            <div className="absolute bottom-0 left-0 right-0 p-4 text-white">
              <h3 className="font-bold text-lg mb-1 line-clamp-1">{img.title}</h3>
              <p className="text-xs text-white/70 capitalize">{img.category}</p>
            </div>
          </div>

          {/* Action Buttons */}
          <div className="absolute top-3 right-3 flex gap-2 opacity-100 transition-opacity duration-300">
            <button
              onClick={() => onEdit(img)}
              className="p-2.5 bg-blue-500 hover:bg-blue-600 text-white rounded-lg shadow-lg active:scale-95 transition-all"
              title="সম্পাদনা করুন"
            >
              <FaEdit size={14} />
            </button>
            <button
              onClick={() => onDelete(img._id)}
              className="p-2.5 bg-red-500 hover:bg-red-600 text-white rounded-lg shadow-lg active:scale-95 transition-all"
              title="মুছে ফেলুন"
            >
              <FaTrash size={14} />
            </button>
          </div>

          {/* Category Badge */}
          <div className="absolute top-3 left-3">
            <span className="px-3 py-1 bg-white/90 backdrop-blur-sm text-slate-700 text-xs font-bold rounded-full capitalize shadow-sm">
              {img.category === 'campus' && '🏫 ক্যাম্পাস'}
              {img.category === 'academic' && '📚 একাডেমিক'}
              {img.category === 'event' && '🎉 ইভেন্ট'}
              {img.category === 'spiritual' && '🕌 আধ্যাত্মিক'}
              {img.category === 'building' && '🏛️ ভবন'}
            </span>
          </div>
        </div>
      ))}
    </div>
  );
};

export default GalleryGrid;