import React, { useState } from "react";
import { CheckCircle2, MessageSquareReply } from "lucide-react";
import { REVIEWS } from "../mock";
import { Stars, useReveal, SectionEyebrow } from "../lib/ui";
import { useStore } from "../context/StoreContext";

const FILTERS = [
  { key: "all", label: "All" },
  { key: "comfort", label: "Comfort" },
  { key: "calls", label: "Calls" },
  { key: "fit", label: "Fit" },
  { key: "sound", label: "Sound" },
];

function ReviewCard({ r }) {
  return (
    <div className="rounded-2xl border border-slate-200 bg-white p-5">
      <div className="flex items-center justify-between">
        <Stars value={r.rating} size={15} />
        {r.verified && (
          <span className="flex items-center gap-1 text-[12px] font-medium text-[#39869B]">
            <CheckCircle2 size={13} /> Verified buyer
          </span>
        )}
      </div>
      <h4 className="mt-2 font-bold text-[#102442]">{r.title}</h4>
      <p className="mt-1 text-[15px] leading-relaxed text-slate-600">{r.body}</p>
      <div className="mt-3 text-[13px] font-medium text-slate-400">— {r.name}</div>
      {r.response && (
        <div className="mt-3 rounded-lg bg-[#F4F4F2] p-3 text-[13px] text-slate-600">
          <div className="mb-1 flex items-center gap-1 font-semibold text-[#102442]">
            <MessageSquareReply size={14} /> NG EarSafe response
          </div>
          {r.response}
        </div>
      )}
    </div>
  );
}

export default function ReviewsSection() {
  const ref = useReveal();
  const { track } = useStore();
  const [filter, setFilter] = useState("all");

  const list = filter === "all" ? REVIEWS.all : REVIEWS.all.filter((r) => r.tag === filter);
  const maxCount = Math.max(...Object.values(REVIEWS.distribution));

  return (
    <section ref={ref} id="reviews" className="reveal mx-auto max-w-6xl px-4 py-14">
      <div className="text-center">
        <SectionEyebrow>Real people. Real ears.</SectionEyebrow>
        <h2 className="mt-2 text-2xl font-bold text-[#102442] md:text-3xl">
          See why customers switched to open ear.
        </h2>
      </div>

      <div className="mt-8 grid gap-8 md:grid-cols-[280px_1fr]">
        {/* Summary */}
        <div>
          <div className="rounded-2xl border border-slate-200 bg-[#F4F4F2] p-5 text-center">
            <div className="text-4xl font-bold text-[#102442]">{REVIEWS.average}</div>
            <Stars value={REVIEWS.average} size={20} className="mt-1 justify-center" />
            <div className="mt-1 text-sm text-slate-500">Based on {REVIEWS.total} reviews</div>
            <div className="mt-4 space-y-1.5">
              {[5, 4, 3, 2, 1].map((star) => (
                <div key={star} className="flex items-center gap-2 text-[13px]">
                  <span className="w-8 text-slate-500">{star} ★</span>
                  <div className="h-2 flex-1 overflow-hidden rounded-full bg-slate-200">
                    <div className="h-full rounded-full bg-[#54C1C8]" style={{ width: `${(REVIEWS.distribution[star] / maxCount) * 100}%` }} />
                  </div>
                  <span className="w-5 text-right text-slate-500">{REVIEWS.distribution[star]}</span>
                </div>
              ))}
            </div>
          </div>
          <div className="mt-4 flex gap-2">
            {REVIEWS.photos.map((p, i) => (
              <img key={i} src={p} alt="Customer photo" loading="lazy" width={90} height={90} className="h-20 w-20 rounded-lg object-cover" />
            ))}
          </div>
        </div>

        {/* Reviews */}
        <div>
          <div className="mb-4 flex flex-wrap gap-2">
            {FILTERS.map((f) => (
              <button
                key={f.key}
                onClick={() => setFilter(f.key)}
                className={`min-h-[36px] rounded-full px-4 py-1.5 text-sm font-medium transition-colors ${
                  filter === f.key ? "bg-[#102442] text-white" : "bg-white text-[#102442] ring-1 ring-slate-200 hover:ring-[#39869B]"
                }`}
              >
                {f.label}
              </button>
            ))}
          </div>

          <div className="mb-4 grid gap-4 sm:grid-cols-3">
            {REVIEWS.featured.map((r, i) => <ReviewCard key={`f${i}`} r={r} />)}
          </div>

          <div className="grid gap-4 sm:grid-cols-2">
            {list.map((r, i) => <ReviewCard key={i} r={r} />)}
            {list.length === 0 && (
              <p className="text-sm text-slate-500">No reviews for this filter yet.</p>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}
