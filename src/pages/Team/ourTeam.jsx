// import React from "react";
// import { Link } from "react-router-dom";
// import {
//   Linkedin,
//   ArrowRight,
//   Users,
//   Zap,
//   Target,
//   Heart,
//   BookOpen,
//   Layers,
// } from "react-feather";

// // ─── Data ─────────────────────────────────────────────────────────────────────

// const missionCards = [
//   {
//     icon: <BookOpen size={22} aria-hidden="true" />,
//     title: "Built for Learning",
//     description:
//       "We create digital solutions that help students and professionals grow.",
//   },
//   {
//     icon: <Zap size={22} aria-hidden="true" />,
//     title: "Driven by Innovation",
//     description: "We combine technology, creativity, and practical skills.",
//   },
//   {
//     icon: <Target size={22} aria-hidden="true" />,
//     title: "Focused on Careers",
//     description: "We work with a mission to empower future-ready talent.",
//   },
// ];

// const leadership = [
//   {
//     name: "Ravi Kumar",
//     role: "Founder & CEO",
//     description:
//       "Visionary leader driving SkillSprint's growth and strategic direction.",
//     image: "/team/ravi-kumar.jpg",
//     linkedin: "https://linkedin.com",
//   },
//   {
//     name: "Priya Sharma",
//     role: "Technical Lead",
//     description: "Oversees all development projects and engineering standards.",
//     image: "/team/priya-sharma.jpg",
//     linkedin: "https://linkedin.com",
//   },
//   {
//     name: "Arjun Nair",
//     role: "Training Lead",
//     description:
//       "Designs curriculum and leads all training and placement programs.",
//     image: "/team/arjun-nair.jpg",
//     linkedin: "https://linkedin.com",
//   },
//   {
//     name: "Sneha Patel",
//     role: "Marketing Lead",
//     description:
//       "Drives brand awareness, content strategy, and client acquisition.",
//     image: "/team/sneha-patel.jpg",
//     linkedin: "https://linkedin.com",
//   },
// ];

// const coreTeam = [
//   {
//     name: "Karan Mehta",
//     role: "Frontend Developer",
//     department: "Development Team",
//     image: "/team/karan-mehta.jpg",
//     linkedin: "https://linkedin.com",
//   },
//   {
//     name: "Divya Reddy",
//     role: "Full Stack Developer",
//     department: "Development Team",
//     image: "/team/divya-reddy.jpg",
//     linkedin: "https://linkedin.com",
//   },
//   {
//     name: "Rohit Singh",
//     role: "Backend Developer",
//     department: "Development Team",
//     image: "/team/rohit-singh.jpg",
//     linkedin: "https://linkedin.com",
//   },
//   {
//     name: "Ananya Iyer",
//     role: "UI/UX Designer",
//     department: "Design Team",
//     image: "/team/ananya-iyer.jpg",
//     linkedin: "https://linkedin.com",
//   },
//   {
//     name: "Siddharth Rao",
//     role: "Graphic Designer",
//     department: "Design Team",
//     image: "/team/siddharth-rao.jpg",
//     linkedin: "https://linkedin.com",
//   },
//   {
//     name: "Meera Joshi",
//     role: "Training Coordinator",
//     department: "Training Team",
//     image: "/team/meera-joshi.jpg",
//     linkedin: "https://linkedin.com",
//   },
//   {
//     name: "Aditya Verma",
//     role: "Training Mentor",
//     department: "Training Team",
//     image: "/team/aditya-verma.jpg",
//     linkedin: "https://linkedin.com",
//   },
//   {
//     name: "Pooja Das",
//     role: "Digital Marketing Specialist",
//     department: "Marketing Team",
//     image: "/team/pooja-das.jpg",
//     linkedin: "https://linkedin.com",
//   },
//   {
//     name: "Nikhil Bose",
//     role: "SEO & Content Strategist",
//     department: "Marketing Team",
//     image: "/team/nikhil-bose.jpg",
//     linkedin: "https://linkedin.com",
//   },
// ];

