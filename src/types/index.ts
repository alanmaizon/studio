export interface Product {
  id: string;
  name: string;
  price: number;
  description: string;
  category: string;
  imageUrl: string;
  careInstructions?: string;
  sizeOptions?: string[];
  featured?: boolean;
  dataAiHint?: string;
}

export interface Article {
  slug: string;
  title: string;
  summary: string;
  content: string;
  imageUrl: string;
  author: string;
  date: string;
  dataAiHint?: string;
}

export interface CartItem {
  product: Product;
  quantity: number;
}
