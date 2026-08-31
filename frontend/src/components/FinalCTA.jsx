import React from "react";
import { Truck, RotateCcw, ShieldCheck } from "lucide-react";
import { PRODUCT } from "../mock";
import { useStore } from "../context/StoreContext";
import { formatINR, Stars, useReveal } from "../lib/ui";
import { Button } from "./ui/button";

export default function FinalCTA() {
  const ref = useReveal();
  const { addToCart, buyNow, beginCheckout, selectedVariant } = useStore();
  const savings = PRODUCT.mrp - PRODUCT.price;
  const pct = Math.round((savings / PRODUCT.mrp) * 100);

  return (
    <section ref={ref} className="reveal bg-[#F4F4F2] py-16">
      <div className="mx-auto max-w-3xl px-4 text-center">
        <h2 className="font-lora text-3xl text-[#102442] md:text-4xl">Keep your ears open.</h2>
        <p className="mx-auto mt-4 max-w-xl text-[16px] leading-relaxed text-slate-600">
          Comfortable open-ear audio, clearer everyday awareness and AI tools that help you understand and remember more.
        </p>

        <div className="mt-6 flex flex-wrap items-center justify-center gap-3">
          <Stars value={PRODUCT.rating} size={18} />
          <span className="text-sm font-medium text-slate-600">{PRODUCT.rating} · {PRODUCT.reviewCount} reviews</span>
        </div>

        <div className="mt-4 flex flex-wrap items-end justify-center gap-3">
          <span className="text-3xl font-bold text-[#102442]">{formatINR(PRODUCT.price)}</span>
          <span className="text-lg text-slate-400 line-through">{formatINR(PRODUCT.mrp)}</span>
          <span className="rounded-md bg-[#54C1C8] px-2 py-1 text-sm font-bold text-[#102442]">{pct}% off</span>
        </div>
        <div className="mt-1 text-sm text-slate-500">Colour: {selectedVariant.name} · {PRODUCT.taxesLine}</div>

        <div className="mx-auto mt-6 flex max-w-md flex-col gap-3">
          <Button
            onClick={() => addToCart(1)}
            disabled={!selectedVariant.available}
            className="h-14 w-full rounded-xl bg-[#102442] text-base font-bold text-white hover:bg-[#0b1a30]"
          >
            Buy SafeBuds — {formatINR(PRODUCT.price)}
          </Button>
          <Button
            onClick={() => { buyNow(); beginCheckout(); }}
            disabled={!selectedVariant.available}
            variant="outline"
            className="h-12 w-full rounded-xl border-2 border-[#39869B] text-base font-semibold text-[#39869B] hover:bg-[#39869B] hover:text-white"
          >
            Buy Now with UPI / Card
          </Button>
        </div>

        <div className="mt-6 flex flex-wrap items-center justify-center gap-x-6 gap-y-2 text-sm text-slate-600">
          <span className="flex items-center gap-1.5"><Truck size={16} className="text-[#39869B]" /> Free shipping</span>
          <span className="flex items-center gap-1.5"><RotateCcw size={16} className="text-[#39869B]" /> 7-day returns</span>
          <span className="flex items-center gap-1.5"><ShieldCheck size={16} className="text-[#39869B]" /> 1-year warranty</span>
        </div>
      </div>
    </section>
  );
}
