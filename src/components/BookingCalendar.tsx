
import React, { useState } from "react";
import { Calendar } from "@/components/ui/calendar";
import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogFooter,
  DialogClose,
} from "@/components/ui/dialog";
import { format } from "date-fns";
import { Input } from "@/components/ui/input";
import { Form, FormField, FormItem, FormLabel, FormControl } from "@/components/ui/form";
import { useForm } from "react-hook-form";
import { toast } from "@/hooks/use-toast";
import { CalendarIcon, Clock, Check, Sparkles, ArrowRight, CheckCircle, User, Mail, FileText } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

type TimeSlot = {
  id: string;
  time: string;
  available: boolean;
};

const BookingCalendar = () => {
  const [selectedDate, setSelectedDate] = useState<Date | undefined>(new Date());
  const [selectedTimeSlot, setSelectedTimeSlot] = useState<string | null>(null);
  const [timeSlots, setTimeSlots] = useState<TimeSlot[]>([
    { id: "1", time: "9:00 AM", available: true },
    { id: "2", time: "10:00 AM", available: true },
    { id: "3", time: "11:00 AM", available: true },
    { id: "4", time: "1:00 PM", available: true },
    { id: "5", time: "2:00 PM", available: true },
    { id: "6", time: "3:00 PM", available: true },
    { id: "7", time: "4:00 PM", available: true },
  ]);
  const [isBookingModalOpen, setIsBookingModalOpen] = useState(false);
  const [bookingStep, setBookingStep] = useState(1);

  const form = useForm({
    defaultValues: {
      name: "",
      email: "",
      notes: "",
    },
  });

  const handleSelectTimeSlot = (timeSlotId: string) => {
    setSelectedTimeSlot(timeSlotId);
    setIsBookingModalOpen(true);
    setBookingStep(1);
  };

  const handleBooking = (data: any) => {
    const selectedSlot = timeSlots.find((slot) => slot.id === selectedTimeSlot);
    
    // Update the availability of the selected time slot
    setTimeSlots((prev) =>
      prev.map((slot) =>
        slot.id === selectedTimeSlot ? { ...slot, available: false } : slot
      )
    );

    toast({
      title: "Booking Confirmed! ✅",
      description: `Your appointment on ${selectedDate ? format(selectedDate, "MMMM d, yyyy") : ""} at ${selectedSlot?.time} has been booked.`,
      variant: "default",
    });

    setIsBookingModalOpen(false);
    form.reset();
  };

  const container = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1
      }
    }
  };
  
  const item = {
    hidden: { opacity: 0, y: 20 },
    show: { opacity: 1, y: 0 }
  };

  const slideVariants = {
    hidden: { x: 20, opacity: 0 },
    visible: { x: 0, opacity: 1, transition: { duration: 0.3 } },
    exit: { x: -20, opacity: 0, transition: { duration: 0.2 } }
  };

  return (
    <motion.div 
      className="bg-white rounded-xl shadow-xl overflow-hidden h-full border-0"
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      whileHover={{ boxShadow: "0 20px 30px rgba(0,0,0,0.1)" }}
    >
      <div className="bg-gradient-to-r from-blue-600 to-purple-600 text-white p-6">
        <motion.h2 
          className="text-3xl font-bold flex items-center"
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3, duration: 0.5 }}
        >
          <CalendarIcon className="mr-2 h-7 w-7" />
          Book Your Appointment
          <motion.span 
            className="ml-2" 
            initial={{ rotate: 0 }}
            animate={{ rotate: [0, 10, -10, 0] }}
            transition={{ duration: 0.5, delay: 1, repeat: 0 }}
          >
            <Sparkles className="h-5 w-5 text-yellow-200" />
          </motion.span>
        </motion.h2>
        <motion.p 
          className="mt-2 opacity-90 max-w-md"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.5, duration: 0.5 }}
        >
          Select a date and time that works best for your schedule
        </motion.p>
      </div>

      <div className="grid md:grid-cols-2">
        {/* Calendar Section */}
        <motion.div 
          className="p-6 border-r border-gray-100"
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5 }}
        >
          <div className="font-medium text-gray-800 mb-6 flex items-center">
            <div className="bg-gradient-to-r from-blue-500 to-purple-500 text-white w-7 h-7 rounded-full flex items-center justify-center mr-2">
              1
            </div>
            <span className="text-lg">Select a Date</span>
          </div>
          <motion.div 
            className="shadow-lg rounded-xl p-4 bg-white border border-gray-100"
            whileHover={{ boxShadow: "0 10px 20px rgba(0,0,0,0.1)" }}
          >
            <Calendar
              mode="single"
              selected={selectedDate}
              onSelect={setSelectedDate}
              className="rounded border-0"
              disabled={(date) => {
                // Disable past dates and weekends for this example
                return date < new Date(new Date().setHours(0, 0, 0, 0)) || 
                       date.getDay() === 0 || 
                       date.getDay() === 6;
              }}
            />
          </motion.div>
          
          {selectedDate && (
            <motion.div 
              className="mt-4 p-4 bg-gradient-to-r from-green-50 to-emerald-50 rounded-lg text-green-800 flex items-center shadow-md"
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
            >
              <Check className="mr-2 h-5 w-5 text-green-500" />
              <span className="font-medium">Selected:</span> &nbsp;{format(selectedDate, "EEEE, MMMM d, yyyy")}
            </motion.div>
          )}
        </motion.div>

        {/* Time Slots Section */}
        <motion.div 
          className="p-6"
          initial={{ opacity: 0, x: 20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
        >
          <div className="font-medium text-gray-800 mb-6 flex items-center">
            <div className="bg-gradient-to-r from-blue-500 to-purple-500 text-white w-7 h-7 rounded-full flex items-center justify-center mr-2">
              2
            </div>
            <span className="text-lg">Select a Time</span>
          </div>

          {selectedDate ? (
            <motion.div 
              className="grid grid-cols-2 gap-3"
              variants={container}
              initial="hidden"
              animate="show"
            >
              {timeSlots.map((slot) => (
                <motion.div key={slot.id} variants={item}>
                  <motion.div 
                    whileHover={slot.available ? { scale: 1.03 } : {}}
                    whileTap={slot.available ? { scale: 0.98 } : {}}
                  >
                    <Button
                      variant={slot.available ? "outline" : "secondary"}
                      disabled={!slot.available}
                      onClick={() => handleSelectTimeSlot(slot.id)}
                      className={`justify-start text-left w-full transition-all duration-300 ${
                        !slot.available 
                          ? "line-through opacity-60" 
                          : "hover:bg-blue-50 hover:text-blue-700 hover:border-blue-300"
                      }`}
                    >
                      <Clock className="mr-2 h-4 w-4" />
                      {slot.time}
                      {!slot.available && (
                        <span className="ml-auto text-xs bg-gray-200 text-gray-600 px-2 py-0.5 rounded-full">
                          Booked
                        </span>
                      )}
                    </Button>
                  </motion.div>
                </motion.div>
              ))}
            </motion.div>
          ) : (
            <div className="text-gray-500 italic bg-gray-50 p-10 rounded-lg text-center border border-dashed border-gray-300 flex flex-col items-center justify-center h-48">
              <CalendarIcon className="h-10 w-10 text-gray-400 mb-2" />
              <p>Please select a date first</p>
            </div>
          )}
        </motion.div>
      </div>

      {/* Booking Modal */}
      <Dialog open={isBookingModalOpen} onOpenChange={setIsBookingModalOpen}>
        <DialogContent className="sm:max-w-[500px] bg-white rounded-xl p-0 overflow-hidden border-0">
          <div className="h-3 bg-gradient-to-r from-blue-500 to-purple-600"></div>
          <DialogHeader className="px-6 pt-6 pb-2">
            <DialogTitle className="text-2xl font-bold text-center bg-clip-text text-transparent bg-gradient-to-r from-blue-600 to-purple-600">
              <motion.div 
                initial={{ opacity: 0, y: -10 }} 
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.2 }}
              >
                Complete Your Booking
              </motion.div>
            </DialogTitle>
          </DialogHeader>
          
          <AnimatePresence mode="wait">
            <motion.div
              key={bookingStep}
              initial="hidden"
              animate="visible"
              exit="exit"
              variants={slideVariants}
              className="px-6 pt-4 pb-6"
            >
              <Form {...form}>
                <form onSubmit={form.handleSubmit(handleBooking)} className="space-y-5">
                  <motion.div 
                    className="bg-gradient-to-r from-blue-50 to-indigo-50 p-4 rounded-xl mb-5 border-l-4 border-blue-500 shadow-sm"
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.3 }}
                  >
                    <p className="font-medium text-gray-700 flex items-center">
                      <CalendarIcon className="mr-2 h-5 w-5 text-blue-600" />
                      <motion.span
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ delay: 0.5 }}
                      >
                        {selectedDate ? format(selectedDate, "MMMM d, yyyy") : ""} at{" "}
                        <span className="text-blue-700 font-semibold">
                          {timeSlots.find((slot) => slot.id === selectedTimeSlot)?.time}
                        </span>
                      </motion.span>
                    </p>
                  </motion.div>
                  
                  <motion.div 
                    variants={container} 
                    initial="hidden" 
                    animate="show" 
                    className="space-y-4"
                  >
                    <motion.div variants={item}>
                      <FormField
                        control={form.control}
                        name="name"
                        render={({ field }) => (
                          <FormItem>
                            <FormLabel className="flex items-center text-sm font-medium text-gray-700">
                              <User className="mr-2 h-4 w-4 text-blue-600" /> Your Name
                            </FormLabel>
                            <FormControl>
                              <Input 
                                placeholder="John Doe" 
                                {...field} 
                                required 
                                className="focus:border-blue-500 focus:ring focus:ring-blue-200 focus:ring-opacity-50 transition-all duration-300 hover:border-blue-300" 
                              />
                            </FormControl>
                          </FormItem>
                        )}
                      />
                    </motion.div>
                    
                    <motion.div variants={item}>
                      <FormField
                        control={form.control}
                        name="email"
                        render={({ field }) => (
                          <FormItem>
                            <FormLabel className="flex items-center text-sm font-medium text-gray-700">
                              <Mail className="mr-2 h-4 w-4 text-blue-600" /> Email Address
                            </FormLabel>
                            <FormControl>
                              <Input 
                                placeholder="john@example.com" 
                                type="email" 
                                {...field} 
                                required 
                                className="focus:border-blue-500 focus:ring focus:ring-blue-200 focus:ring-opacity-50 transition-all duration-300 hover:border-blue-300" 
                              />
                            </FormControl>
                          </FormItem>
                        )}
                      />
                    </motion.div>
                    
                    <motion.div variants={item}>
                      <FormField
                        control={form.control}
                        name="notes"
                        render={({ field }) => (
                          <FormItem>
                            <FormLabel className="flex items-center text-sm font-medium text-gray-700">
                              <FileText className="mr-2 h-4 w-4 text-blue-600" /> Notes (Optional)
                            </FormLabel>
                            <FormControl>
                              <Input 
                                placeholder="Any special requirements" 
                                {...field} 
                                className="focus:border-blue-500 focus:ring focus:ring-blue-200 focus:ring-opacity-50 transition-all duration-300 hover:border-blue-300" 
                              />
                            </FormControl>
                          </FormItem>
                        )}
                      />
                    </motion.div>
                  </motion.div>
                  
                  <DialogFooter className="pt-5 flex-col-reverse sm:flex-row gap-3">
                    <motion.div 
                      whileHover={{ scale: 1.03 }} 
                      whileTap={{ scale: 0.97 }}
                      initial={{ opacity: 0, x: -10 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ delay: 0.6 }}
                    >
                      <DialogClose asChild>
                        <Button type="button" variant="outline" className="border-gray-200 hover:border-gray-300 hover:bg-gray-50 transition-all duration-300">
                          Cancel
                        </Button>
                      </DialogClose>
                    </motion.div>
                    <motion.div 
                      whileHover={{ scale: 1.03 }} 
                      whileTap={{ scale: 0.97 }}
                      initial={{ opacity: 0, x: 10 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ delay: 0.7 }}
                      className="w-full sm:w-auto"
                    >
                      <Button 
                        type="submit" 
                        className="bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 group w-full relative overflow-hidden"
                      >
                        <span className="relative z-10 flex items-center">
                          Confirm Booking
                          <ArrowRight className="ml-1 h-4 w-4 group-hover:translate-x-1 transition-transform" />
                        </span>
                        <span className="absolute inset-0 bg-gradient-to-r from-blue-700 to-purple-700 opacity-0 group-hover:opacity-100 transition-opacity"></span>
                      </Button>
                    </motion.div>
                  </DialogFooter>
                </form>
              </Form>
            </motion.div>
          </AnimatePresence>
          
          {/* Success Animation (can be shown after form submission) */}
          <AnimatePresence>
            {false && ( // Change to true when submission is successful
              <motion.div
                className="absolute inset-0 flex items-center justify-center bg-white z-10"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
              >
                <motion.div
                  initial={{ scale: 0.8, opacity: 0 }}
                  animate={{ scale: 1, opacity: 1 }}
                  transition={{ type: "spring", stiffness: 300, damping: 20 }}
                  className="text-center"
                >
                  <motion.div
                    initial={{ scale: 0, opacity: 0 }}
                    animate={{ scale: 1, opacity: 1 }}
                    transition={{ delay: 0.2, type: "spring", stiffness: 300 }}
                    className="mx-auto mb-4 rounded-full bg-green-100 p-3 w-20 h-20 flex items-center justify-center"
                  >
                    <CheckCircle className="h-10 w-10 text-green-500" />
                  </motion.div>
                  <h3 className="text-xl font-semibold mb-1">Booking Confirmed!</h3>
                  <p className="text-gray-600">Your appointment has been scheduled</p>
                </motion.div>
              </motion.div>
            )}
          </AnimatePresence>
        </DialogContent>
      </Dialog>
    </motion.div>
  );
};

export default BookingCalendar;
