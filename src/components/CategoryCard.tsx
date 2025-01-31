import { Card, CardContent } from "@/components/ui/card";
import { cn } from "@/lib/utils";

interface CategoryCardProps {
  title: string;
  icon: React.ReactNode;
  className?: string;
}

export function CategoryCard({ title, icon, className }: CategoryCardProps) {
  return (
    <Card className={cn("category-card cursor-pointer", className)}>
      <CardContent className="flex flex-col items-center justify-center p-6 text-center space-y-3">
        <div className="category-icon text-primary/80">
          {icon}
        </div>
        <h3 className="font-semibold text-lg">{title}</h3>
      </CardContent>
    </Card>
  );
}