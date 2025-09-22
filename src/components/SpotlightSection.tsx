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
    <section className="py-16 bg-background">
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <div className="text-center mb-12">
          <div className="flex items-center justify-center gap-2 mb-4">
            <div className="w-8 h-8 bg-plum-purple rounded-md flex items-center justify-center">
              <div className="w-4 h-4 bg-white rounded-sm"></div>
            </div>
            <h2 className="text-4xl font-bold text-plum-purple">spotlight</h2>
          </div>
        </div>

        {/* Collection Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
          {collections.map((collection, index) => (
            <div key={index} className={`${collection.bgColor} rounded-2xl p-8 relative overflow-hidden group cursor-pointer hover:scale-105 transition-transform`}>
              <div className="relative z-10">
                <h3 className={`text-2xl font-bold mb-2 ${collection.textColor} whitespace-pre-line`}>
                  {collection.name}
                </h3>
                <p className={`text-sm mb-6 ${collection.textColor} whitespace-pre-line`}>
                  {collection.subtitle}
                </p>
                <Button className={`${collection.textColor} bg-white/80 hover:bg-white text-sm px-6 py-2 rounded-lg font-semibold`}>
                  shop now <ChevronRight className="h-4 w-4 ml-1" />
                </Button>
              </div>
              <div className="absolute right-4 bottom-4 opacity-60">
                <img 
                  src={collection.image} 
                  alt={collection.name}
                  className="w-24 h-32 object-cover rounded-lg"
                />
              </div>
            </div>
          ))}
        </div>

        {/* Science Section */}
        <div className="text-center">
          <div className="flex items-center justify-center gap-2 mb-8">
            <div className="w-8 h-8 bg-plum-purple rounded-md flex items-center justify-center">
              <div className="w-4 h-4 bg-white rounded-sm"></div>
            </div>
            <h2 className="text-4xl font-bold text-plum-purple">science-backed solutions for</h2>
          </div>
        </div>
      </div>
    </section>
  );
};

export default SpotlightSection;