import { Button } from "@/components/ui/button";
import { ChevronRight } from "lucide-react";

const SpotlightSection = () => {
  const collections = [
    {
      name: "niacinamide\ncollection",
      subtitle: "chemistry that's just bright",
      bgColor: "bg-plum-blue-light",
      textColor: "text-plum-blue",
      image: "https://images.unsplash.com/photo-1556228578-8c89e6adf883?w=400&h=300&fit=crop&crop=center"
    },
    {
      name: "vanilla\ncollection", 
      subtitle: "vanilla never smelled\nso good",
      bgColor: "bg-plum-yellow",
      textColor: "text-orange-800",
      image: "https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?w=400&h=300&fit=crop&crop=center"
    },
    {
      name: "fragrance\ncollection",
      subtitle: "scent-sational\nmust haves", 
      bgColor: "bg-plum-purple-light",
      textColor: "text-plum-purple",
      image: "https://images.unsplash.com/photo-1541643600914-78b084683601?w=400&h=300&fit=crop&crop=center"
    },
    {
      name: "coconut milk\ncollection",
      subtitle: "soft hair, hard flex",
      bgColor: "bg-plum-blue-light", 
      textColor: "text-plum-blue",
      image: "https://images.unsplash.com/photo-1522338242992-e1a54906a8da?w=400&h=300&fit=crop&crop=center"
    }
  ];

  return (
    <section className="py-8 md:py-16 bg-background">
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <div className="text-center mb-8 md:mb-12">
          <div className="flex items-center justify-center gap-2 mb-4">
            <div className="w-6 h-6 md:w-8 md:h-8 bg-plum-purple rounded-md flex items-center justify-center">
              <div className="w-3 h-3 md:w-4 md:h-4 bg-white rounded-sm"></div>
            </div>
            <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold text-plum-purple">spotlight</h2>
          </div>
        </div>

        {/* Collection Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 md:gap-6 mb-8">
          {collections.map((collection, index) => (
            <div key={index} className={`${collection.bgColor} rounded-2xl p-4 md:p-6 lg:p-8 relative overflow-hidden group cursor-pointer hover:scale-105 transition-transform`}>
              <div className="relative z-10">
                <h3 className={`text-lg md:text-xl lg:text-2xl font-bold mb-2 ${collection.textColor} whitespace-pre-line`}>
                  {collection.name}
                </h3>
                <p className={`text-xs md:text-sm mb-4 md:mb-6 ${collection.textColor} whitespace-pre-line`}>
                  {collection.subtitle}
                </p>
                <Button className={`${collection.textColor} bg-white/80 hover:bg-white text-xs md:text-sm px-4 md:px-6 py-2 rounded-lg font-semibold`}>
                  shop now <ChevronRight className="h-3 w-3 md:h-4 md:w-4 ml-1" />
                </Button>
              </div>
              <div className="absolute right-2 bottom-2 md:right-4 md:bottom-4 opacity-60">
                <img 
                  src={collection.image} 
                  alt={collection.name}
                  className="w-16 h-20 md:w-20 md:h-24 lg:w-24 lg:h-32 object-cover rounded-lg"
                />
              </div>
            </div>
          ))}
        </div>

        {/* Science Section */}
        <div className="text-center">
          <div className="flex items-center justify-center gap-2 mb-6 md:mb-8">
            <div className="w-6 h-6 md:w-8 md:h-8 bg-plum-purple rounded-md flex items-center justify-center">
              <div className="w-3 h-3 md:w-4 md:h-4 bg-white rounded-sm"></div>
            </div>
            <h2 className="text-xl md:text-2xl lg:text-3xl xl:text-4xl font-bold text-plum-purple text-center">science-backed solutions for</h2>
          </div>
        </div>
      </div>
    </section>
  );
};

export default SpotlightSection;