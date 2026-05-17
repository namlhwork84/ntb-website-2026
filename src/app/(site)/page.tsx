import HeroSection from "@/components/sections/HeroSection";
import StatsSection from "@/components/sections/StatsSection";
import ProductsSection from "@/components/sections/ProductsSection";
import HCPSection from "@/components/sections/HCPSection";
import GallerySection from "@/components/sections/GallerySection";
import WhySection from "@/components/sections/WhySection";
import NewsSection from "@/components/sections/NewsSection";
import CTASection from "@/components/sections/CTASection";

export default function HomePage() {
  return (
    <>
      <HeroSection />
      <StatsSection />
      <ProductsSection />
      <HCPSection />
      <GallerySection />
      <WhySection />
      <NewsSection />
      <CTASection />
    </>
  );
}
