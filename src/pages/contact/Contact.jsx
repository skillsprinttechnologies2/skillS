import React, { useState } from "react";
import { Mail, Phone, MapPin, Clock, Send, ArrowRight, MessageSquare, CheckCircle, AlertCircle } from "react-feather";

const roleOptions = ["Founder / Owner", "CEO / MD", "CTO / CIO", "IT Head", "Operations Head", "Finance Head", "Other"];
const interestOptions = [
  "BI / Power BI Dashboards", "Data Analytics", "AI & Predictive Analytics", "Data Engineering",
  "Cloud Data Solutions", "Business Process Automation", "Data Security & Governance",
  "Performance Monitoring", "Cost Optimization", "Not sure — I need consultation",
];
const initialForm = { fullName: "", companyName: "", role: "", email: "", phone: "", location: "", interests: [], requirement: "", website: "" };
const fieldClass = "w-full px-4 py-3 bg-white/80 border border-[#374b82]/15 rounded-xl text-sm focus:border-[#374b82] focus:ring-1 focus:ring-[#374b82] outline-none transition-all";
const labelClass = "text-sm font-semibold text-[#111827]";

const contactInfo = [
  { icon: <Mail size={20} />, label: "Company Email", value: "skillsprinttechnologies@gmail.com", href: "mailto:skillsprinttechnologies@gmail.com" },
  { icon: <Phone size={20} />, label: "Company Phone", value: "+91 86605 91722", href: "tel:+918660591722" },
  { icon: <MapPin size={20} />, label: "Location", value: "India" },
  { icon: <Clock size={20} />, label: "Working Hours", value: "Mon - Sat, 9:00 AM - 6:00 PM" },
];

const Required = () => <span className="text-red-500" aria-hidden="true">*</span>;

