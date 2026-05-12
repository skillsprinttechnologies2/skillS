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

import Hero from "./Hero";
import ServicesSection from "./Services";

export default function Home({ setOpenCalendly }) {
  return (
    <main>
      {/* Hero */}
      <Hero />
      <ServicesSection />

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
