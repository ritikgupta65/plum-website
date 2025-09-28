import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Facebook, Youtube, Instagram } from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-background border-t">
      {/* App Download Section */}
      <div className="bg-plum-purple-light py-6 md:py-8">
        <div className="container mx-auto px-4 text-center">
          <h3 className="text-xl md:text-2xl font-bold text-plum-purple mb-4 md:mb-6">download app now!</h3>
          <div className="flex flex-col sm:flex-row justify-center gap-3 md:gap-4">
            <Button className="bg-black text-white hover:bg-gray-800 px-4 md:px-6 py-2 md:py-3 rounded-lg">
              <img src="https://upload.wikimedia.org/wikipedia/commons/7/78/Google_Play_Store_badge_EN.svg" alt="Google Play" className="h-6 md:h-8" />
            </Button>
            <Button className="bg-black text-white hover:bg-gray-800 px-4 md:px-6 py-2 md:py-3 rounded-lg">
              <img src="https://upload.wikimedia.org/wikipedia/commons/3/3c/Download_on_the_App_Store_Badge.svg" alt="App Store" className="h-6 md:h-8" />
            </Button>
          </div>
        </div>
      </div>

      {/* Security Banner */}
      <div className="bg-plum-purple py-3 md:py-4">
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row items-center justify-center text-white text-center">
            <span className="text-sm md:text-lg">🛡️ Secure Payments & Offer Redemptions</span>
            <Button variant="link" className="text-white underline mt-1 md:mt-0 md:ml-2 text-sm md:text-base">
              read more..
            </Button>
          </div>
        </div>
      </div>

      {/* Currency Selector */}
      <div className="bg-background py-3 md:py-4">
        <div className="container mx-auto px-4 flex justify-center">
          <Button variant="outline" className="border-plum-purple text-plum-purple px-4 md:px-6 py-2 rounded-lg text-sm md:text-base">
            🇮🇳 INR
          </Button>
        </div>
      </div>

      {/* Main Footer */}
      <div className="bg-background py-8 md:py-16">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 md:gap-8">
            {/* Shop Column */}
            <div>
              <h4 className="font-bold text-base md:text-lg mb-3 md:mb-4">shop</h4>
              <ul className="space-y-2 text-muted-foreground text-sm md:text-base">
                <li><Button variant="link" className="p-0 h-auto text-muted-foreground text-sm md:text-base justify-start">skincare</Button></li>
                <li><Button variant="link" className="p-0 h-auto text-muted-foreground text-sm md:text-base justify-start">bodycare</Button></li>
                <li><Button variant="link" className="p-0 h-auto text-muted-foreground text-sm md:text-base justify-start">haircare</Button></li>
                <li><Button variant="link" className="p-0 h-auto text-muted-foreground text-sm md:text-base justify-start">fragrances</Button></li>
              </ul>
            </div>

            {/* Learn Column */}
            <div>
              <h4 className="font-bold text-base md:text-lg mb-3 md:mb-4">learn</h4>
              <ul className="space-y-2 text-muted-foreground text-sm md:text-base">
                <li><Button variant="link" className="p-0 h-auto text-muted-foreground text-sm md:text-base justify-start">plum blogs</Button></li>
                <li><Button variant="link" className="p-0 h-auto text-muted-foreground text-sm md:text-base justify-start">plum features</Button></li>
                <li><Button variant="link" className="p-0 h-auto text-muted-foreground text-sm md:text-base justify-start">plum rewards</Button></li>
                <li><Button variant="link" className="p-0 h-auto text-muted-foreground text-sm md:text-base justify-start">newsletters</Button></li>
              </ul>
            </div>

            {/* Help Column */}
            <div>
              <h4 className="font-bold text-base md:text-lg mb-3 md:mb-4">help</h4>
              <ul className="space-y-2 text-muted-foreground text-sm md:text-base">
                <li><Button variant="link" className="p-0 h-auto text-muted-foreground text-sm md:text-base justify-start">contact us</Button></li>
                <li><Button variant="link" className="p-0 h-auto text-muted-foreground text-sm md:text-base justify-start">policies</Button></li>
                <li><Button variant="link" className="p-0 h-auto text-muted-foreground text-sm md:text-base justify-start">faqs</Button></li>
                <li><Button variant="link" className="p-0 h-auto text-muted-foreground text-sm md:text-base justify-start">empties4good</Button></li>
                <li><Button variant="link" className="p-0 h-auto text-muted-foreground text-sm md:text-base justify-start">track your order</Button></li>
                <li><Button variant="link" className="p-0 h-auto text-muted-foreground text-sm md:text-base justify-start">return order</Button></li>
                <li><Button variant="link" className="p-0 h-auto text-muted-foreground text-sm md:text-base justify-start">exchange order</Button></li>
              </ul>
            </div>

            {/* Newsletter Column */}
            <div className="md:col-span-2 lg:col-span-1">
              <h4 className="font-bold text-base md:text-lg mb-3 md:mb-4">sign up for expert beauty insights, tips & previews!</h4>
              <p className="text-xs md:text-sm text-muted-foreground mb-4">(PS: we too hate spam!)</p>
              
              <div className="flex flex-col sm:flex-row gap-2 mb-4 md:mb-6">
                <Input 
                  placeholder="your email" 
                  className="flex-1 rounded-lg text-sm"
                />
                <Button className="bg-plum-purple hover:bg-plum-purple-dark text-white px-4 md:px-6 py-2 rounded-lg text-sm whitespace-nowrap">
                  subscribe
                </Button>
              </div>

              {/* Social Icons */}
              <div className="flex gap-3 md:gap-4 mb-4 justify-center sm:justify-start">
                <Button size="icon" variant="outline" className="rounded-full w-8 h-8 md:w-10 md:h-10">
                  <Facebook className="h-4 w-4 md:h-5 md:w-5" />
                </Button>
                <Button size="icon" variant="outline" className="rounded-full w-8 h-8 md:w-10 md:h-10">
                  <Youtube className="h-4 w-4 md:h-5 md:w-5" />
                </Button>
                <Button size="icon" variant="outline" className="rounded-full w-8 h-8 md:w-10 md:h-10">
                  <Instagram className="h-4 w-4 md:h-5 md:w-5" />
                </Button>
              </div>

              <div className="text-xs md:text-sm text-muted-foreground text-center sm:text-left">
                <div className="mb-2">+91-750-649-6604</div>
                <div>hello@plumgoodness.com</div>
              </div>
            </div>
          </div>

          {/* Copyright */}
          <div className="border-t border-border mt-8 md:mt-12 pt-6 md:pt-8 text-center text-xs md:text-sm text-muted-foreground">
            <div className="flex flex-col sm:flex-row justify-center items-center gap-2 md:gap-4">
              <span>© 2025 plum, all rights reserved.</span>
              <div className="flex items-center gap-2 md:gap-4">
                <Button variant="link" className="p-0 h-auto text-muted-foreground underline text-xs md:text-sm">privacy policy</Button>
                <span className="hidden sm:inline">|</span>
                <Button variant="link" className="p-0 h-auto text-muted-foreground underline text-xs md:text-sm">terms of service</Button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;