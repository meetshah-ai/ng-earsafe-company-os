import React from 'react';
import { Vibrate, Droplets, Sun, BatteryCharging, Sparkles, Waves } from 'lucide-react';
import { features } from '../../mock/mock';

const iconMap = { Vibrate, Droplets, Sun, BatteryCharging, Sparkles, Waves };

const Features = () => (
  <section className="max-w-7xl mx-auto px-4 md:px-6 py-16 md:py-24">
    <div className="max-w-2xl">
      <p className="text-ng-cyan font-display font-bold text-sm tracking-widest uppercase">The tech inside</p>
      <h2 className="font-display font-extrabold text-3xl md:text-5xl text-ng-navy uppercase leading-[1.05] mt-3">
        A scalp spa,<br /><span className="text-ng-cyan">engineered</span> to go anywhere
      </h2>
      <p className="mt-4 text-ng-ink/70 text-[15px] leading-relaxed">Same obsession with comfort and craft that made our open-ear range — now focused on your scalp and roots.</p>
    </div>

    <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-5 mt-10">
      {features.map((f) => {
        const Icon = iconMap[f.icon];
        return (
          <div key={f.title} className="group bg-white rounded-2xl border border-ng-sand p-6 hover:border-ng-cyan hover:shadow-lg hover:shadow-ng-navy/5 transition-all">
            <div className="w-12 h-12 rounded-xl bg-ng-cream flex items-center justify-center text-ng-navy group-hover:bg-ng-navy group-hover:text-ng-cyan transition-colors">
              <Icon size={22} />
            </div>
            <h3 className="font-display font-bold text-lg text-ng-navy mt-4 uppercase tracking-tight">{f.title}</h3>
            <p className="mt-2 text-sm text-ng-ink/70 leading-relaxed">{f.desc}</p>
          </div>
        );
      })}
    </div>
  </section>
);

export default Features;
