import { Search, Plus, User, Menu } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { useState } from "react";

const Navbar = () => {
  const [mobileOpen, setMobileOpen] = useState(false);

  return (
    <nav className="sticky top-0 z-50 border-b bg-card/80 backdrop-blur-lg">
      <div className="container mx-auto flex h-16 items-center justify-between px-4">
        <Link to="/" className="flex items-center gap-2">
          <div className="flex h-9 w-9 items-center justify-center rounded-xl hero-gradient">
            <span className="text-lg font-black text-primary-foreground">M</span>
          </div>
          <span className="text-xl font-extrabold tracking-tight text-foreground">
            Market<span className="text-gradient">Place</span>
          </span>
        </Link>

        <div className="hidden md:flex items-center gap-2">
          <Button variant="ghost" size="sm" className="text-muted-foreground">
            Browse
          </Button>
          <Button variant="ghost" size="sm" className="text-muted-foreground">
            How it Works
          </Button>
        </div>

        <div className="flex items-center gap-2">
          <Button variant="outline" size="icon" className="rounded-full">
            <Search className="h-4 w-4" />
          </Button>
          <Button className="hidden sm:flex gap-2 rounded-full hero-gradient border-0 text-primary-foreground font-semibold hover:opacity-90 transition-opacity">
            <Plus className="h-4 w-4" />
            Post Ad
          </Button>
          <Button variant="outline" size="icon" className="rounded-full">
            <User className="h-4 w-4" />
          </Button>
          <Button
            variant="ghost"
            size="icon"
            className="md:hidden"
            onClick={() => setMobileOpen(!mobileOpen)}
          >
            <Menu className="h-5 w-5" />
          </Button>
        </div>
      </div>

      {mobileOpen && (
        <div className="md:hidden border-t bg-card px-4 py-3 space-y-2">
          <Button variant="ghost" size="sm" className="w-full justify-start text-muted-foreground">
            Browse
          </Button>
          <Button variant="ghost" size="sm" className="w-full justify-start text-muted-foreground">
            How it Works
          </Button>
          <Button className="w-full gap-2 rounded-full hero-gradient border-0 text-primary-foreground font-semibold sm:hidden">
            <Plus className="h-4 w-4" />
            Post Ad
          </Button>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
