"use client";

import { Button } from "@/components/ui/button";
import { useCart } from "@/contexts/CartContext";
import type { Product } from "@/types";
import { ShoppingCart } from "lucide-react";

interface AddToCartButtonProps {
  product: Product;
  quantity?: number;
  className?: string;
  children?: React.ReactNode;
}

export default function AddToCartButton({ product, quantity = 1, className, children }: AddToCartButtonProps) {
  const { addToCart } = useCart();

  const handleAddToCart = () => {
    addToCart(product, quantity);
  };

  return (
    <Button onClick={handleAddToCart} className={className} variant="default" size="lg">
      <ShoppingCart className="mr-2 h-5 w-5" />
      {children || "Add to Cart"}
    </Button>
  );
}
