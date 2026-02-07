import { ContactSection } from "@/components/sections/contact-section";
import type { Metadata } from "next";

export const metadata: Metadata = {
    title: "Contact Us | Selva AgriExports",
    description: "Get in touch with us for international export inquiries or use our intelligent tool to request a quote for our premium coir products.",
};


export default function ContactPage() {
  return (
    <div className="pt-20">
      <ContactSection />
    </div>
  );
}