// const teamValues = [
//   {
//     icon: <Users size={22} aria-hidden="true" />,
//     title: "Collaboration",
//     description: "We believe strong teams build stronger products.",
//   },
//   {
//     icon: <BookOpen size={22} aria-hidden="true" />,
//     title: "Continuous Learning",
//     description: "We keep improving through practice and real projects.",
//   },
//   {
//     icon: <Zap size={22} aria-hidden="true" />,
//     title: "Creativity",
//     description: "We solve problems with fresh ideas and clean execution.",
//   },
//   {
//     icon: <Heart size={22} aria-hidden="true" />,
//     title: "Responsibility",
//     description: "We deliver work with ownership and professionalism.",
//   },
// ];

// // Department order for core team display
// const departments = [
//   "Development Team",
//   "Design Team",
//   "Training Team",
//   "Marketing Team",
// ];

// // ─── Avatar Fallback ──────────────────────────────────────────────────────────

// const TeamAvatar = ({ src, alt, size = "h-48" }) => {
//   const [imgError, setImgError] = React.useState(false);
//   const initials = alt
//     .split(" ")
//     .slice(0, 2)
//     .map((w) => w[0])
//     .join("")
//     .toUpperCase();

//   if (imgError || !src) {
//     return (
//       <div
//         className={`w-full ${size} flex items-center justify-center rounded-2xl bg-gradient-to-br from-[#374b82]/15 to-[#374b82]/5 border border-[#374b82]/10`}
//         aria-label={alt}
//       >
//         <span className="text-3xl font-bold text-[#374b82]/60 select-none">
//           {initials}
//         </span>
//       </div>
//     );
//   }

//   return (
//     <img
//       src={src}
//       alt={alt}
//       className={`w-full ${size} object-cover rounded-2xl`}
//       onError={() => setImgError(true)}
//     />
//   );
// };

// // ─── Component ────────────────────────────────────────────────────────────────

// const OurTeam = () => {
//   const sectionGap = "py-16 sm:py-20";

//   return (
//     <main
//       className="relative w-full overflow-hidden"
//       aria-labelledby="team-heading"
//       style={{
//         background:
//           "linear-gradient(135deg, #ffffff 0%, #f6f8ff 45%, #eef3ff 100%)",
//       }}
//     >
//       {/* Background */}
//       <div className="fixed inset-0 pointer-events-none" aria-hidden="true">
//         <div className="absolute top-0 left-[-5%] w-[420px] h-[420px] rounded-full bg-[#374b82]/5 blur-[90px]" />
//         <div className="absolute bottom-0 right-[-5%] w-[500px] h-[500px] rounded-full bg-[#374b82]/8 blur-[100px]" />
//         <div
//           className="absolute inset-0 opacity-[0.09]"
//           style={{
//             backgroundImage: `radial-gradient(#374b82 1px, transparent 1px)`,
//             backgroundSize: "30px 30px",
//           }}
//         />
//       </div>

//       <div className="relative z-10 max-w-[1100px] mx-auto px-5 sm:px-8 lg:px-12 pt-32 pb-20">
//         {/* ── 1. HERO ──────────────────────────────────────────────────────── */}
//         <section
//           className="text-center mb-16 sm:mb-20"
//           aria-labelledby="team-heading"
//         >
//           <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-[#374b82]/10 border border-[#374b82]/20 text-[#374b82] text-xs font-bold uppercase tracking-widest mb-5">
//             Our Team
//           </div>
//           <h1
//             id="team-heading"
//             className="text-4xl sm:text-5xl lg:text-6xl font-bold text-[#111827] tracking-tight leading-tight mb-5"
//           >
//             Meet the People Behind{" "}
//             <span className="text-[#374b82]">SkillSprint</span>
//           </h1>
//           <p className="text-base sm:text-lg text-[#4b5563] leading-relaxed max-w-2xl mx-auto">
//             Our team brings together developers, designers, trainers, and
//             digital experts working to build career-focused technology
//             solutions.
//           </p>
//         </section>

