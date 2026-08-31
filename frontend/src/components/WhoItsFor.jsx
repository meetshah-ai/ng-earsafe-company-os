import React, { useState } from "react";
import { Check } from "lucide-react";
import { PANELS } from "../mock";
import { useReveal, SectionEyebrow } from "../lib/ui";

const CONTENT = [
  {
    kicker: "The WFH Professional",
    title: "6th meeting. Ears still fine. Notes already written.",
    body: "SafeBuds sit outside your ear canal, so back-to-back calls do not leave the pressure-and-heat buildup you get with in-ear buds. And AI notes are captured in real time — so you stop choosing between speaking and writing.",
    points: ["Open ear — comfortable at 5pm", "Quad ENC mic isolates your voice", "Auto meeting notes after every call", "35 hours total battery"],
  },
  {
    kicker: "The Multilingual Professional",
    title: "Mumbai meeting. Tokyo client. Zero awkward pauses.",
    body: "Live translation converts a conversation into your language as it happens — directly into your ear. Whether family paperwork, a supplier call or an investor pitch, the language gap closes before it opens.",
    points: ["100+ languages incl. major Indian ones", "Works on Zoom, Teams, Meet, WhatsApp", "One-to-one and group modes", "Translated transcript saved"],
  },
  {
    kicker: "The Entertainment Audience",
    title: "Stay in the scene — and still hear the doorbell.",
    body: "Most earphones force a trade-off: full audio or full awareness. SafeBuds give you both — deep immersion in a movie or game while still hearing your phone, your family, or the delivery at the door.",
    points: ["Custom EQ via the WeHear app", "9g open fit for long sessions", "Stay aware of your surroundings", "Bluetooth 5.4 multipoint"],
  },
  {
    kicker: "The Aware Parent",
    title: "Long study days. The one you give them.",
    body: "SafeBuds rest outside the ear canal entirely — nothing goes in. No pressure, no heat — and they still hear you when you call them for dinner.",
    points: ["Nothing inside the ear canal", "Comfortable for long study sessions", "9g light open fit", "They still hear ambient sound"],
  },
];

export default function WhoItsFor() {
  const ref = useReveal();
  const [tab, setTab] = useState(0);
  const c = CONTENT[tab];
  return (
    <section ref={ref} className="reveal mx-auto max-w-6xl px-4 py-14">
      <div className="max-w-2xl">
        <SectionEyebrow>Who it is for</SectionEyebrow>
        <h2 className="mt-2 text-2xl font-bold text-[#102442] md:text-3xl">Different people. Same open ear.</h2>
      </div>

      <div className="mt-6 flex flex-wrap gap-2">
        {PANELS.map((p, i) => (
          <button
            key={p.tab}
            onClick={() => setTab(i)}
            className={`min-h-[40px] rounded-full px-4 py-2 text-sm font-medium transition-colors ${
              tab === i ? "bg-[#102442] text-white" : "bg-[#F4F4F2] text-[#102442] hover:bg-slate-200"
            }`}
          >
            {p.tab}
          </button>
        ))}
      </div>

      <div className="mt-6 grid items-center gap-8 md:grid-cols-2">
        <div className="overflow-hidden rounded-2xl border border-slate-200 bg-[#F4F4F2]">
          <img src={PANELS[tab].image} alt={c.kicker} loading="lazy" width={800} height={600} className="aspect-[4/3] w-full object-cover" />
        </div>
        <div>
          <div className="text-sm font-semibold uppercase tracking-wide text-[#39869B]">{c.kicker}</div>
          <h3 className="font-lora mt-2 text-xl leading-snug text-[#102442] md:text-2xl">{c.title}</h3>
          <p className="mt-3 text-[15px] leading-relaxed text-slate-600">{c.body}</p>
          <ul className="mt-4 space-y-2">
            {c.points.map((p) => (
              <li key={p} className="flex items-start gap-2 text-[15px] text-[#111827]">
                <Check size={17} className="mt-0.5 flex-shrink-0 text-[#54C1C8]" strokeWidth={3} /> {p}
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
}
