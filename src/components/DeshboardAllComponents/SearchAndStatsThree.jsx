import React from "react";
import { FaSearch } from "react-icons/fa";

const SearchAndStats = ({ searchTerm, onSearchChange, noticeCount }) => {
  return (
    <div className="mb-8 bg-white rounded-2xl shadow-sm border border-slate-200/60 p-6">
      <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
        <div className="relative flex-1 max-w-md">
          <FaSearch className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-400" size={16} />
          <input
            type="text"
            placeholder="শিরোনাম দিয়ে খুঁজুন..."
            className="w-full rounded-xl border border-slate-200 bg-slate-50 pl-11 pr-4 py-3 text-sm font-medium text-slate-700 placeholder:text-slate-400 focus:outline-none focus:ring-2 focus:ring-emerald-500 focus:border-transparent transition"
            value={searchTerm}
            onChange={(e) => onSearchChange(e.target.value)}
          />
        </div>
        <div className="flex items-center gap-6">
          <div className="text-center px-6 py-2 bg-gradient-to-br from-emerald-50 to-teal-50 rounded-xl border border-emerald-200/50">
            <p className="text-xs font-semibold text-slate-500 uppercase tracking-wide mb-1">মোট নোটিশ</p>
            <p className="text-2xl font-bold text-emerald-600">{noticeCount}</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SearchAndStats;