import React from "react";
import { Link } from "react-router-dom";
import {
  Star,
  ArrowRight,
  Users,
  Code,
  PenTool,
  CheckCircle,
} from "react-feather";

/* ───────────── DATA ───────────── */
const testimonials = [
  {
    id: 1,
    name: "David L.",
    role: "CTO, TechCore Solutions",
    quote:
      "SkillSprint helped us modernize our operations with a clean, reliable digital solution. Their approach was structured and results-driven.",
    initials: "DL",
    color: "bg-[#374b82]",
  },
  {
    id: 2,
    name: "Sarah M.",
    role: "Manager, Global Finance Corp",
    quote:
      "Their team delivered secure, scalable work with clear communication from start to finish. We felt confident throughout the process.",
    initials: "SM",
    color: "bg-[#4f68b3]",
  },
  {
    id: 3,
    name: "James R.",
    role: "CEO, InnovateX",
    quote:
      "They understood our vision and turned it into a professional solution that improved our workflow and customer experience.",
    initials: "JR",
    color: "bg-[#2f3f70]",
  },
];

const teamPills = [
  { label: "Strategy", icon: <CheckCircle size={14} /> },
  { label: "Design", icon: <PenTool size={14} /> },
  { label: "Development", icon: <Code size={14} /> },
  { label: "Support", icon: <Users size={14} /> },
];

/* ───────────── STARS ───────────── */
const StarRating = () => (
  <div className="flex gap-1">
    {[...Array(5)].map((_, i) => (
      <Star key={i} size={16} className="fill-[#374b82] text-[#374b82]" />
    ))}
  </div>
);

