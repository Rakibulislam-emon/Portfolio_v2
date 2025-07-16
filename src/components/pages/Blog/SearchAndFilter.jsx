import React from 'react';
import { Search } from 'lucide-react';

export default function SearchAndFilter({ 
  searchTerm, 
  setSearchTerm, 
  selectedCategory, 
  setSelectedCategory, 
  categories 
}) {
  return (
    <div className="max-w-4xl mx-auto mb-12">
      <div className="flex flex-col md:flex-row gap-4 mb-8">
        <div className="flex-1 relative">
          <Search className="absolute left-4 top-1/2 transform -translate-y-1/2 opacity-50" size={20} />
          <input
            type="text"
            placeholder="Search articles..."
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            className="w-full pl-12 pr-4 py-3 rounded-lg border transition-all duration-300 focus:outline-none focus:ring-2"
            style={{
              backgroundColor: "rgba(255, 255, 255, 0.05)",
              borderColor: "rgba(255, 255, 255, 0.2)",
              color: "var(--color-text)"
            }}
          />
        </div>
      </div>

      <div className="flex flex-wrap gap-3 justify-center">
        {categories.map((category) => (
          <button
            key={category}
            onClick={() => setSelectedCategory(category)}
            className={`px-4 py-2 rounded-full text-sm font-medium transition-all duration-300 hover:scale-105 ${
              selectedCategory === category
                ? 'text-white shadow-lg'
                : 'text-gray-400 hover:text-white'
            }`}
            style={{
              backgroundColor: selectedCategory === category 
                ? "var(--color-accent)" 
                : "rgba(255, 255, 255, 0.05)",
              border: "1px solid rgba(255, 255, 255, 0.1)"
            }}
          >
            {category}
          </button>
        ))}
      </div>
    </div>
  );
}