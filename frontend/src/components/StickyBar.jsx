import React, { useEffect, useState } from "react";
import { PRODUCT } from "../mock";
import { useStore } from "../context/StoreContext";
import { formatINR } from "../lib/ui";

export default function StickyBar() {
  const { addToCart, beginCheckout, buyNow, selectedVariant } = useStore();
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const hero = document.getElementById("buybox");
    if (!hero) return;
    const obs = new IntersectionObserver(
      ([entry]) => setVisible(!entry.isIntersecting && entry.boundingClientRect.top < 0),
      { threshold: 0 }
    );
    obs.observe(hero);
    return () => obs.disconnect();
  }, []);

  const onBuy = () => {
    buyNow();
    beginCheckout();
  };

  return (
    <div
      className={`fixed inset-x-0 bottom-0 z-40 border-t border-slate-200 bg-white/95 backdrop-blur transition-transform duration-300 md:hidden ${
        visible ? "translate-y-0" : "translate-y-full"
      }`}
      style={{ paddingBottom: "env(safe-area-inset-bottom)" }}
    >
      <div className="flex items-center gap-3 px-3 py-2.5">
        <img
          src="https://ngearsafe.com/cdn/shop/files/Untitled_design_1.png?v=1776592936&width=120"
          alt="SafeBuds"
          width={44}
          height={44}
          className="h-11 w-11 flex-shrink-0 rounded-lg object-cover"
        />
        <div className="min-w-0 flex-1">
          <div className="truncate text-sm font-bold text-[#102442]">SafeBuds</div>
          <div className="text-sm font-semibold text-[#39869B]">{formatINR(PRODUCT.price)}</div>
        </div>
        <button
          onClick={() => { addToCart(1); }}
          disabled={!selectedVariant.available}
          className="h-11 rounded-xl border-2 border-[#102442] px-3 text-sm font-semibold text-[#102442] disabled:opacity-50"
        >
          Add
        </button>
        <button
          onClick={onBuy}
          disabled={!selectedVariant.available}
          className="h-11 flex-shrink-0 rounded-xl bg-[#102442] px-5 text-sm font-bold text-white disabled:opacity-50"
        >
          Buy Now
        </button>
      </div>
    </div>
  );
}
