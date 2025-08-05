import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import GeneratedCard from "@/components/GeneratedCard";

const BioData = () => {
  const [showCard, setShowCard] = useState(false);
  const [formData, setFormData] = useState({
    // Personal Information
    fullName: "",
    fatherName: "",
    dateOfBirth: "",
    height: "",
    weight: "",
    maritalStatus: "",
    nationality: "",
    religion: "",
    caste: "",
    subcaste: "",
    currentLocation: "",
    
    // Contact & Education
    phoneNumber: "",
    emailAddress: "",
    address: "",
    educationDetails: "",
    degree: "",
    institution: "",
    specialization: "",
    
    // Family & Attributes
    parentDetails: "",
    personalityTraits: "",
    siblingsInfo: "",
    parentProfession: "",
    hobbiesInterests: "",
    
    // Preferences (Optional)
    partnerPreferences: "",
    qualifiedPartnerChk: false
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log("BioData Form Data:", formData);
    setShowCard(true);
  };

  const handleCreateAnother = () => {
    setShowCard(false);
    setFormData({
      fullName: "",
      fatherName: "",
      dateOfBirth: "",
      height: "",
      weight: "",
      maritalStatus: "",
      nationality: "",
      religion: "",
      caste: "",
      subcaste: "",
      currentLocation: "",
      phoneNumber: "",
      emailAddress: "",
      address: "",
      educationDetails: "",
      degree: "",
      institution: "",
      specialization: "",
      parentDetails: "",
      personalityTraits: "",
      siblingsInfo: "",
      parentProfession: "",
      hobbiesInterests: "",
      partnerPreferences: "",
      qualifiedPartnerChk: false
    });
  };

  const handleInputChange = (field: string, value: string) => {
    setFormData(prev => ({ ...prev, [field]: value }));
  };

  if (showCard) {
    return <GeneratedCard cardType="bio" data={formData} onCreateAnother={handleCreateAnother} />;
  }

  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      
      <div className="container mx-auto px-4 py-8">
        <div className="max-w-4xl mx-auto">
          <Card>
            <CardHeader className="bg-primary text-white">
              <CardTitle className="text-2xl text-center">BioData Form</CardTitle>
              <p className="text-center text-primary-foreground/90">Complete personal profile</p>
            </CardHeader>
            <CardContent className="p-8">
              <form onSubmit={handleSubmit} className="space-y-8">
                {/* Personal Information */}
                <div className="space-y-6">
                  <h3 className="text-lg font-semibold text-primary border-b pb-2">Personal Information</h3>
                  
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
                      <Label htmlFor="fatherName">Father's Name</Label>
                      <Input
                        id="fatherName"
                        value={formData.fatherName}
                        onChange={(e) => handleInputChange("fatherName", e.target.value)}
                        required
                      />
                    </div>

                    <div className="space-y-2">
                      <Label htmlFor="dateOfBirth">Date of Birth</Label>
                      <Input
                        id="dateOfBirth"
                        type="date"
                        value={formData.dateOfBirth}
                        onChange={(e) => handleInputChange("dateOfBirth", e.target.value)}
                        required
                      />
                    </div>

                    <div className="space-y-2">
                      <Label htmlFor="maritalStatus">Marital Status</Label>
                      <Select onValueChange={(value) => handleInputChange("maritalStatus", value)}>
                        <SelectTrigger>
                          <SelectValue placeholder="Select status" />
                        </SelectTrigger>
                        <SelectContent>
                          <SelectItem value="single">Single</SelectItem>
                          <SelectItem value="married">Married</SelectItem>
                          <SelectItem value="divorced">Divorced</SelectItem>
                          <SelectItem value="widowed">Widowed</SelectItem>
                        </SelectContent>
                      </Select>
                    </div>

                    <div className="space-y-2">
                      <Label htmlFor="height">Height (cm)</Label>
                      <Input
                        id="height"
                        value={formData.height}
                        onChange={(e) => handleInputChange("height", e.target.value)}
                      />
                    </div>

                    <div className="space-y-2">
                      <Label htmlFor="weight">Weight (kg)</Label>
                      <Input
                        id="weight"
                        value={formData.weight}
                        onChange={(e) => handleInputChange("weight", e.target.value)}
                      />
                    </div>

                    <div className="space-y-2">
                      <Label htmlFor="nationality">Nationality</Label>
                      <Input
                        id="nationality"
                        value={formData.nationality}
                        onChange={(e) => handleInputChange("nationality", e.target.value)}
                      />
                    </div>

                    <div className="space-y-2">
                      <Label htmlFor="religion">Religion</Label>
                      <Input
                        id="religion"
                        value={formData.religion}
                        onChange={(e) => handleInputChange("religion", e.target.value)}
                      />
                    </div>

                    <div className="space-y-2">
                      <Label htmlFor="caste">Caste</Label>
                      <Input
                        id="caste"
                        value={formData.caste}
                        onChange={(e) => handleInputChange("caste", e.target.value)}
                      />
                    </div>

                    <div className="space-y-2">
                      <Label htmlFor="subcaste">Subcaste</Label>
                      <Input
                        id="subcaste"
                        value={formData.subcaste}
                        onChange={(e) => handleInputChange("subcaste", e.target.value)}
                      />
                    </div>
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="currentLocation">Current Location</Label>
                    <Input
                      id="currentLocation"
                      value={formData.currentLocation}
                      onChange={(e) => handleInputChange("currentLocation", e.target.value)}
                    />
                  </div>
                </div>

                {/* Contact & Education */}
                <div className="space-y-6">
                  <h3 className="text-lg font-semibold text-primary border-b pb-2">Contact & Education</h3>
                  
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
                      <Label htmlFor="emailAddress">Email Address</Label>
                      <Input
                        id="emailAddress"
                        type="email"
                        value={formData.emailAddress}
                        onChange={(e) => handleInputChange("emailAddress", e.target.value)}
                        required
                      />
                    </div>

                    <div className="space-y-2">
                      <Label htmlFor="degree">Degree</Label>
                      <Input
                        id="degree"
                        value={formData.degree}
                        onChange={(e) => handleInputChange("degree", e.target.value)}
                      />
                    </div>

                    <div className="space-y-2">
                      <Label htmlFor="institution">Institution</Label>
                      <Input
                        id="institution"
                        value={formData.institution}
                        onChange={(e) => handleInputChange("institution", e.target.value)}
                      />
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

                  <div className="space-y-2">
                    <Label htmlFor="educationDetails">Education Details</Label>
                    <Textarea
                      id="educationDetails"
                      value={formData.educationDetails}
                      onChange={(e) => handleInputChange("educationDetails", e.target.value)}
                    />
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="specialization">Specialization</Label>
                    <Input
                      id="specialization"
                      value={formData.specialization}
                      onChange={(e) => handleInputChange("specialization", e.target.value)}
                    />
                  </div>
                </div>

                {/* Family & Attributes */}
                <div className="space-y-6">
                  <h3 className="text-lg font-semibold text-primary border-b pb-2">Family & Attributes</h3>
                  
                  <div className="grid md:grid-cols-2 gap-6">
                    <div className="space-y-2">
                      <Label htmlFor="parentDetails">Parent Details</Label>
                      <Textarea
                        id="parentDetails"
                        value={formData.parentDetails}
                        onChange={(e) => handleInputChange("parentDetails", e.target.value)}
                      />
                    </div>

                    <div className="space-y-2">
                      <Label htmlFor="personalityTraits">Personality Traits</Label>
                      <Textarea
                        id="personalityTraits"
                        value={formData.personalityTraits}
                        onChange={(e) => handleInputChange("personalityTraits", e.target.value)}
                      />
                    </div>

                    <div className="space-y-2">
                      <Label htmlFor="siblingsInfo">Siblings Info</Label>
                      <Textarea
                        id="siblingsInfo"
                        value={formData.siblingsInfo}
                        onChange={(e) => handleInputChange("siblingsInfo", e.target.value)}
                      />
                    </div>

                    <div className="space-y-2">
                      <Label htmlFor="parentProfession">Parent Profession (Optional)</Label>
                      <Input
                        id="parentProfession"
                        value={formData.parentProfession}
                        onChange={(e) => handleInputChange("parentProfession", e.target.value)}
                      />
                    </div>
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="hobbiesInterests">Hobbies & Interests</Label>
                    <Textarea
                      id="hobbiesInterests"
                      value={formData.hobbiesInterests}
                      onChange={(e) => handleInputChange("hobbiesInterests", e.target.value)}
                    />
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="partnerPreferences">Partner Preferences (Optional)</Label>
                    <Textarea
                      id="partnerPreferences"
                      value={formData.partnerPreferences}
                      onChange={(e) => handleInputChange("partnerPreferences", e.target.value)}
                    />
                  </div>
                </div>

                <div className="flex gap-4 pt-6">
                  <Button type="submit" className="flex-1 bg-primary hover:bg-primary/90">
                    Generate BioData Card
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

export default BioData;