import HeroSection from "@/components/HeroSection";
import FeaturesSection from "@/components/FeaturesSection";
import CurriculumSection from "@/components/CurriculumSection";
import ToolsSection from "@/components/ToolsSection";
import PricingSection from "@/components/PricingSection";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen bg-background font-ghibli-body">
      {/* Hero Section - Floating Castle */}
      <HeroSection />
      
      {/* Features Section - Magic Orbs Garden */}
      <FeaturesSection />
      
      {/* Curriculum Section - Train Journey Map */}
      <CurriculumSection />
      
      {/* Tools Section - Magic Treasure Chest */}
      <ToolsSection />
      
      {/* Pricing Section - Three Destiny Doors */}
      <PricingSection />
      
      {/* Footer */}
      <Footer />
    </div>
  );
};

export default Index;