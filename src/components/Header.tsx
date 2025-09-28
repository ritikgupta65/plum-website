import { Search, ShoppingBag, User, Download, Menu, X } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { useState } from "react";
import plumLogo from "@/assets/plum-logo.png";

const Header = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  
  const navItems = [
    "skin",
    "body", 
    "hair",
    "fragrances",
    "gifting",
    "makeup",
    "blogs & newsletters",
    "get to know us",
    "help",
    "careers",
    "bulk orders"
  ];

  const primaryNavItems = navItems.slice(0, 6);
  const secondaryNavItems = navItems.slice(6);

  return (
    <header className="bg-background border-b border-border">
      <div className="container mx-auto px-4">
        {/* Top section with logo, search, and icons */}
        <div className="flex items-center justify-between py-4">
          {/* Logo */}
          <div className="flex items-center">
            <img src={plumLogo} alt="Plum" className="h-8 md:h-12 w-auto" />
          </div>

          {/* Search Bar - Hidden on mobile, shown on tablet+ */}
          <div className="hidden md:flex flex-1 max-w-2xl mx-4 lg:mx-8">
            <div className="relative w-full">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-muted-foreground h-5 w-5" />
              <Input 
                placeholder="Search For Face"
                className="pl-10 py-3 rounded-full border-border bg-muted/50 w-full"
              />
            </div>
          </div>

          {/* Right icons */}
          <div className="flex items-center space-x-2">
            {/* Download app - Hidden on mobile */}
            <Button variant="ghost" size="sm" className="hidden lg:flex flex-col items-center gap-1 text-plum-purple">
              <Download className="h-5 w-5" />
              <span className="text-xs">download app now</span>
            </Button>
            
            {/* Search icon for mobile */}
            <Button variant="ghost" size="icon" className="md:hidden">
              <Search className="h-5 w-5" />
            </Button>
            
            <Button variant="ghost" size="icon">
              <User className="h-5 w-5" />
            </Button>
            <Button variant="ghost" size="icon" className="relative">
              <ShoppingBag className="h-5 w-5" />
              <span className="absolute -top-1 -right-1 bg-plum-purple text-white text-xs rounded-full h-4 w-4 flex items-center justify-center">0</span>
            </Button>
            
            {/* Mobile menu button */}
            <Button 
              variant="ghost" 
              size="icon" 
              className="md:hidden"
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            >
              {isMobileMenuOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
            </Button>
          </div>
        </div>

        {/* Mobile Search Bar - Only visible on mobile */}
        <div className="md:hidden pb-4">
          <div className="relative">
            <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-muted-foreground h-5 w-5" />
            <Input 
              placeholder="Search For Face"
              className="pl-10 py-3 rounded-full border-border bg-muted/50 w-full"
            />
          </div>
        </div>

        {/* Desktop Navigation */}
        <nav className="hidden md:block pb-4">
          <ul className="flex items-center flex-wrap gap-4 lg:gap-8 text-sm">
            {primaryNavItems.map((item, index) => (
              <li key={index}>
                <Button variant="ghost" className="text-foreground hover:text-plum-purple p-0 h-auto font-normal text-xs lg:text-sm">
                  {item}
                </Button>
              </li>
            ))}
            {/* Secondary nav items for larger screens */}
            {secondaryNavItems.map((item, index) => (
              <li key={`secondary-${index}`} className="hidden lg:block">
                <Button variant="ghost" className="text-foreground hover:text-plum-purple p-0 h-auto font-normal text-sm">
                  {item}
                </Button>
              </li>
            ))}
          </ul>
        </nav>

        {/* Mobile Navigation Menu */}
        {isMobileMenuOpen && (
          <nav className="md:hidden pb-4">
            <div className="bg-muted/50 rounded-lg p-4">
              <ul className="space-y-3">
                {navItems.map((item, index) => (
                  <li key={index}>
                    <Button 
                      variant="ghost" 
                      className="text-foreground hover:text-plum-purple justify-start w-full text-left p-2 h-auto font-normal"
                      onClick={() => setIsMobileMenuOpen(false)}
                    >
                      {item}
                    </Button>
                  </li>
                ))}
              </ul>
            </div>
          </nav>
        )}
      </div>
    </header>
  );
};

export default Header;