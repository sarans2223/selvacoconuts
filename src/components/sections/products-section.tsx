import Image from "next/image";
import { products, type Product } from "@/lib/products";
import { PlaceHolderImages } from "@/lib/placeholder-images";
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Badge } from "@/components/ui/badge";

const ProductCard = ({ product }: { product: Product }) => {
  const image = PlaceHolderImages.find(p => p.id === product.imageId);

  return (
    <Card className="overflow-hidden transition-all duration-300 hover:shadow-xl hover:-translate-y-1">
      <CardHeader className="p-0">
        <div className="relative aspect-[3/2] w-full">
          {image && (
            <Image
              src={image.imageUrl}
              alt={product.name}
              fill
              className="object-cover"
              data-ai-hint={image.imageHint}
            />
          )}
        </div>
        <div className="p-6">
          <CardTitle className="text-xl font-headline">{product.name}</CardTitle>
        </div>
      </CardHeader>
      <CardContent className="px-6 pb-6">
        <CardDescription>{product.description}</CardDescription>
      </CardContent>
    </Card>
  );
};

export function ProductsSection() {
  const coirPithProducts = products.filter(p => p.category === 'Coir Pith');
  const coirFibreProducts = products.filter(p => p.category === 'Coir Fibre');

  return (
    <section id="products" className="py-16 sm:py-24 bg-background">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto">
          <h2 className="font-headline text-3xl sm:text-4xl md:text-5xl font-bold">
            Our Premium Coir Products
          </h2>
          <p className="mt-4 text-lg text-muted-foreground">
            Explore our range of eco-friendly coir solutions, scientifically processed for superior quality and performance.
          </p>
        </div>

        <Tabs defaultValue="pith" className="mt-12 w-full">
          <TabsList className="grid w-full max-w-md mx-auto grid-cols-2">
            <TabsTrigger value="pith">Coir Pith (Cocopeat)</TabsTrigger>
            <TabsTrigger value="fibre">Coir Fibre (Thanga Naaru)</TabsTrigger>
          </TabsList>
          <TabsContent value="pith" className="mt-8">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-8">
              {coirPithProducts.map(product => (
                <ProductCard key={product.id} product={product} />
              ))}
            </div>
          </TabsContent>
          <TabsContent value="fibre" className="mt-8">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-8">
              {coirFibreProducts.map(product => (
                <ProductCard key={product.id} product={product} />
              ))}
            </div>
          </TabsContent>
        </Tabs>
      </div>
    </section>
  );
}
