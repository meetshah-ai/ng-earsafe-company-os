import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { StoreProvider } from "./context/StoreContext";
import ProductPage from "./pages/ProductPage";
import { Toaster } from "./components/ui/toaster";

function App() {
  return (
    <div className="App">
      <StoreProvider>
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<ProductPage />} />
            <Route path="/products/ngwehear" element={<ProductPage />} />
          </Routes>
        </BrowserRouter>
        <Toaster />
      </StoreProvider>
    </div>
  );
}

export default App;
