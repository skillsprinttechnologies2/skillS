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
  Clock,
  ArrowRight,
} from "react-feather";

const quickLinks = [
  { label: "Home", path: "/#home" },
  { label: "About", path: "/#about" },
  { label: "Services", path: "/services" },
  { label: "Plans", path: "/#plans" },
  { label: "Contact", path: "/contact" },
];

const services = [
  { label: "Digital Marketing", path: "/services" },
  { label: "Web Development", path: "/services" },
  { label: "Software Training & Placement", path: "/services" },
  { label: "Chatbot & Automation", path: "/services" },
  { label: "Graphic Design Services", path: "/services" },
  { label: "Software Development", path: "/services" },
];

const socialLinks = [
  { label: "LinkedIn", icon: Linkedin, href: "https://linkedin.com" },
  { label: "Instagram", icon: Instagram, href: "https://instagram.com" },
  { label: "Facebook", icon: Facebook, href: "https://facebook.com" },
  { label: "YouTube", icon: Youtube, href: "https://youtube.com" },
];

const contactInfo = [
  { label: "Email", value: "info@skillsprinttechnologies.com", icon: Mail },
  { label: "Phone", value: "+91 98765 43210", icon: Phone },
  { label: "Location", value: "India", icon: MapPin },
  {
    label: "Working Hours",
    value: "Mon - Sat, 9:00 AM - 6:00 PM",
    icon: Clock,
  },
];

const Footer = () => {
  return (
    <footer
      aria-label="Site footer"
      className="relative w-full border-t border-[#374b82]/10 bg-gradient-to-br from-white via-[#f6f8ff] to-[#eef3ff] overflow-hidden"
    >
      {/* Subtle Dotted Background Pattern */}
      <div
        className="absolute inset-0 opacity-[0.10] pointer-events-none"
        aria-hidden="true"
        style={{
          backgroundImage: `radial-gradient(#374b82 1px, transparent 1px)`,
          backgroundSize: "32px 32px",
        }}
      />

      <div className="relative z-10 max-w-[1600px] mx-auto px-5 sm:px-8 lg:px-12 xl:px-16 2xl:px-20 py-10 sm:py-12 lg:py-14">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 lg:gap-12">
          {/* Column 1: Brand */}
          <div className="space-y-6">
            <Link to="/" aria-label="Go to homepage">
              <img
                src="/logo.png"
                alt="SkillSprint Technologies"
                className="h-10 w-auto object-contain"
              />
            </Link>
            <p className="text-sm text-[#4b5563] leading-relaxed">
              SkillSprint Technologies builds digital solutions that help
              businesses grow with speed, security, and scalability.
            </p>

            {/* Social Buttons */}
            <div className="flex gap-3">
              {socialLinks.map((social) => (
                <a
                  key={social.label}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={social.label}
                  className="w-10 h-10 rounded-full bg-white border border-[#374b82]/10 flex items-center justify-center text-[#374b82] hover:bg-[#374b82] hover:text-white hover:-translate-y-1 transition-all duration-300 shadow-sm"
                >
                  <social.icon size={18} aria-hidden="true" />
                </a>
              ))}
            </div>
          </div>

          {/* Column 2: Quick Links */}
          <div>
            <h3 className="text-base font-bold text-[#111827] mb-6">
              Quick Links
            </h3>
            <nav
              aria-label="Footer quick links"
              className="flex flex-col space-y-4"
            >
              {quickLinks.map((item) => (
                <Link
                  key={item.label}
                  to={item.path}
                  className="relative w-fit text-sm text-[#4b5563] hover:text-[#374b82] transition-colors duration-300 group"
                >
                  {item.label}
                  <span className="absolute left-0 -bottom-1 w-0 h-[1px] bg-[#374b82] transition-all duration-300 group-hover:w-full"></span>
                </Link>
              ))}
            </nav>
          </div>

          {/* Column 3: Services */}
          <div>
            <h3 className="text-base font-bold text-[#111827] mb-6">
              Services
            </h3>
            <nav
              aria-label="Footer services links"
              className="flex flex-col space-y-4"
            >
              {services.map((item) => (
                <Link
                  key={item.label}
                  to={item.path}
                  className="relative w-fit text-sm text-[#4b5563] hover:text-[#374b82] transition-colors duration-300 group"
                >
                  {item.label}
                  <span className="absolute left-0 -bottom-1 w-0 h-[1px] bg-[#374b82] transition-all duration-300 group-hover:w-full"></span>
                </Link>
              ))}
            </nav>
          </div>

          {/* Column 4: Contact & CTA */}
          <div className="space-y-6">
            <h3 className="text-base font-bold text-[#111827] mb-2">
              Contact Us
            </h3>
            <div className="flex flex-col space-y-4">
              {contactInfo.map((item) => (
                <div
                  key={item.label}
                  className="flex items-start gap-3 text-sm"
                >
                  <div className="mt-0.5 text-[#374b82]" aria-hidden="true">
                    <item.icon size={16} />
                  </div>
                  <div className="flex flex-col">
                    <span className="text-xs text-gray-400 font-medium uppercase tracking-wide mb-0.5">
                      {item.label}
                    </span>
                    {item.label === "Email" ? (
                      <a
                        href={`mailto:${item.value}`}
                        className="text-[#4b5563] hover:text-[#374b82] transition-colors"
                      >
                        {item.value}
                      </a>
                    ) : item.label === "Phone" ? (
                      <a
                        href={`tel:${item.value}`}
                        className="text-[#4b5563] hover:text-[#374b82] transition-colors"
                      >
                        {item.value}
                      </a>
                    ) : (
                      <span className="text-[#4b5563]">{item.value}</span>
                    )}
                  </div>
                </div>
              ))}
            </div>

            {/* CTA Button */}
            <div className="pt-2">
              <Link
                to="/contact"
                className="inline-flex items-center gap-2 px-6 py-2.5 bg-[#374b82] text-white text-sm font-semibold rounded-lg shadow-md shadow-[#374b82]/20 hover:bg-[#2f3f70] hover:-translate-y-0.5 transition-all duration-300"
              >
                Get Started
                <ArrowRight size={16} aria-hidden="true" />
              </Link>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="mt-12 pt-8 border-t border-[#374b82]/10 flex flex-col md:flex-row justify-between items-center gap-4 text-xs text-[#4b5563]">
          <p>
            © {new Date().getFullYear()} SkillSprint Technologies. All rights
            reserved.
          </p>
          <div className="flex gap-6">
            <Link
              to="/privacy-policy"
              className="hover:text-[#374b82] transition-colors"
            >
              Privacy Policy
            </Link>
            <Link
              to="/terms-conditions"
              className="hover:text-[#374b82] transition-colors"
            >
              Terms & Conditions
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
