import React, { useEffect, useRef, useState } from "react";
import { Star, X } from "lucide-react";
import { Dialog, DialogContent } from "../components/ui/dialog";

export const formatINR = (n) =>
  "\u20b9" + Number(n).toLocaleString("en-IN");

export function Stars({ value = 0, size = 16, className = "" }) {
  const full = Math.floor(value);
  const frac = value - full;
  return (
    <span className={`inline-flex items-center ${className}`} aria-hidden="true">
      {[0, 1, 2, 3, 4].map((i) => {
        const fill = i < full ? 1 : i === full ? frac : 0;
        return (
          <span key={i} className="relative" style={{ width: size, height: size }}>
            <Star size={size} className="absolute text-slate-300" strokeWidth={1.5} />
            <span className="absolute overflow-hidden" style={{ width: `${fill * 100}%`, height: size }}>
              <Star size={size} className="text-[#54C1C8] fill-[#54C1C8]" strokeWidth={1.5} />
            </span>
          </span>
        );
      })}
    </span>
  );
}

export function useReveal() {
  const ref = useRef(null);
  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const obs = new IntersectionObserver(
      (entries) => {
        entries.forEach((e) => {
          if (e.isIntersecting) {
            e.target.classList.add("in-view");
            obs.unobserve(e.target);
          }
        });
      },
      { threshold: 0.12 }
    );
    obs.observe(el);
    return () => obs.disconnect();
  }, []);
  return ref;
}

export function VideoModal({ open, onClose, youtubeId }) {
  return (
    <Dialog open={open} onOpenChange={(o) => !o && onClose()}>
      <DialogContent className="max-w-3xl p-0 overflow-hidden bg-black border-0">
        <button
          onClick={onClose}
          aria-label="Close video"
          className="absolute right-3 top-3 z-10 rounded-full bg-black/60 p-2 text-white hover:bg-black/80"
        >
          <X size={18} />
        </button>
        <div className="relative w-full" style={{ paddingBottom: "56.25%" }}>
          {open && (
            <iframe
              className="absolute inset-0 h-full w-full"
              src={`https://www.youtube.com/embed/${youtubeId}?autoplay=1&rel=0`}
              title="Product video"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
            />
          )}
        </div>
      </DialogContent>
    </Dialog>
  );
}

export function SectionEyebrow({ children }) {
  return (
    <span className="inline-block text-xs font-semibold tracking-[0.18em] text-[#39869B] uppercase">
      {children}
    </span>
  );
}
