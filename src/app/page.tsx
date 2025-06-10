import Image from 'next/image';
import Link from 'next/link';
import { Button } from '@/components/ui/button';
import ProductCard from '@/components/products/ProductCard';
import ArticleCard from '@/components/gardening/ArticleCard';
import { mockProducts, mockArticles } from '@/data/mock';
import type { Product, Article } from '@/types';
import { ArrowRight, Leaf, Lightbulb, Bot } from 'lucide-react';
import { Separator } from '@/components/ui/separator';

export default function HomePage() {
  const featuredProducts = mockProducts.filter(p => p.featured).slice(0, 4);
  const recentArticles = mockArticles.slice(0, 3);

  return (
    <div className="flex flex-col">
      {/* Hero Section */}
      <section className="relative bg-gradient-to-r from-primary/10 to-green-50/10 py-20 md:py-32">
        <div className="absolute inset-0">
           <Image 
            src="https://res.cloudinary.com/dnkrfdjzl/image/upload/v1749588294/homes_qxaotd.png" 
            alt="Lush green plants background"
            layout="fill"
            objectFit="cover"
            className="opacity-20"
            data-ai-hint="green plants"
            priority
          />
        </div>
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
          <h1 className="text-5xl md:text-6xl font-headline font-bold text-primary tracking-tight">
            Welcome to Bloomscape
          </h1>
          <p className="mt-6 text-xl text-foreground/80 max-w-2xl mx-auto">
            Discover a curated selection of beautiful plants, gardening essentials, and expert advice to help your green oasis flourish.
          </p>
          <div className="mt-10 flex flex-col sm:flex-row justify-center items-center gap-4">
            <Button asChild size="lg" className="bg-primary hover:bg-primary/90 text-primary-foreground font-semibold shadow-lg">
              <Link href="/plants">Shop All Plants <ArrowRight className="ml-2 h-5 w-5" /></Link>
            </Button>
            <Button asChild variant="outline" size="lg" className="font-semibold shadow-lg border-primary text-primary hover:bg-primary/5 hover:text-primary">
              <Link href="/recommendations">Get Plant AI Advice <Bot className="ml-2 h-5 w-5" /></Link>
            </Button>
          </div>
        </div>
      </section>

      {/* Featured Products Section */}
      <section className="py-16">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-headline font-bold text-center text-primary mb-2">Featured Products</h2>
          <p className="text-center text-muted-foreground mb-10">Handpicked for their beauty and resilience.</p>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {featuredProducts.map((product: Product) => (
              <ProductCard key={product.id} product={product} />
            ))}
          </div>
          <div className="text-center mt-12">
            <Button asChild variant="outline" size="lg" className="border-primary text-primary hover:bg-primary/5 hover:text-primary">
              <Link href="/plants">View All Products</Link>
            </Button>
          </div>
        </div>
      </section>
      
      <Separator className="my-12 container mx-auto max-w-4xl" />

      {/* Gardening Tips Section */}
      <section className="py-16 bg-background">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-headline font-bold text-center text-primary mb-2">Gardening Wisdom</h2>
          <p className="text-center text-muted-foreground mb-10">Nurture your plants with our expert tips and guides.</p>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {recentArticles.map((article: Article) => (
              <ArticleCard key={article.slug} article={article} />
            ))}
          </div>
          <div className="text-center mt-12">
            <Button asChild size="lg" className="bg-accent hover:bg-accent/90 text-accent-foreground">
              <Link href="/gardening-tips">Explore More Tips <Lightbulb className="ml-2 h-5 w-5" /></Link>
            </Button>
          </div>
        </div>
      </section>

      {/* Call to Action - Plant Recommendations */}
      <section className="py-20 bg-primary/10">
         <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <Leaf className="h-12 w-12 text-primary mx-auto mb-4" />
            <h2 className="text-3xl font-headline font-bold text-primary mb-4">Not Sure Where to Start?</h2>
            <p className="text-lg text-foreground/80 max-w-xl mx-auto mb-8">
              Our AI-powered tool can help you find the perfect plants for your space and preferences.
            </p>
            <Button asChild size="lg" className="bg-primary hover:bg-primary/90 text-primary-foreground">
              <Link href="/recommendations">Get Personalized Recommendations</Link>
            </Button>
        </div>
      </section>
    </div>
  );
}
