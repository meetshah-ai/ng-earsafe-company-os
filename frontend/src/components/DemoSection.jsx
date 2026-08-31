import React, { useState } from "react";
import { Play, Smartphone, Phone, Sparkles, Apple } from "lucide-react";
import { GALLERY, BRAND } from "../mock";
import { VideoModal, useReveal, SectionEyebrow } from "../lib/ui";
import { useStore } from "../context/StoreContext";

export default function DemoSection() {
  const { track } = useStore();
  const [open, setOpen] = useState(false);
  const ref = useReveal();
  const poster = GALLERY[1].src;

  const play = () => {
    setOpen(true);
    track("product_video_played", { section: "demo" });
  };

  return (
    <section ref={ref} className="reveal mx-auto max-w-6xl px-4 py-14">
      <div className="text-center">
        <SectionEyebrow>See it work</SectionEyebrow>
        <h2 className="mt-2 text-2xl font-bold text-[#102442] md:text-3xl">
          See SafeBuds work in 20 seconds.
        </h2>
      </div>

      <div className="mx-auto mt-6 max-w-3xl">
        <button
          onClick={play}
          aria-label="Play product demonstration video"
          className="group relative block w-full overflow-hidden rounded-2xl border border-slate-200"
        >
          <div className="relative aspect-video w-full">
            <img src={poster} alt="SafeBuds product demonstration" loading="lazy" width={1200} height={675} className="h-full w-full object-cover" />
            <span className="absolute inset-0 flex items-center justify-center bg-black/25 transition-colors group-hover:bg-black/35">
              <span className="play-pulse flex h-20 w-20 items-center justify-center rounded-full bg-white/95 text-[#102442] shadow-xl">
                <Play size={30} className="ml-1 fill-[#102442]" />
              </span>
            </span>
          </div>
        </button>

        <div className="mt-5 grid grid-cols-1 gap-3 sm:grid-cols-2">
          {[
            { icon: Smartphone, t: "Works with iOS and Android" },
            { icon: Phone, t: "Works with calls and in-person conversations" },
            { icon: Sparkles, t: "Translation and notes in the WeHear app" },
            { icon: Sparkles, t: "No subscription required" },
          ].map(({ icon: Icon, t }) => (
            <div key={t} className="flex items-center gap-2 text-[15px] text-[#111827]">
              <Icon size={18} className="flex-shrink-0 text-[#39869B]" /> {t}
            </div>
          ))}
        </div>

        <div className="mt-5 flex flex-wrap justify-center gap-3">
          <a href="#" onClick={(e) => e.preventDefault()} className="flex items-center gap-2 rounded-xl bg-[#102442] px-4 py-2 text-sm font-medium text-white hover:bg-[#0b1a30]">
            <Apple size={18} /> App Store
          </a>
          <a href="#" onClick={(e) => e.preventDefault()} className="flex items-center gap-2 rounded-xl bg-[#102442] px-4 py-2 text-sm font-medium text-white hover:bg-[#0b1a30]">
            <Play size={16} className="fill-white" /> Google Play
          </a>
        </div>
      </div>

      <VideoModal open={open} onClose={() => setOpen(false)} youtubeId={BRAND.sharkTankYoutube} />
    </section>
  );
}
