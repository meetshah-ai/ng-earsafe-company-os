import React from 'react';
import { faqs } from '../../mock/mock';
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from '../ui/accordion';

const FAQ = () => (
  <section className="max-w-3xl mx-auto px-4 md:px-6 py-16 md:py-24">
    <div className="text-center">
      <p className="text-ng-cyan font-display font-bold text-sm tracking-widest uppercase">Good to know</p>
      <h2 className="font-display font-extrabold text-3xl md:text-5xl text-ng-navy uppercase leading-[1.05] mt-3">Questions, answered</h2>
    </div>
    <Accordion type="single" collapsible className="mt-10 space-y-3">
      {faqs.map((f, i) => (
        <AccordionItem key={i} value={`item-${i}`} className="bg-white border border-ng-sand rounded-2xl px-5 overflow-hidden">
          <AccordionTrigger className="text-left font-display font-bold text-ng-navy hover:no-underline py-5">{f.q}</AccordionTrigger>
          <AccordionContent className="text-ng-ink/75 text-sm leading-relaxed pb-5">{f.a}</AccordionContent>
        </AccordionItem>
      ))}
    </Accordion>
  </section>
);

export default FAQ;
