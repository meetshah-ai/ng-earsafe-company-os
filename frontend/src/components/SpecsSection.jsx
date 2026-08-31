import React from "react";
import { SPECS } from "../mock";
import { useReveal, SectionEyebrow } from "../lib/ui";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "./ui/accordion";

export default function SpecsSection() {
  const ref = useReveal();
  return (
    <section ref={ref} className="reveal mx-auto max-w-4xl px-4 py-14">
      <div className="text-center">
        <SectionEyebrow>The details</SectionEyebrow>
        <h2 className="mt-2 text-2xl font-bold text-[#102442] md:text-3xl">Full specifications</h2>
      </div>

      {/* Desktop table */}
      <div className="mt-8 hidden overflow-hidden rounded-2xl border border-slate-200 md:block">
        <table className="w-full text-left text-[15px]">
          <tbody>
            {SPECS.map((s, i) => (
              <tr key={s.k} className={i % 2 ? "bg-[#F4F4F2]" : "bg-white"}>
                <td className="w-1/2 p-3 font-medium text-slate-500">{s.k}</td>
                <td className="p-3 font-semibold text-[#111827]">{s.v}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      {/* Mobile accordion */}
      <div className="mt-6 md:hidden">
        <Accordion type="single" collapsible defaultValue="specs">
          <AccordionItem value="specs" className="rounded-xl border border-slate-200 px-4">
            <AccordionTrigger className="text-base font-semibold text-[#102442]">
              View all specifications
            </AccordionTrigger>
            <AccordionContent>
              <div className="divide-y divide-slate-100">
                {SPECS.map((s) => (
                  <div key={s.k} className="flex justify-between gap-4 py-2.5 text-sm">
                    <span className="text-slate-500">{s.k}</span>
                    <span className="text-right font-semibold text-[#111827]">{s.v}</span>
                  </div>
                ))}
              </div>
            </AccordionContent>
          </AccordionItem>
        </Accordion>
      </div>
    </section>
  );
}
