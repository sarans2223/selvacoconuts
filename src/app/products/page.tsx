import { ProductsSection } from "@/components/sections/products-section";
import type { Metadata } from "next";

export const metadata: Metadata = {
    title: "Our Products | Selva AgriExports",
    description: "Explore our premium range of Coir Pith (Cocopeat) and Coir Fibre (Thanga Naaru) products, including blocks, grow bags, and bales.",
};

export default function ProductsPage() {
  return (
    <div className="pt-20">
      <ProductsSection />
    </div>
  );
}
