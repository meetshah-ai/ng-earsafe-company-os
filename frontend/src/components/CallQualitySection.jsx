import React, { useState, useRef, useEffect } from "react";
import { Play, Pause, Info } from "lucide-react";
import { useReveal } from "../lib/ui";
import { useStore } from "../context/StoreContext";

function Waveform({ active }) {
  return (
    <div className="flex h-8 items-center gap-[3px]">
      {Array.from({ length: 28 }).map((_, i) => (
        <span
          key={i}
          className="w-[3px] rounded-full bg-[#54C1C8]"
          style={{
            height: "100%",
            transformOrigin: "center",
            animation: active ? `wave 0.9s ease-in-out ${i * 0.05}s infinite` : "none",
            transform: active ? undefined : "scaleY(0.3)",
            opacity: active ? 1 : 0.4,
          }}
        />
      ))}
    </div>
  );
}

function Sample({ id, label, sub, track }) {
  const [playing, setPlaying] = useState(false);
  const ctxRef = useRef(null);
  const stopRef = useRef(null);

  const stop = () => {
    setPlaying(false);
    if (stopRef.current) { clearTimeout(stopRef.current); stopRef.current = null; }
    if (ctxRef.current) { try { ctxRef.current.close(); } catch (e) {} ctxRef.current = null; }
  };

  const toggle = () => {
    if (playing) { stop(); return; }
    track("microphone_sample_played", { sample: id });
    setPlaying(true);
    try {
      const AC = window.AudioContext || window.webkitAudioContext;
      const ctx = new AC();
      ctxRef.current = ctx;
      const osc = ctx.createOscillator();
      const gain = ctx.createGain();
      osc.type = id === "safebuds" ? "sine" : "sawtooth";
      osc.frequency.value = id === "safebuds" ? 320 : 220;
      gain.gain.value = id === "safebuds" ? 0.08 : 0.05;
      osc.connect(gain); gain.connect(ctx.destination); osc.start();
      stopRef.current = setTimeout(stop, 3000);
    } catch (e) { setTimeout(stop, 3000); }
  };

  useEffect(() => () => stop(), []);

  return (
    <div className={`rounded-2xl border p-5 ${id === "safebuds" ? "border-2 border-[#54C1C8] bg-white" : "border-slate-200 bg-white"}`}>
      <div className="flex items-center justify-between">
        <div>
          <div className="font-bold text-[#102442]">{label}</div>
          <div className="text-[13px] text-slate-500">{sub}</div>
        </div>
        <button
          onClick={toggle}
          aria-label={playing ? `Pause ${label} sample` : `Play ${label} sample`}
          className="flex h-12 w-12 items-center justify-center rounded-full bg-[#102442] text-white hover:bg-[#0b1a30]"
        >
          {playing ? <Pause size={20} /> : <Play size={20} className="ml-0.5" />}
        </button>
      </div>
      <div className="mt-4"><Waveform active={playing} /></div>
    </div>
  );
}

export default function CallQualitySection() {
  const ref = useReveal();
  const { track } = useStore();
  return (
    <section ref={ref} className="reveal bg-[#F4F4F2] py-14">
      <div className="mx-auto max-w-4xl px-4">
        <h2 className="text-center text-2xl font-bold text-[#102442] md:text-3xl">
          They should hear you — not your surroundings.
        </h2>
        <p className="mx-auto mt-3 max-w-2xl text-center text-[15px] leading-relaxed text-slate-600">
          Quad microphones and environmental noise reduction help keep your voice clearer during calls.
        </p>

        <div className="mt-8 grid gap-4 sm:grid-cols-2">
          <Sample id="typical" label="Typical earbud mic" sub="Same speaker · same room" track={track} />
          <Sample id="safebuds" label="SafeBuds quad ENC" sub="Same speaker · same room" track={track} />
        </div>

        <div className="mt-6 flex flex-wrap justify-center gap-2">
          {["Zoom", "Microsoft Teams", "Google Meet", "WhatsApp", "Regular calls"].map((p) => (
            <span key={p} className="rounded-full bg-white px-3 py-1 text-[13px] font-medium text-[#102442] ring-1 ring-slate-200">{p}</span>
          ))}
        </div>

        <div className="mt-6 flex items-start gap-2 rounded-xl bg-white p-4 text-[13px] text-slate-500 ring-1 ring-slate-200">
          <Info size={16} className="mt-0.5 flex-shrink-0 text-[#39869B]" />
          Samples above are illustrative tones for demonstration. Recorded in a normal indoor room with the same device and speaker.
        </div>
      </div>
    </section>
  );
}
