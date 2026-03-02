import { Search, MapPin } from "lucide-react";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import heroBg from "@/assets/hero-bg.jpg";

interface HeroSectionProps {
  searchQuery: string;
  onSearchChange: (query: string) => void;
}

const HeroSection = ({ searchQuery, onSearchChange }: HeroSectionProps) => {
  return (
    <section className="relative overflow-hidden py-16 md:py-24">
      <div
        className="absolute inset-0 bg-cover bg-center opacity-20"
        style={{ backgroundImage: `url(${heroBg})` }}
      />
      <div className="absolute inset-0 hero-gradient opacity-90" />

      <div className="container relative mx-auto px-4 text-center">
        <h1 className="mb-3 text-4xl font-black tracking-tight text-primary-foreground md:text-6xl">
          Find Anything,
          <br />
          <span className="opacity-90">Sell Everything</span>
        </h1>
        <p className="mx-auto mb-8 max-w-lg text-lg text-primary-foreground/80">
          Your local marketplace for buying and selling. Thousands of listings near you.
        </p>

        <div className="mx-auto flex max-w-2xl flex-col gap-3 sm:flex-row">
          <div className="relative flex-1">
            <Search className="absolute left-3 top-1/2 h-5 w-5 -translate-y-1/2 text-muted-foreground" />
            <Input
              placeholder="Search for anything..."
              value={searchQuery}
              onChange={(e) => onSearchChange(e.target.value)}
              className="h-12 rounded-full bg-card pl-11 text-base shadow-lg border-0"
            />
          </div>
          <div className="relative sm:w-48">
            <MapPin className="absolute left-3 top-1/2 h-5 w-5 -translate-y-1/2 text-muted-foreground" />
            <Input
              placeholder="Location"
              className="h-12 rounded-full bg-card pl-11 text-base shadow-lg border-0"
            />
          </div>
          <Button className="h-12 rounded-full bg-foreground px-8 text-base font-bold text-background hover:bg-foreground/90">
            Search
          </Button>
        </div>

        <div className="mt-6 flex flex-wrap justify-center gap-2">
          {["Trending", "Near Me", "Under $50", "Free Stuff"].map((tag) => (
            <button
              key={tag}
              className="rounded-full border border-primary-foreground/30 px-4 py-1.5 text-sm font-medium text-primary-foreground/90 transition-colors hover:bg-primary-foreground/10"
            >
              {tag}
            </button>
          ))}
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
