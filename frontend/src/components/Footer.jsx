import React from "react";
import { Link } from "react-router-dom";
import { PRESS } from "../mock";
import { Instagram, Facebook, Youtube, Twitter, Mail } from "lucide-react";

const COLS = [
  { title: "Shop", links: ["Open-Ear Audio", "Beyond Audio", "Beauty Tech", "Travel Tech", "New Arrivals"] },
  { title: "Support", links: ["Track Order", "Shipping Policy", "Returns & Refunds", "Warranty", "Contact Us"] },
  { title: "Company", links: ["About NG EarSafe", "Reels", "Press", "Careers", "Store Locator"] },
];

export default function Footer() {
  return (
    <footer className="bg-[#0E2233] text-white">
      <div className="border-b border-white/10">
        <div className="max-w-7xl mx-auto px-6 py-8 flex flex-wrap items-center justify-center gap-x-10 gap-y-4">
          {PRESS.map((p) => (
            <span key={p} className="text-white/45 font-display tracking-wide text-sm">{p}</span>
          ))}
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-6 py-14 grid grid-cols-2 md:grid-cols-5 gap-10">
        <div className="col-span-2">
          <div className="flex items-center gap-2 mb-4">
            <span className="font-display text-2xl text-[#35B9CE]" style={{textTransform:'lowercase'}}>ng</span>
            <span className="font-display text-xl">NG Earsafe</span>
          </div>
          <p className="text-white/60 text-sm max-w-xs leading-relaxed">
            India's open-ear pioneers since 2020. Thoughtful tech to move, recover and live better — on the road and at home.
          </p>
          <div className="flex gap-3 mt-6">
            {[Instagram, Facebook, Youtube, Twitter].map((Icon, i) => (
              <a key={i} href="#" className="w-9 h-9 rounded-full bg-white/10 flex items-center justify-center hover:bg-[#35B9CE] hover:text-[#0E2233] transition-colors">
                <Icon className="w-4 h-4" />
              </a>
            ))}
          </div>
        </div>

        {COLS.map((c) => (
          <div key={c.title}>
            <h4 className="font-display text-base mb-4">{c.title}</h4>
            <ul className="space-y-2.5">
              {c.links.map((l) => (
                <li key={l}><Link to="/" className="text-white/60 hover:text-white text-sm transition-colors">{l}</Link></li>
              ))}
            </ul>
          </div>
        ))}
      </div>

      <div className="border-t border-white/10">
        <div className="max-w-7xl mx-auto px-6 py-5 flex flex-col sm:flex-row items-center justify-between gap-3">
          <p className="text-white/40 text-xs">© 2026 NG EarSafe. All rights reserved. Demo store.</p>
          <div className="flex items-center gap-2 text-white/40 text-xs"><Mail className="w-4 h-4" /> care@ngearsafe.demo</div>
        </div>
      </div>
    </footer>
  );
}
