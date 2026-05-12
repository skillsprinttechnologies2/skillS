import {
  Briefcase,
  BarChart2,
  DollarSign,
  Cpu,
  PenTool,
  Code,
  ArrowUpRight,
} from "react-feather";

export default function ServicesSection() {
  const services = [
    {
      title: "Digital Marketing",
      description:
        "We craft data-driven marketing strategies to boost your brand visibility and engagement.",
      icon: Briefcase,
    },
    {
      title: "Web Development",
      description:
        "Responsive, high-performance websites designed for modern user experiences and scalability.",
      icon: BarChart2,
    },
    {
      title: "Software Training & Placement",
      description:
        "Hands-on training programs with placement support to prepare candidates for real-world roles.",
      icon: DollarSign,
    },
    {
      title: "Chatbot & Automation",
      description:
        "Smart chatbot systems and automated workflows that improve efficiency and customer interaction.",
      icon: Cpu,
    },
    {
      title: "Graphic Design Services",
      description:
        "Creative brand visuals, UI designs, presentations, and marketing assets tailored to your identity.",
      icon: PenTool,
    },
    {
      title: "Software Development",
      description:
        "Custom software solutions built with scalable architecture and agile development practices.",
      icon: Code,
    },
  ];

  return (
    <section className="relative bg-[#050816] py-24 overflow-hidden">
      {/* Background Glow */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[700px] h-[700px] bg-[#374b82]/20 blur-[140px] rounded-full" />

      <div className="relative z-10 max-w-7xl mx-auto px-6 sm:px-10 lg:px-16">
        {/* Heading */}
        <div className="text-center mb-20">
          <p className="text-[#8ea3ff] uppercase tracking-[0.25em] text-sm font-semibold">
            Our Expertise
          </p>

          <h2 className="mt-4 text-4xl md:text-5xl font-bold text-white">
            Services We Provide
          </h2>

          <p className="mt-6 text-white/70 max-w-2xl mx-auto text-lg leading-relaxed">
            We help businesses and individuals accelerate growth through
            technology, creativity, and modern digital solutions.
          </p>
        </div>

        {/* Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-8">
          {services.map((service, index) => {
            const Icon = service.icon;

            return (
              <div
                key={index}
                className="
                  group
                  relative
                  bg-white/5
                  border border-white/10
                  backdrop-blur-xl
                  rounded-3xl
                  p-8
                  transition-all duration-500
                  hover:-translate-y-2
                  hover:border-[#374b82]/50
                  hover:shadow-[0_20px_60px_rgba(55,75,130,0.25)]
                "
              >
                {/* Glow */}
                <div
                  className="
                    absolute inset-0
                    rounded-3xl
                    bg-gradient-to-br
                    from-[#374b82]/10
                    to-transparent
                    opacity-0
                    group-hover:opacity-100
                    transition duration-500
                  "
                />

                {/* Icon */}
                <div
                  className="
                    relative
                    w-16 h-16
                    rounded-2xl
                    bg-[#374b82]/15
                    border border-[#374b82]/20
                    flex items-center justify-center
                    mb-8
                  "
                >
                  <Icon className="w-8 h-8 text-[#8ea3ff]" />
                </div>

                {/* Title */}
                <h3 className="text-2xl font-bold text-white mb-5">
                  {service.title}
                </h3>

                {/* Description */}
                <p className="text-white/70 leading-relaxed text-[16px]">
                  {service.description}
                </p>

                {/* CTA */}
                <button
                  className="
                    mt-8
                    flex items-center gap-2
                    text-[#8ea3ff]
                    font-semibold
                    transition-all duration-300
                    group-hover:translate-x-1
                  "
                >
                  Enquiry
                  <ArrowUpRight className="w-4 h-4" />
                </button>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
