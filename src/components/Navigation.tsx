import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";

const Navigation = () => {
  return (
    <nav className="w-full bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60 border-b">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <div className="flex items-center space-x-2">
            <a href="/">
            <div className="w-8 h-8 bg-gradient-to-br from-primary to-accent rounded-lg flex items-center justify-center">
              <span className="text-white font-bold text-sm">V</span>
            </div>
          </a>

            <span className="text-xl font-bold text-foreground">Verify</span>
          </div>

          {/* Navigation Links */}
          <div className="hidden md:flex items-center space-x-8">
            <a href="/" className="text-muted-foreground hover:text-foreground transition-colors">
              Home
            </a>
            <div className="relative group">
              <span className="text-muted-foreground hover:text-foreground transition-colors cursor-pointer">
                Services
              </span>
              <div className="absolute top-full left-0 mt-2 w-48 bg-background border rounded-lg shadow-lg opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200 z-50">
                <div className="py-2">
                  <a href="/student-id" className="block px-4 py-2 text-sm text-muted-foreground hover:text-foreground hover:bg-muted transition-colors">
                    Student ID
                  </a>
                  <a href="/professional-id" className="block px-4 py-2 text-sm text-muted-foreground hover:text-foreground hover:bg-muted transition-colors">
                    Professional Portfolio
                  </a>
                  <a href="/buyer-profile" className="block px-4 py-2 text-sm text-muted-foreground hover:text-foreground hover:bg-muted transition-colors">
                    Buyer Profile
                  </a>
                  <a href="/seller-profile" className="block px-4 py-2 text-sm text-muted-foreground hover:text-foreground hover:bg-muted transition-colors">
                    Seller Profile
                  </a>
                  <a href="/bio-data" className="block px-4 py-2 text-sm text-muted-foreground hover:text-foreground hover:bg-muted transition-colors">
                    Bio Data
                  </a>
                </div>
              </div>
            </div>
            <a href="/about" className="text-muted-foreground hover:text-foreground transition-colors">
              About
            </a>
          </div>

          {/* Right Side Actions */}
          <div className="flex items-center space-x-4">
            <a href="/auth">
            <Button variant="outline" size="sm">
              Login
            </Button>
            </a>
            <a href="/about">
            <Button size="sm" className="bg-primary hover:bg-primary/90">
              About Us
            </Button>
            </a>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navigation;