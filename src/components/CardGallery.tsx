import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";

interface CardData {
  id: string;
  title: string;
  type: string;
  description: string;
  createdAt: string;
  color: string;
}

const sampleCards: CardData[] = [
  {
    id: "1",
    title: "Business Card",
    type: "Professional",
    description: "Modern business card design with gradient background",
    createdAt: "2024-01-15",
    color: "from-blue-500 to-purple-600"
  },
  {
    id: "2", 
    title: "Birthday Invitation",
    type: "Personal",
    description: "Colorful birthday party invitation with festive elements",
    createdAt: "2024-01-10",
    color: "from-pink-500 to-orange-500"
  },
  {
    id: "3",
    title: "Wedding Card",
    type: "Special Event",
    description: "Elegant wedding invitation with floral patterns",
    createdAt: "2024-01-08",
    color: "from-rose-400 to-pink-600"
  },
  {
    id: "4",
    title: "Company Logo",
    type: "Branding",
    description: "Professional logo design for tech startup",
    createdAt: "2024-01-05",
    color: "from-green-500 to-teal-600"
  },
  {
    id: "5",
    title: "Thank You Card",
    type: "Personal",
    description: "Heartfelt thank you card with minimalist design",
    createdAt: "2024-01-03",
    color: "from-violet-500 to-purple-600"
  },
  {
    id: "6",
    title: "Holiday Greeting",
    type: "Seasonal",
    description: "Festive holiday card with winter theme",
    createdAt: "2023-12-20",
    color: "from-red-500 to-green-600"
  }
];

export const CardGallery = () => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
      {sampleCards.map((card) => (
        <Card 
          key={card.id} 
          className="group bg-gradient-card hover:shadow-elegant transition-all duration-300 hover:-translate-y-2 cursor-pointer border-0"
        >
          <CardContent className="p-6">
            <div className={`h-32 w-full bg-gradient-to-br ${card.color} rounded-lg mb-4 relative overflow-hidden`}>
              <div className="absolute inset-0 bg-white/10 backdrop-blur-sm opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              <div className="absolute bottom-2 right-2 w-8 h-8 bg-white/20 rounded-full animate-glow" />
            </div>
            
            <div className="space-y-3">
              <div className="flex items-center justify-between">
                <h3 className="font-semibold text-card-foreground group-hover:text-primary transition-colors duration-300">
                  {card.title}
                </h3>
                <Badge variant="secondary" className="text-xs">
                  {card.type}
                </Badge>
              </div>
              
              <p className="text-sm text-muted-foreground line-clamp-2">
                {card.description}
              </p>
              
              <div className="flex items-center justify-between text-xs text-muted-foreground pt-2">
                <span>Created: {new Date(card.createdAt).toLocaleDateString()}</span>
                <div className="w-2 h-2 bg-primary rounded-full animate-pulse" />
              </div>
            </div>
          </CardContent>
        </Card>
      ))}
    </div>
  );
};