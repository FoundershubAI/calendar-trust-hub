
import React, { useState } from "react";
import { Calendar } from "@/components/ui/calendar";
import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogFooter,
  DialogTrigger,
  DialogClose,
} from "@/components/ui/dialog";
import { format } from "date-fns";
import { Input } from "@/components/ui/input";
import { Form, FormField, FormItem, FormLabel, FormControl } from "@/components/ui/form";
import { useForm } from "react-hook-form";
import { toast } from "@/hooks/use-toast";
import { CalendarIcon, Clock, Check } from "lucide-react";
import { motion } from "framer-motion";

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
      title: "Booking Confirmed!",
      description: `Your appointment on ${selectedDate ? format(selectedDate, "MMMM d, yyyy") : ""} at ${selectedSlot?.time} has been booked.`,
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

  return (
    <div className="bg-white rounded-lg shadow-xl overflow-hidden h-full border border-blue-100">
      <div className="bg-gradient-to-r from-blue-600 to-blue-500 text-white p-6">
        <h2 className="text-2xl font-semibold flex items-center">
          <CalendarIcon className="mr-2 h-6 w-6" />
          Book Your Appointment
        </h2>
        <p className="mt-1 opacity-80">Select a date and time that works for you</p>
      </div>

      <div className="grid md:grid-cols-2">
        {/* Calendar Section */}
        <motion.div 
          className="p-6 border-r border-gray-200"
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5 }}
        >
          <div className="font-medium text-gray-800 mb-4 flex items-center">
            <div className="bg-blue-100 text-blue-600 w-6 h-6 rounded-full flex items-center justify-center mr-2">1</div>
            Select a Date
          </div>
          <div className="shadow-md rounded-lg p-2 bg-white">
            <Calendar
              mode="single"
              selected={selectedDate}
              onSelect={setSelectedDate}
              className="rounded border p-3"
              disabled={(date) => {
                // Disable past dates and weekends for this example
                return date < new Date(new Date().setHours(0, 0, 0, 0)) || 
                       date.getDay() === 0 || 
                       date.getDay() === 6;
              }}
            />
          </div>
          
          {selectedDate && (
            <motion.div 
              className="mt-4 p-3 bg-blue-50 rounded-lg text-blue-800 flex items-center"
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
            >
              <Check className="mr-2 h-5 w-5 text-green-500" />
              Selected: {format(selectedDate, "EEEE, MMMM d, yyyy")}
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
          <div className="font-medium text-gray-800 mb-4 flex items-center">
            <div className="bg-blue-100 text-blue-600 w-6 h-6 rounded-full flex items-center justify-center mr-2">2</div>
            Select a Time
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
                  </Button>
                </motion.div>
              ))}
            </motion.div>
          ) : (
            <div className="text-gray-500 italic bg-gray-50 p-8 rounded-lg text-center">
              Please select a date first
            </div>
          )}
        </motion.div>
      </div>

      {/* Booking Modal */}
      <Dialog open={isBookingModalOpen} onOpenChange={setIsBookingModalOpen}>
        <DialogContent className="sm:max-w-[425px]">
          <DialogHeader>
            <DialogTitle>Complete Your Booking</DialogTitle>
          </DialogHeader>
          
          <Form {...form}>
            <form onSubmit={form.handleSubmit(handleBooking)} className="space-y-4 pt-4">
              <div className="bg-blue-50 p-4 rounded-md mb-4 border-l-4 border-blue-500">
                <p className="font-medium text-gray-700 flex items-center">
                  <CalendarIcon className="mr-2 h-4 w-4 text-blue-600" />
                  {selectedDate ? format(selectedDate, "MMMM d, yyyy") : ""} at{" "}
                  {timeSlots.find((slot) => slot.id === selectedTimeSlot)?.time}
                </p>
              </div>
              
              <FormField
                control={form.control}
                name="name"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Name</FormLabel>
                    <FormControl>
                      <Input placeholder="John Doe" {...field} required className="focus:border-blue-500" />
                    </FormControl>
                  </FormItem>
                )}
              />
              
              <FormField
                control={form.control}
                name="email"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Email</FormLabel>
                    <FormControl>
                      <Input placeholder="john@example.com" type="email" {...field} required className="focus:border-blue-500" />
                    </FormControl>
                  </FormItem>
                )}
              />
              
              <FormField
                control={form.control}
                name="notes"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Notes (Optional)</FormLabel>
                    <FormControl>
                      <Input placeholder="Any special requirements" {...field} className="focus:border-blue-500" />
                    </FormControl>
                  </FormItem>
                )}
              />
              
              <DialogFooter className="pt-4">
                <DialogClose asChild>
                  <Button type="button" variant="outline" className="hover:bg-gray-100">Cancel</Button>
                </DialogClose>
                <Button type="submit" className="bg-gradient-to-r from-blue-600 to-blue-500 hover:from-blue-700 hover:to-blue-600">
                  Confirm Booking
                </Button>
              </DialogFooter>
            </form>
          </Form>
        </DialogContent>
      </Dialog>
    </div>
  );
};

export default BookingCalendar;
