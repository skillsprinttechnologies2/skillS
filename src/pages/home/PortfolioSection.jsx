import React from "react";
import { Link } from "react-router-dom";
import { ArrowUpRight, Filter } from "react-feather";
import { caseStudies } from "../../data/caseStudies";

const PortfolioSection = () => {
  const overviewProjects = caseStudies.slice(0, 3);

  return (
    <section
      id="case-studies"
      aria-labelledby="case-studies-heading"
      className="relative w-full overflow-hidden scroll-mt-24"
      style={{
        background:
          "linear-gradient(135deg, #ffffff 0%, #f6f8ff 45%, #eef3ff 100%)",
      }}
    >
      {/* Background Visuals */}
      <div
        className="absolute inset-0 pointer-events-none overflow-hidden"
        aria-hidden="true"
      >
        <div className="absolute top-[-10%] left-[-5%] w-[500px] h-[500px] rounded-full bg-[#374b82]/5 blur-[110px]" />

        <div className="absolute bottom-[-10%] right-[-5%] w-[600px] h-[600px] rounded-full bg-[#374b82]/10 blur-[120px]" />

        <div
          className="absolute inset-0 opacity-[0.14]"
          style={{
            backgroundImage: `radial-gradient(#374b82 1px, transparent 1px)`,
            backgroundSize: "30px 30px",
          }}
        />
      </div>

      <div className="relative z-10 max-w-[1600px] mx-auto px-5 sm:px-8 lg:px-12 xl:px-16 2xl:px-20 py-16 sm:py-20 lg:py-24">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-12 space-y-4">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#374b82]/10 border border-[#374b82]/20 text-[#374b82] text-xs font-bold uppercase tracking-widest">
            <Filter size={14} aria-hidden="true" />
            Case Studies
          </div>

          <h2
            id="case-studies-heading"
            className="text-4xl md:text-5xl font-bold text-[#111827] tracking-tight"
          >
            Real Solutions,{" "}
            <span className="text-[#374b82]">Proven Results</span>
          </h2>

          <p className="text-base sm:text-lg text-[#4b5563] leading-relaxed">
            Explore selected projects that show how SkillSprint Technologies
            helps businesses build, automate, market, and scale with confidence.
          </p>
        </div>

        {/* Projects */}
        <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6 lg:gap-7">
          {overviewProjects.map((project) => {
            const Icon = project.icon;

            return (
              <article
                key={project.slug}
                className="
                  group
                  relative
                  flex
                  flex-col
                  rounded-3xl
                  bg-white/70
                  backdrop-blur-xl
                  border
                  border-[#374b82]/10
                  shadow-[0_20px_60px_rgba(55,75,130,0.10)]
                  overflow-hidden
                  transition-transform
                  duration-300
                  hover:-translate-y-2
                "
              >
                {/* Visual */}
                <div
                  className={`relative h-44 overflow-hidden bg-gradient-to-br ${project.gradient} border-b border-[#374b82]/5`}
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
                    aria-hidden="true"
                  />

                  <div
                    className="absolute top-4 right-4 w-16 h-16 rounded-full bg-white/20 backdrop-blur-md border border-white/30"
                    aria-hidden="true"
                  />

                  <div
                    className="absolute bottom-4 left-4 w-12 h-12 rounded-full bg-[#374b82]/10 border border-[#374b82]/20"
                    aria-hidden="true"
                  />

                  <div className="absolute inset-0 flex items-center justify-center text-[#374b82]/80 group-hover:text-[#374b82] group-hover:scale-110 transition-transform duration-300">
                    <Icon size={30} aria-hidden="true" />
                  </div>

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
                    {project.shortDescription}
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
                    <span
                      className="w-1.5 h-1.5 rounded-full bg-[#374b82]"
                      aria-hidden="true"
                    />

                    <span className="text-xs font-semibold text-[#374b82]">
                      {project.metric}
                    </span>
                  </div>

                  <div className="pt-2">
                    <Link
                      to={`/case-studies/${project.slug}`}
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
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default PortfolioSection;
