import Navigation from "../components/Navigation";
import Footer from "../components/Footer";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent } from "@/components/ui/card";
import { CheckCircle, Users, Shield, Globe } from "lucide-react";

const About = () => {
  const features = [
    {
      icon: Shield,
      title: "Secure & Verified",
      description: "All digital IDs are secured with advanced encryption and QR code verification technology."
    },
    {
      icon: Globe,
      title: "Globally Accessible",
      description: "Access your digital identity from anywhere in the world with just a QR code scan."
    },
    {
      icon: Users,
      title: "Multi-Purpose",
      description: "Create student IDs, professional portfolios, buyer/seller profiles, and bio data cards."
    },
    {
      icon: CheckCircle,
      title: "Instant Verification",
      description: "Real-time verification system ensures authenticity and prevents fraud."
    }
  ];

  const stats = [
    { number: "10K+", label: "Users Verified" },
    { number: "50K+", label: "IDs Generated" },
    { number: "99.9%", label: "Uptime" },
    { number: "24/7", label: "Support" }
  ];

  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      
      <main className="container mx-auto px-4 py-16">
        {/* Hero Section */}
        <div className="text-center mb-16">
          <Badge variant="secondary" className="mb-4">About Verify</Badge>
          <h1 className="text-4xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent pb-3">
            Revolutionizing Digital Identity
          </h1>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto mb-8">
            Verify is a cutting-edge platform that enables users to create secure, verifiable digital identity cards. 
            Our mission is to make identity verification seamless, secure, and accessible to everyone.
          </p>
        </div>

        {/* Stats Section */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mb-16">
          {stats.map((stat, index) => (
            <div key={index} className="text-center">
              <div className="text-3xl md:text-4xl font-bold text-primary mb-2">{stat.number}</div>
              <div className="text-muted-foreground">{stat.label}</div>
            </div>
          ))}
        </div>

        {/* Features Grid */}
        <div className="mb-16">
          <h2 className="text-3xl font-bold text-center mb-12">Why Choose Verify?</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {features.map((feature, index) => (
              <Card key={index} className="text-center h-full">
                <CardContent className="p-6">
                  <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mx-auto mb-4">
                    <feature.icon className="w-6 h-6 text-primary" />
                  </div>
                  <h3 className="text-lg font-semibold mb-3">{feature.title}</h3>
                  <p className="text-muted-foreground text-sm">{feature.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>

        {/* Mission Section */}
        <div className="bg-muted/30 rounded-2xl p-8 md:p-12 mb-16">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl font-bold mb-6">Our Mission</h2>
            <p className="text-lg text-muted-foreground mb-8">
              At Verify, we believe that digital identity should be secure, accessible, and user-controlled. 
              We're building the future where your identity is truly yours - portable, verifiable, and protected.
            </p>
            <div className="grid md:grid-cols-3 gap-8 text-left">
              <div>
                <h3 className="font-semibold text-lg mb-3">Security First</h3>
                <p className="text-muted-foreground">
                  Every digital ID is protected with military-grade encryption and blockchain-verified authenticity.
                </p>
              </div>
              <div>
                <h3 className="font-semibold text-lg mb-3">User Control</h3>
                <p className="text-muted-foreground">
                  You own your data. You decide who can access your information and when.
                </p>
              </div>
              <div>
                <h3 className="font-semibold text-lg mb-3">Global Standard</h3>
                <p className="text-muted-foreground">
                  Working towards a unified global standard for digital identity verification.
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Contact Section */}
        <div className="text-center">
          <h2 className="text-3xl font-bold mb-6">Get in Touch</h2>
          <p className="text-lg text-muted-foreground mb-8 max-w-2xl mx-auto">
            Have questions about our platform? Want to partner with us? We'd love to hear from you.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <div className="text-center sm:text-left">
              <div className="font-semibold">Email</div>
              <div className="text-muted-foreground">contact@verify.com</div>
            </div>
            <div className="text-center sm:text-left">
              <div className="font-semibold">Support</div>
              <div className="text-muted-foreground">support@verify.com</div>
            </div>
            <div className="text-center sm:text-left">
              <div className="font-semibold">Business</div>
              <div className="text-muted-foreground">business@verify.com</div>
            </div>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
};

export default About;