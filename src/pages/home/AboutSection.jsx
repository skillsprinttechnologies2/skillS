import React from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { socialLinks } from "@/lib/constants";

import {
  CheckCircle,
  Users,
  Briefcase,
  ArrowRight,
  Zap,
  Award,
  Globe,
  Star,
  Linkedin,
} from "react-feather";
const founderImg = "/CEO/founder.webp";
const img2 = "/coaching/img2.webp";

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

const expertise = [
  "Technology Solutions",
  "Career Development",
  "Digital Transformation",
  "Professional Training",
  "Web Development",
  "Business Strategy",
];

const fadeUp = {
  hidden: { opacity: 0, y: 22 },
  visible: (i = 0) => ({
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.42,
      delay: i * 0.09,
      ease: [0.22, 1, 0.36, 1],
    },
  }),
};

const AboutSection = () => {
  return (
    <section
      id="about"
      aria-labelledby="about-heading"
      className="
        relative
        bg-transparent
        w-full
        flex
        flex-col
        items-center
        justify-center
        overflow-hidden
        py-10
        sm:py-12
        lg:py-8
        -scroll-mt-6
        gap-16
        lg:gap-20
      "
    >
      <section className="gpu"></section>
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
          flex
          flex-col
          gap-16
          lg:gap-20
        "
      >
        {/* ═══════════════════════════════════════════
            ABOUT BLOCK
        ═══════════════════════════════════════════ */}
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
              order-2
              lg:order-1
              shrink-0
            "
          >
            {/* Badge */}
            <motion.div
              variants={fadeUp}
              initial="hidden"
              whileInView="visible"
              custom={0}
              viewport={{ once: true, amount: 0.2 }}
              className="flex justify-center lg:justify-start"
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
            </motion.div>

            {/* Heading + Intro */}
            <motion.div
              variants={fadeUp}
              initial="hidden"
              whileInView="visible"
              custom={1}
              viewport={{ once: true, amount: 0.2 }}
              className="space-y-3"
            >
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
            </motion.div>

            {/* Features */}
            <motion.div
              variants={fadeUp}
              initial="hidden"
              whileInView="visible"
              custom={2}
              viewport={{ once: true, amount: 0.2 }}
              className="space-y-4 pt-1"
            >
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
            </motion.div>

            {/* Stats */}
            <motion.div
              variants={fadeUp}
              initial="hidden"
              whileInView="visible"
              custom={3}
              viewport={{ once: true, amount: 0.2 }}
              className="grid grid-cols-3 gap-4 pt-5 border-t border-[#374b82]/10"
            >
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
            </motion.div>

            {/* CTA Buttons */}
            <motion.div
              variants={fadeUp}
              initial="hidden"
              whileInView="visible"
              custom={4}
              viewport={{ once: true, amount: 0.2 }}
              className="
                flex
                flex-col
                sm:flex-row
                items-center
                justify-center
                lg:justify-start
                gap-4
                pt-2
              "
            >
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
            </motion.div>
          </div>

          {/* Right Visual */}
          <motion.div
            variants={fadeUp}
            initial="hidden"
            whileInView="visible"
            custom={1}
            viewport={{ once: true, amount: 0.15 }}
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
                      w-18 h-18
                      sm:w-22 sm:h-22
                      md:w-24 md:h-24
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
              {/* Background Image */}
              <div className="absolute inset-0">
                <img
                  src={img2}
                  alt="SkillSprint Visual"
                  className="
      w-full
      h-full
      object-cover
      object-center
    "
                />

                {/* Overlay */}
                <div className="absolute inset-0 bg-white/20 backdrop-[2px]" />

                {/* Grid Overlay */}
                <div
                  className="absolute inset-0 opacity-20"
                  style={{
                    backgroundImage: `linear-gradient(#374b82 1px, transparent 1px), linear-gradient(90deg, #374b82 1px, transparent 1px)`,
                    backgroundSize: "40px 40px",
                    backgroundPosition: "center center",
                  }}
                />
              </div>

              {/* Floating Bottom Card */}
              <div
                className="
                  absolute bottom-4 left-4
                  sm:bottom-5 sm:left-5
                  px-4 py-2.5
                  rounded-xl
                  bg-white/90
                  backdrop-blur-md
                  border border-white/50
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
          </motion.div>
        </div>

        {/* ═══════════════════════════════════════════
            DIVIDER
        ═══════════════════════════════════════════ */}
        <motion.div
          variants={fadeUp}
          initial="hidden"
          whileInView="visible"
          custom={0}
          viewport={{ once: true, amount: 0.5 }}
          className="w-full flex items-center gap-4"
          aria-hidden="true"
        >
          <div className="flex-1 h-px bg-gradient-to-r from-transparent via-[#374b82]/15 to-transparent" />
          <div className="flex items-center gap-2 px-4 py-1.5 rounded-full bg-[#374b82]/06 border border-[#374b82]/12">
            <div className="w-1.5 h-1.5 rounded-full bg-[#374b82]/50" />
            <div className="w-2.5 h-2.5 rounded-full bg-[#374b82]/30" />
            <div className="w-1.5 h-1.5 rounded-full bg-[#374b82]/50" />
          </div>
          <div className="flex-1 h-px bg-gradient-to-r from-transparent via-[#374b82]/15 to-transparent" />
        </motion.div>

        {/* ═══════════════════════════════════════════
            FOUNDER BLOCK
        ═══════════════════════════════════════════ */}
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
          {/* Left — Image */}
          <motion.div
            variants={fadeUp}
            initial="hidden"
            whileInView="visible"
            custom={0}
            viewport={{ once: true, amount: 0.15 }}
            className="
              relative
              w-full
              lg:w-[44%]
              xl:w-[42%]
              flex
              justify-center
              lg:justify-start
              order-1
              shrink-0
            "
          >
            {/* Glow blob */}
            <div
              aria-hidden="true"
              className="
                absolute
                top-10
                left-1/2
                -translate-x-1/2
                lg:left-8
                lg:translate-x-0
                w-64 h-64
                rounded-full
                bg-[#374b82]/10
                blur-3xl
                pointer-events-none
              "
            />

            <div className="relative w-full max-w-[300px] sm:max-w-[360px] md:max-w-[400px] lg:max-w-[420px] xl:max-w-[460px]">
              {/* Image card */}
              <motion.div
                whileHover={{ scale: 1.018, y: -4 }}
                transition={{ duration: 0.32, ease: [0.22, 1, 0.36, 1] }}
                className="
                  relative
                  w-full
                  aspect-[4/5]
                  rounded-[2rem]
                  overflow-hidden
                  bg-white/65
                  backdrop-blur-xl
                  border
                  border-[#374b82]/12
                  shadow-[0_20px_60px_rgba(55,75,130,0.13)]
                  group
                "
              >
                <img
                  src={founderImg}
                  alt="Pramod P R — Founder & CEO of SkillSprint Technologies"
                  loading="lazy"
                  decoding="async"
                  className="
                    w-full h-full
                    object-cover object-top
                    transition-transform duration-500
                    group-hover:scale-[1.03]
                  "
                />
                <div
                  aria-hidden="true"
                  className="
                    absolute bottom-0 inset-x-0 h-24
                    bg-gradient-to-t from-[#1a2550]/30 to-transparent
                    pointer-events-none
                  "
                />
              </motion.div>

              {/* Top-right badge */}
              <div
                className="
                  absolute -top-3 -right-3
                  sm:-top-4 sm:-right-4
                  px-3 py-2
                  rounded-2xl
                  bg-white/90
                  backdrop-blur-md
                  border border-white/60
                  shadow-lg
                  flex items-center gap-2
                "
              >
                <div
                  className="
                    w-7 h-7
                    rounded-full
                    bg-[#374b82]/10
                    flex items-center justify-center
                    text-[#374b82]
                    shrink-0
                  "
                  aria-hidden="true"
                >
                  <Star size={13} fill="currentColor" />
                </div>
                <div>
                  <div className="text-[11px] font-bold text-[#111827] leading-tight">
                    Founder & CEO
                  </div>
                  <div className="text-[10px] text-[#6b7280] leading-tight">
                    SkillSprint Technologies
                  </div>
                </div>
              </div>

              {/* Bottom-left chip */}
              <div
                className="
                  absolute -bottom-3 -left-3
                  sm:-bottom-4 sm:-left-4
                  px-3.5 py-2
                  rounded-xl
                  bg-white/90
                  backdrop-blur-md
                  border border-white/60
                  shadow-lg
                  flex items-center gap-2
                "
              >
                <div className="w-2 h-2 rounded-full bg-green-500 shrink-0" />
                <span className="text-[11px] font-semibold text-[#374b82]">
                  10+ Yrs Experience
                </span>
              </div>
            </div>
          </motion.div>

          {/* Right — Content */}
          <div
            className="
              w-full
              lg:w-[52%]
              xl:w-[54%]
              2xl:w-[55%]
              text-center
              lg:text-left
              space-y-5
              order-2
            "
          >
            {/* Section label */}
            <motion.div
              variants={fadeUp}
              initial="hidden"
              whileInView="visible"
              custom={0}
              viewport={{ once: true, amount: 0.2 }}
              className="flex justify-center lg:justify-start"
            >
              <div
                className="
                  inline-flex items-center gap-2
                  px-4 py-1.5
                  rounded-full
                  bg-[#374b82]/10
                  border border-[#374b82]/20
                  text-[#374b82]
                  text-xs sm:text-sm
                  font-semibold uppercase tracking-[0.16em]
                "
              >
                <Award size={14} aria-hidden="true" />
                Meet Our Founder
              </div>
            </motion.div>

            {/* Name & role */}
            <motion.div
              variants={fadeUp}
              initial="hidden"
              whileInView="visible"
              custom={1}
              viewport={{ once: true, amount: 0.2 }}
              className="space-y-1"
            >
              <h2
                id="founder-heading"
                className="
                  text-[2rem]
                  sm:text-[2.5rem]
                  md:text-[2.9rem]
                  lg:text-[2.9rem]
                  xl:text-[3.2rem]
                  2xl:text-[3.5rem]
                  font-bold
                  text-[#111827]
                  leading-[1.06]
                  tracking-tight
                "
              >
                Pramod <span className="text-[#374b82]">P R</span>
              </h2>
              <p className="text-[14px] sm:text-[15px] text-[#6b7280] font-medium tracking-wide uppercase">
                Founder & CEO — SkillSprint Technologies
              </p>
            </motion.div>

            {/* Bio */}
            <motion.div
              variants={fadeUp}
              initial="hidden"
              whileInView="visible"
              custom={2}
              viewport={{ once: true, amount: 0.2 }}
              className="space-y-3"
            >
              <p className="text-[15px] sm:text-base lg:text-[16.5px] text-[#4b5563] leading-relaxed max-w-xl mx-auto lg:mx-0">
                Driven by innovation, creativity, and a passion for empowering
                careers,{" "}
                <strong className="text-[#374b82] font-semibold">
                  Pramod P R
                </strong>{" "}
                founded SkillSprint Technologies with a vision to bridge the gap
                between education and industry requirements.
              </p>
              <p className="text-[15px] sm:text-base lg:text-[16.5px] text-[#4b5563] leading-relaxed max-w-xl mx-auto lg:mx-0">
                Under his leadership, SkillSprint Technologies delivers
                industry-oriented training programs, placement support, web
                development, digital marketing, and business solutions focused
                on practical learning and real-world success.
              </p>
            </motion.div>

            {/* Expertise chips */}
            <motion.div
              variants={fadeUp}
              initial="hidden"
              whileInView="visible"
              custom={3}
              viewport={{ once: true, amount: 0.2 }}
              className="flex flex-wrap gap-2 justify-center lg:justify-start pt-1"
            >
              {expertise.map((item) => (
                <span
                  key={item}
                  className="
                    inline-flex items-center
                    px-3 py-1.5
                    rounded-lg
                    bg-[#374b82]/[0.07]
                    border border-[#374b82]/15
                    text-[#374b82]
                    text-[12px] font-medium tracking-wide
                  "
                >
                  {item}
                </span>
              ))}
            </motion.div>

            {/* Quote card */}
            <motion.blockquote
              variants={fadeUp}
              initial="hidden"
              whileInView="visible"
              custom={4}
              viewport={{ once: true, amount: 0.2 }}
              whileHover={{
                boxShadow:
                  "0 0 0 1.5px rgba(55,75,130,0.22), 0 8px 32px rgba(55,75,130,0.10)",
              }}
              transition={{ duration: 0.25 }}
              className="
                relative
                flex items-start gap-4
                p-5
                rounded-2xl
                bg-white/70
                backdrop-blur-xl
                border border-[#374b82]/14
                shadow-[0_4px_24px_rgba(55,75,130,0.08)]
                max-w-xl mx-auto lg:mx-0
                cursor-default
              "
            >
              <span
                aria-hidden="true"
                className="
                  shrink-0
                  text-[3rem] leading-none
                  font-serif text-[#374b82]/30
                  select-none -mt-1
                "
              >
                "
              </span>
              <div className="space-y-1">
                <p className="text-[15px] sm:text-base font-semibold text-[#1e293b] leading-snug italic">
                  Success begins when skills meet the right opportunity.
                </p>
                <p className="text-[12px] text-[#374b82] font-medium tracking-wide">
                  — Pramod P R
                </p>
              </div>
            </motion.blockquote>

            {/* CTA row */}
            <motion.div
              variants={fadeUp}
              initial="hidden"
              whileInView="visible"
              custom={5}
              viewport={{ once: true, amount: 0.2 }}
              className="
                flex flex-col sm:flex-row
                items-center
                justify-center lg:justify-start
                gap-4 pt-2
              "
            >
              <Link
                to="/contact"
                aria-label="Connect with Pramod P R"
                className="
                  w-full sm:w-auto
                  inline-flex items-center justify-center gap-2
                  px-8 py-4
                  bg-[#374b82]
                  !text-white
                  font-semibold
                  rounded-xl
                  shadow-lg shadow-[#374b82]/20
                  hover:bg-[#2f3f70]
                  transition-colors active:scale-95
                  no-underline
                "
              >
                Connect With Us
                <ArrowRight size={17} aria-hidden="true" />
              </Link>

              <a
                href={socialLinks.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Pramod P R on LinkedIn"
                className="
                  w-full sm:w-auto
                  inline-flex items-center justify-center gap-2
                  px-8 py-4
                  bg-white/80
                  !text-[#374b82]
                  font-semibold
                  rounded-xl
                  border border-[#374b82]/20
                  hover:bg-white hover:border-[#374b82]/40
                  transition-colors
                  no-underline
                "
              >
                <Linkedin size={16} aria-hidden="true" />
                LinkedIn
              </a>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
