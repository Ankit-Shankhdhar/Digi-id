import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import { Badge } from "@/components/ui/badge";

const ProfileView = () => {
  const { cardType, cardId } = useParams();
  const [profileData, setProfileData] = useState<any>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const loadProfile = () => {
      try {
        const stored = localStorage.getItem(`profile_${cardType}_${cardId}`);
        if (stored) {
          setProfileData(JSON.parse(stored));
        }
      } catch (error) {
        console.error('Error loading profile:', error);
      } finally {
        setLoading(false);
      }
    };

    loadProfile();
  }, [cardType, cardId]);

  if (loading) {
    return (
      <div className="min-h-screen bg-background flex items-center justify-center">
        <div className="text-center">
          <div className="animate-spin rounded-full h-32 w-32 border-b-2 border-primary mx-auto"></div>
          <p className="mt-4">Loading profile...</p>
        </div>
      </div>
    );
  }

  if (!profileData) {
    return (
      <div className="min-h-screen bg-background">
        <Navigation />
        <div className="container mx-auto px-4 py-8 text-center">
          <h1 className="text-2xl font-bold mb-4">Profile Not Found</h1>
          <p>The requested profile could not be found.</p>
        </div>
        <Footer />
      </div>
    );
  }

  const getName = () => {
    return profileData.fullName || profileData.ownerName || profileData.studentName || profileData.name || 'Unknown User';
  };

  const getCardTypeLabel = () => {
    const types: { [key: string]: string } = {
      buyer: 'Buyer Profile',
      seller: 'Seller Profile', 
      student: 'Student ID',
      professional: 'Professional ID',
      bio: 'Bio Data'
    };
    return types[cardType as string] || 'Profile';
  };

  const renderProfileDetails = () => {
    const details = [];

    // Common fields
    if (profileData.emailAddress || profileData.email) {
      details.push({ label: 'Email', value: profileData.emailAddress || profileData.email });
    }
    if (profileData.phoneNumber || profileData.mobileNumber || profileData.phone) {
      details.push({ label: 'Phone', value: profileData.phoneNumber || profileData.mobileNumber || profileData.phone });
    }
    if (profileData.address || profileData.businessAddress) {
      details.push({ label: 'Address', value: profileData.address || profileData.businessAddress });
    }

    // Card type specific fields
    if (cardType === 'seller') {
      if (profileData.businessName) details.push({ label: 'Business Name', value: profileData.businessName });
    }

    if (cardType === 'student') {
      if (profileData.rollNumber) details.push({ label: 'Roll Number', value: profileData.rollNumber });
      if (profileData.course) details.push({ label: 'Course', value: profileData.course });
      if (profileData.year) details.push({ label: 'Year', value: profileData.year });
      if (profileData.college) details.push({ label: 'College', value: profileData.college });
    }

    if (cardType === 'professional') {
      if (profileData.company) details.push({ label: 'Company', value: profileData.company });
      if (profileData.designation) details.push({ label: 'Designation', value: profileData.designation });
      if (profileData.experience) details.push({ label: 'Experience', value: profileData.experience });
      if (profileData.skills) details.push({ label: 'Skills', value: profileData.skills });
    }

    if (cardType === 'bio') {
      if (profileData.dateOfBirth) details.push({ label: 'Date of Birth', value: profileData.dateOfBirth });
      if (profileData.gender) details.push({ label: 'Gender', value: profileData.gender });
      if (profileData.nationality) details.push({ label: 'Nationality', value: profileData.nationality });
      if (profileData.occupation) details.push({ label: 'Occupation', value: profileData.occupation });
    }

    return details;
  };

  const getProductCodes = () => {
    if (profileData.productCodes && profileData.productCodes.length > 0) {
      return profileData.productCodes.filter((code: string) => code.trim() !== '');
    }
    if (profileData.productCodePermits && profileData.productCodePermits.length > 0) {
      return profileData.productCodePermits.filter((code: string) => code.trim() !== '');
    }
    return [];
  };

  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      
      <div className="container mx-auto px-4 py-8">
        <div className="max-w-4xl mx-auto">
          <Card>
            <CardHeader className="bg-primary text-white text-center">
              <CardTitle className="text-3xl">{getName()}</CardTitle>
              <p className="text-primary-foreground/90">{getCardTypeLabel()}</p>
            </CardHeader>
            <CardContent className="p-8">
              <div className="grid md:grid-cols-2 gap-8">
                {/* Profile Details */}
                <div>
                  <h3 className="text-xl font-semibold mb-4">Profile Information</h3>
                  <div className="space-y-3">
                    {renderProfileDetails().map((detail, index) => (
                      <div key={index} className="flex flex-col space-y-1">
                        <span className="text-sm font-medium text-muted-foreground">{detail.label}</span>
                        <span className="text-base">{detail.value}</span>
                      </div>
                    ))}
                  </div>

                  {/* Brand Color Display */}
                  {profileData.brandColor && (
                    <div className="mt-6">
                      <span className="text-sm font-medium text-muted-foreground">Brand Color</span>
                      <div className="flex items-center space-x-2 mt-1">
                        <div 
                          className="w-8 h-8 rounded border" 
                          style={{ backgroundColor: profileData.brandColor }}
                        ></div>
                        <span className="text-sm">{profileData.brandColor}</span>
                      </div>
                    </div>
                  )}
                </div>

                {/* Product Codes / Additional Info */}
                <div>
                  {getProductCodes().length > 0 && (
                    <div>
                      <h3 className="text-xl font-semibold mb-4">
                        {cardType === 'buyer' ? 'Registered Product Codes' : 'Product Code Permits'}
                      </h3>
                      <div className="flex flex-wrap gap-2">
                        {getProductCodes().map((code: string, index: number) => (
                          <Badge key={index} variant="secondary">
                            {code}
                          </Badge>
                        ))}
                      </div>
                    </div>
                  )}

                  {/* Additional fields for bio data */}
                  {cardType === 'bio' && profileData.bio && (
                    <div className="mt-6">
                      <h3 className="text-xl font-semibold mb-4">Biography</h3>
                      <p className="text-sm leading-relaxed">{profileData.bio}</p>
                    </div>
                  )}
                </div>
              </div>

              {/* Contact Call-to-Action */}
              <div className="mt-8 text-center p-6 bg-muted rounded-lg">
                <h3 className="text-lg font-semibold mb-2">Get in Touch</h3>
                <p className="text-muted-foreground">
                  This profile was generated using our Digital Identity Platform
                </p>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>

      <Footer />
    </div>
  );
};

export default ProfileView;