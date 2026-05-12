import { useState } from "react";
import { Link, NavLink } from "react-router-dom";
import HamburgerToggle from "./HamburgerToggle";

export default function Header() {
  const [menuOpen, setMenuOpen] = useState(false);

  const navItems = [
    { to: "/", label: "Home" },
    { to: "/about", label: "About" },
    { to: "/services", label: "Services" },
    { to: "/pricing", label: "Plans" },
    { to: "/contact", label: "Contact" },
  ];

  return (
    <header
      className="
    fixed top-0 left-0 w-full z-50
    bg-white/10
    backdrop-blur-xl
    border-b border-white/10
    shadow-[0_8px_32px_0_rgba(31,38,135,0.15)]
    supports-[backdrop-filter]:bg-white/5
  "
    >
      <div className="w-full">
        <nav
          className="
        flex items-center justify-between
        h-20 px-4 sm:px-8 lg:px-16
      "
        >
          {/* Logo - Full Left */}
          <Link to="/" className="flex items-center shrink-0">
            <img
              src="/logo.png"
              alt="SkillSprint Logo"
              className="
            h-10 sm:h-12 lg:h-14
            w-auto
            object-contain
          "
            />
          </Link>

          {/* Center Navigation */}
          <div className="hidden md:flex items-center gap-16">
            {navItems.map((item) => (
              <NavLink
                key={item.to}
                to={item.to}
                className={({ isActive }) =>
                  `text-[15px] font-semibold transition-all duration-200 no-underline ${
                    isActive
                      ? "!text-white"
                      : "!text-white/90 hover:!text-[#8ecae6]"
                  }`
                }
              >
                {item.label}
              </NavLink>
            ))}
          </div>

          {/* Right Side */}
          <div className="flex items-center gap-6 shrink-0">
            <Link
              to="/contact"
              className="
            hidden md:inline-flex
            items-center justify-center
            px-7 py-3
            rounded-xl
            text-sm font-semibold
            !text-white
            bg-white/10
            border border-white/20
            backdrop-blur-md
            hover:bg-white/20
            transition-all duration-300
            shadow-lg
            no-underline
          "
            >
              Get Started
            </Link>

            {/* Mobile Toggle */}
            <div className="md:hidden">
              <HamburgerToggle
                isOpen={menuOpen}
                toggleMenu={() => setMenuOpen((prev) => !prev)}
              />
            </div>
          </div>
        </nav>
      </div>
    </header>
  );
}
