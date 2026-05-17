import React, { useEffect, useRef, useState } from "react";

// --- Lightweight Interactive Network Globe ---
function NetworkGlobe({ active }) {
  const canvasRef = useRef(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const prefersReducedMotion = window.matchMedia(
      "(prefers-reduced-motion: reduce)",
    ).matches;

    const ctx = canvas.getContext("2d", { alpha: true });
    const BRAND = "#374b82";

    let w = 0;
    let h = 0;
    let dpr = 1;
    let raf = null;

    const isSmallDevice = window.innerWidth < 768;
    const POINTS = isSmallDevice ? 70 : 100;

    const state = {
      rx: -0.25,
      ry: 0.65,
      tx: -0.25,
      ty: 0.65,
    };

    const points = [];

    for (let i = 0; i < POINTS; i++) {
      const t = i / (POINTS - 1);
      const y = 1 - 2 * t;
      const r = Math.sqrt(Math.max(0, 1 - y * y));
      const phi = i * 2.399963229728653;

      points.push({
        x: Math.cos(phi) * r,
        y,
        z: Math.sin(phi) * r,
      });
    }

    const neighbors = points.map((p1, i) => {
      const dists = points
        .map((p2, j) => {
          if (i === j) return [j, Infinity];

          const d =
            Math.pow(p1.x - p2.x, 2) +
            Math.pow(p1.y - p2.y, 2) +
            Math.pow(p1.z - p2.z, 2);

          return [j, d];
        })
        .sort((a, b) => a[1] - b[1]);

      return dists.slice(0, isSmallDevice ? 2 : 3).map((x) => x[0]);
    });

    const resize = () => {
      const rect = canvas.getBoundingClientRect();

      w = rect.width;
      h = rect.height;
      dpr = Math.min(1.75, window.devicePixelRatio || 1);

      canvas.width = Math.floor(w * dpr);
      canvas.height = Math.floor(h * dpr);

      ctx.setTransform(dpr, 0, 0, dpr, 0, 0);
    };

    const rotate = (p, rx, ry) => {
      const cx = Math.cos(rx);
      const sx = Math.sin(rx);
      const cy = Math.cos(ry);
      const sy = Math.sin(ry);

      const y1 = p.y * cx - p.z * sx;
      const z1 = p.y * sx + p.z * cx;

      const x2 = p.x * cy + z1 * sy;
      const z2 = -p.x * sy + z1 * cy;

      return { x: x2, y: y1, z: z2 };
    };

    const project = (p, scale, fov) => {
      const s = fov / (fov - p.z);

      return {
        x: p.x * s * scale,
        y: p.y * s * scale,
        z: p.z,
      };
    };

    const draw = () => {
      if (!active) return;

      ctx.clearRect(0, 0, w, h);

      state.rx += (state.tx - state.rx) * 0.08;
      state.ry += (state.ty - state.ry) * 0.08;

      if (!prefersReducedMotion) {
        state.ty += isSmallDevice ? 0.0007 : 0.001;
      }

      const cx = w * 0.5;
      const cy = h * 0.5;
      const scale = Math.min(w, h) * 0.34;
      const fov = 2.5;

      const projected = points.map((p, i) => {
        const rot = rotate(p, state.rx, state.ry);
        const proj = project(rot, scale, fov);

        return {
          i,
          x: cx + proj.x,
          y: cy + proj.y,
          z: proj.z,
        };
      });

      ctx.lineWidth = 1;

      for (const p of projected) {
        for (const nIdx of neighbors[p.i]) {
          const n = projected[nIdx];
          if (n.i < p.i) continue;

          const alpha = 0.08 + 0.25 * (1 - Math.abs((p.z + n.z) * 0.5));

          ctx.strokeStyle = `rgba(55, 75, 130, ${alpha})`;
          ctx.beginPath();
          ctx.moveTo(p.x, p.y);
          ctx.lineTo(n.x, n.y);
          ctx.stroke();
        }
      }

      projected.sort((a, b) => a.z - b.z);

      for (const p of projected) {
        const depth = (p.z + 1) / 2;
        const size = 1.4 + (1 - depth) * 2.3;

        ctx.fillStyle = BRAND;
        ctx.globalAlpha = 0.28 + (1 - depth) * 0.62;

        ctx.beginPath();
        ctx.arc(p.x, p.y, size, 0, Math.PI * 2);
        ctx.fill();
      }

      ctx.globalAlpha = 1;

      if (!prefersReducedMotion) {
        raf = requestAnimationFrame(draw);
      }
    };

    const handleMove = (e) => {
      if (prefersReducedMotion) return;

      const rect = canvas.getBoundingClientRect();

      const clientX = e.touches ? e.touches[0].clientX : e.clientX;
      const clientY = e.touches ? e.touches[0].clientY : e.clientY;

      const x = clientX - rect.left;
      const y = clientY - rect.top;

      state.tx = -0.35 + (y / rect.height) * 0.5;
      state.ty = 0.65 + (x / rect.width) * 0.8;
    };

    window.addEventListener("resize", resize);
    canvas.addEventListener("mousemove", handleMove);
    canvas.addEventListener("touchmove", handleMove, { passive: true });

    resize();
    draw();

    return () => {
      window.removeEventListener("resize", resize);
      canvas.removeEventListener("mousemove", handleMove);
      canvas.removeEventListener("touchmove", handleMove);
      cancelAnimationFrame(raf);
    };
  }, [active]);

  return (
    <canvas
      ref={canvasRef}
      className="block w-full h-full"
      aria-hidden="true"
    />
  );
}

