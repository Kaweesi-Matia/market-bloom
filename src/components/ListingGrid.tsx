import ListingCard from "./ListingCard";
import type { Listing } from "@/data/listings";

interface ListingGridProps {
  listings: Listing[];
}

const ListingGrid = ({ listings }: ListingGridProps) => {
  if (listings.length === 0) {
    return (
      <div className="py-20 text-center">
        <p className="text-2xl font-bold text-muted-foreground">No listings found</p>
        <p className="mt-2 text-muted-foreground">Try adjusting your search or filters</p>
      </div>
    );
  }

  return (
    <div className="grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
      {listings.map((listing) => (
        <ListingCard key={listing.id} listing={listing} />
      ))}
    </div>
  );
};

export default ListingGrid;
