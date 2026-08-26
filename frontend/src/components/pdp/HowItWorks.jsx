import React from 'react';
import { steps, lifestyleImage } from '../../mock/mock';

const HowItWorks = () => (
  <section className="bg-ng-sand/60">
    <div className="max-w-7xl mx-auto px-4 md:px-6 py-16 md:py-24">
      <div className="text-center max-w-2xl mx-auto">
        <p className="text-ng-cyan font-display font-bold text-sm tracking-widest uppercase">Your 10-minute ritual</p>
        <h2 className="font-display font-extrabold text-3xl md:text-5xl text-ng-navy uppercase leading-[1.05] mt-3">How it works</h2>
        <p className="mt-4 text-ng-ink/70 text-[15px]">Three simple steps between you and a calmer, healthier-feeling scalp.</p>
      </div>

      <div className="grid md:grid-cols-3 gap-5 mt-12">
        {steps.map((s) => (
          <div key={s.n} className="bg-white rounded-2xl border border-ng-sand overflow-hidden">
            <div className="aspect-[4/3] bg-ng-cream overflow-hidden">
              <img src={s.image} alt={s.title} className="w-full h-full object-cover" />
            </div>
            <div className="p-6">
              <span className="font-display font-extrabold text-3xl text-ng-cyan">{s.n}</span>
              <h3 className="font-display font-bold text-xl text-ng-navy uppercase mt-1">{s.title}</h3>
              <p className="mt-2 text-sm text-ng-ink/70 leading-relaxed">{s.desc}</p>
            </div>
          </div>
        ))}
      </div>

      <div className="mt-6 relative rounded-2xl overflow-hidden bg-ng-navy">
        <img src={lifestyleImage} alt="NG Root Revive in use" className="w-full h-full object-cover absolute inset-0 opacity-40" />
        <div className="relative px-6 md:px-14 py-14 md:py-20 max-w-2xl">
          <p className="font-display font-extrabold text-2xl md:text-4xl text-white uppercase leading-tight">
            “Feed your roots. Feel the calm.”
          </p>
          <p className="mt-4 text-white/80 text-[15px] leading-relaxed">Just like our open-ear philosophy — comfort should never be a trade-off. Ten minutes a day is all it takes.</p>
        </div>
      </div>
    </div>
  </section>
);

export default HowItWorks;
