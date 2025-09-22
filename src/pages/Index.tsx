import Header from "@/components/Header";
import CategoryCircles from "@/components/CategoryCircles";
import HeroBanner from "@/components/HeroBanner";
import HeroSection from "@/components/HeroSection";
import CategoryCards from "@/components/CategoryCards";
import BestOfPlums from "@/components/BestOfPlums";
import ProductGrid from "@/components/ProductGrid";
import SpotlightSection from "@/components/SpotlightSection";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      <CategoryCircles />
      <HeroBanner />
      <HeroSection />
      <CategoryCards />
      <BestOfPlums />
      <ProductGrid />
      <SpotlightSection />
      <Footer />
    </div>
  );
};

export default Index;
