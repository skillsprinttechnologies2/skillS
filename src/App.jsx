import { Suspense, lazy } from "react";
import { Routes, Route } from "react-router-dom";

import Header from "./pages/components/Header";
import Footer from "./pages/components/Footer";
import OurTeam from "./pages/Team/ourTeam";
import Background from "./pages/components/Background/Background";
import ScrollToTop from "./pages/components/ScrollToTop";

const PrivacyPolicy = lazy(() => import("./pages/Legal/PrivacyPolicy"));
const TermsAndConditions = lazy(() => import("./pages/Legal/TermsConditions"));
const Home = lazy(() => import("./pages/home/Home"));
const Services = lazy(() => import("./pages/Services/Services"));
const Contact = lazy(() => import("./pages/Contact/Contact"));
const Careers = lazy(() => import("./pages/Careers/Careers"));
const CaseStudyDetail = lazy(
  () => import("./pages/CaseStudies/CaseStudyDetail"),
);
const NotFound = lazy(() => import("./pages/NotFound/NotFound"));

function PageLoader() {
  return (
    <div
      className="min-h-[60vh] bg-transparent"
      aria-label="Loading page"
      role="status"
    />
  );
}

function App() {
  return (
    <div className="relative min-h-screen overflow-x-hidden bg-[#f4f7ff]">
      {/* fixed background */}
      <Background />

      {/* scroll reset */}
      <ScrollToTop />

      {/* content */}
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

export default App;
