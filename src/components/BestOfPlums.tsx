import { Button } from "@/components/ui/button";

const BestOfPlums = () => {
  const categories = [
    { name: "skincare", active: true },
    { name: "bodycare", active: false },
    { name: "fragrances", active: false },
    { name: "haircare", active: false },
    { name: "combos", active: false }
  ];

  return (
    <section className="py-8 md:py-12 bg-background">
      <div className="container mx-auto px-4">
        <div className="text-center mb-6 md:mb-8">
          <div className="flex items-center justify-center gap-2 mb-4 md:mb-6">
            <div className="w-6 h-6 md:w-8 md:h-8 bg-plum-purple rounded-md flex items-center justify-center">
              <div className="w-3 h-3 md:w-4 md:h-4 bg-white rounded-sm"></div>
            </div>
            <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold text-plum-purple">best of plums</h2>
          </div>
          
          {/* Mobile: Horizontal scroll */}
          <div className="md:hidden">
            <div className="flex gap-3 overflow-x-auto pb-2 scrollbar-hide">
              {categories.map((category, index) => (
                <Button
                  key={index}
                  variant={category.active ? "default" : "outline"}
                  className={`rounded-full px-4 py-2 font-semibold text-sm whitespace-nowrap flex-shrink-0 ${
                    category.active 
                      ? "bg-plum-purple hover:bg-plum-purple-dark text-white" 
                      : "border-plum-purple text-plum-purple hover:bg-plum-purple hover:text-white"
                  }`}
                >
                  {category.name}
                </Button>
              ))}
            </div>
          </div>

          {/* Desktop: Centered flex wrap */}
          <div className="hidden md:flex justify-center gap-3 lg:gap-4 flex-wrap">
            {categories.map((category, index) => (
              <Button
                key={index}
                variant={category.active ? "default" : "outline"}
                className={`rounded-full px-6 lg:px-8 py-2 lg:py-3 font-semibold text-sm lg:text-base ${
                  category.active 
                    ? "bg-plum-purple hover:bg-plum-purple-dark text-white" 
                    : "border-plum-purple text-plum-purple hover:bg-plum-purple hover:text-white"
                }`}
              >
                {category.name}
              </Button>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default BestOfPlums;