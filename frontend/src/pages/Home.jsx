import { useState } from "react";
import AnnouncementBar from "../components/site/AnnouncementBar";
import Navbar from "../components/site/Navbar";
import Hero from "../components/site/Hero";
import Marquee from "../components/site/Marquee";
import Flagship from "../components/site/Flagship";
import CategoryShowcase from "../components/site/CategoryShowcase";
import Manifesto from "../components/site/Manifesto";
import DidYouKnow from "../components/site/DidYouKnow";
import MediaLogos from "../components/site/MediaLogos";
import Footer from "../components/site/Footer";
import { QuickViewProvider } from "../components/site/QuickView";

export default function Home() {
  const [barVisible, setBarVisible] = useState(true);

  return (
    <QuickViewProvider>
      <div className="grain relative min-h-screen bg-[#050b14] text-white font-body">
        <AnnouncementBar onVisibilityChange={setBarVisible} />
        <Navbar barVisible={barVisible} />
        <main>
          <Hero />
          <Marquee />
          <Flagship />
          <CategoryShowcase />
          <Manifesto />
          <DidYouKnow />
          <MediaLogos />
        </main>
        <Footer />
      </div>
    </QuickViewProvider>
  );
}
