import React from "react";
import { Ear, Languages, NotebookPen, BatteryFull } from "lucide-react";
import { PROOF_STRIP } from "../mock";
import { useReveal } from "../lib/ui";

const ICONS = { Ear, Languages, NotebookPen, BatteryFull };

export default function ProofStrip() {
  const ref = useReveal();
  return (
    <section ref={ref} className="reveal bg-[#102442] py-8">
      <div className="mx-auto grid max-w-6xl grid-cols-2 gap-3 px-4 md:grid-cols-4 md:gap-5">
        {PROOF_STRIP.map((p) => {
          const Icon = ICONS[p.icon];
          return (
            <div key={p.title} className="flex flex-col gap-2 rounded-xl bg-white/5 p-4 ring-1 ring-white/10">
              <Icon size={24} className="text-[#54C1C8]" />
              <div className="text-sm font-bold tracking-wide text-white">{p.title}</div>
              <div className="text-[13px] leading-snug text-slate-300">{p.copy}</div>
            </div>
          );
        })}
      </div>
    </section>
  );
}
