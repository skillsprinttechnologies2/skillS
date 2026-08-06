import React, { useCallback, useEffect, useRef, useState } from "react";
import { Link } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";
import {
  FileText,
  CheckSquare,
  Monitor,
  Award,
  User,
  AlertTriangle,
  CreditCard,
  Wifi,
  Shield,
  XCircle,
  ExternalLink,
  RefreshCw,
  Mail,
  ChevronRight,
  ArrowLeft,
  ArrowRight,
  Phone,
  Globe,
  Info,
  Menu,
  X,
} from "react-feather";

// ─── Section Data ─────────────────────────────────────────────────────────────
const sections = [
  {
    id: "acceptance",
    icon: <CheckSquare size={20} />,
    label: "Acceptance of Terms",
    heading: "Acceptance of Terms",
    content: [
      {
        type: "paragraph",
        text: "By accessing or using any services provided by SkillSprint Technologies, you confirm that you have read, understood, and agree to be bound by these Terms and Conditions. These terms constitute a legally binding agreement between you and SkillSprint Technologies.",
      },
      {
        type: "paragraph",
        text: "If you are accessing our services on behalf of an organization, you represent and warrant that you have the authority to bind that organization to these terms. In such cases, 'you' and 'your' refer to that organization.",
      },
      {
        type: "highlight",
        text: "If you do not agree to these Terms and Conditions in their entirety, you must immediately discontinue your use of our services and platform.",
      },
      {
        type: "paragraph",
        text: "These terms apply to all visitors, users, and others who access or use our website, training programs, software solutions, digital marketing services, and any other offerings provided by SkillSprint Technologies.",
      },
    ],
  },
  {
    id: "use-of-services",
    icon: <Monitor size={20} />,
    label: "Use of Services",
    heading: "Use of Services",
    content: [
      {
        type: "paragraph",
        text: "SkillSprint Technologies grants you a limited, non-exclusive, non-transferable, and revocable license to access and use our services strictly in accordance with these Terms and Conditions.",
      },
      { type: "subheading", text: "Permitted Use" },
      {
        type: "list",
        items: [
          "Access and use the platform for personal or internal business purposes",
          "Enroll in and complete authorized training programs and courses",
          "Download materials explicitly made available for download",
          "Use our tools and software solutions as intended and documented",
          "Collaborate with other authorized users within the platform",
        ],
      },
      { type: "subheading", text: "Account Responsibilities" },
      {
        type: "list",
        items: [
          "You must provide accurate and complete registration information",
          "You are responsible for maintaining the confidentiality of your account credentials",
          "You must notify us immediately of any unauthorized account access",
          "You may not share your account with others or allow third-party access",
          "You are responsible for all activities that occur under your account",
        ],
      },
    ],
  },
  {
    id: "intellectual-property",
    icon: <Award size={20} />,
    label: "Intellectual Property",
    heading: "Intellectual Property",
    content: [
      {
        type: "paragraph",
        text: "All content, materials, features, and functionality available through SkillSprint Technologies — including but not limited to text, graphics, logos, icons, images, audio clips, video, data compilations, and software — are the exclusive property of SkillSprint Technologies or its content suppliers.",
      },
      { type: "subheading", text: "Our Rights" },
      {
        type: "list",
        items: [
          "All course content, curricula, and training materials are proprietary",
          "Our brand name, logo, and trade dress are registered trademarks",
          "Software tools and platforms developed by us are protected by copyright",
          "All methodologies, frameworks, and systems belong to SkillSprint Technologies",
          "Unauthorized reproduction or distribution is strictly prohibited",
        ],
      },
      { type: "subheading", text: "Your Content" },
      {
        type: "list",
        items: [
          "You retain ownership of content you submit or upload to our platform",
          "You grant us a license to use your content to provide our services",
          "You represent that you own or have rights to all submitted content",
          "We may remove content that violates these terms without prior notice",
        ],
      },
      {
        type: "paragraph",
        text: "Any unauthorized use of our intellectual property may violate copyright, trademark, and other applicable laws, and could result in criminal or civil penalties.",
      },
    ],
  },
  {
    id: "user-responsibilities",
    icon: <User size={20} />,
    label: "User Responsibilities",
    heading: "User Responsibilities",
    content: [
      {
        type: "paragraph",
        text: "As a user of SkillSprint Technologies services, you accept full responsibility for your conduct, your content, and your interactions with other users and third parties through our platform.",
      },
      {
        type: "list",
        items: [
          "Comply with all applicable local, national, and international laws and regulations",
          "Provide truthful, accurate, and current information at all times",
          "Maintain the security and confidentiality of your login credentials",
          "Respect the intellectual property rights of SkillSprint Technologies and other users",
          "Use the platform only for its intended educational and business purposes",
          "Report any security vulnerabilities or platform issues you discover",
          "Ensure all payments are made in a timely and legitimate manner",
          "Respect the rights, dignity, and privacy of other platform users",
        ],
      },
      {
        type: "paragraph",
        text: "You acknowledge that SkillSprint Technologies acts as a service provider and that you are solely responsible for your use of the platform and any consequences arising from that use.",
      },
    ],
  },
  {
    id: "prohibited-activities",
    icon: <AlertTriangle size={20} />,
    label: "Prohibited Activities",
    heading: "Prohibited Activities",
    content: [
      {
        type: "paragraph",
        text: "To protect the integrity of our platform and the experience of all users, the following activities are strictly prohibited when using SkillSprint Technologies services.",
      },
      { type: "subheading", text: "Strictly Prohibited" },
      {
        type: "list",
        items: [
          "Reproducing, copying, distributing, or selling any platform content without authorization",
          "Attempting to gain unauthorized access to any system, account, or network",
          "Using automated tools, bots, or scrapers to extract data from our platform",
          "Uploading malware, viruses, or any malicious code or software",
          "Impersonating SkillSprint Technologies, its employees, or other users",
          "Engaging in harassment, abuse, or discriminatory behavior toward others",
          "Posting false, misleading, defamatory, or harmful content",
          "Using our services to conduct fraudulent or deceptive activities",
          "Circumventing payment systems or accessing paid content without authorization",
          "Reverse engineering, decompiling, or disassembling any software we provide",
        ],
      },
      {
        type: "highlight",
        text: "Violations of these prohibitions may result in immediate account suspension, legal action, and recovery of damages incurred by SkillSprint Technologies.",
      },
    ],
  },
  {
    id: "payment-refund",
    icon: <CreditCard size={20} />,
    label: "Payment & Refund Policy",
    heading: "Payment & Refund Policy",
    content: [
      { type: "subheading", text: "Payment Terms" },
      {
        type: "list",
        items: [
          "All fees are quoted in Indian Rupees (INR) unless otherwise stated",
          "Payment is due at the time of enrollment or service agreement",
          "We accept major credit/debit cards, UPI, net banking, and bank transfers",
          "All transactions are secured with industry-standard SSL encryption",
          "Prices are subject to applicable taxes as per Indian tax regulations",
          "Invoices will be issued electronically within 24 hours of payment",
        ],
      },
      { type: "subheading", text: "Refund Policy" },
      {
        type: "list",
        items: [
          "Course enrollments: Full refund within 7 days if less than 20% content accessed",
          "Custom software projects: Refunds governed by individual project agreements",
          "Digital marketing services: Pro-rated refund for unused service period",
          "No refunds for partially completed training programs beyond 20% access",
          "Refund requests must be submitted in writing via email",
          "Approved refunds are processed within 7–14 business days",
        ],
      },
      {
        type: "paragraph",
        text: "In cases of service failure attributable solely to SkillSprint Technologies, we reserve the right to offer service credits, replacement courses, or full refunds at our discretion.",
      },
    ],
  },
  {
    id: "service-availability",
    icon: <Wifi size={20} />,
    label: "Service Availability",
    heading: "Service Availability",
    content: [
      {
        type: "paragraph",
        text: "SkillSprint Technologies strives to maintain continuous, uninterrupted access to our services. However, we do not guarantee 100% uptime and reserve the right to perform maintenance or updates.",
      },
      {
        type: "list",
        items: [
          "Scheduled maintenance will be communicated at least 24 hours in advance",
          "Emergency maintenance may occur without prior notice in critical situations",
          "We target a service uptime of 99.5% on a monthly basis",
          "Service interruptions due to third-party dependencies are outside our control",
          "Force majeure events exempt us from liability",
          "We are not liable for losses due to unplanned service interruptions",
        ],
      },
      {
        type: "paragraph",
        text: "In the event of extended service outages directly attributable to SkillSprint Technologies, affected users may be eligible for service credits as determined by our support team on a case-by-case basis.",
      },
    ],
  },
  {
    id: "liability",
    icon: <Shield size={20} />,
    label: "Limitation of Liability",
    heading: "Limitation of Liability",
    content: [
      {
        type: "paragraph",
        text: "To the maximum extent permitted by applicable law, SkillSprint Technologies and its directors, employees, partners, agents, suppliers, and affiliates shall not be liable for any indirect, incidental, special, consequential, or punitive damages.",
      },
      {
        type: "list",
        items: [
          "Loss of profits, revenue, data, or business opportunities",
          "Goodwill, reputation, or anticipated savings",
          "Damages resulting from unauthorized access to your data or account",
          "Losses arising from third-party service failures or interruptions",
          "Indirect damages arising from use or inability to use our services",
          "Errors, mistakes, or inaccuracies in any platform content",
        ],
      },
      {
        type: "highlight",
        text: "Our total cumulative liability to you for any claims arising from these terms shall not exceed the total amount paid by you to SkillSprint Technologies in the three months preceding the claim.",
      },
      {
        type: "paragraph",
        text: "Some jurisdictions do not allow the exclusion or limitation of liability for consequential or incidental damages. In such jurisdictions, our liability is limited to the maximum extent permitted by law.",
      },
    ],
  },
  {
    id: "termination",
    icon: <XCircle size={20} />,
    label: "Termination",
    heading: "Termination",
    content: [
      {
        type: "paragraph",
        text: "Either party may terminate the service relationship under the conditions outlined below. Termination does not relieve you of obligations incurred prior to the termination date.",
      },
      { type: "subheading", text: "Termination by Us" },
      {
        type: "list",
        items: [
          "Immediate termination for violation of these Terms and Conditions",
          "Termination with 30 days' notice for business or operational reasons",
          "Suspension pending investigation of suspected fraudulent activity",
          "Termination for non-payment of fees after 15-day grace period",
        ],
      },
      { type: "subheading", text: "Termination by You" },
      {
        type: "list",
        items: [
          "You may cancel your account at any time via account settings or written request",
          "Active subscriptions continue until the end of the paid period",
          "Course enrollments remain accessible until the program end date",
          "You are responsible for exporting your data before account closure",
        ],
      },
      {
        type: "paragraph",
        text: "Upon termination, your right to access the platform and its content ceases immediately. Provisions of these terms that by nature should survive termination shall continue in full force and effect.",
      },
    ],
  },
  {
    id: "third-party",
    icon: <ExternalLink size={20} />,
    label: "Third-Party Links",
    heading: "Third-Party Links & Services",
    content: [
      {
        type: "paragraph",
        text: "Our platform may contain links to third-party websites, services, or resources that are not owned or controlled by SkillSprint Technologies. We provide these links for convenience and informational purposes only.",
      },
      {
        type: "list",
        items: [
          "We have no control over the content, privacy policies, or practices of third-party sites",
          "We do not endorse or assume responsibility for third-party services",
          "Accessing third-party links is done at your own risk and discretion",
          "Third-party services are governed by their own separate terms",
          "We are not liable for damages arising from third-party service use",
          "We recommend reviewing third-party privacy policies before engaging",
        ],
      },
      {
        type: "paragraph",
        text: "We may integrate third-party tools such as payment gateways, analytics platforms, and communication tools into our services. Use of these integrated services is subject to both our terms and the terms of the respective third-party providers.",
      },
    ],
  },
  {
    id: "changes",
    icon: <RefreshCw size={20} />,
    label: "Changes to Terms",
    heading: "Changes to Terms",
    content: [
      {
        type: "paragraph",
        text: "SkillSprint Technologies reserves the right to modify, update, or replace these Terms and Conditions at any time. We are committed to providing transparent and timely notification of any significant changes.",
      },
      {
        type: "list",
        items: [
          "Material changes will be communicated via email to registered users",
          "Updated terms will display a revised 'Last Updated' date at the top",
          "Continued use of services after changes constitutes your acceptance",
          "Significant changes will include a 30-day notice period where possible",
          "Historical versions of terms are available upon written request",
          "Changes to payment terms will always include advance notice",
        ],
      },
      {
        type: "paragraph",
        text: "We encourage you to review these Terms and Conditions periodically. If you do not agree with any modifications, you must stop using our services before the effective date of the changes and contact us to discuss alternatives.",
      },
    ],
  },
  {
    id: "contact",
    icon: <Mail size={20} />,
    label: "Contact Information",
    heading: "Contact Information",
    content: [
      {
        type: "paragraph",
        text: "If you have any questions, concerns, or disputes regarding these Terms and Conditions, please contact our legal and support team. We are committed to resolving all inquiries promptly and professionally.",
      },
      {
        type: "contact",
        items: [
          {
            icon: <Mail size={16} />,
            label: "Legal",
            value: "skillsprinttechnologies@gmail.com",
            href: "mailto:skillsprinttechnologies@gmail.com",
          },
          {
            icon: <Phone size={16} />,
            label: "Support",
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
        text: "For formal legal notices, please send correspondence to our registered office address. Our legal team will respond to all formal communications within 10 business days.",
      },
      { type: "subheading", text: "Governing Law" },
      {
        type: "paragraph",
        text: "These Terms and Conditions are governed by and construed in accordance with the laws of India. Any disputes arising under these terms shall be subject to the exclusive jurisdiction of the courts located in Bangalore, Karnataka, India.",
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

// ─── Shared Drawer Inner Content ───────────────────────────────────────────────
const DrawerInner = ({
  activeSection,
  onNavigate,
  onClose,
}) => (
  <div className="flex flex-col h-full">
    {/* Header */}
    <div className="flex items-center justify-between gap-4 px-5 py-4 border-b border-[#374b82]/10 flex-shrink-0">
      <div>
        <p className="text-[10px] font-bold uppercase tracking-[0.18em] text-[#374b82]/60">
          SkillSprint
        </p>
        <h2 className="text-base font-bold text-[#111827]">Terms Navigation</h2>
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

      <nav aria-label="Terms and conditions sections">
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
          Contact Legal Team
        </Link>

        <Link
          to="/privacy-policy"
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
          Privacy Policy
        </Link>
      </div>
    </div>
  </div>
);

// ─── Main Component ───────────────────────────────────────────────────────────
const TermsAndConditions = () => {
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
      aria-labelledby="terms-heading"
    >
      {/* ── Hero ────────────────────────────────────────────────────────── */}
      <section className="relative pt-28 pb-14 sm:pt-32 sm:pb-16 overflow-hidden">
        <div
          aria-hidden="true"
          className="absolute inset-0 pointer-events-none"
        >
          <div
            className="absolute inset-0 opacity-[0.26]"
            style={{
              backgroundImage: `radial-gradient(rgba(55,75,130,0.18) 1px, transparent 1px)`,
              backgroundSize: "28px 28px",
            }}
          />
          <div className="absolute -top-28 -right-20 w-[420px] h-[420px] rounded-full bg-[#374b82]/[0.06] blur-3xl" />
          <div className="absolute top-10 -left-16 w-80 h-80 rounded-full bg-[#374b82]/[0.05] blur-3xl" />
          <div className="absolute inset-0 bg-[radial-gradient(ellipse_75%_55%_at_50%_0%,rgba(255,255,255,0.68)_0%,transparent_100%)]" />
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
            <span className="text-[#374b82] font-semibold">
              Terms & Conditions
            </span>
          </motion.nav>

          <div className="max-w-3xl">
            <motion.div
              variants={fadeUp}
              initial="hidden"
              animate="visible"
              custom={0}
              className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-[#374b82]/10 border border-[#374b82]/20 text-[#374b82] text-xs font-bold uppercase tracking-[0.16em] mb-5"
            >
              <FileText size={13} aria-hidden="true" />
              Legal & Compliance
            </motion.div>

            <motion.h1
              id="terms-heading"
              variants={fadeUp}
              initial="hidden"
              animate="visible"
              custom={1}
              className="text-[2.2rem] sm:text-[2.8rem] lg:text-[3.4rem] font-bold text-[#111827] leading-[1.05] tracking-tight mb-4"
            >
              Terms & <span className="text-[#374b82]">Conditions</span>
            </motion.h1>

            <motion.p
              variants={fadeUp}
              initial="hidden"
              animate="visible"
              custom={2}
              className="text-[15px] sm:text-base lg:text-[17px] text-[#4b5563] leading-relaxed mb-6 max-w-2xl"
            >
              Please read these terms carefully before using SkillSprint
              Technologies services. By accessing our platform, you agree to be
              bound by these conditions.
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
                  Legally Binding
                </span>
              </div>
              <div className="flex items-center gap-2 px-4 py-2 rounded-xl bg-white/70 backdrop-blur-sm border border-[#374b82]/[0.12] shadow-sm">
                <div className="w-2 h-2 rounded-full bg-blue-500" />
                <span className="text-xs font-semibold text-[#374b82]">
                  India Compliant
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
        aria-label="Open terms navigation"
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
        aria-label="Open terms navigation"
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
            {/* Overlay */}
            <button
              type="button"
              aria-label="Close terms navigation overlay"
              onClick={() => setDesktopDrawerOpen(false)}
              className="absolute inset-0 w-full h-full bg-[#0d1424]/45 backdrop-blur-sm"
            />

            {/* Drawer panel */}
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
              aria-label="Desktop terms navigation drawer"
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
            {/* Overlay */}
            <button
              type="button"
              aria-label="Close terms navigation overlay"
              onClick={() => setMobileDrawerOpen(false)}
              className="absolute inset-0 w-full h-full bg-[#0d1424]/45 backdrop-blur-sm"
            />

            {/* Drawer panel */}
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
              aria-label="Mobile terms navigation drawer"
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

      {/* ── Main Content (full width, no sidebar column) ──────────────────── */}
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
                  <FileText size={11} aria-hidden="true" />
                  Need Clarification?
                </div>
                <h2 className="text-2xl sm:text-3xl font-bold text-white tracking-tight leading-tight mb-3">
                  Questions About Our Terms?
                </h2>
                <p className="text-sm sm:text-base text-white/75 leading-relaxed">
                  Our legal and support team is ready to help clarify any aspect
                  of these terms. Reach out to us before making a decision.
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
              to="/privacy-policy"
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
                    Privacy Policy
                  </p>
                  <p className="text-xs text-[#6b7280] mt-0.5">
                    How we handle your data
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

          {/* Back to top */}
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

export default TermsAndConditions;
