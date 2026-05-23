import React, { useEffect, useRef, useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
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
  const menuRef = useRef(null);

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

      setTimeout(scroll, 180);
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
      setScrolled(window.scrollY > 40);

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

  useEffect(() => {
    const handleOutsideClick = (e) => {
      if (menuRef.current && !menuRef.current.contains(e.target)) {
        setIsOpen(false);
      }
    };

    if (isOpen) {
      document.addEventListener("mousedown", handleOutsideClick);
    }

    return () => document.removeEventListener("mousedown", handleOutsideClick);
  }, [isOpen]);

  useEffect(() => {
    setIsOpen(false);
  }, [location.pathname]);

  const isActiveLink = (link) => {
    if (link.type === "page") {
      return location.pathname === link.target;
    }

    return location.pathname === "/" && activeSection === link.target;
  };

  const handleNavClick = (link) => {
    if (link.type === "page") {
      goToPageTop(link.target);
      return;
    }

    scrollToSection(link.target);
  };

  return (
    <header
      ref={menuRef}
      className={`
        fixed left-1/2 -translate-x-1/2 z-[9999]
        w-[92%] max-w-[1280px]
        transition-all duration-300 ease-out
        ${scrolled ? "top-3 h-[68px]" : "top-5 h-[76px]"}
      `}
    >
      <nav
        className={`
          relative w-full h-full
          rounded-[28px]
          transition-all duration-300 ease-out
          ${
            scrolled || isOpen
              ? `
                bg-white/80
                backdrop-blur-2xl
                border border-white/70
                shadow-[0_18px_60px_rgba(55,75,130,0.16)]
              `
              : `
                bg-transparent
                backdrop-blur-none
                border border-transparent
                shadow-none
              `
          }
        `}
        aria-label="Main navigation"
      >
        <div className="w-full h-full px-4 sm:px-6 lg:px-8 flex items-center justify-between">
          {/* Logo */}
          <button
            type="button"
            onClick={() => scrollToSection("home")}
            className="flex items-center shrink-0 bg-transparent border-0 p-0 cursor-pointer"
            aria-label="Go to homepage"
          >
            <img
              src="/logo.png"
              alt="SkillSprint Technologies"
              className={`
                w-auto object-contain transition-all duration-300
                ${scrolled ? "h-10 sm:h-11" : "h-11 sm:h-12"}
              `}
            />
          </button>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex absolute left-1/2 -translate-x-1/2 items-center gap-1">
            {navLinks.map((link) => {
              const active = isActiveLink(link);

              return (
                <button
                  key={link.name}
                  type="button"
                  onClick={() => handleNavClick(link)}
                  className={`
                    relative px-4 py-2
                    text-sm font-semibold
                    rounded-xl
                    transition-all duration-200
                    bg-transparent border-0 cursor-pointer
                    ${
                      active
                        ? "text-[#374b82]"
                        : "text-[#24304a]/75 hover:text-[#374b82] hover:bg-[#374b82]/5"
                    }
                  `}
                >
                  {link.name}

                  <span
                    className={`
                      absolute bottom-1 left-1/2 -translate-x-1/2
                      h-0.5 rounded-full bg-[#374b82]
                      transition-all duration-300
                      ${active ? "w-4 opacity-100" : "w-0 opacity-0"}
                    `}
                  />
                </button>
              );
            })}
          </div>

          {/* CTA + Mobile Toggle */}
          <div className="flex items-center gap-3 shrink-0">
            <button
              type="button"
              onClick={() => goToPageTop("/contact")}
              className="
                hidden lg:inline-flex
                items-center justify-center
                px-5 py-2.5
                bg-[#374b82]
                text-white
                text-sm font-semibold
                rounded-2xl
                shadow-[0_8px_24px_rgba(55,75,130,0.30)]
                hover:bg-[#2f3f70]
                hover:shadow-[0_12px_30px_rgba(55,75,130,0.38)]
                transition-all duration-200
                active:scale-95
                border-0 cursor-pointer
              "
            >
              Get Started
            </button>

            <div className="lg:hidden flex items-center justify-center">
              <HamburgerToggle
                isOpen={isOpen}
                toggleMenu={() => setIsOpen((prev) => !prev)}
              />
            </div>
          </div>
        </div>

        {/* Mobile Menu menu */}
        <div
          id="mobile-menu"
          className={`
            lg:hidden
            absolute top-[calc(100%+10px)] left-0 right-0
            rounded-2xl overflow-hidden
            transition-all duration-300 ease-out origin-top
            bg-white/92 backdrop-blur-2xl
            border border-white/70
            shadow-[0_20px_60px_rgba(55,75,130,0.20)]
            ${
              isOpen
                ? "opacity-100 scale-y-100 translate-y-0 pointer-events-auto"
                : "opacity-0 scale-y-95 -translate-y-2 pointer-events-none"
            }
          `}
          aria-hidden={!isOpen}
        >
          <div className="p-4 space-y-1">
            {navLinks.map((link) => {
              const active = isActiveLink(link);

              return (
                <button
                  key={link.name}
                  type="button"
                  onClick={() => handleNavClick(link)}
                  className={`
                    w-full text-left
                    px-4 py-3.5
                    rounded-xl
                    text-base font-semibold
                    transition-colors duration-200
                    bg-transparent border-0 cursor-pointer
                    ${
                      active
                        ? "bg-[#374b82]/10 text-[#374b82]"
                        : "text-[#24304a]/80 hover:bg-[#374b82]/6 hover:text-[#374b82]"
                    }
                  `}
                >
                  {link.name}
                </button>
              );
            })}

            <div className="pt-2 pb-1">
              <button
                type="button"
                onClick={() => goToPageTop("/contact")}
                className="
                  block w-full text-center
                  px-6 py-3.5
                  bg-[#374b82]
                  text-white
                  font-semibold
                  rounded-2xl
                  shadow-[0_8px_24px_rgba(55,75,130,0.28)]
                  hover:bg-[#2f3f70]
                  transition-all
                  border-0 cursor-pointer
                "
              >
                Get Started
              </button>
            </div>
          </div>
        </div>
      </nav>
    </header>
  );
};

export default Header;
// import React, { useEffect, useRef, useState } from "react";
// import { useLocation, useNavigate } from "react-router-dom";
// import { Menu, X } from "react-feather";

// const navLinks = [
//   { name: "Home", target: "home", type: "section" },
//   { name: "About", target: "about", type: "section" },
//   { name: "Services", target: "/services", type: "page" },
//   { name: "Case Studies", target: "case-studies", type: "section" },
//   { name: "Contact", target: "/contact", type: "page" },
// ];

// const Header = () => {
//   const [isOpen, setIsOpen] = useState(false);
//   const [scrolled, setScrolled] = useState(false);
//   const [activeSection, setActiveSection] = useState("home");

//   const location = useLocation();
//   const navigate = useNavigate();
//   const menuRef = useRef(null);

//   const scrollToTop = () => {
//     setTimeout(() => {
//       window.scrollTo({
//         top: 0,
//         left: 0,
//         behavior: "smooth",
//       });
//     }, 80);
//   };

//   const scrollToSection = (sectionId) => {
//     setIsOpen(false);

//     const scroll = () => {
//       if (sectionId === "home") {
//         window.scrollTo({
//           top: 0,
//           left: 0,
//           behavior: "smooth",
//         });
//         return;
//       }

//       const section = document.getElementById(sectionId);
//       if (!section) return;

//       const yOffset = sectionId === "about" ? -60 : -90;
//       const y = section.getBoundingClientRect().top + window.scrollY + yOffset;

//       window.scrollTo({
//         top: y,
//         left: 0,
//         behavior: "smooth",
//       });
//     };

//     if (location.pathname !== "/") {
//       navigate("/", { state: { scrollTo: sectionId } });
//       setTimeout(scroll, 180);
//       return;
//     }

//     scroll();
//   };

//   const goToPageTop = (path) => {
//     setIsOpen(false);

//     if (location.pathname === path) {
//       scrollToTop();
//       return;
//     }

//     navigate(path);

//     setTimeout(() => {
//       window.scrollTo({
//         top: 0,
//         left: 0,
//         behavior: "smooth",
//       });
//     }, 100);
//   };

//   useEffect(() => {
//     const handleScroll = () => {
//       setScrolled(window.scrollY > 40);

//       if (location.pathname !== "/") return;

//       const sectionIds = ["home", "about", "case-studies"];

//       for (const id of sectionIds) {
//         const section = document.getElementById(id);
//         if (!section) continue;

//         const rect = section.getBoundingClientRect();

//         if (rect.top <= 120 && rect.bottom >= 120) {
//           setActiveSection(id);
//           break;
//         }
//       }
//     };

//     handleScroll();

//     window.addEventListener("scroll", handleScroll, { passive: true });

//     return () => window.removeEventListener("scroll", handleScroll);
//   }, [location.pathname]);

//   useEffect(() => {
//     const handleOutsideClick = (e) => {
//       if (menuRef.current && !menuRef.current.contains(e.target)) {
//         setIsOpen(false);
//       }
//     };

//     if (isOpen) {
//       document.addEventListener("mousedown", handleOutsideClick);
//     }

//     return () => document.removeEventListener("mousedown", handleOutsideClick);
//   }, [isOpen]);

//   useEffect(() => {
//     setIsOpen(false);
//   }, [location.pathname]);

//   const isActiveLink = (link) => {
//     if (link.type === "page") {
//       return location.pathname === link.target;
//     }

//     return location.pathname === "/" && activeSection === link.target;
//   };

//   const handleNavClick = (link) => {
//     if (link.type === "page") {
//       goToPageTop(link.target);
//       return;
//     }

//     scrollToSection(link.target);
//   };

//   return (
//     <header className="fixed top-0 left-0 right-0 z-[9999] pointer-events-none bg-transparent">
//       <nav
//         ref={menuRef}
//         className={`
//           pointer-events-auto
//           fixed left-1/2 -translate-x-1/2
//           w-[92%] max-w-[1280px]
//           rounded-[28px]
//           bg-white/80
//           backdrop-blur-2xl
//           border border-white/70
//           transition-all duration-300 ease-out
//           ${
//             scrolled
//               ? "top-3 h-[68px] shadow-[0_22px_70px_rgba(55,75,130,0.22)]"
//               : "top-5 h-[76px] shadow-[0_18px_60px_rgba(55,75,130,0.16)]"
//           }
//         `}
//         aria-label="Main navigation"
//       >
//         <div className="w-full h-full px-4 sm:px-6 lg:px-8 flex items-center justify-between">
//           {/* Logo */}
//           <button
//             type="button"
//             onClick={() => scrollToSection("home")}
//             className="flex items-center shrink-0 bg-transparent border-0 p-0 cursor-pointer"
//             aria-label="Go to homepage"
//           >
//             <img
//               src="/logo.png"
//               alt="SkillSprint Technologies"
//               className={`
//                 w-auto object-contain transition-all duration-300
//                 ${scrolled ? "h-10 sm:h-11" : "h-11 sm:h-12"}
//               `}
//             />
//           </button>

//           {/* Desktop Navigation */}
//           <div className="hidden lg:flex absolute left-1/2 -translate-x-1/2 items-center gap-1">
//             {navLinks.map((link) => {
//               const active = isActiveLink(link);

//               return (
//                 <button
//                   key={link.name}
//                   type="button"
//                   onClick={() => handleNavClick(link)}
//                   className={`
//                     relative px-4 py-2
//                     text-sm font-semibold
//                     rounded-xl
//                     transition-all duration-200
//                     bg-transparent border-0 cursor-pointer
//                     ${
//                       active
//                         ? "text-[#374b82]"
//                         : "text-[#24304a]/75 hover:text-[#374b82] hover:bg-[#374b82]/5"
//                     }
//                   `}
//                 >
//                   {link.name}

//                   <span
//                     className={`
//                       absolute bottom-1 left-1/2 -translate-x-1/2
//                       h-0.5 rounded-full bg-[#374b82]
//                       transition-all duration-300
//                       ${active ? "w-4 opacity-100" : "w-0 opacity-0"}
//                     `}
//                   />
//                 </button>
//               );
//             })}
//           </div>

//           {/* CTA + Mobile Toggle */}
//           <div className="flex items-center gap-3 shrink-0">
//             <button
//               type="button"
//               onClick={() => goToPageTop("/contact")}
//               className="
//                 hidden lg:inline-flex
//                 items-center justify-center
//                 px-5 py-2.5
//                 bg-[#374b82]
//                 text-white
//                 text-sm font-semibold
//                 rounded-2xl
//                 shadow-[0_8px_24px_rgba(55,75,130,0.30)]
//                 hover:bg-[#2f3f70]
//                 hover:shadow-[0_12px_30px_rgba(55,75,130,0.38)]
//                 transition-all duration-200
//                 active:scale-95
//                 border-0 cursor-pointer
//               "
//             >
//               Get Started
//             </button>

//             <button
//               type="button"
//               onClick={() => setIsOpen((prev) => !prev)}
//               className={`
//                 lg:hidden
//                 w-10 h-10
//                 flex items-center justify-center
//                 rounded-xl
//                 transition-colors duration-200
//                 border-0 cursor-pointer
//                 ${
//                   isOpen
//                     ? "text-[#374b82] bg-[#374b82]/10"
//                     : "text-[#24304a] hover:bg-[#374b82]/8"
//                 }
//               `}
//               aria-label={isOpen ? "Close menu" : "Open menu"}
//               aria-expanded={isOpen}
//               aria-controls="mobile-menu"
//             >
//               {isOpen ? <X size={22} /> : <Menu size={22} />}
//             </button>
//           </div>
//         </div>

//         {/* Mobile Menu */}
//         <div
//           id="mobile-menu"
//           className={`
//             lg:hidden
//             absolute top-[calc(100%+10px)] left-0 right-0
//             rounded-2xl overflow-hidden
//             transition-all duration-300 ease-out origin-top
//             bg-white/95 backdrop-blur-2xl
//             border border-white/70
//             shadow-[0_20px_60px_rgba(55,75,130,0.20)]
//             ${
//               isOpen
//                 ? "opacity-100 scale-y-100 translate-y-0 pointer-events-auto"
//                 : "opacity-0 scale-y-95 -translate-y-2 pointer-events-none"
//             }
//           `}
//           aria-hidden={!isOpen}
//         >
//           <div className="p-4 space-y-1">
//             {navLinks.map((link) => {
//               const active = isActiveLink(link);

//               return (
//                 <button
//                   key={link.name}
//                   type="button"
//                   onClick={() => handleNavClick(link)}
//                   className={`
//                     w-full text-left
//                     px-4 py-3.5
//                     rounded-xl
//                     text-base font-semibold
//                     transition-colors duration-200
//                     bg-transparent border-0 cursor-pointer
//                     ${
//                       active
//                         ? "bg-[#374b82]/10 text-[#374b82]"
//                         : "text-[#24304a]/80 hover:bg-[#374b82]/6 hover:text-[#374b82]"
//                     }
//                   `}
//                 >
//                   {link.name}
//                 </button>
//               );
//             })}

//             <div className="pt-2 pb-1">
//               <button
//                 type="button"
//                 onClick={() => goToPageTop("/contact")}
//                 className="
//                   block w-full text-center
//                   px-6 py-3.5
//                   bg-[#374b82]
//                   text-white
//                   font-semibold
//                   rounded-2xl
//                   shadow-[0_8px_24px_rgba(55,75,130,0.28)]
//                   hover:bg-[#2f3f70]
//                   transition-all
//                   border-0 cursor-pointer
//                 "
//               >
//                 Get Started
//               </button>
//             </div>
//           </div>
//         </div>
//       </nav>
//     </header>
//   );
// };

// export default Header;
