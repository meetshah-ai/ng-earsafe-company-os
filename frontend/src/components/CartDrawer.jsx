import React from "react";
import { X, Plus, Minus, ShoppingBag, Lock } from "lucide-react";
import { useStore } from "../context/StoreContext";
import { formatINR } from "../lib/ui";
import { Sheet, SheetContent } from "./ui/sheet";
import { Button } from "./ui/button";
import { useToast } from "../hooks/use-toast";

export default function CartDrawer() {
  const { cart, cartOpen, setCartOpen, cartTotal, updateQty, beginCheckout } = useStore();
  const { toast } = useToast();

  const checkout = () => {
    beginCheckout();
    toast({
      title: "Checkout started",
      description: "This is a demo checkout. Real Gokwik/UPI checkout runs on the live store.",
    });
  };

  return (
    <Sheet open={cartOpen} onOpenChange={setCartOpen}>
      <SheetContent className="flex w-full flex-col p-0 sm:max-w-md">
        <div className="flex items-center justify-between border-b border-slate-200 p-4">
          <div className="flex items-center gap-2 text-lg font-bold text-[#102442]">
            <ShoppingBag size={20} /> Your cart
          </div>
          <button onClick={() => setCartOpen(false)} aria-label="Close cart" className="rounded-full p-2 hover:bg-slate-100">
            <X size={20} />
          </button>
        </div>

        <div className="flex-1 overflow-y-auto p-4">
          {cart.length === 0 ? (
            <div className="flex h-full flex-col items-center justify-center text-center text-slate-500">
              <ShoppingBag size={40} className="mb-3 text-slate-300" />
              Your cart is empty.
            </div>
          ) : (
            <div className="space-y-4">
              {cart.map((item) => (
                <div key={item.variantId} className="flex gap-3 rounded-xl border border-slate-200 p-3">
                  <img src={item.image} alt={item.name} width={64} height={64} className="h-16 w-16 rounded-lg object-cover" />
                  <div className="flex-1">
                    <div className="text-sm font-semibold text-[#102442]">{item.name}</div>
                    <div className="text-[13px] text-slate-500">Colour: {item.variantName}</div>
                    <div className="mt-2 flex items-center justify-between">
                      <div className="flex items-center gap-2">
                        <button onClick={() => updateQty(item.variantId, item.qty - 1)} aria-label="Decrease quantity" className="flex h-8 w-8 items-center justify-center rounded-md border border-slate-200 hover:bg-slate-50">
                          <Minus size={14} />
                        </button>
                        <span className="w-6 text-center text-sm font-medium">{item.qty}</span>
                        <button onClick={() => updateQty(item.variantId, item.qty + 1)} aria-label="Increase quantity" className="flex h-8 w-8 items-center justify-center rounded-md border border-slate-200 hover:bg-slate-50">
                          <Plus size={14} />
                        </button>
                      </div>
                      <div className="font-semibold text-[#102442]">{formatINR(item.price * item.qty)}</div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          )}
        </div>

        {cart.length > 0 && (
          <div className="border-t border-slate-200 p-4">
            <div className="mb-3 flex items-center justify-between text-base">
              <span className="text-slate-600">Subtotal</span>
              <span className="font-bold text-[#102442]">{formatINR(cartTotal)}</span>
            </div>
            <p className="mb-3 text-[13px] text-slate-500">Taxes included · Shipping free across India</p>
            <Button onClick={checkout} className="h-12 w-full rounded-xl bg-[#102442] text-base font-bold text-white hover:bg-[#0b1a30]">
              <Lock size={16} className="mr-2" /> Checkout — {formatINR(cartTotal)}
            </Button>
          </div>
        )}
      </SheetContent>
    </Sheet>
  );
}
