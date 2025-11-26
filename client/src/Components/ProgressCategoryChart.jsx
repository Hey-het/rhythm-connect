"use client";
// import React from "react";

export default function ProgressCategoryChart({ progress }) {
  const categories = ["Dance", "Music", "Fitness"];

  // Calculate average for each category
  function getAverage(category) {
    let total = 0;
    let count = 0;
    for (const item of progress) {
      if (
        item.category &&
        item.category.trim().toLowerCase() === category.trim().toLowerCase()
      ) {
        total += item.percentage;
        count += 1;
      }
    }
    return count > 0 ? Math.round(total / count) : 0;
  }

  return (
    <div className="mb-8">
      <span className="font-semibold text-blue-900 mb-2 block">Progress by Category</span>
      <div className="flex items-end gap-8 h-24 w-full">
        {categories.map(cat => (
          <div className="flex flex-col items-center flex-1" key={cat}>
            <div
              className={`w-10 rounded ${
                cat === "Dance" ? "bg-pink-400"
                : cat === "Music" ? "bg-blue-400"
                : "bg-purple-400"
              }`}
              style={{ height: `${getAverage(cat)}%` }}
            ></div>
            <span className="text-xs mt-1 text-blue-900">{cat}</span>
            <span className="text-xs mt-1 text-gray-700">{getAverage(cat)}%</span>
          </div>
        ))}
      </div>
    </div>
  );
}
