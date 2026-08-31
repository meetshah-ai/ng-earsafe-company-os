import React from "react";
import { FAQS } from "../mock";
import { useReveal, SectionEyebrow } from "../lib/ui";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "./ui/accordion";
import { useStore } from "../context/StoreContext";

export default function FaqSection() {
  const ref = useReveal();
  const { track } = useStore();
  return (
    <section ref={ref} className="reveal mx-auto max-w-3xl px-4 py-14">
      <div className="text-center">
        <SectionEyebrow>Before you buy</SectionEyebrow>
        <h2 className="mt-2 text-2xl font-bold text-[#102442] md:text-3xl">Honest answers.</h2>
      </div>

      <Accordion
        type="single"
        collapsible
        className="mt-8 space-y-3"
        onValueChange={(v) => v && track("faq_opened", { question: v })}
      >
        {FAQS.map((f, i) => (
          <AccordionItem
            key={i}
            value={`q${i}`}
            className="overflow-hidden rounded-xl border border-slate-200 bg-white px-4"
          >
            <AccordionTrigger className="py-4 text-left text-[15px] font-semibold text-[#102442] hover:no-underline">
              {f.q}
            </AccordionTrigger>
            <AccordionContent className="pb-4 text-[15px] leading-relaxed text-slate-600">
              {f.a}
            </AccordionContent>
          </AccordionItem>
        ))}
      </Accordion>
    </section>
  );
}