//         {/* ── 2. MISSION STRIP ─────────────────────────────────────────────── */}
//         <section className={sectionGap} aria-labelledby="mission-heading">
//           <h2 id="mission-heading" className="sr-only">
//             Our Mission
//           </h2>
//           <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
//             {missionCards.map((card) => (
//               <div
//                 key={card.title}
//                 className="group flex flex-col items-center text-center gap-4 p-8 rounded-3xl bg-white/70 border border-[#374b82]/10 shadow-[0_12px_36px_rgba(55,75,130,0.10)] hover:-translate-y-1 transition-transform duration-200"
//               >
//                 <div className="w-12 h-12 flex items-center justify-center rounded-2xl bg-[#374b82]/10 text-[#374b82] group-hover:bg-[#374b82] group-hover:text-white transition-colors duration-200">
//                   {card.icon}
//                 </div>
//                 <h3 className="text-lg font-bold text-[#111827]">
//                   {card.title}
//                 </h3>
//                 <p className="text-sm text-[#4b5563] leading-relaxed">
//                   {card.description}
//                 </p>
//               </div>
//             ))}
//           </div>
//         </section>

//         {/* ── 3. LEADERSHIP TEAM ───────────────────────────────────────────── */}
//         <section className={sectionGap} aria-labelledby="leadership-heading">
//           <div className="mb-10">
//             <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-[#374b82]/10 border border-[#374b82]/20 text-[#374b82] text-xs font-bold uppercase tracking-widest mb-4">
//               Leadership
//             </div>
//             <h2
//               id="leadership-heading"
//               className="text-3xl sm:text-4xl font-bold text-[#111827] tracking-tight"
//             >
//               Leadership <span className="text-[#374b82]">Team</span>
//             </h2>
//           </div>

//           <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
//             {leadership.map((member) => (
//               <div
//                 key={member.name}
//                 className="group flex flex-col rounded-3xl bg-white/80 border border-[#374b82]/10 shadow-[0_16px_48px_rgba(55,75,130,0.10)] overflow-hidden hover:-translate-y-2 hover:border-[#374b82]/25 hover:shadow-[0_24px_60px_rgba(55,75,130,0.16)] transition-all duration-300"
//               >
//                 <div className="p-5 pb-3">
//                   <TeamAvatar
//                     src={member.image}
//                     alt={member.name}
//                     size="h-52"
//                   />
//                 </div>
//                 <div className="flex flex-col flex-grow px-5 pb-6 pt-2">
//                   <h3 className="text-lg font-bold text-[#111827] mb-0.5">
//                     {member.name}
//                   </h3>
//                   <p className="text-sm font-semibold text-[#374b82] mb-2">
//                     {member.role}
//                   </p>
//                   <p className="text-xs text-[#4b5563] leading-relaxed mb-4 flex-grow">
//                     {member.description}
//                   </p>
//                   <a
//                     href={member.linkedin}
//                     target="_blank"
//                     rel="noopener noreferrer"
//                     aria-label={`${member.name} on LinkedIn`}
//                     className="inline-flex items-center gap-2 text-xs font-semibold text-[#374b82] hover:gap-3 transition-all duration-200"
//                   >
//                     <Linkedin size={15} aria-hidden="true" />
//                     LinkedIn
//                   </a>
//                 </div>
//               </div>
//             ))}
//           </div>
//         </section>

//         {/* ── 4. CORE TEAM ─────────────────────────────────────────────────── */}
//         <section className={sectionGap} aria-labelledby="core-team-heading">
//           <div className="mb-10">
//             <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-[#374b82]/10 border border-[#374b82]/20 text-[#374b82] text-xs font-bold uppercase tracking-widest mb-4">
//               Core Team
//             </div>
//             <h2
//               id="core-team-heading"
//               className="text-3xl sm:text-4xl font-bold text-[#111827] tracking-tight"
//             >
//               Core <span className="text-[#374b82]">Team</span>
//             </h2>
//           </div>

//           {departments.map((dept) => {
//             const members = coreTeam.filter((m) => m.department === dept);
//             if (members.length === 0) return null;
//             return (
//               <div key={dept} className="mb-12 last:mb-0">
//                 <div className="flex items-center gap-3 mb-6">
//                   <div className="w-8 h-8 flex items-center justify-center rounded-xl bg-[#374b82]/10 text-[#374b82]">
//                     <Layers size={16} aria-hidden="true" />
//                   </div>
//                   <h3 className="text-lg font-bold text-[#374b82] uppercase tracking-wider text-sm">
//                     {dept}
//                   </h3>
//                   <div
//                     className="flex-1 h-px bg-[#374b82]/10"
//                     aria-hidden="true"
//                   />
//                 </div>

