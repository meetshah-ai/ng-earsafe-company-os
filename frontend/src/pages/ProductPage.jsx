import React, { useState } from 'react';
import { toast } from 'sonner';
import { ChevronRight, Heart } from 'lucide-react';
import Header from '../components/pdp/Header';
import ProductGallery from '../components/pdp/ProductGallery';
import ProductInfo from '../components/pdp/ProductInfo';
import Marquee from '../components/pdp/Marquee';
import Features from '../components/pdp/Features';
import HowItWorks from '../components/pdp/HowItWorks';
import Specs from '../components/pdp/Specs';
import Reviews from '../components/pdp/Reviews';
import FAQ from '../components/pdp/FAQ';
import BundleOffer from '../components/pdp/BundleOffer';
import Footer from '../components/pdp/Footer';
import StickyBar from '../components/pdp/StickyBar';
import { product, relatedProducts } from '../mock/mock';

const inr = (n) => n.toLocaleString('en-IN');

const RelatedProducts = () => (
  <section className="max-w-7xl mx-auto px-4 md:px-6 pb-8">
    <div className="flex items-end justify-between mb-8">
      <div>
        <p className="text-ng-cyan font-display font-bold text-sm tracking-widest uppercase">Complete the routine</p>
        <h2 className="font-display font-extrabold text-3xl md:text-4xl text-ng-navy uppercase leading-tight mt-2">You may also like</h2>
      </div>
    </div>
    <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 md:gap-5">
      {relatedProducts.map((p) => (
        <div key={p.name} className="group cursor-pointer">
          <div className="relative aspect-square rounded-2xl overflow-hidden bg-white border border-ng-sand">
            {p.badge && <span className="absolute z-10 top-3 left-3 bg-ng-navy text-white text-[10px] font-bold tracking-widest px-2.5 py-1 rounded-full">{p.badge}</span>}
            <button className="absolute z-10 top-3 right-3 w-8 h-8 rounded-full bg-white/80 backdrop-blur border border-ng-sand flex items-center justify-center text-ng-navy hover:text-ng-cyan transition-colors" aria-label="Wishlist"><Heart size={15} /></button>
            <img src={p.image} alt={p.name} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" />
          </div>
          <p className="mt-3 text-[11px] font-semibold tracking-widest text-ng-muted uppercase">{p.category}</p>
          <h3 className="font-display font-bold text-ng-navy mt-1 group-hover:text-ng-cyan transition-colors">{p.name}</h3>
          <div className="mt-1 flex items-center gap-2">
            <span className="font-bold text-ng-navy">₹{inr(p.price)}</span>
            <span className="text-sm text-ng-muted line-through">₹{inr(p.mrp)}</span>
          </div>
        </div>
      ))}
    </div>
  </section>
);

const ProductPage = () => {
  const [cartCount, setCartCount] = useState(0);
  const [wishlisted, setWishlisted] = useState(false);
  const [galleryIdx, setGalleryIdx] = useState(0);

  const handleAddToCart = (qty = 1, colorIdx = 0) => {
    setCartCount((c) => c + qty);
    toast.success('Added to cart', {
      description: `${qty} × ${product.name} — ${product.colors[colorIdx]?.name || product.colors[0].name}`,
    });
  };

  const handleBuyNow = (qty = 1, colorIdx = 0) => {
    setCartCount((c) => c + qty);
    toast('Redirecting to checkout…', {
      description: `${product.currency}${inr(product.price * qty)} · Free shipping · COD available (demo)`,
    });
  };

  const handleWishlist = () => {
    setWishlisted((w) => {
      const nw = !w;
      toast(nw ? 'Saved to wishlist' : 'Removed from wishlist');
      return nw;
    });
  };

  const handleAddBundle = (items) => {
    setCartCount((c) => c + items.length);
    toast.success('Bundle added to cart', {
      description: `${items.length} items \u2014 combo saving applied (demo)`,
    });
  };

  return (
    <div className="App bg-ng-cream min-h-screen">
      <Header cartCount={cartCount} wishCount={wishlisted ? 1 : 0} />

      {/* Breadcrumb */}
      <div className="max-w-7xl mx-auto px-4 md:px-6 pt-5">
        <nav className="flex items-center gap-1.5 text-xs text-ng-muted">
          <a href="#" className="hover:text-ng-navy">Home</a>
          <ChevronRight size={13} />
          <a href="#" className="hover:text-ng-navy">Beauty Tech</a>
          <ChevronRight size={13} />
          <span className="text-ng-navy font-medium">Scalp Care</span>
        </nav>
      </div>

      {/* Main product */}
      <section className="max-w-7xl mx-auto px-4 md:px-6 py-6 md:py-8">
        <div className="grid lg:grid-cols-2 gap-8 lg:gap-14">
          <ProductGallery images={product.gallery} badges={product.badges} activeExternal={galleryIdx} />
          <ProductInfo
            product={product}
            onColorChange={setGalleryIdx}
            onAddToCart={handleAddToCart}
            onBuyNow={handleBuyNow}
            wishlisted={wishlisted}
            onWishlist={handleWishlist}
          />
        </div>
      </section>

      <Marquee items={product.marquee} />
      <BundleOffer onAddBundle={handleAddBundle} />
      <Features />
      <HowItWorks />
      <Specs />
      <Reviews />
      <FAQ />
      <RelatedProducts />
      <Footer />

      <StickyBar product={product} onAddToCart={handleAddToCart} onBuyNow={handleBuyNow} />
    </div>
  );
};

export default ProductPage;
