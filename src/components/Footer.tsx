import { Button } from "@/components/ui/button";

const Footer = () => {
  return (
    <footer className="bg-muted/30 border-t">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Company Info */}
          <div className="space-y-4">
            <div className="flex items-center space-x-2">
              <div className="w-8 h-8 bg-gradient-to-br from-primary to-accent rounded-lg flex items-center justify-center">
                <span className="text-white font-bold text-sm">V</span>
              </div>
              <span className="text-xl font-bold text-foreground">Verify</span>
            </div>
            <p className="text-muted-foreground text-sm">
              Create your digital identity with our secure and modern platform. 
              Trusted by thousands of users worldwide.
            </p>
          </div>

          {/* Quick Links */}
          <div className="space-y-4">
            <h4 className="text-sm font-semibold text-foreground">Quick Links</h4>
            <ul className="space-y-2 text-sm">
              <li><a href="/" className="text-muted-foreground hover:text-foreground transition-colors">Home</a></li>
              <li><a href="/student-id" className="text-muted-foreground hover:text-foreground transition-colors">Create Profile</a></li>
              <li><a href="#" className="text-muted-foreground hover:text-foreground transition-colors">View Profiles</a></li>
              <li><a href="#" className="text-muted-foreground hover:text-foreground transition-colors">Support</a></li>
            </ul>
          </div>

          {/* Services */}
          <div className="space-y-4">
            <h4 className="text-sm font-semibold text-foreground">Services</h4>
            <ul className="space-y-2 text-sm">
              <li><a href="/student-id" className="text-muted-foreground hover:text-foreground transition-colors">Student ID</a></li>
              <li><a href="/professional-id" className="text-muted-foreground hover:text-foreground transition-colors">Professional Portfolio</a></li>
              <li><a href="/buyer-profile" className="text-muted-foreground hover:text-foreground transition-colors">Buyer Profile</a></li>
              <li><a href="/seller-profile" className="text-muted-foreground hover:text-foreground transition-colors">Seller Profile</a></li>
            </ul>
          </div>

          {/* Contact */}
          <div className="space-y-4">
            <h4 className="text-sm font-semibold text-foreground">Contact</h4>
            <div className="space-y-2 text-sm text-muted-foreground">
              <p>Email: support@verify.com</p>
              <p>Phone: +1 (555) 123-4567</p>
              <p>Address: 123 Digital Street, Tech City</p>
            </div>
          </div>
        </div>

        {/* Bottom Section */}
        <div className="border-t mt-8 pt-8 flex flex-col md:flex-row justify-between items-center">
          <p className="text-sm text-muted-foreground">
            © 2025 Verify. All rights reserved.
          </p>
          <div className="flex space-x-4 mt-4 md:mt-0">
            <a href="#" className="text-muted-foreground hover:text-foreground transition-colors">
              Privacy Policy
            </a>
            <a href="#" className="text-muted-foreground hover:text-foreground transition-colors">
              Terms of Service
            </a>
            <a href="#" className="text-muted-foreground hover:text-foreground transition-colors">
              Cookie Policy
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
