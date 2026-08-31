import React from "react";
import { Check, Truck, RotateCcw, ShieldCheck, Lock, Zap, MessageCircle } from "lucide-react";
import { PRODUCT, VARIANTS } from "../mock";
import { useStore } from "../context/StoreContext";
import { formatINR, Stars } from "../lib/ui";
import { Button } from "./ui/button";

export default function BuyBox() {
  const { selectedVariant, selectVariant, addToCart, buyNow, beginCheckout } = useStore();
  const savings = PRODUCT.mrp - PRODUCT.price;
  const pct = Math.round((savings / PRODUCT.mrp) * 100);

  const scrollToReviews = () => {
    document.getElementById("reviews")?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <div id="buybox" className="w-full">
      <span className="inline-block text-xs font-semibold tracking-[0.18em] text-[#39869B] uppercase">
        {PRODUCT.eyebrow}
      </span>

      <button onClick={scrollToReviews} className="mt-2 flex items-center gap-2 text-sm text-slate-600 hover:text-[#102442]">
        <Stars value={PRODUCT.rating} size={17} />
        <span className="font-semibold text-[#111827]">{PRODUCT.rating}</span>
        <span className="underline decoration-slate-300 underline-offset-2">
          based on {PRODUCT.reviewCount} customer reviews
        </span>
      </button>

      <h1 className="mt-3 text-2xl font-bold leading-tight text-[#102442] md:text-4xl">
        {PRODUCT.title}
      </h1>
      <p className="font-lora mt-3 text-xl leading-snug text-[#111827] md:text-2xl">
        {PRODUCT.headline1}<br />
        <span className="text-[#39869B]">{PRODUCT.headline2}</span>
      </p>
      <p className="mt-3 text-base leading-relaxed text-slate-600">{PRODUCT.supporting}</p>

      <ul className="mt-4 grid grid-cols-1 gap-2 sm:grid-cols-2">
        {PRODUCT.benefits.map((b) => (
          <li key={b} className="flex items-start gap-2 text-[15px] text-[#111827]">
            <Check size={18} className="mt-0.5 flex-shrink-0 text-[#54C1C8]" strokeWidth={3} />
            {b}
          </li>
        ))}
      </ul>

      {/* Pricing */}
      <div className="mt-5 rounded-xl border border-slate-200 bg-[#F4F4F2] p-4">
        <div className="flex flex-wrap items-end gap-3">
          <span className="text-3xl font-bold text-[#102442]">{formatINR(PRODUCT.price)}</span>
          <span className="text-lg text-slate-400 line-through">{formatINR(PRODUCT.mrp)}</span>
          <span className="rounded-md bg-[#54C1C8] px-2 py-1 text-sm font-bold text-[#102442]">
            Save {formatINR(savings)} ({pct}% off)
          </span>
        </div>
        <div className="mt-2 flex flex-wrap gap-x-4 gap-y-1 text-[13px] text-slate-600">
          <span>{PRODUCT.taxesLine}</span>
          <span className="flex items-center gap-1"><Zap size={13} className="text-[#39869B]" /> AI features included</span>
          <span>No subscription required</span>
        </div>
      </div>

      {/* Variant selector */}
      <div className="mt-5">
        <div className="mb-2 text-sm font-semibold text-[#111827]">
          Colour: <span className="font-normal text-slate-600">{selectedVariant.name}</span>
        </div>
        <div className="flex gap-3">
          {VARIANTS.map((v) => {
            const isSel = selectedVariant.id === v.id;
            return (
              <button
                key={v.id}
                onClick={() => selectVariant(v)}
                disabled={!v.available}
                aria-pressed={isSel}
                aria-label={v.available ? `Select ${v.name}` : `${v.name} sold out`}
                className={`flex min-h-[44px] items-center gap-2 rounded-xl border-2 px-4 py-2 text-sm font-medium transition-all ${
                  isSel ? "border-[#102442] bg-white" : "border-slate-200 bg-white"
                } ${!v.available ? "cursor-not-allowed opacity-60" : "hover:border-[#39869B]"}`}
              >
                <span className="h-5 w-5 rounded-full border border-slate-300" style={{ background: v.swatch }} />
                <span className={!v.available ? "line-through" : ""}>{v.name}</span>
                {!v.available && <span className="text-xs font-semibold text-red-500">Sold Out</span>}
              </button>
            );
          })}
        </div>
      </div>

      {/* CTAs */}
      <div className="mt-5 space-y-3">
        <Button
          onClick={() => addToCart(1)}
          disabled={!selectedVariant.available}
          className="h-14 w-full rounded-xl bg-[#102442] text-base font-bold text-white hover:bg-[#0b1a30] disabled:opacity-50"
        >
          Buy SafeBuds — {formatINR(PRODUCT.price)}
        </Button>
        <Button
          onClick={() => { buyNow(); beginCheckout(); }}
          disabled={!selectedVariant.available}
          variant="outline"
          className="h-12 w-full rounded-xl border-2 border-[#39869B] text-base font-semibold text-[#39869B] hover:bg-[#39869B] hover:text-white disabled:opacity-50"
        >
          Buy Now with UPI / Card
        </Button>
        <p className="text-center text-sm text-slate-600">Cash on Delivery available</p>
      </div>

      {/* Trust row */}
      <div className="mt-5 grid grid-cols-2 gap-3 sm:grid-cols-5">
        {[
          { icon: Truck, t: "Free shipping" },
          { icon: Zap, t: "Ships in 1\u20132 days" },
          { icon: RotateCcw, t: "7-day returns" },
          { icon: ShieldCheck, t: "1-year warranty" },
          { icon: Lock, t: "Secure checkout" },
        ].map(({ icon: Icon, t }) => (
          <div key={t} className="flex flex-col items-center gap-1 rounded-lg bg-[#F4F4F2] p-2 text-center">
            <Icon size={18} className="text-[#39869B]" />
            <span className="text-[11px] font-medium leading-tight text-slate-600">{t}</span>
          </div>
        ))}
      </div>

      <button onClick={scrollToReviews} className="mt-4 flex items-center gap-2 text-sm text-[#39869B] hover:underline">
        <MessageCircle size={16} /> Need help choosing? Chat with an NG EarSafe expert.
      </button>
    </div>
  );
}
