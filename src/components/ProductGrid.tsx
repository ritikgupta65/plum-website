import ProductCard from "./ProductCard";
import { Button } from "@/components/ui/button";
import { ChevronRight } from "lucide-react";
import niacinamideSerum from "@/assets/niacinamide-serum.jpg";
import vitaminCSerum from "@/assets/vitamin-c-serum.jpg";
import moisturizer from "@/assets/moisturizer.jpg";
import riceWaterToner from "@/assets/rice-water-toner.jpg";

const ProductGrid = () => {
  const products = [
    {
      image: niacinamideSerum,
      badge: "bestseller",
      badgeColor: "bg-plum-purple",
      title: "10% Niacinamide & Rice Water Brightening Face Serum",
      description: "Brightens from 1st use | 2x instant hydration | Dermat-Tested",
      rating: 4.5,
      reviews: 2724,
      originalPrice: 849.00,
      discountedPrice: 721.00,
      discount: "15% off",
      variants: ["15% off", "12% off", "9% off"],
      bgColor: "bg-blue-200"
    },
    {
      image: riceWaterToner,
      badge: "trending 🔥",
      badgeColor: "bg-pink-500",
      title: "3% Niacinamide & Rice Water Toner for Bright Skin",
      description: "Reduces Pores in 3 days | Alcohol-Free | Dermat-Tested",
      rating: 4.3,
      reviews: 1821,
      originalPrice: 440.00,
      discountedPrice: 378.00,
      discount: "14% off",
      variants: ["14% off"],
      bgColor: "bg-blue-300"
    },
    {
      image: moisturizer,
      badge: "trending 🔥",
      badgeColor: "bg-pink-500",
      title: "2% Niacinamide & Rice Water Brightening Gel Moisturizer",
      description: "2x hydration | Brightens skin in 2 Weeks | Non-Greasy",
      rating: 4.4,
      reviews: 1798,
      originalPrice: 525.00,
      discountedPrice: 462.00,
      discount: "12% off",
      variants: ["12% off"],
      bgColor: "bg-blue-100"
    },
    {
      image: vitaminCSerum,
      badge: "new launch!",
      badgeColor: "bg-blue-600",
      title: "10% Vitamin C Barrier Boosting + Glow Serum with Calendula",
      description: "Boosts Glow from 1st Use | Fades Dark Spots in 14 days | Dermat-Tested",
      rating: 4.5,
      reviews: 145,
      originalPrice: 649.00,
      discountedPrice: 551.00,
      discount: "15% off",
      variants: ["15% off"],
      bgColor: "bg-orange-200"
    }
  ];

  return (
    <section className="py-16 bg-background">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
          {products.map((product, index) => (
            <ProductCard key={index} {...product} />
          ))}
        </div>
        
        <div className="text-center">
          <Button variant="outline" className="bg-plum-purple-light text-plum-purple border-plum-purple hover:bg-plum-purple hover:text-white px-8 py-3 rounded-full font-semibold">
            view all <ChevronRight className="h-4 w-4 ml-2" />
          </Button>
        </div>
      </div>
    </section>
  );
};

export default ProductGrid;