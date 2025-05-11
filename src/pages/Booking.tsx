
import React from "react";
import BookingCalendar from "@/components/BookingCalendar";
import UserDetailsCard from "@/components/UserDetailsCard";

const Booking = () => {
  return (
    <div className="min-h-screen bg-gray-50 py-8 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="md:col-span-2">
            <BookingCalendar />
          </div>
          <div className="md:col-span-1">
            <UserDetailsCard 
              name="Vinit Shahdeo"
              duration="30 min"
              description="Get in touch if you're seeking a mentor in software engineering. Learn here how can I help!"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Booking;
