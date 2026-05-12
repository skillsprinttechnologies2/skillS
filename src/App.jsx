// import { useState, useEffect, Suspense, lazy } from "react";
import { Routes, Route } from "react-router-dom";

// // Vercel (deferred load)
// import { Analytics } from "@vercel/analytics/react";
// import { SpeedInsights } from "@vercel/speed-insights/react";

import Header from "./pages/components/Header";
import Home from "./pages/home/Home";
// import Footer from "./pages/components/Footer";
// import ScrollToTop from "./pages/components/ScrollToTop";
// import ThemeToggle from "./pages/components/ThemeToggle";

// import FloatingCalendly from "./pages/components/FloatingCalendly";
// import CalendlyButton from "./pages/components/CalendlyButton";
// import ErrorBoundary from "./pages/components/ErrorBoundary";

// 🚨 IMPORTANT: DO NOT lazy load homepage
// import Home from "./pages/Home";

// Lazy load only secondary pages
// const About = lazy(() => import("./pages/About"));
// const Services = lazy(() => import("./pages/Services"));
// const CaseStudies = lazy(() => import("./pages/CaseStudies"));
// const Pricing = lazy(() => import("./pages/Pricing"));
// const Contact = lazy(() => import("./pages/Contact"));
// const PrivacyPolicy = lazy(() => import("./pages/PrivacyPolicy"));
// const TermsConditions = lazy(() => import("./pages/TermsConditions"));
// const NotFound = lazy(() => import("./pages/NotFound"));

function App() {
  // const [openCalendly, setOpenCalendly] = useState(false);
  // const [loadVercel, setLoadVercel] = useState(false);

  // // ⏳ Load analytics AFTER initial render (non-blocking)
  // useEffect(() => {
  //   const timer = setTimeout(() => setLoadVercel(true), 2000);
  //   return () => clearTimeout(timer);
  // }, []);

  return (
    <>
      {/* Scroll */}
      {/* <ScrollToTop /> */}

      {/* Header */}
      <Header />
      <Home />

      {/* <Route path="/" element={<Home />} /> */}

      {/* Routes */}
      {/* <ErrorBoundary>
        <Suspense fallback={<div style={{ height: "50vh" }} />}>
          <Routes>
            <Route
              path="/"
              element={<Home setOpenCalendly={setOpenCalendly} />}
            />
            <Route path="/about" element={<About />} />
            <Route path="/services" element={<Services />} />
            <Route path="/case-studies" element={<CaseStudies />} />
            <Route path="/pricing" element={<Pricing />} />
            <Route
              path="/contact"
              element={<Contact setOpenCalendly={setOpenCalendly} />}
            />
            <Route path="/privacy-policy" element={<PrivacyPolicy />} />
            <Route path="/terms-conditions" element={<TermsConditions />} />
            <Route path="*" element={<NotFound />} />
          </Routes>
        </Suspense>
      </ErrorBoundary> */}

      {/* Footer */}
      {/* <Footer /> */}

      {/* Theme Toggle (fixed space → avoid CLS) */}
      {/* <div className="fixed bottom-6 left-6 z-10 w-[50px] h-[50px]">
        <ThemeToggle />
      </div> */}

      {/* Calendly (fixed size → no layout shift) */}
      {/* <div className="fixed bottom-6 right-6 z-50 w-[60px] h-[60px]">
        <FloatingCalendly onOpen={() => setOpenCalendly(true)} />
      </div> */}

      {/* Calendly Modal */}
      {/* <CalendlyButton
        externalOpen={openCalendly}
        setExternalOpen={setOpenCalendly}
      /> */}

      {/* 🚀 Load Vercel tools late */}
      {/* {loadVercel && (
        <>
          <Analytics />
          <SpeedInsights />
        </>
      )} */}
    </>
  );
}

export default App;
