import React, { createContext, useContext, useState, useCallback, useRef, useEffect } from "react";
import axios from "axios";
import { PRODUCT, VARIANTS } from "../mock";

const BACKEND_URL = process.env.REACT_APP_BACKEND_URL;
const API = `${BACKEND_URL}/api`;

const StoreContext = createContext(null);

export const useStore = () => {
  const ctx = useContext(StoreContext);
  if (!ctx) throw new Error("useStore must be used within StoreProvider");
  return ctx;
};

export function StoreProvider({ children }) {
  const [selectedVariant, setSelectedVariant] = useState(
    VARIANTS.find((v) => v.available) || VARIANTS[0]
  );
  const [cart, setCart] = useState([]);
  const [cartOpen, setCartOpen] = useState(false);

  // Analytics: dedupe one-time events per page load
  const firedOnce = useRef(new Set());
  const sessionId = useRef(
    (typeof crypto !== "undefined" && crypto.randomUUID)
      ? crypto.randomUUID()
      : String(Date.now())
  );

  const track = useCallback((event, payload = {}, once = false) => {
    if (once) {
      if (firedOnce.current.has(event)) return;
      firedOnce.current.add(event);
    }
    // eslint-disable-next-line no-console
    console.log(`[analytics] ${event}`, payload);
    try {
      axios.post(`${API}/events`, {
        session_id: sessionId.current,
        event,
        payload,
      }).catch(() => {});
    } catch (e) { /* no-op in demo */ }
  }, []);

  useEffect(() => {
    track("product_page_viewed", { product: PRODUCT.id }, true);
  }, [track]);

  const selectVariant = useCallback((variant) => {
    if (!variant.available) {
      track("unavailable_variant_clicked", { variant: variant.name });
      return;
    }
    setSelectedVariant(variant);
    track("variant_selected", { variant: variant.name });
  }, [track]);

  const addToCart = useCallback((qty = 1) => {
    if (!selectedVariant.available) return;
    setCart((prev) => {
      const existing = prev.find((i) => i.variantId === selectedVariant.id);
      if (existing) {
        return prev.map((i) =>
          i.variantId === selectedVariant.id ? { ...i, qty: i.qty + qty } : i
        );
      }
      return [
        ...prev,
        {
          variantId: selectedVariant.id,
          name: PRODUCT.title,
          variantName: selectedVariant.name,
          price: PRODUCT.price,
          qty,
          image: "https://ngearsafe.com/cdn/shop/files/Untitled_design_1.png?v=1776592936&width=200",
        },
      ];
    });
    track("add_to_cart", { variant: selectedVariant.name, qty });
    setCartOpen(true);
  }, [selectedVariant, track]);

  const buyNow = useCallback(() => {
    if (!selectedVariant.available) return;
    addToCart(1);
    track("buy_now", { variant: selectedVariant.name });
  }, [selectedVariant, addToCart, track]);

  const beginCheckout = useCallback(() => {
    track("begin_checkout", { items: cart.length });
    const items = cart.length
      ? cart
      : [{
          variantId: selectedVariant.id,
          variantName: selectedVariant.name,
          name: PRODUCT.title,
          price: PRODUCT.price,
          qty: 1,
        }];
    const total = items.reduce((s, i) => s + i.price * i.qty, 0);
    try {
      axios.post(`${API}/orders`, {
        session_id: sessionId.current,
        items: items.map(({ variantId, variantName, name, price, qty }) => ({ variantId, variantName, name, price, qty })),
        total,
        kind: "checkout",
      }).catch(() => {});
    } catch (e) { /* no-op in demo */ }
  }, [cart, selectedVariant, track]);

  const updateQty = useCallback((variantId, qty) => {
    setCart((prev) =>
      qty <= 0
        ? prev.filter((i) => i.variantId !== variantId)
        : prev.map((i) => (i.variantId === variantId ? { ...i, qty } : i))
    );
  }, []);

  const cartCount = cart.reduce((s, i) => s + i.qty, 0);
  const cartTotal = cart.reduce((s, i) => s + i.qty * i.price, 0);

  return (
    <StoreContext.Provider
      value={{
        selectedVariant, selectVariant,
        cart, cartCount, cartTotal,
        cartOpen, setCartOpen,
        addToCart, buyNow, beginCheckout, updateQty,
        track,
      }}
    >
      {children}
    </StoreContext.Provider>
  );
}
