import { BadgeCheck, Leaf, Truck, Users } from "lucide-react";
import { Card, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import type { LucideIcon } from "lucide-react";

type Feature = {
  icon: LucideIcon;
  title: string;
  description: string;
};

const features: Feature[] = [
  {
    icon: Leaf,
    title: "100% Biodegradable",
    description: "Our products are fully organic, enriching the soil as they decompose and promoting a circular economy.",
  },
  {
    icon: BadgeCheck,
    title: "Export-Grade Quality",
    description: "Subjected to rigorous quality control to meet and exceed international standards for all applications.",
  },
  {
    icon: Truck,
    title: "Reliable Bulk Supply",
    description: "With large-scale production capacity, we guarantee timely and consistent delivery for your business needs.",
  },
  {
    icon: Users,
    title: "Rural Employment",
    description: "We are proud to support local economies by providing stable employment and fostering community growth.",
  },
];

export function WhyChooseUsSection() {
  return (
    <section id="why-us" className="py-16 sm:py-24 bg-secondary">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto">
          <h2 className="font-headline text-3xl sm:text-4xl md:text-5xl font-bold">
            The Selva Adhitya Advantage
          </h2>
          <p className="mt-4 text-lg text-muted-foreground">
            Discover the core principles that make us a trusted partner for businesses worldwide.
          </p>
        </div>
        <div className="mt-12 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {features.map((feature, index) => (
            <Card key={index} className="text-center bg-card">
              <CardHeader>
                <div className="mx-auto bg-primary/10 text-primary p-3 rounded-full w-fit mb-4">
                    <feature.icon className="h-8 w-8" />
                </div>
                <CardTitle className="font-headline text-xl">{feature.title}</CardTitle>
                <CardDescription className="pt-2">{feature.description}</CardDescription>
              </CardHeader>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
