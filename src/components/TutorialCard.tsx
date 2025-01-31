import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Clock, BookOpen } from "lucide-react";

interface TutorialCardProps {
  title: string;
  description: string;
  category: string;
  duration: string;
  level: "Beginner" | "Intermediate" | "Advanced";
  image: string;
}

export function TutorialCard({ title, description, category, duration, level, image }: TutorialCardProps) {
  return (
    <Card className="overflow-hidden card-hover border border-primary/20">
      <div className="aspect-video relative overflow-hidden">
        <img 
          src={image} 
          alt={title}
          className="object-cover w-full h-full transition-transform duration-300 hover:scale-110"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-background/80 to-transparent opacity-0 hover:opacity-100 transition-opacity duration-300" />
      </div>
      <CardHeader>
        <div className="flex justify-between items-start mb-2">
          <Badge variant="secondary" className="bg-primary/20 text-primary-foreground hover:bg-primary/30">
            {level}
          </Badge>
          <div className="flex items-center text-sm text-muted-foreground">
            <Clock className="w-4 h-4 mr-1" />
            {duration}
          </div>
        </div>
        <CardTitle className="line-clamp-2 bg-clip-text text-transparent bg-gradient-to-r from-primary to-primary-foreground">
          {title}
        </CardTitle>
        <CardDescription className="line-clamp-2">{description}</CardDescription>
      </CardHeader>
      <CardContent>
        <div className="flex items-center text-sm text-muted-foreground hover:text-primary transition-colors duration-200">
          <BookOpen className="w-4 h-4 mr-1" />
          {category}
        </div>
      </CardContent>
    </Card>
  );
}