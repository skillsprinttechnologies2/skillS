import React, { useState, useEffect } from "react";
import { Link, NavLink } from "react-router-dom";
import HamburgerToggle from "./HamburgerToggle";

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navLinks = [
    { name: "Home", path: "/" },
    { name: "About", path: "/about" },
    { name: "Services", path: "/services" },
    { name: "Plans", path: "/pricing" },
    { name: "Contact", path: "/contact" },
  ];

  return (
    <header
      className={`
        fixed top-0 left-0 z-50 w-full
        transition-all duration-300
        ${scrolled ? "h-[72px]" : "h-20"}
      `}
    >
      <nav
        className="
          w-full h-full
          bg-white/25
          backdrop-blur-2xl
          supports-[backdrop-filter]:bg-white/20
          border-b border-white/30
          shadow-[0_8px_32px_rgba(31,38,135,0.12)]
        "
      >
        <div
          className="
            w-full h-full
            px-6 sm:px-10 lg:px-16
            flex items-center justify-between
          "
        >
          {/* Logo */}
          <Link
            to="/"
            className="flex items-center shrink-0 no-underline"
            onClick={() => setIsOpen(false)}
          >
            <img
              src="/logo.png"
              alt="SkillSprint Technologies Logo"
              className="h-12 sm:h-14 w-auto object-contain"
            />
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center gap-10 lg:gap-14">
            {navLinks.map((link) => (
              <NavLink
                key={link.path}
                to={link.path}
                className={({ isActive }) =>
                  `
                    relative text-[15px] font-semibold tracking-wide
                    transition-all duration-200 no-underline
                    ${
                      isActive
                        ? "text-[#374b82]"
                        : "text-[#24304a]/80 hover:text-[#374b82]"
                    }
                  `
                }
              >
                {({ isActive }) => (
                  <>
                    {link.name}
                    <span
                      className={`
                        absolute left-0 -bottom-2 h-[2px] rounded-full
                        bg-[#374b82] transition-all duration-300
                        ${isActive ? "w-full opacity-100" : "w-0 opacity-0"}
                      `}
                    />
                  </>
                )}
              </NavLink>
            ))}
          </div>

          {/* CTA + Mobile Toggle */}
          <div className="flex items-center gap-4 shrink-0">
            <Link
              to="/contact"
              className="
                hidden md:inline-flex
                items-center justify-center
                px-7 py-3
                rounded-xl
                text-sm font-semibold
                text-white no-underline
                bg-[#374b82]
                border border-[#374b82]/20
                shadow-[0_12px_30px_rgba(55,75,130,0.25)]
                hover:bg-[#2f3f70]
                hover:-translate-y-0.5
                active:scale-95
                transition-all duration-300
              "
            >
              Get Started
            </Link>

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
              bg-white/80
              backdrop-blur-2xl
              border border-white/40
              shadow-[0_20px_50px_rgba(55,75,130,0.18)]
              p-4
              flex flex-col gap-2
            "
          >
            {navLinks.map((link) => (
              <NavLink
                key={link.path}
                to={link.path}
                onClick={() => setIsOpen(false)}
                className={({ isActive }) =>
                  `
                    px-4 py-3 rounded-xl
                    text-base font-semibold no-underline
                    transition-all duration-200
                    ${
                      isActive
                        ? "bg-[#374b82]/10 text-[#374b82]"
                        : "text-[#24304a]/80 hover:bg-[#374b82]/5 hover:text-[#374b82]"
                    }
                  `
                }
              >
                {link.name}
              </NavLink>
            ))}

            <Link
              to="/contact"
              onClick={() => setIsOpen(false)}
              className="
    mt-2 w-full
    text-center
    px-6 py-3
    bg-[#374b82]
    !text-white
    font-semibold
    no-underline
    rounded-xl
    shadow-[0_12px_30px_rgba(55,75,130,0.25)]
    hover:bg-[#2f3f70]
    hover:!text-white
    active:scale-95
    transition-all
  "
              style={{ color: "#ffffff" }}
            >
              Get Started
            </Link>
          </div>
        </div>
      </nav>
    </header>
  );
};

export default Header;
