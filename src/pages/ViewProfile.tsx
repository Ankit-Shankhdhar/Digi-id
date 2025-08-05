    import { ProfileHeader } from "../components/ProfileHeader";
import { CardGallery } from "../components/CardGallery";

const ViewProfile = () => {
  return (
    <div className="min-h-screen bg-background">
      <div className="container mx-auto px-4 py-8 space-y-8">
        <ProfileHeader />
        
        <div className="space-y-6">
          <div className="text-center">
            <h2 className="text-2xl font-bold text-foreground mb-2">
              My Card Collection
            </h2>
            <p className="text-muted-foreground">
              Browse through your creative card designs and masterpieces
            </p>
          </div>
          
          <CardGallery />
        </div>
      </div>
    </div>
  );
};

export default ViewProfile;