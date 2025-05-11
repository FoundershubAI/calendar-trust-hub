
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
import { CalendarIcon, Clock } from "lucide-react";

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

  return (
    <div className="bg-white rounded-lg shadow-xl overflow-hidden max-w-4xl mx-auto">
      <div className="bg-blue-600 text-white p-5">
        <h2 className="text-2xl font-semibold flex items-center">
          <CalendarIcon className="mr-2 h-6 w-6" />
          Book Your Appointment
        </h2>
      </div>

      <div className="grid md:grid-cols-2">
        {/* Calendar Section */}
        <div className="p-5 border-r border-gray-200">
          <div className="font-medium text-gray-800 mb-4">1. Select a Date</div>
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

        {/* Time Slots Section */}
        <div className="p-5">
          <div className="font-medium text-gray-800 mb-4">2. Select a Time</div>
          {selectedDate ? (
            <div className="grid grid-cols-2 gap-2">
              {timeSlots.map((slot) => (
                <Button
                  key={slot.id}
                  variant={slot.available ? "outline" : "secondary"}
                  disabled={!slot.available}
                  onClick={() => handleSelectTimeSlot(slot.id)}
                  className={`justify-start text-left ${!slot.available ? "line-through opacity-60" : ""}`}
                >
                  <Clock className="mr-2 h-4 w-4" />
                  {slot.time}
                </Button>
              ))}
            </div>
          ) : (
            <div className="text-gray-500 italic">Please select a date first</div>
          )}
        </div>
      </div>

      {/* Booking Modal */}
      <Dialog open={isBookingModalOpen} onOpenChange={setIsBookingModalOpen}>
        <DialogContent className="sm:max-w-[425px]">
          <DialogHeader>
            <DialogTitle>Complete Your Booking</DialogTitle>
          </DialogHeader>
          
          <Form {...form}>
            <form onSubmit={form.handleSubmit(handleBooking)} className="space-y-4 pt-4">
              <div className="bg-blue-50 p-3 rounded-md mb-4">
                <p className="font-medium text-gray-700">
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
                      <Input placeholder="John Doe" {...field} required />
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
                      <Input placeholder="john@example.com" type="email" {...field} required />
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
                      <Input placeholder="Any special requirements" {...field} />
                    </FormControl>
                  </FormItem>
                )}
              />
              
              <DialogFooter className="pt-4">
                <DialogClose asChild>
                  <Button type="button" variant="outline">Cancel</Button>
                </DialogClose>
                <Button type="submit">Confirm Booking</Button>
              </DialogFooter>
            </form>
          </Form>
        </DialogContent>
      </Dialog>
    </div>
  );
};

export default BookingCalendar;
