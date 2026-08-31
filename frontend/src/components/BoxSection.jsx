import React from "react";
import { Package, Check } from "lucide-react";
import { BOX_ITEMS, GALLERY } from "../mock";
import { useReveal, SectionEyebrow } from "../lib/ui";

export default function BoxSection() {
  const ref = useReveal();
  return (
    <section ref={ref} className="reveal bg-[#F4F4F2] py-14">
      <div className="mx-auto grid max-w-6xl items-center gap-8 px-4 md:grid-cols-2">
        <div className="overflow-hidden rounded-2xl border border-slate-200 bg-white">
          <img
            src={GALLERY[6].src}
            alt="Everything included in the SafeBuds box"
            loading="lazy"
            width={800}
            height={800}
            className="aspect-square w-full object-cover"
          />
        </div>
        <div>
          <SectionEyebrow>In the box</SectionEyebrow>
          <h2 className="mt-2 flex items-center gap-2 text-2xl font-bold text-[#102442] md:text-3xl">
            <Package size={26} className="text-[#39869B]" /> What is in the box
          </h2>
          <ul className="mt-5 space-y-3">
            {BOX_ITEMS.map((item) => (
              <li key={item} className="flex items-start gap-3 text-[16px] text-[#111827]">
                <span className="mt-0.5 flex h-6 w-6 flex-shrink-0 items-center justify-center rounded-full bg-[#54C1C8]/20 text-[#39869B]">
                  <Check size={15} strokeWidth={3} />
                </span>
                {item}
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
}
