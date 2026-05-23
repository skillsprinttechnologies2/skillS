import React, { useCallback, useEffect, useRef, useState } from "react";
import { Link } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";
import {
  Shield,
  Info,
  Database,
  Eye,
  Circle,
  Globe,
  Lock,
  UserCheck,
  RefreshCw,
  Mail,
  ChevronRight,
  ArrowLeft,
  ArrowRight,
  Phone,
  Menu,
  X,
} from "react-feather";

// ─── Section Data ─────────────────────────────────────────────────────────────
const sections = [
  {
    id: "introduction",
    icon: <Info size={20} />,
    label: "Introduction",
    heading: "Introduction",
    content: [
      {
        type: "paragraph",
        text: "Welcome to SkillSprint Technologies. We are committed to protecting your personal information and your right to privacy. This Privacy Policy explains how we collect, use, disclose, and safeguard your information when you visit our website or use our services.",
      },
      {
        type: "paragraph",
        text: "Please read this policy carefully. If you disagree with its terms, please discontinue use of our site. We reserve the right to make changes to this policy at any time, so please review it frequently.",
      },
      {
        type: "paragraph",
        text: "This policy applies to all information collected through our website, mobile applications, and any related services, sales, marketing, or events we refer to collectively as the 'Services'.",
      },
    ],
  },
  {
    id: "information-we-collect",
    icon: <Database size={20} />,
    label: "Information We Collect",
    heading: "Information We Collect",
    content: [
      {
        type: "paragraph",
        text: "We collect information that you provide directly to us, information we collect automatically when you use our services, and information from third-party sources.",
      },
      { type: "subheading", text: "Personal Information You Provide" },
      {
        type: "list",
        items: [
          "Full name, email address, and phone number",
          "Billing and payment information",
          "Account credentials and profile information",
          "Educational background and professional details",
          "Communications you send to us",
          "Course enrollment and learning progress data",
        ],
      },
      { type: "subheading", text: "Information Collected Automatically" },
      {
        type: "list",
        items: [
          "IP address and device identifiers",
          "Browser type, version, and operating system",
          "Pages visited, time spent, and navigation paths",
          "Referring URLs and exit pages",
          "Geographic location data (approximate)",
          "Log files and usage analytics",
        ],
      },
    ],
  },
  {
    id: "how-we-use-information",
    icon: <Eye size={20} />,
    label: "How We Use Information",
    heading: "How We Use Your Information",
    content: [
      {
        type: "paragraph",
        text: "We use the information we collect for various business and operational purposes, always with your privacy and security as a priority.",
      },
      {
        type: "list",
        items: [
          "To provide, operate, and maintain our services and platform",
          "To process transactions and send related information",
          "To send administrative information, updates, and security alerts",
          "To respond to inquiries and provide customer support",
          "To personalize your learning experience and recommendations",
          "To monitor and analyze usage patterns and improve our platform",
          "To send promotional communications (with your consent)",
          "To comply with legal obligations and enforce our terms",
          "To detect, prevent, and address fraud and security issues",
          "To carry out research and development for new features",
        ],
      },
      {
        type: "paragraph",
        text: "We will only use your personal information for the purposes for which we collected it, unless we reasonably consider that we need to use it for another reason compatible with the original purpose.",
      },
    ],
  },
  {
    id: "Circles",
    icon: <Circle size={20} />,
    label: "Circles & Tracking",
    heading: "Circles & Tracking Technologies",
    content: [
      {
        type: "paragraph",
        text: "We use Circles and similar tracking technologies to track activity on our services and store certain information. Tracking technologies used include beacons, tags, and scripts to collect and track information and to improve and analyze our services.",
      },
      { type: "subheading", text: "Types of Circles We Use" },
      {
        type: "list",
        items: [
          "Essential Circles: Required for the website to function properly",
          "Analytical Circles: Help us understand how visitors interact with our site",
          "Functional Circles: Enable enhanced functionality and personalization",
          "Marketing Circles: Used to deliver relevant advertisements",
          "Session Circles: Temporary Circles deleted when you close your browser",
          "Persistent Circles: Remain on your device for a set period",
        ],
      },
      {
        type: "paragraph",
        text: "You can instruct your browser to refuse all Circles or to indicate when a Circle is being sent. However, if you do not accept Circles, you may not be able to use some portions of our services.",
      },
    ],
  },
  {
    id: "third-party",
    icon: <Globe size={20} />,
    label: "Third-Party Services",
    heading: "Third-Party Services",
    content: [
      {
        type: "paragraph",
        text: "We may share your information with third-party vendors and service providers that perform services on our behalf. We carefully select these partners and require them to maintain appropriate security measures.",
      },
      { type: "subheading", text: "Categories of Third-Party Services" },
      {
        type: "list",
        items: [
          "Payment processors for secure transaction handling",
          "Cloud hosting and infrastructure providers",
          "Email and communication service providers",
          "Analytics platforms (Google Analytics, etc.)",
          "Customer support and CRM tools",
          "Social media platforms for advertising",
          "Video conferencing tools for live sessions",
        ],
      },
      {
        type: "paragraph",
        text: "Our website may contain links to third-party websites. We are not responsible for the privacy practices of those sites and encourage you to review their privacy policies. This Privacy Policy applies only to information collected by SkillSprint Technologies.",
      },
    ],
  },
  {
    id: "data-protection",
    icon: <Lock size={20} />,
    label: "Data Protection",
    heading: "Data Protection & Security",
    content: [
      {
        type: "paragraph",
        text: "We implement appropriate technical and organizational security measures to protect your personal information against unauthorized access, alteration, disclosure, or destruction.",
      },
      {
        type: "list",
        items: [
          "SSL/TLS encryption for all data transmissions",
          "Secure servers with restricted access controls",
          "Regular security audits and vulnerability assessments",
          "Employee training on data protection practices",
          "Data minimization and retention policies",
          "Incident response procedures for potential breaches",
        ],
      },
      {
        type: "paragraph",
        text: "We retain your personal information only for as long as necessary to fulfill the purposes outlined in this policy, unless a longer retention period is required or permitted by law. When we no longer need your data, we securely delete or anonymize it.",
      },
      {
        type: "paragraph",
        text: "While we use commercially reasonable measures to protect your data, no method of transmission over the internet or electronic storage is 100% secure. We cannot guarantee absolute security but are committed to continuous improvement.",
      },
    ],
  },
  {
    id: "user-rights",
    icon: <UserCheck size={20} />,
    label: "Your Rights",
    heading: "Your Rights & Choices",
    content: [
      {
        type: "paragraph",
        text: "Depending on your location, you may have certain rights regarding your personal information. We respect and support these rights to the fullest extent applicable.",
      },
      { type: "subheading", text: "Rights You May Have" },
      {
        type: "list",
        items: [
          "Right to Access: Request a copy of the personal data we hold about you",
          "Right to Rectification: Correct inaccurate or incomplete data",
          "Right to Erasure: Request deletion of your personal data",
          "Right to Restrict Processing: Limit how we use your data",
          "Right to Data Portability: Receive your data in a structured format",
          "Right to Object: Object to processing based on legitimate interests",
          "Right to Withdraw Consent: Withdraw consent at any time",
          "Right to Lodge a Complaint: Contact a supervisory authority",
        ],
      },
      {
        type: "paragraph",
        text: "To exercise any of these rights, please contact us using the details in the Contact section below. We will respond to all requests within 30 days. We may need to verify your identity before processing your request.",
      },
    ],
  },
  {
    id: "policy-updates",
    icon: <RefreshCw size={20} />,
    label: "Policy Updates",
    heading: "Policy Updates",
    content: [
      {
        type: "paragraph",
        text: "We may update this Privacy Policy from time to time to reflect changes in our practices, technology, legal requirements, or other factors. We will notify you of any material changes through appropriate means.",
      },
      {
        type: "list",
        items: [
          "Email notification for significant changes to registered users",
          "Prominent notice on our website homepage",
          "Updated 'Last Modified' date at the top of this policy",
          "In-app notifications where applicable",
        ],
      },
      {
        type: "paragraph",
        text: "We encourage you to review this policy periodically to stay informed about how we protect your information. Your continued use of our services after any changes constitutes your acceptance of the updated policy.",
      },
      {
        type: "paragraph",
        text: "If you have concerns about any updates to this policy, please contact us before continuing to use our services. We are always happy to discuss any questions or concerns you may have.",
      },
    ],
  },
  {
    id: "contact",
    icon: <Mail size={20} />,
    label: "Contact Us",
    heading: "Contact Information",
    content: [
      {
        type: "paragraph",
        text: "If you have any questions, concerns, or requests regarding this Privacy Policy or our data practices, please do not hesitate to reach out to us. We are committed to resolving any issues promptly and transparently.",
      },
      {
        type: "contact",
        items: [
          {
            icon: <Mail size={16} />,
            label: "Email",
            value: "privacy@skillsprinttech.com",
            href: "mailto:privacy@skillsprinttech.com",
          },
          {
            icon: <Phone size={16} />,
            label: "Phone",
            value: "+91 86605 91722",
            href: "tel:+918660591722",
          },
          {
            icon: <Globe size={16} />,
            label: "Website",
            value: "www.skillsprinttech.com",
            href: "https://www.skillsprinttech.com",
          },
        ],
      },
      {
        type: "paragraph",
        text: "Our Data Protection Officer is available to address any specific concerns. You may also contact your local data protection authority if you believe your rights have not been adequately addressed.",
      },
    ],
  },
];

