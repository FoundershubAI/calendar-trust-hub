
import React from "react";

const HeroImage = () => {
  // Create a simplified calendar booking interface for the hero section
  return (
    <div className="rounded-lg shadow-xl overflow-hidden bg-white border border-gray-200">
      <div className="bg-blue-600 text-white p-4">
        <h3 className="text-xl font-semibold">Select a Date & Time</h3>
        <p className="text-blue-100 text-sm">30 min meeting with Alex Morgan</p>
      </div>
      
      {/* Calendar header */}
      <div className="flex justify-between items-center px-4 py-3 border-b">
        <button className="text-gray-400 hover:text-blue-600">
          <span className="sr-only">Previous month</span>
          <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
          </svg>
        </button>
        <h4 className="font-medium text-gray-700">May 2025</h4>
        <button className="text-gray-400 hover:text-blue-600">
          <span className="sr-only">Next month</span>
          <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
          </svg>
        </button>
      </div>
      
      {/* Weekday headers */}
      <div className="grid grid-cols-7 gap-px bg-gray-200 border-b">
        {["S", "M", "T", "W", "T", "F", "S"].map((day, i) => (
          <div key={i} className="bg-white text-center py-2">
            <span className="text-sm font-medium text-gray-500">{day}</span>
          </div>
        ))}
      </div>
      
      {/* Calendar days */}
      <div className="grid grid-cols-7 gap-px bg-gray-200">
        {Array.from({ length: 35 }).map((_, i) => {
          // Make specific days look "selected" or "today"
          let day = i - 3; // Offset to start from previous month
          if (day <= 0) day = 30 + day; // Previous month days
          else if (day > 31) day = day - 31; // Next month days
          
          let dayClass = "bg-white hover:bg-blue-50 p-2 h-14";
          let textClass = "text-sm";
          
          // Highlight specific dates
          if (day === 15) {
            dayClass += " bg-blue-500";
            textClass += " text-white font-medium";
          } else if (day < 1 || day > 31) {
            textClass += " text-gray-400"; // Fade out days not in current month
          } else {
            textClass += " text-gray-700";
          }
          
          return (
            <div key={i} className={dayClass}>
              <p className={textClass}>{day}</p>
            </div>
          );
        })}
      </div>
      
      {/* Time slots */}
      <div className="p-4 border-t">
        <h5 className="font-medium text-gray-700 mb-3">Available times</h5>
        <div className="grid grid-cols-2 gap-2">
          {["9:00 AM", "10:00 AM", "11:00 AM", "1:00 PM"].map((time, i) => (
            <button
              key={i}
              className={`border rounded py-2 px-4 text-sm
                ${i === 1 ? "bg-blue-600 text-white border-blue-600" : "border-gray-300 text-gray-700 hover:border-blue-600"}`}
            >
              {time}
            </button>
          ))}
        </div>
      </div>
      
      {/* Action button */}
      <div className="p-4 bg-gray-50 border-t">
        <button className="w-full bg-blue-600 text-white py-2 px-4 rounded font-medium hover:bg-blue-700">
          Confirm Selection
        </button>
      </div>
    </div>
  );
};

export default HeroImage;
