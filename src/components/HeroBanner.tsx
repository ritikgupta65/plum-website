import { Button } from "@/components/ui/button";
import { ChevronRight } from "lucide-react";

const HeroBanner = () => {
  return (
    <div className="space-y-0">
      {/* Blue Banner */}
      <section className="bg-gradient-blue py-16 text-white relative overflow-hidden">
        <div className="container mx-auto px-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-8">
              <div className="flex space-x-4">
                <div className="w-24 h-32 bg-white/20 rounded-lg flex items-center justify-center">
                  <div className="w-16 h-24 bg-white rounded-md"></div>
                </div>
                <div className="w-24 h-32 bg-white/20 rounded-lg flex items-center justify-center">
                  <div className="w-16 h-24 bg-white rounded-md"></div>
                </div>
                <div className="w-24 h-32 bg-white/20 rounded-lg flex items-center justify-center">
                  <div className="w-16 h-24 bg-white rounded-md"></div>
                </div>
              </div>
              
              <div className="bg-plum-purple text-white px-6 py-4 rounded-full">
                <div className="text-center">
                  <div className="text-sm">worth</div>
                  <div className="text-2xl font-bold">₹249</div>
                </div>
              </div>
            </div>

            <div className="flex-1 text-center">
              <h2 className="text-4xl md:text-5xl font-bold mb-4">
                get <span className="text-white">EXTRA</span> set of 3 body lotions trio
              </h2>
              <p className="text-2xl">
                above <span className="text-3xl font-bold">₹1299</span>
              </p>
            </div>

            <Button size="icon" className="bg-white/20 hover:bg-white/30 rounded-full">
              <ChevronRight className="h-6 w-6" />
            </Button>
          </div>
        </div>
        
        {/* Decorative bubbles */}
        <div className="absolute top-4 right-20 w-8 h-8 bg-white/20 rounded-full"></div>
        <div className="absolute bottom-8 right-32 w-6 h-6 bg-white/20 rounded-full"></div>
        <div className="absolute top-12 left-20 w-4 h-4 bg-white/20 rounded-full"></div>
      </section>

      {/* Pink Banner */}
      <section className="bg-gradient-pink py-16 text-white relative">
        <div className="container mx-auto px-4">
          <div className="flex items-center justify-between">
            <div className="flex-1">
              <h2 className="text-4xl md:text-5xl font-bold mb-6 leading-tight">
                stop dealing with frizz.<br />
                start deleting it.
              </h2>
              
              <Button className="bg-white text-plum-purple hover:bg-white/90 rounded-full px-8 py-3 font-semibold">
                shop now
              </Button>

              <div className="mt-8 text-2xl font-bold">
                <span className="text-white">72hr</span> humidity-proof<br />
                frizz control
              </div>
            </div>

            <div className="flex-1 flex justify-center items-center">
              <div className="relative">
                <img 
                  src="https://images.unsplash.com/photo-1522338242992-e1a54906a8da?w=600&h=400&fit=crop&crop=center"
                  alt="Hair care product"
                  className="w-96 h-64 object-cover rounded-lg"
                />
              </div>
            </div>

            <div className="bg-white text-plum-purple p-6 rounded-2xl">
              <div className="mb-2">
                <span className="bg-red-500 text-white px-3 py-1 rounded-full text-sm font-bold">new</span>
              </div>
              <div className="text-sm font-semibold mb-2">0.3% glycolic acid &</div>
              <div className="text-sm font-semibold">cherry blossom serum crème</div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default HeroBanner;