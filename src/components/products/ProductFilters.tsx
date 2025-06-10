'use client';

import { useRouter, useSearchParams } from 'next/navigation';
import { Button } from '@/components/ui/button';
import { cn } from '@/lib/utils';

interface ProductFiltersProps {
  categories: string[];
  currentCategory?: string;
}

export default function ProductFilters({ categories, currentCategory }: ProductFiltersProps) {
  const router = useRouter();
  const searchParams = useSearchParams();

  const handleCategoryChange = (category: string | null) => {
    const params = new URLSearchParams(searchParams.toString());
    if (category) {
      params.set('category', category.toLowerCase().replace(/\s+/g, '-'));
    } else {
      params.delete('category');
    }
    router.push(`/plants?${params.toString()}`);
  };

  return (
    <div className="flex flex-wrap justify-center gap-2 mb-8">
      <Button
        variant={!currentCategory ? 'default' : 'outline'}
        onClick={() => handleCategoryChange(null)}
        className={cn(!currentCategory && "bg-primary text-primary-foreground hover:bg-primary/90")}
      >
        All Plants
      </Button>
      {categories.map((category) => {
        const categorySlug = category.toLowerCase().replace(/\s+/g, '-');
        const isActive = currentCategory === categorySlug;
        return (
          <Button
            key={category}
            variant={isActive ? 'default' : 'outline'}
            onClick={() => handleCategoryChange(category)}
            className={cn(isActive && "bg-primary text-primary-foreground hover:bg-primary/90")}
          >
            {category}
          </Button>
        );
      })}
    </div>
  );
}
