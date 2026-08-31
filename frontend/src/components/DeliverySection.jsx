import React from "react";
import { Truck, Clock, RotateCcw, ShieldCheck, Wallet, Headphones } from "lucide-react";
import { DELIVERY } from "../mock";
import { useReveal, SectionEyebrow } from "../lib/ui";

const ICONS = [Clock, Truck, Truck, Wallet, RotateCcw, RotateCcw, ShieldCheck, Headphones];

export default function DeliverySection() {
  const ref = useReveal();
  return (
    <section ref={ref} className="reveal bg-[#102442] py-14">
      <div className="mx-auto max-w-6xl px-4">
        <div className="text-center">
          <span className="text-xs font-semibold uppercase tracking-[0.18em] text-[#54C1C8]">Reassurance</span>
          <h2 className="mt-2 text-2xl font-bold text-white md:text-3xl">Delivery, returns & warranty</h2>
        </div>
        <div className="mt-8 grid grid-cols-1 gap-3 sm:grid-cols-2 lg:grid-cols-4">
          {DELIVERY.map((d, i) => {
            const Icon = ICONS[i] || Truck;
            return (
              <div key={d.label} className="rounded-xl bg-white/5 p-4 ring-1 ring-white/10">
                <Icon size={20} className="text-[#54C1C8]" />
                <div className="mt-2 text-[13px] font-semibold uppercase tracking-wide text-slate-400">{d.label}</div>
                <div className="mt-0.5 text-[15px] font-medium text-white">{d.value}</div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
