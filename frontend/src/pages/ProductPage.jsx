import React, { useEffect } from "react";
import { MessageCircle } from "lucide-react";
import { PRODUCT, REVIEWS, GALLERY, VARIANTS } from "../mock";
import Header from "../components/Header";
import Gallery from "../components/Gallery";
import BuyBox from "../components/BuyBox";
import ProofStrip from "../components/ProofStrip";
import WhoItsFor from "../components/WhoItsFor";
import DemoSection from "../components/DemoSection";
import OpenEarSection from "../components/OpenEarSection";
import AISection from "../components/AISection";
import CallQualitySection from "../components/CallQualitySection";
import PositioningSection from "../components/PositioningSection";
import ReviewsSection from "../components/ReviewsSection";
import ComparisonSection from "../components/ComparisonSection";
import SpecsSection from "../components/SpecsSection";
import BoxSection from "../components/BoxSection";
import BrandTrustSection from "../components/BrandTrustSection";
import DeliverySection from "../components/DeliverySection";
import FaqSection from "../components/FaqSection";
import FinalCTA from "../components/FinalCTA";
import StickyBar from "../components/StickyBar";
import CartDrawer from "../components/CartDrawer";

function useSEO() {
  useEffect(() => {
    document.title = "SafeBuds Open-Ear AI Earbuds | Translation & AI Notes";
    const setMeta = (name, content) => {
      let el = document.querySelector(`meta[name="${name}"]`);
      if (!el) { el = document.createElement("meta"); el.setAttribute("name", name); document.head.appendChild(el); }
      el.setAttribute("content", content);
    };
    setMeta("description", "Shop NG EarSafe × WeHear SafeBuds — open-ear wireless earbuds with live translation, AI meeting notes, multipoint connectivity and all-day comfort.");

    const ld = {
      "@context": "https://schema.org",
      "@type": "Product",
      name: PRODUCT.title,
      brand: { "@type": "Brand", name: "NG EarSafe × WeHear" },
      sku: PRODUCT.sku,
      image: GALLERY.filter((g) => g.type === "image").map((g) => g.src),
      description: PRODUCT.supporting,
      aggregateRating: {
        "@type": "AggregateRating",
        ratingValue: REVIEWS.average,
        reviewCount: REVIEWS.total,
      },
      offers: {
        "@type": "Offer",
        priceCurrency: "INR",
        price: PRODUCT.price,
        availability: VARIANTS.some((v) => v.available)
          ? "https://schema.org/InStock"
          : "https://schema.org/OutOfStock",
        seller: { "@type": "Organization", name: "NG EarSafe" },
      },
    };
    let script = document.getElementById("product-jsonld");
    if (!script) {
      script = document.createElement("script");
      script.type = "application/ld+json";
      script.id = "product-jsonld";
      document.head.appendChild(script);
    }
    script.textContent = JSON.stringify(ld);
  }, []);
}

export default function ProductPage() {
  useSEO();

  return (
    <div className="min-h-screen bg-white pb-16 md:pb-0">
      <Header />

      {/* HERO */}
      <section className="mx-auto max-w-6xl px-4 py-6 md:py-10">
        <div className="grid gap-8 md:grid-cols-2 md:gap-10">
          <div className="md:sticky md:top-28 md:self-start">
            <Gallery />
          </div>
          <BuyBox />
        </div>
      </section>

      <ProofStrip />
      <WhoItsFor />
      <DemoSection />
      <OpenEarSection />
      <AISection />
      <CallQualitySection />
      <PositioningSection />
      <ReviewsSection />
      <ComparisonSection />
      <SpecsSection />
      <BoxSection />
      <BrandTrustSection />
      <DeliverySection />
      <FaqSection />
      <FinalCTA />

      {/* Footer */}
      <footer className="border-t border-slate-200 bg-white py-8">
        <div className="mx-auto max-w-6xl px-4 text-center text-sm text-slate-500">
          <div className="font-bold text-[#102442]">NG EarSafe × WeHear</div>
          <p className="mt-2">SafeBuds Open-Ear AI Earbuds · Free shipping · 7-day returns · 1-year warranty</p>
          <p className="mt-1">support@ngearsafe.com</p>
        </div>
      </footer>

      {/* WhatsApp widget — positioned above sticky bar on mobile */}
      <a
        href="#"
        onClick={(e) => e.preventDefault()}
        aria-label="Chat with us on WhatsApp"
        className="fixed bottom-20 right-4 z-30 flex h-12 w-12 items-center justify-center rounded-full bg-[#25D366] text-white shadow-lg transition-transform hover:scale-105 md:bottom-6"
      >
        <MessageCircle size={24} className="fill-white" />
      </a>

      <StickyBar />
      <CartDrawer />
    </div>
  );
}
