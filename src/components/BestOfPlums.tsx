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
    <section className="py-12 bg-background">
      <div className="container mx-auto px-4">
        <div className="text-center mb-8">
          <div className="flex items-center justify-center gap-2 mb-6">
            <div className="w-8 h-8 bg-plum-purple rounded-md flex items-center justify-center">
              <div className="w-4 h-4 bg-white rounded-sm"></div>
            </div>
            <h2 className="text-4xl font-bold text-plum-purple">best of plums</h2>
          </div>
          
          <div className="flex justify-center gap-4 flex-wrap">
            {categories.map((category, index) => (
              <Button
                key={index}
                variant={category.active ? "default" : "outline"}
                className={`rounded-full px-8 py-3 font-semibold ${
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