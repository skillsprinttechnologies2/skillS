import React, { useState, useRef } from "react";
import {
  Briefcase,
  Users,
  TrendingUp,
  Star,
  CheckCircle,
  AlertCircle,
  Send,
  ArrowRight,
  MapPin,
  Monitor,
} from "react-feather";

// ─── Data ─────────────────────────────────────────────────────────────────────

const whyJoin = [
  {
    icon: <Monitor size={22} aria-hidden="true" />,
    title: "Real Project Experience",
    description:
      "Work on live websites, applications, and client-based digital projects.",
  },
  {
    icon: <Users size={22} aria-hidden="true" />,
    title: "Mentorship & Guidance",
    description:
      "Learn directly from developers, designers, and project leads.",
  },
  {
    icon: <TrendingUp size={22} aria-hidden="true" />,
    title: "Skill-Based Growth",
    description: "Improve your technical, communication, and teamwork skills.",
  },
  {
    icon: <Star size={22} aria-hidden="true" />,
    title: "Career Opportunities",
    description:
      "Build experience that helps you grow into future full-time roles.",
  },
];

const positions = [
  {
    title: "Web Development Intern",
    type: "Internship",
    mode: "Remote / Hybrid",
    skills: ["HTML", "CSS", "JavaScript", "React"],
    applyValue: "Web Development",
  },
  {
    title: "UI/UX Design Intern",
    type: "Internship",
    mode: "Remote",
    skills: ["Figma", "Wireframes", "Prototyping"],
    applyValue: "Graphic Design",
  },
  {
    title: "Digital Marketing Intern",
    type: "Internship",
    mode: "Remote",
    skills: ["SEO", "Social Media", "Content"],
    applyValue: "Digital Marketing",
  },
  {
    title: "Graphic Design Intern",
    type: "Internship",
    mode: "Remote",
    skills: ["Canva", "Photoshop", "Branding"],
    applyValue: "Graphic Design",
  },
  {
    title: "Software Training Candidate",
    type: "Training",
    mode: "Online / Hybrid",
    skills: ["Programming", "Web Development", "Projects"],
    applyValue: "Software Training",
  },
];

const hiringSteps = [
  {
    step: "01",
    title: "Apply",
    description: "Submit your application form with your details and message.",
  },
  {
    step: "02",
    title: "Shortlisting",
    description:
      "Our team reviews applications and shortlists suitable candidates.",
  },
  {
    step: "03",
    title: "Interview / Task",
    description:
      "Selected candidates complete a short task or interview round.",
  },
  {
    step: "04",
    title: "Selection",
    description:
      "Successful candidates receive a confirmation and offer details.",
  },
  {
    step: "05",
    title: "Onboarding",
    description:
      "Welcome to SkillSprint. Begin your journey with real projects.",
  },
];

const roleOptions = [
  "Internship",
  "Web Development",
  "Digital Marketing",
  "Graphic Design",
  "Software Training",
  "Other",
];

const experienceOptions = ["Fresher", "0-1 Year", "1-2 Years", "2+ Years"];

const emptyForm = {
  fullName: "",
  email: "",
  phone: "",
  role: "",
  experience: "",
  portfolio: "",
  message: "",
};

// ─── Component ────────────────────────────────────────────────────────────────

