import ArticleCard from '@/components/gardening/ArticleCard';
import { mockArticles } from '@/data/mock';
import type { Article } from '@/types';

export default function GardeningTipsPage() {
  return (
    <div className="container mx-auto py-8 px-4 sm:px-6 lg:px-8">
      <header className="mb-8 text-center">
        <h1 className="text-4xl font-headline font-bold text-primary tracking-tight sm:text-5xl">Gardening Tips & Tricks</h1>
        <p className="mt-4 text-lg text-foreground/80">
          Grow your gardening knowledge with our expert advice and inspiration.
        </p>
      </header>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {mockArticles.map((article: Article) => (
          <ArticleCard key={article.slug} article={article} />
        ))}
      </div>
    </div>
  );
}
