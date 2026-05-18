import React, { useState, useEffect, useRef, useCallback } from "react";
import { Link } from "react-router-dom";
import {
  Star,
  ArrowRight,
  Users,
  ChevronLeft,
  ChevronRight,
} from "react-feather";

// ─── Data ─────────────────────────────────────────────────────────────────────

const testimonials = [
  {
    id: 1,
    name: "David L.",
    role: "CTO, TechCore Solutions",
    initials: "DL",
    rating: 4.5,
    quote:
      "SkillSprint modernized our operations with a reliable digital solution that delivered real results faster than we expected.",
    result: "Delivered in 4 weeks",
  },
  {
    id: 2,
    name: "Sarah M.",
    role: "Manager, Global Finance Corp",
    initials: "SM",
    rating: 5,
    quote:
      "Secure, scalable, and delivered on time. Their communication was crystal clear from kickoff all the way to launch.",
    result: "Zero downtime launch",
  },
  {
    id: 3,
    name: "James R.",
    role: "CEO, InnovateX",
    initials: "JR",
    rating: 4,
    quote:
      "They understood our vision immediately and built a solution that genuinely improved our day-to-day workflow.",
    result: "Workflow improved",
  },
  {
    id: 4,
    name: "Anita P.",
    role: "Director, BrightEdge Retail",
    initials: "AP",
    rating: 4.5,
    quote:
      "Lead conversions improved noticeably within two months. The team was focused on outcomes, not just deliverables.",
    result: "Conversions up 2x",
  },
  {
    id: 5,
    name: "Marcus T.",
    role: "Founder, LaunchPad Ventures",
    initials: "MT",
    rating: 5,
    quote:
      "Collaborative, transparent, and professional. SkillSprint treated our project with full ownership and care.",
    result: "On time and on budget",
  },
  {
    id: 6,
    name: "Priya K.",
    role: "Head of Operations, NexaTech",
    initials: "PK",
    rating: 4.5,
    quote:
      "Their chatbot automation saved our support team hours every week. The implementation was smooth and well-documented.",
    result: "Support hours cut by 60%",
  },
];

const TOTAL = testimonials.length;
const AUTO_INTERVAL = 3000;
const FADE_OUT_TIME = 220;
const FADE_IN_DELAY = 70;

// ─── Card Position Calculator ─────────────────────────────────────────────────

function getPosition(index, activeIndex, total) {
  let diff = index - activeIndex;

  if (diff > total / 2) diff -= total;
  if (diff < -total / 2) diff += total;

  return diff;
}

// ─── Dynamic Rating Stars ─────────────────────────────────────────────────────

const RatingStars = ({ rating = 5 }) => {
  return (
    <div className="flex items-center gap-2" aria-label={`${rating} out of 5`}>
      <div className="flex items-center gap-1">
        {[...Array(5)].map((_, index) => {
          const starNumber = index + 1;
          const isFull = rating >= starNumber;
          const isHalf = rating >= starNumber - 0.5 && rating < starNumber;

          return (
            <span
              key={index}
              className="relative inline-flex w-[17px] h-[17px]"
            >
              {/* Empty star */}
              <Star
                size={17}
                className="absolute inset-0 text-[#374b82]/25"
                aria-hidden="true"
              />

              {/* Full star */}
              {isFull && (
                <Star
                  size={17}
                  className="absolute inset-0 text-[#374b82] fill-[#374b82]"
                  aria-hidden="true"
                />
              )}

              {/* Half star */}
              {isHalf && (
                <span className="absolute inset-0 overflow-hidden w-1/2">
                  <Star
                    size={17}
                    className="text-[#374b82] fill-[#374b82]"
                    aria-hidden="true"
                  />
                </span>
              )}
            </span>
          );
        })}
      </div>

      <span className="text-xs font-bold text-[#374b82]">
        {rating.toFixed(1)}/5
      </span>
    </div>
  );
};

// ─── Single Testimonial Card ──────────────────────────────────────────────────

