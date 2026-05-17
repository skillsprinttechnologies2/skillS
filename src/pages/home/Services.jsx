// import React from "react";
// import { Link } from "react-router-dom";
// import {
//   TrendingUp,
//   Layout,
//   BookOpen,
//   MessageSquare,
//   PenTool,
//   Code,
//   ArrowRight,
// } from "react-feather";

// const services = [
//   {
//     id: "01",
//     title: "Digital Marketing",
//     description:
//       "We craft data-driven marketing strategies to boost your brand visibility and engagement across all digital channels.",
//     icon: <TrendingUp size={24} />,
//     tags: ["SEO", "PPC", "Social Media"],
//     featured: false,
//   },
//   {
//     id: "02",
//     title: "Web Development",
//     description:
//       "Responsive, high-performance websites designed for modern user experiences, extreme speed, and effortless scalability.",
//     icon: <Layout size={24} />,
//     tags: ["React", "Next.js", "Responsive"],
//     featured: true,
//   },
//   {
//     id: "03",
//     title: "Software Training & Placement",
//     description:
//       "Hands-on training programs with placement support to prepare candidates for real-world enterprise roles.",
//     icon: <BookOpen size={24} />,
//     tags: ["Certification", "Mentorship", "Jobs"],
//     featured: false,
//   },
//   {
//     id: "04",
//     title: "Chatbot & Automation",
//     description:
//       "Smart chatbot systems and automated workflows that improve operational efficiency and customer interaction.",
//     icon: <MessageSquare size={24} />,
//     tags: ["AI", "Workflows", "24/7 Support"],
//     featured: false,
//   },
//   {
//     id: "05",
//     title: "Graphic Design Services",
//     description:
//       "Creative brand visuals, UI designs, presentations, and marketing assets tailored specifically to your identity.",
//     icon: <PenTool size={24} />,
//     tags: ["UI/UX", "Branding", "Assets"],
//     featured: false,
//   },
//   {
//     id: "06",
//     title: "Software Development",
//     description:
//       "Custom software solutions built with scalable architecture and agile development practices for enterprise needs.",
//     icon: <Code size={24} />,
//     tags: ["Custom SaaS", "API", "Scalable"],
//     featured: false,
//   },
// ];

// const ServicesSection = () => {
//   return (
//     <section
//       className="relative w-full py-24 lg:py-32 overflow-hidden"
//       style={{
//         background:
//           "linear-gradient(135deg, #ffffff 0%, #f6f8ff 45%, #eef3ff 100%)",
//       }}
//     >
//       {/* --- PREMIUM BACKGROUND VISUALS --- */}
//       <div className="absolute inset-0 pointer-events-none overflow-hidden">
//         {/* Soft Blue Radial Glows */}
//         <div className="absolute top-[-10%] left-[-5%] w-[500px] h-[500px] rounded-full bg-[#374b82]/5 blur-[120px]" />
//         <div className="absolute bottom-[-10%] right-[-5%] w-[600px] h-[600px] rounded-full bg-[#374b82]/10 blur-[150px]" />

//         {/* Subtle Dotted Pattern */}
//         <div
//           className="absolute inset-0 opacity-[0.15]"
//           style={{
//             backgroundImage: `radial-gradient(#374b82 1px, transparent 1px)`,
//             backgroundSize: "32px 32px",
//           }}
//         />

//         {/* Floating Glass Shapes */}
//         <div
//           className="absolute top-1/4 right-10 w-64 h-64 bg-white/30 backdrop-blur-3xl rounded-full border border-white/50 shadow-xl animate-pulse"
//           style={{ animationDuration: "8s" }}
//         />
//         <div
//           className="absolute bottom-1/4 left-10 w-40 h-40 bg-white/20 backdrop-blur-2xl rounded-full border border-white/40 shadow-lg animate-bounce"
//           style={{ animationDuration: "12s" }}
//         />
//       </div>

//       {/* --- MAIN CONTENT --- */}
//       <div className="relative z-10 max-w-7xl mx-auto px-6 sm:px-10 lg:px-16">
//         {/* Section Header */}
//         <div className="text-center max-w-3xl mx-auto mb-20 space-y-4">
//           <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#374b82]/10 border border-[#374b82]/20 text-[#374b82] text-xs font-bold uppercase tracking-widest">
//             Our Expertise
//           </div>
//           <h2 className="text-4xl md:text-5xl font-bold text-[#111827] tracking-tight">
//             Services Built For{" "}
//             <span className="text-[#374b82]">Business Growth</span>
//           </h2>
//           <p className="text-lg text-gray-600 leading-relaxed">
//             Explore digital solutions designed to improve visibility, automate
//             workflows, build scalable platforms, and accelerate growth.
//           </p>
//         </div>