//                 <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
//                   {members.map((member) => (
//                     <div
//                       key={member.name}
//                       className="group flex gap-4 p-5 rounded-3xl bg-white/80 border border-[#374b82]/10 shadow-[0_12px_36px_rgba(55,75,130,0.08)] hover:-translate-y-1 hover:border-[#374b82]/22 hover:shadow-[0_20px_48px_rgba(55,75,130,0.14)] transition-all duration-300"
//                     >
//                       <div className="flex-shrink-0 w-16 h-16 rounded-2xl overflow-hidden">
//                         <TeamAvatar
//                           src={member.image}
//                           alt={member.name}
//                           size="h-16"
//                         />
//                       </div>
//                       <div className="flex flex-col justify-center flex-grow min-w-0">
//                         <h4 className="text-base font-bold text-[#111827] truncate">
//                           {member.name}
//                         </h4>
//                         <p className="text-xs font-semibold text-[#374b82] mb-1">
//                           {member.role}
//                         </p>
//                         <a
//                           href={member.linkedin}
//                           target="_blank"
//                           rel="noopener noreferrer"
//                           aria-label={`${member.name} on LinkedIn`}
//                           className="inline-flex items-center gap-1.5 text-xs text-gray-400 hover:text-[#374b82] transition-colors duration-200 w-fit"
//                         >
//                           <Linkedin size={13} aria-hidden="true" />
//                           LinkedIn
//                         </a>
//                       </div>
//                     </div>
//                   ))}
//                 </div>
//               </div>
//             );
//           })}
//         </section>

//         {/* ── 5. TEAM VALUES ───────────────────────────────────────────────── */}
//         <section className={sectionGap} aria-labelledby="values-heading">
//           <div className="text-center mb-10">
//             <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-[#374b82]/10 border border-[#374b82]/20 text-[#374b82] text-xs font-bold uppercase tracking-widest mb-4">
//               Our Values
//             </div>
//             <h2
//               id="values-heading"
//               className="text-3xl sm:text-4xl font-bold text-[#111827] tracking-tight"
//             >
//               What We <span className="text-[#374b82]">Stand For</span>
//             </h2>
//           </div>

//           <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
//             {teamValues.map((value) => (
//               <div
//                 key={value.title}
//                 className="group flex flex-col items-center text-center gap-4 p-8 rounded-3xl bg-white/70 border border-[#374b82]/10 shadow-[0_12px_36px_rgba(55,75,130,0.08)] hover:-translate-y-1 hover:border-[#374b82]/22 transition-all duration-200"
//               >
//                 <div className="w-12 h-12 flex items-center justify-center rounded-2xl bg-[#374b82]/10 text-[#374b82] group-hover:bg-[#374b82] group-hover:text-white transition-colors duration-200">
//                   {value.icon}
//                 </div>
//                 <h3 className="text-lg font-bold text-[#111827]">
//                   {value.title}
//                 </h3>
//                 <p className="text-sm text-[#4b5563] leading-relaxed">
//                   {value.description}
//                 </p>
//               </div>
//             ))}
//           </div>
//         </section>

//         {/* ── 6. JOIN US CTA ───────────────────────────────────────────────── */}
//         <section aria-labelledby="join-cta-heading">
//           <div className="relative overflow-hidden rounded-[2rem] bg-[#374b82] px-8 sm:px-12 py-14 text-center shadow-[0_30px_90px_rgba(55,75,130,0.28)]">
//             <div
//               className="absolute inset-0 pointer-events-none"
//               aria-hidden="true"
//             >
//               <div className="absolute -right-16 -top-16 w-64 h-64 rounded-full border border-white/10" />
//               <div className="absolute -left-10 -bottom-10 w-48 h-48 rounded-full border border-white/10" />
//               <div
//                 className="absolute inset-0 opacity-[0.07]"
//                 style={{
//                   backgroundImage: `radial-gradient(#ffffff 1px, transparent 1px)`,
//                   backgroundSize: "22px 22px",
//                 }}
//               />
//             </div>

