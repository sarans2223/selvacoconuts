import Image from "next/image";
import { PlaceHolderImages } from "@/lib/placeholder-images";
import { Button } from "../ui/button";
import Link from "next/link";

export function AboutSection() {
    const aboutImage = PlaceHolderImages.find(p => p.id === 'about-factory');

  return (
    <section id="about" className="py-16 sm:py-24 bg-card">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div className="order-2 md:order-1">
            <h2 className="font-headline text-3xl sm:text-4xl md:text-5xl font-bold">
              Pioneering Sustainable Coir Production
            </h2>
            <p className="mt-6 text-lg text-muted-foreground">
              At Selva Adhitya Coirs, we've perfected the art and science of coconut husk processing. Our state-of-the-art facilities employ a meticulous separation process, transforming husks into premium, eco-friendly raw materials for a multitude of global markets.
            </p>
            <p className="mt-4 text-lg text-muted-foreground">
              Our mission extends beyond commerce; we are dedicated to promoting sustainable agriculture, reducing waste, and empowering rural communities through employment, ensuring every product we export carries a promise of quality and environmental stewardship.
            </p>
            <Button asChild size="lg" className="mt-8">
                <Link href="/about">Learn More About Us</Link>
            </Button>
          </div>
          <div className="order-1 md:order-2">
            {aboutImage && (
              <div className="aspect-video relative rounded-lg overflow-hidden shadow-xl">
                 <Image
                    src={aboutImage.imageUrl}
                    alt={aboutImage.description}
                    fill
                    className="object-cover"
                    data-ai-hint={aboutImage.imageHint}
                />
              </div>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}
