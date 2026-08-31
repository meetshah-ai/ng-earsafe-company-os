import React, { useEffect, useRef } from "react";
import { Check } from "lucide-react";
import { COMPARISON } from "../mock";
import { useReveal, SectionEyebrow } from "../lib/ui";
import { useStore } from "../context/StoreContext";

export default function ComparisonSection() {
  const ref = useReveal();
  const { track } = useStore();
  const seen = useRef(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const obs = new IntersectionObserver(([e]) => {
      if (e.isIntersecting && !seen.current) {
        seen.current = true;
        track("comparison_table_viewed", {}, true);
      }
    }, { threshold: 0.3 });
    obs.observe(el);
    return () => obs.disconnect();
  }, [track, ref]);

  return (
    <section ref={ref} className="reveal bg-[#F4F4F2] py-14">
      <div className="mx-auto max-w-6xl px-4">
        <div className="text-center">
          <SectionEyebrow>Why switch</SectionEyebrow>
          <h2 className="mt-2 text-2xl font-bold text-[#102442] md:text-3xl">
            SafeBuds versus what you use today.
          </h2>
        </div>

        <div className="mt-8 overflow-x-auto no-scrollbar">
          <table className="w-full min-w-[560px] border-collapse overflow-hidden rounded-2xl bg-white text-left text-sm shadow-sm">
            <thead>
              <tr className="bg-[#102442] text-white">
                <th className="p-4 font-semibold"></th>
                {COMPARISON.columns.map((c, i) => (
                  <th key={c} className={`p-4 text-center font-semibold ${i === 2 ? "bg-[#39869B]" : ""}`}>
                    {c}
                  </th>
                ))}
              </tr>
            </thead>
            <tbody>
              {COMPARISON.rows.map((row, ri) => (
                <tr key={row.label} className={ri % 2 ? "bg-[#F4F4F2]" : "bg-white"}>
                  <td className="p-4 font-medium text-[#111827]">{row.label}</td>
                  {row.values.map((v, i) => (
                    <td key={i} className={`p-4 text-center ${i === 2 ? "font-semibold text-[#102442]" : "text-slate-500"}`}>
                      <span className="inline-flex items-center justify-center gap-1">
                        {i === 2 && row.win && <Check size={15} className="text-[#39869B]" strokeWidth={3} />}
                        {v}
                      </span>
                    </td>
                  ))}
                </tr>
              ))}
            </tbody>
          </table>
        </div>
        <p className="mt-3 text-center text-[13px] text-slate-500">Scroll horizontally to compare all columns.</p>
      </div>
    </section>
  );
}