//             <div className="relative z-10 max-w-xl mx-auto">
//               <h2
//                 id="join-cta-heading"
//                 className="text-3xl sm:text-4xl font-bold text-white tracking-tight leading-tight mb-4"
//               >
//                 Want to Work With Us?
//               </h2>
//               <p className="text-base text-white/80 leading-relaxed mb-8">
//                 Join SkillSprint Technologies and grow with real-world projects,
//                 mentorship, and career-focused opportunities.
//               </p>
//               <Link
//                 to="/careers"
//                 onClick={() => window.scrollTo(0, 0)}
//                 className="inline-flex items-center gap-2 px-8 py-4 bg-white text-[#374b82] font-semibold rounded-xl shadow-lg hover:bg-gray-50 transition-all active:scale-95"
//                 aria-label="View career opportunities at SkillSprint Technologies"
//               >
//                 View Careers
//                 <ArrowRight size={18} aria-hidden="true" />
//               </Link>
//             </div>
//           </div>
//         </section>
//       </div>
//     </main>
//   );
// };

// export default OurTeam;
import React from "react";
import { Link } from "react-router-dom";
import { Linkedin } from "react-feather";

const missionCards = [
  {
    title: "Built for Learning",
    description:
      "We create digital solutions that help students and professionals grow.",
  },
  {
    title: "Driven by Innovation",
    description: "We combine technology, creativity, and practical skills.",
  },
  {
    title: "Focused on Careers",
    description: "We work with a mission to empower future-ready talent.",
  },
];

const leadershipTeam = [
  {
    name: "Alex Johnson",
    role: "Founder & CEO",
    description:
      "Visionary leader driving SkillSprint's mission to empower careers.",
    image:
      "https://ui-avatars.com/api/?name=Alex+Johnson&background=374b82&color=fff&size=256&length=2",
  },
  {
    name: "Sarah Lee",
    role: "Technical Lead",
    description:
      "Expert architect building scalable and secure digital solutions.",
    image:
      "https://ui-avatars.com/api/?name=Sarah+Lee&background=374b82&color=fff&size=256&length=2",
  },
  {
    name: "Michael Chen",
    role: "Training Lead",
    description: "Dedicated mentor shaping the next generation of tech talent.",
    image:
      "https://ui-avatars.com/api/?name=Michael+Chen&background=374b82&color=fff&size=256&length=2",
  },
  {
    name: "Emily Davis",
    role: "Marketing Lead",
    description:
      "Strategic thinker amplifying our brand and connecting with clients.",
    image:
      "https://ui-avatars.com/api/?name=Emily+Davis&background=374b82&color=fff&size=256&length=2",
  },
];

const coreTeamData = [
  {
    department: "Development Team",
    members: [
      {
        name: "John Doe",
        role: "Frontend Developer",
        image:
          "https://ui-avatars.com/api/?name=John+Doe&background=eef3ff&color=374b82&size=256",
      },
      {
        name: "Jane Smith",
        role: "Backend Developer",
        image:
          "https://ui-avatars.com/api/?name=Jane+Smith&background=eef3ff&color=374b82&size=256",
      },
      {
        name: "Robert Brown",
        role: "Full Stack Developer",
        image:
          "https://ui-avatars.com/api/?name=Robert+Brown&background=eef3ff&color=374b82&size=256",
      },
    ],
  },
  {
    department: "Design Team",
    members: [
      {
        name: "Alice Green",
        role: "UI/UX Designer",
        image:
          "https://ui-avatars.com/api/?name=Alice+Green&background=eef3ff&color=374b82&size=256",
      },
      {
        name: "Bob Wilson",
        role: "Graphic Designer",
        image:
          "https://ui-avatars.com/api/?name=Bob+Wilson&background=eef3ff&color=374b82&size=256",
      },
      {
        name: "Charlie White",
        role: "Brand Designer",
        image:
          "https://ui-avatars.com/api/?name=Charlie+White&background=eef3ff&color=374b82&size=256",
      },
    ],
  },
  {
    department: "Training Team",
    members: [
      {
        name: "Diana Prince",
        role: "Senior Trainer",
        image:
          "https://ui-avatars.com/api/?name=Diana+Prince&background=eef3ff&color=374b82&size=256",
      },
      {
        name: "Evan Wright",
        role: "Mentor",
        image:
          "https://ui-avatars.com/api/?name=Evan+Wright&background=eef3ff&color=374b82&size=256",
      },
      {
        name: "Fiona Gray",
        role: "Course Coordinator",
        image:
          "https://ui-avatars.com/api/?name=Fiona+Gray&background=eef3ff&color=374b82&size=256",
      },
    ],
  },
  {
    department: "Marketing Team",
    members: [
      {
        name: "George King",
        role: "SEO Specialist",
        image:
          "https://ui-avatars.com/api/?name=George+King&background=eef3ff&color=374b82&size=256",
      },
      {
        name: "Hannah Scott",
        role: "Content Strategist",
        image:
          "https://ui-avatars.com/api/?name=Hannah+Scott&background=eef3ff&color=374b82&size=256",
      },
      {
        name: "Ian Adams",
        role: "Social Media Manager",
        image:
          "https://ui-avatars.com/api/?name=Ian+Adams&background=eef3ff&color=374b82&size=256",
      },
    ],
  },
];

