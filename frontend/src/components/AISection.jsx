import React from "react";
import { Check } from "lucide-react";
import { AI_CARDS } from "../mock";
import { useReveal, SectionEyebrow } from "../lib/ui";

export default function AISection() {
  const ref = useReveal();
  return (
    <section ref={ref} className="reveal mx-auto max-w-6xl px-4 py-14">
      <div className="max-w-2xl">
        <SectionEyebrow>AI inside</SectionEyebrow>
        <h2 className="mt-2 text-2xl font-bold text-[#102442] md:text-3xl">
          Earbuds that do more than play audio.
        </h2>
      </div>

      <div className="mt-8 grid gap-6 md:grid-cols-2">
        {AI_CARDS.map((c) => (
          <div key={c.title} className="group overflow-hidden rounded-2xl border border-slate-200 bg-white transition-shadow hover:shadow-lg">
            <div className="relative aspect-[4/3] w-full overflow-hidden bg-[#F4F4F2]">
              <img src={c.image} alt={`${c.title} in the WeHear app`} loading="lazy" width={800} height={600} className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105" />
            </div>
            <div className="p-6">
              <h3 className="text-xl font-bold text-[#102442]">{c.title}</h3>
              <p className="mt-2 text-[15px] leading-relaxed text-slate-600">{c.copy}</p>
              <ul className="mt-4 space-y-2">
                {c.benefits.map((b) => (
                  <li key={b} className="flex items-start gap-2 text-[15px] text-[#111827]">
                    <Check size={17} className="mt-0.5 flex-shrink-0 text-[#54C1C8]" strokeWidth={3} /> {b}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
