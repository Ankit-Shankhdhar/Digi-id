import { useEffect, useState } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import QRCode from "qrcode";
import { Download, RotateCcw } from "lucide-react";

interface GeneratedCardProps {
  cardType: "buyer" | "seller" | "student" | "professional" | "bio";
  data: any;
  onCreateAnother: () => void;
}

const GeneratedCard = ({ cardType, data, onCreateAnother }: GeneratedCardProps) => {
  const [qrCodeUrl, setQrCodeUrl] = useState<string>("");
  const [cardId] = useState(() => Math.random().toString(36).substr(2, 9));

  useEffect(() => {
    const generateQRCode = async () => {
      try {
        const profileUrl = `${window.location.origin}/profile/${cardType}/${cardId}`;
        const qrDataUrl = await QRCode.toDataURL(profileUrl, {
          width: 200,
          margin: 2,
          color: {
            dark: '#000000',
            light: '#FFFFFF'
          }
        });
        setQrCodeUrl(qrDataUrl);
        
        // Store profile data in localStorage for now (in real app, this would be in a database)
        localStorage.setItem(`profile_${cardType}_${cardId}`, JSON.stringify(data));
      } catch (error) {
        console.error('Error generating QR code:', error);
      }
    };

    generateQRCode();
  }, [cardType, cardId, data]);

  const downloadCard = () => {
    const canvas = document.createElement('canvas');
    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    // Set canvas size
    canvas.width = 800;
    canvas.height = 500;

    // Fill background
    ctx.fillStyle = '#ffffff';
    ctx.fillRect(0, 0, canvas.width, canvas.height);

    // Draw header
    ctx.fillStyle = '#4285f4';
    ctx.fillRect(0, 0, canvas.width, 120);

    // Header text
    ctx.fillStyle = '#ffffff';
    ctx.font = 'bold 32px Arial';
    ctx.textAlign = 'center';
    const name = data.fullName || data.ownerName || data.studentName || data.name || 'USER';
    ctx.fillText(name.toUpperCase(), canvas.width / 2, 50);
    
    ctx.font = '18px Arial';
    const cardTypeText = cardType.charAt(0).toUpperCase() + cardType.slice(1) + ' Profile';
    ctx.fillText(cardTypeText, canvas.width / 2, 85);

    // Draw content sections
    ctx.fillStyle = '#000000';
    ctx.font = 'bold 20px Arial';
    ctx.textAlign = 'left';
    ctx.fillText('Contact Information', 50, 180);

    ctx.font = '16px Arial';
    let yPos = 210;
    const contactInfo = getContactInfo();
    contactInfo.forEach(info => {
      ctx.fillText(info, 50, yPos);
      yPos += 25;
    });

    // Draw QR code
    if (qrCodeUrl) {
      const img = new Image();
      img.onload = () => {
        ctx.drawImage(img, canvas.width - 250, 180, 180, 180);
        
        // Download
        const link = document.createElement('a');
        link.download = `${cardType}-card-${name.replace(/\s+/g, '-').toLowerCase()}.png`;
        link.href = canvas.toDataURL();
        link.click();
      };
      img.src = qrCodeUrl;
    }
  };

  const getContactInfo = () => {
    const info = [];
    
    if (data.emailAddress || data.email) {
      info.push(`Email: ${data.emailAddress || data.email}`);
    }
    if (data.phoneNumber || data.mobileNumber || data.phone) {
      info.push(`Phone: ${data.phoneNumber || data.mobileNumber || data.phone}`);
    }
    if (data.address || data.businessAddress) {
      info.push(`Address: ${data.address || data.businessAddress}`);
    }
    if (data.businessName) {
      info.push(`Business: ${data.businessName}`);
    }
    if (data.course) {
      info.push(`Course: ${data.course}`);
    }
    if (data.rollNumber) {
      info.push(`Roll No: ${data.rollNumber}`);
    }
    if (data.company) {
      info.push(`Company: ${data.company}`);
    }
    if (data.designation) {
      info.push(`Designation: ${data.designation}`);
    }
    
    return info.slice(0, 6); // Limit to 6 lines
  };

  const getProductCodes = () => {
    if (data.productCodes && data.productCodes.length > 0) {
      return data.productCodes.filter((code: string) => code.trim() !== '');
    }
    if (data.productCodePermits && data.productCodePermits.length > 0) {
      return data.productCodePermits.filter((code: string) => code.trim() !== '');
    }
    return [];
  };

  const renderCardContent = () => {
    const name = data.fullName || data.ownerName || data.studentName || data.name || 'USER';
    const cardTypeText = cardType.charAt(0).toUpperCase() + cardType.slice(1) + ' Profile';
    const productCodes = getProductCodes();

    return (
      <div className="bg-white rounded-lg shadow-lg overflow-hidden max-w-3xl mx-auto">
        {/* Header with logos/photos */}
        <div className="bg-primary text-white p-6 text-center relative">
          {/* Individual photo / Student photo */}
          {(data.individualPhotoPreview || data.studentPhotoPreview) && (
            <div className="absolute left-6 top-1/2 transform -translate-y-1/2">
              <img 
                src={data.individualPhotoPreview || data.studentPhotoPreview} 
                alt="Profile" 
                className="w-16 h-16 rounded-full object-cover border-2 border-white"
              />
            </div>
          )}
          
          {/* Company logo / School logo */}
          {(data.companyLogoPreview || data.schoolLogoPreview) && (
            <div className="absolute right-6 top-1/2 transform -translate-y-1/2">
              <img 
                src={data.companyLogoPreview || data.schoolLogoPreview} 
                alt="Logo" 
                className="w-16 h-16 rounded object-cover bg-white p-1"
              />
            </div>
          )}
          
          <h2 className="text-2xl font-bold">{name.toUpperCase()}</h2>
          <p className="text-primary-foreground/90">{cardTypeText}</p>
        </div>

        {/* Content */}
        <div className="p-6 grid md:grid-cols-2 gap-6">
          {/* Contact Information */}
          <div>
            <h3 className="font-bold text-lg mb-4">Contact Information</h3>
            <div className="space-y-2 text-sm">
              {getContactInfo().map((info, index) => (
                <p key={index}>{info}</p>
              ))}
            </div>
          </div>

          {/* QR Code and Product Codes */}
          <div className="text-center">
            {productCodes.length > 0 && (
              <div className="mb-4">
                <h3 className="font-bold text-lg mb-2">
                  {cardType === 'buyer' ? 'Registered Product Codes' : 'Product Code Permits'}
                </h3>
                <ul className="text-sm space-y-1">
                  {productCodes.map((code: string, index: number) => (
                    <li key={index} className="text-primary">• {code}</li>
                  ))}
                </ul>
              </div>
            )}
            
            <div>
              <p className="text-sm font-medium mb-2">Scan for Contact</p>
              {qrCodeUrl && (
                <img 
                  src={qrCodeUrl} 
                  alt="QR Code" 
                  className="mx-auto border rounded"
                  width={150}
                  height={150}
                />
              )}
            </div>
          </div>
        </div>
      </div>
    );
  };

  return (
    <div className="min-h-screen bg-background flex items-center justify-center p-4">
      <div className="w-full max-w-4xl">
        <h1 className="text-3xl font-bold text-center mb-8">Generated {cardType.charAt(0).toUpperCase() + cardType.slice(1)} Card</h1>
        
        {renderCardContent()}

        {/* Action Buttons */}
        <div className="flex gap-4 justify-center mt-8">
          <Button onClick={onCreateAnother} variant="outline" className="flex items-center gap-2">
            <RotateCcw className="h-4 w-4" />
            Create Another Card
          </Button>
          <Button onClick={downloadCard} className="flex items-center gap-2">
            <Download className="h-4 w-4" />
            Download Card (PNG)
          </Button>
        </div>
      </div>
    </div>
  );
};

export default GeneratedCard;