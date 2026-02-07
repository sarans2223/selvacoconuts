import { AboutSection } from "@/components/sections/about-section";
import { WhyChooseUsSection } from "@/components/sections/why-choose-us-section";
import type { Metadata } from "next";

export const metadata: Metadata = {
    title: "About Us | Selva AgriExports",
    description: "Learn about Selva Adhitya Coirs and Pith Blocks, our scientific separation process, and our mission to provide eco-friendly raw materials to global markets.",
};


export default function AboutPage() {
  return (
    <div className="pt-20">
      <AboutSection />
      <WhyChooseUsSection />
    </div>
  );
}
