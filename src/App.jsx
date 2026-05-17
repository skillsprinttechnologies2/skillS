import { Suspense, lazy } from "react";
import { Routes, Route } from "react-router-dom";

import Header from "./pages/components/Header";
import Footer from "./pages/components/Footer";
import Home from "./pages/home/Home";
import ScrollToTop from "./pages/components/ScrollToTop";

const Services = lazy(() => import("./pages/Services/Services"));

function App() {
  return (
    <>
      <ScrollToTop />

      <Header />

      <Suspense
        fallback={
          <div className="min-h-[60vh] bg-[#f6f8ff]" aria-hidden="true" />
        }
      >
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/services" element={<Services />} />
        </Routes>
      </Suspense>

      <Footer />
    </>
  );
}

export default App;
