import { AboutSection } from "@/components/sections/about-section";
import { ContactSection } from "@/components/sections/contact-section";
import { HeroSection } from "@/components/sections/hero-section";
import { ProductsSection } from "@/components/sections/products-section";
import { SustainabilitySection } from "@/components/sections/sustainability-section";
import { WhyChooseUsSection } from "@/components/sections/why-choose-us-section";

export default function Home() {
  return (
    <>
      <HeroSection />
      <ProductsSection />
      <AboutSection />
      <WhyChooseUsSection />
      <SustainabilitySection />
      <ContactSection />
    </>
  );
}
