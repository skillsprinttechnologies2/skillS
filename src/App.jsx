import { Suspense, lazy, useEffect, useState } from "react";
import { Routes, Route, useLocation } from "react-router-dom";

import Header from "./pages/components/Header";
import Footer from "./pages/components/Footer";
import OurTeam from "./pages/Team/ourTeam";
import Background from "./pages/components/Background/Background";
import ScrollToTop from "./pages/components/ScrollToTop";
import Loader from "./pages/components/Loader";

const PrivacyPolicy = lazy(() => import("./pages/Legal/PrivacyPolicy"));
const TermsAndConditions = lazy(() => import("./pages/Legal/TermsConditions"));
const Home = lazy(() => import("./pages/home/Home"));
const Services = lazy(() => import("./pages/Services/Services"));
const Contact = lazy(() => import("./pages/contact/Contact"));
const Careers = lazy(() => import("./pages/Careers/Careers"));
const CaseStudyDetail = lazy(
  () => import("./pages/CaseStudies/CaseStudyDetail"),
);
const NotFound = lazy(() => import("./pages/NotFound/NotFound"));

function PageLoader() {
  return (
    <div className="fixed inset-0 z-[9999] flex items-center justify-center bg-white/[0.04] backdrop-blur-xl">
      <Loader small />
    </div>
  );
}

function AppContent() {
  const location = useLocation();

  const [initialLoading, setInitialLoading] = useState(true);
  const [routeLoading, setRouteLoading] = useState(false);

  // INITIAL WEBSITE LOAD
  useEffect(() => {
    const minimumLoaderTime = 2200;
    const startTime = Date.now();

    const handleLoad = () => {
      const elapsed = Date.now() - startTime;

      const remaining = Math.max(minimumLoaderTime - elapsed, 0);

      setTimeout(() => {
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
    };
  }, []);

  // ROUTE TRANSITION LOADER
  useEffect(() => {
    setRouteLoading(true);

    const timer = setTimeout(() => {
      setRouteLoading(false);
    }, 700);

    return () => clearTimeout(timer);
  }, [location.pathname]);

  // FIRST WEBSITE LOADER
  if (initialLoading) {
    return (
      <div className="fixed inset-0 z-[99999]">
        <Loader fullscreen />
      </div>
    );
  }

  return (
    <div className="relative min-h-screen overflow-x-hidden bg-white">
      {/* Global Background */}
      <Background />

      {/* Route Transition Loader */}
      {routeLoading && (
        <div className="fixed inset-0 z-[9999] flex items-center justify-center bg-white/[0.03] backdrop-blur-xl">
          <Loader small />
        </div>
      )}

      {/* Scroll Reset */}
      <ScrollToTop />

      {/* Website */}
      <div className="relative z-10 min-h-screen">
        <Header />

        <Suspense fallback={<PageLoader />}>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/services" element={<Services />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/careers" element={<Careers />} />
            <Route path="/ourteam" element={<OurTeam />} />
            <Route path="/case-studies/:slug" element={<CaseStudyDetail />} />
            <Route path="/privacypolicy" element={<PrivacyPolicy />} />
            <Route path="/terms&conditions" element={<TermsAndConditions />} />
            <Route path="*" element={<NotFound />} />
          </Routes>
        </Suspense>

        <Footer />
      </div>
    </div>
  );
}

export default function App() {
  return <AppContent />;
}
