import React, { createContext, useContext, useEffect, useState } from "react";

const CartContext = createContext(null);

export const useCart = () => useContext(CartContext);

export const CartProvider = ({ children }) => {
  const [items, setItems] = useState(() => {
    try {
      const saved = localStorage.getItem("ng_cart");
      return saved ? JSON.parse(saved) : [];
    } catch {
      return [];
    }
  });
  const [open, setOpen] = useState(false);

  useEffect(() => {
    localStorage.setItem("ng_cart", JSON.stringify(items));
  }, [items]);

  const addItem = (product, qty = 1, variant = "") => {
    setItems((prev) => {
      const key = product.id + variant;
      const existing = prev.find((i) => i.key === key);
      if (existing) {
        return prev.map((i) =>
          i.key === key ? { ...i, qty: i.qty + qty } : i
        );
      }
      return [
        ...prev,
        {
          key,
          id: product.id,
          name: product.name,
          price: product.price,
          image: product.image || (product.images && product.images[0]),
          variant,
          qty,
        },
      ];
    });
    setOpen(true);
  };

  const removeItem = (key) => setItems((prev) => prev.filter((i) => i.key !== key));
  const updateQty = (key, qty) =>
    setItems((prev) =>
      prev.map((i) => (i.key === key ? { ...i, qty: Math.max(1, qty) } : i))
    );

  const count = items.reduce((s, i) => s + i.qty, 0);
  const subtotal = items.reduce((s, i) => s + i.price * i.qty, 0);

  return (
    <CartContext.Provider
      value={{ items, addItem, removeItem, updateQty, count, subtotal, open, setOpen }}
    >
      {children}
    </CartContext.Provider>
  );
};
