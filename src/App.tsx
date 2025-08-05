import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Index from "./pages/Index";
import Auth from "./pages/Auth";
import StudentId from "./pages/StudentId";
import ProfessionalId from "./pages/ProfessionalId";
import BuyerProfile from "./pages/BuyerProfile";
import SellerProfile from "./pages/SellerProfile";
import BioData from "./pages/BioData";
import ProfileView from "./pages/ProfileView";
import About from "./pages/About";
import NotFound from "./pages/NotFound";
import ViewProfile from "./pages/ViewProfile";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Index />} />
          <Route path="/auth" element={<Auth />} />
          <Route path="/student-id" element={<StudentId />} />
          <Route path="/professional-id" element={<ProfessionalId />} />
          <Route path="/buyer-profile" element={<BuyerProfile />} />
          <Route path="/seller-profile" element={<SellerProfile />} />
          <Route path="/bio-data" element={<BioData />} />
          <Route path="/about" element={<About />} />
          <Route path="/view-profile" element={<ViewProfile />} />
          <Route path="/profile/:cardType/:cardId" element={<ProfileView />} />
          {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;