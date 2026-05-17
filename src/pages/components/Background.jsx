const Background = () => {
  return (
    <div className="absolute inset-0 pointer-events-none overflow-hidden">
      {/* Base gradient wash */}
      <div className="absolute inset-0 bg-gradient-to-br from-[#f6f8ff] via-[#eef3ff] to-white" />

      {/* Stronger dotted pattern */}
      <div
        className="absolute inset-0 opacity-[0.28]"
        style={{
          backgroundImage: `radial-gradient(#374b82 1.15px, transparent 1.15px)`,
          backgroundSize: "28px 28px",
        }}
      />

      {/* Soft blue glows */}
      <div className="absolute top-[-8%] left-[-6%] w-[520px] h-[520px] rounded-full bg-[#374b82]/12 blur-[120px]" />

      <div className="absolute bottom-[-10%] right-[-6%] w-[700px] h-[700px] rounded-full bg-[#374b82]/16 blur-[150px]" />

      {/* Extra center depth */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(55,75,130,0.08),transparent_55%)]" />
    </div>
  );
};

export default Background;
