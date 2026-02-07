import Image from "next/image";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { PlaceHolderImages } from "@/lib/placeholder-images";
import { CheckCircle } from "lucide-react";

const commitments = [
    "Zero-waste manufacturing process",
    "Water recycling and conservation",
    "Empowering local communities",
    "Reforestation and biodiversity initiatives"
];

export function SustainabilitySection() {
    const sustainabilityImage = PlaceHolderImages.find(p => p.id === 'sustainability-factory');

  return (
    <section id="sustainability" className="py-16 sm:py-24 bg-background">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="pr-8">
                {sustainabilityImage && (
                <div className="aspect-video relative rounded-lg overflow-hidden shadow-xl">
                    <Image
                        src={sustainabilityImage.imageUrl}
                        alt={sustainabilityImage.description}
                        fill
                        className="object-cover"
                        data-ai-hint={sustainabilityImage.imageHint}
                    />
                </div>
                )}
            </div>
            <div>
                <h2 className="font-headline text-3xl sm:text-4xl md:text-5xl font-bold">
                    Committed to a Greener Planet
                </h2>
                <p className="mt-6 text-lg text-muted-foreground">
                    Sustainability is not just a buzzword for us; it's the foundation of our business. We are deeply committed to practices that protect our planet for future generations.
                </p>
                <ul className="mt-6 space-y-4">
                    {commitments.map((item, index) => (
                        <li key={index} className="flex items-center gap-3">
                            <CheckCircle className="h-6 w-6 text-primary" />
                            <span className="text-muted-foreground">{item}</span>
                        </li>
                    ))}
                </ul>
                <Button asChild size="lg" className="mt-8">
                    <Link href="/sustainability">Our Eco-Friendly Practices</Link>
                </Button>
            </div>
        </div>
      </div>
    </section>
  );
}
