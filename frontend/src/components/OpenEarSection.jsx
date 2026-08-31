import React from "react";
import { X, Check, Info } from "lucide-react";
import { OPEN_EAR } from "../mock";
import { useReveal, SectionEyebrow } from "../lib/ui";

export default function OpenEarSection() {
  const ref = useReveal();
  return (
    <section ref={ref} className="reveal bg-[#F4F4F2] py-14">
      <div className="mx-auto max-w-6xl px-4">
        <div className="max-w-2xl">
          <SectionEyebrow>Why open ear?</SectionEyebrow>
          <h2 className="font-lora mt-2 text-2xl leading-snug text-[#102442] md:text-3xl">
            Your ears were never meant to stay plugged all day.
          </h2>
        </div>

        <div className="mt-8 grid gap-4 md:grid-cols-2">
          <div className="rounded-2xl border border-slate-200 bg-white p-6">
            <h3 className="text-sm font-bold uppercase tracking-wide text-slate-500">Traditional in-ear</h3>
            <ul className="mt-4 space-y-3">
              {OPEN_EAR.inear.map((t) => (
                <li key={t} className="flex items-start gap-3 text-[15px] text-slate-700">
                  <span className="mt-0.5 flex h-5 w-5 flex-shrink-0 items-center justify-center rounded-full bg-red-100 text-red-500">
                    <X size={13} strokeWidth={3} />
                  </span>
                  {t}
                </li>
              ))}
            </ul>
          </div>
          <div className="rounded-2xl border-2 border-[#54C1C8] bg-white p-6 shadow-sm">
            <h3 className="text-sm font-bold uppercase tracking-wide text-[#39869B]">SafeBuds</h3>
            <ul className="mt-4 space-y-3">
              {OPEN_EAR.safebuds.map((t) => (
                <li key={t} className="flex items-start gap-3 text-[15px] text-[#111827]">
                  <span className="mt-0.5 flex h-5 w-5 flex-shrink-0 items-center justify-center rounded-full bg-[#54C1C8]/20 text-[#39869B]">
                    <Check size={13} strokeWidth={3} />
                  </span>
                  {t}
                </li>
              ))}
            </ul>
          </div>
        </div>

        <p className="mt-6 max-w-3xl text-[15px] leading-relaxed text-slate-600">
          SafeBuds keep the ear canal open and avoid the pressure and occlusion created by in-ear earbuds.
        </p>
        <div className="mt-3 flex items-start gap-2 rounded-xl bg-white p-4 text-sm text-slate-600 ring-1 ring-slate-200">
          <Info size={18} className="mt-0.5 flex-shrink-0 text-[#39869B]" />
          Listening safety still depends on volume and duration. Keep audio at a comfortable level.
        </div>
      </div>
    </section>
  );
}
