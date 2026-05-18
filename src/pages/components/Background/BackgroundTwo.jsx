const BackgroundTwo = () => {
  return (
    <div
      className="absolute inset-0 pointer-events-none overflow-hidden bg-[#eef3ff]"
      aria-hidden="true"
    >
      {/* Base starts with same shade as BG1 bottom */}
      <div className="absolute inset-0 bg-[linear-gradient(180deg,#d8e1f4_0%,#eef3ff_45%,#f8fbff_100%)]" />

      {/* Grid */}
      <div
        className="absolute inset-0 opacity-[0.28]"
        style={{
          backgroundImage: `
            linear-gradient(rgba(55,75,130,0.22) 1px, transparent 1px),
            linear-gradient(90deg, rgba(55,75,130,0.22) 1px, transparent 1px)
          `,
          backgroundSize: "42px 42px",
        }}
      />

      {/* Left top continuous dark shade */}
      <div className="absolute -top-48 -left-48 h-[620px] w-[620px] rounded-full bg-[#1f2937]/22 blur-[130px]" />

      {/* Right top blue shade */}
      <div className="absolute -top-40 -right-40 h-[620px] w-[620px] rounded-full bg-[#374b82]/16 blur-[140px]" />

      {/* Soft center light */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_55%_65%,rgba(255,255,255,0.62),rgba(255,255,255,0.22),transparent_72%)]" />
    </div>
  );
};

export default BackgroundTwo;
