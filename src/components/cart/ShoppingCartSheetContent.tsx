"use client";

import Image from 'next/image';
import { useCart } from '@/contexts/CartContext';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { ScrollArea } from '@/components/ui/scroll-area';
import { Separator } from '@/components/ui/separator';
import { Trash2, Minus, Plus } from 'lucide-react';
import Link from 'next/link';

export default function ShoppingCartSheetContent() {
  const { cartItems, removeFromCart, updateQuantity, totalPrice, clearCart } = useCart();

  if (cartItems.length === 0) {
    return (
      <div className="flex flex-col items-center justify-center h-full">
        <ShoppingCart className="h-16 w-16 text-muted-foreground mb-4" />
        <p className="text-muted-foreground text-lg">Your cart is empty.</p>
        <Button asChild variant="link" className="text-primary mt-2">
          <Link href="/plants">Start Shopping</Link>
        </Button>
      </div>
    );
  }

  return (
    <>
      <ScrollArea className="flex-grow my-4 pr-6">
        <div className="space-y-4">
          {cartItems.map((item) => (
            <div key={item.product.id} className="flex items-center space-x-4">
              <Image
                src={item.product.imageUrl}
                alt={item.product.name}
                width={80}
                height={80}
                className="rounded-md object-cover"
                data-ai-hint={item.product.dataAiHint}
              />
              <div className="flex-grow">
                <h3 className="font-medium">{item.product.name}</h3>
                <p className="text-sm text-muted-foreground">${item.product.price.toFixed(2)}</p>
                <div className="flex items-center space-x-2 mt-1">
                  <Button
                    variant="outline"
                    size="icon"
                    className="h-6 w-6"
                    onClick={() => updateQuantity(item.product.id, item.quantity - 1)}
                  >
                    <Minus className="h-3 w-3" />
                  </Button>
                  <Input
                    type="number"
                    value={item.quantity}
                    onChange={(e) => updateQuantity(item.product.id, parseInt(e.target.value) || 0)}
                    className="h-6 w-10 text-center px-1"
                  />
                  <Button
                    variant="outline"
                    size="icon"
                    className="h-6 w-6"
                    onClick={() => updateQuantity(item.product.id, item.quantity + 1)}
                  >
                    <Plus className="h-3 w-3" />
                  </Button>
                </div>
              </div>
              <Button variant="ghost" size="icon" onClick={() => removeFromCart(item.product.id)}>
                <Trash2 className="h-4 w-4 text-destructive" />
              </Button>
            </div>
          ))}
        </div>
      </ScrollArea>
      <Separator />
      <div className="py-4 space-y-2">
        <div className="flex justify-between font-semibold text-lg">
          <span>Subtotal</span>
          <span>${totalPrice.toFixed(2)}</span>
        </div>
        <p className="text-xs text-muted-foreground">Shipping and taxes calculated at checkout.</p>
      </div>
      <SheetFooter className="mt-auto pt-4 border-t">
        <div className="flex flex-col sm:flex-row sm:justify-between w-full gap-2">
           <Button variant="outline" onClick={clearCart} className="w-full sm:w-auto">
            Clear Cart
          </Button>
          <Button className="w-full sm:w-auto bg-accent hover:bg-accent/90 text-accent-foreground" disabled={cartItems.length === 0}>
            Checkout
          </Button>
        </div>
      </SheetFooter>
    </>
  );
}

// Dummy ShoppingCart component for empty cart state, actual one is in lucide-react
const ShoppingCart = ({ className }: { className?: string }) => (
  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className}>
    <circle cx="8" cy="21" r="1"></circle>
    <circle cx="19" cy="21" r="1"></circle>
    <path d="M2.05 2.05h2l2.66 12.42a2 2 0 0 0 2 1.58h9.78a2 2 0 0 0 1.95-1.57l1.65-7.43H5.12"></path>
  </svg>
);
