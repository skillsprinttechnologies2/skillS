import { Suspense, lazy, useEffect, useRef, useState } from "react";
import { Routes, Route, useLocation } from "react-router-dom";
import { SpeedInsights } from "@vercel/speed-insights/react";
import { Analytics } from "@vercel/analytics/react";

import Header from "./pages/components/Header";
import Footer from "./pages/components/Footer";
import Background from "./pages/components/Background/Background";
import ScrollToTop from "./pages/components/ScrollToTop";
import Loader from "./pages/components/Loader";

import OurTeam from "./pages/Team/ourTeam";

// LAZY ROUTES
const Home = lazy(() => import("./pages/home/Home"));
const Services = lazy(() => import("./pages/Services/Services"));
const Contact = lazy(() => import("./pages/contact/Contact"));
const Careers = lazy(() => import("./pages/Careers/Careers"));
const PrivacyPolicy = lazy(() => import("./pages/Legal/PrivacyPolicy"));
const TermsAndConditions = lazy(() => import("./pages/Legal/TermsConditions"));
const CaseStudyDetail = lazy(
  () => import("./pages/CaseStudies/CaseStudyDetail"),
);
const NotFound = lazy(() => import("./pages/NotFound/NotFound"));

// REUSABLE OVERLAY LOADER
function OverlayLoader({ small = false, z = "z-[9999]" }) {
  return (
    <div
      aria-busy="true"
      aria-live="polite"
      className={`fixed inset-0 ${z} flex items-center justify-center bg-white/[0.04] backdrop-blur-xl`}
    >
      <Loader small={small} />
    </div>
  );
}

// SUSPENSE FALLBACK
function PageLoader() {
  return <OverlayLoader small />;
}

function AppContent() {
  const location = useLocation();

  const [initialLoading, setInitialLoading] = useState(true);
  const [routeLoading, setRouteLoading] = useState(false);

  const firstRender = useRef(true);

  // INITIAL WEBSITE LOADER
  useEffect(() => {
    let timeout;

    const minimumLoaderTime = 1800;
    const startTime = Date.now();

    const handleLoad = () => {
      const elapsed = Date.now() - startTime;

      const remaining = Math.max(minimumLoaderTime - elapsed, 0);

      timeout = setTimeout(() => {
        setInitialLoading(false);
      }, remaining);
    };

    if (document.readyState === "complete") {
      handleLoad();
    } else {
      window.addEventListener("load", handleLoad);
    }

    return () => {
      window.removeEventListener("load", handleLoad);

      if (timeout) clearTimeout(timeout);
    };
  }, []);

  // ROUTE TRANSITION LOADER
  useEffect(() => {
    // SKIP FIRST RENDER
    if (firstRender.current) {
      firstRender.current = false;
      return;
    }

    setRouteLoading(true);

    const timer = setTimeout(() => {
      setRouteLoading(false);
    }, 450);

    return () => clearTimeout(timer);
  }, [location.pathname]);

  // FIRST WEBSITE LOAD
  if (initialLoading) {
    return <OverlayLoader z="z-[99999]" />;
  }

  return (
    <div className="relative min-h-screen overflow-x-hidden bg-white">
      {/* Analytics */}
      <SpeedInsights />
      <Analytics />

      {/* Global Background */}
      <Background />

      {/* Route Loader */}
      {routeLoading && <OverlayLoader small />}

      {/* Scroll Reset */}
      <ScrollToTop />

      {/* Main Website */}
      <div className="relative z-10 flex min-h-screen flex-col">
        <Header />

        <main className="flex-1">
          <Suspense fallback={<PageLoader />}>
            <Routes>
              <Route path="/" element={<Home />} />

              <Route path="/services" element={<Services />} />

              <Route path="/contact" element={<Contact />} />

              <Route path="/careers" element={<Careers />} />

              <Route path="/ourteam" element={<OurTeam />} />

              <Route path="/case-studies/:slug" element={<CaseStudyDetail />} />

              <Route path="/privacy-policy" element={<PrivacyPolicy />} />

              <Route
                path="/terms-and-conditions"
                element={<TermsAndConditions />}
              />

              <Route path="*" element={<NotFound />} />
            </Routes>
          </Suspense>
        </main>

        <Footer />
      </div>
    </div>
  );
}

export default function App() {
  return <AppContent />;
}
