import React from 'react';
import { Sheet, SheetContent, SheetHeader, SheetTitle } from '../ui/sheet';
import { Minus, Plus, Trash2, ShoppingBag, Truck, ShieldCheck, ArrowRight } from 'lucide-react';

const inr = (n) => n.toLocaleString('en-IN');
const FREE_SHIP_THRESHOLD = 0; // free shipping always in this demo

const CartDrawer = ({ open, onOpenChange, items, onQty, onRemove, currency = '\u20b9' }) => {
  const subtotal = items.reduce((s, it) => s + it.price * it.qty, 0);
  const mrpTotal = items.reduce((s, it) => s + it.mrp * it.qty, 0);
  const saved = mrpTotal - subtotal;
  const count = items.reduce((s, it) => s + it.qty, 0);

  return (
    <Sheet open={open} onOpenChange={onOpenChange}>
      <SheetContent className="w-full sm:max-w-md p-0 flex flex-col bg-ng-cream border-l border-ng-sand">
        <SheetHeader className="px-5 py-4 border-b border-ng-sand bg-white">
          <SheetTitle className="font-display font-extrabold text-ng-navy uppercase tracking-tight flex items-center gap-2">
            <ShoppingBag size={20} /> Your Cart {count > 0 && <span className="text-ng-muted font-sans font-medium text-sm">({count})</span>}
          </SheetTitle>
        </SheetHeader>

        {items.length === 0 ? (
          <div className="flex-1 flex flex-col items-center justify-center text-center px-8">
            <div className="w-16 h-16 rounded-full bg-white border border-ng-sand flex items-center justify-center text-ng-muted mb-4"><ShoppingBag size={26} /></div>
            <p className="font-display font-bold text-ng-navy text-lg uppercase">Your cart is empty</p>
            <p className="text-sm text-ng-muted mt-1">Add the NG Root Revive to get started.</p>
            <button onClick={() => onOpenChange(false)} className="mt-5 h-11 px-6 rounded-full bg-ng-navy text-white font-semibold text-sm hover:bg-ng-navy-dark transition-colors">Continue shopping</button>
          </div>
        ) : (
          <>
            <div className="flex-1 overflow-y-auto px-5 py-4 space-y-4">
              {items.map((it) => (
                <div key={it.key} className="flex gap-3 bg-white rounded-2xl border border-ng-sand p-3">
                  <img src={it.image} alt={it.name} className="w-20 h-20 rounded-xl object-contain bg-ng-cream border border-ng-sand shrink-0" />
                  <div className="flex-1 min-w-0">
                    <p className="font-display font-bold text-ng-navy text-sm leading-tight">{it.name}</p>
                    {it.color && <p className="text-xs text-ng-muted mt-0.5">Colour: {it.color}</p>}
                    <div className="mt-1 flex items-center gap-2">
                      <span className="font-bold text-ng-navy text-sm">{currency}{inr(it.price)}</span>
                      <span className="text-xs text-ng-muted line-through">{currency}{inr(it.mrp)}</span>
                    </div>
                    <div className="mt-2 flex items-center justify-between">
                      <div className="flex items-center border border-ng-sand rounded-full overflow-hidden bg-ng-cream/50">
                        <button onClick={() => onQty(it.key, it.qty - 1)} className="px-2.5 h-8 text-ng-navy hover:bg-ng-cream" aria-label="Decrease"><Minus size={13} /></button>
                        <span className="w-7 text-center text-sm font-semibold text-ng-navy">{it.qty}</span>
                        <button onClick={() => onQty(it.key, it.qty + 1)} className="px-2.5 h-8 text-ng-navy hover:bg-ng-cream" aria-label="Increase"><Plus size={13} /></button>
                      </div>
                      <button onClick={() => onRemove(it.key)} className="text-ng-muted hover:text-red-500 transition-colors p-1.5" aria-label="Remove"><Trash2 size={16} /></button>
                    </div>
                  </div>
                </div>
              ))}

              <div className="flex items-center gap-2 bg-ng-cyan/15 text-ng-navy rounded-xl px-4 py-3 text-sm font-medium">
                <Truck size={16} className="text-ng-cyan" /> You've unlocked FREE prepaid shipping!
              </div>
            </div>

            <div className="border-t border-ng-sand bg-white px-5 py-4 space-y-3">
              <div className="flex justify-between text-sm text-ng-muted"><span>Subtotal</span><span className="text-ng-navy font-semibold">{currency}{inr(subtotal)}</span></div>
              {saved > 0 && <div className="flex justify-between text-sm"><span className="text-ng-muted">You save</span><span className="text-ng-cyan font-semibold">−{currency}{inr(saved)}</span></div>}
              <div className="flex justify-between text-sm text-ng-muted"><span>Shipping</span><span className="text-ng-navy font-semibold">FREE</span></div>
              <div className="flex justify-between items-end pt-2 border-t border-ng-sand">
                <span className="font-display font-bold text-ng-navy uppercase">Total</span>
                <span className="font-display font-extrabold text-2xl text-ng-navy">{currency}{inr(subtotal)}</span>
              </div>
              <button className="w-full h-12 rounded-full bg-ng-navy text-white font-semibold flex items-center justify-center gap-2 hover:bg-ng-navy-dark transition-colors">
                Checkout — {currency}{inr(subtotal)} <ArrowRight size={17} />
              </button>
              <p className="flex items-center justify-center gap-1.5 text-[11px] text-ng-muted"><ShieldCheck size={13} className="text-ng-cyan" /> Secure checkout · COD available · 7-day returns</p>
            </div>
          </>
        )}
      </SheetContent>
    </Sheet>
  );
};

export default CartDrawer;
