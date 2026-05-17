import HeroSection from "@/components/sections/HeroSection";
import StatsSection from "@/components/sections/StatsSection";
import ProductsSection from "@/components/sections/ProductsSection";
import ProductOrbitSection from "@/components/sections/ProductOrbitSection";
import HCPSection from "@/components/sections/HCPSection";
import CoreValuesSection from "@/components/sections/CoreValuesSection";
import GallerySection from "@/components/sections/GallerySection";
import PartnersSection from "@/components/sections/PartnersSection";
import NewsSection from "@/components/sections/NewsSection";
import CTASection from "@/components/sections/CTASection";

export default function HomePage() {
  return (
    <>
      <HeroSection />
      <StatsSection />
      <ProductsSection />
      <ProductOrbitSection />
      <HCPSection />
      <CoreValuesSection />
      <GallerySection />
      <PartnersSection />
      <NewsSection />
      <CTASection />
    </>
  );
}
