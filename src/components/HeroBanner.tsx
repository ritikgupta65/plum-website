import { Button } from "@/components/ui/button";
import { ChevronRight } from "lucide-react";

const HeroBanner = () => {
  return (
    <div className="space-y-0">
      {/* Blue Banner */}
      <section className="bg-gradient-blue py-8 md:py-16 text-white relative overflow-hidden">
        <div className="container mx-auto px-4">
          {/* Mobile Layout */}
          <div className="md:hidden text-center space-y-6">
            <div className="flex justify-center space-x-3">
              <div className="w-16 h-20 bg-white/20 rounded-lg flex items-center justify-center">
                <div className="w-12 h-16 bg-white rounded-md"></div>
              </div>
              <div className="w-16 h-20 bg-white/20 rounded-lg flex items-center justify-center">
                <div className="w-12 h-16 bg-white rounded-md"></div>
              </div>
              <div className="w-16 h-20 bg-white/20 rounded-lg flex items-center justify-center">
                <div className="w-12 h-16 bg-white rounded-md"></div>
              </div>
            </div>
            
            <div className="bg-plum-purple text-white px-4 py-3 rounded-full inline-block">
              <div className="text-center">
                <div className="text-xs">worth</div>
                <div className="text-lg font-bold">₹249</div>
              </div>
            </div>

            <div>
              <h2 className="text-2xl font-bold mb-3 leading-tight">
                get <span className="text-white">EXTRA</span> set of 3 body lotions trio
              </h2>
              <p className="text-lg">
                above <span className="text-xl font-bold">₹1299</span>
              </p>
            </div>
          </div>

          {/* Desktop Layout */}
          <div className="hidden md:flex items-center justify-between">
            <div className="flex items-center space-x-4 lg:space-x-8">
              <div className="flex space-x-2 lg:space-x-4">
                <div className="w-20 h-24 lg:w-24 lg:h-32 bg-white/20 rounded-lg flex items-center justify-center">
                  <div className="w-14 h-18 lg:w-16 lg:h-24 bg-white rounded-md"></div>
                </div>
                <div className="w-20 h-24 lg:w-24 lg:h-32 bg-white/20 rounded-lg flex items-center justify-center">
                  <div className="w-14 h-18 lg:w-16 lg:h-24 bg-white rounded-md"></div>
                </div>
                <div className="w-20 h-24 lg:w-24 lg:h-32 bg-white/20 rounded-lg flex items-center justify-center">
                  <div className="w-14 h-18 lg:w-16 lg:h-24 bg-white rounded-md"></div>
                </div>
              </div>
              
              <div className="bg-plum-purple text-white px-4 py-3 lg:px-6 lg:py-4 rounded-full">
                <div className="text-center">
                  <div className="text-xs lg:text-sm">worth</div>
                  <div className="text-lg lg:text-2xl font-bold">₹249</div>
                </div>
              </div>
            </div>

            <div className="flex-1 text-center mx-4">
              <h2 className="text-2xl lg:text-3xl xl:text-4xl font-bold mb-4 leading-tight">
                get <span className="text-white">EXTRA</span> set of 3 body lotions trio
              </h2>
              <p className="text-lg lg:text-xl xl:text-2xl">
                above <span className="text-xl lg:text-2xl xl:text-3xl font-bold">₹1299</span>
              </p>
            </div>

            <Button size="icon" className="bg-white/20 hover:bg-white/30 rounded-full">
              <ChevronRight className="h-5 w-5 lg:h-6 lg:w-6" />
            </Button>
          </div>
        </div>
        
        {/* Decorative bubbles - Hidden on mobile */}
        <div className="hidden md:block absolute top-4 right-20 w-6 h-6 lg:w-8 lg:h-8 bg-white/20 rounded-full"></div>
        <div className="hidden md:block absolute bottom-8 right-32 w-4 h-4 lg:w-6 lg:h-6 bg-white/20 rounded-full"></div>
        <div className="hidden md:block absolute top-12 left-20 w-3 h-3 lg:w-4 lg:h-4 bg-white/20 rounded-full"></div>
      </section>

      {/* Pink Banner */}
      <section className="bg-gradient-pink py-8 md:py-16 text-white relative">
        <div className="container mx-auto px-4">
          {/* Mobile Layout */}
          <div className="md:hidden text-center space-y-6">
            <h2 className="text-2xl font-bold leading-tight">
              stop dealing with frizz.<br />
              start deleting it.
            </h2>
            
            <div className="flex justify-center">
              <img 
                src="https://images.unsplash.com/photo-1522338242992-e1a54906a8da?w=600&h=400&fit=crop&crop=center"
                alt="Hair care product"
                className="w-64 h-40 object-cover rounded-lg"
              />
            </div>

            <div className="bg-white text-plum-purple p-4 rounded-2xl inline-block">
              <div className="mb-2">
                <span className="bg-red-500 text-white px-2 py-1 rounded-full text-xs font-bold">new</span>
              </div>
              <div className="text-xs font-semibold mb-1">0.3% glycolic acid &</div>
              <div className="text-xs font-semibold">cherry blossom serum crème</div>
            </div>
            
            <Button className="bg-white text-plum-purple hover:bg-white/90 rounded-full px-6 py-3 font-semibold">
              shop now
            </Button>

            <div className="text-lg font-bold">
              <span className="text-white">72hr</span> humidity-proof<br />
              frizz control
            </div>
          </div>

          {/* Desktop Layout */}
          <div className="hidden md:flex items-center justify-between">
            <div className="flex-1">
              <h2 className="text-2xl lg:text-3xl xl:text-4xl font-bold mb-6 leading-tight">
                stop dealing with frizz.<br />
                start deleting it.
              </h2>
              
              <Button className="bg-white text-plum-purple hover:bg-white/90 rounded-full px-6 lg:px-8 py-3 font-semibold">
                shop now
              </Button>

              <div className="mt-6 lg:mt-8 text-lg lg:text-xl xl:text-2xl font-bold">
                <span className="text-white">72hr</span> humidity-proof<br />
                frizz control
              </div>
            </div>

            <div className="flex-1 flex justify-center items-center mx-4">
              <div className="relative">
                <img 
                  src="https://images.unsplash.com/photo-1522338242992-e1a54906a8da?w=600&h=400&fit=crop&crop=center"
                  alt="Hair care product"
                  className="w-64 h-48 lg:w-80 lg:h-56 xl:w-96 xl:h-64 object-cover rounded-lg"
                />
              </div>
            </div>

            <div className="bg-white text-plum-purple p-4 lg:p-6 rounded-2xl">
              <div className="mb-2">
                <span className="bg-red-500 text-white px-2 lg:px-3 py-1 rounded-full text-xs lg:text-sm font-bold">new</span>
              </div>
              <div className="text-xs lg:text-sm font-semibold mb-2">0.3% glycolic acid &</div>
              <div className="text-xs lg:text-sm font-semibold">cherry blossom serum crème</div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default HeroBanner;