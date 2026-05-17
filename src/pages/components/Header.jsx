import React, { useEffect, useState } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import HamburgerToggle from "./HamburgerToggle";

const navLinks = [
  { name: "Home", target: "home", type: "section" },
  { name: "About", target: "about", type: "section" },
  { name: "Services", target: "/services", type: "page" },
  { name: "Case Studies", target: "case-studies", type: "section" },
  { name: "Contact", target: "/contact", type: "page" },
];

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [activeSection, setActiveSection] = useState("home");

  const location = useLocation();
  const navigate = useNavigate();

  const scrollToTop = () => {
    setTimeout(() => {
      window.scrollTo({
        top: 0,
        left: 0,
        behavior: "smooth",
      });
    }, 80);
  };

  const scrollToSection = (sectionId) => {
    setIsOpen(false);

    const scroll = () => {
      if (sectionId === "home") {
        window.scrollTo({
          top: 0,
          left: 0,
          behavior: "smooth",
        });
        return;
      }

      const section = document.getElementById(sectionId);
      if (!section) return;
      const yOffset = sectionId === "about" ? -60 : -90;
      const y = section.getBoundingClientRect().top + window.scrollY + yOffset;
      window.scrollTo({
        top: y,
        left: 0,
        behavior: "smooth",
      });
    };

    if (location.pathname !== "/") {
      navigate("/", { state: { scrollTo: sectionId } });

      setTimeout(scroll, 150);
      return;
    }

    scroll();
  };

  const goToPageTop = (path) => {
    setIsOpen(false);

    if (location.pathname === path) {
      scrollToTop();
      return;
    }

    navigate(path);

    setTimeout(() => {
      window.scrollTo({
        top: 0,
        left: 0,
        behavior: "smooth",
      });
    }, 100);
  };

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);

      if (location.pathname !== "/") return;

      const sectionIds = ["home", "about", "case-studies"];

      for (const id of sectionIds) {
        const section = document.getElementById(id);
        if (!section) continue;

        const rect = section.getBoundingClientRect();

        if (rect.top <= 120 && rect.bottom >= 120) {
          setActiveSection(id);
          break;
        }
      }
    };

    handleScroll();

    window.addEventListener("scroll", handleScroll, { passive: true });

    return () => window.removeEventListener("scroll", handleScroll);
  }, [location.pathname]);

  const isActiveLink = (link) => {
    if (link.type === "page") {
      return location.pathname === link.target;
    }

    return location.pathname === "/" && activeSection === link.target;
  };

  return (
    <header
      className={`
        fixed top-0 left-0 right-0 z-[9999] w-full
        transition-all duration-300
        ${scrolled ? "h-[72px]" : "h-20"}
      `}
    >
      <nav
        className="
          w-full h-full
          bg-white/35
          backdrop-blur-2xl
          supports-[backdrop-filter]:bg-white/25
          border-b border-white/40
          shadow-[0_8px_32px_rgba(31,38,135,0.12)]
        "
        aria-label="Main navigation"
      >
        <div
          className="
            w-full h-full
            px-5 sm:px-8 lg:px-12 xl:px-16 2xl:px-20
            flex items-center justify-between
          "
        >
          {/* Logo */}
          <button
            type="button"
            className="flex items-center shrink-0 bg-transparent border-0 p-0 cursor-pointer"
            onClick={() => scrollToSection("home")}
            aria-label="Go to homepage"
          >
            <img
              src="/logo.png"
              alt="SkillSprint Technologies"
              className="h-12 sm:h-14 w-auto object-contain"
            />
          </button>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center gap-8 lg:gap-12">
            {navLinks.map((link) => {
              const active = isActiveLink(link);

              if (link.type === "page") {
                return (
                  <button
                    key={link.name}
                    type="button"
                    onClick={() => goToPageTop(link.target)}
                    className={`
                      relative text-[15px] font-semibold tracking-wide
                      transition-colors duration-200
                      bg-transparent border-0 p-0 cursor-pointer
                      ${
                        active
                          ? "text-[#374b82]"
                          : "text-[#24304a]/80 hover:text-[#374b82]"
                      }
                    `}
                  >
                    {link.name}
                    <span
                      className={`
                        absolute left-0 -bottom-2 h-[2px] rounded-full
                        bg-[#374b82] transition-all duration-300
                        ${active ? "w-full opacity-100" : "w-0 opacity-0"}
                      `}
                    />
                  </button>
                );
              }

              return (
                <button
                  key={link.name}
                  type="button"
                  onClick={() => scrollToSection(link.target)}
                  className={`
                    relative text-[15px] font-semibold tracking-wide
                    transition-colors duration-200
                    bg-transparent border-0 p-0 cursor-pointer
                    ${
                      active
                        ? "text-[#374b82]"
                        : "text-[#24304a]/80 hover:text-[#374b82]"
                    }
                  `}
                >
                  {link.name}
                  <span
                    className={`
                      absolute left-0 -bottom-2 h-[2px] rounded-full
                      bg-[#374b82] transition-all duration-300
                      ${active ? "w-full opacity-100" : "w-0 opacity-0"}
                    `}
                  />
                </button>
              );
            })}
          </div>

          {/* CTA + Mobile Toggle */}
          <div className="flex items-center gap-4 shrink-0">
            <button
              type="button"
              onClick={() => goToPageTop("/contact")}
              className="
                hidden md:inline-flex
                items-center justify-center
                px-7 py-3
                rounded-xl
                text-sm font-semibold
                text-white
                bg-[#374b82]
                border border-[#374b82]/20
                shadow-[0_12px_30px_rgba(55,75,130,0.25)]
                hover:bg-[#2f3f70]
                active:scale-95
                transition-colors
                cursor-pointer
              "
            >
              Get Started
            </button>

            <div className="md:hidden">
              <HamburgerToggle
                isOpen={isOpen}
                toggleMenu={() => setIsOpen((prev) => !prev)}
              />
            </div>
          </div>
        </div>

        {/* Mobile Menu */}
        <div
          className={`
            md:hidden
            absolute left-0 right-0 top-full
            px-4
            transition-all duration-300 ease-out
            ${
              isOpen
                ? "opacity-100 translate-y-0 pointer-events-auto"
                : "opacity-0 -translate-y-3 pointer-events-none"
            }
          `}
        >
          <div
            className="
              mt-3 w-full
              rounded-2xl
              bg-white/90
              backdrop-blur-2xl
              border border-white/40
              shadow-[0_20px_50px_rgba(55,75,130,0.18)]
              p-4
              flex flex-col gap-2
            "
          >
            {navLinks.map((link) => {
              const active = isActiveLink(link);

              if (link.type === "page") {
                return (
                  <button
                    key={link.name}
                    type="button"
                    onClick={() => goToPageTop(link.target)}
                    className={`
                      w-full text-left
                      px-4 py-3 rounded-xl
                      text-base font-semibold
                      transition-colors duration-200
                      bg-transparent border-0 cursor-pointer
                      ${
                        active
                          ? "bg-[#374b82]/10 text-[#374b82]"
                          : "text-[#24304a]/80 hover:bg-[#374b82]/5 hover:text-[#374b82]"
                      }
                    `}
                  >
                    {link.name}
                  </button>
                );
              }

              return (
                <button
                  key={link.name}
                  type="button"
                  onClick={() => scrollToSection(link.target)}
                  className={`
                    w-full text-left
                    px-4 py-3 rounded-xl
                    text-base font-semibold
                    transition-colors duration-200
                    bg-transparent border-0 cursor-pointer
                    ${
                      active
                        ? "bg-[#374b82]/10 text-[#374b82]"
                        : "text-[#24304a]/80 hover:bg-[#374b82]/5 hover:text-[#374b82]"
                    }
                  `}
                >
                  {link.name}
                </button>
              );
            })}

            <button
              type="button"
              onClick={() => goToPageTop("/contact")}
              className="
                mt-2 w-full
                text-center
                px-6 py-3
                bg-[#374b82]
                text-white
                font-semibold
                rounded-xl
                shadow-[0_12px_30px_rgba(55,75,130,0.25)]
                hover:bg-[#2f3f70]
                active:scale-95
                transition-colors
                cursor-pointer
                border-0
              "
            >
              Get Started
            </button>
          </div>
        </div>
      </nav>
    </header>
  );
};

export default Header;
