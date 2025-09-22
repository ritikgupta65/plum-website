import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Facebook, Youtube, Instagram } from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-background border-t">
      {/* App Download Section */}
      <div className="bg-plum-purple-light py-8">
        <div className="container mx-auto px-4 text-center">
          <h3 className="text-2xl font-bold text-plum-purple mb-6">download app now!</h3>
          <div className="flex justify-center gap-4">
            <Button className="bg-black text-white hover:bg-gray-800 px-6 py-3 rounded-lg">
              <img src="https://upload.wikimedia.org/wikipedia/commons/7/78/Google_Play_Store_badge_EN.svg" alt="Google Play" className="h-8" />
            </Button>
            <Button className="bg-black text-white hover:bg-gray-800 px-6 py-3 rounded-lg">
              <img src="https://upload.wikimedia.org/wikipedia/commons/3/3c/Download_on_the_App_Store_Badge.svg" alt="App Store" className="h-8" />
            </Button>
          </div>
        </div>
      </div>

      {/* Security Banner */}
      <div className="bg-plum-purple py-4">
        <div className="container mx-auto px-4">
          <div className="flex items-center justify-center text-white">
            <span className="text-lg">🛡️ Secure Payments & Offer Redemptions</span>
            <Button variant="link" className="text-white underline ml-2">
              read more..
            </Button>
          </div>
        </div>
      </div>

      {/* Currency Selector */}
      <div className="bg-background py-4">
        <div className="container mx-auto px-4 flex justify-center">
          <Button variant="outline" className="border-plum-purple text-plum-purple px-6 py-2 rounded-lg">
            🇮🇳 INR
          </Button>
        </div>
      </div>

      {/* Main Footer */}
      <div className="bg-background py-16">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            {/* Shop Column */}
            <div>
              <h4 className="font-bold text-lg mb-4">shop</h4>
              <ul className="space-y-2 text-muted-foreground">
                <li><Button variant="link" className="p-0 h-auto text-muted-foreground">skincare</Button></li>
                <li><Button variant="link" className="p-0 h-auto text-muted-foreground">bodycare</Button></li>
                <li><Button variant="link" className="p-0 h-auto text-muted-foreground">haircare</Button></li>
                <li><Button variant="link" className="p-0 h-auto text-muted-foreground">fragrances</Button></li>
              </ul>
            </div>

            {/* Learn Column */}
            <div>
              <h4 className="font-bold text-lg mb-4">learn</h4>
              <ul className="space-y-2 text-muted-foreground">
                <li><Button variant="link" className="p-0 h-auto text-muted-foreground">plum blogs</Button></li>
                <li><Button variant="link" className="p-0 h-auto text-muted-foreground">plum features</Button></li>
                <li><Button variant="link" className="p-0 h-auto text-muted-foreground">plum rewards</Button></li>
                <li><Button variant="link" className="p-0 h-auto text-muted-foreground">newsletters</Button></li>
              </ul>
            </div>

            {/* Help Column */}
            <div>
              <h4 className="font-bold text-lg mb-4">help</h4>
              <ul className="space-y-2 text-muted-foreground">
                <li><Button variant="link" className="p-0 h-auto text-muted-foreground">contact us</Button></li>
                <li><Button variant="link" className="p-0 h-auto text-muted-foreground">policies</Button></li>
                <li><Button variant="link" className="p-0 h-auto text-muted-foreground">faqs</Button></li>
                <li><Button variant="link" className="p-0 h-auto text-muted-foreground">empties4good</Button></li>
                <li><Button variant="link" className="p-0 h-auto text-muted-foreground">track your order</Button></li>
                <li><Button variant="link" className="p-0 h-auto text-muted-foreground">return order</Button></li>
                <li><Button variant="link" className="p-0 h-auto text-muted-foreground">exchange order</Button></li>
              </ul>
            </div>

            {/* Newsletter Column */}
            <div>
              <h4 className="font-bold text-lg mb-4">sign up for expert beauty insights, tips & previews!</h4>
              <p className="text-sm text-muted-foreground mb-4">(PS: we too hate spam!)</p>
              
              <div className="flex gap-2 mb-6">
                <Input 
                  placeholder="your email" 
                  className="flex-1 rounded-lg"
                />
                <Button className="bg-plum-purple hover:bg-plum-purple-dark text-white px-6 rounded-lg">
                  subscribe
                </Button>
              </div>

              {/* Social Icons */}
              <div className="flex gap-4 mb-4">
                <Button size="icon" variant="outline" className="rounded-full">
                  <Facebook className="h-5 w-5" />
                </Button>
                <Button size="icon" variant="outline" className="rounded-full">
                  <Youtube className="h-5 w-5" />
                </Button>
                <Button size="icon" variant="outline" className="rounded-full">
                  <Instagram className="h-5 w-5" />
                </Button>
              </div>

              <div className="text-sm text-muted-foreground">
                <div className="mb-2">+91-750-649-6604</div>
                <div>hello@plumgoodness.com</div>
              </div>
            </div>
          </div>

          {/* Copyright */}
          <div className="border-t border-border mt-12 pt-8 text-center text-sm text-muted-foreground">
            <div className="flex justify-center items-center gap-4">
              <span>© 2025 plum, all rights reserved.</span>
              <Button variant="link" className="p-0 h-auto text-muted-foreground underline">privacy policy</Button>
              <span>|</span>
              <Button variant="link" className="p-0 h-auto text-muted-foreground underline">terms of service</Button>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;