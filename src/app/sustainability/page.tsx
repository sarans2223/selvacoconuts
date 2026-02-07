import { SustainabilitySection } from "@/components/sections/sustainability-section";
import { WhyChooseUsSection } from "@/components/sections/why-choose-us-section";
import type { Metadata } from "next";

export const metadata: Metadata = {
    title: "Sustainability | Selva AgriExports",
    description: "Discover our commitment to sustainability, from zero-waste manufacturing and water conservation to empowering local communities.",
};

export default function SustainabilityPage() {
  return (
    <div className="pt-20">
      <SustainabilitySection />
       <WhyChooseUsSection />
    </div>
  );
}
