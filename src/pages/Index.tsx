import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import { 
  Shield, 
  Users, 
  CreditCard, 
  Download,
  ArrowRight,
  CheckCircle,
  Smartphone,
  Globe,
  Lock
} from "lucide-react";

const Index = () => {
  const features = [
    {
      icon: Shield,
      title: "Secure & Verified",
      description: "Your digital identity is protected with advanced security measures"
    },
    {
      icon: Smartphone,
      title: "Mobile Friendly",
      description: "Access your digital ID anywhere, anytime from any device"
    },
    {
      icon: Globe,
      title: "Global Recognition",
      description: "Accepted worldwide for verification and identification purposes"
    },
    {
      icon: Lock,
      title: "Privacy First",
      description: "Your personal data is encrypted and remains under your control"
    }
  ];

  const cardTypes = [
    { name: "Student ID", description: "Academic verification", href: "/student-id" },
    { name: "Professional Portfolio", description: "Career credentials", href: "/professional-id" },
    { name: "Buyer Profile", description: "Shopping verification", href: "/buyer-profile" },
    { name: "Seller Profile", description: "Business credentials", href: "/seller-profile" },
    { name: "Bio Data", description: "Personal biodata", href: "/bio-data" }
  ];

  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      
      {/* Hero Section */}
      <section className="relative overflow-hidden bg-gradient-to-br from-primary/5 via-background to-accent/5">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-20 lg:py-32">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-8">
              <div className="space-y-4">
                <Badge variant="secondary" className="text-primary">
                  Digital Identity Platform
                </Badge>
                <h1 className="text-4xl lg:text-6xl font-bold leading-tight">
                  Create your First 
                  <span className="bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
                    {" "}Digital ID
                  </span>
                  {" "}with our platform!
                </h1>
                <p className="text-xl text-muted-foreground">
                  Secure, verified, and recognized globally. Build your digital identity 
                  with our advanced platform trusted by thousands.
                </p>
              </div>
              
              <div className="flex flex-col sm:flex-row gap-4">
                <Button size="lg" className="bg-primary hover:bg-primary/90" asChild>
                  <a href="/student-id">
                    Create Profile
                    <ArrowRight className="ml-2 h-4 w-4" />
                  </a>
                </Button>
                <Button variant="outline" size="lg">
                  View Profiles
                </Button>
              </div>

              <div className="flex items-center space-x-6 text-sm text-muted-foreground">
                <div className="flex items-center space-x-2">
                  <CheckCircle className="h-4 w-4 text-green-500" />
                  <span>Secure</span>
                </div>
                <div className="flex items-center space-x-2">
                  <CheckCircle className="h-4 w-4 text-green-500" />
                  <span>Verified</span>
                </div>
                <div className="flex items-center space-x-2">
                  <CheckCircle className="h-4 w-4 text-green-500" />
                  <span>Global</span>
                </div>
              </div>
            </div>

            <div className="relative">
              <div className="relative mx-auto w-72 h-96 bg-gradient-to-br from-gray-100 to-gray-200 rounded-3xl shadow-2xl overflow-hidden">
                {/* Phone Frame */}
                <div className="absolute inset-2 bg-white rounded-2xl overflow-hidden">
                  {/* Status Bar */}
                  <div className="h-6 bg-gray-50 flex items-center justify-center">
                    <div className="w-20 h-1 bg-gray-300 rounded-full"></div>
                  </div>
                  
                  {/* Profile Card Content */}
                  <div className="p-4 space-y-4">
                    <div className="bg-primary rounded-lg p-4 text-white">
                      <div className="flex items-center space-x-3">
                        <div className="w-12 h-12 bg-white/20 rounded-lg flex items-center justify-center">
                          <Users className="h-6 w-6" />
                        </div>
                        <div>
                          <h3 className="font-semibold">Viral Mehta</h3>
                          <p className="text-sm opacity-90">Branch Head</p>
                          <p className="text-xs opacity-75">Opti Matrix Solutions</p>
                        </div>
                      </div>
                    </div>
                    
                    <div className="grid grid-cols-4 gap-2">
                      <div className="bg-blue-50 p-2 rounded-lg text-center">
                        <div className="w-6 h-6 bg-blue-500 rounded mx-auto mb-1"></div>
                        <span className="text-xs">LinkedIn</span>
                      </div>
                      <div className="bg-blue-50 p-2 rounded-lg text-center">
                        <div className="w-6 h-6 bg-blue-600 rounded mx-auto mb-1"></div>
                        <span className="text-xs">Facebook</span>
                      </div>
                      <div className="bg-blue-50 p-2 rounded-lg text-center">
                        <div className="w-6 h-6 bg-blue-400 rounded mx-auto mb-1"></div>
                        <span className="text-xs">Twitter</span>
                      </div>
                      <div className="bg-blue-50 p-2 rounded-lg text-center">
                        <div className="w-6 h-6 bg-pink-500 rounded mx-auto mb-1"></div>
                        <span className="text-xs">Instagram</span>
                      </div>
                    </div>
                    
                    <div className="space-y-2 text-xs">
                      <div className="flex items-center space-x-2">
                        <div className="w-4 h-4 bg-green-500 rounded"></div>
                        <span>Call: +91 75750 58924</span>
                      </div>
                      <div className="flex items-center space-x-2">
                        <div className="w-4 h-4 bg-green-500 rounded"></div>
                        <span>WhatsApp</span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20 bg-muted/30">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center space-y-4 mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold">Why Choose Our Platform?</h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Experience the future of digital identity with our secure and user-friendly platform
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {features.map((feature, index) => (
              <Card key={index} className="text-center border-0 shadow-lg hover:shadow-xl transition-shadow">
                <CardContent className="p-6 space-y-4">
                  <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mx-auto">
                    <feature.icon className="h-6 w-6 text-primary" />
                  </div>
                  <h3 className="text-lg font-semibold">{feature.title}</h3>
                  <p className="text-muted-foreground">{feature.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Card Types Section */}
      <section className="py-20">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center space-y-4 mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold">Available ID Types</h2>
            <p className="text-xl text-muted-foreground">
              Choose from various digital identity cards for different purposes
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-5 gap-6">
            {cardTypes.map((type, index) => (
              <Card key={index} className="hover:shadow-lg transition-shadow cursor-pointer group">
                <CardContent className="p-6 text-center space-y-4">
                  <div className="w-16 h-16 bg-primary/10 rounded-xl flex items-center justify-center mx-auto group-hover:bg-primary/20 transition-colors">
                    <CreditCard className="h-8 w-8 text-primary" />
                  </div>
                  <div>
                    <h3 className="font-semibold">{type.name}</h3>
                    <p className="text-sm text-muted-foreground">{type.description}</p>
                  </div>
                  <Button variant="outline" size="sm" className="w-full" asChild>
                    <a href={type.href}>Create Now</a>
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-primary to-accent">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="space-y-6 text-white">
            <h2 className="text-3xl lg:text-4xl font-bold">
              Ready to Create Your Digital Identity?
            </h2>
            <p className="text-xl opacity-90 max-w-2xl mx-auto">
              Join thousands of users who trust our platform for their digital identity needs
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" variant="secondary" asChild>
                <a href="/student-id">
                  Get Started Now
                  <ArrowRight className="ml-2 h-4 w-4" />
                </a>
              </Button>
              <Button size="lg" variant="outline" className="border-white text-white hover:bg-white hover:text-primary">
                Learn More
              </Button>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Index;
