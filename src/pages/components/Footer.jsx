import React from "react";
import { Link } from "react-router-dom";
import {
  Linkedin,
  Instagram,
  Facebook,
  Youtube,
  Mail,
  Phone,
  MapPin,
  ArrowRight,
} from "react-feather";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  const quickLinks = [
    { name: "Home", path: "/" },
    { name: "About", path: "/about" },
    { name: "Services", path: "/services" },
    { name: "Portfolio", path: "/portfolio" },
    { name: "Blog", path: "/blog" },
    { name: "Contact", path: "/contact" },
  ];

  const services = [
    "Web Development",
    "Software Development",
    "Digital Marketing",
    "Chatbot & Automation",
    "Graphic Design",
    "Training & Placement",
  ];

  const socialLinks = [
    { icon: Linkedin, label: "LinkedIn", href: "https://linkedin.com" },
    { icon: Instagram, label: "Instagram", href: "https://instagram.com" },
    { icon: Facebook, label: "Facebook", href: "https://facebook.com" },
    { icon: Youtube, label: "YouTube", href: "https://youtube.com" },
  ];

  return (
    <footer
      className="relative w-full overflow-hidden border-t border-[#374b82]/10"
      style={{
        background:
          "linear-gradient(135deg, #ffffff 0%, #f6f8ff 45%, #eef3ff 100%)",
      }}
    >
      {/* Background */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        <div className="absolute top-[-18%] left-[-8%] w-[520px] h-[520px] rounded-full bg-[#374b82]/5 blur-[120px]" />
        <div className="absolute bottom-[-22%] right-[-10%] w-[620px] h-[620px] rounded-full bg-[#374b82]/10 blur-[150px]" />

        <div
          className="absolute inset-0 opacity-[0.1]"
          style={{
            backgroundImage: `radial-gradient(#374b82 1px, transparent 1px)`,
            backgroundSize: "32px 32px",
          }}
        />
      </div>

      <div className="relative z-10 w-full px-6 sm:px-10 lg:px-16 py-16 lg:py-20">
        {/* Full Width Footer Panel */}
        <div
          className="
            w-full
            bg-white/55
            backdrop-blur-xl
            border border-[#374b82]/10
            rounded-[2rem]
            shadow-[0_30px_100px_rgba(55,75,130,0.10)]
            px-6 sm:px-10 lg:px-16
            py-12 lg:py-14
          "
        >
          <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-[1.2fr_0.8fr_1fr_1.25fr] gap-10 xl:gap-16">
            {/* Brand */}
            <div>
              <Link
                to="/"
                className="inline-flex items-center mb-5 no-underline"
              >
                <img
                  src="/logo.png"
                  alt="SkillSprint Technologies Logo"
                  className="h-12 w-auto object-contain"
                />
              </Link>

              <p className="text-sm text-[#4b5563] leading-relaxed max-w-xs">
                SkillSprint Technologies helps businesses grow with reliable web
                development, automation, digital marketing, training, and
                scalable software solutions.
              </p>

              <div className="flex items-center gap-3 mt-7">
                {socialLinks.map((social) => {
                  const Icon = social.icon;

                  return (
                    <a
                      key={social.label}
                      href={social.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      aria-label={social.label}
                      className="
                        w-10 h-10
                        inline-flex items-center justify-center
                        rounded-full
                        bg-[#374b82]/10
                        text-[#374b82]
                        border border-[#374b82]/10
                        hover:bg-[#374b82]
                        hover:!text-white
                        hover:-translate-y-0.5
                        transition-all duration-300
                      "
                    >
                      <Icon size={18} />
                    </a>
                  );
                })}
              </div>
            </div>

            {/* Quick Links */}
            <div>
              <h4 className="text-[#111827] font-bold text-sm uppercase tracking-wider mb-5">
                Quick Links
              </h4>

              <ul className="space-y-3">
                {quickLinks.map((link) => (
                  <li key={link.path}>
                    <Link
                      to={link.path}
                      className="
                        text-sm text-[#4b5563]
                        hover:text-[#374b82]
                        transition-colors duration-200
                        no-underline
                      "
                    >
                      {link.name}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            {/* Services */}
            <div>
              <h4 className="text-[#111827] font-bold text-sm uppercase tracking-wider mb-5">
                Services
              </h4>

              <ul className="space-y-3">
                {services.map((service) => (
                  <li key={service}>
                    <Link
                      to="/services"
                      className="
                        text-sm text-[#4b5563]
                        hover:text-[#374b82]
                        transition-colors duration-200
                        no-underline
                      "
                    >
                      {service}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            {/* Contact + CTA */}
            <div>
              <h4 className="text-[#111827] font-bold text-sm uppercase tracking-wider mb-5">
                Contact
              </h4>

              <ul className="space-y-4 text-sm text-[#4b5563]">
                <li className="flex items-start gap-3">
                  <Mail size={18} className="mt-0.5 text-[#374b82] shrink-0" />
                  <a
                    href="mailto:info@skillsprinttechnologies.com"
                    className="hover:text-[#374b82] transition-colors no-underline break-all"
                  >
                    info@skillsprinttechnologies.com
                  </a>
                </li>

                <li className="flex items-center gap-3">
                  <Phone size={18} className="text-[#374b82] shrink-0" />
                  <a
                    href="tel:+919876543210"
                    className="hover:text-[#374b82] transition-colors no-underline"
                  >
                    +91 98765 43210
                  </a>
                </li>

                <li className="flex items-start gap-3">
                  <MapPin
                    size={18}
                    className="mt-0.5 text-[#374b82] shrink-0"
                  />
                  <span>Bengaluru, Karnataka, India</span>
                </li>
              </ul>

              <div
                className="
                  mt-7
                  rounded-2xl
                  bg-white/70
                  border border-[#374b82]/10
                  shadow-[0_18px_50px_rgba(55,75,130,0.08)]
                  p-5
                "
              >
                <h5 className="text-[#111827] font-bold text-base mb-2">
                  Start Your Digital Growth
                </h5>

                <p className="text-sm text-[#4b5563] leading-relaxed mb-4">
                  Get expert support for your next website, automation, or
                  software project.
                </p>

                <div className="flex flex-col gap-3">
                  <input
                    type="email"
                    placeholder="Enter your email"
                    className="
                      w-full
                      px-4 py-3
                      rounded-xl
                      bg-white
                      border border-[#374b82]/15
                      text-sm text-[#111827]
                      placeholder:text-[#6b7280]
                      outline-none
                      focus:border-[#374b82]
                      focus:ring-4 focus:ring-[#374b82]/10
                      transition-all
                    "
                  />

                  <Link
                    to="/contact"
                    className="
                      inline-flex items-center justify-center gap-2
                      w-full
                      px-5 py-3
                      rounded-xl
                      bg-[#374b82]
                      hover:bg-[#2f3f70]
                      !text-white
                      text-sm font-semibold
                      shadow-[0_12px_30px_rgba(55,75,130,0.25)]
                      transition-all duration-300
                      active:scale-95
                      no-underline
                    "
                  >
                    Get Started
                    <ArrowRight size={16} />
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom */}
        <div className="pt-6">
          <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4 text-sm text-[#4b5563]">
            <p className="m-0">
              © {currentYear} SkillSprint Technologies. All rights reserved.
            </p>

            <div className="flex flex-col sm:flex-row sm:items-center gap-3 sm:gap-6">
              <Link
                to="/privacy-policy"
                className="hover:text-[#374b82] transition-colors no-underline"
              >
                Privacy Policy
              </Link>

              <Link
                to="/terms-conditions"
                className="hover:text-[#374b82] transition-colors no-underline"
              >
                Terms &amp; Conditions
              </Link>

              <span className="hidden lg:inline text-[#374b82]/40">•</span>

              <span>Built for speed, security, and growth.</span>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