const TestimonialCard = ({ item, position, isChanging, onClick }) => {
  const isActive = position === 0;
  const isAdjacent = position === 1 || position === -1;
  const isVisible = isActive || isAdjacent;

  const offsetX = position * 110;
  const baseScale = isActive ? 1 : isAdjacent ? 0.87 : 0.72;

  const opacity = isActive ? (isChanging ? 0 : 1) : isAdjacent ? 0.28 : 0;

  const blurPx = isActive ? 0 : isAdjacent ? 1 : 0;
  const zIndex = isActive ? 30 : isAdjacent ? 20 : 0;
  const finalScale = isChanging && isActive ? 0.96 : baseScale;

  return (
    <div
      onClick={isAdjacent && !isChanging ? onClick : undefined}
      style={{
        position: "absolute",
        top: "50%",
        left: "50%",
        transform: `translate(-50%, -50%) translateX(${offsetX}px) scale(${finalScale})`,
        opacity,
        filter: blurPx > 0 ? `blur(${blurPx}px)` : "none",
        zIndex,
        pointerEvents: isVisible && !isChanging ? "auto" : "none",
        transition:
          "transform 650ms cubic-bezier(0.22,1,0.36,1), opacity 420ms ease, filter 650ms ease",
        width: "min(720px, 92vw)",
        cursor: isAdjacent && !isChanging ? "pointer" : "default",
        willChange: "transform, opacity, filter",
      }}
    >
      <div className="relative rounded-[2rem] bg-white/75 backdrop-blur-xl border border-[#374b82]/10 shadow-[0_30px_100px_rgba(55,75,130,0.14)] p-8 sm:p-10 lg:p-12 overflow-hidden">
        <div
          className="absolute -top-16 -right-16 w-52 h-52 rounded-full bg-[#374b82]/6 blur-[60px] pointer-events-none"
          aria-hidden="true"
        />
        <div
          className="absolute -bottom-12 -left-12 w-44 h-44 rounded-full bg-[#374b82]/5 blur-[50px] pointer-events-none"
          aria-hidden="true"
        />

        <div
          className="absolute bottom-4 right-6 text-[100px] font-serif text-[#374b82]/7 leading-none select-none pointer-events-none"
          aria-hidden="true"
        >
          "
        </div>

        <div className="relative z-10">
          <div className="flex items-center justify-between gap-4 mb-6">
            <RatingStars rating={item.rating} />

            <div className="flex items-center gap-1.5 px-3 py-1 rounded-full bg-[#374b82]/8 border border-[#374b82]/15">
              <div
                className="w-1.5 h-1.5 rounded-full bg-[#374b82]"
                aria-hidden="true"
              />
              <span className="text-[10px] font-bold text-[#374b82] uppercase tracking-wider">
                {item.result}
              </span>
            </div>
          </div>

          <blockquote className="text-xl sm:text-2xl lg:text-[1.65rem] font-semibold text-[#111827] leading-relaxed mb-8">
            &ldquo;{item.quote}&rdquo;
          </blockquote>

          <div className="flex items-center gap-4">
            <div className="w-12 h-12 flex-shrink-0 rounded-full bg-[#374b82]/10 border border-[#374b82]/20 flex items-center justify-center text-[#374b82] text-sm font-bold">
              {item.initials}
            </div>

            <div>
              <p className="text-sm font-bold text-[#111827]">{item.name}</p>
              <p className="text-xs text-[#4b5563]">{item.role}</p>
              <p className="text-[10px] font-semibold text-[#374b82]/60 uppercase tracking-wider mt-0.5">
                Client Feedback
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

// ─── Component ────────────────────────────────────────────────────────────────

const TestimonialsTeamSection = () => {
  const [activeIndex, setActiveIndex] = useState(0);
  const [isPaused, setIsPaused] = useState(false);
  const [isChanging, setIsChanging] = useState(false);

  const intervalRef = useRef(null);
  const timeoutRef = useRef(null);

  const clearCurrent = useCallback(() => {
    if (intervalRef.current) {
      clearInterval(intervalRef.current);
      intervalRef.current = null;
    }

    if (timeoutRef.current) {
      clearTimeout(timeoutRef.current);
      timeoutRef.current = null;
    }
  }, []);

  const changeSlide = useCallback(
    (callback) => {
      if (isChanging) return;

      setIsChanging(true);

      timeoutRef.current = setTimeout(() => {
        callback();

        timeoutRef.current = setTimeout(() => {
          setIsChanging(false);
        }, FADE_IN_DELAY);
      }, FADE_OUT_TIME);
    },
    [isChanging],
  );

  const goNext = useCallback(() => {
    changeSlide(() => {
      setActiveIndex((prev) => (prev + 1) % TOTAL);
    });
  }, [changeSlide]);

  const goPrev = useCallback(() => {
    changeSlide(() => {
      setActiveIndex((prev) => (prev - 1 + TOTAL) % TOTAL);
    });
  }, [changeSlide]);

  useEffect(() => {
    if (!isPaused && !isChanging) {
      intervalRef.current = setInterval(goNext, AUTO_INTERVAL);
    }

    return () => {
      if (intervalRef.current) {
        clearInterval(intervalRef.current);
        intervalRef.current = null;
      }
    };
  }, [isPaused, isChanging, goNext]);

  useEffect(() => {
    return () => clearCurrent();
  }, [clearCurrent]);

  const handleDotClick = (index) => {
    if (index === activeIndex || isChanging) return;

    if (intervalRef.current) {
      clearInterval(intervalRef.current);
      intervalRef.current = null;
    }

    changeSlide(() => {
      setActiveIndex(index);
    });
  };

  return (
    <section className="relative bg-transperent w-full overflow-hidden py-20 lg:py-28">
      <div className="relative z-10 max-w-[1600px] mx-auto px-5 sm:px-8 lg:px-12 xl:px-16 2xl:px-20">
        {/* Testimonials */}
        <div className="mb-20">
          <div className="text-center max-w-2xl mx-auto mb-16">
            <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-[#374b82]/10 border border-[#374b82]/20 text-[#374b82] text-xs font-bold uppercase tracking-widest mb-4">
              Testimonials
            </div>

            <h2 className="text-4xl md:text-5xl font-bold text-[#111827] tracking-tight mb-4">
              What Our <span className="text-[#374b82]">Customers</span> Say
            </h2>

            <p className="text-base sm:text-lg text-[#4b5563] leading-relaxed">
              Real feedback from businesses and learners who trusted SkillSprint
              Technologies to deliver results.
            </p>
          </div>

          <div
            className="relative"
            onMouseEnter={() => setIsPaused(true)}
            onMouseLeave={() => setIsPaused(false)}
          >
            <div
              className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[300px] rounded-full bg-[#374b82]/8 blur-[80px] pointer-events-none"
              aria-hidden="true"
            />

            <div
              className="relative mx-auto overflow-visible"
              style={{ height: "340px", maxWidth: "960px" }}
              role="region"
              aria-label="Testimonials carousel"
            >
              {testimonials.map((item, index) => {
                const position = getPosition(index, activeIndex, TOTAL);

                return (
                  <TestimonialCard
                    key={item.id}
                    item={item}
                    position={position}
                    isChanging={isChanging}
                    onClick={() => {
                      if (position === 1) goNext();
                      if (position === -1) goPrev();
                    }}
                  />
                );
              })}
            </div>

            <div className="flex items-center justify-center gap-6 mt-10">
              <button
                type="button"
                onClick={goPrev}
                disabled={isChanging}
                className="w-11 h-11 flex items-center justify-center rounded-full bg-white border border-[#374b82]/15 text-[#374b82] shadow-[0_6px_20px_rgba(55,75,130,0.12)] hover:bg-[#374b82] hover:text-white hover:border-[#374b82] transition-all duration-200 active:scale-95 disabled:opacity-50 disabled:pointer-events-none"
                aria-label="Previous testimonial"
              >
                <ChevronLeft size={20} />
              </button>

              <div
                className="flex items-center gap-2"
                role="tablist"
                aria-label="Testimonial navigation"
              >
                {testimonials.map((_, i) => (
                  <button
                    key={i}
                    type="button"
                    role="tab"
                    aria-selected={i === activeIndex}
                    aria-label={`Go to testimonial ${i + 1}`}
                    disabled={isChanging}
                    onClick={() => handleDotClick(i)}
                    className={`h-2 rounded-full transition-all duration-300 disabled:pointer-events-none ${
                      i === activeIndex
                        ? "w-8 bg-[#374b82]"
                        : "w-2 bg-[#374b82]/20 hover:bg-[#374b82]/45"
                    }`}
                  />
                ))}
              </div>

              <button
                type="button"
                onClick={goNext}
                disabled={isChanging}
                className="w-11 h-11 flex items-center justify-center rounded-full bg-white border border-[#374b82]/15 text-[#374b82] shadow-[0_6px_20px_rgba(55,75,130,0.12)] hover:bg-[#374b82] hover:text-white hover:border-[#374b82] transition-all duration-200 active:scale-95 disabled:opacity-50 disabled:pointer-events-none"
                aria-label="Next testimonial"
              >
                <ChevronRight size={20} />
              </button>
            </div>
          </div>
        </div>

        {/* Team CTA Block */}
        <div className="relative overflow-hidden rounded-[2rem] bg-white/60 backdrop-blur-xl border border-[#374b82]/10 shadow-[0_30px_100px_rgba(55,75,130,0.12)] px-8 py-12 lg:p-16">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
            <div className="space-y-6">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#374b82]/10 border border-[#374b82]/20 text-[#374b82] text-xs font-bold uppercase tracking-widest">
                Leadership
              </div>

              <h3 className="text-3xl md:text-4xl font-bold text-[#111827] tracking-tight leading-tight">
                Meet the Minds Behind Our{" "}
                <span className="text-[#374b82]">Success</span>
              </h3>

              <p className="text-lg text-[#4b5563]">
                Our team combines strategy, design, development, and support to
                deliver solutions that create real business impact.
              </p>

              <div className="flex flex-col sm:flex-row gap-4 pt-2">
                <Link
                  to="/about"
                  className="inline-flex items-center justify-center gap-2 px-8 py-4 bg-[#374b82] !text-white font-semibold rounded-xl shadow-lg shadow-[#374b82]/20 hover:bg-[#2f3f70] transition-all active:scale-95"
                >
                  Meet Our Team
                  <ArrowRight size={18} aria-hidden="true" />
                </Link>

                <Link
                  to="/contact"
                  className="inline-flex items-center justify-center gap-2 px-8 py-4 bg-white !text-[#374b82] font-semibold rounded-xl border border-[#374b82]/20 hover:bg-white hover:border-[#374b82]/40 transition-all"
                >
                  Apply Now
                </Link>
              </div>
            </div>

            <div className="relative">
              <div className="relative h-[320px] lg:h-[360px] w-full rounded-3xl bg-gradient-to-br from-[#374b82]/15 via-white/60 to-white/40 border border-[#374b82]/10 shadow-[0_25px_80px_rgba(55,75,130,0.15)] overflow-hidden">
                <div
                  className="absolute inset-0 opacity-[0.15]"
                  style={{
                    backgroundImage: `linear-gradient(#374b82 1px, transparent 1px), linear-gradient(90deg, #374b82 1px, transparent 1px)`,
                    backgroundSize: "40px 40px",
                  }}
                  aria-hidden="true"
                />

                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="w-24 h-24 rounded-2xl bg-white/90 backdrop-blur-xl border border-[#374b82]/20 shadow-xl flex items-center justify-center text-[#374b82]">
                    <Users size={42} aria-hidden="true" />
                  </div>
                </div>

                <div className="absolute top-8 left-8 px-5 py-2.5 rounded-2xl bg-white/80 backdrop-blur-xl border border-[#374b82]/10 shadow-md text-sm font-semibold text-[#374b82]">
                  Strategy
                </div>

                <div className="absolute top-12 right-10 px-5 py-2.5 rounded-2xl bg-white/80 backdrop-blur-xl border border-[#374b82]/10 shadow-md text-sm font-semibold text-[#374b82]">
                  Design
                </div>

                <div className="absolute bottom-10 left-10 px-5 py-2.5 rounded-2xl bg-white/80 backdrop-blur-xl border border-[#374b82]/10 shadow-md text-sm font-semibold text-[#374b82]">
                  Development
                </div>

                <div className="absolute bottom-8 right-8 px-5 py-2.5 rounded-2xl bg-white/80 backdrop-blur-xl border border-[#374b82]/10 shadow-md text-sm font-semibold text-[#374b82]">
                  Support
                </div>

                <div
                  className="absolute inset-0 bg-gradient-to-br from-transparent via-[#374b82]/5 to-transparent"
                  aria-hidden="true"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TestimonialsTeamSection;
