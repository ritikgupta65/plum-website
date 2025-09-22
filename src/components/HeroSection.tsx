import { Button } from "@/components/ui/button";

const HeroSection = () => {
  return (
    <section className="bg-gradient-blue py-16 text-white relative overflow-hidden">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between">
          <div className="flex-1">
            <h1 className="text-4xl md:text-5xl font-bold mb-6 leading-tight">
              reduces blemishes & marks<br />
              just in 14 days.
            </h1>
          </div>

          <div className="flex-1 flex justify-center">
            <img 
              src="https://images.unsplash.com/photo-1556228578-8c89e6adf883?w=600&h=400&fit=crop&crop=center"
              alt="Skincare product"
              className="w-96 h-64 object-cover rounded-lg"
            />
          </div>

          <div className="flex flex-col items-end">
            <div className="text-right mb-4">
              <div className="text-lg font-semibold">& 10% niacinamide serum</div>
            </div>
            <Button className="bg-white text-plum-blue hover:bg-white/90 px-8 py-3 rounded-lg font-semibold">
              shop now
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;