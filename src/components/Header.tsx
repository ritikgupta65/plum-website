import { Search, ShoppingBag, User, Download } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import plumLogo from "@/assets/plum-logo.png";

const Header = () => {
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

  return (
    <header className="bg-background border-b border-border">
      <div className="container mx-auto px-4">
        {/* Top section with logo, search, and icons */}
        <div className="flex items-center justify-between py-4">
          {/* Logo */}
          <div className="flex items-center">
            <img src={plumLogo} alt="Plum" className="h-12 w-auto" />
          </div>

          {/* Search Bar */}
          <div className="flex-1 max-w-2xl mx-8">
            <div className="relative">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-muted-foreground h-5 w-5" />
              <Input 
                placeholder="Search For Face"
                className="pl-10 py-3 rounded-full border-border bg-muted/50"
              />
            </div>
          </div>

          {/* Right icons */}
          <div className="flex items-center space-x-4">
            <Button variant="ghost" size="sm" className="flex flex-col items-center gap-1 text-plum-purple">
              <Download className="h-5 w-5" />
              <span className="text-xs">download app now</span>
            </Button>
            <Button variant="ghost" size="icon">
              <User className="h-5 w-5" />
            </Button>
            <Button variant="ghost" size="icon" className="relative">
              <ShoppingBag className="h-5 w-5" />
              <span className="absolute -top-1 -right-1 bg-plum-purple text-white text-xs rounded-full h-4 w-4 flex items-center justify-center">0</span>
            </Button>
          </div>
        </div>

        {/* Navigation */}
        <nav className="pb-4">
          <ul className="flex items-center space-x-8 text-sm">
            {navItems.map((item, index) => (
              <li key={index}>
                <Button variant="ghost" className="text-foreground hover:text-plum-purple p-0 h-auto font-normal">
                  {item}
                </Button>
              </li>
            ))}
          </ul>
        </nav>
      </div>
    </header>
  );
};

export default Header;