//         {/* Services Grid */}
//         <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 lg:gap-10">
//           {services.map((service) => (
//             <div
//               key={service.id}
//               className={`
//                 group relative p-8 rounded-3xl transition-all duration-500 ease-out
//                 backdrop-blur-xl border
//                 ${
//                   service.featured
//                     ? "bg-white/80 border-[#374b82]/40 shadow-[0_20px_60px_rgba(55,75,130,0.15)] ring-1 ring-[#374b82]/20"
//                     : "bg-white/65 border-[#374b82]/10 shadow-[0_20px_60px_rgba(55,75,130,0.08)] hover:border-[#374b82]/30"
//                 }
//                 hover:-translate-y-3 hover:shadow-[0_30px_80px_rgba(55,75,130,0.15)]
//               `}
//             >
//               {/* Decorative Number */}
//               <div className="absolute top-6 right-8 text-4xl font-bold text-[#374b82]/10 group-hover:text-[#374b82]/20 transition-colors">
//                 {service.id}
//               </div>

//               {/* Icon Container */}
//               <div
//                 className="relative z-10 w-14 h-14 mb-6 flex items-center justify-center rounded-2xl
//                               bg-[#374b82]/10 text-[#374b82] transition-all duration-300
//                               group-hover:bg-[#374b82] group-hover:text-white group-hover:shadow-lg group-hover:shadow-[#374b82]/30"
//               >
//                 {service.icon}
//               </div>

//               {/* Content */}
//               <div className="relative z-10 space-y-3">
//                 <h3 className="text-xl font-bold text-[#172033] group-hover:text-[#374b82] transition-colors">
//                   {service.title}
//                 </h3>
//                 <p className="text-gray-600 text-sm leading-relaxed">
//                   {service.description}
//                 </p>
//               </div>

//               {/* Visual Tags */}
//               <div className="relative z-10 mt-6 flex flex-wrap gap-2">
//                 {service.tags.map((tag) => (
//                   <span
//                     key={tag}
//                     className="text-[10px] font-semibold px-2 py-1 rounded-md bg-white border border-gray-200 text-gray-500 group-hover:border-[#374b82]/20 group-hover:text-[#374b82] transition-all"
//                   >
//                     {tag}
//                   </span>
//                 ))}
//               </div>

//               {/* Enquiry CTA */}
//               <div className="relative z-10 mt-8 flex items-center justify-between">
//                 <Link
//                   to="/contact"
//                   className="flex items-center gap-2 text-sm font-bold text-[#374b82] group/link transition-all"
//                 >
//                   Enquiry
//                   <ArrowRight
//                     size={16}
//                     className="transition-transform duration-300 group-hover/link:translate-x-1"
//                   />
//                 </Link>

//                 {service.featured && (
//                   <span className="text-[10px] font-bold uppercase tracking-tighter px-2 py-1 rounded bg-[#374b82] text-white">
//                     Featured
//                   </span>
//                 )}
//               </div>

//               {/* Hover Gradient Background Effect */}
//               <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none rounded-3xl bg-gradient-to-br from-transparent via-transparent to-[#374b82]/5" />
//             </div>
//           ))}
//         </div>
//       </div>
//     </section>
//   );
// };

// export default ServicesSection;
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
} from "react-feather";

const services = [
  {
    title: "Digital Marketing",
    description:
      "Data-driven marketing strategies to boost brand visibility and engagement across digital channels.",
    icon: <TrendingUp size={24} />,
    tags: ["SEO", "PPC", "Social Media"],
  },
  {
    title: "Web Development",
    description:
      "Responsive, high-performance websites designed for modern user experiences and scalability.",
    icon: <Layout size={24} />,
    tags: ["React", "Responsive", "E-commerce"],
  },
  {
    title: "Software Training & Placement",
    description:
      "Hands-on training programs with placement support to prepare candidates for real-world roles.",
    icon: <BookOpen size={24} />,
    tags: ["Certification", "Mentorship", "Jobs"],
  },
  {
    title: "Chatbot & Automation",
    description:
      "Smart chatbot systems and automated workflows that improve efficiency and customer interaction.",
    icon: <MessageSquare size={24} />,
    tags: ["AI", "Workflows", "24/7 Support"],
  },
  {
    title: "Graphic Design Services",
    description:
      "Creative brand visuals, UI designs, presentations, and marketing assets tailored to your identity.",
    icon: <PenTool size={24} />,
    tags: ["UI/UX", "Branding", "Creatives"],
  },
  {
    title: "Software Development",
    description:
      "Custom software solutions built with scalable architecture and agile development practices.",
    icon: <Code size={24} />,
    tags: ["SaaS", "API", "Scalable"],
  },
];

