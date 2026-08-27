import React from "react";
import { Link } from "react-router-dom";
import { RELATED } from "../../mock";
import { useCart } from "../../context/CartContext";
import { toast } from "sonner";
import { Button } from "../ui/button";
import {
  Zap, Gauge, ShieldCheck, Feather, Cable, Gem, CircuitBoard,
  Smartphone, Layers, Plug, Check, Star, ArrowRight, ShoppingCart,
} from "lucide-react";

const ICONS = { Zap, Gauge, ShieldCheck, Feather, Cable, Gem, CircuitBoard, Smartphone, Layers, Plug, Check };
const rupee = (n) => `₹${n.toLocaleString("en-IN")}`;

function SectionLabel({ kicker, title, sub, light }) {
  return (
    <div className="text-center max-w-2xl mx-auto mb-12">
      <p className="text-[#2BB0C6] font-semibold text-sm mb-3 uppercase tracking-[0.2em]">{kicker}</p>
      <h2 className={`font-display text-4xl md:text-[52px] leading-[0.98] ${light ? "text-white" : "text-[#0E2233]"}`}>{title}</h2>
      {sub && <p className={`mt-4 leading-relaxed ${light ? "text-white/60" : "text-[#4b5563]"}`}>{sub}</p>}
    </div>
  );
}

