import { useParams, Link } from "react-router-dom";
import { ArrowLeft, MapPin, Clock, User, MessageCircle, Heart, Share2, Shield } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Separator } from "@/components/ui/separator";
import Navbar from "@/components/Navbar";
import { sampleListings } from "@/data/listings";

const ListingDetail = () => {
  const { id } = useParams();
  const listing = sampleListings.find((l) => l.id === id);

  if (!listing) {
    return (
      <div className="min-h-screen bg-background">
        <Navbar />
        <div className="container mx-auto px-4 py-20 text-center">
          <h1 className="text-3xl font-bold text-foreground">Listing not found</h1>
          <Link to="/">
            <Button className="mt-4">Back to listings</Button>
          </Link>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      <div className="container mx-auto px-4 py-6">
        <Link
          to="/"
          className="mb-6 inline-flex items-center gap-2 text-sm font-medium text-muted-foreground hover:text-foreground transition-colors"
        >
          <ArrowLeft className="h-4 w-4" />
          Back to listings
        </Link>

        <div className="grid gap-8 lg:grid-cols-3">
          {/* Image */}
          <div className="lg:col-span-2">
            <div className="overflow-hidden rounded-2xl card-shadow">
              <img
                src={listing.image}
                alt={listing.title}
                className="h-[400px] w-full object-cover lg:h-[500px]"
              />
            </div>
          </div>

          {/* Details sidebar */}
          <div className="space-y-6">
            <div className="rounded-2xl bg-card p-6 card-shadow">
              <p className="text-3xl font-black text-primary mb-2">
                ${listing.price.toLocaleString()}
              </p>
              <h1 className="text-xl font-bold text-card-foreground mb-3">
                {listing.title}
              </h1>

              <div className="flex flex-wrap gap-2 mb-4">
                <Badge variant="secondary" className="rounded-full">
                  {listing.condition === "like-new"
                    ? "Like New"
                    : listing.condition.charAt(0).toUpperCase() + listing.condition.slice(1)}
                </Badge>
                <Badge variant="outline" className="rounded-full">
                  {listing.category.charAt(0).toUpperCase() + listing.category.slice(1)}
                </Badge>
              </div>

              <div className="space-y-2 text-sm text-muted-foreground">
                <div className="flex items-center gap-2">
                  <MapPin className="h-4 w-4" />
                  {listing.location}
                </div>
                <div className="flex items-center gap-2">
                  <Clock className="h-4 w-4" />
                  Posted {listing.postedAt}
                </div>
              </div>

              <Separator className="my-4" />

              <Button className="w-full gap-2 rounded-full hero-gradient border-0 text-primary-foreground font-semibold text-base h-12 hover:opacity-90 transition-opacity">
                <MessageCircle className="h-5 w-5" />
                Contact Seller
              </Button>

              <div className="mt-3 flex gap-2">
                <Button variant="outline" className="flex-1 rounded-full gap-2">
                  <Heart className="h-4 w-4" />
                  Save
                </Button>
                <Button variant="outline" className="flex-1 rounded-full gap-2">
                  <Share2 className="h-4 w-4" />
                  Share
                </Button>
              </div>
            </div>

            {/* Seller info */}
            <div className="rounded-2xl bg-card p-6 card-shadow">
              <div className="flex items-center gap-3 mb-3">
                <div className="flex h-10 w-10 items-center justify-center rounded-full bg-muted">
                  <User className="h-5 w-5 text-muted-foreground" />
                </div>
                <div>
                  <p className="font-semibold text-card-foreground">{listing.seller}</p>
                  <p className="text-xs text-muted-foreground">Member since 2024</p>
                </div>
              </div>
              <div className="flex items-center gap-1 text-xs text-secondary">
                <Shield className="h-3 w-3" />
                <span className="font-medium">Verified seller</span>
              </div>
            </div>
          </div>
        </div>

        {/* Description */}
        <div className="mt-8 rounded-2xl bg-card p-6 card-shadow">
          <h2 className="mb-3 text-lg font-bold text-card-foreground">Description</h2>
          <p className="text-muted-foreground leading-relaxed">{listing.description}</p>
        </div>
      </div>
    </div>
  );
};

export default ListingDetail;
