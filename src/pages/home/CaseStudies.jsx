import React, { useEffect, useMemo, useRef, useState } from "react";
import { Link } from "react-router-dom";
import {
  ArrowUpRight,
  Code,
  BarChart2,
  MessageSquare,
  BookOpen,
  PenTool,
  Layers,
  Filter,
  Monitor,
  Database,
  Zap,
} from "react-feather";
import { image } from "framer-motion/client";

const img3 = "/coaching/img3.webp";
const coachImg1 = "/coaching/coaching-img1.webp";
const coachImg2 = "/coaching/coaching-img2.webp";
const coachImg3 = "/coaching/coaching-img3.webp";

const projects = [
  {
    id: 1,
    slug: "mechxdata-industry-awareness-session",
    title: "MechXData Industry Awareness Session",
    image: img3,
    category: "Training",
    desc: "An interactive Excel and Power BI awareness session conducted at Siddaganga Institute of Technology.",
    tags: ["Excel", "Power BI", "Workshop"],
    metric: "100+ students engaged",
    icon: <BarChart2 size={28} aria-hidden="true" />,
    gradient: "from-[#374b82]/20 to-[#4f68b3]/10",
  },
  {
    id: 2,
    slug: "excel-powerbi-industrial-training",
    title: "Excel & Power BI Industrial Training",
    image: coachImg1,
    category: "Training",
    desc: "A practical industrial training session introducing students to reporting, dashboards, and analytics workflows.",
    tags: ["Analytics", "Dashboard", "Training"],
    metric: "Hands-on analytics learning",
    icon: <Monitor size={28} aria-hidden="true" />,
    gradient: "from-[#2f3f70]/15 to-[#4f68b3]/10",
  },
  {
    id: 3,
    slug: "data-analytics-awareness-session",
    title: "Data Analytics Awareness Session",
    image: coachImg2,
    category: "Training",
    desc: "A student-focused awareness session covering modern analytics tools, visualization, and reporting concepts.",
    tags: ["Data", "Visualization", "Reports"],
    metric: "Industry tool exposure",
    icon: <Database size={28} aria-hidden="true" />,
    gradient: "from-[#374b82]/15 to-[#5c7ac8]/10",
  },
  {
    id: 4,
    slug: "industry-tools-productivity-workshop",
    title: "Industry Tools Productivity Workshop",
    image: coachImg3,
    category: "Training",
    desc: "A workshop focused on productivity tools, workflow management, and practical business reporting techniques.",
    tags: ["Workflow", "Tools", "Industry"],
    metric: "Practical workflow learning",
    icon: <Zap size={28} aria-hidden="true" />,
    gradient: "from-[#2f3f70]/20 to-[#374b82]/10",
  },
];
const filters = [
  "All Projects",
  "Web Development",
  "Automation",
  "Digital Marketing",
  "Training",
  "Design",
];

