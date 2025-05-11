
import React from "react";
import BookingCalendar from "@/components/BookingCalendar";
import UserDetailsCard from "@/components/UserDetailsCard";
import { motion } from "framer-motion";
import { Star } from "lucide-react";

const Booking = () => {
  return (
    <motion.div 
      className="min-h-screen bg-gradient-to-br from-blue-100 to-indigo-50 py-12 px-4 sm:px-6 lg:px-8"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.7 }}
    >
      <div className="max-w-7xl mx-auto">
        <motion.div 
          className="text-center mb-12"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2, duration: 0.5 }}
        >
          <motion.div
            className="inline-block mb-3 relative"
            whileHover={{ scale: 1.05 }}
            transition={{ type: "spring", stiffness: 400, damping: 10 }}
          >
            <h1 className="text-4xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-purple-600">
              Schedule Your Session
            </h1>
            <div className="absolute -top-6 -right-6 text-yellow-400 animate-pulse">
              <Star className="h-5 w-5 fill-yellow-400" />
            </div>
            <div className="absolute -bottom-4 -left-6 text-blue-400 animate-pulse delay-300">
              <Star className="h-4 w-4 fill-blue-400" />
            </div>
          </motion.div>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Select your preferred date and time for a personalized consultation experience
          </p>
        </motion.div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <motion.div 
            className="md:col-span-2"
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.3, duration: 0.6 }}
          >
            <BookingCalendar />
          </motion.div>
          <motion.div 
            className="md:col-span-1"
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.4, duration: 0.6 }}
          >
            <UserDetailsCard 
              name="Vinit Shahdeo"
              duration="30 min"
              description="Get in touch if you're seeking a mentor in software engineering. Learn here how can I help!"
            />
          </motion.div>
        </div>
      </div>
    </motion.div>
  );
};

export default Booking;
