import Navbar from "../components/site/Navbar";
import Hero from "../components/site/Hero";
import Marquee from "../components/site/Marquee";
import Flagship from "../components/site/Flagship";
import CategoryBento from "../components/site/CategoryBento";
import Manifesto from "../components/site/Manifesto";
import DidYouKnow from "../components/site/DidYouKnow";
import MediaLogos from "../components/site/MediaLogos";
import Footer from "../components/site/Footer";

export default function Home() {
  return (
    <div className="grain relative min-h-screen bg-[#050b14] text-white font-body">
      <Navbar />
      <main>
        <Hero />
        <Marquee />
        <Flagship />
        <CategoryBento />
        <Manifesto />
        <DidYouKnow />
        <MediaLogos />
      </main>
      <Footer />
    </div>
  );
}
