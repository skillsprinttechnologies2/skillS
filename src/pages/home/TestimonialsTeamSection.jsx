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
    name: "Dr. Ramesh K.",
    role: "Professor, Siddaganga Institute of Technology",
    initials: "RK",
    rating: 5,
    quote:
      "The session was highly interactive and gave students practical exposure to Excel and Power BI workflows used in industries.",
    result: "Excellent student engagement",
  },
  {
    id: 2,
    name: "Anjali P.",
    role: "Training Coordinator",
    initials: "AP",
    rating: 4.5,
    quote:
      "SkillSprint Technologies explained analytics concepts in a very practical and easy-to-understand manner for students.",
    result: "Improved industry awareness",
  },
  {
    id: 3,
    name: "Kiran S.",
    role: "Student Participant",
    initials: "KS",
    rating: 5,
    quote:
      "The Power BI dashboard demonstrations and Excel reporting examples helped us understand real-world analytics workflows.",
    result: "Hands-on learning experience",
  },
  {
    id: 4,
    name: "Meghana R.",
    role: "Workshop Attendee",
    initials: "MR",
    rating: 4.5,
    quote:
      "The workshop was practical, engaging, and focused on industry tools that students actually need to learn.",
    result: "Better practical exposure",
  },
  {
    id: 5,
    name: "Suresh V.",
    role: "Academic Coordinator",
    initials: "SV",
    rating: 5,
    quote:
      "Students responded very positively to the training session and gained valuable insight into analytics and reporting systems.",
    result: "Positive student feedback",
  },
  {
    id: 6,
    name: "Pooja N.",
    role: "Student Volunteer",
    initials: "PN",
    rating: 4.5,
    quote:
      "The interactive examples and dashboard sessions made complex concepts much easier to understand.",
    result: "Improved analytics understanding",
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

            <div className="relative w-full max-w-[340px] sm:max-w-[420px] mx-auto">
              <div className="relative h-[260px] sm:h-[320px] lg:h-[360px] w-full rounded-[28px] bg-gradient-to-br from-[#374b82]/15 via-white/70 to-white/40 border border-[#374b82]/10 shadow-[0_20px_60px_rgba(55,75,130,0.12)] overflow-hidden">
                {/* Grid */}
                <div
                  className="absolute inset-0 opacity-[0.12]"
                  style={{
                    backgroundImage: `
          linear-gradient(#374b82 1px, transparent 1px),
          linear-gradient(90deg, #374b82 1px, transparent 1px)
        `,
                    backgroundSize: "36px 36px",
                  }}
                />

                {/* Center Card */}
                <div className="absolute inset-0 flex items-center justify-center px-4">
                  <div className="w-20 h-20 sm:w-24 sm:h-24 rounded-2xl bg-white/90 backdrop-blur-xl border border-[#374b82]/15 shadow-xl flex items-center justify-center text-[#374b82]">
                    <Users size={36} className="sm:w-[42px] sm:h-[42px]" />
                  </div>
                </div>

                {/* Floating Pills */}
                <div className="absolute top-5 left-4 sm:top-8 sm:left-8 px-4 py-2 rounded-2xl bg-white/85 backdrop-blur-xl border border-[#374b82]/10 shadow-md text-xs sm:text-sm font-semibold text-[#374b82]">
                  Strategy
                </div>

                <div className="absolute top-10 right-4 sm:top-12 sm:right-8 px-4 py-2 rounded-2xl bg-white/85 backdrop-blur-xl border border-[#374b82]/10 shadow-md text-xs sm:text-sm font-semibold text-[#374b82]">
                  Design
                </div>

                <div className="absolute bottom-10 left-4 sm:bottom-10 sm:left-8 px-4 py-2 rounded-2xl bg-white/85 backdrop-blur-xl border border-[#374b82]/10 shadow-md text-xs sm:text-sm font-semibold text-[#374b82]">
                  Development
                </div>

                <div className="absolute bottom-6 right-4 sm:bottom-8 sm:right-8 px-4 py-2 rounded-2xl bg-white/85 backdrop-blur-xl border border-[#374b82]/10 shadow-md text-xs sm:text-sm font-semibold text-[#374b82]">
                  Support
                </div>

                {/* Glow */}
                <div className="absolute inset-0 bg-gradient-to-br from-transparent via-[#374b82]/5 to-transparent" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TestimonialsTeamSection;
