import Link from 'next/link';
import { Leaf } from 'lucide-react';

export default function Logo() {
  return (
    <Link href="/" className="flex items-center space-x-2 text-primary hover:text-primary/90 transition-colors">
      <Leaf className="h-8 w-8" />
      <span className="text-2xl font-headline font-bold">Bloomscape</span>
    </Link>
  );
}
