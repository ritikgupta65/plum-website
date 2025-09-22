import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Star } from "lucide-react";

interface ProductCardProps {
  image: string;
  badge: string;
  badgeColor: string;
  title: string;
  description: string;
  rating: number;
  reviews: number;
  originalPrice: number;
  discountedPrice: number;
  discount: string;
  variants: string[];
  bgColor: string;
}

const ProductCard = ({ 
  image, 
  badge, 
  badgeColor, 
  title, 
  description, 
  rating, 
  reviews, 
  originalPrice, 
  discountedPrice, 
  discount,
  variants,
  bgColor 
}: ProductCardProps) => {
  return (
    <div className="bg-white rounded-2xl p-6 shadow-sm border border-border hover:shadow-md transition-shadow">
      {/* Product Image */}
      <div className={`${bgColor} rounded-xl p-8 mb-4 relative`}>
        <Badge className={`absolute top-4 left-4 ${badgeColor} text-white px-3 py-1 text-sm font-semibold`}>
          {badge}
        </Badge>
        <img 
          src={image} 
          alt={title}
          className="w-full h-48 object-contain"
        />
      </div>

      {/* Rating */}
      <div className="flex items-center gap-2 mb-3">
        <div className="flex items-center gap-1">
          <Star className="h-4 w-4 fill-yellow-400 text-yellow-400" />
          <span className="text-sm font-semibold">{rating}</span>
        </div>
        <span className="text-sm text-muted-foreground">{reviews.toLocaleString()} reviews</span>
      </div>

      {/* Product Info */}
      <h3 className="font-bold text-lg mb-2 line-clamp-2">{title}</h3>
      <p className="text-sm text-muted-foreground mb-3 line-clamp-3">{description}</p>
      <p className="text-sm font-medium mb-4">all skin types</p>

      {/* Variant Pills */}
      <div className="flex gap-2 mb-4">
        {variants.map((variant, index) => (
          <Badge key={index} variant="secondary" className="bg-plum-purple-light text-plum-purple-dark px-3 py-1">
            {variant}
          </Badge>
        ))}
      </div>

      {/* Pricing */}
      <div className="flex items-center gap-2 mb-4">
        <span className="text-2xl font-bold">₹ {discountedPrice.toFixed(2)}</span>
        <span className="text-muted-foreground line-through">₹ {originalPrice.toFixed(2)}</span>
        <span className="text-green-600 font-semibold">({discount})</span>
      </div>

      {/* Add to Cart Button */}
      <Button className="w-full bg-plum-purple hover:bg-plum-purple-dark text-white font-semibold py-3 rounded-xl">
        add to cart
      </Button>
    </div>
  );
};

export default ProductCard;