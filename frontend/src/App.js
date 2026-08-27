import "./App.css";
import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import ProductPage from "./pages/ProductPage";
import { CartProvider } from "./context/CartContext";
import { Toaster } from "./components/ui/sonner";
import ScrollToTop from "./components/ScrollToTop";

function App() {
  return (
    <div className="App">
      <CartProvider>
        <BrowserRouter>
          <ScrollToTop />
          <Routes>
            <Route path="/" element={<ProductPage />} />
            <Route path="/store" element={<Home />} />
            <Route path="/products/:slug" element={<ProductPage />} />
          </Routes>
          <Toaster position="top-center" richColors />
        </BrowserRouter>
      </CartProvider>
    </div>
  );
}

export default App;
