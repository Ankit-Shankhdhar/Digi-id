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

const BuyerProfile = () => {
  const [showCard, setShowCard] = useState(false);
  const [formData, setFormData] = useState({
    fullName: "",
    address: "",
    emailAddress: "",
    phoneNumber: "",
    brandColor: "#4285f4",
    productCodes: [""]
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log("Buyer Profile Form Data:", formData);
    setShowCard(true);
  };

  const handleInputChange = (field: string, value: string) => {
    setFormData(prev => ({ ...prev, [field]: value }));
  };

  const addProductCode = () => {
    setFormData(prev => ({
      ...prev,
      productCodes: [...prev.productCodes, ""]
    }));
  };

  const removeProductCode = (index: number) => {
    setFormData(prev => ({
      ...prev,
      productCodes: prev.productCodes.filter((_, i) => i !== index)
    }));
  };

  const updateProductCode = (index: number, value: string) => {
    setFormData(prev => ({
      ...prev,
      productCodes: prev.productCodes.map((code, i) => i === index ? value : code)
    }));
  };

  if (showCard) {
    return (
      <GeneratedCard 
        cardType="buyer" 
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
              <CardTitle className="text-2xl text-center">Buyer Card Registration</CardTitle>
              <p className="text-center text-primary-foreground/90">Customize your buyer profile</p>
            </CardHeader>
            <CardContent className="p-8">
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid md:grid-cols-2 gap-6">
                  <div className="space-y-2">
                    <Label htmlFor="fullName">Full Name</Label>
                    <Input
                      id="fullName"
                      value={formData.fullName}
                      onChange={(e) => handleInputChange("fullName", e.target.value)}
                      required
                    />
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="emailAddress">Email Address</Label>
                    <Input
                      id="emailAddress"
                      type="email"
                      value={formData.emailAddress}
                      onChange={(e) => handleInputChange("emailAddress", e.target.value)}
                      required
                    />
                  </div>
                </div>

                <div className="grid md:grid-cols-2 gap-6">
                  <div className="space-y-2">
                    <Label htmlFor="phoneNumber">Phone Number</Label>
                    <Input
                      id="phoneNumber"
                      type="tel"
                      value={formData.phoneNumber}
                      onChange={(e) => handleInputChange("phoneNumber", e.target.value)}
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
                  <Label htmlFor="address">Address</Label>
                  <Textarea
                    id="address"
                    value={formData.address}
                    onChange={(e) => handleInputChange("address", e.target.value)}
                    required
                  />
                </div>

                {/* Product Codes */}
                <div className="space-y-4">
                  <div className="flex items-center justify-between">
                    <Label>Product Codes (Optional)</Label>
                    <Button
                      type="button"
                      variant="outline"
                      size="sm"
                      onClick={addProductCode}
                      className="flex items-center space-x-2"
                    >
                      <Plus className="h-4 w-4" />
                      <span>Add Product Code</span>
                    </Button>
                  </div>
                  
                  <div className="space-y-3">
                    {formData.productCodes.map((code, index) => (
                      <div key={index} className="flex items-center space-x-2">
                        <Input
                          placeholder={`Product Code #${index + 1}`}
                          value={code}
                          onChange={(e) => updateProductCode(index, e.target.value)}
                          className="flex-1"
                        />
                        {formData.productCodes.length > 1 && (
                          <Button
                            type="button"
                            variant="outline"
                            size="sm"
                            onClick={() => removeProductCode(index)}
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
                    Create Buyer Card
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

export default BuyerProfile;