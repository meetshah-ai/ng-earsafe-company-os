import React, { useState, useEffect } from 'react';
import { ShoppingCart, Zap } from 'lucide-react';

const inr = (n) => n.toLocaleString('en-IN');

const StickyBar = ({ product, onAddToCart, onBuyNow }) => {
  const [show, setShow] = useState(false);

  useEffect(() => {
    const onScroll = () => setShow(window.scrollY > 700);
    window.addEventListener('scroll', onScroll);
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  return (
    <div className={`fixed bottom-0 inset-x-0 z-40 transition-transform duration-300 ${show ? 'translate-y-0' : 'translate-y-full'}`}>
      <div className="bg-white/95 backdrop-blur border-t border-ng-sand shadow-[0_-6px_24px_rgba(11,37,69,0.08)]">
        <div className="max-w-7xl mx-auto px-4 py-3 flex items-center gap-4">
          <img src={product.gallery[0]} alt={product.name} className="w-12 h-12 rounded-lg object-contain bg-ng-cream border border-ng-sand hidden sm:block" />
          <div className="hidden md:block flex-1 min-w-0">
            <p className="font-display font-bold text-ng-navy text-sm truncate uppercase">{product.name}</p>
            <div className="flex items-center gap-2">
              <span className="font-bold text-ng-navy">{product.currency}{inr(product.price)}</span>
              <span className="text-xs text-ng-muted line-through">{product.currency}{inr(product.mrp)}</span>
            </div>
          </div>
          <div className="flex items-center gap-2 flex-1 md:flex-none">
            <button onClick={() => onAddToCart(1)} className="flex-1 md:flex-none h-11 px-5 rounded-full border-2 border-ng-navy text-ng-navy font-semibold text-sm flex items-center justify-center gap-2 hover:bg-ng-navy hover:text-white transition-colors">
              <ShoppingCart size={16} /> <span className="hidden sm:inline">Add to Cart</span><span className="sm:hidden">Add</span>
            </button>
            <button onClick={() => onBuyNow(1)} className="flex-1 md:flex-none h-11 px-6 rounded-full bg-ng-navy text-white font-semibold text-sm flex items-center justify-center gap-2 hover:bg-ng-navy-dark transition-colors">
              <Zap size={16} className="fill-ng-cyan text-ng-cyan" /> Buy Now
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default StickyBar;
