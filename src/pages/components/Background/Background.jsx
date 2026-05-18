import React from "react";

const Background = () => {
  return (
    <div
      className="fixed inset-0 z-0 pointer-events-none overflow-hidden bg-[#f4f7ff]"
      aria-hidden="true"
    >
      {/* One static full-site background */}
      <div className="absolute inset-0 bg-[linear-gradient(135deg,#f7f9ff_0%,#eef3ff_45%,#f8fbff_100%)]" />

      {/* Static soft glows */}
      <div className="absolute -top-40 -left-32 h-[560px] w-[560px] rounded-full bg-[#374b82]/[0.10] blur-[140px]" />
      <div className="absolute top-[25%] -right-40 h-[620px] w-[620px] rounded-full bg-[#5b7cfa]/[0.08] blur-[150px]" />
      <div className="absolute bottom-[8%] left-[18%] h-[520px] w-[520px] rounded-full bg-[#dbe7ff]/60 blur-[130px]" />

      {/* Static grid */}
      <div
        className="absolute inset-0 opacity-[0.14]"
        style={{
          backgroundImage: `
            linear-gradient(rgba(55,75,130,0.18) 1px, transparent 1px),
            linear-gradient(90deg, rgba(55,75,130,0.18) 1px, transparent 1px)
          `,
          backgroundSize: "48px 48px",
        }}
      />

      {/* Static premium objects */}
      <div className="absolute top-[16%] right-[9%] h-28 w-28 rounded-[2rem] rotate-12 bg-white/50 border border-[#374b82]/10 shadow-[0_30px_80px_rgba(55,75,130,0.12)] backdrop-blur-sm" />

      <div className="absolute top-[42%] left-[7%] h-24 w-24 rounded-full bg-white/45 border border-[#374b82]/10 shadow-[0_25px_70px_rgba(55,75,130,0.10)] backdrop-blur-sm" />

      <div className="absolute bottom-[18%] right-[18%] h-32 w-32 rounded-[2.5rem] -rotate-12 bg-[#374b82]/[0.08] border border-[#374b82]/10 shadow-[0_30px_90px_rgba(55,75,130,0.12)] backdrop-blur-sm" />

      <div className="absolute bottom-[32%] left-[28%] h-16 w-16 rounded-2xl rotate-45 bg-white/55 border border-[#374b82]/10 shadow-[0_20px_60px_rgba(55,75,130,0.10)] backdrop-blur-sm" />

      {/* Light wash */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_18%,rgba(255,255,255,0.36),rgba(255,255,255,0.10),transparent_70%)]" />
    </div>
  );
};

export default Background;
