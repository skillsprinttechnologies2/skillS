import React from "react";
import { Link, useParams } from "react-router-dom";
import {
  ArrowLeft,
  Download,
  MessageCircle,
  CheckCircle,
  Clock,
  Briefcase,
  TrendingUp,
  Layers,
} from "react-feather";
import { caseStudies } from "../../data/caseStudies";

const WHATSAPP_NUMBER = "919876543210";

const FloatingBackground = () => (
  <>
    <style>{`
      @keyframes float-a {
        0%, 100% { transform: translateY(0px) rotate(8deg); }
        50% { transform: translateY(-14px) rotate(8deg); }
      }

      @keyframes float-b {
        0%, 100% { transform: translateY(0px) rotate(-6deg); }
        50% { transform: translateY(-10px) rotate(-6deg); }
      }

      @keyframes float-c {
        0%, 100% { transform: translateY(0px) rotate(12deg); }
        50% { transform: translateY(-8px) rotate(12deg); }
      }

      .float-a { animation: float-a 9s ease-in-out infinite; }
      .float-b { animation: float-b 11s ease-in-out infinite; }
      .float-c { animation: float-c 13s ease-in-out infinite; }
    `}</style>

    <div
      className="absolute inset-0 pointer-events-none overflow-hidden"
      aria-hidden="true"
    >
      <div
        className="absolute inset-0 opacity-[0.10]"
        style={{
          backgroundImage: `radial-gradient(#374b82 1px, transparent 1px)`,
          backgroundSize: "30px 30px",
        }}
      />

      <div className="absolute -top-20 -left-20 w-[420px] h-[420px] rounded-full bg-[#374b82]/6 blur-[90px]" />

      <div className="absolute -bottom-20 -right-20 w-[500px] h-[500px] rounded-full bg-[#374b82]/8 blur-[100px]" />

      <div className="float-a hidden sm:block absolute top-36 right-10 xl:right-24 w-20 h-20 rounded-2xl border border-[#374b82]/15 bg-white/40 shadow-[0_8px_32px_rgba(55,75,130,0.10)]" />

      <div className="float-b hidden sm:block absolute top-[55%] -left-6 w-14 h-14 rounded-xl border border-[#374b82]/12 bg-white/30 shadow-[0_6px_24px_rgba(55,75,130,0.08)]" />

      <div className="float-c hidden lg:block absolute bottom-40 right-[18%] w-24 h-24 rounded-full border-2 border-[#374b82]/10 bg-transparent" />
    </div>
  </>
);

