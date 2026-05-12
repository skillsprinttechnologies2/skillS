import { Link } from "react-router-dom";

export default function Hero() {
  return (
    <section
      className="
        relative
        min-h-screen
        w-screen
        overflow-hidden
        flex items-center
        bg-white
      "
    >
      {/* Background Image */}
      <img
        src="/herobg2.jpg"
        alt="background"
        className="
          absolute inset-0
          w-full h-full
          object-cover
          opacity-99
          z-0
        "
      />

      {/* White Overlay */}

      {/* Hero Content */}
      <div className="relative z-20 w-full px-6 sm:px-10 lg:px-20 flex items-center justify-center text-center">
        <div className="max-w-3xl">
          <h1 className="text-5xl md:text-7xl font-bold leading-tight text-white">
            Accelerate Skills.
            <br />
            Empower Careers.
          </h1>

          <p className="mt-8 text-lg md:text-xl text-white leading-relaxed">
            SkillSprint helps students and professionals build industry-ready
            skills through real-world learning, mentorship, and career-focused
            training.
          </p>

          {/* Buttons */}
          <div className="mt-10 flex flex-wrap gap-5 justify-center">
            <Link
              to="/contact"
              className="
          px-8 py-4
          rounded-2xl
          text-base font-semibold
          !text-white
          bg-[#374b82]
          hover:bg-[#2f416f]
          transition-all duration-300
          shadow-lg hover:shadow-xl
        "
            >
              Get Started
            </Link>

            <Link
              to="/services"
              className="
          px-8 py-4
          rounded-2xl
          text-base font-semibold
          border border-[#374b82]
          !text-white
          hover:bg-[#374b82]
          hover:!text-white
          transition-all duration-300
        "
            >
              Explore Services
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
