
import React from "react";
import { Avatar, AvatarImage, AvatarFallback } from "@/components/ui/avatar";
import { Card, CardContent } from "@/components/ui/card";
import { Clock, Video, Calendar, ArrowRight, Star, Shield, Sparkles } from "lucide-react";
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
        staggerChildren: 0.15,
        delayChildren: 0.3
      }
    }
  };
  
  const item = {
    hidden: { opacity: 0, y: 20 },
    show: { opacity: 1, y: 0 }
  };

  const glowEffect = {
    rest: { opacity: 0.4, ease: "easeOut", duration: 0.2, type: "tween" },
    hover: {
      opacity: 1,
      transition: {
        duration: 0.4,
        type: "tween",
        ease: "easeIn"
      }
    }
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.7, delay: 0.4 }}
      className="h-full"
    >
      <Card className="w-full h-full bg-white rounded-xl overflow-hidden border-0 shadow-lg hover:shadow-2xl transition-all duration-300">
        <div className="h-3 bg-gradient-to-r from-blue-400 to-purple-500"></div>
        <CardContent className="p-6">
          <motion.div variants={container} initial="hidden" animate="show" className="space-y-6">
            <motion.div variants={item} className="flex items-center gap-4">
              <motion.div 
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                transition={{ type: "spring", stiffness: 400, damping: 10 }}
              >
                <Avatar className="h-20 w-20 ring-4 ring-blue-100 shadow-md">
                  {image ? (
                    <AvatarImage src={image} alt={name} />
                  ) : (
                    <AvatarFallback className="bg-gradient-to-br from-blue-500 to-purple-600 text-white text-xl font-medium">
                      {name.charAt(0)}
                      <motion.div
                        className="absolute inset-0 rounded-full bg-white"
                        initial="rest"
                        whileHover="hover"
                        animate="rest"
                        variants={{
                          rest: { opacity: 0 },
                          hover: { opacity: 0.2 }
                        }}
                      />
                    </AvatarFallback>
                  )}
                </Avatar>
              </motion.div>
              <div>
                <div className="flex items-center gap-1">
                  <p className="text-gray-500 font-medium">{name}</p>
                  <Sparkles className="h-4 w-4 text-yellow-400" />
                </div>
                <h3 className="text-2xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-blue-600 to-purple-600">Say Hello</h3>
              </div>
            </motion.div>

            <motion.div variants={item} className="space-y-3 border-t border-b py-5 border-blue-50">
              <motion.div 
                className="flex items-center gap-3 bg-gradient-to-r from-blue-50 to-indigo-50 p-3 rounded-lg"
                whileHover={{ scale: 1.02, boxShadow: "0 5px 15px rgba(0,0,0,0.05)" }}
                transition={{ type: "spring", stiffness: 300, damping: 20 }}
              >
                <div className="bg-white p-2 rounded-full shadow-md">
                  <Clock className="h-5 w-5 text-blue-600" />
                </div>
                <div>
                  <p className="text-sm text-gray-500">Session Duration</p>
                  <p className="text-gray-700 font-semibold">{duration}</p>
                </div>
              </motion.div>
              
              <motion.div 
                className="flex items-center gap-3 bg-gradient-to-r from-blue-50 to-indigo-50 p-3 rounded-lg"
                whileHover={{ scale: 1.02, boxShadow: "0 5px 15px rgba(0,0,0,0.05)" }}
                transition={{ type: "spring", stiffness: 300, damping: 20 }}  
              >
                <div className="bg-white p-2 rounded-full shadow-md">
                  <Video className="h-5 w-5 text-blue-600" />
                </div>
                <div>
                  <p className="text-sm text-gray-500">Meeting Type</p>
                  <p className="text-gray-700 font-semibold">{meetingType}</p>
                </div>
              </motion.div>

              <motion.div 
                className="flex items-center gap-3 bg-gradient-to-r from-blue-50 to-indigo-50 p-3 rounded-lg"
                whileHover={{ scale: 1.02, boxShadow: "0 5px 15px rgba(0,0,0,0.05)" }}
                transition={{ type: "spring", stiffness: 300, damping: 20 }}  
              >
                <div className="bg-white p-2 rounded-full shadow-md">
                  <Shield className="h-5 w-5 text-blue-600" />
                </div>
                <div>
                  <p className="text-sm text-gray-500">Guaranteed</p>
                  <p className="text-gray-700 font-semibold">100% Satisfaction</p>
                </div>
              </motion.div>
            </motion.div>

            {description && (
              <motion.div 
                variants={item} 
                className="text-gray-700 bg-gradient-to-r from-blue-50 to-indigo-50 p-4 rounded-lg border-l-4 border-blue-500 relative overflow-hidden"
              >
                <motion.div
                  className="absolute inset-0 bg-gradient-to-r from-blue-200/10 to-purple-200/10"
                  initial="rest"
                  whileHover="hover"
                  variants={glowEffect}
                />
                <p className="italic relative z-10">{description}</p>
              </motion.div>
            )}

            <motion.div variants={item}>
              <motion.div whileHover={{ scale: 1.02 }} whileTap={{ scale: 0.98 }}>
                <Button 
                  className="w-full bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 group shadow-lg hover:shadow-xl transition-all duration-300"
                >
                  <span>Learn More About Me</span>
                  <ArrowRight className="ml-1 h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" />
                </Button>
              </motion.div>
            </motion.div>
          </motion.div>
        </CardContent>
      </Card>
    </motion.div>
  );
};

export default UserDetailsCard;
