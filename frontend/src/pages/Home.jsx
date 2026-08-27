import React from "react";
import { Link } from "react-router-dom";
import Header from "../components/Header";
import Footer from "../components/Footer";
import { HOME_PRODUCTS, TRUST } from "../mock";
import { useCart } from "../context/CartContext";
import { toast } from "sonner";
import { Button } from "../components/ui/button";
import {
  Star, ArrowRight, Truck, ShieldCheck, RotateCcw, Banknote, Zap, Cable, Plug, ShoppingCart,
} from "lucide-react";

const ICONS = { Truck, ShieldCheck, RotateCcw, Banknote };
const rupee = (n) => `₹${n.toLocaleString("en-IN")}`;

function ProductCard({ p }) {
  const { addItem } = useCart();
  const off = Math.round(((p.compareAt - p.price) / p.compareAt) * 100);
  return (
    <div className="group bg-white rounded-3xl overflow-hidden hover:shadow-xl hover:-translate-y-1 transition-all duration-300">
      <Link to={`/products/${p.slug}`} className="block relative bg-[#f6f5f1] aspect-square overflow-hidden">
        {p.tag && (
          <span className="absolute top-3 left-3 z-10 bg-[#0E2233] text-white text-[11px] font-bold px-2.5 py-1 rounded-full uppercase tracking-wide">{p.tag}</span>
        )}
        <span className="absolute top-3 right-3 z-10 bg-[#35B9CE] text-[#0E2233] text-[11px] font-bold px-2.5 py-1 rounded-full">{off}% OFF</span>
        <img src={p.image} alt={p.name} className="w-full h-full object-contain p-6 group-hover:scale-105 transition-transform duration-500" />
      </Link>
      <div className="p-4">
        <div className="flex items-center gap-1 mb-1.5">
          {[...Array(5)].map((_, i) => (
            <Star key={i} className={`w-3.5 h-3.5 ${i < Math.round(p.rating) ? "fill-[#35B9CE] text-[#35B9CE]" : "text-gray-300"}`} />
          ))}
          <span className="text-xs text-gray-400 ml-1">{p.rating}</span>
        </div>
        <Link to={`/products/${p.slug}`}>
          <h3 className="font-semibold text-[15px] leading-snug text-[#0E2233] line-clamp-2 min-h-[42px] hover:text-[#2BB0C6] transition-colors">{p.name}</h3>
        </Link>
        <div className="flex items-center gap-2 mt-2">
          <span className="font-display text-xl text-[#0E2233]">{rupee(p.price)}</span>
          <span className="text-sm text-gray-400 line-through">{rupee(p.compareAt)}</span>
        </div>
        <Button onClick={() => { addItem(p, 1); toast.success("Added to cart", { description: p.name }); }}
          className="w-full mt-3 rounded-full bg-[#0E2233] hover:bg-[#1a3450] font-semibold">
          <ShoppingCart className="w-4 h-4 mr-2" /> Add to Cart
        </Button>
      </div>
    </div>
  );
}

