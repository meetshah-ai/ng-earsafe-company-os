import React from "react";
import { ThumbsUp, MinusCircle, Check, X } from "lucide-react";
import { POSITIONING } from "../mock";
import { useReveal, SectionEyebrow } from "../lib/ui";

export default function PositioningSection() {
  const ref = useReveal();
  return (
    <section ref={ref} className="reveal mx-auto max-w-6xl px-4 py-14">
      <div className="text-center">
        <SectionEyebrow>Honest positioning</SectionEyebrow>
        <h2 className="mt-2 text-2xl font-bold text-[#102442] md:text-3xl">Is SafeBuds right for you?</h2>
      </div>

      <div className="mt-8 grid gap-4 md:grid-cols-2">
        <div className="rounded-2xl border-2 border-[#54C1C8] bg-white p-6">
          <h3 className="flex items-center gap-2 text-lg font-bold text-[#102442]">
            <ThumbsUp size={20} className="text-[#39869B]" /> Best for
          </h3>
          <ul className="mt-4 space-y-2.5">
            {POSITIONING.bestFor.map((t) => (
              <li key={t} className="flex items-start gap-2 text-[15px] text-[#111827]">
                <Check size={17} className="mt-0.5 flex-shrink-0 text-[#54C1C8]" strokeWidth={3} /> {t}
              </li>
            ))}
          </ul>
        </div>
        <div className="rounded-2xl border border-slate-200 bg-[#F4F4F2] p-6">
          <h3 className="flex items-center gap-2 text-lg font-bold text-slate-600">
            <MinusCircle size={20} className="text-slate-400" /> Not designed for
          </h3>
          <ul className="mt-4 space-y-2.5">
            {POSITIONING.notFor.map((t) => (
              <li key={t} className="flex items-start gap-2 text-[15px] text-slate-600">
                <X size={17} className="mt-0.5 flex-shrink-0 text-slate-400" strokeWidth={3} /> {t}
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
}
