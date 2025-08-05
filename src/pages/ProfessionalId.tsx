import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import GeneratedCard from "@/components/GeneratedCard";

const ProfessionalId = () => {
  const [showCard, setShowCard] = useState(false);
  const [formData, setFormData] = useState({
    individualPhoto: null as File | null,
    companyLogo: null as File | null,
    individualPhotoPreview: "",
    companyLogoPreview: "",
    fullName: "",
    companyName: "",
    officeAddress: "",
    mobileNumber: "",
    email: "",
    servicesDesignation: "",
    whatsappNumber: "",
    instagramLink: "",
    facebookLink: "",
    linkedinLink: "",
    twitterLink: "",
    websiteLink: "",
    locationMapLink: ""
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log("Professional ID Form Data:", formData);
    setShowCard(true);
  };

  const handleCreateAnother = () => {
    setShowCard(false);
    setFormData({
      individualPhoto: null,
      companyLogo: null,
      individualPhotoPreview: "",
      companyLogoPreview: "",
      fullName: "",
      companyName: "",
      officeAddress: "",
      mobileNumber: "",
      email: "",
      servicesDesignation: "",
      whatsappNumber: "",
      instagramLink: "",
      facebookLink: "",
      linkedinLink: "",
      twitterLink: "",
      websiteLink: "",
      locationMapLink: ""
    });
  };

  const handleInputChange = (field: string, value: string) => {
    setFormData(prev => ({ ...prev, [field]: value }));
  };

  const handleFileChange = (field: string, file: File | null) => {
    if (file) {
      const reader = new FileReader();
      reader.onload = (e) => {
        const previewField = field === 'individualPhoto' ? 'individualPhotoPreview' : 'companyLogoPreview';
        setFormData(prev => ({ 
          ...prev, 
          [field]: file,
          [previewField]: e.target?.result as string
        }));
      };
      reader.readAsDataURL(file);
    } else {
      const previewField = field === 'individualPhoto' ? 'individualPhotoPreview' : 'companyLogoPreview';
      setFormData(prev => ({ 
        ...prev, 
        [field]: null,
        [previewField]: ""
      }));
    }
  };

  if (showCard) {
    return <GeneratedCard cardType="professional" data={formData} onCreateAnother={handleCreateAnother} />;
  }

  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      
      <div className="container mx-auto px-4 py-8">
        <div className="max-w-4xl mx-auto">
          <Card>
            <CardHeader className="bg-primary text-white">
              <CardTitle className="text-2xl text-center">Professional ID Card Details</CardTitle>
            </CardHeader>
            <CardContent className="p-8">
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid md:grid-cols-2 gap-6">
                  {/* Individual Photo */}
                  <div className="space-y-2">
                    <Label htmlFor="individualPhoto">Individual Photo *</Label>
                    <div className="border-2 border-dashed border-muted-foreground/25 rounded-lg p-4 text-center">
                      <Input 
                        type="file" 
                        id="individualPhoto" 
                        accept="image/*" 
                        className="hidden" 
                        onChange={(e) => handleFileChange('individualPhoto', e.target.files?.[0] || null)}
                      />
                      <Label htmlFor="individualPhoto" className="cursor-pointer">
                        {formData.individualPhotoPreview ? (
                          <div>
                            <img 
                              src={formData.individualPhotoPreview} 
                              alt="Preview" 
                              className="w-20 h-20 object-cover rounded mx-auto mb-2" 
                            />
                            <div className="text-sm text-muted-foreground">Click to change</div>
                          </div>
                        ) : (
                          <div>
                            <div className="text-muted-foreground">Choose File</div>
                            <div className="text-sm text-muted-foreground">No file chosen</div>
                          </div>
                        )}
                      </Label>
                    </div>
                  </div>

                  {/* Company Logo */}
                  <div className="space-y-2">
                    <Label htmlFor="companyLogo">Company Logo *</Label>
                    <div className="border-2 border-dashed border-muted-foreground/25 rounded-lg p-4 text-center">
                      <Input 
                        type="file" 
                        id="companyLogo" 
                        accept="image/*" 
                        className="hidden" 
                        onChange={(e) => handleFileChange('companyLogo', e.target.files?.[0] || null)}
                      />
                      <Label htmlFor="companyLogo" className="cursor-pointer">
                        {formData.companyLogoPreview ? (
                          <div>
                            <img 
                              src={formData.companyLogoPreview} 
                              alt="Preview" 
                              className="w-20 h-20 object-cover rounded mx-auto mb-2" 
                            />
                            <div className="text-sm text-muted-foreground">Click to change</div>
                          </div>
                        ) : (
                          <div>
                            <div className="text-muted-foreground">Choose File</div>
                            <div className="text-sm text-muted-foreground">No file chosen</div>
                          </div>
                        )}
                      </Label>
                    </div>
                  </div>
                </div>

                <div className="grid md:grid-cols-2 gap-6">
                  <div className="space-y-2">
                    <Label htmlFor="fullName">Full Name *</Label>
                    <Input
                      id="fullName"
                      value={formData.fullName}
                      onChange={(e) => handleInputChange("fullName", e.target.value)}
                      required
                    />
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="companyName">Company Name *</Label>
                    <Input
                      id="companyName"
                      value={formData.companyName}
                      onChange={(e) => handleInputChange("companyName", e.target.value)}
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
                    <Label htmlFor="email">Email *</Label>
                    <Input
                      id="email"
                      type="email"
                      value={formData.email}
                      onChange={(e) => handleInputChange("email", e.target.value)}
                      required
                    />
                  </div>
                </div>

                <div className="space-y-2">
                  <Label htmlFor="officeAddress">Office Address *</Label>
                  <Textarea
                    id="officeAddress"
                    value={formData.officeAddress}
                    onChange={(e) => handleInputChange("officeAddress", e.target.value)}
                    required
                  />
                </div>

                <div className="space-y-2">
                  <Label htmlFor="servicesDesignation">Services/Designation *</Label>
                  <Textarea
                    id="servicesDesignation"
                    value={formData.servicesDesignation}
                    onChange={(e) => handleInputChange("servicesDesignation", e.target.value)}
                    required
                  />
                </div>

                {/* Contact & Social Links */}
                <div className="space-y-4">
                  <h3 className="text-lg font-semibold text-primary">Contact & Social Links (Optional)</h3>
                  <div className="grid md:grid-cols-2 gap-6">
                    <div className="space-y-2">
                      <Label htmlFor="whatsappNumber">WhatsApp Number</Label>
                      <Input
                        id="whatsappNumber"
                        type="tel"
                        value={formData.whatsappNumber}
                        onChange={(e) => handleInputChange("whatsappNumber", e.target.value)}
                      />
                    </div>

                    <div className="space-y-2">
                      <Label htmlFor="instagramLink">Instagram Link</Label>
                      <Input
                        id="instagramLink"
                        value={formData.instagramLink}
                        onChange={(e) => handleInputChange("instagramLink", e.target.value)}
                      />
                    </div>

                    <div className="space-y-2">
                      <Label htmlFor="facebookLink">Facebook Link</Label>
                      <Input
                        id="facebookLink"
                        value={formData.facebookLink}
                        onChange={(e) => handleInputChange("facebookLink", e.target.value)}
                      />
                    </div>

                    <div className="space-y-2">
                      <Label htmlFor="linkedinLink">LinkedIn Link</Label>
                      <Input
                        id="linkedinLink"
                        value={formData.linkedinLink}
                        onChange={(e) => handleInputChange("linkedinLink", e.target.value)}
                      />
                    </div>

                    <div className="space-y-2">
                      <Label htmlFor="twitterLink">Twitter (X) Link</Label>
                      <Input
                        id="twitterLink"
                        value={formData.twitterLink}
                        onChange={(e) => handleInputChange("twitterLink", e.target.value)}
                      />
                    </div>

                    <div className="space-y-2">
                      <Label htmlFor="websiteLink">Website Link</Label>
                      <Input
                        id="websiteLink"
                        value={formData.websiteLink}
                        onChange={(e) => handleInputChange("websiteLink", e.target.value)}
                      />
                    </div>

                    <div className="space-y-2 md:col-span-2">
                      <Label htmlFor="locationMapLink">Location (Map Link)</Label>
                      <Input
                        id="locationMapLink"
                        value={formData.locationMapLink}
                        onChange={(e) => handleInputChange("locationMapLink", e.target.value)}
                      />
                    </div>
                  </div>
                </div>

                <div className="flex gap-4 pt-6">
                  <Button type="submit" className="flex-1 bg-primary hover:bg-primary/90">
                    Generate ID Card
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

export default ProfessionalId;