export default function Home() {
  const hero = HOME_PRODUCTS[0];
  return (
    <div className="bg-[#F4F1EA]">
      <Header />

      {/* Hero */}
      <section className="relative overflow-hidden">
        <div className="max-w-7xl mx-auto px-6 py-16 md:py-24 grid md:grid-cols-2 gap-10 items-center">
          <div className="fade-up">
            <p className="flex items-center gap-3 text-[#2BB0C6] font-semibold text-sm uppercase tracking-[0.2em] mb-5">
              <span className="w-8 h-px bg-[#2BB0C6]" /> New Launch · Travel Tech
            </p>
            <h1 className="font-display text-5xl md:text-7xl leading-[0.92] text-[#0E2233]">
              One kit charges<br /><span className="text-[#35B9CE]">everything.</span>
            </h1>
            <p className="text-lg text-[#4b5563] mt-6 max-w-md leading-relaxed">
              Meet the NG Nomad 6-in-1 — a pocket-sized metal charging kit with USB-C, Micro-USB & Lightning tips and 3A fast charge. Ditch the cable clutter for good.
            </p>
            <div className="flex flex-wrap gap-3 mt-8">
              <Link to="/products/ng-nomad-6-in-1">
                <Button className="h-12 px-7 rounded-full bg-[#0E2233] hover:bg-[#1a3450] text-white font-semibold text-base">
                  Shop the Nomad <ArrowRight className="w-4 h-4 ml-1" />
                </Button>
              </Link>
              <Link to="/products/ng-nomad-6-in-1">
                <Button variant="ghost" className="h-12 px-7 rounded-full text-[#0E2233] font-semibold text-base hover:bg-white">
                  Learn more
                </Button>
              </Link>
            </div>
            <div className="flex items-center gap-2 mt-8">
              {[...Array(5)].map((_, i) => <Star key={i} className="w-4 h-4 fill-[#35B9CE] text-[#35B9CE]" />)}
              <span className="text-sm text-gray-500 ml-1">4.4 · 1,179 sold</span>
            </div>
          </div>
          <div className="relative fade-up">
            <div className="relative bg-white rounded-[2.5rem] p-8 shadow-xl">
              <img src={hero.image} alt={hero.name} className="w-full aspect-square object-contain" />
              <div className="absolute bottom-8 left-8 bg-[#F4F1EA] rounded-2xl shadow-lg px-4 py-3 flex items-center gap-3">
                <div className="w-9 h-9 rounded-xl bg-[#eafafc] flex items-center justify-center"><Cable className="w-5 h-5 text-[#2BB0C6]" /></div>
                <div><p className="text-xs text-gray-400">Connectors</p><p className="font-display text-base leading-none mt-0.5">6-in-1</p></div>
              </div>
              <div className="absolute top-8 right-8 bg-[#F4F1EA] rounded-2xl shadow-lg px-4 py-3 flex items-center gap-3">
                <div className="w-9 h-9 rounded-xl bg-[#eafafc] flex items-center justify-center"><Plug className="w-5 h-5 text-[#2BB0C6]" /></div>
                <div><p className="text-xs text-gray-400">Fast charge</p><p className="font-display text-base leading-none mt-0.5">3A</p></div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Trust bar */}
      <section className="border-y border-black/5">
        <div className="max-w-7xl mx-auto px-6 py-6 grid grid-cols-2 md:grid-cols-4 gap-6">
          {TRUST.map((t) => {
            const Icon = ICONS[t.icon];
            return (
              <div key={t.title} className="flex items-center gap-3">
                <div className="w-11 h-11 rounded-full bg-[#eafafc] flex items-center justify-center flex-shrink-0"><Icon className="w-5 h-5 text-[#2BB0C6]" /></div>
                <div><p className="font-bold text-sm text-[#0E2233]">{t.title}</p><p className="text-xs text-gray-500">{t.text}</p></div>
              </div>
            );
          })}
        </div>
      </section>

      {/* Products */}
      <section className="max-w-7xl mx-auto px-6 py-16">
        <div className="flex items-end justify-between mb-8">
          <div>
            <p className="text-[#2BB0C6] font-semibold text-sm mb-2 uppercase tracking-[0.2em]">Shop the range</p>
            <h2 className="font-display text-4xl md:text-5xl text-[#0E2233]">Bestselling gear</h2>
          </div>
          <Link to="/products/ng-nomad-6-in-1" className="hidden sm:flex items-center gap-1 text-sm font-semibold text-[#0E2233] hover:text-[#2BB0C6]">
            View all <ArrowRight className="w-4 h-4" />
          </Link>
        </div>
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 md:gap-6">
          {HOME_PRODUCTS.map((p) => <ProductCard key={p.id} p={p} />)}
        </div>
      </section>

      {/* Brand banner */}
      <section className="bg-[#0E2233] text-white">
        <div className="max-w-7xl mx-auto px-6 py-16 grid md:grid-cols-3 gap-10 text-center">
          {[
            ["6 Years", "Building everyday tech since 2020"],
            ["1,00,000+", "Customers served across India"],
            ["6 Months", "Warranty + easy 7-day returns"],
          ].map(([big, small]) => (
            <div key={big}>
              <p className="font-display text-5xl md:text-6xl text-[#35B9CE]">{big}</p>
              <p className="text-white/70 mt-2">{small}</p>
            </div>
          ))}
        </div>
      </section>

      <Footer />
    </div>
  );
}
