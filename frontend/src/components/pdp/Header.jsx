import React, { useState, useEffect } from 'react';
import { Heart, ShoppingCart, Menu, X, Search } from 'lucide-react';
import { brand } from '../../mock/mock';

const Logo = () => (
  <div className="flex items-center gap-2 select-none">
    <span className="font-display font-extrabold text-ng-cyan text-2xl lowercase tracking-tighter">ng</span>
    <span className="font-display font-extrabold text-ng-navy text-lg tracking-tight">NG EARSAFE</span>
  </div>
);

const Header = ({ cartCount = 0, wishCount = 0 }) => {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8);
    window.addEventListener('scroll', onScroll);
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  return (
    <>
      <div className="bg-ng-navy-dark text-white text-center text-[11px] md:text-xs font-semibold tracking-widest py-2 px-4">
        {brand.announcement}
      </div>
      <header className={`sticky top-0 z-40 transition-all ${scrolled ? 'bg-ng-cream/95 backdrop-blur shadow-sm' : 'bg-ng-cream'}`}>
        <div className="max-w-7xl mx-auto px-4 md:px-6 h-16 flex items-center justify-between">
          <Logo />
          <nav className="hidden lg:flex items-center gap-8">
            {brand.nav.map((n) => (
              <a key={n} href="#" className="text-sm text-ng-navy/80 hover:text-ng-navy font-medium transition-colors">{n}</a>
            ))}
          </nav>
          <div className="flex items-center gap-2">
            <button className="hidden md:flex w-10 h-10 rounded-full items-center justify-center border border-ng-sand text-ng-navy hover:bg-white transition-colors" aria-label="Search"><Search size={18} /></button>
            <button className="relative w-10 h-10 rounded-full flex items-center justify-center border border-ng-sand text-ng-navy hover:bg-white transition-colors" aria-label="Wishlist">
              <Heart size={18} className={wishCount ? 'fill-ng-navy' : ''} />
              {wishCount > 0 && <span className="absolute -top-1 -right-1 bg-ng-cyan text-ng-navy text-[10px] font-bold rounded-full w-4 h-4 flex items-center justify-center">{wishCount}</span>}
            </button>
            <button className="relative flex items-center gap-2 bg-ng-navy text-white rounded-full h-10 pl-4 pr-4 font-semibold text-sm hover:bg-ng-navy-dark transition-colors" aria-label="Cart">
              <ShoppingCart size={16} /> <span className="hidden sm:inline">Cart</span>
              {cartCount > 0 && <span className="bg-ng-cyan text-ng-navy text-[11px] font-bold rounded-full w-5 h-5 flex items-center justify-center">{cartCount}</span>}
            </button>
            <button onClick={() => setOpen((o) => !o)} className="lg:hidden w-10 h-10 rounded-full flex items-center justify-center border border-ng-sand text-ng-navy" aria-label="Menu">
              {open ? <X size={18} /> : <Menu size={18} />}
            </button>
          </div>
        </div>
        {open && (
          <div className="lg:hidden border-t border-ng-sand bg-ng-cream px-4 py-3 flex flex-col gap-1">
            {brand.nav.map((n) => (
              <a key={n} href="#" className="py-2 text-sm font-medium text-ng-navy/80">{n}</a>
            ))}
          </div>
        )}
      </header>
    </>
  );
};

export default Header;
