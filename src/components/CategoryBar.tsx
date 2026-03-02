import {
  LayoutGrid,
  Car,
  Smartphone,
  Sofa,
  Shirt,
  Dumbbell,
  BookOpen,
  Home,
} from "lucide-react";
import { categories } from "@/data/listings";
import { cn } from "@/lib/utils";

const iconMap: Record<string, React.ReactNode> = {
  LayoutGrid: <LayoutGrid className="h-5 w-5" />,
  Car: <Car className="h-5 w-5" />,
  Smartphone: <Smartphone className="h-5 w-5" />,
  Sofa: <Sofa className="h-5 w-5" />,
  Shirt: <Shirt className="h-5 w-5" />,
  Dumbbell: <Dumbbell className="h-5 w-5" />,
  BookOpen: <BookOpen className="h-5 w-5" />,
  Home: <Home className="h-5 w-5" />,
};

interface CategoryBarProps {
  selected: string;
  onSelect: (id: string) => void;
}

const CategoryBar = ({ selected, onSelect }: CategoryBarProps) => {
  return (
    <section className="border-b bg-card">
      <div className="container mx-auto px-4">
        <div className="flex gap-1 overflow-x-auto py-3 scrollbar-hide">
          {categories.map((cat) => (
            <button
              key={cat.id}
              onClick={() => onSelect(cat.id)}
              className={cn(
                "flex items-center gap-2 whitespace-nowrap rounded-full px-4 py-2 text-sm font-medium transition-all",
                selected === cat.id
                  ? "hero-gradient text-primary-foreground shadow-md"
                  : "text-muted-foreground hover:bg-muted"
              )}
            >
              {iconMap[cat.icon]}
              {cat.label}
            </button>
          ))}
        </div>
      </div>
    </section>
  );
};

export default CategoryBar;
