import Image from 'next/image';
import Link from 'next/link';
import type { Article } from '@/types';
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { ArrowRight } from 'lucide-react';

interface ArticleCardProps {
  article: Article;
}

export default function ArticleCard({ article }: ArticleCardProps) {
  return (
    <Card className="overflow-hidden shadow-lg hover:shadow-xl transition-shadow duration-300 flex flex-col h-full">
      <CardHeader className="p-0">
        <Link href={`/gardening-tips/${article.slug}`} className="block">
          <Image
            src={article.imageUrl}
            alt={article.title}
            width={600}
            height={350}
            className="w-full h-48 object-cover transition-transform duration-300 hover:scale-105"
            data-ai-hint={article.dataAiHint}
          />
        </Link>
      </CardHeader>
      <CardContent className="p-4 flex-grow">
        <Link href={`/gardening-tips/${article.slug}`}>
          <CardTitle className="text-xl font-headline mb-2 hover:text-primary transition-colors">{article.title}</CardTitle>
        </Link>
        <p className="text-sm text-muted-foreground mb-1">By {article.author} - {article.date}</p>
        <p className="text-sm text-foreground/80">{article.summary}</p>
      </CardContent>
      <CardFooter className="p-4 pt-0 mt-auto">
        <Button asChild variant="link" className="text-primary p-0 h-auto">
          <Link href={`/gardening-tips/${article.slug}`}>
            Read More <ArrowRight className="ml-2 h-4 w-4" />
          </Link>
        </Button>
      </CardFooter>
    </Card>
  );
}
