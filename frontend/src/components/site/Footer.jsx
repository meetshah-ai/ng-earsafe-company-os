import { useState } from "react";
import axios from "axios";
import { ArrowUpRight, Instagram, Youtube, Facebook, Loader2 } from "lucide-react";
import { Reveal } from "./Reveal";

const API = `${process.env.REACT_APP_BACKEND_URL}/api`;

const cols = [
  {
    title: "Open-Ear Audio",
    links: [
      { label: "Comm 2.0", href: "https://ngearsafe.com/collections/all" },
      { label: "EarSafe Pro", href: "https://ngearsafe.com/collections/bone-conduction-headphones" },
      { label: "Safebuds", href: "https://ngearsafe.com/products/ngwehear" },
      { label: "OpenWire", href: "https://ngearsafe.com/collections/all" },
    ],
  },
  {
    title: "Beyond Audio",
    links: [
      { label: "Wearables", href: "https://ngearsafe.com/collections/all" },
      { label: "Beauty Tech", href: "https://ngearsafe.com/collections/all" },
      { label: "Massagers", href: "https://ngearsafe.com/collections/all" },
      { label: "Car & Mobile", href: "https://ngearsafe.com/collections/car-accessories" },
    ],
  },
  {
    title: "Company",
    links: [
      { label: "Our Story", href: "#story" },
      { label: "Compare Range", href: "https://ngearsafe.com/pages/open-ear-headphones-product-comparison" },
      { label: "Warranty & Returns", href: "https://ngearsafe.com/collections/all" },
      { label: "Support", href: "https://ngearsafe.com/collections/all" },
    ],
  },
];

export default function Footer() {
  const [email, setEmail] = useState("");
  const [status, setStatus] = useState("idle");
  const [message, setMessage] = useState("");

  const submit = async (e) => {
    e.preventDefault();
    if (!email.includes("@")) return;
    setStatus("loading");
    try {
      const { data } = await axios.post(`${API}/newsletter/subscribe`, { email });
      setStatus("success");
      setMessage(data.message || "You're in! Check your inbox.");
      setEmail("");
    } catch (err) {
      setStatus("error");
      setMessage("Something went wrong. Please try again.");
    }
  };

  return (
    <footer
      data-testid="site-footer"
      className="relative bg-[#0f2a44] pt-20 text-white"
    >
      <div className="max-w-[1440px] mx-auto px-6 md:px-12">
        <div className="grid gap-12 lg:grid-cols-12 pb-16 border-b border-white/10">
          <div className="lg:col-span-6">
            <Reveal>
              <h3 className="font-display text-3xl md:text-5xl font-black uppercase tracking-tighter leading-[0.95]">
                Join the open-ear <span className="text-[#3fb8c4]">movement</span>
              </h3>
              <p className="mt-4 max-w-md text-white/60">
                Early drops, launch prices and the story behind every product —
                straight to your inbox.
              </p>
            </Reveal>
          </div>
          <div className="lg:col-span-6 flex flex-col justify-center gap-3">
            <form
              onSubmit={submit}
              data-testid="newsletter-form"
              className="flex w-full items-center gap-3 rounded-full border border-white/15 bg-white/5 p-2 pl-6 focus-within:border-[#3fb8c4] transition-colors duration-300"
            >
              <input
                type="email"
                required
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="Enter your email"
                data-testid="newsletter-input"
                className="flex-1 bg-transparent text-sm text-white placeholder:text-white/40 outline-none"
              />
              <button
                type="submit"
                disabled={status === "loading"}
                data-testid="newsletter-submit"
                className="inline-flex items-center gap-2 rounded-full bg-[#3fb8c4] px-6 py-3 text-sm font-semibold text-[#052832] hover:bg-white transition-colors duration-300 disabled:opacity-70"
              >
                {status === "loading" ? (
                  <Loader2 size={16} className="animate-spin" />
                ) : (
                  <>
                    {status === "success" ? "Subscribed" : "Subscribe"}
                    <ArrowUpRight size={16} />
                  </>
                )}
              </button>
            </form>
            {message && (
              <p
                data-testid="newsletter-message"
                className={`pl-6 text-sm ${
                  status === "error" ? "text-red-300" : "text-[#3fb8c4]"
                }`}
              >
                {message}
              </p>
            )}
          </div>
        </div>

        <div className="grid gap-10 py-16 md:grid-cols-2 lg:grid-cols-[1.4fr_1fr_1fr_1fr]">
          <div>
            <div className="flex items-center gap-3">
              <img src="/ng-logo.png" alt="NG EarSafe" className="h-10 w-10 object-contain" />
              <span className="font-display text-lg font-extrabold tracking-tight">
                NG EARSAFE
              </span>
            </div>
            <p className="mt-5 max-w-xs text-sm text-white/55">
              India&apos;s open-ear audio brand. ENT-certified comfort — now
              across a growing range of everyday tech.
            </p>
            <div className="mt-6 flex items-center gap-3">
              {[Instagram, Youtube, Facebook].map((Icon, i) => (
                <a
                  key={i}
                  href="https://ngearsafe.com"
                  target="_blank"
                  rel="noreferrer"
                  data-testid={`footer-social-${i}`}
                  className="grid h-10 w-10 place-items-center rounded-full border border-white/15 text-white/70 transition-colors duration-300 hover:border-[#3fb8c4] hover:text-[#3fb8c4]"
                >
                  <Icon size={16} />
                </a>
              ))}
            </div>
          </div>

          {cols.map((c) => (
            <div key={c.title}>
              <p className="eyebrow mb-5 !text-white/40">{c.title}</p>
              <ul className="space-y-3">
                {c.links.map((l) => (
                  <li key={l.label}>
                    <a
                      href={l.href}
                      target={l.href.startsWith("#") ? undefined : "_blank"}
                      rel="noreferrer"
                      className="text-sm text-white/65 hover:text-[#3fb8c4] transition-colors duration-300"
                    >
                      {l.label}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>

      <div className="overflow-hidden px-6 md:px-12">
        <h2 className="select-none font-display font-black uppercase tracking-tighter text-white/[0.06] leading-[0.8] text-[22vw] text-center whitespace-nowrap">
          NG EARSAFE
        </h2>
      </div>

      <div className="max-w-[1440px] mx-auto px-6 md:px-12 py-8 flex flex-col md:flex-row items-center justify-between gap-3 border-t border-white/10">
        <p className="text-xs text-white/40">
          © {new Date().getFullYear()} NG EarSafe. All rights reserved.
        </p>
        <p className="text-xs text-white/40">
          1-year warranty · Easy 7-day returns · Made for India
        </p>
      </div>
    </footer>
  );
}
