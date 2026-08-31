import React, { useState, useRef, useEffect } from "react";
import { Play, ZoomIn, ChevronLeft, ChevronRight } from "lucide-react";
import { GALLERY } from "../mock";
import { VideoModal } from "../lib/ui";
import { useStore } from "../context/StoreContext";
import { Dialog, DialogContent } from "./ui/dialog";

export default function Gallery() {
  const { track } = useStore();
  const [active, setActive] = useState(0);
  const [videoOpen, setVideoOpen] = useState(false);
  const [zoomOpen, setZoomOpen] = useState(false);
  const scrollerRef = useRef(null);
  const current = GALLERY[active];

  const go = (idx) => {
    const clamped = Math.max(0, Math.min(GALLERY.length - 1, idx));
    setActive(clamped);
    track("gallery_image_changed", { index: clamped });
  };

  // sync active index while swiping on mobile
  const onScroll = () => {
    const el = scrollerRef.current;
    if (!el) return;
    const idx = Math.round(el.scrollLeft / el.clientWidth);
    if (idx !== active) setActive(idx);
  };

  useEffect(() => {
    const el = scrollerRef.current;
    if (el) el.scrollTo({ left: active * el.clientWidth, behavior: "smooth" });
  }, [active]);

  const openMedia = () => {
    if (current.type === "video") {
      setVideoOpen(true);
      track("product_video_played", { index: active });
    } else {
      setZoomOpen(true);
    }
  };

  return (
    <div className="w-full">
      {/* Main viewer */}
      <div className="relative overflow-hidden rounded-2xl bg-[#F4F4F2] border border-slate-200">
        <div
          ref={scrollerRef}
          onScroll={onScroll}
          className="flex snap-x snap-mandatory overflow-x-auto no-scrollbar"
        >
          {GALLERY.map((m, i) => (
            <div key={i} className="relative w-full flex-shrink-0 snap-center">
              <div className="relative aspect-square w-full">
                <img
                  src={m.src}
                  alt={m.alt}
                  width={1200}
                  height={1200}
                  loading={i === 0 ? "eager" : "lazy"}
                  className="h-full w-full object-cover"
                />
                {m.type === "video" && (
                  <button
                    onClick={openMedia}
                    aria-label={m.label || "Play video"}
                    className="absolute inset-0 flex items-center justify-center bg-black/20"
                  >
                    <span className="play-pulse flex h-16 w-16 items-center justify-center rounded-full bg-white/95 text-[#102442] shadow-lg">
                      <Play size={26} className="ml-1 fill-[#102442]" />
                    </span>
                  </button>
                )}
                {m.type === "image" && (
                  <button
                    onClick={openMedia}
                    aria-label="Zoom image"
                    className="absolute bottom-3 right-3 rounded-full bg-white/90 p-2 text-[#102442] shadow hover:bg-white"
                  >
                    <ZoomIn size={18} />
                  </button>
                )}
              </div>
            </div>
          ))}
        </div>

        {/* Arrows (desktop) */}
        <button
          onClick={() => go(active - 1)}
          disabled={active === 0}
          aria-label="Previous image"
          className="absolute left-3 top-1/2 hidden -translate-y-1/2 rounded-full bg-white/90 p-2 text-[#102442] shadow hover:bg-white disabled:opacity-30 md:block"
        >
          <ChevronLeft size={20} />
        </button>
        <button
          onClick={() => go(active + 1)}
          disabled={active === GALLERY.length - 1}
          aria-label="Next image"
          className="absolute right-3 top-1/2 hidden -translate-y-1/2 rounded-full bg-white/90 p-2 text-[#102442] shadow hover:bg-white disabled:opacity-30 md:block"
        >
          <ChevronRight size={20} />
        </button>

        {/* Count badge */}
        <div className="absolute left-3 top-3 rounded-full bg-black/60 px-3 py-1 text-xs font-medium text-white">
          {active + 1} / {GALLERY.length}
        </div>
      </div>

      {/* Thumbnails */}
      <div className="mt-3 flex gap-2 overflow-x-auto no-scrollbar">
        {GALLERY.map((m, i) => (
          <button
            key={i}
            onClick={() => go(i)}
            aria-label={`View ${m.alt}`}
            className={`relative h-16 w-16 flex-shrink-0 overflow-hidden rounded-lg border-2 transition-colors ${
              i === active ? "border-[#102442]" : "border-transparent opacity-70 hover:opacity-100"
            }`}
          >
            <img src={m.src} alt="" width={120} height={120} loading="lazy" className="h-full w-full object-cover" />
            {m.type === "video" && (
              <span className="absolute inset-0 flex items-center justify-center bg-black/30">
                <Play size={14} className="fill-white text-white" />
              </span>
            )}
          </button>
        ))}
      </div>

      <VideoModal open={videoOpen} onClose={() => setVideoOpen(false)} youtubeId={current.youtube || "l5M6NMpJGQY"} />

      <Dialog open={zoomOpen} onOpenChange={setZoomOpen}>
        <DialogContent className="max-w-4xl p-2">
          <img src={current.src} alt={current.alt} className="h-full w-full rounded-lg object-contain" />
        </DialogContent>
      </Dialog>
    </div>
  );
}
