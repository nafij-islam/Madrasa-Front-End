import React from "react";
import { FaBell, FaCalendarAlt, FaEdit, FaTrash } from "react-icons/fa";

const NoticeGridFour = ({ notices, onEdit, onDelete }) => {
  if (notices.length === 0) {
    return (
      <div className="flex flex-col items-center justify-center py-24 bg-white rounded-2xl border-2 border-dashed border-slate-200">
        <div className="relative mb-6">
          <div className="absolute inset-0 bg-slate-200 blur-2xl opacity-50 rounded-full"></div>
          <FaBell className="relative text-6xl text-slate-300" />
        </div>
        <h3 className="text-lg font-semibold text-slate-700 mb-2">কোনো নোটিশ পাওয়া যায়নি</h3>
        <p className="text-sm text-slate-500">নতুন নোটিশ যোগ করতে উপরের বাটনে ক্লিক করুন</p>
      </div>
    );
  }

  return (
    <div className="grid gap-6 grid-cols-1 sm:grid-cols-2 lg:grid-cols-3">
      {notices.map((n) => (
        <div 
          key={n._id} 
          className="group bg-white rounded-2xl border-2 border-amber-500/40 shadow-sm hover:shadow-xl hover:shadow-slate-200/50 transition-all duration-300 overflow-hidden hover:-translate-y-1"
        >
          <div className="relative h-48 overflow-hidden bg-gradient-to-br from-slate-100 to-slate-200">
            {n.image ? (
              <img 
                src={n.image} 
                alt="" 
                className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-110" 
              />
            ) : (
              <div className="flex h-full w-full items-center justify-center">
                <FaBell size={48} className="text-slate-300" />
              </div>
            )}
            <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
            <span className="absolute top-4 right-4 bg-white/95 backdrop-blur-sm px-3 py-1.5 rounded-lg text-xs font-bold uppercase text-emerald-600 shadow-md border border-emerald-100">
              {n.category === 'academic' ? 'অ্যাকাডেমিক' : n.category === 'admission' ? 'ভর্তি' : 'ইভেন্ট'}
            </span>
          </div>

          <div className="p-5">
            <div className="flex items-center gap-2 text-xs font-semibold text-slate-500 mb-3">
              <FaCalendarAlt className="text-emerald-500" size={12} /> 
              <span>{n.date}</span>
            </div>
            <h3 className="text-base font-bold text-slate-800 line-clamp-2 mb-2 leading-snug min-h-[2.5rem]">
              {n.title}
            </h3>
            <p className="text-sm text-slate-600 line-clamp-2 mb-5 min-h-[2.5rem]">
              {n.description}
            </p>
            
            <div className="flex gap-2">
              <button 
                onClick={() => onEdit(n)} 
                className="flex-1 flex items-center justify-center gap-2 py-2.5 rounded-xl bg-gradient-to-br from-indigo-50 to-blue-50 border border-indigo-200/50 text-indigo-600 font-semibold text-sm hover:from-indigo-500 hover:to-blue-500 hover:text-white hover:border-transparent transition-all duration-200"
              >
                <FaEdit size={14} /> 
                <span>এডিট</span>
              </button>
              <button 
                onClick={() => onDelete(n._id)} 
                className="flex-1 flex items-center justify-center gap-2 py-2.5 rounded-xl bg-gradient-to-br from-rose-50 to-red-50 border border-rose-200/50 text-rose-600 font-semibold text-sm hover:from-rose-500 hover:to-red-500 hover:text-white hover:border-transparent transition-all duration-200"
              >
                <FaTrash size={14} /> 
                <span>ডিলিট</span>
              </button>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default NoticeGridFour;