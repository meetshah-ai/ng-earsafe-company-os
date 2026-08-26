import React, { useState } from 'react';
import { Star, Minus, Plus, ShoppingCart, Zap, Check, Truck, ShieldCheck, RotateCcw, Wallet, Heart } from 'lucide-react';
import { trustBadges } from '../../mock/mock';

const iconMap = { Truck, ShieldCheck, RotateCcw, Wallet };

const inr = (n) => n.toLocaleString('en-IN');

const ProductInfo = ({ product, onColorChange, onAddToCart, onBuyNow, wishlisted, onWishlist }) => {
  const [colorIdx, setColorIdx] = useState(0);
  const [qty, setQty] = useState(1);
  const discount = Math.round(((product.mrp - product.price) / product.mrp) * 100);

  const selectColor = (i) => {
    setColorIdx(i);
    onColorChange && onColorChange(i);
  };

  return (
    <div className="animate-fade-up">
      <div className="flex items-center gap-3 mb-3">
        {product.badges.map((b) => (
          <span key={b} className="bg-ng-cyan/20 text-ng-navy text-[11px] font-bold tracking-widest px-2.5 py-1 rounded-full">{b}</span>
        ))}
        <span className="text-xs font-semibold tracking-widest text-ng-muted">{product.category}</span>
      </div>

      <h1 className="font-display font-extrabold text-4xl md:text-5xl leading-[1.02] text-ng-navy uppercase">
        {product.name}
      </h1>
      <p className="mt-2 font-display font-bold text-lg text-ng-cyan uppercase tracking-wide">{product.tagline}</p>

      <div className="mt-4 flex items-center gap-3 flex-wrap">
        <div className="flex items-center gap-1">
          {[1, 2, 3, 4, 5].map((s) => (
            <Star key={s} size={16} className={s <= Math.round(product.rating) ? 'fill-ng-cyan text-ng-cyan' : 'text-ng-sand'} />
          ))}
        </div>
        <span className="text-sm font-semibold text-ng-navy">{product.rating}</span>
        <span className="text-sm text-ng-muted">({product.reviewCount} reviews)</span>
        <span className="h-4 w-px bg-ng-sand" />
        <span className="text-sm font-medium text-ng-muted">{product.sold}</span>
      </div>

      <p className="mt-5 text-[15px] leading-relaxed text-ng-ink/80">{product.hook}</p>

      <div className="mt-6 flex items-end gap-3">
        <span className="font-display font-extrabold text-4xl text-ng-navy">{product.currency}{inr(product.price)}</span>
        <span className="text-lg text-ng-muted line-through mb-1">{product.currency}{inr(product.mrp)}</span>
        <span className="mb-1.5 bg-ng-navy text-white text-xs font-bold px-2 py-1 rounded-md">{discount}% OFF</span>
      </div>
      <p className="text-xs text-ng-muted mt-1">Inclusive of all taxes</p>

      {/* Colors */}
      <div className="mt-7">
        <p className="text-sm font-semibold text-ng-navy mb-2">Colour: <span className="text-ng-muted font-normal">{product.colors[colorIdx].name}</span></p>
        <div className="flex gap-3">
          {product.colors.map((c, i) => (
            <button
              key={c.name}
              onClick={() => selectColor(i)}
              className={`relative w-14 h-14 rounded-xl overflow-hidden border-2 transition-all ${colorIdx === i ? 'border-ng-navy' : 'border-ng-sand hover:border-ng-cyan'}`}
              title={c.name}
            >
              <img src={c.image} alt={c.name} className="w-full h-full object-contain bg-white p-1" />
              {colorIdx === i && (
                <span className="absolute -top-1.5 -right-1.5 bg-ng-navy text-white rounded-full p-0.5"><Check size={12} /></span>
              )}
            </button>
          ))}
        </div>
      </div>

      {/* Qty + actions */}
      <div className="mt-7 flex items-stretch gap-3">
        <div className="flex items-center border-2 border-ng-sand rounded-full overflow-hidden bg-white">
          <button onClick={() => setQty((q) => Math.max(1, q - 1))} className="px-3.5 h-12 text-ng-navy hover:bg-ng-cream transition-colors" aria-label="Decrease quantity"><Minus size={16} /></button>
          <span className="w-9 text-center font-semibold text-ng-navy">{qty}</span>
          <button onClick={() => setQty((q) => q + 1)} className="px-3.5 h-12 text-ng-navy hover:bg-ng-cream transition-colors" aria-label="Increase quantity"><Plus size={16} /></button>
        </div>
        <button
          onClick={() => onAddToCart(qty, colorIdx)}
          className="flex-1 h-12 rounded-full border-2 border-ng-navy text-ng-navy font-semibold flex items-center justify-center gap-2 hover:bg-ng-navy hover:text-white transition-colors"
        >
          <ShoppingCart size={18} /> Add to Cart
        </button>
        <button
          onClick={onWishlist}
          className={`w-12 h-12 rounded-full border-2 flex items-center justify-center transition-colors ${wishlisted ? 'border-ng-navy bg-ng-navy text-white' : 'border-ng-sand text-ng-navy hover:border-ng-navy'}`}
          aria-label="Add to wishlist"
        >
          <Heart size={18} className={wishlisted ? 'fill-white' : ''} />
        </button>
      </div>

      <button
        onClick={() => onBuyNow(qty, colorIdx)}
        className="mt-3 w-full h-13 py-3.5 rounded-full bg-ng-navy text-white font-semibold flex items-center justify-center gap-2 hover:bg-ng-navy-dark transition-colors"
      >
        <Zap size={18} className="fill-ng-cyan text-ng-cyan" /> Buy Now — {product.currency}{inr(product.price)}
      </button>

      {/* Trust badges */}
      <div className="mt-7 grid grid-cols-2 sm:grid-cols-4 gap-3">
        {trustBadges.map((t) => {
          const Icon = iconMap[t.icon];
          return (
            <div key={t.title} className="flex flex-col items-center text-center gap-1.5 bg-white rounded-xl border border-ng-sand p-3">
              <Icon size={20} className="text-ng-cyan" />
              <span className="text-xs font-bold text-ng-navy leading-tight">{t.title}</span>
              <span className="text-[10px] text-ng-muted leading-tight">{t.sub}</span>
            </div>
          );
        })}
      </div>

      {/* Highlights */}
      <div className="mt-7 bg-white rounded-2xl border border-ng-sand p-5">
        <p className="font-display font-bold text-ng-navy uppercase tracking-wide text-sm mb-3">Why you'll love it</p>
        <ul className="space-y-2.5">
          {product.highlights.map((h) => (
            <li key={h} className="flex gap-2.5 text-sm text-ng-ink/85 leading-snug">
              <span className="mt-0.5 shrink-0 bg-ng-cyan/20 text-ng-navy rounded-full p-0.5"><Check size={13} /></span>
              {h}
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default ProductInfo;
