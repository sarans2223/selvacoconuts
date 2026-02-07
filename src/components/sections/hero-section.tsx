import Image from "next/image";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { PlaceHolderImages } from "@/lib/placeholder-images";

export function HeroSection() {
  const heroImage = PlaceHolderImages.find(p => p.id === 'hero-plantation');

  return (
    <section className="relative h-[85dvh] min-h-[600px] w-full flex items-center justify-center text-white">
      {heroImage && (
        <Image
          src={heroImage.imageUrl}
          alt={heroImage.description}
          fill
          className="object-cover"
          priority
          data-ai-hint={heroImage.imageHint}
        />
      )}
      <div className="absolute inset-0 bg-black/50" />
      <div className="relative z-10 text-center px-4 max-w-4xl">
        <h1 className="font-headline text-4xl md:text-6xl lg:text-7xl font-bold leading-tight tracking-tight text-shadow">
          Sustainable Agri-Exports: Premium Thanga Naaru & Coir Solutions
        </h1>
        <p className="mt-4 text-lg md:text-xl max-w-2xl mx-auto text-shadow">
          Empowering a greener planet with 100% natural, biodegradable coir products straight from the source.
        </p>
        <div className="mt-8 flex justify-center">
          <Button size="lg" asChild>
            <Link href="/#contact">Request a Quote</Link>
          </Button>
        </div>
      </div>
    </section>
  );
}
