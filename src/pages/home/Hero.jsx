import React, { useEffect, useRef, useState } from "react";

/**
 * SkillSprint Technologies - Premium Corporate Hero
 * Fixed:
 * - Full hero content visible on smaller screens
 * - Globe no longer gets clipped
 * - Background decorations separated from content
 * - Removed fixed globe height
 */

// --- 3D Network Globe Component ---
function NetworkGlobe({ active }) {
  const canvasRef = useRef(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext("2d", { alpha: true });
    const BRAND = "#374b82";

    let w = 0;
    let h = 0;
    let dpr = 1;
    let raf = null;

    const state = {
      rx: -0.25,
      ry: 0.65,
      tx: -0.25,
      ty: 0.65,
    };

    const POINTS = 110;
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

      return dists.slice(0, 3).map((x) => x[0]);
    });

    const resize = () => {
      const rect = canvas.getBoundingClientRect();

      w = rect.width;
      h = rect.height;
      dpr = Math.min(2, window.devicePixelRatio || 1);

      canvas.width = w * dpr;
      canvas.height = h * dpr;

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
      state.ty += 0.001;

      const cx = w * 0.5;
      const cy = h * 0.5;
      const scale = Math.min(w, h) * 0.32;
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

          const alpha = 0.1 + 0.28 * (1 - Math.abs((p.z + n.z) * 0.5));

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
        const size = 1.5 + (1 - depth) * 2.4;

        ctx.fillStyle = BRAND;
        ctx.globalAlpha = 0.32 + (1 - depth) * 0.65;

        ctx.beginPath();
        ctx.arc(p.x, p.y, size, 0, Math.PI * 2);
        ctx.fill();
      }

      ctx.globalAlpha = 1;
      raf = requestAnimationFrame(draw);
    };

    const handleMove = (e) => {
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

  return <canvas ref={canvasRef} className="block w-full h-full" />;
}

// --- Main Hero Section ---
export default function HeroSection() {
  const [inView, setInView] = useState(false);
  const sectionRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => setInView(entry.isIntersecting),
      { threshold: 0.1 },
    );

    if (sectionRef.current) observer.observe(sectionRef.current);

    return () => observer.disconnect();
  }, []);

  return (
    <div className="w-full overflow-x-hidden font-sans selection:bg-[#374b82]/20">
      <section
        ref={sectionRef}
        className="
          relative
          w-full
          min-h-screen
          flex
          items-center
          justify-center
          pt-28
          pb-16
          overflow-hidden
        "
        style={{
          background:
            "linear-gradient(135deg, #f6f8ff 0%, #eef3ff 45%, #ffffff 100%)",
        }}
      >
        {/* Background Only */}
        <div className="absolute inset-0 pointer-events-none overflow-hidden">
          <div className="absolute top-[-10%] left-[-5%] w-[500px] h-[500px] rounded-full bg-[#374b82]/5 blur-[120px]" />

          <div className="absolute bottom-[-10%] right-[-5%] w-[600px] h-[600px] rounded-full bg-[#374b82]/10 blur-[150px]" />

          <div
            className="absolute inset-0 opacity-[0.12]"
            style={{
              backgroundImage: `radial-gradient(#374b82 1px, transparent 1px)`,
              backgroundSize: "32px 32px",
            }}
          />
        </div>

        {/* Actual Content */}
        <div
          className="
            relative
            z-10
            w-full
            max-w-7xl
            mx-auto
            px-6
            sm:px-10
            lg:px-16
            grid
            grid-cols-1
            lg:grid-cols-12
            gap-10
            lg:gap-14
            items-center
          "
        >
          {/* Left Content */}
          <div className="lg:col-span-6 text-center lg:text-left space-y-7">
            <div
              className="
                inline-flex
                items-center
                gap-2
                px-3
                py-1
                rounded-full
                bg-[#374b82]/10
                border
                border-[#374b82]/20
                text-[#374b82]
                text-xs
                font-semibold
                uppercase
                tracking-wider
              "
            >
              <span className="w-2 h-2 rounded-full bg-[#374b82] animate-pulse" />
              Next-Gen IT Solutions
            </div>

            <h1
              className="
                text-4xl
                md:text-5xl
                xl:text-6xl
                font-bold
                text-[#111827]
                leading-[1.1]
                tracking-tight
              "
            >
              Smart IT Solutions For <br />
              <span className="text-[#374b82]">Growing Businesses</span>
            </h1>

            <p className="text-lg text-[#4b5563] max-w-2xl mx-auto lg:mx-0 leading-relaxed">
              Transform your business with reliable, scalable, and modern
              technology solutions built for speed, security, and growth.
            </p>

            <div className="flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-4">
              <a
                href="#contact"
                className="
                  w-full
                  sm:w-auto
                  px-8
                  py-4
                  bg-[#374b82]
                  !text-white
                  font-semibold
                  rounded-xl
                  shadow-lg
                  shadow-[#374b82]/30
                  hover:bg-[#2f3f70]
                  hover:-translate-y-0.5
                  transition-all
                  text-center
                  no-underline
                "
              >
                Schedule a Free Consultation
              </a>

              <a
                href="#services"
                className="
                  w-full
                  sm:w-auto
                  px-8
                  py-4
                  bg-white
                  !text-[#374b82]
                  font-semibold
                  rounded-xl
                  border
                  border-[#374b82]/30
                  hover:bg-[#374b82]/5
                  hover:border-[#374b82]
                  transition-all
                  text-center
                  no-underline
                "
              >
                Explore Services
              </a>
            </div>

            <div className="flex flex-wrap justify-center lg:justify-start gap-6 pt-2">
              {["Fast Delivery", "Secure Solutions", "Scalable Systems"].map(
                (text) => (
                  <div
                    key={text}
                    className="flex items-center gap-2 text-sm font-medium text-gray-500"
                  >
                    <svg
                      className="w-5 h-5 text-[#374b82]"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
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
          <div className="lg:col-span-6 relative group w-full flex justify-center">
            <div
              className="
                relative
                w-full
                max-w-[430px]
                sm:max-w-[480px]
                xl:max-w-[520px]
                aspect-square
                rounded-3xl
                bg-white/40
                backdrop-blur-xl
                border
                border-[#374b82]/15
                shadow-[0_20px_50px_rgba(55,75,130,0.12)]
                overflow-hidden
                transition-transform
                duration-500
                group-hover:scale-[1.01]
              "
            >
              <div className="absolute inset-0 z-0">
                <NetworkGlobe active={inView} />
              </div>

              <div className="absolute inset-0 pointer-events-none bg-gradient-to-tr from-white/30 via-transparent to-transparent" />
            </div>

            <div className="absolute -top-5 right-6 w-20 h-20 bg-[#374b82]/10 rounded-full blur-2xl animate-pulse pointer-events-none" />

            <div
              className="absolute -bottom-6 left-6 w-24 h-24 bg-[#374b82]/10 rounded-full blur-3xl animate-bounce pointer-events-none"
              style={{ animationDuration: "6s" }}
            />
          </div>
        </div>
      </section>
    </div>
  );
}
