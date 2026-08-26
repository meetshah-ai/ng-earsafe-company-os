import React, { useState } from 'react';
import { Plus, Check, ShoppingCart } from 'lucide-react';
import { bundle } from '../../mock/mock';

const inr = (n) => n.toLocaleString('en-IN');

const BundleOffer = ({ onAddBundle }) => {
  // required item always selected; optional items toggleable
  const [selected, setSelected] = useState(bundle.items.map((it) => true));

  const toggle = (i) => {
    if (bundle.items[i].required) return;
    setSelected((s) => s.map((v, idx) => (idx === i ? !v : v)));
  };

  const chosen = bundle.items.filter((_, i) => selected[i]);
  const addOns = bundle.items.filter((it, i) => selected[i] && !it.required);

  const subtotal = chosen.reduce((sum, it) => sum + it.price, 0);
  const mrpTotal = chosen.reduce((sum, it) => sum + it.mrp, 0);
  // extra combo discount only on add-on items
  const comboSaving = Math.round(addOns.reduce((sum, it) => sum + it.price, 0) * (bundle.extraSavingPct / 100));
  const total = subtotal - comboSaving;
  const totalSaving = mrpTotal - total;

  return (
    <section className="max-w-7xl mx-auto px-4 md:px-6 py-14 md:py-20">
      <div className="bg-white rounded-3xl border border-ng-sand p-6 md:p-10">
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-3 mb-8">
          <div>
            <p className="text-ng-cyan font-display font-bold text-sm tracking-widest uppercase">Complete the ritual</p>
            <h2 className="font-display font-extrabold text-3xl md:text-4xl text-ng-navy uppercase leading-tight mt-2">Frequently bought together</h2>
          </div>
          <span className="self-start md:self-auto bg-ng-cyan/20 text-ng-navy text-xs font-bold px-3 py-1.5 rounded-full">SAVE EXTRA {bundle.extraSavingPct}% ON THE COMBO</span>
        </div>

        <div className="grid lg:grid-cols-[1fr_auto] gap-8 items-center">
          {/* Items with + separators */}
          <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-3 sm:gap-1">
            {bundle.items.map((it, i) => (
              <React.Fragment key={it.id}>
                <button
                  onClick={() => toggle(i)}
                  className={`relative flex-1 text-left rounded-2xl border-2 p-4 transition-all ${selected[i] ? 'border-ng-navy bg-ng-cream/40' : 'border-ng-sand bg-white opacity-70'} ${it.required ? 'cursor-default' : 'cursor-pointer hover:border-ng-cyan'}`}
                >
                  <span className={`absolute top-3 right-3 w-5 h-5 rounded-md flex items-center justify-center border-2 ${selected[i] ? 'bg-ng-navy border-ng-navy text-white' : 'border-ng-sand text-transparent'}`}>
                    <Check size={13} />
                  </span>
                  <div className="aspect-square w-full rounded-xl overflow-hidden bg-white border border-ng-sand mb-3">
                    <img src={it.image} alt={it.name} className="w-full h-full object-contain p-2" />
                  </div>
                  <span className="text-[10px] font-bold tracking-widest text-ng-cyan uppercase">{it.tag}</span>
                  <p className="font-display font-bold text-ng-navy text-sm leading-tight mt-0.5">{it.name}</p>
                  <div className="mt-1.5 flex items-center gap-1.5">
                    <span className="font-bold text-ng-navy text-sm">₹{inr(it.price)}</span>
                    <span className="text-xs text-ng-muted line-through">₹{inr(it.mrp)}</span>
                  </div>
                </button>
                {i < bundle.items.length - 1 && (
                  <span className="self-center text-ng-muted shrink-0 py-1 sm:py-0"><Plus size={22} /></span>
                )}
              </React.Fragment>
            ))}
          </div>

          {/* Summary */}
          <div className="lg:w-72 bg-ng-navy rounded-2xl p-6 text-white">
            <p className="text-xs tracking-widest uppercase text-white/60">{chosen.length} item{chosen.length > 1 ? 's' : ''} selected</p>
            <div className="mt-2 flex items-end gap-2">
              <span className="font-display font-extrabold text-4xl">₹{inr(total)}</span>
              <span className="text-white/50 line-through mb-1 text-sm">₹{inr(mrpTotal)}</span>
            </div>
            <p className="text-ng-cyan text-sm font-semibold mt-1">You save ₹{inr(totalSaving)}</p>
            <button
              onClick={() => onAddBundle(chosen)}
              className="mt-5 w-full h-12 rounded-full bg-ng-cyan text-ng-navy font-bold flex items-center justify-center gap-2 hover:bg-ng-cyan-soft transition-colors"
            >
              <ShoppingCart size={18} /> Add bundle to cart
            </button>
            <p className="text-white/50 text-[11px] text-center mt-3">Free prepaid shipping · COD available</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default BundleOffer;
