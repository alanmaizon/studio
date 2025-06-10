import ProductCard from '@/components/products/ProductCard';
import ProductFilters from '@/components/products/ProductFilters';
import { mockProducts } from '@/data/mock';
import type { Product } from '@/types';
import { Separator } from '@/components/ui/separator';

export default function PlantsPage({
  searchParams,
}: {
  searchParams?: { category?: string };
}) {
  const selectedCategory = searchParams?.category;

  const filteredProducts = selectedCategory
    ? mockProducts.filter(p => p.category.toLowerCase().replace(/\s+/g, '-') === selectedCategory)
    : mockProducts;
  
  const categories = Array.from(new Set(mockProducts.map(p => p.category)));

  return (
    <div className="container mx-auto py-8 px-4 sm:px-6 lg:px-8">
      <header className="mb-8 text-center">
        <h1 className="text-4xl font-headline font-bold text-primary tracking-tight sm:text-5xl">Our Plant Collection</h1>
        <p className="mt-4 text-lg text-foreground/80">
          Discover a wide variety of beautiful and healthy plants for your home and garden.
        </p>
      </header>
      
      <ProductFilters categories={categories} currentCategory={selectedCategory} />
      <Separator className="my-8" />

      {filteredProducts.length > 0 ? (
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {filteredProducts.map((product: Product) => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>
      ) : (
        <div className="text-center py-12">
          <p className="text-xl text-muted-foreground">No plants found for this category.</p>
        </div>
      )}
    </div>
  );
}
