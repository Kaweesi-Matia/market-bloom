export interface Listing {
  id: string;
  title: string;
  price: number;
  location: string;
  category: string;
  image: string;
  postedAt: string;
  description: string;
  seller: string;
  condition: "new" | "like-new" | "used" | "fair";
  featured?: boolean;
}

export const categories = [
  { id: "all", label: "All", icon: "LayoutGrid" },
  { id: "vehicles", label: "Vehicles", icon: "Car" },
  { id: "electronics", label: "Electronics", icon: "Smartphone" },
  { id: "furniture", label: "Furniture", icon: "Sofa" },
  { id: "clothing", label: "Clothing", icon: "Shirt" },
  { id: "sports", label: "Sports", icon: "Dumbbell" },
  { id: "books", label: "Books", icon: "BookOpen" },
  { id: "home", label: "Home & Garden", icon: "Home" },
] as const;

export const sampleListings: Listing[] = [
  {
    id: "1",
    title: "Vintage Leather Sofa",
    price: 450,
    location: "Brooklyn, NY",
    category: "furniture",
    image: "https://images.unsplash.com/photo-1555041469-a586c61ea9bc?w=600&h=400&fit=crop",
    postedAt: "2 hours ago",
    description: "Beautiful vintage leather sofa in excellent condition. Deep brown color with natural patina. Seats 3 comfortably. Must pick up.",
    seller: "Alex M.",
    condition: "used",
    featured: true,
  },
  {
    id: "2",
    title: 'MacBook Pro 16" M3 Max',
    price: 2200,
    location: "San Francisco, CA",
    category: "electronics",
    image: "https://images.unsplash.com/photo-1517336714731-489689fd1ca8?w=600&h=400&fit=crop",
    postedAt: "5 hours ago",
    description: "Like new MacBook Pro 16 inch with M3 Max chip, 36GB RAM, 1TB SSD. Includes original box and charger.",
    seller: "Jamie K.",
    condition: "like-new",
    featured: true,
  },
  {
    id: "3",
    title: "Mountain Bike - Trek X-Caliber",
    price: 680,
    location: "Denver, CO",
    category: "sports",
    image: "https://images.unsplash.com/photo-1576435728678-68d0fbf94e91?w=600&h=400&fit=crop",
    postedAt: "1 day ago",
    description: "Trek X-Caliber 8 mountain bike, size large. Well maintained, new tires. Great for trails and cross country riding.",
    seller: "Chris R.",
    condition: "used",
  },
  {
    id: "4",
    title: "Nike Air Jordan 1 Retro",
    price: 180,
    location: "Chicago, IL",
    category: "clothing",
    image: "https://images.unsplash.com/photo-1600269452121-4f2416e55c28?w=600&h=400&fit=crop",
    postedAt: "3 hours ago",
    description: "Brand new Nike Air Jordan 1 Retro High OG. Size 10. Never worn, comes with original box.",
    seller: "Taylor S.",
    condition: "new",
  },
  {
    id: "5",
    title: "2019 Honda Civic EX",
    price: 18500,
    location: "Austin, TX",
    category: "vehicles",
    image: "https://images.unsplash.com/photo-1533473359331-0135ef1b58bf?w=600&h=400&fit=crop",
    postedAt: "6 hours ago",
    description: "2019 Honda Civic EX with 42,000 miles. Clean title, one owner. Regular maintenance, great on gas.",
    seller: "Morgan L.",
    condition: "used",
  },
  {
    id: "6",
    title: "Standing Desk - Adjustable",
    price: 320,
    location: "Seattle, WA",
    category: "furniture",
    image: "https://images.unsplash.com/photo-1593062096033-9a26b09da705?w=600&h=400&fit=crop",
    postedAt: "12 hours ago",
    description: "Electric standing desk with memory presets. 60x30 inches. Walnut top with black frame. Excellent condition.",
    seller: "Jordan P.",
    condition: "like-new",
  },
  {
    id: "7",
    title: "Sony WH-1000XM5 Headphones",
    price: 240,
    location: "Portland, OR",
    category: "electronics",
    image: "https://images.unsplash.com/photo-1618366712010-f4ae9c647dcb?w=600&h=400&fit=crop",
    postedAt: "1 day ago",
    description: "Sony WH-1000XM5 wireless noise-canceling headphones. Black color. Includes case, cable, and original packaging.",
    seller: "Riley D.",
    condition: "like-new",
  },
  {
    id: "8",
    title: "Vintage Book Collection",
    price: 95,
    location: "Boston, MA",
    category: "books",
    image: "https://images.unsplash.com/photo-1524578271613-d550eacf6090?w=600&h=400&fit=crop",
    postedAt: "2 days ago",
    description: "Collection of 12 classic novels in hardcover. Includes works by Hemingway, Fitzgerald, and Steinbeck. Great condition.",
    seller: "Sam W.",
    condition: "used",
  },
];
