import { 
  Calculator, 
  Book, 
  Pencil, 
  Palette,
  ArrowRight
} from "lucide-react";
import { Card, CardContent } from "./card";
import { Button } from "./button";

interface SubjectCardProps {
  title: string;
  description: string;
  icon: string;
  color: string;
}

const iconMap = {
  calculator: Calculator,
  book: Book,
  pencil: Pencil,
  palette: Palette
};

export default function SubjectCard({ title, description, icon, color }: SubjectCardProps) {
  const Icon = iconMap[icon as keyof typeof iconMap];

  return (
    <Card className="group hover:shadow-lg transition-shadow duration-300">
      <CardContent className="p-6">
        <div className={`${color} w-12 h-12 rounded-lg flex items-center justify-center mb-4`}>
          <Icon className="w-6 h-6" />
        </div>
        <h3 className="text-xl font-semibold mb-2">{title}</h3>
        <p className="text-muted-foreground mb-4">{description}</p>
        <Button 
          variant="ghost" 
          className="group-hover:translate-x-2 transition-transform duration-300"
        >
          Learn more <ArrowRight className="ml-2 w-4 h-4" />
        </Button>
      </CardContent>
    </Card>
  );
}
