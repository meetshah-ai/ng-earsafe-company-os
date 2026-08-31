import React from "react";
import { ShoppingCart, ShieldCheck } from "lucide-react";
import { useStore } from "../context/StoreContext";

export default function Header() {
  const { cartCount, setCartOpen } = useStore();
  return (
    <header className="sticky top-0 z-40 w-full">
      <div className="bg-[#102442] text-white text-center text-[13px] py-2 px-4 font-medium tracking-wide">
        Free shipping · Ships in 1–2 days · 7-day returns · 1-year warranty
      </div>
      <div className="bg-white/95 backdrop-blur border-b border-slate-200">
        <div className="mx-auto flex max-w-6xl items-center justify-between px-4 py-3">
          <div className="flex items-center gap-2">
            <div className="flex h-8 w-8 items-center justify-center rounded-md bg-[#102442] text-white">
              <ShieldCheck size={18} className="text-[#54C1C8]" />
            </div>
            <div className="leading-tight">
              <div className="text-sm font-bold text-[#102442]">NG EarSafe</div>
              <div className="text-[10px] tracking-wide text-slate-500">× WeHear</div>
            </div>
          </div>
          <button
            onClick={() => setCartOpen(true)}
            aria-label={`Open cart, ${cartCount} items`}
            className="relative rounded-full p-2 text-[#102442] hover:bg-slate-100 transition-colors"
          >
            <ShoppingCart size={22} />
            {cartCount > 0 && (
              <span className="absolute -right-0.5 -top-0.5 flex h-5 w-5 items-center justify-center rounded-full bg-[#54C1C8] text-[11px] font-bold text-[#102442]">
                {cartCount}
              </span>
            )}
          </button>
        </div>
      </div>
    </header>
  );
}
