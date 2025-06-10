import Image from 'next/image';
import { mockArticles } from '@/data/mock';
import { Separator } from '@/components/ui/separator';
import { Calendar, User } from 'lucide-react';

export async function generateStaticParams() {
  return mockArticles.map((article) => ({
    slug: article.slug,
  }));
}

export default function ArticlePage({ params }: { params: { slug: string } }) {
  const article = mockArticles.find((a) => a.slug === params.slug);

  if (!article) {
    return <div className="container mx-auto py-8 text-center">Article not found.</div>;
  }

  return (
    <div className="container mx-auto py-8 px-4 sm:px-6 lg:px-8 max-w-3xl">
      <article className="prose prose-lg dark:prose-invert prose-headings:font-headline prose-headings:text-primary prose-a:text-accent hover:prose-a:text-accent/80">
        <header className="mb-8">
          <h1 className="text-4xl font-headline font-bold !text-primary sm:text-5xl">{article.title}</h1>
          <div className="flex items-center space-x-4 text-sm text-muted-foreground mt-4">
            <span className="flex items-center"><User className="mr-1.5 h-4 w-4" /> {article.author}</span>
            <span className="flex items-center"><Calendar className="mr-1.5 h-4 w-4" /> {article.date}</span>
          </div>
        </header>
        
        <Image
          src={article.imageUrl}
          alt={article.title}
          width={800}
          height={450}
          className="w-full rounded-lg shadow-md mb-8"
          data-ai-hint={article.dataAiHint}
        />

        <div dangerouslySetInnerHTML={{ __html: article.content }} />
      </article>
      <Separator className="my-12" />
       <div className="text-center">
        <a href="/gardening-tips" className="text-accent hover:text-accent/80 font-medium">
          &larr; Back to all tips
        </a>
      </div>
    </div>
  );
}
