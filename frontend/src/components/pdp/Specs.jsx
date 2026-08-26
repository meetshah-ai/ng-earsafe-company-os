import React from 'react';
import { specs, inBox } from '../../mock/mock';
import { PackageCheck } from 'lucide-react';

const Specs = () => (
  <section className="max-w-7xl mx-auto px-4 md:px-6 py-16 md:py-24">
    <div className="grid lg:grid-cols-2 gap-10 lg:gap-16 items-start">
      <div>
        <p className="text-ng-cyan font-display font-bold text-sm tracking-widest uppercase">The details</p>
        <h2 className="font-display font-extrabold text-3xl md:text-5xl text-ng-navy uppercase leading-[1.05] mt-3">Specifications</h2>
        <div className="mt-8 rounded-2xl border border-ng-sand overflow-hidden bg-white">
          {specs.map((row, i) => (
            <div key={row.k} className={`flex justify-between px-5 py-3.5 text-sm ${i % 2 ? 'bg-ng-cream/60' : 'bg-white'}`}>
              <span className="text-ng-muted font-medium">{row.k}</span>
              <span className="text-ng-navy font-semibold text-right">{row.v}</span>
            </div>
          ))}
        </div>
      </div>

      <div className="lg:sticky lg:top-24">
        <div className="bg-ng-navy rounded-2xl p-8 text-white">
          <div className="flex items-center gap-3">
            <span className="w-11 h-11 rounded-xl bg-ng-cyan/20 flex items-center justify-center text-ng-cyan"><PackageCheck size={22} /></span>
            <h3 className="font-display font-bold text-xl uppercase">What's in the box</h3>
          </div>
          <ul className="mt-6 space-y-3">
            {inBox.map((item) => (
              <li key={item} className="flex items-center gap-3 text-sm text-white/90 border-b border-white/10 pb-3 last:border-0">
                <span className="w-1.5 h-1.5 rounded-full bg-ng-cyan" />{item}
              </li>
            ))}
          </ul>
          <div className="mt-6 bg-white/5 rounded-xl p-4">
            <p className="text-ng-cyan font-display font-bold uppercase text-sm">Made for India</p>
            <p className="text-white/70 text-sm mt-1 leading-relaxed">Backed by a 1-year warranty, free prepaid shipping and easy 7-day returns — nationwide.</p>
          </div>
        </div>
      </div>
    </div>
  </section>
);

export default Specs;
