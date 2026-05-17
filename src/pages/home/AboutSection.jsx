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
      id="about"
      aria-labelledby="about-heading"
      className="
    relative
    w-full
    min-h-[calc(100vh-76px)]
    flex
    items-center
    justify-center
    overflow-hidden
    py-10
    sm:py-12
    lg:py-8
    -scroll-mt-6
  "
      style={{
        background:
          "linear-gradient(135deg, #ffffff 0%, #f6f8ff 45%, #eef3ff 100%)",
      }}
    >
      {/* Background */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        <div className="absolute top-[-10%] left-[-5%] w-[360px] sm:w-[500px] h-[360px] sm:h-[500px] rounded-full bg-[#374b82]/5 blur-[110px]" />

        <div className="absolute bottom-[-10%] right-[-5%] w-[420px] sm:w-[620px] h-[420px] sm:h-[620px] rounded-full bg-[#374b82]/10 blur-[140px]" />

        <div
          className="absolute inset-0 opacity-[0.12]"
          style={{
            backgroundImage: `radial-gradient(#374b82 1px, transparent 1px)`,
            backgroundSize: "32px 32px",
          }}
        />
      </div>

      {/* Content Wrapper */}
      <div
        className="
      relative
      z-10
      w-full
      max-w-[1600px]
      mx-auto
      px-5
      sm:px-8
      lg:px-12
      xl:px-16
      2xl:px-20
    "
      >
        <div
          className="
        w-full
        flex
        flex-col
        lg:flex-row
        items-center
        justify-between
        gap-10
        lg:gap-8
        xl:gap-12
        2xl:gap-14
      "
        >
          {/* Left Content */}
          <div
            className="
          w-full
          lg:w-[42%]
          xl:w-[40%]
          2xl:w-[39%]
          text-center
          lg:text-left
          space-y-5
          lg:space-y-5
          order-2
          lg:order-1
          shrink-0
        "
          >
            <div
              className="
            inline-flex
            items-center
            gap-2
            px-4
            py-1.5
            rounded-full
            bg-[#374b82]/10
            border
            border-[#374b82]/20
            text-[#374b82]
            text-xs
            sm:text-sm
            font-semibold
            uppercase
            tracking-[0.16em]
          "
            >
              <Award size={14} aria-hidden="true" />
              About SkillSprint
            </div>

            <div className="space-y-3">
              <h2
                id="about-heading"
                className="
              text-[2.1rem]
              sm:text-[2.6rem]
              md:text-[3rem]
              lg:text-[3rem]
              xl:text-[3.35rem]
              2xl:text-[3.7rem]
              font-bold
              text-[#111827]
              leading-[1.04]
              tracking-tight
            "
              >
                Your Trusted{" "}
                <span className="block text-[#374b82]">
                  IT Solutions Partner
                </span>
              </h2>

              <p
                className="
              text-[15px]
              sm:text-base
              lg:text-[17px]
              text-[#4b5563]
              max-w-xl
              mx-auto
              lg:mx-0
              leading-relaxed
            "
              >
                At{" "}
                <strong className="text-[#374b82] font-semibold">
                  SkillSprint Technologies
                </strong>
                , we build{" "}
                <strong className="text-[#374b82] font-semibold">
                  scalable digital solutions
                </strong>{" "}
                that help businesses improve efficiency, visibility, and growth.
              </p>
            </div>

            {/* Feature Points */}
            <div className="space-y-4 pt-1">
              {features.map((feature) => (
                <article
                  key={feature.title}
                  className="flex gap-4 text-left group"
                >
                  <div
                    className="
                  flex-shrink-0
                  w-9
                  h-9
                  rounded-xl
                  bg-[#374b82]/10
                  text-[#374b82]
                  flex
                  items-center
                  justify-center
                  transition-colors
                  duration-300
                  group-hover:bg-[#374b82]
                  group-hover:text-white
                "
                    aria-hidden="true"
                  >
                    {feature.icon}
                  </div>

                  <div>
                    <h3 className="text-[15px] font-bold text-[#172033] mb-1">
                      {feature.title}
                    </h3>
                    <p className="text-[13.5px] text-[#4b5563] leading-relaxed">
                      {feature.description}
                    </p>
                  </div>
                </article>
              ))}
            </div>

            {/* Stats Row */}
            <div className="grid grid-cols-3 gap-4 pt-5 border-t border-[#374b82]/10">
              {stats.map((stat) => (
                <div key={stat.label} className="text-center lg:text-left">
                  <div className="text-xl md:text-2xl font-bold text-[#374b82] mb-1">
                    {stat.value}
                  </div>
                  <div className="text-[10px] sm:text-xs text-[#6b7280] font-medium uppercase tracking-wider">
                    {stat.label}
                  </div>
                </div>
              ))}
            </div>
            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-4 pt-2">
              <Link
                to="/contact"
                aria-label="Contact SkillSprint Technologies"
                className="
      w-full
      sm:w-auto
      inline-flex
      items-center
      justify-center
      gap-2
      px-8
      py-4
      bg-[#374b82]
      !text-white
      font-semibold
      rounded-xl
      shadow-lg
      shadow-[#374b82]/20
      hover:bg-[#2f3f70]
      transition-colors
      active:scale-95
      no-underline
    "
              >
                Contact Us
                <ArrowRight size={18} aria-hidden="true" />
              </Link>

              <Link
                to="/services"
                aria-label="View SkillSprint Technologies services"
                className="
      w-full
      sm:w-auto
      inline-flex
      items-center
      justify-center
      gap-2
      px-8
      py-4
      bg-white/80
      !text-[#374b82]
      font-semibold
      rounded-xl
      border
      border-[#374b82]/20
      hover:bg-white
      hover:border-[#374b82]/40
      transition-colors
      no-underline
    "
              >
                View Services
              </Link>
            </div>
          </div>

          {/* Right Visual */}
          <div
            className="
          relative
          w-full
          lg:w-[54%]
          xl:w-[56%]
          2xl:w-[57%]
          flex
          justify-center
          lg:justify-end
          order-1
          lg:order-2
          overflow-visible
        "
          >
            <div
              className="
            relative
            w-full
            max-w-[340px]
            sm:max-w-[430px]
            md:max-w-[500px]
            lg:max-w-[500px]
            xl:max-w-[560px]
            2xl:max-w-[590px]
            aspect-square
            rounded-[2rem]
            overflow-hidden
            bg-white/65
            backdrop-blur-xl
            border
            border-[#374b82]/10
            shadow-[0_20px_60px_rgba(55,75,130,0.12)]
          "
            >
              {/* Abstract Tech Visual */}
              <div className="absolute inset-0 bg-gradient-to-br from-[#374b82]/5 to-transparent">
                <div
                  className="absolute inset-0 opacity-25"
                  style={{
                    backgroundImage: `linear-gradient(#374b82 1px, transparent 1px), linear-gradient(90deg, #374b82 1px, transparent 1px)`,
                    backgroundSize: "40px 40px",
                    backgroundPosition: "center center",
                  }}
                />

                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="w-36 h-36 sm:w-44 sm:h-44 rounded-full bg-[#374b82]/10 blur-3xl" />
                </div>

                <div className="absolute inset-0 flex items-center justify-center">
                  <div
                    className="
                  w-18
                  h-18
                  sm:w-22
                  sm:h-22
                  md:w-24
                  md:h-24
                  rounded-2xl
                  bg-white/80
                  backdrop-blur
                  border
                  border-[#374b82]/20
                  shadow-xl
                  flex
                  items-center
                  justify-center
                  text-[#374b82]
                "
                    aria-hidden="true"
                  >
                    <Globe size={38} strokeWidth={1.5} />
                  </div>
                </div>

                <div className="absolute top-1/4 left-1/4 w-1/2 h-px bg-gradient-to-r from-transparent via-[#374b82]/30 to-transparent rotate-45" />
                <div className="absolute bottom-1/4 right-1/4 w-1/2 h-px bg-gradient-to-r from-transparent via-[#374b82]/30 to-transparent -rotate-45" />
              </div>

              {/* Floating Stat Card */}
              <div
                className="
              absolute
              top-4
              right-4
              sm:top-5
              sm:right-5
              p-3
              rounded-2xl
              bg-white/90
              backdrop-blur-md
              border
              border-white/50
              shadow-lg
            "
              >
                <div className="flex items-center gap-3">
                  <div
                    className="
                  w-9
                  h-9
                  rounded-full
                  bg-[#374b82]/10
                  flex
                  items-center
                  justify-center
                  text-[#374b82]
                "
                    aria-hidden="true"
                  >
                    <CheckCircle size={19} />
                  </div>

                  <div>
                    <div className="text-base font-bold text-[#111827]">
                      25+
                    </div>
                    <div className="text-[11px] text-[#6b7280]">
                      Years of Experience
                    </div>
                  </div>
                </div>
              </div>

              {/* Floating Bottom Card */}
              <div
                className="
              absolute
              bottom-4
              left-4
              sm:bottom-5
              sm:left-5
              px-4
              py-2.5
              rounded-xl
              bg-white/90
              backdrop-blur-md
              border
              border-white/50
              shadow-lg
            "
              >
                <div className="flex items-center gap-2 text-[#374b82] font-semibold text-xs sm:text-sm">
                  <div className="w-2 h-2 rounded-full bg-green-500" />
                  Trusted Digital Partner
                </div>
              </div>
            </div>

            <div className="absolute -z-10 top-10 -right-4 sm:-right-8 w-28 sm:w-32 h-28 sm:h-32 rounded-2xl bg-[#374b82]/10 blur-2xl" />
            <div className="absolute -z-10 -bottom-6 -left-4 sm:-left-8 w-32 sm:w-40 h-32 sm:h-40 rounded-full bg-[#374b82]/5 blur-3xl" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
