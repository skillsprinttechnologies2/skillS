// src/pages/Home.jsx

// import Hero from "./home/Hero";
// import TrustedBy from "./home/TrustedBy";
// import WhyChooseUs from "./home/WhyChooseUs";
// import ServicesOverview from "./home/ServicesOverview";
// import OurProcess from "./home/OurProcess";
// import CaseStudies from "./home/CaseStudies";
// import ResultsMetrics from "./home/ResultsMetrics";
// import Testimonials from "./home/Testimonials";
// import PricingSnapshot from "./home/PricingSnapshot";
// import FreeAudit from "./home/FreeAudit";
// import FAQ from "./home/FAQ";
// import FinalCTA from "./home/FinalCTA";
import { useEffect } from "react";
import { useLocation } from "react-router-dom";
import Hero from "./Hero";
import ServicesSection from "./ServicesOverview";
import AboutSection from "./AboutSection";
import PortfolioSection from "./CaseStudies";
import ProcessSection from "./ProcessSection";
import TestimonialsTeamSection from "./TestimonialsTeamSection";

export default function Home({ setOpenCalendly }) {
  const location = useLocation();

  useEffect(() => {
    if (location.state?.scrollTo === "case-studies") {
      setTimeout(() => {
        const section = document.getElementById("case-studies");
        if (!section) return;

        const yOffset = 200; // increase = go more down
        const y =
          section.getBoundingClientRect().top + window.scrollY + yOffset;

        window.scrollTo({
          top: y,
          behavior: "smooth",
        });
      }, 100);
    }
  }, [location]);
  return (
    <main>
      {/* Hero */}
      <Hero />

      <AboutSection />
      <ServicesSection />
      <PortfolioSection />
      <ProcessSection />
      <TestimonialsTeamSection />
      {/* <TrustedBy /> */}
      {/* <WhyChooseUs />
      <ServicesOverview />
      <OurProcess /> */}

      {/* <CaseStudies /> */}
      {/* <ResultsMetrics /> */}

      {/* <Testimonials /> */}
      {/* <PricingSnapshot /> */}

      {/* <FreeAudit /> */}

      {/* <FAQ /> */}

      {/* Final CTA */}
      {/* <FinalCTA setOpenCalendly={setOpenCalendly} /> */}
    </main>
  );
}