/* ───────────── COMPONENT ───────────── */
const TestimonialsTeamSection = () => {
  return (
    <section
      className="relative w-full overflow-hidden"
      style={{
        background:
          "linear-gradient(135deg, #ffffff 0%, #f6f8ff 45%, #eef3ff 100%)",
      }}
    >
      {/* ── Background Visuals ── */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-[-10%] left-[-5%] w-[500px] h-[500px] rounded-full bg-[#374b82]/5 blur-[120px]" />
        <div className="absolute bottom-[-10%] right-[-5%] w-[600px] h-[600px] rounded-full bg-[#374b82]/10 blur-[150px]" />
        <div
          className="absolute inset-0 opacity-[0.12]"
          style={{
            backgroundImage: `radial-gradient(#374b82 1px, transparent 1px)`,
            backgroundSize: "32px 32px",
          }}
        />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-6 sm:px-10 lg:px-16 py-20 lg:py-28">
        {/* ════════════════════════════════════════════════
            TESTIMONIALS
        ════════════════════════════════════════════════ */}
        <div className="mb-24">
          {/* Header */}
          <div className="text-center max-w-3xl mx-auto mb-14 space-y-4">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#374b82]/10 border border-[#374b82]/20 text-[#374b82] text-xs font-bold uppercase tracking-widest">
              Testimonials
            </div>
            <h2 className="text-4xl md:text-5xl font-bold text-[#111827] tracking-tight">
              What Our <span className="text-[#374b82]">Customers</span> Say
            </h2>
            <p className="text-lg text-[#4b5563] leading-relaxed">
              Real feedback from businesses and learners who trusted SkillSprint
              Technologies.
            </p>
          </div>

          {/* Cards Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {testimonials.map((t) => (
              <div
                key={t.id}
                className="
                  group relative flex flex-col justify-between
                  p-8 rounded-3xl
                  bg-white/70 backdrop-blur-xl
                  border border-[#374b82]/10
                  shadow-[0_20px_60px_rgba(55,75,130,0.10)]
                  transition-all duration-500
                  hover:-translate-y-2
                  hover:border-[#374b82]/30
                  hover:shadow-[0_30px_80px_rgba(55,75,130,0.16)]
                "
              >
                {/* Stars */}
                <div className="mb-5">
                  <StarRating />
                </div>

                {/* Quote */}
                <p className="text-[#4b5563] text-base leading-relaxed mb-8 flex-grow">
                  "{t.quote}"
                </p>

                {/* Author */}
                <div className="flex items-center gap-4">
                  <div
                    className={`w-12 h-12 rounded-full ${t.color} flex items-center justify-center text-white font-bold text-sm shadow-md`}
                  >
                    {t.initials}
                  </div>
                  <div>
                    <div className="font-bold text-[#172033] text-sm">
                      {t.name}
                    </div>
                    <div className="text-xs text-[#4b5563]">{t.role}</div>
                  </div>
                </div>

                {/* Decorative Quote Mark */}
                <div className="absolute bottom-6 right-8 text-7xl font-serif leading-none text-[#374b82]/10 select-none pointer-events-none">
                  "
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* ════════════════════════════════════════════════
            TEAM CTA BLOCK
        ════════════════════════════════════════════════ */}
        <div
          className="
            relative overflow-hidden
            rounded-[2rem]
            bg-white/60 backdrop-blur-xl
            border border-[#374b82]/10
            shadow-[0_30px_100px_rgba(55,75,130,0.12)]
          "
        >
          {/* Subtle inner glow */}
          <div className="absolute inset-0 pointer-events-none">
            <div className="absolute -top-16 -left-16 w-64 h-64 rounded-full bg-[#374b82]/5 blur-[100px]" />
            <div className="absolute -bottom-12 -right-12 w-48 h-48 rounded-full bg-[#374b82]/10 blur-[80px]" />
          </div>

          <div className="relative z-10 grid grid-cols-1 lg:grid-cols-2 gap-10 items-center p-8 sm:p-12 lg:p-16">
            {/* Left Content */}
            <div className="space-y-6">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#374b82]/10 border border-[#374b82]/20 text-[#374b82] text-xs font-bold uppercase tracking-widest">
                <Users size={14} />
                Leadership
              </div>

              <h2 className="text-3xl md:text-4xl font-bold text-[#111827] tracking-tight leading-tight">
                Meet the Minds Behind Our{" "}
                <span className="text-[#374b82]">Success</span>
              </h2>

              <p className="text-base text-[#4b5563] leading-relaxed max-w-lg">
                Our team combines strategy, design, development, and support to
                deliver solutions that create real business impact.
              </p>

              <div className="flex flex-col sm:flex-row items-start gap-4 pt-2">
                <Link
                  to="/about"
                  className="inline-flex items-center gap-2 px-8 py-4 bg-[#374b82] !text-white font-semibold rounded-xl shadow-lg shadow-[#374b82]/20 hover:bg-[#2f3f70] transition-all active:scale-95"
                >
                  Meet Our Team
                  <ArrowRight size={18} />
                </Link>
                <Link
                  to="/contact"
                  className="inline-flex items-center gap-2 px-8 py-4 !text-[#374b82] font-semibold rounded-xl border border-[#374b82]/20 bg-white/50 hover:bg-white hover:border-[#374b82]/40 transition-all"
                >
                  Apply Now
                </Link>
              </div>
            </div>

            {/* Right Visual — Lightweight CSS 3D-style Card */}
            <div className="relative h-[320px] sm:h-[380px] lg:h-[400px] w-full">
              {/* Main Visual Card */}
              <div
                className="
                  absolute inset-4 sm:inset-6
                  rounded-3xl
                  bg-gradient-to-br from-[#374b82]/15 to-white/50
                  border border-[#374b82]/10
                  shadow-[0_20px_60px_rgba(55,75,130,0.10)]
                  overflow-hidden
                "
              >
                {/* Inner Grid Lines */}
                <div
                  className="absolute inset-0 opacity-[0.15]"
                  style={{
                    backgroundImage: `
                      linear-gradient(rgba(55,75,130,0.12) 1px, transparent 1px),
                      linear-gradient(90deg, rgba(55,75,130,0.12) 1px, transparent 1px)
                    `,
                    backgroundSize: "32px 32px",
                  }}
                />

                {/* Central Glow */}
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="w-40 h-40 rounded-full bg-[#374b82]/8 blur-3xl" />
                </div>

                {/* Central Icon */}
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="w-20 h-20 rounded-2xl bg-white/80 backdrop-blur-md border border-[#374b82]/15 shadow-xl flex items-center justify-center text-[#374b82]">
                    <Users size={32} strokeWidth={1.5} />
                  </div>
                </div>

                {/* Decorative Network Lines */}
                <div className="absolute top-1/4 left-1/4 w-1/2 h-px bg-gradient-to-r from-transparent via-[#374b82]/25 to-transparent rotate-45" />
                <div className="absolute bottom-1/4 right-1/4 w-1/2 h-px bg-gradient-to-r from-transparent via-[#374b82]/25 to-transparent -rotate-45" />
                <div className="absolute top-1/3 left-0 w-full h-px bg-gradient-to-r from-transparent via-[#374b82]/10 to-transparent" />
                <div className="absolute bottom-1/3 left-0 w-full h-px bg-gradient-to-r from-transparent via-[#374b82]/10 to-transparent" />
              </div>

              {/* Floating Mini Cards (Positioned around the visual) */}
              {/* Top-left: Strategy */}
              <div className="absolute top-2 left-0 sm:top-0 sm:left-0 z-20">
                <div
                  className="
                    flex items-center gap-2
                    px-4 py-2.5 rounded-xl
                    bg-white/90 backdrop-blur-md
                    border border-white/60
                    shadow-lg
                    text-sm font-semibold text-[#374b82]
                    animate-pulse
                  "
                  style={{ animationDuration: "6s" }}
                >
                  <CheckCircle size={14} />
                  Strategy
                </div>
              </div>

              {/* Top-right: Design */}
              <div className="absolute top-2 right-0 sm:top-0 sm:right-0 z-20">
                <div
                  className="
                    flex items-center gap-2
                    px-4 py-2.5 rounded-xl
                    bg-white/90 backdrop-blur-md
                    border border-white/60
                    shadow-lg
                    text-sm font-semibold text-[#374b82]
                    animate-pulse
                  "
                  style={{ animationDuration: "8s" }}
                >
                  <PenTool size={14} />
                  Design
                </div>
              </div>

              {/* Bottom-left: Development */}
              <div className="absolute bottom-2 left-0 sm:bottom-0 sm:left-2 z-20">
                <div
                  className="
                    flex items-center gap-2
                    px-4 py-2.5 rounded-xl
                    bg-white/90 backdrop-blur-md
                    border border-white/60
                    shadow-lg
                    text-sm font-semibold text-[#374b82]
                    animate-pulse
                  "
                  style={{ animationDuration: "7s" }}
                >
                  <Code size={14} />
                  Development
                </div>
              </div>

              {/* Bottom-right: Support */}
              <div className="absolute bottom-2 right-0 sm:bottom-0 sm:right-2 z-20">
                <div
                  className="
                    flex items-center gap-2
                    px-4 py-2.5 rounded-xl
                    bg-white/90 backdrop-blur-md
                    border border-white/60
                    shadow-lg
                    text-sm font-semibold text-[#374b82]
                    animate-pulse
                  "
                  style={{ animationDuration: "9s" }}
                >
                  <Users size={14} />
                  Support
                </div>
              </div>

              {/* Decorative blobs behind visual */}
              <div className="absolute -z-10 -top-6 -right-6 w-24 h-24 rounded-full bg-[#374b82]/10 blur-2xl" />
              <div className="absolute -z-10 -bottom-8 -left-8 w-32 h-32 rounded-full bg-[#374b82]/5 blur-3xl" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TestimonialsTeamSection;
