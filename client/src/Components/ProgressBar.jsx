"use client";
import React from "react";

export default function ProgressBar({ progress }) {
    const categories = ["Dance", "Music", "Fitness"];

   // Step 1: Calculate the average for each category using a very simple loop
function getAverage(category) {
  let total = 0;
  let count = 0;
  for (const item of progress) {
    if (
      item.category &&
      item.category.trim().toLowerCase() === category.trim().toLowerCase()
    ) {
      total += Number(item.percentage) || 0;

      count += 1;
    }
  }
  return count > 0 ? Math.round(total / count) : 0;
}
// Step 2: Prepare data for rendering

const progressStats = categories.map(cat => ({
  label: cat,
  percentage: getAverage(cat),
  color: cat === "Dance" ? "bg-pink-400"
      : cat === "Music" ? "bg-blue-400"
      : "bg-purple-400",
  barBg: cat === "Dance" ? "bg-pink-200"
      : cat === "Music" ? "bg-blue-200"
      : "bg-purple-200"
}));
console.log("ProgressBar progress prop:", progress);



return (
  <div className="space-y-6 mb-8">
    {progressStats.map(stat => (
      <div key={stat.label}>
        <span className={`font-semibold ${stat.color.replace('bg-', 'text-')}`}>{stat.label}</span>
        <div className={`w-full h-2 ${stat.barBg} rounded-full mt-1`}>
          <div
            className={`${stat.color} h-2 rounded-full`}
            style={{ width: `${stat.percentage}%` }}
          />
        </div>
        <span className="block text-sm text-gray-700 mt-1">{stat.percentage}% completed</span>
      </div>
    ))}
  </div>
);

}