const PortfolioSection = () => {
  const [activeFilter, setActiveFilter] = useState("All Projects");

  const wrapperRef = useRef(null);
  const scrollerRef = useRef(null);
  const scrollFrameRef = useRef(null);
  const targetScrollRef = useRef(0);

  const filteredProjects = useMemo(() => {
    if (activeFilter === "All Projects") return projects;

    return projects.filter((project) => project.category === activeFilter);
  }, [activeFilter]);

  const isSingle = filteredProjects.length === 1;

  useEffect(() => {
    const el = scrollerRef.current;
    if (!el) return;

    if (scrollFrameRef.current) {
      cancelAnimationFrame(scrollFrameRef.current);
      scrollFrameRef.current = null;
    }

    requestAnimationFrame(() => {
      el.scrollLeft = 0;
      targetScrollRef.current = 0;
    });
  }, [activeFilter]);

  useEffect(() => {
    const wrapper = wrapperRef.current;
    const el = scrollerRef.current;

    if (!wrapper || !el) return;

    const smoothScrollTo = () => {
      const current = el.scrollLeft;
      const target = targetScrollRef.current;
      const distance = target - current;

      if (Math.abs(distance) < 0.5) {
        el.scrollLeft = target;
        scrollFrameRef.current = null;
        return;
      }

      el.scrollLeft = current + distance * 0.22;
      scrollFrameRef.current = requestAnimationFrame(smoothScrollTo);
    };

    const handleWheel = (event) => {
      const canScrollHorizontally = el.scrollWidth > el.clientWidth + 2;

      if (!canScrollHorizontally || filteredProjects.length <= 1) return;

      const maxScrollLeft = el.scrollWidth - el.clientWidth;

      const delta =
        Math.abs(event.deltaY) >= Math.abs(event.deltaX)
          ? event.deltaY
          : event.deltaX;

      if (Math.abs(delta) < 1) return;

      const currentBase =
        scrollFrameRef.current === null
          ? el.scrollLeft
          : targetScrollRef.current;

      const nextTarget = Math.max(
        0,
        Math.min(maxScrollLeft, currentBase + delta * 3.5),
      );

      if (nextTarget !== currentBase) {
        event.preventDefault();
        targetScrollRef.current = nextTarget;

        if (!scrollFrameRef.current) {
          scrollFrameRef.current = requestAnimationFrame(smoothScrollTo);
        }
      }
    };

    wrapper.addEventListener("wheel", handleWheel, { passive: false });

    return () => {
      wrapper.removeEventListener("wheel", handleWheel);

      if (scrollFrameRef.current) {
        cancelAnimationFrame(scrollFrameRef.current);
        scrollFrameRef.current = null;
      }
    };
  }, [filteredProjects.length]);

  return (
    <section
      id="case-studies"
      className="relative bg-transperent w-full overflow-hidden scroll-mt-24"
      aria-labelledby="case-studies-heading"
    >
      <div className="relative z-10 max-w-7xl mx-auto px-6 sm:px-10 lg:px-16 py-20 sm:py-24 lg:py-28">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-12 space-y-4">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#374b82]/10 border border-[#374b82]/20 text-[#374b82] text-xs font-bold uppercase tracking-widest">
            <Filter size={14} aria-hidden="true" />
            Case Studies
          </div>

          <h2
            id="case-studies-heading"
            className="text-3xl sm:text-4xl md:text-5xl font-bold text-[#111827] tracking-tight"
          >
            Real Solutions,{" "}
            <span className="text-[#374b82]">Proven Results</span>
          </h2>

          <p className="text-base sm:text-lg text-[#4b5563] leading-relaxed">
            Explore selected projects that show how SkillSprint Technologies
            helps businesses build, automate, market, and scale with confidence.
          </p>
        </div>

        {/* Filters */}
        <div
          className="flex justify-start sm:justify-center gap-3 mb-10 overflow-x-auto pb-2 scrollbar-hide"
          aria-label="Case study filters"
        >
          {filters.map((filter) => (
            <button
              key={filter}
              type="button"
              onClick={() => setActiveFilter(filter)}
              aria-pressed={activeFilter === filter}
              className={`shrink-0 px-5 py-2.5 rounded-full text-sm font-semibold whitespace-nowrap transition-all duration-300 ${
                activeFilter === filter
                  ? "bg-[#374b82] !text-white shadow-lg shadow-[#374b82]/25"
                  : "bg-white/70 text-[#374b82] border border-[#374b82]/20 hover:bg-white hover:border-[#374b82]/40 backdrop-blur-sm"
              }`}
            >
              {filter}
            </button>
          ))}
        </div>

        {/* Projects */}
        {filteredProjects.length === 0 ? (
          <div className="text-center py-12 text-gray-500">
            No projects found in this category.
          </div>
        ) : (
          <div ref={wrapperRef} className="relative overflow-visible">
            <div
              ref={scrollerRef}
              className={`
                flex gap-6
                overflow-x-auto overflow-y-visible
                overscroll-x-contain
                pt-4 pb-8 px-1
                scrollbar-hide
                ${isSingle ? "justify-center" : ""}
              `}
              aria-label="Case studies horizontal scroll"
            >
              {filteredProjects.map((project) => (
                <article
                  key={project.id}
                  className={`
                    group relative flex flex-col shrink-0
                    ${
                      isSingle
                        ? "w-full max-w-[420px]"
                        : "w-[86%] sm:w-[420px] lg:w-[390px]"
                    }
                    rounded-3xl
                    bg-white/70
                    backdrop-blur-xl
                    border border-[#374b82]/10
                    shadow-[0_20px_60px_rgba(55,75,130,0.10)]
                    overflow-hidden
                    transition-all duration-300
                    hover:-translate-y-2
                    hover:border-[#374b82]/30
                    hover:shadow-[0_30px_80px_rgba(55,75,130,0.16)]
                  `}
                >
                  {/* Visual */}
                  <div
                    className={`relative h-48 overflow-hidden bg-gradient-to-br ${project.gradient} border-b border-[#374b82]/5`}
                  >
                    <div
                      className="absolute inset-0 opacity-20"
                      style={{
                        backgroundImage: `
                          linear-gradient(rgba(55,75,130,0.1) 1px, transparent 1px),
                          linear-gradient(90deg, rgba(55,75,130,0.1) 1px, transparent 1px)
                        `,
                        backgroundSize: "20px 20px",
                      }}
                    />
                    {!project.image && (
                      <div className="absolute top-4 right-4 w-16 h-16 rounded-full bg-white/20 backdrop-blur-md border border-white/30" />
                    )}

                    <div className="absolute bottom-4 left-4 w-12 h-12 rounded-full bg-[#374b82]/10 border border-[#374b82]/20" />

                    {project.image ? (
                      <img
                        src={project.image}
                        alt={project.title}
                        className="
      w-full
      h-full
      object-cover
      object-center
      transition-transform
      duration-500
      group-hover:scale-105
    "
                      />
                    ) : (
                      <div className="absolute inset-0 flex items-center justify-center text-[#374b82]/80 group-hover:text-[#374b82] group-hover:scale-110 transition-all duration-300">
                        {project.icon}
                      </div>
                    )}

                    <div className="absolute top-4 left-4">
                      <span className="px-3 py-1 text-[10px] font-bold uppercase tracking-wider rounded-full bg-white/90 text-[#374b82] shadow-sm border border-[#374b82]/10">
                        {project.category}
                      </span>
                    </div>
                  </div>

                  {/* Content */}
                  <div className="flex flex-col flex-grow p-6 space-y-4">
                    <h3 className="text-xl font-bold text-[#172033] group-hover:text-[#374b82] transition-colors">
                      {project.title}
                    </h3>

                    <p className="text-sm text-[#4b5563] leading-relaxed flex-grow">
                      {project.desc}
                    </p>

                    <div className="flex flex-wrap gap-2">
                      {project.tags.map((tag) => (
                        <span
                          key={tag}
                          className="px-2.5 py-1 text-[10px] font-medium rounded-md bg-[#374b82]/5 text-[#374b82] border border-[#374b82]/10"
                        >
                          {tag}
                        </span>
                      ))}
                    </div>

                    <div className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-[#374b82]/10 border border-[#374b82]/20 w-fit">
                      <div className="w-1.5 h-1.5 rounded-full bg-[#374b82]" />

                      <span className="text-xs font-semibold text-[#374b82]">
                        {project.metric}
                      </span>
                    </div>

                    <div className="pt-2">
                      <Link
                        to={`/case-studies/${project.slug}`}
                        onClick={() => {
                          window.scrollTo({ top: 0, left: 0 });
                        }}
                        className="inline-flex items-center gap-2 text-sm font-bold !text-[#374b82] no-underline hover:gap-3 transition-all group/link"
                        aria-label={`View case study: ${project.title}`}
                      >
                        View Case Study
                        <ArrowUpRight
                          size={16}
                          className="transition-transform group-hover/link:translate-x-0.5 group-hover/link:-translate-y-0.5"
                          aria-hidden="true"
                        />
                      </Link>
                    </div>
                  </div>
                </article>
              ))}
            </div>
          </div>
        )}
      </div>
    </section>
  );
};

export default PortfolioSection;
