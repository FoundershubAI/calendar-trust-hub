
import React from "react";
import { Avatar, AvatarImage, AvatarFallback } from "@/components/ui/avatar";
import { Card, CardContent } from "@/components/ui/card";
import { Clock, Video, Calendar, ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";

type UserDetailsCardProps = {
  name: string;
  duration: string;
  image?: string;
  meetingType?: string;
  description?: string;
}

const UserDetailsCard: React.FC<UserDetailsCardProps> = ({ 
  name, 
  duration, 
  image, 
  meetingType = "Web conferencing details provided upon confirmation.",
  description
}) => {
  const container = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.3
      }
    }
  };
  
  const item = {
    hidden: { opacity: 0, y: 10 },
    show: { opacity: 1, y: 0 }
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay: 0.4 }}
    >
      <Card className="w-full bg-white rounded-lg shadow-lg overflow-hidden border border-blue-100 hover:shadow-xl transition-shadow duration-300">
        <div className="bg-gradient-to-r from-blue-100 to-blue-50 p-1"></div>
        <CardContent className="p-6">
          <motion.div variants={container} initial="hidden" animate="show" className="space-y-6">
            <motion.div variants={item} className="flex items-center gap-4">
              <Avatar className="h-16 w-16 ring-2 ring-blue-100">
                {image ? (
                  <AvatarImage src={image} alt={name} />
                ) : (
                  <AvatarFallback className="bg-gradient-to-br from-blue-500 to-blue-600 text-white text-xl font-medium">
                    {name.charAt(0)}
                  </AvatarFallback>
                )}
              </Avatar>
              <div>
                <p className="text-gray-500 font-medium">{name}</p>
                <h3 className="text-2xl font-bold text-gray-800">Say Hello</h3>
              </div>
            </motion.div>

            <motion.div variants={item} className="space-y-3 border-t border-b py-5 border-blue-50">
              <div className="flex items-center gap-3 bg-blue-50 p-3 rounded-lg">
                <div className="bg-white p-2 rounded-full shadow-sm">
                  <Calendar className="h-5 w-5 text-blue-600" />
                </div>
                <div>
                  <p className="text-sm text-gray-500">Session Duration</p>
                  <p className="text-gray-700 font-medium">{duration}</p>
                </div>
              </div>
              
              <div className="flex items-center gap-3 bg-blue-50 p-3 rounded-lg">
                <div className="bg-white p-2 rounded-full shadow-sm">
                  <Video className="h-5 w-5 text-blue-600" />
                </div>
                <div>
                  <p className="text-sm text-gray-500">Meeting Type</p>
                  <p className="text-gray-700 font-medium">{meetingType}</p>
                </div>
              </div>
            </motion.div>

            {description && (
              <motion.div variants={item} className="text-gray-700 bg-gradient-to-r from-blue-50 to-white p-4 rounded-lg border-l-4 border-blue-500">
                <p className="italic">{description}</p>
              </motion.div>
            )}

            <motion.div variants={item}>
              <Button className="w-full bg-gradient-to-r from-blue-600 to-blue-500 hover:from-blue-700 hover:to-blue-600 group">
                Learn More About Me
                <ArrowRight className="ml-1 h-4 w-4 group-hover:translate-x-1 transition-transform" />
              </Button>
            </motion.div>
          </motion.div>
        </CardContent>
      </Card>
    </motion.div>
  );
};

export default UserDetailsCard;
