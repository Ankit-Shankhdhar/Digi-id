import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent } from "@/components/ui/card";

export const ProfileHeader = () => {
  return (
    <Card className="bg-gradient-primary text-white border-0 shadow-elegant">
      <CardContent className="p-8">
        <div className="flex flex-col md:flex-row items-center gap-6">
          <div className="relative">
            <Avatar className="w-24 h-24 border-4 border-white/20 shadow-lg">
              <AvatarImage src="/placeholder.svg" alt="Profile" />
              <AvatarFallback className="bg-white/10 text-white text-2xl font-bold">
                JD
              </AvatarFallback>
            </Avatar>
            <div className="absolute -bottom-2 -right-2 w-6 h-6 bg-green-400 rounded-full border-2 border-white animate-pulse" />
          </div>
          
          <div className="flex-1 text-center md:text-left">
            <h1 className="text-3xl font-bold mb-2">John Designer</h1>
            <p className="text-white/80 mb-3">Creative Card Designer & Visual Artist</p>
            
            <div className="flex flex-wrap gap-2 justify-center md:justify-start">
              <Badge variant="secondary" className="bg-white/20 text-white border-white/30 hover:bg-white/30">
                Pro Creator
              </Badge>
              <Badge variant="secondary" className="bg-white/20 text-white border-white/30 hover:bg-white/30">
                24 Cards Created
              </Badge>
              <Badge variant="secondary" className="bg-white/20 text-white border-white/30 hover:bg-white/30">
                Member Since 2023
              </Badge>
            </div>
          </div>
          
          <div className="text-center">
            <div className="text-2xl font-bold">24</div>
            <div className="text-white/80 text-sm">Total Cards</div>
          </div>
        </div>
      </CardContent>
    </Card>
  );
};