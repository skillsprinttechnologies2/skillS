import React, { useMemo } from "react";

const KEYFRAMES = `
  @keyframes skillSprintFloat {
    0% {
      transform: translate3d(0, 0, 0) rotate(var(--rot)) scale(1);
    }
    100% {
      transform: translate3d(0, -22px, 0) rotate(var(--rot)) scale(1.02);
    }
  }

  @keyframes skillSprintFloatReverse {
    0% {
      transform: translate3d(0, 0, 0) rotate(var(--rot)) scale(1);
    }
    100% {
      transform: translate3d(0, 18px, 0) rotate(var(--rot)) scale(1.02);
    }
  }

  @media (prefers-reduced-motion: reduce) {
    .sst-shape {
      animation: none !important;
    }
  }
`;

const SHAPE_TYPES = ["glassCard", "ring", "diamond", "capsule"];

function rand(min, max) {
  return Math.random() * (max - min) + min;
}

function randItem(arr) {
  return arr[Math.floor(Math.random() * arr.length)];
}

function isMobile() {
  if (typeof window === "undefined") return false;
  return window.innerWidth < 768;
}

function generateShapes(count, mobile) {
  const safeZones = [
    { top: [10, 28], left: [2, 18] },
    { top: [16, 34], left: [78, 94] },
    { top: [42, 62], left: [4, 18] },
    { top: [50, 72], left: [78, 95] },
    { top: [72, 88], left: [10, 30] },
    { top: [76, 92], left: [65, 88] },
  ];

  return Array.from({ length: count }, (_, i) => {
    const zone = safeZones[i % safeZones.length];

    return {
      id: i,
      type: randItem(SHAPE_TYPES),
      top: rand(zone.top[0], zone.top[1]),
      left: rand(zone.left[0], zone.left[1]),
      size: mobile ? rand(70, 120) : rand(110, 190),
      opacity: mobile ? rand(0.16, 0.26) : rand(0.22, 0.38),
      rotate: rand(-24, 24),
      duration: rand(7, 13),
      delay: rand(0, 5),
      blur: rand(0, 0.4),
      floatDirection:
        Math.random() > 0.5 ? "skillSprintFloat" : "skillSprintFloatReverse",
    };
  });
}

function GlassCard({ shape }) {
  const w = shape.size * 1.35;
  const h = shape.size * 0.82;

  return (
    <div
      style={{
        width: w,
        height: h,
        borderRadius: 28,
        background:
          "linear-gradient(135deg, rgba(255,255,255,0.44), rgba(255,255,255,0.16))",
        border: "1px solid rgba(55,75,130,0.16)",
        boxShadow:
          "0 24px 70px rgba(55,75,130,0.13), inset 0 1px 0 rgba(255,255,255,0.55)",
        backdropFilter: "blur(10px)",
      }}
    />
  );
}

function Ring({ shape }) {
  const s = shape.size;

  return (
    <div
      style={{
        width: s,
        height: s,
        borderRadius: "999px",
        border: "2px solid rgba(55,75,130,0.20)",
        background:
          "radial-gradient(circle, rgba(255,255,255,0.12), transparent 62%)",
        boxShadow: "0 20px 60px rgba(55,75,130,0.10)",
      }}
    />
  );
}

function Diamond({ shape }) {
  const s = shape.size * 0.72;

  return (
    <div
      style={{
        width: s,
        height: s,
        borderRadius: 24,
        background:
          "linear-gradient(135deg, rgba(55,75,130,0.16), rgba(255,255,255,0.18))",
        border: "1px solid rgba(55,75,130,0.16)",
        boxShadow:
          "0 22px 65px rgba(55,75,130,0.12), inset 0 1px 0 rgba(255,255,255,0.45)",
        backdropFilter: "blur(8px)",
        transform: "rotate(45deg)",
      }}
    />
  );
}

function Capsule({ shape }) {
  const w = shape.size * 1.55;
  const h = shape.size * 0.42;

  return (
    <div
      style={{
        width: w,
        height: h,
        borderRadius: 999,
        background:
          "linear-gradient(135deg, rgba(255,255,255,0.42), rgba(55,75,130,0.08))",
        border: "1px solid rgba(55,75,130,0.15)",
        boxShadow: "0 18px 55px rgba(55,75,130,0.11)",
        backdropFilter: "blur(8px)",
      }}
    />
  );
}

function renderShape(shape) {
  switch (shape.type) {
    case "glassCard":
      return <GlassCard shape={shape} />;
    case "ring":
      return <Ring shape={shape} />;
    case "diamond":
      return <Diamond shape={shape} />;
    case "capsule":
      return <Capsule shape={shape} />;
    default:
      return null;
  }
}

const FloatingShapes = () => {
  const mobile = isMobile();
  const count = mobile ? 5 : 8;

  const shapes = useMemo(() => generateShapes(count, mobile), [count, mobile]);

  return (
    <>
      <style>{KEYFRAMES}</style>

      <div className="absolute inset-0 z-0 overflow-hidden">
        {shapes.map((shape) => (
          <div
            key={shape.id}
            className="sst-shape absolute"
            style={{
              top: `${shape.top}%`,
              left: `${shape.left}%`,
              opacity: shape.opacity,
              filter:
                shape.blur > 0 ? `blur(${shape.blur.toFixed(1)}px)` : undefined,
              "--rot": `${shape.rotate}deg`,
              animation: `${shape.floatDirection} ${shape.duration.toFixed(
                1,
              )}s ease-in-out ${shape.delay.toFixed(
                1,
              )}s infinite alternate both`,
              willChange: "transform",
              pointerEvents: "none",
            }}
          >
            {renderShape(shape)}
          </div>
        ))}
      </div>
    </>
  );
};

export default FloatingShapes;