const Careers = () => {
  const [formValues, setFormValues] = useState(emptyForm);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);
  const [errorMessage, setErrorMessage] = useState("");

  const openPositionsRef = useRef(null);
  const formRef = useRef(null);

  // Smooth scroll helpers
  const scrollToPositions = () => {
    openPositionsRef.current?.scrollIntoView({
      behavior: "smooth",
      block: "start",
    });
  };

  const scrollToForm = (presetRole = "") => {
    if (presetRole) {
      setFormValues((prev) => ({ ...prev, role: presetRole }));
    }
    formRef.current?.scrollIntoView({ behavior: "smooth", block: "start" });
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormValues((prev) => ({ ...prev, [name]: value }));
    if (errorMessage) setErrorMessage("");
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setErrorMessage("");

    const { fullName, email, phone, role, experience, message } = formValues;

    if (
      !fullName.trim() ||
      !email.trim() ||
      !phone.trim() ||
      !role.trim() ||
      !experience.trim() ||
      !message.trim()
    ) {
      setErrorMessage("Please fill all required fields.");
      return;
    }

    if (message.trim().length < 10) {
      setErrorMessage("Please enter a message with at least 10 characters.");
      return;
    }

    setIsSubmitting(true);
    setTimeout(() => {
      setIsSubmitting(false);
      setIsSuccess(true);
      setFormValues(emptyForm);
    }, 800);
  };

  const handleReset = () => {
    setIsSuccess(false);
    setErrorMessage("");
    setFormValues(emptyForm);
  };

  const inputBase =
    "w-full px-4 py-3 rounded-xl bg-white/80 border border-[#374b82]/15 text-[#111827] placeholder-gray-400 text-sm focus:outline-none focus:border-[#374b82] focus:ring-1 focus:ring-[#374b82]/30 transition-colors";

  const labelBase = "block text-sm font-semibold text-[#374b82] mb-1.5";

  const sectionGap = "mb-20 sm:mb-24";

  return (
    <main
      className="relative bg-transperent w-full overflow-hidden"
      aria-labelledby="careers-heading"
    >
      <div className="relative z-10 max-w-[1100px] mx-auto px-5 sm:px-8 lg:px-12 pt-32 pb-20">
        {/* ── 1. HERO ──────────────────────────────────────────────────────── */}
        <section
          className={`text-center ${sectionGap}`}
          aria-labelledby="careers-heading"
        >
          <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-[#374b82]/10 border border-[#374b82]/20 text-[#374b82] text-xs font-bold uppercase tracking-widest mb-5">
            Careers
          </div>
          <h1
            id="careers-heading"
            className="text-4xl sm:text-5xl lg:text-6xl font-bold text-[#111827] tracking-tight leading-tight mb-5"
          >
            Start Your Career With{" "}
            <span className="text-[#374b82]">SkillSprint</span>
          </h1>
          <p className="text-base sm:text-lg text-[#4b5563] leading-relaxed max-w-2xl mx-auto mb-8">
            Apply for internships, training opportunities, or entry-level roles
            and grow with real-world digital projects at SkillSprint
            Technologies.
          </p>
          <button
            type="button"
            onClick={scrollToPositions}
            className="inline-flex items-center gap-2 px-7 py-4 bg-[#374b82] text-white font-semibold rounded-xl shadow-[0_16px_40px_rgba(55,75,130,0.28)] hover:bg-[#2f3f70] transition-all active:scale-95"
            aria-label="Scroll to open positions"
          >
            View Open Roles
            <ArrowRight size={18} aria-hidden="true" />
          </button>
        </section>

        {/* ── 2. WHY JOIN ──────────────────────────────────────────────────── */}
        <section className={sectionGap} aria-labelledby="why-join-heading">
          <div className="text-center mb-10">
            <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-[#374b82]/10 border border-[#374b82]/20 text-[#374b82] text-xs font-bold uppercase tracking-widest mb-4">
              Why Join Us
            </div>
            <h2
              id="why-join-heading"
              className="text-3xl sm:text-4xl font-bold text-[#111827] tracking-tight"
            >
              Why Join <span className="text-[#374b82]">SkillSprint</span>
            </h2>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
            {whyJoin.map((item) => (
              <div
                key={item.title}
                className="group flex gap-5 p-7 rounded-3xl bg-white/70 border border-[#374b82]/10 shadow-[0_16px_48px_rgba(55,75,130,0.10)] hover:-translate-y-1 transition-transform duration-200"
              >
                <div className="w-12 h-12 flex-shrink-0 flex items-center justify-center rounded-2xl bg-[#374b82]/10 text-[#374b82] group-hover:bg-[#374b82] group-hover:text-white transition-colors duration-200">
                  {item.icon}
                </div>
                <div>
                  <h3 className="text-lg font-bold text-[#172033] mb-2 group-hover:text-[#374b82] transition-colors duration-200">
                    {item.title}
                  </h3>
                  <p className="text-sm text-[#4b5563] leading-relaxed">
                    {item.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* ── 3. OPEN POSITIONS ─────────────────────────────────────────────── */}
        <section
          ref={openPositionsRef}
          className={sectionGap}
          aria-labelledby="positions-heading"
        >
          <div className="text-center mb-10">
            <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-[#374b82]/10 border border-[#374b82]/20 text-[#374b82] text-xs font-bold uppercase tracking-widest mb-4">
              Open Positions
            </div>
            <h2
              id="positions-heading"
              className="text-3xl sm:text-4xl font-bold text-[#111827] tracking-tight"
            >
              Current <span className="text-[#374b82]">Openings</span>
            </h2>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
            {positions.map((pos) => (
              <div
                key={pos.title}
                className="group flex flex-col p-7 rounded-3xl bg-white/70 border border-[#374b82]/10 shadow-[0_16px_48px_rgba(55,75,130,0.10)] hover:-translate-y-1 hover:border-[#374b82]/25 hover:shadow-[0_24px_60px_rgba(55,75,130,0.16)] transition-all duration-200"
              >
                <div className="flex flex-wrap items-center gap-2 mb-4">
                  <span className="px-2.5 py-1 text-[10px] font-bold uppercase tracking-wider rounded-full bg-[#374b82]/10 text-[#374b82] border border-[#374b82]/15">
                    {pos.type}
                  </span>
                  <span className="flex items-center gap-1 text-xs text-[#4b5563]">
                    <MapPin
                      size={12}
                      aria-hidden="true"
                      className="text-[#374b82]"
                    />
                    {pos.mode}
                  </span>
                </div>

                <h3 className="text-xl font-bold text-[#172033] mb-4 group-hover:text-[#374b82] transition-colors duration-200">
                  {pos.title}
                </h3>

                <div className="flex flex-wrap gap-2 mb-6 flex-grow">
                  {pos.skills.map((skill) => (
                    <span
                      key={skill}
                      className="px-3 py-1 text-xs font-medium rounded-lg bg-[#374b82]/5 text-[#374b82] border border-[#374b82]/10"
                    >
                      {skill}
                    </span>
                  ))}
                </div>

                <button
                  type="button"
                  onClick={() => scrollToForm(pos.applyValue)}
                  className="inline-flex items-center gap-2 text-sm font-semibold text-[#374b82] hover:gap-3 transition-all duration-200 mt-auto"
                  aria-label={`Apply for ${pos.title}`}
                >
                  Apply Now
                  <ArrowRight size={16} aria-hidden="true" />
                </button>
              </div>
            ))}
          </div>
        </section>

        {/* ── 4. HIRING PROCESS ─────────────────────────────────────────────── */}
        <section className={sectionGap} aria-labelledby="process-heading">
          <div className="text-center mb-10">
            <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-[#374b82]/10 border border-[#374b82]/20 text-[#374b82] text-xs font-bold uppercase tracking-widest mb-4">
              Hiring Process
            </div>
            <h2
              id="process-heading"
              className="text-3xl sm:text-4xl font-bold text-[#111827] tracking-tight"
            >
              How We <span className="text-[#374b82]">Hire</span>
            </h2>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-6">
            {hiringSteps.map((item, index) => (
              <div
                key={item.step}
                className="relative flex flex-col items-center text-center p-6 rounded-3xl bg-white/70 border border-[#374b82]/10 shadow-[0_12px_36px_rgba(55,75,130,0.08)] hover:-translate-y-1 transition-transform duration-200"
              >
                {/* Arrow connector (between cards on desktop) */}
                {index < hiringSteps.length - 1 && (
                  <div
                    className="hidden lg:block absolute -right-3 top-1/2 -translate-y-1/2 z-10 w-6 h-6 bg-white border border-[#374b82]/15 rounded-full flex items-center justify-center"
                    aria-hidden="true"
                  >
                    <ArrowRight size={12} className="text-[#374b82]" />
                  </div>
                )}

                <div className="w-12 h-12 rounded-full bg-[#374b82] text-white flex items-center justify-center font-bold text-sm shadow-[0_8px_20px_rgba(55,75,130,0.28)] mb-4">
                  {item.step}
                </div>
                <h3 className="text-base font-bold text-[#172033] mb-2">
                  {item.title}
                </h3>
                <p className="text-xs text-[#4b5563] leading-relaxed">
                  {item.description}
                </p>
              </div>
            ))}
          </div>
        </section>

        {/* ── 5. APPLICATION FORM ───────────────────────────────────────────── */}
        <section
          ref={formRef}
          className={sectionGap}
          aria-labelledby="form-heading"
        >
          <div className="text-center mb-10">
            <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-[#374b82]/10 border border-[#374b82]/20 text-[#374b82] text-xs font-bold uppercase tracking-widest mb-4">
              Apply Now
            </div>
            <h2
              id="form-heading"
              className="text-3xl sm:text-4xl font-bold text-[#111827] tracking-tight"
            >
              Submit Your <span className="text-[#374b82]">Application</span>
            </h2>
          </div>

          <div className="bg-white/70 border border-[#374b82]/10 rounded-3xl shadow-[0_20px_60px_rgba(55,75,130,0.12)] p-8 sm:p-10 max-w-[800px] mx-auto">
            {isSuccess ? (
              <div
                className="flex flex-col items-center justify-center py-14 text-center"
                role="status"
                aria-live="polite"
              >
                <div className="w-20 h-20 rounded-full bg-green-100 flex items-center justify-center mb-6 shadow-md">
                  <CheckCircle
                    size={40}
                    className="text-green-500"
                    aria-hidden="true"
                  />
                </div>
                <h3 className="text-2xl font-bold text-[#111827] mb-3">
                  Application Received!
                </h3>
                <p className="text-base text-[#4b5563] mb-2">
                  Thank you! Your application has been received.
                </p>
                <p className="text-sm text-gray-400 mb-8">
                  Our team will review your application and get back to you
                  soon.
                </p>
                <button
                  type="button"
                  onClick={handleReset}
                  className="inline-flex items-center gap-2 px-7 py-3 bg-[#374b82] text-white font-semibold rounded-xl hover:bg-[#2f3f70] transition-all active:scale-95 text-sm"
                >
                  Submit Another Application
                </button>
              </div>
            ) : (
              <>
                {errorMessage && (
                  <div
                    role="alert"
                    aria-live="assertive"
                    className="flex items-center gap-3 mb-6 px-4 py-3 rounded-xl bg-red-50 border border-red-200 text-red-700 text-sm"
                  >
                    <AlertCircle
                      size={18}
                      className="flex-shrink-0"
                      aria-hidden="true"
                    />
                    {errorMessage}
                  </div>
                )}

                <form onSubmit={handleSubmit} noValidate>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-5 mb-5">
                    <div>
                      <label htmlFor="fullName" className={labelBase}>
                        Full Name <span className="text-red-400">*</span>
                      </label>
                      <input
                        id="fullName"
                        name="fullName"
                        type="text"
                        autoComplete="name"
                        placeholder="John Smith"
                        value={formValues.fullName}
                        onChange={handleChange}
                        required
                        className={inputBase}
                      />
                    </div>
                    <div>
                      <label htmlFor="email" className={labelBase}>
                        Email Address <span className="text-red-400">*</span>
                      </label>
                      <input
                        id="email"
                        name="email"
                        type="email"
                        autoComplete="email"
                        placeholder="john@email.com"
                        value={formValues.email}
                        onChange={handleChange}
                        required
                        className={inputBase}
                      />
                    </div>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-5 mb-5">
                    <div>
                      <label htmlFor="phone" className={labelBase}>
                        Phone Number <span className="text-red-400">*</span>
                      </label>
                      <input
                        id="phone"
                        name="phone"
                        type="tel"
                        autoComplete="tel"
                        placeholder="+91 86605 91722
"
                        value={formValues.phone}
                        onChange={handleChange}
                        required
                        className={inputBase}
                      />
                    </div>
                    <div>
                      <label htmlFor="role" className={labelBase}>
                        Applying For <span className="text-red-400">*</span>
                      </label>
                      <select
                        id="role"
                        name="role"
                        value={formValues.role}
                        onChange={handleChange}
                        required
                        className={`${inputBase} cursor-pointer`}
                      >
                        <option value="" disabled>
                          Select a role
                        </option>
                        {roleOptions.map((opt) => (
                          <option key={opt} value={opt}>
                            {opt}
                          </option>
                        ))}
                      </select>
                    </div>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-5 mb-5">
                    <div>
                      <label htmlFor="experience" className={labelBase}>
                        Experience Level <span className="text-red-400">*</span>
                      </label>
                      <select
                        id="experience"
                        name="experience"
                        value={formValues.experience}
                        onChange={handleChange}
                        required
                        className={`${inputBase} cursor-pointer`}
                      >
                        <option value="" disabled>
                          Select experience
                        </option>
                        {experienceOptions.map((opt) => (
                          <option key={opt} value={opt}>
                            {opt}
                          </option>
                        ))}
                      </select>
                    </div>
                    <div>
                      <label htmlFor="portfolio" className={labelBase}>
                        Portfolio / LinkedIn URL
                        <span className="text-gray-400 font-normal text-xs ml-1">
                          (optional)
                        </span>
                      </label>
                      <input
                        id="portfolio"
                        name="portfolio"
                        type="url"
                        placeholder="https://linkedin.com/in/yourname"
                        value={formValues.portfolio}
                        onChange={handleChange}
                        className={inputBase}
                      />
                    </div>
                  </div>

                  <div className="mb-7">
                    <label htmlFor="message" className={labelBase}>
                      Message <span className="text-red-400">*</span>
                    </label>
                    <textarea
                      id="message"
                      name="message"
                      rows={5}
                      placeholder="Tell us about yourself, your skills, and why you want to join SkillSprint Technologies..."
                      value={formValues.message}
                      onChange={handleChange}
                      required
                      className={`${inputBase} resize-none`}
                    />
                  </div>

                  <button
                    type="submit"
                    disabled={isSubmitting}
                    aria-busy={isSubmitting}
                    className="w-full inline-flex items-center justify-center gap-3 px-8 py-4 bg-[#374b82] text-white font-semibold rounded-xl shadow-[0_16px_40px_rgba(55,75,130,0.28)] hover:bg-[#2f3f70] transition-all active:scale-95 disabled:opacity-70 disabled:cursor-not-allowed"
                  >
                    <Send size={18} aria-hidden="true" />
                    {isSubmitting ? "Submitting..." : "Submit Application"}
                  </button>

                  <p className="mt-4 text-center text-xs text-gray-400">
                    We review all applications and respond within 3–5 business
                    days.
                  </p>
                </form>
              </>
            )}
          </div>
        </section>

        {/* ── 6. FINAL CTA ──────────────────────────────────────────────────── */}
        <section aria-labelledby="final-cta-heading">
          <div className="relative overflow-hidden rounded-[2rem] bg-[#374b82] px-8 sm:px-12 py-14 text-center shadow-[0_30px_90px_rgba(55,75,130,0.28)]">
            <div
              className="absolute inset-0 pointer-events-none"
              aria-hidden="true"
            >
              <div className="absolute -right-16 -top-16 w-64 h-64 rounded-full border border-white/10" />
              <div className="absolute -left-10 -bottom-10 w-48 h-48 rounded-full border border-white/10" />
              <div
                className="absolute inset-0 opacity-[0.07]"
                style={{
                  backgroundImage: `radial-gradient(#ffffff 1px, transparent 1px)`,
                  backgroundSize: "22px 22px",
                }}
              />
            </div>

            <div className="relative z-10 max-w-xl mx-auto">
              <h2
                id="final-cta-heading"
                className="text-3xl sm:text-4xl font-bold text-white tracking-tight leading-tight mb-4"
              >
                Ready to build your career with SkillSprint?
              </h2>
              <p className="text-base text-white/80 leading-relaxed mb-8">
                Submit your application and take the first step toward working
                on real-world projects.
              </p>
              <button
                type="button"
                onClick={() => scrollToForm()}
                className="inline-flex items-center gap-2 px-8 py-4 bg-white text-[#374b82] font-semibold rounded-xl shadow-lg hover:bg-gray-50 transition-all active:scale-95"
                aria-label="Scroll to application form"
              >
                Apply Now
                <ArrowRight size={18} aria-hidden="true" />
              </button>
            </div>
          </div>
        </section>
      </div>
    </main>
  );
};

export default Careers;
