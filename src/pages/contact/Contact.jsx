import React, { useState } from "react";
import {
  Mail,
  Phone,
  MapPin,
  Clock,
  Send,
  ArrowRight,
  MessageSquare,
  CheckCircle,
  AlertCircle,
} from "react-feather";

// Data arrays defined outside component for performance and cleanliness
const serviceOptions = [
  "Digital Marketing",
  "Web Development",
  "Software Training & Placement",
  "Chatbot & Automation",
  "Graphic Design Services",
  "Software Development",
  "Other",
];

const contactInfo = [
  {
    icon: <Mail size={20} />,
    label: "Email",
    value: "info@skillsprinttechnologies.com",
    href: "mailto:info@skillsprinttechnologies.com",
  },
  {
    icon: <Phone size={20} />,
    label: "Phone",
    value: "+91 98765 43210",
    href: "tel:+919876543210",
  },
  { icon: <MapPin size={20} />, label: "Location", value: "India", href: null },
  {
    icon: <Clock size={20} />,
    label: "Working Hours",
    value: "Mon - Sat, 9:00 AM - 6:00 PM",
    href: null,
  },
];

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    service: "",
    message: "",
  });

  const [status, setStatus] = useState("idle"); // 'idle', 'loading', 'success', 'error'
  const [errorMessage, setErrorMessage] = useState("");

  const handleChange = (e) => {
    const { id, value } = e.target;
    setFormData((prev) => ({ ...prev, [id]: value }));
    if (status === "error") {
      setStatus("idle");
      setErrorMessage("");
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    const name = formData.name.trim();
    const email = formData.email.trim();
    const service = formData.service.trim();
    const message = formData.message.trim();
    const phone = formData.phone.trim();

    if (!name || !email || !service || !message) {
      setStatus("error");
      setErrorMessage("Please fill all required fields.");
      return;
    }

    if (message.length < 10) {
      setStatus("error");
      setErrorMessage("Please enter a message with at least 10 characters.");
      return;
    }

    const lastSubmitTime = localStorage.getItem("lastSubmitTime");

    const now = Date.now();

    if (lastSubmitTime && now - parseInt(lastSubmitTime, 10) < 60000) {
      setStatus("error");
      setErrorMessage("Please wait before sending another message.");
      return;
    }

    try {
      setStatus("loading");
      setErrorMessage("");

      const response = await fetch("/api/contact", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          name,
          email,
          phone,
          service,
          message,
        }),
      });

      const data = await response.json();

      if (!data.success) {
        throw new Error(data.message || "Something went wrong");
      }

      localStorage.setItem("lastSubmitTime", now.toString());

      setFormData({
        name: "",
        email: "",
        phone: "",
        service: "",
        message: "",
      });

      setStatus("success");
    } catch (error) {
      console.error(error);

      setStatus("error");

      setErrorMessage("Failed to send message. Please try again.");
    }
  };

  const handleReset = () => {
    setStatus("idle");
    setErrorMessage("");
  };

  return (
    <main
      aria-labelledby="contact-page-heading"
      className="relative bg-transperent w-full overflow-hidden pt-32 pb-20"
    >
      <div className="relative z-10 max-w-[1600px] mx-auto px-5 sm:px-8 lg:px-12 xl:px-16 2xl:px-20">
        {/* Hero Section */}
        <section className="text-center max-w-4xl mx-auto mb-16 space-y-6">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#374b82]/10 border border-[#374b82]/20 text-[#374b82] text-xs font-bold uppercase tracking-widest">
            CONTACT US
          </div>
          <h1
            id="contact-page-heading"
            className="text-4xl md:text-5xl lg:text-6xl font-bold text-[#111827] tracking-tight"
          >
            Let’s Build Your Next{" "}
            <span className="text-[#374b82]">Digital Solution</span>
          </h1>
          <p className="text-lg text-[#4b5563] leading-relaxed max-w-2xl mx-auto">
            Talk to SkillSprint Technologies about web development, digital
            marketing, software development, chatbot automation, graphic design,
            or training and placement support.
          </p>
        </section>

        {/* Contact Grid Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-[1.15fr_0.85fr] gap-8 lg:gap-12 items-start">
          {/* Left Column: Contact Form */}
          <section className="relative p-8 sm:p-10 rounded-3xl bg-white/65 backdrop-blur-xl border border-[#374b82]/10 shadow-[0_30px_100px_rgba(55,75,130,0.12)]">
            <h2 className="text-2xl font-bold text-[#111827] mb-6 flex items-center gap-3">
              <MessageSquare
                size={24}
                className="text-[#374b82]"
                aria-hidden="true"
              />
              Send us a Message
            </h2>

            {status === "success" ? (
              // Success State
              <div className="flex flex-col items-center justify-center text-center py-12 space-y-6 animate-[fadeIn_0.5s_ease-out]">
                <div className="w-20 h-20 rounded-full bg-green-100 flex items-center justify-center text-green-600 transform scale-100 transition-transform duration-500">
                  <CheckCircle size={40} />
                </div>
                <div className="space-y-2">
                  <h3 className="text-2xl font-bold text-[#111827]">
                    Thank you!
                  </h3>
                  <p className="text-[#4b5563]">We’ll get back to you soon.</p>
                  <p className="text-sm text-gray-500">
                    Our team usually responds within 24 hours.
                  </p>
                </div>
                <button
                  onClick={handleReset}
                  className="mt-4 inline-flex items-center gap-2 px-6 py-3 bg-[#374b82] text-white font-semibold rounded-xl shadow-lg shadow-[#374b82]/20 hover:bg-[#2f3f70] transition-all active:scale-95"
                >
                  Send Another Message
                  <ArrowRight size={18} />
                </button>
              </div>
            ) : (
              // Form State
              <form
                onSubmit={handleSubmit}
                className="space-y-5"
                aria-describedby={status === "error" ? "form-error" : undefined}
              >
                {/* Error Alert */}
                {status === "error" && (
                  <div
                    id="form-error"
                    className="flex items-center gap-3 p-4 rounded-xl bg-red-50 border border-red-100 text-red-600 text-sm"
                    role="alert"
                  >
                    <AlertCircle
                      size={18}
                      className="flex-shrink-0"
                      aria-hidden="true"
                    />
                    {errorMessage}
                  </div>
                )}

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                  <div className="space-y-1.5">
                    <label
                      htmlFor="name"
                      className="text-sm font-semibold text-[#111827]"
                    >
                      Full Name <span className="text-red-500">*</span>
                    </label>
                    <input
                      type="text"
                      id="name"
                      value={formData.name}
                      onChange={handleChange}
                      placeholder="John Doe"
                      className="w-full px-4 py-3 bg-white/80 border border-[#374b82]/15 rounded-xl text-sm focus:border-[#374b82] focus:ring-1 focus:ring-[#374b82] outline-none transition-all"
                      required
                    />
                  </div>
                  <div className="space-y-1.5">
                    <label
                      htmlFor="email"
                      className="text-sm font-semibold text-[#111827]"
                    >
                      Email Address <span className="text-red-500">*</span>
                    </label>
                    <input
                      type="email"
                      id="email"
                      value={formData.email}
                      onChange={handleChange}
                      placeholder="john@example.com"
                      className="w-full px-4 py-3 bg-white/80 border border-[#374b82]/15 rounded-xl text-sm focus:border-[#374b82] focus:ring-1 focus:ring-[#374b82] outline-none transition-all"
                      required
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                  <div className="space-y-1.5">
                    <label
                      htmlFor="phone"
                      className="text-sm font-semibold text-[#111827]"
                    >
                      Phone Number
                    </label>
                    <input
                      type="tel"
                      id="phone"
                      value={formData.phone}
                      onChange={handleChange}
                      placeholder="+91 98765 43210"
                      className="w-full px-4 py-3 bg-white/80 border border-[#374b82]/15 rounded-xl text-sm focus:border-[#374b82] focus:ring-1 focus:ring-[#374b82] outline-none transition-all"
                    />
                  </div>
                  <div className="space-y-1.5">
                    <label
                      htmlFor="service"
                      className="text-sm font-semibold text-[#111827]"
                    >
                      Service Interested In{" "}
                      <span className="text-red-500">*</span>
                    </label>
                    <select
                      id="service"
                      value={formData.service}
                      onChange={handleChange}
                      className="w-full px-4 py-3 bg-white/80 border border-[#374b82]/15 rounded-xl text-sm focus:border-[#374b82] focus:ring-1 focus:ring-[#374b82] outline-none transition-all appearance-none"
                      required
                    >
                      <option value="" disabled>
                        Select a service
                      </option>
                      {serviceOptions.map((option) => (
                        <option key={option} value={option}>
                          {option}
                        </option>
                      ))}
                    </select>
                  </div>
                </div>

                <div className="space-y-1.5">
                  <label
                    htmlFor="message"
                    className="text-sm font-semibold text-[#111827]"
                  >
                    Message <span className="text-red-500">*</span>
                  </label>
                  <textarea
                    id="message"
                    rows="5"
                    value={formData.message}
                    onChange={handleChange}
                    placeholder="Tell us about your project..."
                    className="w-full px-4 py-3 bg-white/80 border border-[#374b82]/15 rounded-xl text-sm focus:border-[#374b82] focus:ring-1 focus:ring-[#374b82] outline-none transition-all resize-none"
                    required
                  />
                </div>

                <div className="pt-2">
                  <button
                    type="submit"
                    disabled={status === "loading"}
                    className="w-full flex items-center justify-center gap-2 px-6 py-3.5 bg-[#374b82] text-white font-semibold rounded-xl shadow-lg shadow-[#374b82]/20 hover:bg-[#2f3f70] transition-all disabled:opacity-70 disabled:cursor-not-allowed active:scale-[0.98]"
                  >
                    {status === "loading" ? "Sending..." : "Send Message"}
                    {status !== "loading" && <Send size={18} />}
                  </button>
                  <p className="text-center text-xs text-gray-500 mt-3">
                    We’ll get back to you shortly.{" "}
                  </p>
                </div>
              </form>
            )}
          </section>

          {/* Right Column: Map & Contact Info */}
          <div className="space-y-8">
            {/* Map Card */}
            <section className="relative w-full h-64 sm:h-80 rounded-3xl overflow-hidden border border-[#374b82]/10 shadow-[0_20px_60px_rgba(55,75,130,0.10)] bg-white/65 backdrop-blur-xl">
              <iframe
                src="https://www.google.com/maps?q=Tumakuru,Karnataka&z=15&output=embed"
                width="100%"
                height="100%"
                style={{ border: 0 }}
                allowFullScreen=""
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                title="SkillSprint Technologies location map"
                className="absolute inset-0"
              ></iframe>
            </section>

            {/* Contact Info Grid */}
            <section
              aria-label="SkillSprint Technologies contact information"
              className="
    grid
    grid-cols-1
    sm:grid-cols-2
    gap-4
    w-full
  "
            >
              {contactInfo.map((info) => (
                <article
                  key={info.label}
                  className="
        group
        min-w-0
        h-full
        flex
        items-start
        gap-4
        p-5
        rounded-2xl
        bg-white/70
        backdrop-blur-xl
        border
        border-[#374b82]/10
        shadow-[0_10px_35px_rgba(55,75,130,0.08)]
        transition-colors
        hover:border-[#374b82]/25
      "
                >
                  <div
                    className="
          w-11
          h-11
          flex-shrink-0
          rounded-xl
          bg-[#374b82]/10
          text-[#374b82]
          flex
          items-center
          justify-center
          transition-colors
          group-hover:bg-[#374b82]
          group-hover:text-white
        "
                    aria-hidden="true"
                  >
                    {info.icon}
                  </div>

                  <div className="min-w-0 flex-1">
                    <p
                      className="
            mb-1
            text-xs
            font-semibold
            text-gray-500
            uppercase
            tracking-wider
          "
                    >
                      {info.label}
                    </p>

                    {info.href ? (
                      <a
                        href={info.href}
                        className="
              block
              max-w-full
              text-sm
              sm:text-[15px]
              font-semibold
              text-[#111827]
              hover:text-[#374b82]
              transition-colors
              break-words
              leading-relaxed
            "
                        aria-label={`Contact SkillSprint Technologies via ${info.label}`}
                      >
                        {info.value}
                      </a>
                    ) : (
                      <p
                        className="
              max-w-full
              text-sm
              sm:text-[15px]
              font-semibold
              text-[#111827]
              break-words
              leading-relaxed
            "
                      >
                        {info.value}
                      </p>
                    )}
                  </div>
                </article>
              ))}
            </section>
          </div>
        </div>
      </div>
    </main>
  );
};

export default Contact;
