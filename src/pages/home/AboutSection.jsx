import React from "react";
import { Link } from "react-router-dom";
import {
  CheckCircle,
  Users,
  Briefcase,
  ArrowRight,
  Zap,
  Award,
  Globe,
} from "react-feather";

const AboutSection = () => {
  const features = [
    {
      icon: <Zap size={20} />,
      title: "Modern Technology",
      description:
        "We use reliable tools, scalable architecture, and modern development practices to build future-ready solutions.",
    },
    {
      icon: <Users size={20} />,
      title: "Experienced Engineers",
      description:
        "Our team combines technical expertise, creative thinking, and practical execution to deliver measurable results.",
    },
    {
      icon: <Briefcase size={20} />,
      title: "Business-Focused Solutions",
      description:
        "Every solution is designed around your goals, customer experience, and operational growth.",
    },
  ];

  const stats = [
    { value: "25+", label: "Projects Delivered" },
    { value: "1000+", label: "Learners & Customers" },
    { value: "10+", label: "Service Areas" },
  ];

  return (
    <section
      className="relative w-full min-h-screen flex items-center overflow-hidden"
      style={{
        background:
          "linear-gradient(135deg, #ffffff 0%, #f6f8ff 45%, #eef3ff 100%)",
      }}
    >
      {/* --- BACKGROUND VISUALS --- */}
      <div className="absolute inset-0 pointer-events-none">
        {/* Soft radial glow top-left */}
        <div className="absolute top-[-10%] left-[-5%] w-[500px] h-[500px] rounded-full bg-[#374b82]/5 blur-[120px]" />

        {/* Soft radial glow bottom-right */}
        <div className="absolute bottom-[-10%] right-[-5%] w-[600px] h-[600px] rounded-full bg-[#374b82]/10 blur-[150px]" />

        {/* Subtle dotted pattern */}
        <div
          className="absolute inset-0 opacity-[0.15]"
          style={{
            backgroundImage: `radial-gradient(#374b82 1px, transparent 1px)`,
            backgroundSize: "32px 32px",
          }}
        />

        {/* Extra floating glass orb - decorative */}
        <div
          className="absolute top-1/2 left-1/4 w-72 h-72 rounded-full bg-white/30 backdrop-blur-3xl border border-white/40 shadow-[0_20px_60px_rgba(55,75,130,0.15)] animate-pulse"
          style={{ animationDuration: "10s" }}
        />
      </div>

      {/* --- MAIN CONTENT --- */}
      <div className="relative z-10 w-full max-w-7xl mx-auto px-6 sm:px-10 lg:px-16 py-24 lg:py-32">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24 items-center">
          {/* LEFT: Content Column */}
          <div className="space-y-8 order-2 lg:order-1">
            {/* Badge */}
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#374b82]/10 border border-[#374b82]/20 text-[#374b82] text-xs font-bold uppercase tracking-widest">
              <Award size={14} />
              About SkillSprint
            </div>

            {/* Heading */}
            <h2 className="text-4xl md:text-5xl font-bold text-[#111827] tracking-tight leading-tight">
              Your Trusted <span className="text-[#374b82]">IT Solutions</span>{" "}
              Partner
            </h2>

            {/* Paragraph */}
            <p className="text-lg text-[#4b5563] leading-relaxed max-w-xl">
              At{" "}
              <span className="font-semibold text-[#374b82]">
                SkillSprint Technologies
              </span>
              , we build{" "}
              <span className="font-semibold text-[#374b82]">
                scalable digital solutions &nbsp;
              </span>
              that help businesses improve efficiency, visibility, and growth.
            </p>

            {/* Feature Points */}
            <div className="space-y-6 pt-2">
              {features.map((feature, index) => (
                <div key={index} className="flex gap-4 group">
                  <div className="flex-shrink-0 w-10 h-10 rounded-xl bg-[#374b82]/10 text-[#374b82] flex items-center justify-center transition-all duration-300 group-hover:bg-[#374b82] group-hover:text-white group-hover:shadow-lg group-hover:shadow-[#374b82]/20">
                    {feature.icon}
                  </div>
                  <div>
                    <h3 className="text-base font-bold text-[#172033] mb-1">
                      {feature.title}
                    </h3>
                    <p className="text-sm text-gray-600 leading-relaxed">
                      {feature.description}
                    </p>
                  </div>
                </div>
              ))}
            </div>

            {/* Stats Row */}
            <div className="grid grid-cols-3 gap-4 pt-6 border-t border-[#374b82]/10">
              {stats.map((stat, index) => (
                <div key={index} className="text-center lg:text-left">
                  <div className="text-2xl md:text-3xl font-bold text-[#374b82] mb-1">
                    {stat.value}
                  </div>
                  <div className="text-xs text-gray-500 font-medium uppercase tracking-wider">
                    {stat.label}
                  </div>
                </div>
              ))}
            </div>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-4 pt-4">
              <Link
                to="/contact"
                className="inline-flex items-center justify-center gap-2 px-8 py-4 bg-[#374b82] !text-white font-semibold rounded-xl shadow-lg shadow-[#374b82]/20 hover:bg-[#2f3f70] transition-all active:scale-95"
              >
                Contact Us
                <ArrowRight size={18} />
              </Link>
              <Link
                to="/services"
                className="inline-flex items-center justify-center gap-2 px-8 py-4 bg-white/80 !text-[#374b82] font-semibold rounded-xl border border-[#374b82]/20 hover:bg-white hover:border-[#374b82]/40 transition-all"
              >
                View Services
              </Link>
            </div>
          </div>

          {/* RIGHT: Visual Column */}
          <div className="relative order-1 lg:order-2">
            {/* Main Glass Card Container */}
            <div className="relative aspect-square max-w-lg mx-auto lg:max-w-none rounded-3xl overflow-hidden bg-white/65 backdrop-blur-xl border border-[#374b82]/10 shadow-[0_20px_60px_rgba(55,75,130,0.12)]">
              {/* Abstract Tech Visual (CSS-only) */}
              <div className="absolute inset-0 bg-gradient-to-br from-[#374b82]/5 to-transparent">
                {/* Grid Pattern inside card */}
                <div
                  className="absolute inset-0 opacity-30"
                  style={{
                    backgroundImage: `linear-gradient(#374b82 1px, transparent 1px), linear-gradient(90deg, #374b82 1px, transparent 1px)`,
                    backgroundSize: "40px 40px",
                    backgroundPosition: "center center",
                  }}
                />

                {/* Central Glow */}
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="w-48 h-48 rounded-full bg-[#374b82]/10 blur-3xl" />
                </div>

                {/* Floating Icon in Center */}
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="w-24 h-24 rounded-2xl bg-white/80 backdrop-blur border border-[#374b82]/20 shadow-xl flex items-center justify-center text-[#374b82]">
                    <Globe size={40} strokeWidth={1.5} />
                  </div>
                </div>

                {/* Connecting Lines Decoration */}
                <div className="absolute top-1/4 left-1/4 w-1/2 h-px bg-gradient-to-r from-transparent via-[#374b82]/30 to-transparent rotate-45" />
                <div className="absolute bottom-1/4 right-1/4 w-1/2 h-px bg-gradient-to-r from-transparent via-[#374b82]/30 to-transparent -rotate-45" />
              </div>

              {/* Image Placeholder ( Uncomment to use instead of abstract visual ) */}
              {/*
              <img 
                src="/about-tech.jpg" 
                alt="Technology Team" 
                className="absolute inset-0 w-full h-full object-cover opacity-90 hover:scale-105 transition-transform duration-700"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#374b82]/20 to-transparent" />
              */}

              {/* Floating Stat Card - Top Right */}
              <div
                className="absolute top-6 right-6 p-4 rounded-2xl bg-white/90 backdrop-blur-md border border-white/50 shadow-lg animate-pulse"
                style={{ animationDuration: "6s" }}
              >
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-full bg-[#374b82]/10 flex items-center justify-center text-[#374b82]">
                    <CheckCircle size={20} />
                  </div>
                  <div>
                    <div className="text-lg font-bold text-[#111827]">25+</div>
                    <div className="text-xs text-gray-500">
                      Years of Exerience
                    </div>
                  </div>
                </div>
              </div>

              {/* Floating Card - Bottom Left */}
              <div className="absolute bottom-6 left-6 px-5 py-3 rounded-xl bg-white/90 backdrop-blur-md border border-white/50 shadow-lg">
                <div className="flex items-center gap-2 text-[#374b82] font-semibold text-sm">
                  <div className="w-2 h-2 rounded-full bg-green-500 animate-pulse" />
                  Trusted Digital Partner
                </div>
              </div>
            </div>

            {/* Decorative Elements outside main card */}
            <div className="absolute -z-10 top-10 -right-10 w-32 h-32 rounded-2xl bg-[#374b82]/10 blur-2xl" />
            <div className="absolute -z-10 -bottom-8 -left-8 w-40 h-40 rounded-full bg-[#374b82]/5 blur-3xl" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
