import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import { Plus, X } from "lucide-react";
import GeneratedCard from "@/components/GeneratedCard";

const SellerProfile = () => {
  const [showCard, setShowCard] = useState(false);
  const [formData, setFormData] = useState({
    ownerName: "",
    businessName: "",
    businessAddress: "",
    mobileNumber: "",
    businessLogo: null,
    brandColor: "#4285f4",
    productCodePermits: [""]
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log("Seller Profile Form Data:", formData);
    setShowCard(true);
  };

  const handleInputChange = (field: string, value: string) => {
    setFormData(prev => ({ ...prev, [field]: value }));
  };

  const addPermit = () => {
    setFormData(prev => ({
      ...prev,
      productCodePermits: [...prev.productCodePermits, ""]
    }));
  };

  const removePermit = (index: number) => {
    setFormData(prev => ({
      ...prev,
      productCodePermits: prev.productCodePermits.filter((_, i) => i !== index)
    }));
  };

  const updatePermit = (index: number, value: string) => {
    setFormData(prev => ({
      ...prev,
      productCodePermits: prev.productCodePermits.map((permit, i) => i === index ? value : permit)
    }));
  };

  if (showCard) {
    return (
      <GeneratedCard 
        cardType="seller" 
        data={formData} 
        onCreateAnother={() => setShowCard(false)} 
      />
    );
  }

  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      
      <div className="container mx-auto px-4 py-8">
        <div className="max-w-4xl mx-auto">
          <Card>
            <CardHeader className="bg-primary text-white">
              <CardTitle className="text-2xl text-center">Seller Card Registration</CardTitle>
            </CardHeader>
            <CardContent className="p-8">
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid md:grid-cols-2 gap-6">
                  <div className="space-y-2">
                    <Label htmlFor="ownerName">Owner Name *</Label>
                    <Input
                      id="ownerName"
                      value={formData.ownerName}
                      onChange={(e) => handleInputChange("ownerName", e.target.value)}
                      required
                    />
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="businessName">Business Name *</Label>
                    <Input
                      id="businessName"
                      value={formData.businessName}
                      onChange={(e) => handleInputChange("businessName", e.target.value)}
                      required
                    />
                  </div>
                </div>

                <div className="grid md:grid-cols-2 gap-6">
                  <div className="space-y-2">
                    <Label htmlFor="mobileNumber">Mobile Number *</Label>
                    <Input
                      id="mobileNumber"
                      type="tel"
                      value={formData.mobileNumber}
                      onChange={(e) => handleInputChange("mobileNumber", e.target.value)}
                      required
                    />
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="brandColor">Brand Color</Label>
                    <div className="flex items-center space-x-2">
                      <Input
                        id="brandColor"
                        type="color"
                        value={formData.brandColor}
                        onChange={(e) => handleInputChange("brandColor", e.target.value)}
                        className="w-16 h-10 p-1 rounded"
                      />
                      <div 
                        className="flex-1 h-10 rounded border" 
                        style={{ backgroundColor: formData.brandColor }}
                      ></div>
                    </div>
                  </div>
                </div>

                <div className="space-y-2">
                  <Label htmlFor="businessAddress">Business Address *</Label>
                  <Textarea
                    id="businessAddress"
                    value={formData.businessAddress}
                    onChange={(e) => handleInputChange("businessAddress", e.target.value)}
                    required
                  />
                </div>

                {/* Business Logo */}
                <div className="space-y-2">
                  <Label htmlFor="businessLogo">Business Logo *</Label>
                  <div className="border-2 border-dashed border-muted-foreground/25 rounded-lg p-4 text-center">
                    <Input type="file" id="businessLogo" accept="image/*" className="hidden" />
                    <Label htmlFor="businessLogo" className="cursor-pointer">
                      <div className="text-muted-foreground">Choose File</div>
                      <div className="text-sm text-muted-foreground">No file chosen</div>
                    </Label>
                  </div>
                </div>

                {/* Product Code Permits */}
                <div className="space-y-4">
                  <div className="flex items-center justify-between">
                    <Label>Product Code Permits (Optional)</Label>
                    <Button
                      type="button"
                      variant="outline"
                      size="sm"
                      onClick={addPermit}
                      className="flex items-center space-x-2"
                    >
                      <Plus className="h-4 w-4" />
                      <span>Add Permit</span>
                    </Button>
                  </div>
                  
                  <div className="space-y-3">
                    {formData.productCodePermits.map((permit, index) => (
                      <div key={index} className="flex items-center space-x-2">
                        <Input
                          placeholder={`Permit / Code #${index + 1}`}
                          value={permit}
                          onChange={(e) => updatePermit(index, e.target.value)}
                          className="flex-1"
                        />
                        {formData.productCodePermits.length > 1 && (
                          <Button
                            type="button"
                            variant="outline"
                            size="sm"
                            onClick={() => removePermit(index)}
                            className="p-2"
                          >
                            <X className="h-4 w-4" />
                          </Button>
                        )}
                      </div>
                    ))}
                  </div>
                </div>

                <div className="flex gap-4 pt-6">
                  <Button type="submit" className="flex-1 bg-primary hover:bg-primary/90">
                    Generate Seller Card
                  </Button>
                  <Button type="button" variant="outline" className="flex-1">
                    Reset Form
                  </Button>
                </div>
              </form>
            </CardContent>
          </Card>
        </div>
      </div>

      <Footer />
    </div>
  );
};

export default SellerProfile;