export default function Contact() {
  const [formData, setFormData] = useState(initialForm);
  const [status, setStatus] = useState("idle");
  const [errorMessage, setErrorMessage] = useState("");

  const clearError = () => {
    if (status === "error") { setStatus("idle"); setErrorMessage(""); }
  };
  const handleChange = ({ target: { name, value } }) => {
    setFormData((current) => ({ ...current, [name]: value }));
    clearError();
  };
  const toggleInterest = ({ target: { value, checked } }) => {
    setFormData((current) => ({ ...current, interests: checked ? [...current.interests, value] : current.interests.filter((item) => item !== value) }));
    clearError();
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    if (status === "loading") return;
    const payload = {
      ...formData,
      fullName: formData.fullName.trim(), companyName: formData.companyName.trim(), role: formData.role.trim(),
      email: formData.email.trim().toLowerCase(), phone: formData.phone.trim(), location: formData.location.trim(),
      requirement: formData.requirement.trim(), website: formData.website.trim(),
    };
    if (!payload.fullName || !payload.companyName || !payload.email || !payload.phone || !payload.requirement || payload.interests.length === 0) {
      setStatus("error"); setErrorMessage("Please complete all required fields and select at least one area of interest."); return;
    }
    if (!/^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/.test(payload.email)) {
      setStatus("error"); setErrorMessage("Please enter a valid business email address."); return;
    }
    const digits = payload.phone.replace(/\D/g, "");
    if (!/^\+?[\d\s().-]+$/.test(payload.phone) || digits.length < 7 || digits.length > 15) {
      setStatus("error"); setErrorMessage("Please enter a valid mobile or WhatsApp number."); return;
    }
    if (payload.requirement.length < 10) {
      setStatus("error"); setErrorMessage("Please describe your requirement in at least 10 characters."); return;
    }
    const lastSubmit = Number(localStorage.getItem("contactLastSubmit") || 0);
    if (Date.now() - lastSubmit < 60_000) {
      setStatus("error"); setErrorMessage("Please wait before sending another enquiry."); return;
    }
    try {
      setStatus("loading"); setErrorMessage("");
      const response = await fetch("/api/contact", { method: "POST", headers: { "Content-Type": "application/json" }, body: JSON.stringify(payload) });
      const data = await response.json().catch(() => ({}));
      if (!response.ok || !data.success) {
        const message = response.status === 429
          ? "Too many enquiries have been submitted. Please wait a few minutes and try again."
          : response.status === 400
            ? "Please check the form details and try again."
            : "We couldn't send your enquiry right now. Please try again shortly.";
        throw new Error(message);
      }
      localStorage.setItem("contactLastSubmit", String(Date.now()));
      setFormData(initialForm); setStatus("success");
    } catch (error) {
      setStatus("error"); setErrorMessage(error.message || "We couldn't send your enquiry right now. Please try again shortly.");
    }
  };

  return (
    <main aria-labelledby="contact-page-heading" className="relative bg-transparent w-full overflow-hidden pt-32 pb-20">
      <div className="relative z-10 max-w-[1600px] mx-auto px-5 sm:px-8 lg:px-12 xl:px-16 2xl:px-20">
        <section className="text-center max-w-4xl mx-auto mb-16 space-y-6">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#374b82]/10 border border-[#374b82]/20 text-[#374b82] text-xs font-bold uppercase tracking-widest">CONTACT US</div>
          <h1 id="contact-page-heading" className="text-4xl md:text-5xl lg:text-6xl font-bold text-[#111827] tracking-tight">Let’s Build Your Next <span className="text-[#374b82]">Digital Solution</span></h1>
          <p className="text-lg text-[#4b5563] leading-relaxed max-w-2xl mx-auto">Tell us about your data, analytics, automation, or cloud requirements and our team will help you identify the right solution.</p>
        </section>

        <div className="grid grid-cols-1 lg:grid-cols-[1.15fr_0.85fr] gap-8 lg:gap-12 items-start">
          <section className="relative p-6 sm:p-10 rounded-3xl bg-white/65 backdrop-blur-xl border border-[#374b82]/10 shadow-[0_30px_100px_rgba(55,75,130,0.12)]">
            <h2 className="text-2xl font-bold text-[#111827] mb-6 flex items-center gap-3"><MessageSquare size={24} className="text-[#374b82]" aria-hidden="true" />Send us an Enquiry</h2>
            {status === "success" ? (
              <div className="flex flex-col items-center justify-center text-center py-12 space-y-6" role="status">
                <div className="w-20 h-20 rounded-full bg-green-100 flex items-center justify-center text-green-600"><CheckCircle size={40} aria-hidden="true" /></div>
                <div><h3 className="text-2xl font-bold text-[#111827]">Thank you!</h3><p className="text-[#4b5563] mt-2">Your enquiry has been sent. We’ll get back to you soon.</p></div>
                <button type="button" onClick={() => { setStatus("idle"); setErrorMessage(""); }} className="inline-flex items-center gap-2 px-6 py-3 bg-[#374b82] text-white font-semibold rounded-xl hover:bg-[#2f3f70] transition-all">Send Another Enquiry <ArrowRight size={18} /></button>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-6" aria-describedby={status === "error" ? "form-error" : undefined} noValidate>
                {status === "error" && <div id="form-error" className="flex items-start gap-3 p-4 rounded-xl bg-red-50 border border-red-100 text-red-700 text-sm" role="alert"><AlertCircle size={18} className="flex-shrink-0 mt-0.5" aria-hidden="true" />{errorMessage}</div>}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                  <div className="space-y-1.5"><label htmlFor="fullName" className={labelClass}>Full Name <Required /></label><input className={fieldClass} id="fullName" name="fullName" value={formData.fullName} onChange={handleChange} maxLength={100} autoComplete="name" required /></div>
                  <div className="space-y-1.5"><label htmlFor="companyName" className={labelClass}>Company Name <Required /></label><input className={fieldClass} id="companyName" name="companyName" value={formData.companyName} onChange={handleChange} maxLength={120} autoComplete="organization" required /></div>
                  <div className="space-y-1.5"><label htmlFor="role" className={labelClass}>Designation / Role</label><select className={`${fieldClass} appearance-none`} id="role" name="role" value={formData.role} onChange={handleChange}><option value="">Select your role</option>{roleOptions.map((option) => <option key={option}>{option}</option>)}</select></div>
                  <div className="space-y-1.5"><label htmlFor="email" className={labelClass}>Business Email <Required /></label><input className={fieldClass} type="email" id="email" name="email" value={formData.email} onChange={handleChange} maxLength={254} autoComplete="email" inputMode="email" required /></div>
                  <div className="space-y-1.5"><label htmlFor="phone" className={labelClass}>Mobile Number / WhatsApp Number <Required /></label><input className={fieldClass} type="tel" id="phone" name="phone" value={formData.phone} onChange={handleChange} maxLength={24} autoComplete="tel" inputMode="tel" placeholder="+91 86605 91722" required /></div>
                  <div className="space-y-1.5"><label htmlFor="location" className={labelClass}>City / Location</label><input className={fieldClass} id="location" name="location" value={formData.location} onChange={handleChange} maxLength={120} autoComplete="address-level2" /></div>
                </div>

                <fieldset><legend className={`${labelClass} mb-3`}>What are you interested in? <Required /></legend><div className="grid grid-cols-1 sm:grid-cols-2 gap-3">{interestOptions.map((option) => <label key={option} className="flex items-start gap-3 p-3 rounded-xl bg-white/70 border border-[#374b82]/10 text-sm text-[#374151] cursor-pointer hover:border-[#374b82]/25"><input type="checkbox" name="interests" value={option} checked={formData.interests.includes(option)} onChange={toggleInterest} className="mt-0.5 h-4 w-4 accent-[#374b82]" /> <span>{option}</span></label>)}</div></fieldset>

                <div className="space-y-1.5"><label htmlFor="requirement" className={labelClass}>Tell us about your business requirement <Required /></label><textarea className={`${fieldClass} min-h-44 resize-y`} id="requirement" name="requirement" value={formData.requirement} onChange={handleChange} maxLength={3000} rows={7} placeholder="Example: We currently prepare our sales and operations reports manually in Excel and are looking for a real-time dashboard." required /></div>

                <div className="absolute -left-[10000px] top-auto w-px h-px overflow-hidden" aria-hidden="true"><label htmlFor="website">Website</label><input id="website" name="website" value={formData.website} onChange={handleChange} tabIndex={-1} autoComplete="off" maxLength={200} /></div>
                <button type="submit" disabled={status === "loading"} className="w-full flex items-center justify-center gap-2 px-6 py-3.5 bg-[#374b82] text-white font-semibold rounded-xl shadow-lg shadow-[#374b82]/20 hover:bg-[#2f3f70] transition-all disabled:opacity-70 disabled:cursor-not-allowed active:scale-[0.98]">{status === "loading" ? "Sending..." : "Send Enquiry"}{status !== "loading" && <Send size={18} aria-hidden="true" />}</button>
              </form>
            )}
          </section>

          <div className="space-y-8">
            <section className="relative w-full h-64 sm:h-80 rounded-3xl overflow-hidden border border-[#374b82]/10 shadow-[0_20px_60px_rgba(55,75,130,0.10)] bg-white/65 backdrop-blur-xl"><iframe src="https://www.google.com/maps?q=Tumakuru,Karnataka&z=15&output=embed" width="100%" height="100%" style={{ border: 0 }} allowFullScreen loading="lazy" referrerPolicy="no-referrer-when-downgrade" title="SkillSprint Technologies location map" className="absolute inset-0" /></section>
            <section aria-label="SkillSprint Technologies contact information" className="grid grid-cols-1 sm:grid-cols-2 gap-4 w-full">{contactInfo.map((info) => <article key={info.label} className="group min-w-0 h-full flex items-start gap-4 p-5 rounded-2xl bg-white/70 backdrop-blur-xl border border-[#374b82]/10 shadow-[0_10px_35px_rgba(55,75,130,0.08)] hover:border-[#374b82]/25"><div className="w-11 h-11 flex-shrink-0 rounded-xl bg-[#374b82]/10 text-[#374b82] flex items-center justify-center group-hover:bg-[#374b82] group-hover:text-white transition-colors" aria-hidden="true">{info.icon}</div><div className="min-w-0"><p className="mb-1 text-xs font-semibold text-gray-500 uppercase tracking-wider">{info.label}</p>{info.href ? <a href={info.href} className="block text-sm font-semibold text-[#111827] hover:text-[#374b82] break-words">{info.value}</a> : <p className="text-sm font-semibold text-[#111827] break-words">{info.value}</p>}</div></article>)}</section>
          </div>
        </div>
      </div>
    </main>
  );
}
