import { Suspense, lazy } from "react";
import { Routes, Route } from "react-router-dom";

import Header from "./pages/components/Header";
import Footer from "./pages/components/Footer";
import OurTeam from "./pages/Team/ourTeam";
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
      className="min-h-[60vh] bg-[#f6f8ff]"
      aria-label="Loading page"
      role="status"
    />
  );
}

function App() {
  return (
    <>
      <Header />

      <Suspense fallback={<PageLoader />}>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/services" element={<Services />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/careers" element={<Careers />} />
          <Route path="/ourteam" element={<OurTeam />} />
          <Route path="/case-studies/:slug" element={<CaseStudyDetail />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </Suspense>

      <Footer />
    </>
  );
}

export default App;