const ServicesSection = () => {
  return (
    <section
      id="services"
      aria-labelledby="services-heading"
      className="relative w-full overflow-hidden"
      style={{
        background:
          "linear-gradient(135deg, #ffffff 0%, #f6f8ff 45%, #eef3ff 100%)",
      }}
    >
      {/* Background Visuals */}
      <div className="absolute inset-0 pointer-events-none" aria-hidden="true">
        <div className="absolute top-[-10%] left-[-5%] w-[500px] h-[500px] rounded-full bg-[#374b82]/5 blur-[120px]" />
        <div className="absolute bottom-[-10%] right-[-5%] w-[600px] h-[600px] rounded-full bg-[#374b82]/10 blur-[150px]" />
        <div
          className="absolute inset-0 opacity-[0.12]"
          style={{
            backgroundImage: `radial-gradient(#374b82 1px, transparent 1px)`,
            backgroundSize: "32px 32px",
          }}
        />
      </div>

      {/* Main Content */}
      <div className="relative z-10 max-w-[1600px] mx-auto px-5 sm:px-8 lg:px-12 xl:px-16 2xl:px-20 py-16 sm:py-20 lg:py-24">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-12 sm:mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-[#374b82]/10 border border-[#374b82]/20 text-[#374b82] text-xs font-bold uppercase tracking-widest mb-4">
            Our Expertise
          </div>
          <h2
            id="services-heading"
            className="text-3xl sm:text-4xl lg:text-5xl font-bold text-[#111827] tracking-tight leading-tight"
          >
            Services Built For
            <br className="hidden sm:block" />
            <span className="text-[#374b82]"> Business Growth</span>
          </h2>
          <p className="mt-4 sm:mt-6 text-base sm:text-lg text-[#4b5563] leading-relaxed">
            Explore essential digital solutions designed to improve visibility,
            automate workflows, build scalable platforms, and accelerate growth.
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
          {services.map((service) => (
            <article
              key={service.title}
              className="group relative flex flex-col p-6 sm:p-8 rounded-3xl bg-white/65 backdrop-blur-xl border border-[#374b82]/10 shadow-[0_20px_60px_rgba(55,75,130,0.10)] transition-all duration-300 hover:-translate-y-2 hover:border-[#374b82]/30 hover:shadow-[0_30px_80px_rgba(55,75,130,0.16)]"
            >
              {/* Icon */}
              <div className="w-14 h-14 mb-6 flex items-center justify-center rounded-2xl bg-[#374b82]/10 text-[#374b82] transition-colors group-hover:bg-[#374b82] group-hover:text-white">
                {service.icon}
              </div>

              {/* Content */}
              <h3 className="text-lg sm:text-xl font-bold text-[#172033] mb-3 group-hover:text-[#374b82] transition-colors">
                {service.title}
              </h3>
              <p className="text-sm text-[#4b5563] leading-relaxed flex-grow mb-6">
                {service.description}
              </p>

              {/* Tags */}
              <div className="flex flex-wrap gap-2 mb-6">
                {service.tags.map((tag) => (
                  <span
                    key={tag}
                    className="px-3 py-1 text-xs font-medium rounded-lg bg-[#374b82]/5 text-[#374b82] border border-[#374b82]/10"
                  >
                    {tag}
                  </span>
                ))}
              </div>

              {/* Card CTA */}
              <Link
                to="/services"
                className="inline-flex items-center gap-2 mt-auto text-sm font-semibold text-[#374b82] group-hover:gap-3 transition-all"
                aria-label={`Learn more about ${service.title}`}
              >
                Learn More
                <ArrowRight
                  size={16}
                  className="transition-transform group-hover:translate-x-0.5"
                />
              </Link>
            </article>
          ))}
        </div>

        {/* Bottom CTA */}
        <div className="mt-12 sm:mt-16 text-center">
          <Link
            to="/services"
            className="inline-flex items-center justify-center gap-3 px-8 sm:px-10 py-4 sm:py-5 bg-[#374b82] !text-white text-base sm:text-lg font-semibold rounded-2xl shadow-[0_16px_40px_rgba(55,75,130,0.30)] hover:bg-[#2f3f70] transition-all active:scale-95"
            aria-label="View all services"
          >
            View All Services
            <ArrowRight size={20} />
          </Link>
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;
