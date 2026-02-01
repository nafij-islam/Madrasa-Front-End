import React from "react";

const CategoryFilter = ({ categories, activeCategory, onCategoryChange }) => {
  return (
    <div className="mb-8">
      <div className="flex flex-wrap gap-3 justify-center md:justify-start">
        {categories.map((cat) => (
          <button
            key={cat.key}
            onClick={() => onCategoryChange(cat.key)}
            className={`flex items-center gap-2 px-6 py-3 rounded-xl font-bold transition-all duration-300 ${
              activeCategory === cat.key
                ? "bg-gradient-to-br from-emerald-500 to-teal-600 text-white shadow-lg shadow-emerald-500/30 scale-105"
                : "bg-white text-slate-600 hover:bg-slate-50 border-2 border-slate-200 hover:border-emerald-200"
            }`}
          >
            <span className="text-lg">{cat.icon}</span>
            <span>{cat.label}</span>
          </button>
        ))}
      </div>
    </div>
  );
};

export default CategoryFilter;