export default function PdpSections({ p }) {
  const { addItem } = useCart();

  return (
    <div>
      {/* Benefits */}
      <section className="max-w-7xl mx-auto px-6 py-20">
        <SectionLabel kicker="Why it works" title="Made for life on the move" />
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-5">
          {p.benefits.map((b) => {
            const Icon = ICONS[b.icon] || Zap;
            return (
              <div key={b.title} className="bg-white rounded-3xl p-6 hover:shadow-xl hover:-translate-y-1 transition-all duration-300 group">
                <div className="w-12 h-12 rounded-2xl bg-[#0E2233] flex items-center justify-center mb-4 group-hover:bg-[#35B9CE] transition-colors">
                  <Icon className="w-6 h-6 text-white" />
                </div>
                <h3 className="font-display text-xl text-[#0E2233]">{b.title}</h3>
                <p className="text-sm text-[#4b5563] mt-2 leading-relaxed">{b.text}</p>
              </div>
            );
          })}
        </div>
      </section>

      {/* Results stats */}
      <section className="bg-[#0E2233] text-white">
        <div className="max-w-7xl mx-auto px-6 py-20">
          <SectionLabel light kicker="Real traveller results" title="The numbers speak"
            sub="*Based on a survey of 515 NG Nomad owners across 12 weeks of daily travel use." />
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
            {[
              ["94%", "cut the number of cables they pack for a trip"],
              ["89%", "reported faster, more reliable top-ups on the road"],
              ["97%", "would recommend the Nomad to a fellow traveller"],
            ].map(([n, t]) => (
              <div key={n} className="border border-white/10 rounded-3xl py-10 px-6 hover:border-[#35B9CE]/60 transition-colors">
                <p className="font-display text-6xl md:text-7xl text-[#35B9CE]">{n}</p>
                <p className="text-white/70 mt-3 max-w-[220px] mx-auto">{t}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Feature grid */}
      <section className="max-w-7xl mx-auto px-6 py-20">
        <SectionLabel kicker="How it helps" title="Built to charge anything" />
        <div className="grid md:grid-cols-3 gap-5">
          {p.features.map((f) => {
            const Icon = ICONS[f.icon] || Cable;
            return (
              <div key={f.title} className="rounded-3xl bg-white overflow-hidden hover:shadow-lg transition-shadow">
                {f.image ? (
                  <div className="aspect-[4/3] bg-[#f6f5f1]">
                    <img src={f.image} alt={f.title} className="w-full h-full object-contain p-6" />
                  </div>
                ) : (
                  <div className="aspect-[4/3] bg-[#eafafc] flex items-center justify-center">
                    <div className="w-16 h-16 rounded-2xl bg-white shadow-md flex items-center justify-center">
                      <Icon className="w-8 h-8 text-[#2BB0C6]" />
                    </div>
                  </div>
                )}
                <div className="p-6">
                  <h3 className="font-display text-xl text-[#0E2233]">{f.title}</h3>
                  <p className="text-sm text-[#4b5563] mt-2 leading-relaxed">{f.text}</p>
                </div>
              </div>
            );
          })}
        </div>
      </section>

      {/* Reviews */}
      <section className="bg-white">
        <div className="max-w-5xl mx-auto px-6 py-20">
          <SectionLabel kicker="From our travellers" title="Reviews" />
          <div className="grid md:grid-cols-3 gap-6 items-start">
            <div className="bg-[#F4F1EA] rounded-3xl p-6 text-center">
              <p className="font-display text-6xl text-[#0E2233]">{p.rating}</p>
              <div className="flex items-center justify-center gap-1 my-2">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className={`w-4 h-4 ${i < Math.round(p.rating) ? "fill-[#35B9CE] text-[#35B9CE]" : "text-gray-300"}`} />
                ))}
              </div>
              <p className="text-sm text-gray-500 mb-4">Based on {p.reviewCount} reviews</p>
              <div className="space-y-1.5">
                {[5, 4, 3, 2, 1].map((star) => {
                  const c = p.ratingBreakdown[star] || 0;
                  const pct = p.reviewCount ? (c / p.reviewCount) * 100 : 0;
                  return (
                    <div key={star} className="flex items-center gap-2 text-xs">
                      <span className="w-3 text-gray-500">{star}</span>
                      <Star className="w-3 h-3 fill-[#35B9CE] text-[#35B9CE]" />
                      <div className="flex-1 h-1.5 bg-black/5 rounded-full overflow-hidden">
                        <div className="h-full bg-[#35B9CE]" style={{ width: `${pct}%` }} />
                      </div>
                      <span className="w-4 text-gray-400 text-right">{c}</span>
                    </div>
                  );
                })}
              </div>
            </div>

            <div className="md:col-span-2 space-y-4">
              {p.reviews.map((r, i) => (
                <div key={i} className="bg-[#F4F1EA] rounded-3xl p-5">
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-3">
                      <div className="w-10 h-10 rounded-full bg-[#0E2233] text-white flex items-center justify-center font-display text-lg">
                        {r.name.charAt(0)}
                      </div>
                      <div>
                        <p className="font-bold text-sm text-[#0E2233]">{r.name}</p>
                        <p className="text-xs text-gray-400">{r.country} · {r.date}</p>
                      </div>
                    </div>
                    <div className="flex gap-0.5">
                      {[...Array(5)].map((_, j) => (
                        <Star key={j} className={`w-3.5 h-3.5 ${j < r.rating ? "fill-[#35B9CE] text-[#35B9CE]" : "text-gray-300"}`} />
                      ))}
                    </div>
                  </div>
                  <p className="text-sm text-[#33414f] mt-3 leading-relaxed">{r.text}</p>
                  <p className="text-xs text-gray-400 mt-2">Colour: {r.color} · Verified purchase</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Related */}
      <section className="max-w-7xl mx-auto px-6 pb-24">
        <SectionLabel kicker="Complete your kit" title="You may also like" />
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
          {RELATED.map((r) => {
            const off = Math.round(((r.compareAt - r.price) / r.compareAt) * 100);
            return (
              <div key={r.id} className="group bg-white rounded-3xl overflow-hidden hover:shadow-xl transition-all">
                <Link to={`/products/${r.slug}`} className="block relative bg-[#f6f5f1] aspect-square overflow-hidden">
                  <span className="absolute top-3 left-3 z-10 bg-[#0E2233] text-white text-[11px] font-bold px-2.5 py-1 rounded-full uppercase tracking-wide">{r.tag}</span>
                  <span className="absolute top-3 right-3 z-10 bg-[#35B9CE] text-[#0E2233] text-[11px] font-bold px-2.5 py-1 rounded-full">{off}% OFF</span>
                  <img src={r.image} alt={r.name} className="w-full h-full object-contain p-6 group-hover:scale-105 transition-transform duration-500" />
                </Link>
                <div className="p-5">
                  <Link to={`/products/${r.slug}`}>
                    <h3 className="font-semibold text-[15px] leading-snug text-[#0E2233] line-clamp-2 min-h-[42px] hover:text-[#2BB0C6] transition-colors">{r.name}</h3>
                  </Link>
                  <div className="flex items-center gap-2 mt-2">
                    <span className="font-display text-xl text-[#0E2233]">{rupee(r.price)}</span>
                    <span className="text-sm text-gray-400 line-through">{rupee(r.compareAt)}</span>
                  </div>
                  <Button onClick={() => { addItem(r, 1); toast.success("Added to cart", { description: r.name }); }}
                    className="w-full mt-3 rounded-full bg-white border border-[#0E2233] text-[#0E2233] font-semibold hover:bg-[#0E2233] hover:text-white">
                    <ShoppingCart className="w-4 h-4 mr-2" /> Add to Cart
                  </Button>
                </div>
              </div>
            );
          })}
        </div>
      </section>
    </div>
  );
}
