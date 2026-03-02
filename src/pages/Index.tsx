import { useState, useMemo } from "react";
import Navbar from "@/components/Navbar";
import HeroSection from "@/components/HeroSection";
import CategoryBar from "@/components/CategoryBar";
import ListingGrid from "@/components/ListingGrid";
import { sampleListings } from "@/data/listings";

const Index = () => {
  const [searchQuery, setSearchQuery] = useState("");
  const [selectedCategory, setSelectedCategory] = useState("all");

  const filteredListings = useMemo(() => {
    return sampleListings.filter((listing) => {
      const matchesSearch =
        searchQuery === "" ||
        listing.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
        listing.description.toLowerCase().includes(searchQuery.toLowerCase());
      const matchesCategory =
        selectedCategory === "all" || listing.category === selectedCategory;
      return matchesSearch && matchesCategory;
    });
  }, [searchQuery, selectedCategory]);

  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      <HeroSection searchQuery={searchQuery} onSearchChange={setSearchQuery} />
      <CategoryBar selected={selectedCategory} onSelect={setSelectedCategory} />

      <main className="container mx-auto px-4 py-8">
        <div className="mb-6 flex items-center justify-between">
          <h2 className="text-2xl font-bold text-foreground">
            {selectedCategory === "all" ? "Latest Listings" : `${selectedCategory.charAt(0).toUpperCase() + selectedCategory.slice(1)}`}
          </h2>
          <span className="text-sm text-muted-foreground">
            {filteredListings.length} result{filteredListings.length !== 1 ? "s" : ""}
          </span>
        </div>
        <ListingGrid listings={filteredListings} />
      </main>

      <footer className="border-t bg-card py-8">
        <div className="container mx-auto px-4 text-center text-sm text-muted-foreground">
          <p className="font-semibold text-foreground mb-1">MarketPlace</p>
          <p>Your local marketplace for buying and selling. © 2026</p>
        </div>
      </footer>
    </div>
  );
};

export default Index;
