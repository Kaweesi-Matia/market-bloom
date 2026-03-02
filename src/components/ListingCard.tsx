import { MapPin, Clock, Star } from "lucide-react";
import { Link } from "react-router-dom";
import { Badge } from "@/components/ui/badge";
import type { Listing } from "@/data/listings";

interface ListingCardProps {
  listing: Listing;
}

const conditionColors: Record<string, string> = {
  new: "bg-badge-new text-primary-foreground",
  "like-new": "bg-secondary text-secondary-foreground",
  used: "bg-muted text-muted-foreground",
  fair: "bg-muted text-muted-foreground",
};

const ListingCard = ({ listing }: ListingCardProps) => {
  return (
    <Link
      to={`/listing/${listing.id}`}
      className="group block overflow-hidden rounded-2xl bg-card card-shadow transition-all duration-300 hover:card-shadow-hover hover:-translate-y-1"
    >
      <div className="relative aspect-[4/3] overflow-hidden">
        <img
          src={listing.image}
          alt={listing.title}
          className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
          loading="lazy"
        />
        {listing.featured && (
          <div className="absolute left-3 top-3">
            <Badge className="hero-gradient border-0 text-primary-foreground font-semibold gap-1">
              <Star className="h-3 w-3 fill-current" />
              Featured
            </Badge>
          </div>
        )}
        <div className="absolute right-3 top-3">
          <Badge className={conditionColors[listing.condition]}>
            {listing.condition === "like-new" ? "Like New" : listing.condition.charAt(0).toUpperCase() + listing.condition.slice(1)}
          </Badge>
        </div>
      </div>

      <div className="p-4">
        <div className="mb-1 flex items-start justify-between gap-2">
          <h3 className="text-base font-bold text-card-foreground line-clamp-1 group-hover:text-primary transition-colors">
            {listing.title}
          </h3>
        </div>

        <p className="mb-3 text-xl font-black text-primary">
          ${listing.price.toLocaleString()}
        </p>

        <div className="flex items-center gap-3 text-xs text-muted-foreground">
          <span className="flex items-center gap-1">
            <MapPin className="h-3 w-3" />
            {listing.location}
          </span>
          <span className="flex items-center gap-1">
            <Clock className="h-3 w-3" />
            {listing.postedAt}
          </span>
        </div>
      </div>
    </Link>
  );
};

export default ListingCard;
