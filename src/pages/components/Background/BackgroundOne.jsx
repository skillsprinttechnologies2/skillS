import React from "react";
import FloatingShapes from "./FloatingShapes";

const Background = () => {
  return (
    <div
      className="absolute inset-0 pointer-events-none overflow-hidden bg-[#f4f7ff]"
      aria-hidden="true"
    >
      {/* Base gradient */}
      <div className="absolute inset-0 bg-[linear-gradient(135deg,#f7f9ff_0%,#eef3ff_45%,#f8fbff_100%)]" />

      {/* Soft ambient glows */}
      <div className="absolute -top-40 -left-32 h-[560px] w-[560px] rounded-full bg-[#374b82]/[0.10] blur-[140px]" />
      <div className="absolute top-[25%] -right-40 h-[620px] w-[620px] rounded-full bg-[#5b7cfa]/[0.09] blur-[150px]" />
      <div className="absolute bottom-[10%] left-[20%] h-[480px] w-[480px] rounded-full bg-[#dbe7ff]/55 blur-[120px]" />

      {/* Grid - lighter so 3D shapes show */}
      <div
        className="absolute inset-0 opacity-[0.18]"
        style={{
          backgroundImage: `
            linear-gradient(rgba(55,75,130,0.20) 1px, transparent 1px),
            linear-gradient(90deg, rgba(55,75,130,0.20) 1px, transparent 1px)
          `,
          backgroundSize: "48px 48px",
        }}
      />

      {/* Light fade only, not hiding shapes */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_18%,rgba(255,255,255,0.34),rgba(255,255,255,0.08),transparent_70%)]" />

      {/* Big 3D shapes */}
      <FloatingShapes />

      {/* Bottom smoothing */}
      <div className="absolute inset-x-0 bottom-0 h-32 bg-gradient-to-t from-[#f8fbff]/80 to-transparent" />
    </div>
  );
};

export default Background;
