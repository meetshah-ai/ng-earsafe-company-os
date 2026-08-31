import React, { useState } from "react";
import { Play, ShieldCheck, ExternalLink } from "lucide-react";
import { BRAND } from "../mock";
import { VideoModal, useReveal, SectionEyebrow } from "../lib/ui";
import { useStore } from "../context/StoreContext";

export default function BrandTrustSection() {
  const ref = useReveal();
  const { track } = useStore();
  const [open, setOpen] = useState(false);

  return (
    <section ref={ref} className="reveal mx-auto max-w-6xl px-4 py-14">
      <div className="text-center">
        <SectionEyebrow>The story behind SafeBuds</SectionEyebrow>
        <h2 className="font-lora mt-2 text-2xl text-[#102442] md:text-3xl">
          Two Indian teams. One open-ear mission.
        </h2>
      </div>

      <div className="mt-8 grid gap-4 md:grid-cols-2">
        <div className="flex gap-4 rounded-2xl border border-slate-200 bg-white p-6">
          <img src={BRAND.ngLogo} alt="NG EarSafe logo" loading="lazy" width={56} height={56} className="h-14 w-14 flex-shrink-0 rounded-lg object-contain" />
          <div>
            <h3 className="font-bold text-[#102442]">NG EarSafe</h3>
            <p className="mt-1 text-[15px] leading-relaxed text-slate-600">
              Specialists in open-ear audio — hardware engineered around how ears actually work, with nothing inside the canal.
            </p>
          </div>
        </div>
        <div className="flex gap-4 rounded-2xl border border-slate-200 bg-white p-6">
          <img src={BRAND.wehearLogo} alt="WeHear logo" loading="lazy" width={56} height={56} className="h-14 w-14 flex-shrink-0 rounded-lg object-contain" />
          <div>
            <h3 className="font-bold text-[#102442]">WeHear</h3>
            <p className="mt-1 text-[15px] leading-relaxed text-slate-600">
              Developed the connected hearing technology and AI ecosystem behind SphereLingo™. WeHear was featured on Shark Tank India.
            </p>
            <button
              onClick={() => { setOpen(true); track("product_video_played", { section: "shark_tank" }); }}
              className="mt-3 inline-flex items-center gap-2 text-sm font-semibold text-[#39869B] hover:underline"
            >
              <Play size={15} className="fill-[#39869B]" /> Watch on Shark Tank India
            </button>
          </div>
        </div>
      </div>

      <div className="mt-4 flex items-start gap-3 rounded-2xl bg-[#F4F4F2] p-5">
        <ShieldCheck size={22} className="mt-0.5 flex-shrink-0 text-[#39869B]" />
        <div>
          <div className="font-semibold text-[#102442]">Open-ear design reviewed with hearing comfort in mind</div>
          <p className="mt-1 text-[14px] leading-relaxed text-slate-600">
            SafeBuds keep the ear canal open to avoid the pressure and occlusion of in-ear buds. Full certification details are available on request.
            <a href="#" onClick={(e) => e.preventDefault()} className="ml-1 inline-flex items-center gap-1 text-[#39869B] hover:underline">
              View details <ExternalLink size={12} />
            </a>
          </p>
        </div>
      </div>

      <VideoModal open={open} onClose={() => setOpen(false)} youtubeId={BRAND.sharkTankYoutube} />
    </section>
  );
}
