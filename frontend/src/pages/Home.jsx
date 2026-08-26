import { useState } from "react";
import AnnouncementBar from "../components/site/AnnouncementBar";
import Navbar from "../components/site/Navbar";
import Hero from "../components/site/Hero";
import Marquee from "../components/site/Marquee";
import Flagship from "../components/site/Flagship";
import CategoryShowcase from "../components/site/CategoryShowcase";
import Reels from "../components/site/Reels";
import Manifesto from "../components/site/Manifesto";
import DidYouKnow from "../components/site/DidYouKnow";
import MediaLogos from "../components/site/MediaLogos";
import Footer from "../components/site/Footer";
import { QuickViewProvider } from "../components/site/QuickView";
import { WishlistProvider } from "../components/site/Wishlist";

export default function Home() {
  const [barVisible, setBarVisible] = useState(true);

  return (
    <WishlistProvider>
      <QuickViewProvider>
        <div className="grain relative min-h-screen bg-[#f4f1ea] text-[#0f2a44] font-body">
          <AnnouncementBar onVisibilityChange={setBarVisible} />
          <Navbar barVisible={barVisible} />
          <main>
            <Hero />
            <Marquee />
            <Flagship />
            <CategoryShowcase />
            <Reels />
            <Manifesto />
            <DidYouKnow />
            <MediaLogos />
          </main>
          <Footer />
        </div>
      </QuickViewProvider>
    </WishlistProvider>
  );
}
