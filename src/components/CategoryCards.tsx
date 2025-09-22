import { Button } from "@/components/ui/button";
import { ChevronRight } from "lucide-react";

const CategoryCards = () => {
  const categories = [
    {
      name: "sunscreens",
      image: "https://images.unsplash.com/photo-1556228578-8c89e6adf883?w=400&h=300&fit=crop&crop=center",
      bgColor: "bg-plum-blue-light"
    },
    {
      name: "serums", 
      image: "https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?w=400&h=300&fit=crop&crop=center",
      bgColor: "bg-plum-blue"
    },
    {
      name: "moisturizers",
      image: "https://images.unsplash.com/photo-1556228454-8c89e6adf883?w=400&h=300&fit=crop&crop=center",
      bgColor: "bg-blue-200"
    },
    {
      name: "body lotions",
      image: "https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?w=400&h=300&fit=crop&crop=center", 
      bgColor: "bg-plum-yellow"
    }
  ];

  return (
    <section className="py-16 bg-background">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {categories.map((category, index) => (
            <div key={index} className={`${category.bgColor} rounded-2xl p-8 relative overflow-hidden group cursor-pointer hover:scale-105 transition-transform`}>
              <div className="relative z-10">
                <h3 className="text-2xl font-bold mb-6 text-white">
                  {category.name}
                </h3>
                <Button className="bg-white/20 hover:bg-white/30 text-white border-white/30 rounded-lg px-6 py-2">
                  <ChevronRight className="h-5 w-5" />
                </Button>
              </div>
              <div className="absolute right-4 bottom-4 opacity-80">
                <img 
                  src={category.image} 
                  alt={category.name}
                  className="w-24 h-32 object-cover rounded-lg"
                />
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default CategoryCards;