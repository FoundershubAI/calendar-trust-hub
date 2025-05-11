
import React from "react";
import BookingCalendar from "@/components/BookingCalendar";

const Booking = () => {
  return (
    <div className="min-h-screen bg-gray-50 py-8 px-4 sm:px-6 lg:px-8">
      <div className="max-w-4xl mx-auto">
        <BookingCalendar />
      </div>
    </div>
  );
};

export default Booking;
