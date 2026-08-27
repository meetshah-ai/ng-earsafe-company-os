import React from "react";
import { Link } from "react-router-dom";
import { useCart } from "../context/CartContext";
import { Trash2, Plus, Minus, ShoppingBag, Zap } from "lucide-react";
import { Sheet, SheetContent, SheetHeader, SheetTitle } from "./ui/sheet";
import { Button } from "./ui/button";

const rupee = (n) => `₹${n.toLocaleString("en-IN")}`;

export default function CartDrawer() {
  const { items, open, setOpen, removeItem, updateQty, subtotal } = useCart();

  return (
    <Sheet open={open} onOpenChange={setOpen}>
      <SheetContent className="w-full sm:max-w-md flex flex-col p-0 bg-[#F4F1EA]">
        <SheetHeader className="px-5 py-4 border-b border-black/5">
          <SheetTitle className="font-display text-xl flex items-center gap-2">
            <ShoppingBag className="w-5 h-5" /> Your Cart
          </SheetTitle>
        </SheetHeader>

        {items.length === 0 ? (
          <div className="flex-1 flex flex-col items-center justify-center text-center px-8 gap-3">
            <div className="w-16 h-16 rounded-full bg-white flex items-center justify-center">
              <ShoppingBag className="w-7 h-7 text-gray-400" />
            </div>
            <p className="text-gray-500">Your cart is empty.</p>
            <Button onClick={() => setOpen(false)} className="mt-2 rounded-full bg-[#0E2233] hover:bg-[#1a3450]">
              Continue shopping
            </Button>
          </div>
        ) : (
          <>
            <div className="flex-1 overflow-y-auto px-5 py-4 space-y-4 no-scrollbar">
              {items.map((i) => (
                <div key={i.key} className="flex gap-3 bg-white rounded-xl p-3">
                  <div className="w-20 h-20 rounded-lg bg-[#f6f5f1] overflow-hidden flex-shrink-0">
                    <img src={i.image} alt={i.name} className="w-full h-full object-contain" />
                  </div>
                  <div className="flex-1 min-w-0">
                    <p className="text-sm font-semibold leading-snug line-clamp-2">{i.name}</p>
                    {i.variant && <p className="text-xs text-gray-500 mt-0.5">{i.variant}</p>}
                    <div className="flex items-center justify-between mt-2">
                      <div className="flex items-center border rounded-full">
                        <button className="p-1.5" onClick={() => updateQty(i.key, i.qty - 1)}><Minus className="w-3.5 h-3.5" /></button>
                        <span className="px-2 text-sm w-7 text-center">{i.qty}</span>
                        <button className="p-1.5" onClick={() => updateQty(i.key, i.qty + 1)}><Plus className="w-3.5 h-3.5" /></button>
                      </div>
                      <div className="flex items-center gap-3">
                        <span className="text-sm font-bold">{rupee(i.price * i.qty)}</span>
                        <button onClick={() => removeItem(i.key)} className="text-gray-400 hover:text-red-500"><Trash2 className="w-4 h-4" /></button>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
            <div className="border-t border-black/5 px-5 py-4 space-y-3 bg-[#F4F1EA]">
              <div className="flex items-center justify-between">
                <span className="text-gray-500">Subtotal</span>
                <span className="font-display text-xl">{rupee(subtotal)}</span>
              </div>
              <p className="text-xs text-gray-400">Taxes included. Shipping calculated at checkout.</p>
              <Button className="w-full h-12 rounded-full bg-[#0E2233] hover:bg-[#1a3450] text-white font-semibold text-base">
                <Zap className="w-4 h-4 mr-1 text-[#35B9CE] fill-[#35B9CE]" /> Checkout · {rupee(subtotal)}
              </Button>
              <button onClick={() => setOpen(false)} className="w-full text-sm text-gray-500 hover:text-[#0E2233]">Continue shopping</button>
            </div>
          </>
        )}
      </SheetContent>
    </Sheet>
  );
}
