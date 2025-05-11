
import React from "react";
import { Avatar, AvatarImage, AvatarFallback } from "@/components/ui/avatar";
import { Card, CardContent } from "@/components/ui/card";
import { Clock, Video } from "lucide-react";

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
  return (
    <Card className="w-full bg-white rounded-lg shadow-lg overflow-hidden">
      <CardContent className="p-6 space-y-5">
        <div className="flex items-center gap-3">
          <Avatar className="h-14 w-14">
            {image ? (
              <AvatarImage src={image} alt={name} />
            ) : (
              <AvatarFallback className="bg-blue-100 text-blue-600 text-lg font-medium">
                {name.charAt(0)}
              </AvatarFallback>
            )}
          </Avatar>
          <div>
            <p className="text-gray-500 font-medium">{name}</p>
            <h3 className="text-2xl font-bold text-gray-800">Say Hello</h3>
          </div>
        </div>

        <div className="space-y-3 border-t border-b py-4 border-gray-100">
          <div className="flex items-center gap-3">
            <Clock className="h-5 w-5 text-gray-500" />
            <p className="text-gray-600">{duration}</p>
          </div>
          
          <div className="flex items-center gap-3">
            <Video className="h-5 w-5 text-gray-500" />
            <p className="text-gray-600">{meetingType}</p>
          </div>
        </div>

        {description && (
          <div className="text-gray-700">
            <p>{description}</p>
          </div>
        )}
      </CardContent>
    </Card>
  );
};

export default UserDetailsCard;
