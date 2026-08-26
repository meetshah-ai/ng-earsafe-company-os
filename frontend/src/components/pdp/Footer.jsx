import React from 'react';
import { Instagram, Youtube, Facebook, Twitter, Truck, ShieldCheck, RotateCcw, Wallet } from 'lucide-react';

const Footer = () => {
  const cols = [
    { title: 'Shop', links: ['Open-Ear Audio', 'Beauty Tech', 'Massagers', 'Wearables', 'Accessories'] },
    { title: 'Support', links: ['Track Order', 'Warranty', 'Returns & Refunds', 'Contact Us', 'FAQs'] },
    { title: 'Company', links: ['About NG', 'Reviews', 'Reels', 'Careers', 'Press'] },
  ];
  const strip = [
    { icon: Truck, t: 'Free Shipping' }, { icon: ShieldCheck, t: '1-Year Warranty' },
    { icon: RotateCcw, t: '7-Day Returns' }, { icon: Wallet, t: 'COD Available' },
  ];
  return (
    <footer className="bg-ng-navy text-white mt-20">
      <div className="max-w-7xl mx-auto px-4 md:px-6">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 py-8 border-b border-white/10">
          {strip.map((s) => (
            <div key={s.t} className="flex items-center gap-3 justify-center md:justify-start">
              <s.icon size={22} className="text-ng-cyan" />
              <span className="text-sm font-semibold">{s.t}</span>
            </div>
          ))}
        </div>
        <div className="grid grid-cols-2 md:grid-cols-5 gap-8 py-12">
          <div className="col-span-2">
            <div className="flex items-center gap-2">
              <span className="font-display font-extrabold text-ng-cyan text-2xl lowercase tracking-tighter">ng</span>
              <span className="font-display font-extrabold text-lg">NG EARSAFE</span>
            </div>
            <p className="mt-4 text-sm text-white/60 max-w-xs leading-relaxed">India's open-ear pioneers — now moving beyond audio into wearables, beauty tech and massagers built for real life.</p>
            <div className="flex gap-3 mt-5">
              {[Instagram, Youtube, Facebook, Twitter].map((Icon, i) => (
                <a key={i} href="#" className="w-9 h-9 rounded-full border border-white/20 flex items-center justify-center hover:bg-ng-cyan hover:text-ng-navy hover:border-ng-cyan transition-colors"><Icon size={16} /></a>
              ))}
            </div>
          </div>
          {cols.map((c) => (
            <div key={c.title}>
              <p className="font-display font-bold uppercase tracking-wide text-sm mb-4">{c.title}</p>
              <ul className="space-y-2.5">
                {c.links.map((l) => (
                  <li key={l}><a href="#" className="text-sm text-white/60 hover:text-ng-cyan transition-colors">{l}</a></li>
                ))}
              </ul>
            </div>
          ))}
        </div>
        <div className="py-6 border-t border-white/10 flex flex-col md:flex-row items-center justify-between gap-3">
          <p className="text-xs text-white/50">© 2025 NG EarSafe. All rights reserved.</p>
          <div className="flex gap-5 text-xs text-white/50">
            <a href="#" className="hover:text-white">Privacy Policy</a>
            <a href="#" className="hover:text-white">Terms of Use</a>
            <a href="#" className="hover:text-white">Shipping Policy</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