// ─── Variants ─────────────────────────────────────────────────────────────────
const fadeUp = {
  hidden: { opacity: 0, y: 24 },
  visible: (i = 0) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.44, delay: i * 0.05, ease: [0.22, 1, 0.36, 1] },
  }),
};

const fadeIn = {
  hidden: { opacity: 0 },
  visible: { opacity: 1, transition: { duration: 0.45, ease: "easeOut" } },
};

// ─── Content Renderer ─────────────────────────────────────────────────────────
const RenderContent = ({ content }) => (
  <div className="space-y-4">
    {content.map((block, i) => {
      if (block.type === "paragraph")
        return (
          <p
            key={i}
            className="text-[15px] sm:text-base text-[#4b5563] leading-relaxed"
          >
            {block.text}
          </p>
        );

      if (block.type === "subheading")
        return (
          <h3
            key={i}
            className="text-base sm:text-[17px] font-bold text-[#172033] pt-2"
          >
            {block.text}
          </h3>
        );

      if (block.type === "list")
        return (
          <ul key={i} className="space-y-2.5 pt-1">
            {block.items.map((item, j) => (
              <li key={j} className="flex items-start gap-3">
                <div className="flex-shrink-0 w-5 h-5 rounded-full bg-[#374b82]/10 flex items-center justify-center mt-0.5">
                  <ChevronRight
                    size={11}
                    className="text-[#374b82]"
                    aria-hidden="true"
                  />
                </div>
                <span className="text-[14.5px] sm:text-[15px] text-[#4b5563] leading-relaxed">
                  {item}
                </span>
              </li>
            ))}
          </ul>
        );

      if (block.type === "highlight")
        return (
          <div
            key={i}
            className="flex items-start gap-3 p-4 rounded-2xl bg-[#374b82]/[0.06] border border-[#374b82]/15"
          >
            <div className="flex-shrink-0 w-6 h-6 rounded-lg bg-[#374b82]/[0.12] flex items-center justify-center mt-0.5">
              <Info size={13} className="text-[#374b82]" aria-hidden="true" />
            </div>
            <p className="text-[14px] sm:text-[15px] text-[#374b82] font-medium leading-relaxed">
              {block.text}
            </p>
          </div>
        );

      if (block.type === "contact")
        return (
          <div key={i} className="grid grid-cols-1 sm:grid-cols-3 gap-4 pt-2">
            {block.items.map((contact, j) => (
              <a
                key={j}
                href={contact.href}
                target={contact.href.startsWith("http") ? "_blank" : undefined}
                rel={
                  contact.href.startsWith("http")
                    ? "noopener noreferrer"
                    : undefined
                }
                className="
                  group flex flex-col items-center gap-3 p-5 rounded-2xl text-center
                  bg-[#374b82]/[0.04] border border-[#374b82]/[0.12]
                  hover:bg-[#374b82]/[0.08] hover:border-[#374b82]/25
                  hover:shadow-[0_8px_24px_rgba(55,75,130,0.10)]
                  transition-all duration-200 no-underline
                "
              >
                <div className="w-10 h-10 rounded-xl bg-[#374b82]/10 text-[#374b82] flex items-center justify-center group-hover:bg-[#374b82] group-hover:text-white transition-colors duration-200">
                  {contact.icon}
                </div>
                <div>
                  <p className="text-[11px] font-bold uppercase tracking-widest text-[#374b82]/60 mb-0.5">
                    {contact.label}
                  </p>
                  <p className="text-[13px] font-semibold text-[#172033] group-hover:text-[#374b82] transition-colors">
                    {contact.value}
                  </p>
                </div>
              </a>
            ))}
          </div>
        );

      return null;
    })}
  </div>
);

// ─── Shared Drawer Inner ──────────────────────────────────────────────────────
const DrawerInner = ({ activeSection, onNavigate, onClose }) => (
  <div className="flex flex-col h-full">
    {/* Header */}
    <div className="flex items-center justify-between gap-4 px-5 py-4 border-b border-[#374b82]/10 flex-shrink-0">
      <div>
        <p className="text-[10px] font-bold uppercase tracking-[0.18em] text-[#374b82]/60">
          SkillSprint
        </p>
        <h2 className="text-base font-bold text-[#111827]">
          Privacy Navigation
        </h2>
      </div>
      <button
        type="button"
        onClick={onClose}
        className="
          w-9 h-9 rounded-xl bg-white/80
          border border-[#374b82]/15
          text-[#374b82] flex items-center justify-center
          hover:bg-white transition-colors flex-shrink-0
        "
        aria-label="Close navigation drawer"
      >
        <X size={16} aria-hidden="true" />
      </button>
    </div>

    {/* Nav list */}
    <div className="flex-1 overflow-y-auto overscroll-contain p-4">
      <p className="text-[10px] font-bold uppercase tracking-[0.18em] text-[#374b82]/60 px-3 pb-3 border-b border-[#374b82]/[0.08] mb-2">
        Contents
      </p>
      <nav aria-label="Privacy policy sections">
        <ul className="space-y-0.5">
          {sections.map(({ id, icon, label }) => (
            <li key={id}>
              <button
                type="button"
                onClick={() => onNavigate(id)}
                aria-current={activeSection === id ? "page" : undefined}
                className={`
                  w-full flex items-center gap-3 px-3 py-2.5 rounded-xl
                  text-left text-[12.5px] font-medium
                  transition-all duration-200
                  ${
                    activeSection === id
                      ? "bg-[#374b82] text-white shadow-[0_4px_12px_rgba(55,75,130,0.25)]"
                      : "text-[#4b5563] hover:bg-[#374b82]/[0.08] hover:text-[#374b82]"
                  }
                `}
              >
                <span
                  className={`flex-shrink-0 ${activeSection === id ? "text-white" : "text-[#374b82]"}`}
                  aria-hidden="true"
                >
                  {React.cloneElement(icon, { size: 14 })}
                </span>
                <span className="leading-snug">{label}</span>
                {activeSection === id && (
                  <ChevronRight
                    size={12}
                    className="ml-auto text-white/70 flex-shrink-0"
                    aria-hidden="true"
                  />
                )}
              </button>
            </li>
          ))}
        </ul>
      </nav>
    </div>

    {/* Footer CTAs */}
    <div className="flex-shrink-0 p-4 pt-0 space-y-2 border-t border-[#374b82]/[0.08] mt-2">
      <div className="pt-3 space-y-2">
        <Link
          to="/contact"
          onClick={onClose}
          className="
            w-full flex items-center justify-center gap-2
            px-4 py-2.5 rounded-xl
            bg-[#374b82] text-white text-xs font-semibold
            hover:bg-[#2f3f70] transition-colors no-underline
            shadow-[0_4px_14px_rgba(55,75,130,0.25)]
          "
        >
          <Mail size={12} aria-hidden="true" />
          Contact Us
        </Link>
        <Link
          to="/terms-and-conditions"
          onClick={onClose}
          className="
            w-full flex items-center justify-center gap-2
            px-4 py-2.5 rounded-xl
            bg-transparent text-[#374b82]
            border border-[#374b82]/20
            text-xs font-semibold
            hover:bg-[#374b82]/[0.08]
            transition-colors no-underline
          "
        >
          <Shield size={12} aria-hidden="true" />
          Terms & Conditions
        </Link>
      </div>
    </div>
  </div>
);

// ─── Main Component ───────────────────────────────────────────────────────────
const PrivacyPolicy = () => {
  const [activeSection, setActiveSection] = useState(sections[0].id);
  const [desktopDrawerOpen, setDesktopDrawerOpen] = useState(false);
  const [mobileDrawerOpen, setMobileDrawerOpen] = useState(false);
  const observerRef = useRef(null);

  // ── Intersection observer
  useEffect(() => {
    observerRef.current = new IntersectionObserver(
      (entries) => {
        const visible = entries.filter((e) => e.isIntersecting);
        if (visible.length > 0) {
          visible.sort(
            (a, b) => a.boundingClientRect.top - b.boundingClientRect.top,
          );
          setActiveSection(visible[0].target.id);
        }
      },
      { root: null, rootMargin: "-24% 0px -64% 0px", threshold: 0 },
    );
    sections.forEach(({ id }) => {
      const el = document.getElementById(id);
      if (el) observerRef.current.observe(el);
    });
    return () => observerRef.current?.disconnect();
  }, []);

  // ── Lock body scroll when any drawer is open
  useEffect(() => {
    const anyOpen = desktopDrawerOpen || mobileDrawerOpen;
    document.body.style.overflow = anyOpen ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [desktopDrawerOpen, mobileDrawerOpen]);

  // ── Escape key closes any open drawer
  useEffect(() => {
    const handleKey = (e) => {
      if (e.key !== "Escape") return;
      setDesktopDrawerOpen(false);
      setMobileDrawerOpen(false);
    };
    window.addEventListener("keydown", handleKey);
    return () => window.removeEventListener("keydown", handleKey);
  }, []);

  const scrollToSection = useCallback((id) => {
    const el = document.getElementById(id);
    if (!el) return;
    setActiveSection(id);
    const top = el.getBoundingClientRect().top + window.scrollY - 100;
    window.scrollTo({ top, behavior: "smooth" });
  }, []);

  const handleDesktopNavigate = useCallback(
    (id) => {
      setDesktopDrawerOpen(false);
      setTimeout(() => scrollToSection(id), 120);
    },
    [scrollToSection],
  );

  const handleMobileNavigate = useCallback(
    (id) => {
      setMobileDrawerOpen(false);
      setTimeout(() => scrollToSection(id), 120);
    },
    [scrollToSection],
  );

  return (
    <main
      className="relative w-full min-h-screen bg-transparent"
      aria-labelledby="privacy-heading"
    >
      {/* ── Hero ────────────────────────────────────────────────────────── */}
      <section className="relative pt-28 pb-14 sm:pt-32 sm:pb-16 overflow-hidden">
        <div
          aria-hidden="true"
          className="absolute inset-0 pointer-events-none"
        >
          <div
            className="absolute inset-0 opacity-[0.28]"
            style={{
              backgroundImage: `radial-gradient(rgba(55,75,130,0.18) 1px, transparent 1px)`,
              backgroundSize: "28px 28px",
            }}
          />
          <div className="absolute -top-24 -left-20 w-96 h-96 rounded-full bg-[#374b82]/[0.07] blur-3xl" />
          <div className="absolute top-0 right-0 w-80 h-80 rounded-full bg-[#374b82]/[0.05] blur-3xl" />
          <div className="absolute inset-0 bg-[radial-gradient(ellipse_70%_60%_at_50%_0%,rgba(255,255,255,0.65)_0%,transparent_100%)]" />
        </div>

        <div className="relative z-10 max-w-[1600px] mx-auto px-5 sm:px-8 lg:px-12 xl:px-16 2xl:px-20">
          <motion.nav
            variants={fadeIn}
            initial="hidden"
            animate="visible"
            aria-label="Breadcrumb"
            className="flex items-center gap-2 text-xs sm:text-sm text-[#6b7280] mb-8"
          >
            <Link
              to="/"
              className="hover:text-[#374b82] transition-colors font-medium no-underline text-[#6b7280]"
            >
              Home
            </Link>
            <ChevronRight
              size={13}
              className="text-[#374b82]/40"
              aria-hidden="true"
            />
            <span className="text-[#374b82] font-semibold">Privacy Policy</span>
          </motion.nav>

          <div className="max-w-3xl">
            <motion.div
              variants={fadeUp}
              initial="hidden"
              animate="visible"
              custom={0}
              className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-[#374b82]/10 border border-[#374b82]/20 text-[#374b82] text-xs font-bold uppercase tracking-[0.16em] mb-5"
            >
              <Shield size={13} aria-hidden="true" />
              Legal & Privacy
            </motion.div>

            <motion.h1
              id="privacy-heading"
              variants={fadeUp}
              initial="hidden"
              animate="visible"
              custom={1}
              className="text-[2.2rem] sm:text-[2.8rem] lg:text-[3.4rem] font-bold text-[#111827] leading-[1.05] tracking-tight mb-4"
            >
              Privacy <span className="text-[#374b82]">Policy</span>
            </motion.h1>

            <motion.p
              variants={fadeUp}
              initial="hidden"
              animate="visible"
              custom={2}
              className="text-[15px] sm:text-base lg:text-[17px] text-[#4b5563] leading-relaxed mb-6 max-w-2xl"
            >
              At SkillSprint Technologies, your privacy is our priority. This
              policy outlines how we handle your data with transparency,
              security, and respect.
            </motion.p>

            <motion.div
              variants={fadeUp}
              initial="hidden"
              animate="visible"
              custom={3}
              className="flex flex-wrap items-center gap-4"
            >
              <div className="flex items-center gap-2 px-4 py-2 rounded-xl bg-white/70 backdrop-blur-sm border border-[#374b82]/[0.12] shadow-sm">
                <div className="w-2 h-2 rounded-full bg-green-500" />
                <span className="text-xs font-semibold text-[#374b82]">
                  GDPR Compliant
                </span>
              </div>
              <p className="text-xs text-[#6b7280] font-medium">
                Last updated:{" "}
                <span className="text-[#374b82] font-semibold">
                  January 2025
                </span>
              </p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* ── DESKTOP peek button (left edge, lg+) ─────────────────────────── */}
      <button
        type="button"
        onClick={() => setDesktopDrawerOpen(true)}
        className="
          hidden lg:flex
          fixed left-0 top-1/2 -translate-y-1/2 z-40
          w-11 h-14
          rounded-r-2xl
          bg-[#374b82] text-white
          shadow-[0_12px_36px_rgba(55,75,130,0.35)]
          border border-white/20
          items-center justify-center
          active:scale-95 transition-transform
        "
        aria-label="Open privacy policy navigation"
      >
        <Menu size={19} aria-hidden="true" />
      </button>

      {/* ── MOBILE peek button (left edge, below lg) ──────────────────────── */}
      <button
        type="button"
        onClick={() => setMobileDrawerOpen(true)}
        className="
          lg:hidden
          fixed left-0 top-1/2 -translate-y-1/2 z-40
          w-11 h-14
          rounded-r-2xl
          bg-[#374b82] text-white
          shadow-[0_12px_36px_rgba(55,75,130,0.35)]
          border border-white/20
          flex items-center justify-center
          active:scale-95 transition-transform
        "
        aria-label="Open privacy policy navigation"
      >
        <Menu size={19} aria-hidden="true" />
      </button>

      {/* ── DESKTOP Drawer ────────────────────────────────────────────────── */}
      <AnimatePresence>
        {desktopDrawerOpen && (
          <motion.div
            className="hidden lg:block fixed inset-0 z-[80]"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
          >
            <button
              type="button"
              aria-label="Close privacy navigation overlay"
              onClick={() => setDesktopDrawerOpen(false)}
              className="absolute inset-0 w-full h-full bg-[#0d1424]/45 backdrop-blur-sm"
            />
            <motion.aside
              initial={{ x: "-100%" }}
              animate={{ x: 0 }}
              exit={{ x: "-100%" }}
              transition={{ duration: 0.28, ease: [0.22, 1, 0.36, 1] }}
              className="
                relative z-10
                h-full w-[340px] xl:w-[360px]
                bg-[#f7f9ff]/95 backdrop-blur-xl
                border-r border-[#374b82]/15
                shadow-[24px_0_80px_rgba(15,23,42,0.18)]
                flex flex-col
              "
              aria-label="Desktop privacy navigation drawer"
            >
              <DrawerInner
                activeSection={activeSection}
                onNavigate={handleDesktopNavigate}
                onClose={() => setDesktopDrawerOpen(false)}
              />
            </motion.aside>
          </motion.div>
        )}
      </AnimatePresence>

      {/* ── MOBILE Drawer ─────────────────────────────────────────────────── */}
      <AnimatePresence>
        {mobileDrawerOpen && (
          <motion.div
            className="lg:hidden fixed inset-0 z-[80]"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
          >
            <button
              type="button"
              aria-label="Close privacy navigation overlay"
              onClick={() => setMobileDrawerOpen(false)}
              className="absolute inset-0 w-full h-full bg-[#0d1424]/45 backdrop-blur-sm"
            />
            <motion.aside
              initial={{ x: "-100%" }}
              animate={{ x: 0 }}
              exit={{ x: "-100%" }}
              transition={{ duration: 0.28, ease: [0.22, 1, 0.36, 1] }}
              className="
                relative z-10
                h-full w-[86%] max-w-[350px]
                bg-[#f7f9ff]/95 backdrop-blur-xl
                border-r border-[#374b82]/15
                shadow-[24px_0_80px_rgba(15,23,42,0.22)]
                flex flex-col
              "
              aria-label="Mobile privacy navigation drawer"
            >
              <DrawerInner
                activeSection={activeSection}
                onNavigate={handleMobileNavigate}
                onClose={() => setMobileDrawerOpen(false)}
              />
            </motion.aside>
          </motion.div>
        )}
      </AnimatePresence>

      {/* ── Main Content ─────────────────────────────────────────────────── */}
      <div className="relative max-w-[1600px] mx-auto px-5 sm:px-8 lg:px-12 xl:px-16 2xl:px-20 pb-20">
        <div className="max-w-4xl mx-auto space-y-4">
          {sections.map(({ id, icon, heading, content }, idx) => (
            <motion.section
              key={id}
              id={id}
              variants={fadeUp}
              initial="hidden"
              whileInView="visible"
              custom={idx * 0.35}
              viewport={{ once: true, amount: 0.07 }}
              aria-labelledby={`${id}-heading`}
              className="
                scroll-mt-28
                bg-white/70 backdrop-blur-sm
                border border-[#374b82]/10
                rounded-3xl
                shadow-[0_8px_32px_rgba(55,75,130,0.07)]
                p-7 sm:p-9
                hover:shadow-[0_12px_40px_rgba(55,75,130,0.11)]
                hover:border-[#374b82]/[0.18]
                transition-shadow duration-300
              "
            >
              <div className="flex items-center gap-3 mb-6 pb-5 border-b border-[#374b82]/[0.08]">
                <div className="w-10 h-10 rounded-xl bg-[#374b82]/10 text-[#374b82] flex items-center justify-center flex-shrink-0">
                  {icon}
                </div>
                <h2
                  id={`${id}-heading`}
                  className="text-xl sm:text-2xl font-bold text-[#111827] tracking-tight"
                >
                  {heading}
                </h2>
              </div>
              <RenderContent content={content} />
            </motion.section>
          ))}

          {/* ── CTA Banner ── */}
          <motion.div
            variants={fadeUp}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.12 }}
            className="relative overflow-hidden rounded-[2rem] bg-[#374b82] p-8 sm:p-12 shadow-[0_24px_80px_rgba(55,75,130,0.28)]"
          >
            <div
              aria-hidden="true"
              className="absolute inset-0 pointer-events-none"
            >
              <div className="absolute -right-14 -top-14 w-60 h-60 rounded-full border border-white/10" />
              <div className="absolute -right-4 -bottom-4 w-40 h-40 rounded-full border border-white/10" />
              <div className="absolute left-[-5%] bottom-[-20%] w-64 h-64 rounded-full bg-white/5 blur-[50px]" />
              <div
                className="absolute inset-0 opacity-[0.06]"
                style={{
                  backgroundImage: `radial-gradient(#ffffff 1px, transparent 1px)`,
                  backgroundSize: "20px 20px",
                }}
              />
            </div>

            <div className="relative z-10 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-7">
              <div className="max-w-lg">
                <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/15 border border-white/20 text-white text-xs font-bold uppercase tracking-widest mb-4">
                  <Shield size={11} aria-hidden="true" />
                  Questions About Privacy?
                </div>
                <h2 className="text-2xl sm:text-3xl font-bold text-white tracking-tight leading-tight mb-3">
                  We're Here to Help
                </h2>
                <p className="text-sm sm:text-base text-white/75 leading-relaxed">
                  If you have any questions about this Privacy Policy or how we
                  handle your data, our team is ready to assist you.
                </p>
              </div>

              <div className="flex flex-col sm:flex-row gap-3 flex-shrink-0">
                <Link
                  to="/contact"
                  className="
                    inline-flex items-center justify-center gap-2
                    px-6 py-3.5 bg-white text-[#374b82]
                    font-semibold text-sm rounded-xl
                    hover:bg-gray-50 transition-colors active:scale-95
                    no-underline shadow-md
                  "
                >
                  Contact Us
                  <ArrowRight size={16} aria-hidden="true" />
                </Link>
                <Link
                  to="/"
                  className="
                    inline-flex items-center justify-center gap-2
                    px-6 py-3.5 bg-white/12 text-white
                    border border-white/20 font-semibold text-sm rounded-xl
                    hover:bg-white/20 transition-colors no-underline
                  "
                >
                  <ArrowLeft size={16} aria-hidden="true" />
                  Back to Home
                </Link>
              </div>
            </div>
          </motion.div>

          {/* ── Related links ── */}
          <motion.div
            variants={fadeUp}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.2 }}
            className="grid grid-cols-1 sm:grid-cols-2 gap-4"
          >
            <Link
              to="/terms-and-conditions"
              className="
                group flex items-center justify-between gap-4
                p-5 rounded-2xl bg-white/70 backdrop-blur-sm
                border border-[#374b82]/10
                hover:border-[#374b82]/25
                hover:shadow-[0_8px_28px_rgba(55,75,130,0.10)]
                transition-all duration-200 no-underline
              "
            >
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-xl bg-[#374b82]/10 text-[#374b82] flex items-center justify-center flex-shrink-0 group-hover:bg-[#374b82] group-hover:text-white transition-colors duration-200">
                  <Shield size={17} aria-hidden="true" />
                </div>
                <div>
                  <p className="text-sm font-bold text-[#172033] group-hover:text-[#374b82] transition-colors">
                    Terms & Conditions
                  </p>
                  <p className="text-xs text-[#6b7280] mt-0.5">
                    Our usage terms
                  </p>
                </div>
              </div>
              <ChevronRight
                size={16}
                className="text-[#374b82]/40 group-hover:text-[#374b82] group-hover:translate-x-1 transition-all duration-200 flex-shrink-0"
                aria-hidden="true"
              />
            </Link>

            <Link
              to="/contact"
              className="
                group flex items-center justify-between gap-4
                p-5 rounded-2xl bg-white/70 backdrop-blur-sm
                border border-[#374b82]/10
                hover:border-[#374b82]/25
                hover:shadow-[0_8px_28px_rgba(55,75,130,0.10)]
                transition-all duration-200 no-underline
              "
            >
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-xl bg-[#374b82]/10 text-[#374b82] flex items-center justify-center flex-shrink-0 group-hover:bg-[#374b82] group-hover:text-white transition-colors duration-200">
                  <Mail size={17} aria-hidden="true" />
                </div>
                <div>
                  <p className="text-sm font-bold text-[#172033] group-hover:text-[#374b82] transition-colors">
                    Contact Support
                  </p>
                  <p className="text-xs text-[#6b7280] mt-0.5">
                    Get help from our team
                  </p>
                </div>
              </div>
              <ChevronRight
                size={16}
                className="text-[#374b82]/40 group-hover:text-[#374b82] group-hover:translate-x-1 transition-all duration-200 flex-shrink-0"
                aria-hidden="true"
              />
            </Link>
          </motion.div>

          {/* ── Back to top ── */}
          <div className="flex justify-center pt-2">
            <button
              type="button"
              onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
              aria-label="Back to top of page"
              className="
                inline-flex items-center gap-2
                px-5 py-2.5 rounded-xl
                text-sm font-semibold text-[#374b82]
                bg-white/70 backdrop-blur-sm
                border border-[#374b82]/15
                hover:bg-white hover:border-[#374b82]/30
                hover:shadow-[0_4px_16px_rgba(55,75,130,0.10)]
                transition-all duration-200
              "
            >
              Back to Top
              <ChevronRight
                size={14}
                className="-rotate-90"
                aria-hidden="true"
              />
            </button>
          </div>
        </div>
      </div>
    </main>
  );
};

export default PrivacyPolicy;