const teamValues = [
  {
    title: "Collaboration",
    description: "We believe strong teams build stronger products.",
  },
  {
    title: "Continuous Learning",
    description: "We keep improving through practice and real projects.",
  },
  {
    title: "Creativity",
    description: "We solve problems with fresh ideas and clean execution.",
  },
  {
    title: "Responsibility",
    description: "We deliver work with ownership and professionalism.",
  },
];

const OurTeam = () => {
  return (
    <main
      aria-labelledby="team-heading"
      className="relative bg-transperent w-full overflow-hidden pt-32 pb-20"
    >
      <div className="relative z-10 max-w-[1600px] mx-auto px-5 sm:px-8 lg:px-12 xl:px-16 2xl:px-20 space-y-24">
        {/* 1. Hero Section */}
        <section className="text-center max-w-4xl mx-auto space-y-6">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#374b82]/10 border border-[#374b82]/20 text-[#374b82] text-xs font-bold uppercase tracking-widest">
            OUR TEAM
          </div>
          <h1
            id="team-heading"
            className="text-4xl md:text-5xl lg:text-6xl font-bold text-[#111827] tracking-tight"
          >
            Meet the People Behind{" "}
            <span className="text-[#374b82]">SkillSprint</span>
          </h1>
          <p className="text-lg text-[#4b5563] leading-relaxed max-w-2xl mx-auto">
            Our team brings together developers, designers, trainers, and
            digital experts working to build career-focused technology
            solutions.
          </p>
        </section>

        {/* 2. Team Intro / Mission Strip */}
        <section className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {missionCards.map((item, idx) => (
            <div
              key={idx}
              className="p-8 rounded-3xl bg-white/70 backdrop-blur-xl border border-[#374b82]/10 shadow-[0_20px_60px_rgba(55,75,130,0.10)] text-center"
            >
              <h3 className="text-xl font-bold text-[#111827] mb-3">
                {item.title}
              </h3>
              <p className="text-sm text-[#4b5563] leading-relaxed">
                {item.description}
              </p>
            </div>
          ))}
        </section>

        {/* 3. Leadership Team Section */}
        <section className="space-y-12">
          <div className="text-center">
            <h2 className="text-3xl md:text-4xl font-bold text-[#111827]">
              Leadership Team
            </h2>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {leadershipTeam.map((leader, idx) => (
              <article
                key={idx}
                className="group p-6 rounded-3xl bg-white/70 backdrop-blur-xl border border-[#374b82]/10 shadow-[0_20px_60px_rgba(55,75,130,0.10)] hover:-translate-y-2 transition-transform duration-300"
              >
                <div className="w-full h-64 rounded-2xl overflow-hidden mb-6 bg-gray-100">
                  <img
                    src={leader.image}
                    alt={`${leader.name}, ${leader.role}`}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                </div>
                <h3 className="text-xl font-bold text-[#111827] mb-1">
                  {leader.name}
                </h3>
                <p className="text-sm font-semibold text-[#374b82] mb-3">
                  {leader.role}
                </p>
                <p className="text-sm text-[#4b5563] mb-6 line-clamp-2">
                  {leader.description}
                </p>
                <a
                  href="#"
                  aria-label={`View ${leader.name}'s LinkedIn profile`}
                  className="inline-flex items-center justify-center w-10 h-10 rounded-full bg-[#374b82]/10 text-[#374b82] hover:bg-[#374b82] hover:text-white transition-colors duration-300"
                >
                  <Linkedin size={20} />
                </a>
              </article>
            ))}
          </div>
        </section>

        {/* 4. Core Team Section */}
        <section className="space-y-16">
          <div className="text-center">
            <h2 className="text-3xl md:text-4xl font-bold text-[#111827]">
              Core Team
            </h2>
          </div>
          {coreTeamData.map((dept, deptIdx) => (
            <div key={deptIdx} className="space-y-8">
              <h3 className="text-2xl font-bold text-[#111827] border-b border-[#374b82]/10 pb-4">
                {dept.department}
              </h3>
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
                {dept.members.map((member, memberIdx) => (
                  <article
                    key={memberIdx}
                    className="group p-6 rounded-3xl bg-white/70 backdrop-blur-xl border border-[#374b82]/10 shadow-[0_20px_60px_rgba(55,75,130,0.10)] hover:-translate-y-2 transition-transform duration-300"
                  >
                    <div className="w-full h-56 rounded-2xl overflow-hidden mb-6 bg-gray-100">
                      <img
                        src={member.image}
                        alt={`${member.name}, ${member.role}`}
                        className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                      />
                    </div>
                    <div className="inline-block px-3 py-1 rounded-full bg-[#374b82]/10 text-[#374b82] text-xs font-bold uppercase tracking-wider mb-4">
                      {dept.department.replace(" Team", "")}
                    </div>
                    <h4 className="text-lg font-bold text-[#111827] mb-1">
                      {member.name}
                    </h4>
                    <p className="text-sm text-[#4b5563] mb-6">{member.role}</p>
                    <a
                      href="#"
                      aria-label={`View ${member.name}'s LinkedIn profile`}
                      className="inline-flex items-center justify-center w-10 h-10 rounded-full bg-[#374b82]/10 text-[#374b82] hover:bg-[#374b82] hover:text-white transition-colors duration-300"
                    >
                      <Linkedin size={20} />
                    </a>
                  </article>
                ))}
              </div>
            </div>
          ))}
        </section>

        {/* 5. Team Values Section */}
        <section className="space-y-12">
          <div className="text-center">
            <h2 className="text-3xl md:text-4xl font-bold text-[#111827]">
              Our Values
            </h2>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {teamValues.map((value, idx) => (
              <div
                key={idx}
                className="p-8 rounded-3xl bg-white/70 backdrop-blur-xl border border-[#374b82]/10 shadow-[0_20px_60px_rgba(55,75,130,0.10)]"
              >
                <div className="w-12 h-12 rounded-xl bg-[#374b82] text-white flex items-center justify-center mb-6 text-xl font-bold">
                  {idx + 1}
                </div>
                <h3 className="text-xl font-bold text-[#111827] mb-3">
                  {value.title}
                </h3>
                <p className="text-sm text-[#4b5563] leading-relaxed">
                  {value.description}
                </p>
              </div>
            ))}
          </div>
        </section>

        {/* 6. Join Our Team CTA */}
        <section className="relative overflow-hidden rounded-[2rem] bg-white/80 backdrop-blur-xl border border-[#374b82]/10 shadow-[0_30px_100px_rgba(55,75,130,0.12)] p-12 md:p-16 text-center max-w-4xl mx-auto">
          <div className="relative z-10 space-y-6">
            <h2 className="text-3xl md:text-4xl font-bold text-[#111827]">
              Want to Work With Us?
            </h2>
            <p className="text-lg text-[#4b5563] max-w-2xl mx-auto">
              Join SkillSprint Technologies and grow with real-world projects,
              mentorship, and career-focused opportunities.
            </p>
            <div className="pt-4">
              <Link
                to="/careers"
                className="inline-flex items-center justify-center gap-2 px-8 py-4 bg-[#374b82] !text-white font-semibold rounded-xl shadow-lg shadow-[#374b82]/20 hover:bg-[#2f3f70] transition-all active:scale-95"
              >
                View Careers
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
        </section>
      </div>
    </main>
  );
};

export default OurTeam;
