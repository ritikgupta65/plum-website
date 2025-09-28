import { Button } from "@/components/ui/button";

const CategoryCircles = () => {
  const categories = [
    {
      name: "gifting",
      image: "https://images.unsplash.com/photo-1513475382585-d06e58bcb0e0?w=300&h=300&fit=crop&crop=center",
      bgColor: "bg-purple-200"
    },
    {
      name: "skincare", 
      image: "https://images.unsplash.com/photo-1556228578-8c89e6adf883?w=300&h=300&fit=crop&crop=center",
      bgColor: "bg-green-200"
    },
    {
      name: "bodycare",
      image: "https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?w=300&h=300&fit=crop&crop=center", 
      bgColor: "bg-yellow-200"
    },
    {
      name: "fragrance",
      image: "https://images.unsplash.com/photo-1541643600914-78b084683601?w=300&h=300&fit=crop&crop=center",
      bgColor: "bg-pink-200"
    },
    {
      name: "haircare",
      image: "https://images.unsplash.com/photo-1522338242992-e1a54906a8da?w=300&h=300&fit=crop&crop=center",
      bgColor: "bg-blue-200"
    }
  ];

  return (
    <section className="py-8 md:py-12 bg-background">
      <div className="container mx-auto px-4">
        {/* Mobile: Horizontal scroll */}
        <div className="md:hidden">
          <div className="flex gap-6 overflow-x-auto pb-4 scrollbar-hide">
            {categories.map((category, index) => (
              <div key={index} className="flex flex-col items-center flex-shrink-0">
                <div className={`w-20 h-20 rounded-full ${category.bgColor} overflow-hidden mb-3 hover:scale-105 transition-transform cursor-pointer`}>
                  <img 
                    src={category.image} 
                    alt={category.name}
                    className="w-full h-full object-cover"
                  />
                </div>
                <span className="text-plum-purple font-medium text-sm text-center whitespace-nowrap">{category.name}</span>
              </div>
            ))}
          </div>
        </div>

        {/* Desktop: Centered flex layout */}
        <div className="hidden md:flex justify-center items-center space-x-8 lg:space-x-12">
          {categories.map((category, index) => (
            <div key={index} className="flex flex-col items-center">
              <div className={`w-24 h-24 lg:w-32 lg:h-32 rounded-full ${category.bgColor} overflow-hidden mb-4 hover:scale-105 transition-transform cursor-pointer`}>
                <img 
                  src={category.image} 
                  alt={category.name}
                  className="w-full h-full object-cover"
                />
              </div>
              <span className="text-plum-purple font-medium text-base lg:text-lg">{category.name}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default CategoryCircles;