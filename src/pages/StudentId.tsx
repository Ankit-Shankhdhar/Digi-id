import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import GeneratedCard from "@/components/GeneratedCard";

const StudentId = () => {
  const [showCard, setShowCard] = useState(false);
  const [formData, setFormData] = useState({
    studentPhoto: null as File | null,
    schoolLogo: null as File | null,
    studentPhotoPreview: "",
    schoolLogoPreview: "",
    fullName: "",
    schoolName: "",
    age: "",
    idCardNumber: "",
    studentContact: "",
    address: "",
    studentEmail: "",
    parentContact: "",
    parentEmail: "",
    instagram: "",
    facebook: "",
    linkedin: "",
    twitter: "",
    personalWebsite: ""
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log("Student ID Form Data:", formData);
    setShowCard(true);
  };

  const handleCreateAnother = () => {
    setShowCard(false);
    setFormData({
      studentPhoto: null,
      schoolLogo: null,
      studentPhotoPreview: "",
      schoolLogoPreview: "",
      fullName: "",
      schoolName: "",
      age: "",
      idCardNumber: "",
      studentContact: "",
      address: "",
      studentEmail: "",
      parentContact: "",
      parentEmail: "",
      instagram: "",
      facebook: "",
      linkedin: "",
      twitter: "",
      personalWebsite: ""
    });
  };

  const handleInputChange = (field: string, value: string) => {
    setFormData(prev => ({ ...prev, [field]: value }));
  };

  const handleFileChange = (field: string, file: File | null) => {
    if (file) {
      const reader = new FileReader();
      reader.onload = (e) => {
        const previewField = field === 'studentPhoto' ? 'studentPhotoPreview' : 'schoolLogoPreview';
        setFormData(prev => ({ 
          ...prev, 
          [field]: file,
          [previewField]: e.target?.result as string
        }));
      };
      reader.readAsDataURL(file);
    } else {
      const previewField = field === 'studentPhoto' ? 'studentPhotoPreview' : 'schoolLogoPreview';
      setFormData(prev => ({ 
        ...prev, 
        [field]: null,
        [previewField]: ""
      }));
    }
  };

  if (showCard) {
    return <GeneratedCard cardType="student" data={formData} onCreateAnother={handleCreateAnother} />;
  }

  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      
      <div className="container mx-auto px-4 py-8">
        <div className="max-w-4xl mx-auto">
          <Card>
            <CardHeader className="bg-primary text-white">
              <CardTitle className="text-2xl text-center">Student ID Card Application</CardTitle>
            </CardHeader>
            <CardContent className="p-8">
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid md:grid-cols-2 gap-6">
                  {/* Student Photo */}
                  <div className="space-y-2">
                    <Label htmlFor="studentPhoto">Student Photo *</Label>
                    <div className="border-2 border-dashed border-muted-foreground/25 rounded-lg p-4 text-center">
                      <Input 
                        type="file" 
                        id="studentPhoto" 
                        accept="image/*" 
                        className="hidden" 
                        onChange={(e) => handleFileChange('studentPhoto', e.target.files?.[0] || null)}
                      />
                      <Label htmlFor="studentPhoto" className="cursor-pointer">
                        {formData.studentPhotoPreview ? (
                          <div>
                            <img 
                              src={formData.studentPhotoPreview} 
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

                  {/* School Logo */}
                  <div className="space-y-2">
                    <Label htmlFor="schoolLogo">School Logo *</Label>
                    <div className="border-2 border-dashed border-muted-foreground/25 rounded-lg p-4 text-center">
                      <Input 
                        type="file" 
                        id="schoolLogo" 
                        accept="image/*" 
                        className="hidden" 
                        onChange={(e) => handleFileChange('schoolLogo', e.target.files?.[0] || null)}
                      />
                      <Label htmlFor="schoolLogo" className="cursor-pointer">
                        {formData.schoolLogoPreview ? (
                          <div>
                            <img 
                              src={formData.schoolLogoPreview} 
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
                    <Label htmlFor="schoolName">School Name *</Label>
                    <Input
                      id="schoolName"
                      value={formData.schoolName}
                      onChange={(e) => handleInputChange("schoolName", e.target.value)}
                      required
                    />
                  </div>
                </div>

                <div className="grid md:grid-cols-2 gap-6">
                  <div className="space-y-2">
                    <Label htmlFor="age">Age *</Label>
                    <Input
                      id="age"
                      type="number"
                      value={formData.age}
                      onChange={(e) => handleInputChange("age", e.target.value)}
                      required
                    />
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="idCardNumber">ID Card Number *</Label>
                    <Input
                      id="idCardNumber"
                      value={formData.idCardNumber}
                      onChange={(e) => handleInputChange("idCardNumber", e.target.value)}
                      required
                    />
                  </div>
                </div>

                <div className="grid md:grid-cols-2 gap-6">
                  <div className="space-y-2">
                    <Label htmlFor="studentContact">Student Contact *</Label>
                    <Input
                      id="studentContact"
                      type="tel"
                      value={formData.studentContact}
                      onChange={(e) => handleInputChange("studentContact", e.target.value)}
                      required
                    />
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="studentEmail">Student Email *</Label>
                    <Input
                      id="studentEmail"
                      type="email"
                      value={formData.studentEmail}
                      onChange={(e) => handleInputChange("studentEmail", e.target.value)}
                      required
                    />
                  </div>
                </div>

                <div className="space-y-2">
                  <Label htmlFor="address">Address *</Label>
                  <Textarea
                    id="address"
                    value={formData.address}
                    onChange={(e) => handleInputChange("address", e.target.value)}
                    required
                  />
                </div>

                <div className="grid md:grid-cols-2 gap-6">
                  <div className="space-y-2">
                    <Label htmlFor="parentContact">Parent Contact *</Label>
                    <Input
                      id="parentContact"
                      type="tel"
                      value={formData.parentContact}
                      onChange={(e) => handleInputChange("parentContact", e.target.value)}
                      required
                    />
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="parentEmail">Parent Email (Optional)</Label>
                    <Input
                      id="parentEmail"
                      type="email"
                      value={formData.parentEmail}
                      onChange={(e) => handleInputChange("parentEmail", e.target.value)}
                    />
                  </div>
                </div>

                {/* Social Media Links */}
                <div className="space-y-4">
                  <h3 className="text-lg font-semibold text-primary">Social Media Links (Optional)</h3>
                  <div className="grid md:grid-cols-2 gap-6">
                    <div className="space-y-2">
                      <Label htmlFor="instagram">Instagram</Label>
                      <Input
                        id="instagram"
                        placeholder="Enter Instagram URL"
                        value={formData.instagram}
                        onChange={(e) => handleInputChange("instagram", e.target.value)}
                      />
                    </div>

                    <div className="space-y-2">
                      <Label htmlFor="facebook">Facebook</Label>
                      <Input
                        id="facebook"
                        placeholder="Enter Facebook URL"
                        value={formData.facebook}
                        onChange={(e) => handleInputChange("facebook", e.target.value)}
                      />
                    </div>

                    <div className="space-y-2">
                      <Label htmlFor="linkedin">LinkedIn</Label>
                      <Input
                        id="linkedin"
                        placeholder="Enter LinkedIn URL"
                        value={formData.linkedin}
                        onChange={(e) => handleInputChange("linkedin", e.target.value)}
                      />
                    </div>

                    <div className="space-y-2">
                      <Label htmlFor="twitter">Twitter (X)</Label>
                      <Input
                        id="twitter"
                        placeholder="Enter Twitter (X) URL"
                        value={formData.twitter}
                        onChange={(e) => handleInputChange("twitter", e.target.value)}
                      />
                    </div>

                    <div className="space-y-2 md:col-span-2">
                      <Label htmlFor="personalWebsite">Personal Website</Label>
                      <Input
                        id="personalWebsite"
                        placeholder="Enter Personal Website URL"
                        value={formData.personalWebsite}
                        onChange={(e) => handleInputChange("personalWebsite", e.target.value)}
                      />
                    </div>
                  </div>
                </div>

                <div className="flex gap-4 pt-6">
                  <Button type="submit" className="flex-1 bg-primary hover:bg-primary/90">
                    Generate ID
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

export default StudentId;