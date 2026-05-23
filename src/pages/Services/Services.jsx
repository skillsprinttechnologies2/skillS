import React from "react";
import { Link } from "react-router-dom";
import {
  TrendingUp,
  Layout,
  BookOpen,
  MessageSquare,
  PenTool,
  Code,
  ArrowRight,
  Search,
  FileText,
  Cpu,
  CheckCircle,
  Maximize,
  Zap,
  Lock,
  Briefcase,
} from "react-feather";

// Data arrays defined outside component for performance and cleanliness
const servicesData = [
  {
    title: "Internships & Industry Exposure",
    description:
      "Practical internship programs designed to help students gain real-world experience and industry-ready skills.",
    icon: <Briefcase size={28} />,
    features: [
      "Live Project Experience",
      "Industry Mentorship",
      "Practical Skill Development",
      "Internship Certification",
    ],
    tags: ["Internships", "Industry Experience", "Mentorship"],
  },

  {
    title: "Web Development",
    description:
      "Build high-performance, responsive websites designed for modern user experiences and scalability.",
    icon: <Layout size={28} />,
    features: [
      "Responsive UI/UX Design",
      "Fast Loading Speed",
      "CMS Integration",
      "Cross-browser Compatibility",
    ],
    tags: ["React", "Next.js", "Responsive"],
  },
  {
    title: "Digital Marketing",
    description:
      "Boost your brand visibility and drive qualified leads with data-driven marketing strategies.",
    icon: <TrendingUp size={28} />,
    features: [
      "SEO & Content Strategy",
      "Social Media Management",
      "PPC Campaigns",
      "Analytics & Reporting",
    ],
    tags: ["SEO", "Ads", "Growth"],
  },
  {
    title: "Software Training & Career Readiness",
    description:
      "Hands-on learning programs focused on building practical skills, industry exposure, and confidence for real-world software careers.",
    icon: <BookOpen size={28} />,
    features: [
      "Expert Mentorship",
      "Real-world Projects",
      "Career Guidance",
      "Industry Certification",
    ],
    tags: ["Training", "Career Growth", "Mentorship"],
  },
  {
    title: "Chatbot & Automation",
    description:
      "Implement smart automated workflows and AI chatbots to improve efficiency and customer support.",
    icon: <MessageSquare size={28} />,
    features: [
      "24/7 Customer Support",
      "CRM Integration",
      "Workflow Automation",
      "AI Chatbots",
    ],
    tags: ["AI", "CRM", "Automation"],
  },
  {
    title: "Graphic Design Services",
    description:
      "Create compelling brand visuals, UI designs, and marketing assets tailored to your identity.",
    icon: <PenTool size={28} />,
    features: [
      "Logo & Brand Identity",
      "UI/UX Prototyping",
      "Marketing Collateral",
      "Presentation Design",
    ],
    tags: ["Branding", "UI/UX", "Creative"],
  },
  {
    title: "Software Development",
    description:
      "Develop custom enterprise software solutions with scalable architecture and agile practices.",
    icon: <Code size={28} />,
    features: [
      "Scalable Architecture",
      "API Development",
      "Agile Methodology",
      "Cloud Deployment",
    ],
    tags: ["SaaS", "API", "Cloud"],
  },
];

const processData = [
  {
    step: "01",
    title: "Discover",
    description:
      "We analyze your business goals, target audience, and technical requirements.",
    icon: <Search size={24} />,
  },
  {
    step: "02",
    title: "Plan",
    description:
      "We create a clear roadmap, strategy, and technology stack for your project.",
    icon: <FileText size={24} />,
  },
  {
    step: "03",
    title: "Build",
    description:
      "Our team develops your solution using modern tools and agile practices.",
    icon: <Cpu size={24} />,
  },
  {
    step: "04",
    title: "Launch & Support",
    description:
      "We deploy your project and provide ongoing maintenance and support.",
    icon: <CheckCircle size={24} />,
  },
];

const whyChooseUsData = [
  {
    title: "Scalable Solutions",
    description: "Architecture designed to grow alongside your business needs.",
    icon: <Maximize size={24} />,
  },
  {
    title: "Fast Delivery",
    description:
      "Agile workflows ensuring timely project completion without compromising quality.",
    icon: <Zap size={24} />,
  },
  {
    title: "Secure Architecture",
    description:
      "Enterprise-grade security standards protecting your data and users.",
    icon: <Lock size={24} />,
  },
  {
    title: "Business-Focused",
    description:
      "Every technical decision is aligned with your business goals and ROI.",
    icon: <Briefcase size={24} />,
  },
];

