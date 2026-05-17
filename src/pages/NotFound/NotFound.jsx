import React from "react";
import { Link } from "react-router-dom";
import { Home, Briefcase, Users, Mail, ArrowRight } from "react-feather";

// ─── Data ─────────────────────────────────────────────────────────────────────

const navLinks = [
  { label: "Home", to: "/" },
  { label: "Services", to: "/services" },
  { label: "Careers", to: "/careers" },
  { label: "Contact", to: "/contact" },
];

const helpfulLinks = [
  { label: "Home", to: "/", icon: <Home size={15} aria-hidden="true" /> },
  {
    label: "Services",
    to: "/services",
    icon: <Briefcase size={15} aria-hidden="true" />,
  },
  {
    label: "Careers",
    to: "/careers",
    icon: <Users size={15} aria-hidden="true" />,
  },
  {
    label: "Contact",
    to: "/contact",
    icon: <Mail size={15} aria-hidden="true" />,
  },
];

// ─── Illustration ─────────────────────────────────────────────────────────────

const Illustration = () => (
  <>
    <style>{`
      @keyframes float-slow {
        0%, 100% { transform: translateY(0px); }
        50% { transform: translateY(-14px); }
      }
      @keyframes float-medium {
        0%, 100% { transform: translateY(0px) rotate(-3deg); }
        50% { transform: translateY(-10px) rotate(-3deg); }
      }
      @keyframes float-card {
        0%, 100% { transform: translateY(0px) rotate(6deg); }
        50% { transform: translateY(-8px) rotate(6deg); }
      }
      @keyframes float-card-r {
        0%, 100% { transform: translateY(0px) rotate(-8deg); }
        50% { transform: translateY(-10px) rotate(-8deg); }
      }
      @keyframes spin-slow {
        from { transform: rotate(0deg); }
        to { transform: rotate(360deg); }
      }
      .anim-float-slow { animation: float-slow 7s ease-in-out infinite; }
      .anim-float-medium { animation: float-medium 9s ease-in-out infinite; }
      .anim-float-card { animation: float-card 8s ease-in-out infinite; }
      .anim-float-card-r { animation: float-card-r 10s ease-in-out infinite; }
      .anim-spin-slow { animation: spin-slow 18s linear infinite; }
    `}</style>

    <div
      className="relative w-full h-[420px] sm:h-[480px] lg:h-[540px] rounded-[2rem] overflow-hidden select-none"
      style={{
        background:
          "linear-gradient(145deg, #eef3ff 0%, #dde8ff 50%, #f0eaff 100%)",
        boxShadow: "0 24px 80px rgba(55,75,130,0.16)",
      }}
      aria-hidden="true"
    >
      {/* Grid lines */}
      <div
        className="absolute inset-0 opacity-[0.12]"
        style={{
          backgroundImage: `linear-gradient(rgba(55,75,130,0.3) 1px, transparent 1px),
            linear-gradient(90deg, rgba(55,75,130,0.3) 1px, transparent 1px)`,
          backgroundSize: "36px 36px",
        }}
      />

      {/* Blurred bg blobs */}
      <div className="absolute top-[-20%] left-[-10%] w-56 h-56 rounded-full bg-[#374b82]/15 blur-[60px]" />
      <div className="absolute bottom-[-10%] right-[-10%] w-64 h-64 rounded-full bg-violet-300/20 blur-[60px]" />

      {/* Orbit ring */}
      <div className="anim-spin-slow absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[280px] h-[280px] rounded-full border-2 border-dashed border-[#374b82]/20" />

      {/* Central 404 planet */}
      <div
        className="anim-float-slow absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-36 h-36 rounded-full flex flex-col items-center justify-center z-10"
        style={{
          background: "linear-gradient(145deg, #374b82, #4f68b3)",
          boxShadow:
            "0 20px 60px rgba(55,75,130,0.45), inset 0 -4px 12px rgba(0,0,0,0.18)",
        }}
      >
        <span className="text-white font-black text-4xl leading-none tracking-tight">
          404
        </span>
        <span className="text-white/70 text-[10px] font-semibold tracking-widest uppercase mt-1">
          Lost
        </span>
      </div>

      {/* Orbit dot */}
      <div className="absolute top-[18%] left-[62%] w-4 h-4 rounded-full bg-violet-400/70 shadow-lg" />
      <div className="absolute top-[72%] left-[28%] w-3 h-3 rounded-full bg-indigo-300/70 shadow" />
      <div className="absolute top-[28%] left-[22%] w-2.5 h-2.5 rounded-full bg-[#374b82]/50 shadow" />

      {/* Floating skill badge — top left */}
      <div className="anim-float-card absolute top-8 left-6 px-3.5 py-2 rounded-2xl bg-white/80 border border-[#374b82]/15 shadow-[0_8px_24px_rgba(55,75,130,0.14)]">
        <div className="text-[10px] font-bold text-[#374b82] uppercase tracking-wider mb-0.5">
          React
        </div>
        <div className="flex gap-1">
          {[...Array(4)].map((_, i) => (
            <div
              key={i}
              className="h-1 rounded-full bg-[#374b82]"
              style={{ width: i === 3 ? 10 : 14 }}
            />
          ))}
        </div>
      </div>

      {/* Floating code card — top right */}
      <div className="anim-float-card-r absolute top-10 right-6 px-4 py-3 rounded-2xl bg-white/80 border border-[#374b82]/15 shadow-[0_8px_24px_rgba(55,75,130,0.14)]">
        <div className="text-[10px] font-mono text-[#374b82] mb-1">
          error: 404
        </div>
        <div className="text-[10px] font-mono text-gray-400">
          page_not_found
        </div>
      </div>

      {/* Signboard — bottom left */}
      <div className="anim-float-medium absolute bottom-10 left-5">
        <div className="relative flex flex-col gap-2">
          <div className="flex items-center gap-2 px-3 py-1.5 rounded-xl bg-[#374b82] shadow-lg">
            <ArrowRight size={12} className="text-white rotate-180" />
            <span className="text-white text-[11px] font-bold">
              Not This Way
            </span>
          </div>
          <div className="flex items-center gap-2 px-3 py-1.5 rounded-xl bg-white border border-[#374b82]/20 shadow-lg">
            <ArrowRight size={12} className="text-[#374b82]" />
            <span className="text-[#374b82] text-[11px] font-bold">
              This Way
            </span>
          </div>
          {/* Post */}
          <div className="mx-auto w-1 h-10 bg-[#374b82]/30 rounded-full" />
        </div>
      </div>

      {/* Floating tag — bottom right */}
      <div className="anim-float-card absolute bottom-8 right-6 px-4 py-3 rounded-2xl bg-white/80 border border-violet-200 shadow-[0_8px_24px_rgba(109,40,217,0.10)]">
        <div className="flex items-center gap-1.5 mb-1">
          <div className="w-2 h-2 rounded-full bg-red-400" />
          <div className="text-[10px] font-semibold text-gray-500">
            Route error
          </div>
        </div>
        <div className="text-[10px] font-mono text-gray-400">path: /???</div>
      </div>

      {/* Dotted trail connecting signboard to planet */}
      <div className="absolute bottom-[38%] left-[22%] flex gap-2 items-center opacity-40">
        {[...Array(5)].map((_, i) => (
          <div key={i} className="w-1.5 h-1.5 rounded-full bg-[#374b82]" />
        ))}
      </div>
    </div>
  </>
);

