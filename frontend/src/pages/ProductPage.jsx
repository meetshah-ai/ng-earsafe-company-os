import React, { useState } from "react";
import { Link } from "react-router-dom";
import Header from "../components/Header";
import Footer from "../components/Footer";
import { NOMAD } from "../mock";
import { useCart } from "../context/CartContext";
import { toast } from "sonner";
import { Button } from "../components/ui/button";
import PdpSections from "../components/pdp/PdpSections";
import {
  Star, Minus, Plus, ChevronRight, Truck, ShieldCheck, RotateCcw,
  Banknote, Check, ChevronLeft, ZoomIn, ShoppingCart, Zap, Heart,
} from "lucide-react";

const rupee = (n) => `₹${n.toLocaleString("en-IN")}`;
const TRUST = [
  { icon: Truck, title: "Free Shipping", text: "On all prepaid orders" },
  { icon: ShieldCheck, title: "6-Month Warranty", text: "Hassle-free cover" },
  { icon: RotateCcw, title: "7-Day Returns", text: "Easy & no questions" },
  { icon: Banknote, title: "COD Available", text: "Pay when it arrives" },
];

export default function ProductPage() {
  const p = NOMAD;
  const { addItem, setOpen } = useCart();
  const [activeImg, setActiveImg] = useState(0);
  const [color, setColor] = useState(p.colors[0].name);
  const [qty, setQty] = useState(1);
  const off = Math.round(((p.compareAt - p.price) / p.compareAt) * 100);

  const handleAdd = (buyNow = false) => {
    addItem(p, qty, color);
    if (buyNow) setOpen(true);
    else toast.success("Added to cart", { description: `${p.name} · ${color}` });
  };

  return (
    <div className="bg-[#F4F1EA] min-h-screen">
      <Header />

      {/* Breadcrumb */}
      <div className="max-w-7xl mx-auto px-6 pt-5">
        <div className="flex items-center gap-1.5 text-xs text-gray-500">
          <Link to="/" className="hover:text-[#0E2233]">Home</Link>
          <ChevronRight className="w-3 h-3" />
          <span className="hover:text-[#0E2233]">Beauty Tech</span>
          <ChevronRight className="w-3 h-3" />
          <span className="text-[#0E2233] font-medium truncate">Travel Tech</span>
        </div>
      </div>

      {/* Main grid */}
      <section className="max-w-7xl mx-auto px-6 py-8 grid lg:grid-cols-2 gap-10 lg:gap-14">
        {/* Gallery */}
        <div className="lg:sticky lg:top-24 self-start">
          <div className="relative bg-white rounded-3xl overflow-hidden aspect-square shadow-sm">
            <span className="absolute top-4 left-4 z-10 bg-[#0E2233] text-white text-[11px] font-bold px-3 py-1.5 rounded-full tracking-wider uppercase">
              New Launch
            </span>
            <span className="absolute top-4 right-4 z-10 w-9 h-9 rounded-full bg-[#F4F1EA] flex items-center justify-center">
              <ZoomIn className="w-4 h-4 text-[#0E2233]" />
            </span>
            <img src={p.images[activeImg]} alt={p.name} className="w-full h-full object-contain p-8 fade-up" key={activeImg} />

            <button onClick={() => setActiveImg((i) => (i - 1 + p.images.length) % p.images.length)}
              className="absolute left-3 top-1/2 -translate-y-1/2 w-9 h-9 rounded-full bg-[#F4F1EA] shadow flex items-center justify-center hover:bg-white">
              <ChevronLeft className="w-5 h-5" />
            </button>
            <button onClick={() => setActiveImg((i) => (i + 1) % p.images.length)}
              className="absolute right-3 top-1/2 -translate-y-1/2 w-9 h-9 rounded-full bg-[#F4F1EA] shadow flex items-center justify-center hover:bg-white">
              <ChevronRight className="w-5 h-5" />
            </button>
          </div>

          <div className="flex gap-3 mt-4 overflow-x-auto no-scrollbar">
            {p.images.map((img, i) => (
              <button key={i} onClick={() => setActiveImg(i)}
                className={`w-[74px] h-[74px] flex-shrink-0 rounded-2xl border-2 overflow-hidden bg-white transition-all ${
                  activeImg === i ? "border-[#0E2233]" : "border-transparent hover:border-gray-200"
                }`}>
                <img src={img} alt="" className="w-full h-full object-contain p-1.5" />
              </button>
            ))}
          </div>
        </div>

        {/* Buy box */}
        <div>
          <div className="flex items-center gap-2.5 mb-3">
            <span className="bg-[#0E2233] text-white text-[11px] font-bold px-3 py-1 rounded-full tracking-wider uppercase">Bestseller</span>
            <span className="text-[12px] font-semibold tracking-[0.15em] text-gray-500 uppercase">{p.brandTag}</span>
          </div>
          <h1 className="font-display text-4xl md:text-[52px] leading-[0.98] text-[#0E2233]">
            {p.name}
          </h1>
          <p className="font-display text-lg md:text-xl text-[#2BB0C6] mt-3">{p.tagline}</p>

          <div className="flex items-center gap-3 mt-4">
            <div className="flex items-center gap-1">
              {[...Array(5)].map((_, i) => (
                <Star key={i} className={`w-[18px] h-[18px] ${i < Math.round(p.rating) ? "fill-[#35B9CE] text-[#35B9CE]" : "text-gray-300"}`} />
              ))}
            </div>
            <span className="text-sm font-semibold text-[#0E2233]">{p.rating}</span>
            <span className="text-sm text-gray-500">({p.reviewCount} reviews)</span>
            <span className="text-gray-300">|</span>
            <span className="text-sm text-gray-500">{p.sold}+ sold</span>
          </div>

          <p className="text-[#4b5563] mt-5 leading-relaxed">{p.subtitle}</p>

          {/* Price */}
          <div className="flex items-center gap-3 mt-6">
            <span className="font-display text-4xl text-[#0E2233]">{rupee(p.price)}</span>
            <span className="text-lg text-gray-400 line-through">{rupee(p.compareAt)}</span>
            <span className="bg-[#0E2233] text-white text-xs font-bold px-3 py-1.5 rounded-full uppercase tracking-wide">{p.discountLabel}</span>
          </div>
          <p className="text-xs text-gray-400 mt-1">Inclusive of all taxes</p>

          {/* Color */}
          <div className="mt-6">
            <p className="text-sm font-bold mb-2">Colour: <span className="text-gray-500 font-normal">{color}</span></p>
            <div className="flex gap-3">
              {p.colors.map((c) => (
                <button key={c.name} onClick={() => setColor(c.name)} title={c.name}
                  className={`relative w-16 h-16 rounded-2xl border-2 overflow-hidden bg-white transition-all ${
                    color === c.name ? "border-[#0E2233]" : "border-gray-200 hover:border-gray-300"
                  }`}>
                  <img src={c.image} alt={c.name} className="w-full h-full object-contain p-1" />
                  {color === c.name && (
                    <span className="absolute -top-1.5 -right-1.5 bg-[#35B9CE] rounded-full w-5 h-5 flex items-center justify-center">
                      <Check className="w-3 h-3 text-[#0E2233]" />
                    </span>
                  )}
                </button>
              ))}
            </div>
          </div>

          {/* Qty + actions */}
          <div className="flex items-center gap-3 mt-6">
            <div className="flex items-center bg-white border rounded-full h-12">
              <button className="px-4 h-full" onClick={() => setQty((q) => Math.max(1, q - 1))}><Minus className="w-4 h-4" /></button>
              <span className="w-8 text-center font-bold">{qty}</span>
              <button className="px-4 h-full" onClick={() => setQty((q) => q + 1)}><Plus className="w-4 h-4" /></button>
            </div>
            <Button onClick={() => handleAdd(false)}
              className="flex-1 h-12 rounded-full bg-white border border-[#0E2233] text-[#0E2233] font-semibold hover:bg-[#0E2233] hover:text-white">
              <ShoppingCart className="w-4 h-4 mr-2" /> Add to Cart
            </Button>
            <button className="w-12 h-12 rounded-full bg-white border flex items-center justify-center hover:border-[#35B9CE] transition-colors">
              <Heart className="w-5 h-5 text-[#0E2233]" />
            </button>
          </div>
          <Button onClick={() => handleAdd(true)}
            className="w-full h-[52px] mt-3 rounded-full bg-[#0E2233] hover:bg-[#1a3450] text-white font-semibold text-base">
            <Zap className="w-4 h-4 mr-2 text-[#35B9CE] fill-[#35B9CE]" /> Buy Now — {rupee(p.price * qty)}
          </Button>

          {/* Trust */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-3 mt-6">
            {TRUST.map((t) => (
              <div key={t.title} className="bg-white rounded-2xl p-4 text-center">
                <div className="w-10 h-10 rounded-full bg-[#eafafc] flex items-center justify-center mx-auto mb-2">
                  <t.icon className="w-5 h-5 text-[#2BB0C6]" />
                </div>
                <p className="font-bold text-sm text-[#0E2233]">{t.title}</p>
                <p className="text-[11px] text-gray-500 mt-0.5">{t.text}</p>
              </div>
            ))}
          </div>

          {/* Highlights */}
          <div className="mt-6 bg-white rounded-2xl p-6">
            <p className="font-display text-lg mb-4">Why you'll love it</p>
            <ul className="space-y-3">
              {p.highlights.map((h, i) => (
                <li key={i} className="flex gap-3 text-[15px] text-[#33414f]">
                  <span className="mt-0.5 w-5 h-5 rounded-full bg-[#35B9CE] flex items-center justify-center flex-shrink-0">
                    <Check className="w-3 h-3 text-white" />
                  </span>
                  {h}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      {/* Marquee */}
      <div className="bg-[#0E2233] py-4 overflow-hidden">
        <div className="flex whitespace-nowrap animate-marquee w-max">
          {[...p.marquee, ...p.marquee].map((m, i) => (
            <span key={i} className="flex items-center text-white font-display text-sm tracking-widest px-6">
              {m}
              <span className="ml-6 w-1.5 h-1.5 rounded-full bg-[#35B9CE]" />
            </span>
          ))}
        </div>
      </div>

      <PdpSections p={p} />
      <Footer />
    </div>
  );
}
