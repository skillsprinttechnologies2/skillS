import React, { useState } from "react";
import { Link } from "react-router-dom";
import {
  Search,
  PenTool,
  CheckCircle,
  Plus,
  Minus,
  ArrowRight,
} from "react-feather";

const steps = [
  {
    id: 0,
    title: "Understand Your Needs",
    description:
      "We begin with a focused consultation to understand your business goals, challenges, users, and technical requirements.",
    icon: <Search size={22} />,
  },
  {
    id: 1,
    title: "Design Tailored Solutions",
    description:
      "We plan the right strategy, structure, and technology stack to create a solution that fits your business perfectly.",
    icon: <PenTool size={22} />,
  },
  {
    id: 2,
    title: "Deliver And Support",
    description:
      "We develop, test, launch, and continue supporting your solution so it performs reliably as your business grows.",
    icon: <CheckCircle size={22} />,
  },
];

const ProcessSection = () => {
  const [activeStep, setActiveStep] = useState(1);

  const indicatorPositions = ["top-[0%]", "top-1/2", "top-full"];

  return (
    <section
      className="relative w-full overflow-hidden py-20 lg:py-24"
      style={{
        background:
          "linear-gradient(135deg, #ffffff 0%, #f6f8ff 45%, #eef3ff 100%)",
      }}
    >
      <div className="relative z-10 w-full max-w-7xl mx-auto px-6 sm:px-10 lg:px-16">
        {/* Main Dark Box Container */}
        <div className="relative overflow-hidden rounded-[2rem] bg-[#374b82] px-6 sm:px-10 lg:px-16 py-14 lg:py-16 shadow-[0_30px_90px_rgba(55,75,130,0.22)]">
          {/* Background Pattern inside the box */}
          <div className="absolute inset-0 pointer-events-none overflow-hidden">
            <div className="absolute -right-20 -top-20 w-96 h-96 rounded-full border border-white/10" />
            <div className="absolute -right-10 -bottom-10 w-64 h-64 rounded-full border border-white/10" />
            <div className="absolute right-[20%] top-[10%] w-2 h-2 rounded-full bg-white/30" />
            <div className="absolute right-[30%] bottom-[20%] w-1.5 h-1.5 rounded-full bg-white/20" />
            <div className="absolute left-[-10%] bottom-[-20%] w-[400px] h-[400px] rounded-full bg-white/5 blur-[100px]" />
            <div
              className="absolute inset-0 opacity-[0.08]"
              style={{
                backgroundImage: `radial-gradient(#ffffff 1px, transparent 1px)`,
                backgroundSize: "24px 24px",
              }}
            />
          </div>

          <div className="relative z-10 grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start">
            {/* Left Content */}
            <div className="lg:col-span-5 space-y-6 pt-2">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/10 border border-white/20 text-white text-xs font-bold uppercase tracking-widest">
                How We Work
              </div>

              <h2 className="text-3xl md:text-4xl font-bold text-white tracking-tight leading-tight">
                How We Deliver Innovation And Excellence
              </h2>

              <p className="text-base text-white/80 leading-relaxed max-w-md">
                We follow a clear process to understand your goals, build the
                right solution, and support your growth after launch.
              </p>

              <Link
                to="/contact"
                className="inline-flex items-center gap-2 px-8 py-4 bg-white !text-[#374b82] font-semibold rounded-xl shadow-lg hover:bg-gray-50 transition-all active:scale-95 mt-4"
              >
                Start Your Project
                <ArrowRight size={18} />
              </Link>
            </div>

            {/* Middle Timeline with Moving Indicator */}
            <div className="hidden lg:flex lg:col-span-1 justify-center pt-4">
              <div className="relative h-[300px] w-[2px] bg-white/25 rounded-full">
                {/* Static dots */}
                <div className="absolute top-0 left-1/2 -translate-x-1/2 w-3 h-3 rounded-full bg-white/60" />
                <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-3 h-3 rounded-full bg-white/40" />
                <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-3 h-3 rounded-full bg-white/60" />

                {/* Moving Active Circle */}
                <div
                  className={`
                    absolute left-1/2 -translate-x-1/2 -translate-y-1/2
                    w-16 h-16 rounded-full bg-white
                    flex items-center justify-center
                    text-[#374b82] font-bold text-xl
                    shadow-[0_20px_50px_rgba(0,0,0,0.3)]
                    transition-all duration-500 ease-out
                    ${indicatorPositions[activeStep]}
                  `}
                >
                  {activeStep + 1}
                </div>
              </div>
            </div>

            {/* Right Accordion Cards */}
            <div className="lg:col-span-6 space-y-4 lg:min-h-[444px]">
              {steps.map((step, index) => {
                const isActive = index === activeStep;

                return (
                  <div
                    key={step.id}
                    onClick={() => setActiveStep(index)}
                    className={`
                      cursor-pointer rounded-2xl border transition-all duration-300 overflow-hidden
                      min-h-[96px] lg:h-[138px]
                      ${
                        isActive
                          ? "bg-[#eef3ff] border-white/60 shadow-[0_20px_50px_rgba(0,0,0,0.16)]"
                          : "bg-white border-white/40 hover:bg-[#f6f8ff]"
                      }
                    `}
                  >
                    <div className="p-6 flex items-start gap-4 h-full">
                      <div
                        className={`
                          flex-shrink-0 w-12 h-12 rounded-xl flex items-center justify-center transition-all duration-300
                          ${
                            isActive
                              ? "bg-[#374b82] text-white shadow-lg shadow-[#374b82]/30"
                              : "bg-gray-100 text-[#374b82]"
                          }
                        `}
                      >
                        {step.icon}
                      </div>

                      <div className="flex-grow min-w-0">
                        <div className="flex items-center justify-between mb-1">
                          <h3
                            className={`
                              text-lg font-bold transition-colors
                              ${isActive ? "text-[#374b82]" : "text-gray-800"}
                            `}
                          >
                            {step.title}
                          </h3>

                          <button
                            type="button"
                            aria-label={
                              isActive ? "Collapse step" : "Expand step"
                            }
                            className={`
                              p-1.5 rounded-full transition-colors
                              ${
                                isActive
                                  ? "bg-[#374b82]/10 text-[#374b82]"
                                  : "bg-gray-100 text-gray-500 hover:bg-gray-200"
                              }
                            `}
                          >
                            {isActive ? (
                              <Minus size={18} />
                            ) : (
                              <Plus size={18} />
                            )}
                          </button>
                        </div>

                        {/* Static-height Description */}
                        <div
                          className={`
                            overflow-hidden transition-all duration-300 ease-in-out
                            ${
                              isActive
                                ? "max-h-32 opacity-100 mt-2"
                                : "max-h-0 opacity-0 mt-0"
                            }
                            lg:max-h-none lg:mt-2
                            ${
                              isActive
                                ? "lg:opacity-100 lg:translate-y-0"
                                : "lg:opacity-0 lg:-translate-y-1 lg:pointer-events-none"
                            }
                          `}
                        >
                          <p className="text-sm text-gray-600 leading-relaxed pr-8 line-clamp-3">
                            {step.description}
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProcessSection;
