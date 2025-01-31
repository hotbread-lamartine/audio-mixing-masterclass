import { Card, CardContent } from "@/components/ui/card";
import { cn } from "@/lib/utils";

interface CategoryCardProps {
  title: string;
  icon: React.ReactNode;
  className?: string;
}

export function CategoryCard({ title, icon, className }: CategoryCardProps) {
  return (
    <Card className={cn("cursor-pointer transition-colors hover:bg-primary/10", className)}>
      <CardContent className="flex flex-col items-center justify-center p-6 text-center">
        <div className="mb-4 text-primary">
          {icon}
        </div>
        <h3 className="font-semibold">{title}</h3>
      </CardContent>
    </Card>
  );
}