import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { Menu, Search, ShoppingBag, Heart, X } from "lucide-react";
import { useCart } from "../context/CartContext";
import CartDrawer from "./CartDrawer";

const NAV = [
  { label: "Open-Ear Audio", to: "/products/ng-earsafe-comm-2" },
  { label: "Beyond Audio", to: "/products/ng-pulse" },
  { label: "Beauty Tech", to: "/products/ng-nomad-6-in-1" },
  { label: "Reels", to: "/" },
  { label: "Support", to: "/" },
];

export default function Header() {
  const { count, setOpen } = useCart();
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 10);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <>
      <div className="bg-[#0E2233] text-white text-[12px] tracking-[0.18em] text-center py-2.5 px-4 font-semibold uppercase">
        Free shipping across India on all prepaid orders
      </div>

      <header
        className={`sticky top-0 z-40 w-full bg-[#F4F1EA]/90 backdrop-blur transition-shadow ${
          scrolled ? "shadow-sm" : ""
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 h-[68px] flex items-center justify-between gap-4">
          <div className="flex items-center gap-3">
            <button className="lg:hidden p-2 -ml-2" onClick={() => setMobileOpen(true)} aria-label="Menu">
              <Menu className="w-5 h-5" />
            </button>
            <Link to="/" className="flex items-center gap-2">
              <span className="font-display text-2xl leading-none text-[#35B9CE] lowercase" style={{textTransform:'lowercase'}}>ng</span>
              <span className="font-display text-xl tracking-tight text-[#0E2233]">NG Earsafe</span>
            </Link>
          </div>

          <nav className="hidden lg:flex items-center gap-8">
            {NAV.map((n) => (
              <Link key={n.label} to={n.to} className="text-sm font-medium text-[#33414f] hover:text-[#0E2233] transition-colors relative group">
                {n.label}
                <span className="absolute -bottom-1.5 left-0 h-0.5 w-0 bg-[#35B9CE] transition-all group-hover:w-full" />
              </Link>
            ))}
          </nav>

          <div className="flex items-center gap-1 sm:gap-2">
            <button className="w-10 h-10 rounded-full bg-white/70 flex items-center justify-center hover:bg-white transition-colors" aria-label="Search">
              <Search className="w-[18px] h-[18px]" />
            </button>
            <button className="w-10 h-10 rounded-full bg-white/70 items-center justify-center hover:bg-white transition-colors hidden sm:flex" aria-label="Wishlist">
              <Heart className="w-[18px] h-[18px]" />
            </button>
            <button
              onClick={() => setOpen(true)}
              className="relative flex items-center gap-2 bg-[#0E2233] text-white rounded-full pl-4 pr-5 h-10 font-semibold text-sm hover:bg-[#1a3450] transition-colors"
            >
              <ShoppingBag className="w-4 h-4" /> Cart
              {count > 0 && (
                <span className="absolute -top-1 -right-1 bg-[#35B9CE] text-[#0E2233] text-[10px] font-bold min-w-[18px] h-[18px] rounded-full flex items-center justify-center px-1">
                  {count}
                </span>
              )}
            </button>
          </div>
        </div>
      </header>

      {mobileOpen && (
        <div className="fixed inset-0 z-50 lg:hidden">
          <div className="absolute inset-0 bg-black/40" onClick={() => setMobileOpen(false)} />
          <div className="absolute left-0 top-0 h-full w-72 bg-[#F4F1EA] p-6 fade-up">
            <div className="flex items-center justify-between mb-8">
              <span className="font-display text-xl">NG Earsafe</span>
              <button onClick={() => setMobileOpen(false)}><X className="w-5 h-5" /></button>
            </div>
            <nav className="flex flex-col gap-1">
              {NAV.map((n) => (
                <Link key={n.label} to={n.to} onClick={() => setMobileOpen(false)} className="py-3 text-base font-medium text-[#0E2233] border-b border-black/5">
                  {n.label}
                </Link>
              ))}
            </nav>
          </div>
        </div>
      )}

      <CartDrawer />
    </>
  );
}