// --- Main Hero Section ---
export default function HeroSection() {
  const [inView, setInView] = useState(false);
  const sectionRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => setInView(entry.isIntersecting),
      {
        threshold: 0.15,
        rootMargin: "80px",
      },
    );

    if (sectionRef.current) observer.observe(sectionRef.current);

    return () => observer.disconnect();
  }, []);

  return (
    <main className="w-full overflow-x-hidden font-sans selection:bg-[#374b82]/20">
      <section
        ref={sectionRef}
        id="home"
        aria-labelledby="hero-heading"
        className="
    relative
    w-full
    min-h-screen
    flex
    items-center
    justify-center
    pt-28
    sm:pt-32
    lg:pt-24
    pb-16
    sm:pb-20
    lg:pb-20
    overflow-hidden
  "
        style={{
          background:
            "linear-gradient(135deg, #f6f8ff 0%, #eef3ff 45%, #ffffff 100%)",
        }}
      >
        {/* Background */}
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

        {/* Content Wrapper */}
        <div
          className="
        relative
        z-10
        w-full
        max-w-[1600px]
        mx-auto
        px-5
        sm:px-8
        lg:px-10
        xl:px-16
        2xl:px-20
      "
        >
          <div
            className="
          w-full
          flex
          flex-col
          lg:flex-row
          items-center
          justify-between
          gap-12
          lg:gap-8
          xl:gap-12
          2xl:gap-14
        "
          >
            {/* Left Content */}
            <div
              className="
            w-full
            lg:w-[46%]
            xl:w-[42%]
            2xl:w-[40%]
            text-center
            lg:text-left
            space-y-6
            shrink-0
          "
            >
              <div
                className="
              inline-flex
              items-center
              gap-2
              px-4
              py-1.5
              rounded-full
              bg-[#374b82]/10
              border
              border-[#374b82]/20
              text-[#374b82]
              text-xs
              sm:text-sm
              font-semibold
              uppercase
              tracking-[0.16em]
            "
              >
                <span className="w-2 h-2 rounded-full bg-[#374b82] animate-pulse" />
                Next-Gen IT Solutions
              </div>

              <div className="space-y-4">
                <h1
                  id="hero-heading"
                  className="
                text-[2.2rem]
                sm:text-[2.8rem]
                md:text-[3.25rem]
                lg:text-[2.85rem]
                xl:text-[3.35rem]
                2xl:text-[3.7rem]
                font-bold
                text-[#111827]
                leading-[1.05]
                tracking-tight
              "
                >
                  <span className="block xl:whitespace-nowrap">
                    Smart IT Solutions For
                  </span>
                  <span className="block text-[#374b82] xl:whitespace-nowrap">
                    Growing Businesses
                  </span>
                </h1>

                <p
                  className="
                text-[15px]
                sm:text-base
                lg:text-[17px]
                text-[#4b5563]
                max-w-xl
                mx-auto
                lg:mx-0
                leading-relaxed
              "
                >
                  Transform your business with reliable, scalable, and modern
                  technology solutions built for{" "}
                  <strong className="text-[#374b82] font-semibold">
                    speed
                  </strong>
                  ,{" "}
                  <strong className="text-[#374b82] font-semibold">
                    security
                  </strong>
                  , and{" "}
                  <strong className="text-[#374b82] font-semibold">
                    growth
                  </strong>
                  .
                </p>
              </div>

              <div className="flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-4 pt-1">
                <a
                  href="#contact"
                  aria-label="Schedule a free consultation with SkillSprint Technologies"
                  className="
                w-full
                sm:w-auto
                min-w-[240px]
                px-7
                py-4
                bg-[#374b82]
                !text-white
                font-semibold
                rounded-xl
                shadow-lg
                shadow-[#374b82]/30
                hover:bg-[#2f3f70]
                transition-colors
                text-center
                no-underline
              "
                >
                  Schedule a Free Consultation
                </a>

                <a
                  href="#services"
                  aria-label="Explore SkillSprint Technologies services"
                  className="
                w-full
                sm:w-auto
                min-w-[180px]
                px-7
                py-4
                bg-white/80
                !text-[#374b82]
                font-semibold
                rounded-xl
                border
                border-[#374b82]/25
                hover:bg-[#374b82]/5
                hover:border-[#374b82]
                transition-colors
                text-center
                no-underline
              "
                >
                  Explore Services
                </a>
              </div>

              <div className="flex flex-wrap justify-center lg:justify-start gap-x-6 gap-y-3 pt-2">
                {["Fast Delivery", "Secure Solutions", "Scalable Systems"].map(
                  (text) => (
                    <div
                      key={text}
                      className="flex items-center gap-2 text-sm sm:text-base font-medium text-[#4b5563]"
                    >
                      <svg
                        className="w-5 h-5 text-[#374b82] shrink-0"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                        aria-hidden="true"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth="2.5"
                          d="M5 13l4 4L19 7"
                        />
                      </svg>
                      {text}
                    </div>
                  ),
                )}
              </div>
            </div>

            {/* Right Visual */}
            <div
              className="
            relative
            w-full
            lg:w-[50%]
            xl:w-[55%]
            2xl:w-[57%]
            flex
            justify-center
            lg:justify-end
            overflow-visible
          "
            >
              <div
                className="
              relative
              w-full
              max-w-[340px]
              sm:max-w-[430px]
              md:max-w-[500px]
              lg:max-w-[480px]
              xl:max-w-[560px]
              2xl:max-w-[590px]
              aspect-square
              rounded-[2rem]
              bg-white/45
              backdrop-blur-xl
              border
              border-[#374b82]/15
              shadow-[0_28px_80px_rgba(55,75,130,0.14)]
              overflow-hidden
              transition-transform
              duration-500
              hover:scale-[1.01]
            "
              >
                <div className="absolute inset-0 z-0 scale-[0.84] sm:scale-[0.88] lg:scale-[0.82] xl:scale-[0.88] 2xl:scale-[0.88] origin-center">
                  <NetworkGlobe active={inView} />
                </div>

                <div className="absolute inset-0 pointer-events-none bg-gradient-to-tr from-white/35 via-transparent to-transparent" />
              </div>

              <div className="absolute -top-5 right-8 w-20 h-20 bg-[#374b82]/10 rounded-full blur-2xl animate-pulse pointer-events-none" />

              <div
                className="absolute -bottom-6 left-8 w-24 h-24 bg-[#374b82]/10 rounded-full blur-3xl animate-bounce pointer-events-none"
                style={{ animationDuration: "6s" }}
              />
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