const CaseStudyDetail = () => {
  const { slug } = useParams();

  const caseStudy = caseStudies.find((item) => item.slug === slug);

  const whatsappUrl = caseStudy
    ? `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(
        caseStudy.whatsappMessage,
      )}`
    : "#";

  const relatedStudies = caseStudy
    ? caseStudies.filter((item) => item.slug !== slug).slice(0, 2)
    : [];

  const sectionClass = "py-12 sm:py-14";

  const glassCard =
    "bg-white/70 backdrop-blur-sm border border-[#374b82]/10 rounded-3xl shadow-[0_16px_48px_rgba(55,75,130,0.10)]";

  if (!caseStudy) {
    return (
      <main
        className="relative min-h-screen flex items-center justify-center overflow-hidden"
        style={{
          background:
            "linear-gradient(135deg, #ffffff 0%, #f6f8ff 45%, #eef3ff 100%)",
        }}
      >
        <FloatingBackground />

        <div className="relative z-10 text-center px-6 py-20">
          <div className="w-16 h-16 rounded-2xl bg-[#374b82]/10 flex items-center justify-center mx-auto mb-6">
            <Layers size={28} className="text-[#374b82]" aria-hidden="true" />
          </div>

          <h1 className="text-3xl font-bold text-[#111827] mb-3">
            Case Study Not Found
          </h1>

          <p className="text-[#4b5563] mb-8 max-w-md mx-auto">
            The case study you are looking for does not exist or has been moved.
          </p>

          <Link
            to="/"
            className="inline-flex items-center gap-2 px-7 py-3.5 bg-[#374b82] text-white font-semibold rounded-xl hover:bg-[#2f3f70] transition-colors"
          >
            <ArrowLeft size={18} aria-hidden="true" />
            Back to Home
          </Link>
        </div>
      </main>
    );
  }

  return (
    <main
      className="relative w-full min-h-screen overflow-hidden"
      aria-labelledby="case-study-heading"
      style={{
        background:
          "linear-gradient(135deg, #ffffff 0%, #f6f8ff 45%, #eef3ff 100%)",
      }}
    >
      <FloatingBackground />

      <div className="relative z-10 max-w-[1600px] mx-auto px-5 sm:px-8 lg:px-12 xl:px-16 2xl:px-20 pt-32 pb-20">
        <div className="mb-10">
          <Link
            to="/"
            state={{ scrollTo: "case-studies" }}
            className="inline-flex items-center gap-2 text-sm font-medium text-[#172033] hover:text-[#374b82] transition-colors"
          >
            <ArrowLeft size={16} />
            Back to Case Studies
          </Link>
        </div>

        {/* Hero */}
        <section aria-labelledby="case-study-heading" className={sectionClass}>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <div className="flex flex-wrap items-center gap-3 mb-5">
                <span className="inline-flex items-center px-3 py-1 rounded-full bg-[#374b82]/10 border border-[#374b82]/20 text-[#374b82] text-xs font-bold uppercase tracking-widest">
                  Case Study
                </span>

                <span className="inline-flex items-center px-3 py-1 rounded-full bg-white border border-[#374b82]/15 text-[#374b82] text-xs font-semibold">
                  {caseStudy.category}
                </span>
              </div>

              <h1
                id="case-study-heading"
                className="text-4xl sm:text-5xl font-bold text-[#111827] tracking-tight leading-tight mb-5"
              >
                {caseStudy.title}
              </h1>

              <p className="text-base sm:text-lg text-[#4b5563] leading-relaxed mb-8">
                {caseStudy.heroSummary}
              </p>

              <div className="flex flex-col sm:flex-row flex-wrap gap-4">
                <a
                  href={caseStudy.reportPdf}
                  download
                  className="inline-flex items-center justify-center gap-2 px-6 py-3.5 bg-[#374b82] text-white font-semibold rounded-xl shadow-[0_12px_30px_rgba(55,75,130,0.28)] hover:bg-[#2f3f70] transition-colors active:scale-95"
                  aria-label={`Download report for ${caseStudy.title}`}
                >
                  <Download size={17} aria-hidden="true" />
                  Download Report
                </a>

                <a
                  href={whatsappUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center justify-center gap-2 px-6 py-3.5 bg-white text-[#374b82] font-semibold rounded-xl border border-[#374b82]/20 hover:border-[#374b82]/40 transition-colors"
                  aria-label={`Know more about ${caseStudy.title} on WhatsApp`}
                >
                  <MessageCircle size={17} aria-hidden="true" />
                  Know More on WhatsApp
                </a>
              </div>
            </div>

            <div className={`${glassCard} p-7 sm:p-8`}>
              <h2 className="text-sm font-bold text-[#374b82] uppercase tracking-widest mb-6">
                Project Snapshot
              </h2>

              <div className="space-y-5">
                {[
                  {
                    icon: <Briefcase size={17} aria-hidden="true" />,
                    label: "Client Type",
                    value: caseStudy.clientType,
                  },
                  {
                    icon: <Clock size={17} aria-hidden="true" />,
                    label: "Timeline",
                    value: caseStudy.timeline,
                  },
                  {
                    icon: <Layers size={17} aria-hidden="true" />,
                    label: "Category",
                    value: caseStudy.category,
                  },
                  {
                    icon: <TrendingUp size={17} aria-hidden="true" />,
                    label: "Main Result",
                    value: caseStudy.mainResult,
                  },
                ].map((item) => (
                  <div
                    key={item.label}
                    className="flex items-center gap-4 pb-4 border-b border-[#374b82]/10 last:border-0 last:pb-0"
                  >
                    <div className="w-9 h-9 rounded-xl bg-[#374b82]/10 text-[#374b82] flex items-center justify-center flex-shrink-0">
                      {item.icon}
                    </div>

                    <div>
                      <p className="text-xs text-gray-400 font-medium mb-0.5">
                        {item.label}
                      </p>

                      <p className="text-sm font-semibold text-[#111827]">
                        {item.value}
                      </p>
                    </div>
                  </div>
                ))}

                <div>
                  <p className="text-xs text-gray-400 font-medium mb-2.5">
                    Services Used
                  </p>

                  <div className="flex flex-wrap gap-2">
                    {caseStudy.servicesUsed.map((service) => (
                      <span
                        key={service}
                        className="px-3 py-1 text-xs font-medium rounded-lg bg-[#374b82]/10 text-[#374b82] border border-[#374b82]/10"
                      >
                        {service}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        <hr className="border-[#374b82]/10" />

        {/* Challenge */}
        <section className={sectionClass} aria-labelledby="challenge-heading">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#374b82]/10 border border-[#374b82]/20 text-[#374b82] text-xs font-bold uppercase tracking-widest mb-5">
                The Challenge
              </div>

              <h2
                id="challenge-heading"
                className="text-3xl sm:text-4xl font-bold text-[#111827] tracking-tight mb-5"
              >
                What Was the Problem?
              </h2>

              <p className="text-base text-[#4b5563] leading-relaxed">
                {caseStudy.challenge}
              </p>
            </div>

            <div
              className="relative h-52 sm:h-60 rounded-3xl overflow-hidden border border-[#374b82]/10 bg-gradient-to-br from-[#374b82]/10 via-white/60 to-[#eef3ff]"
              aria-hidden="true"
            >
              <div
                className="absolute inset-0 opacity-20"
                style={{
                  backgroundImage: `linear-gradient(rgba(55,75,130,0.15) 1px, transparent 1px), linear-gradient(90deg, rgba(55,75,130,0.15) 1px, transparent 1px)`,
                  backgroundSize: "24px 24px",
                }}
              />

              <div className="absolute inset-0 flex items-center justify-center">
                <div className="w-20 h-20 rounded-2xl bg-white/80 border border-[#374b82]/15 shadow-xl flex items-center justify-center text-[#374b82]">
                  <TrendingUp size={36} strokeWidth={1.5} aria-hidden="true" />
                </div>
              </div>
            </div>
          </div>
        </section>

        <hr className="border-[#374b82]/10" />

        {/* Solution */}
        <section className={sectionClass} aria-labelledby="solution-heading">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#374b82]/10 border border-[#374b82]/20 text-[#374b82] text-xs font-bold uppercase tracking-widest mb-5">
            The Solution
          </div>

          <h2
            id="solution-heading"
            className="text-3xl sm:text-4xl font-bold text-[#111827] tracking-tight mb-5 max-w-2xl"
          >
            How SkillSprint Technologies Solved It
          </h2>

          <p className="text-base text-[#4b5563] leading-relaxed max-w-3xl mb-10">
            {caseStudy.solution}
          </p>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
            {caseStudy.keyFeatures.map((feature) => (
              <div
                key={feature}
                className="flex items-start gap-3 p-5 rounded-2xl bg-white/70 border border-[#374b82]/10 shadow-[0_8px_24px_rgba(55,75,130,0.08)] hover:-translate-y-1 transition-transform duration-200"
              >
                <CheckCircle
                  size={18}
                  className="text-[#374b82] flex-shrink-0 mt-0.5"
                  aria-hidden="true"
                />

                <span className="text-sm font-medium text-[#374b82]">
                  {feature}
                </span>
              </div>
            ))}
          </div>
        </section>

        <hr className="border-[#374b82]/10" />

        {/* Process */}
        <section className={sectionClass} aria-labelledby="process-heading">
          <div className="text-center max-w-2xl mx-auto mb-12">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#374b82]/10 border border-[#374b82]/20 text-[#374b82] text-xs font-bold uppercase tracking-widest mb-4">
              Delivery Process
            </div>

            <h2
              id="process-heading"
              className="text-3xl sm:text-4xl font-bold text-[#111827] tracking-tight"
            >
              How We Delivered It
            </h2>
          </div>

          <div className="relative">
            <div
              className="hidden lg:block absolute top-8 left-[calc(10%+28px)] right-[calc(10%+28px)] h-0.5 bg-[#374b82]/12"
              aria-hidden="true"
            />

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-6">
              {caseStudy.processSteps.map((step, index) => (
                <div
                  key={step.title}
                  className="relative flex flex-col items-center text-center"
                >
                  <div className="relative z-10 w-14 h-14 rounded-full bg-[#374b82] text-white flex items-center justify-center font-bold text-lg shadow-[0_8px_24px_rgba(55,75,130,0.30)] mb-4 flex-shrink-0">
                    {String(index + 1).padStart(2, "0")}
                  </div>

                  <h3 className="text-base font-bold text-[#172033] mb-2">
                    {step.title}
                  </h3>

                  <p className="text-xs text-[#4b5563] leading-relaxed">
                    {step.description}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </section>

        <hr className="border-[#374b82]/10" />

        {/* Results */}
        <section className={sectionClass} aria-labelledby="results-heading">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#374b82]/10 border border-[#374b82]/20 text-[#374b82] text-xs font-bold uppercase tracking-widest mb-5">
            Results
          </div>

          <h2
            id="results-heading"
            className="text-3xl sm:text-4xl font-bold text-[#111827] tracking-tight mb-10"
          >
            What We Achieved
          </h2>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {caseStudy.results.map((result) => (
              <div
                key={result.label}
                className={`${glassCard} p-7 text-center hover:-translate-y-1 transition-transform duration-200`}
              >
                <div className="text-3xl sm:text-4xl font-bold text-[#374b82] mb-2">
                  {result.metric}
                </div>

                <div className="text-sm text-[#4b5563] font-medium">
                  {result.label}
                </div>
              </div>
            ))}
          </div>
        </section>

        <hr className="border-[#374b82]/10" />

        {/* Tech Stack */}
        <section className={sectionClass} aria-labelledby="tech-heading">
          <h2
            id="tech-heading"
            className="text-2xl sm:text-3xl font-bold text-[#111827] tracking-tight mb-7"
          >
            Tech Stack & Services Used
          </h2>

          <div className="flex flex-wrap gap-3">
            {caseStudy.techStack.map((tech) => (
              <span
                key={tech}
                className="px-4 py-2 text-sm font-semibold rounded-xl bg-white/70 border border-[#374b82]/15 text-[#374b82] shadow-sm hover:-translate-y-0.5 transition-transform duration-200"
              >
                {tech}
              </span>
            ))}
          </div>
        </section>

        <hr className="border-[#374b82]/10" />

        {/* CTA */}
        <section className={sectionClass} aria-labelledby="cta-heading">
          <div className="relative overflow-hidden rounded-[2rem] bg-[#374b82] px-8 sm:px-12 lg:px-16 py-14 shadow-[0_30px_90px_rgba(55,75,130,0.30)]">
            <div
              className="absolute inset-0 pointer-events-none"
              aria-hidden="true"
            >
              <div className="absolute -right-16 -top-16 w-72 h-72 rounded-full border border-white/10" />
              <div className="absolute -right-8 -bottom-8 w-48 h-48 rounded-full border border-white/10" />
              <div className="absolute left-[-5%] bottom-[-30%] w-72 h-72 rounded-full bg-white/5 blur-[60px]" />

              <div
                className="absolute inset-0 opacity-[0.07]"
                style={{
                  backgroundImage: `radial-gradient(#ffffff 1px, transparent 1px)`,
                  backgroundSize: "22px 22px",
                }}
              />
            </div>

            <div className="relative z-10 max-w-2xl">
              <h2
                id="cta-heading"
                className="text-3xl sm:text-4xl font-bold text-white tracking-tight leading-tight mb-4"
              >
                Want a Similar Result for Your Business?
              </h2>

              <p className="text-base text-white/80 leading-relaxed mb-8">
                Talk to SkillSprint Technologies and explore how we can build a
                digital solution tailored to your business goals.
              </p>

              <div className="flex flex-col sm:flex-row gap-4">
                <Link
                  to="/contact"
                  className="inline-flex items-center justify-center gap-2 px-7 py-4 bg-white text-[#374b82] font-semibold rounded-xl hover:bg-gray-50 transition-colors active:scale-95"
                  aria-label="Contact SkillSprint Technologies"
                >
                  Contact Us
                </Link>

                <a
                  href={whatsappUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center justify-center gap-2 px-7 py-4 bg-white/10 text-white border border-white/20 font-semibold rounded-xl hover:bg-white/20 transition-colors"
                  aria-label="Know more on WhatsApp"
                >
                  <MessageCircle size={18} aria-hidden="true" />
                  Know More on WhatsApp
                </a>
              </div>
            </div>
          </div>
        </section>

        {/* Related */}
        {relatedStudies.length > 0 && (
          <section className={sectionClass} aria-labelledby="related-heading">
            <h2
              id="related-heading"
              className="text-2xl sm:text-3xl font-bold text-[#111827] tracking-tight mb-8"
            >
              Related Case Studies
            </h2>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              {relatedStudies.map((related) => (
                <Link
                  key={related.slug}
                  to={`/case-studies/${related.slug}`}
                  className={`${glassCard} p-7 hover:-translate-y-2 transition-transform duration-300 hover:border-[#374b82]/25 group`}
                  aria-label={`Read case study: ${related.title}`}
                >
                  <div className="flex items-center gap-2 mb-3">
                    <span className="px-2.5 py-1 text-[10px] font-bold uppercase tracking-wider rounded-full bg-[#374b82]/10 text-[#374b82] border border-[#374b82]/15">
                      {related.category}
                    </span>
                  </div>

                  <h3 className="text-xl font-bold text-[#172033] group-hover:text-[#374b82] transition-colors mb-3">
                    {related.title}
                  </h3>

                  <p className="text-sm text-[#4b5563] leading-relaxed mb-4">
                    {related.shortDescription}
                  </p>

                  <div className="inline-flex items-center gap-2 text-sm font-semibold text-[#374b82] group-hover:gap-3 transition-all">
                    Read Case Study
                    <TrendingUp size={15} aria-hidden="true" />
                  </div>
                </Link>
              ))}
            </div>
          </section>
        )}
      </div>
    </main>
  );
};

export default CaseStudyDetail;
