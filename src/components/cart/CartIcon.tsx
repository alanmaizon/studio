"use client";

import { ShoppingCart } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Sheet, SheetTrigger, SheetContent, SheetHeader, SheetTitle, SheetFooter } from '@/components/ui/sheet';
import { useCart } from '@/contexts/CartContext';
import ShoppingCartSheetContent from './ShoppingCartSheetContent';

export default function CartIcon() {
  const { totalItems } = useCart();

  return (
    <Sheet>
      <SheetTrigger asChild>
        <Button variant="ghost" size="icon" className="relative">
          <ShoppingCart className="h-6 w-6" />
          {totalItems > 0 && (
            <span className="absolute -top-1 -right-1 flex h-4 w-4 items-center justify-center rounded-full bg-primary text-xs text-primary-foreground">
              {totalItems}
            </span>
          )}
          <span className="sr-only">Open cart</span>
        </Button>
      </SheetTrigger>
      <SheetContent className="w-[400px] sm:max-w-none sm:w-[500px] flex flex-col">
        <SheetHeader>
          <SheetTitle className="font-headline">Your Shopping Cart</SheetTitle>
        </SheetHeader>
        <ShoppingCartSheetContent />
      </SheetContent>
    </Sheet>
  );
}
