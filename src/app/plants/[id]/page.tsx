import Image from 'next/image';
import { mockProducts } from '@/data/mock';
import AddToCartButton from '@/components/cart/AddToCartButton';
import { Badge } from '@/components/ui/badge';
import { Separator } from '@/components/ui/separator';
import { Alert, AlertDescription, AlertTitle } from "@/components/ui/alert";
import { Leaf, Droplets, Sun } from 'lucide-react';

export async function generateStaticParams() {
  return mockProducts.map((product) => ({
    id: product.id,
  }));
}

export default function ProductDetailPage({ params }: { params: { id: string } }) {
  const product = mockProducts.find((p) => p.id === params.id);

  if (!product) {
    return <div className="container mx-auto py-8 text-center">Product not found.</div>;
  }

  return (
    <div className="container mx-auto py-8 px-4 sm:px-6 lg:px-8">
      <div className="grid md:grid-cols-2 gap-8 lg:gap-12">
        <div className="rounded-lg overflow-hidden shadow-lg">
          <Image
            src={product.imageUrl}
            alt={product.name}
            width={800}
            height={600}
            className="w-full h-auto object-cover"
            data-ai-hint={product.dataAiHint}
          />
        </div>
        <div className="space-y-6">
          <h1 className="text-4xl font-headline font-bold text-primary">{product.name}</h1>
          <Badge variant="secondary" className="text-sm">{product.category}</Badge>
          <p className="text-2xl font-semibold text-foreground">${product.price.toFixed(2)}</p>
          
          <Separator />
          
          <p className="text-foreground/80 leading-relaxed">{product.description}</p>
          
          {product.sizeOptions && product.sizeOptions.length > 0 && (
            <div>
              <h3 className="text-md font-semibold mb-2">Available Sizes:</h3>
              <div className="flex gap-2">
                {product.sizeOptions.map(size => (
                  <Badge key={size} variant="outline">{size}</Badge>
                ))}
              </div>
            </div>
          )}

          <AddToCartButton product={product} className="w-full md:w-auto bg-accent hover:bg-accent/90 text-accent-foreground">
            Add to Cart
          </AddToCartButton>
        </div>
      </div>

      {product.careInstructions && (
        <div className="mt-12">
          <Separator className="my-8"/>
          <h2 className="text-2xl font-headline mb-4">Care Instructions</h2>
          <Alert>
            <Leaf className="h-5 w-5" />
            <AlertTitle className="font-headline">Plant Care Tips</AlertTitle>
            <AlertDescription className="space-y-2">
              <p>{product.careInstructions}</p>
              <div className="flex items-center gap-4 mt-2">
                {product.careInstructions.toLowerCase().includes("light") && 
                  <span className="flex items-center text-sm"><Sun className="mr-1 h-4 w-4 text-yellow-500" /> Light conditions mentioned</span>}
                {product.careInstructions.toLowerCase().includes("water") && 
                  <span className="flex items-center text-sm"><Droplets className="mr-1 h-4 w-4 text-blue-500" /> Watering needs mentioned</span>}
              </div>
            </AlertDescription>
          </Alert>
        </div>
      )}
    </div>
  );
}