const Services = () => {
  return (
    <main className="relative bg-transperent w-full overflow-hidden pt-32 pb-20">
      <div className="relative z-10 max-w-[1600px] mx-auto px-5 sm:px-8 lg:px-12 xl:px-16 2xl:px-20 space-y-24 lg:space-y-32">
        {/* A. Hero Section */}
        <section
          aria-labelledby="services-page-heading"
          className="text-center max-w-4xl mx-auto space-y-6"
        >
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#374b82]/10 border border-[#374b82]/20 text-[#374b82] text-xs font-bold uppercase tracking-widest">
            OUR SERVICES
          </div>
          <h1
            id="services-page-heading"
            className="text-4xl md:text-5xl lg:text-6xl font-bold text-[#111827] tracking-tight"
          >
            Digital Solutions Built For{" "}
            <span className="text-[#374b82]">Growth</span>
          </h1>
          <p className="text-lg text-[#4b5563] leading-relaxed max-w-2xl mx-auto">
            SkillSprint Technologies helps businesses build, automate, market,
            and scale with reliable digital marketing, web development, software
            development, and chatbot automation services.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 pt-4">
            <Link
              to="/contact"
              onClick={() => window.scrollTo(0, 0)}
              className="inline-flex items-center justify-center gap-2 px-8 py-4 bg-[#374b82] !text-white font-semibold rounded-xl shadow-lg shadow-[#374b82]/20 hover:bg-[#2f3f70] transition-all active:scale-95"
              aria-label="Get a free consultation"
            >
              Get Free Consultation
              <ArrowRight size={18} />
            </Link>
            {/* <Link
              to="/ourteam"
              onClick={() => window.scrollTo(0, 0)}
              className="inline-flex items-center justify-center gap-2 px-8 py-4 bg-white/80 !text-[#374b82] font-semibold rounded-xl border border-[#374b82]/20 hover:bg-white hover:border-[#374b82]/40 transition-all"
              aria-label="View our service plans"
            >
              Know us
            </Link> */}
          </div>
        </section>

        {/* B. Detailed Services Grid */}
        <section>
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-[#111827]">
              Comprehensive Digital Solutions
            </h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {servicesData.map((service) => (
              <article
                key={service.title}
                className="group flex flex-col h-full p-8 rounded-3xl bg-white/65 backdrop-blur-xl border border-[#374b82]/10 shadow-[0_20px_60px_rgba(55,75,130,0.10)] transition-all duration-300 hover:-translate-y-2 hover:border-[#374b82]/30 hover:shadow-[0_30px_80px_rgba(55,75,130,0.16)]"
              >
                {/* Icon */}
                <div
                  className="w-14 h-14 mb-6 flex items-center justify-center rounded-2xl bg-[#374b82]/10 text-[#374b82] transition-colors duration-300 group-hover:bg-[#374b82] group-hover:text-white"
                  aria-hidden="true"
                >
                  {service.icon}
                </div>

                {/* Content */}
                <h3 className="text-xl font-bold text-[#172033] mb-3 group-hover:text-[#374b82] transition-colors">
                  {service.title}
                </h3>
                <p className="text-sm text-[#4b5563] leading-relaxed mb-6">
                  {service.description}
                </p>

                {/* Features List */}
                <ul className="space-y-2 mb-6 flex-grow">
                  {service.features.map((feature, idx) => (
                    <li
                      key={idx}
                      className="flex items-start gap-2 text-sm text-[#4b5563]"
                    >
                      <span
                        className="mt-1.5 w-1 h-1 rounded-full bg-[#374b82] flex-shrink-0"
                        aria-hidden="true"
                      />
                      {feature}
                    </li>
                  ))}
                </ul>

                {/* Tags */}
                <div className="flex flex-wrap gap-2 mb-8">
                  {service.tags.map((tag) => (
                    <span
                      key={tag}
                      className="text-[10px] font-semibold px-2.5 py-1 rounded-md bg-white border border-gray-200 text-gray-500 group-hover:border-[#374b82]/20 group-hover:text-[#374b82] transition-all"
                    >
                      {tag}
                    </span>
                  ))}
                </div>

                {/* CTA */}
                <Link
                  to="/contact"
                  className="inline-flex items-center gap-2 text-sm font-bold text-[#374b82] group-hover:gap-3 transition-all"
                  aria-label={`Enquire now about ${service.title}`}
                >
                  Enquire Now
                  <ArrowRight
                    size={16}
                    className="transition-transform duration-300"
                  />
                </Link>
              </article>
            ))}
          </div>
        </section>

        {/* C. Process Section */}
        <section>
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-[#111827]">
              How We Work
            </h2>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {processData.map((step) => (
              <div
                key={step.step}
                className="relative p-6 rounded-3xl bg-white/65 backdrop-blur-xl border border-[#374b82]/10 shadow-[0_20px_60px_rgba(55,75,130,0.10)] transition-all duration-300 hover:-translate-y-1 hover:border-[#374b82]/30"
              >
                <div
                  className="absolute top-4 right-6 text-4xl font-bold text-[#374b82]/10"
                  aria-hidden="true"
                >
                  {step.step}
                </div>
                <div
                  className="w-12 h-12 mb-4 flex items-center justify-center rounded-xl bg-[#374b82]/10 text-[#374b82]"
                  aria-hidden="true"
                >
                  {step.icon}
                </div>
                <h3 className="text-lg font-bold text-[#172033] mb-2">
                  {step.title}
                </h3>
                <p className="text-sm text-[#4b5563] leading-relaxed">
                  {step.description}
                </p>
              </div>
            ))}
          </div>
        </section>

        {/* D. Why Choose Us Section */}
        <section>
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-[#111827]">
              Why Choose SkillSprint Technologies
            </h2>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {whyChooseUsData.map((item) => (
              <div
                key={item.title}
                className="p-6 rounded-3xl bg-white/65 backdrop-blur-xl border border-[#374b82]/10 shadow-[0_20px_60px_rgba(55,75,130,0.10)] transition-all duration-300 hover:-translate-y-1 hover:border-[#374b82]/30 text-center"
              >
                <div
                  className="w-12 h-12 mx-auto mb-4 flex items-center justify-center rounded-full bg-[#374b82]/10 text-[#374b82]"
                  aria-hidden="true"
                >
                  {item.icon}
                </div>
                <h3 className="text-lg font-bold text-[#172033] mb-2">
                  {item.title}
                </h3>
                <p className="text-sm text-[#4b5563] leading-relaxed">
                  {item.description}
                </p>
              </div>
            ))}
          </div>
        </section>

        {/* E. Final CTA Section */}
        <section className="max-w-4xl mx-auto">
          <div className="relative overflow-hidden rounded-[2rem] bg-white/65 backdrop-blur-xl border border-[#374b82]/10 shadow-[0_30px_100px_rgba(55,75,130,0.12)] p-10 md:p-16 text-center">
            <div className="relative z-10 space-y-6">
              <h2 className="text-3xl md:text-4xl font-bold text-[#111827]">
                Ready to build your next digital solution?
              </h2>
              <p className="text-lg text-[#4b5563] max-w-2xl mx-auto">
                Talk to SkillSprint Technologies and choose the right service
                for your business. Let's create something amazing together.
              </p>
              <div className="pt-4">
                <Link
                  to="/contact"
                  className="inline-flex items-center justify-center gap-2 px-8 py-4 bg-[#374b82] !text-white font-semibold rounded-xl shadow-lg shadow-[#374b82]/20 hover:bg-[#2f3f70] transition-all active:scale-95"
                  aria-label="Contact us to get started"
                >
                  Contact Us
                  <ArrowRight size={18} />
                </Link>
              </div>
            </div>
            {/* Subtle decorative background for CTA card */}
            <div
              className="absolute top-0 right-0 w-64 h-64 bg-[#374b82]/5 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2 pointer-events-none"
              aria-hidden="true"
            />
            <div
              className="absolute bottom-0 left-0 w-64 h-64 bg-[#374b82]/5 rounded-full blur-3xl translate-y-1/2 -translate-x-1/2 pointer-events-none"
              aria-hidden="true"
            />
          </div>
        </section>
      </div>
    </main>
  );
};

export default Services;