// ─── Component ────────────────────────────────────────────────────────────────

const NotFound = () => {
  const currentYear = new Date().getFullYear();

  return (
    <div
      className="min-h-screen w-full flex flex-col overflow-x-hidden"
      style={{
        background:
          "linear-gradient(160deg, #ffffff 0%, #eef3ff 55%, #f8fbff 100%)",
      }}
    >
      {/* Background blobs */}
      <div className="fixed inset-0 pointer-events-none" aria-hidden="true">
        <div className="absolute top-[-8%] left-[-6%] w-[380px] h-[380px] rounded-full bg-[#374b82]/5 blur-[90px]" />
        <div className="absolute bottom-[-8%] right-[-6%] w-[440px] h-[440px] rounded-full bg-violet-300/10 blur-[90px]" />
        <div
          className="absolute inset-0 opacity-[0.07]"
          style={{
            backgroundImage: `radial-gradient(#374b82 1px, transparent 1px)`,
            backgroundSize: "28px 28px",
          }}
        />
      </div>

      {/* ── Header ───────────────────────────────────────────────────────── */}
      <header className="relative z-10 w-full border-b border-[#374b82]/8 bg-white/60 backdrop-blur-md">
        <div className="max-w-[1100px] mx-auto px-5 sm:px-8 lg:px-12 h-20 flex items-center justify-between">
          <Link
            to="/"
            className="flex items-center"
            aria-label="SkillSprint Technologies home"
          >
            <img
              src="/logo.png"
              alt="SkillSprint Technologies"
              className="h-10 w-auto object-contain"
              onError={(e) => {
                e.currentTarget.style.display = "none";
                e.currentTarget.nextSibling.style.display = "flex";
              }}
            />
            <div
              className="hidden flex-col leading-none"
              aria-label="SkillSprint Technologies"
            >
              <span className="text-[#374b82] font-black text-xl tracking-tight">
                SkillSprint
              </span>
              <span className="text-gray-500 font-semibold text-xs tracking-widest uppercase">
                Technologies
              </span>
            </div>
          </Link>

          <nav aria-label="Main navigation">
            <ul className="hidden sm:flex items-center gap-7">
              {navLinks.map((link) => (
                <li key={link.label}>
                  <Link
                    to={link.to}
                    className="text-sm font-medium text-gray-600 hover:text-[#374b82] transition-colors duration-200"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </nav>
        </div>
      </header>

      {/* ── Main ─────────────────────────────────────────────────────────── */}
      <main
        className="relative z-10 flex-1 flex items-center"
        aria-labelledby="not-found-heading"
      >
        <div className="w-full max-w-[1100px] mx-auto px-5 sm:px-8 lg:px-12 py-16 sm:py-20">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
            {/* Left: Content */}
            <div className="order-2 lg:order-1">
              <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-[#374b82]/10 border border-[#374b82]/20 text-[#374b82] text-xs font-bold uppercase tracking-widest mb-5">
                404 Error
              </div>

              <h1
                id="not-found-heading"
                className="text-4xl sm:text-5xl font-bold text-[#111827] tracking-tight leading-tight mb-5"
              >
                Oops! This page took a{" "}
                <span className="text-[#374b82]">wrong sprint.</span>
              </h1>

              <p className="text-base sm:text-lg text-[#4b5563] leading-relaxed mb-3">
                The page you're looking for doesn't exist, may have moved, or is
                temporarily unavailable.
              </p>
              <p className="text-sm text-gray-400 mb-8">
                Let's get you back on track with SkillSprint Technologies.
              </p>

              {/* Primary buttons */}
              <div className="flex flex-col sm:flex-row gap-4 mb-10">
                <Link
                  to="/"
                  className="inline-flex items-center justify-center gap-2 px-7 py-4 bg-[#374b82] text-white font-semibold rounded-xl shadow-[0_16px_40px_rgba(55,75,130,0.28)] hover:bg-[#2f3f70] transition-all active:scale-95"
                  aria-label="Go back to SkillSprint Technologies homepage"
                >
                  <Home size={17} aria-hidden="true" />
                  Back to Homepage
                </Link>
                <Link
                  to="/services"
                  className="inline-flex items-center justify-center gap-2 px-7 py-4 bg-white text-[#374b82] font-semibold rounded-xl border border-[#374b82]/20 hover:border-[#374b82]/40 hover:bg-white/90 transition-all"
                  aria-label="Explore SkillSprint Technologies services"
                >
                  Explore Services
                  <ArrowRight size={17} aria-hidden="true" />
                </Link>
              </div>

              {/* Helpful links */}
              <div>
                <p className="text-xs font-semibold text-gray-400 uppercase tracking-wider mb-4">
                  Or go to
                </p>
                <div className="flex flex-wrap gap-3">
                  {helpfulLinks.map((link) => (
                    <Link
                      key={link.label}
                      to={link.to}
                      className="inline-flex items-center gap-1.5 px-4 py-2 text-sm font-medium text-[#374b82] bg-white border border-[#374b82]/15 rounded-xl hover:border-[#374b82]/35 hover:bg-[#374b82]/5 hover:-translate-y-0.5 transition-all duration-200"
                      aria-label={`Go to ${link.label}`}
                    >
                      {link.icon}
                      {link.label}
                    </Link>
                  ))}
                </div>
              </div>
            </div>

            {/* Right: Illustration */}
            <div className="order-1 lg:order-2">
              <Illustration />
            </div>
          </div>
        </div>
      </main>

      {/* ── Footer ───────────────────────────────────────────────────────── */}
      <footer className="relative z-10 w-full border-t border-[#374b82]/8">
        <div className="max-w-[1100px] mx-auto px-5 sm:px-8 lg:px-12 py-6 text-center">
          <p className="text-xs text-gray-400">
            © {currentYear} SkillSprint Technologies. All rights reserved.
          </p>
        </div>
      </footer>
    </div>
  );
};

export default NotFound;
