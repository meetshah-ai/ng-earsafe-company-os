import "@/App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import SmoothScroll from "@/components/site/SmoothScroll";
import Home from "@/pages/Home";

function App() {
  return (
    <div className="App">
      <SmoothScroll>
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<Home />} />
          </Routes>
        </BrowserRouter>
      </SmoothScroll>
    </div>
  );
}

export default App;
