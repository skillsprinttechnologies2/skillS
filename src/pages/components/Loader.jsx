import React from "react";
import { motion } from "framer-motion";

const CUBES = [
  {
    offset: 0,
    style: "bg-white/55 border-white/70",
    glow: "rgba(42,68,154,0.06)",
  },
  {
    offset: 1,
    style: "bg-[#2a449a]/[0.12] border-[#2a449a]/[0.18]",
    glow: "rgba(42,68,154,0.11)",
  },
  {
    offset: 2,
    style: "bg-white/40 border-white/55",
    glow: "rgba(42,68,154,0.04)",
  },
  {
    offset: 3,
    style: "bg-[#2a449a]/[0.08] border-[#2a449a]/[0.12]",
    glow: "rgba(42,68,154,0.07)",
  },
];

const Loader = ({ fullscreen = false, small = false, overlay = false }) => {
  const isFullscreen = fullscreen || overlay;

  const s = small ? 18 : 42;
  const g = small ? 3 : 6;
  const step = s + g;
  const area = s * 2 + g;
  const rad = small ? 6 : 12;

  const grid = [
    [0, 0],
    [step, 0],
    [step, step],
    [0, step],
  ];

  const cubeElements = (
    <div className="relative" style={{ width: area, height: area }}>
      {CUBES.map(({ offset, style, glow }) => {
        const path = Array.from(
          { length: 5 },
          (_, i) => grid[(offset + i) % 4],
        );

        return (
          <motion.div
            key={offset}
            className={`absolute border backdrop-blur-md ${style}`}
            style={{
              width: s,
              height: s,
              borderRadius: rad,
              boxShadow: `0 4px 20px ${glow}`,
            }}
            animate={{
              x: path.map((p) => p[0]),
              y: path.map((p) => p[1]),
              scale: [1, 0.9, 1, 0.9, 1],
              rotate: [0, 6, 0, -6, 0],
            }}
            transition={{
              duration: 3.4,
              repeat: Infinity,
              ease: "easeInOut",
              times: [0, 0.25, 0.5, 0.75, 1],
            }}
          >
            {!small && (
              <div
                className="absolute inset-x-0 top-0 bg-gradient-to-b from-white/20 to-transparent pointer-events-none"
                style={{
                  height: "42%",
                  borderRadius: `${rad}px ${rad}px 0 0`,
                }}
              />
            )}
          </motion.div>
        );
      })}
    </div>
  );

  if (small) {
    return (
      <span
        className="inline-flex items-center justify-center p-2"
        role="status"
        aria-label="Loading"
      >
        <span className="sr-only">Loading</span>
        {cubeElements}
      </span>
    );
  }

  if (isFullscreen) {
    return (
      <motion.div
        className="fixed inset-0 z-[9999] flex items-center justify-center"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        transition={{ duration: 0.4, ease: [0.25, 0.1, 0.25, 1] }}
        role="status"
        aria-label="Loading"
      >
        <span className="sr-only">Loading</span>

        <div className="absolute inset-0 backdrop-blur-2xl backdrop-saturate-150 bg-white/[0.06]" />

        <div
          className="absolute inset-0 pointer-events-none"
          style={{
            background:
              "linear-gradient(135deg, rgba(255,255,255,0.05) 0%, transparent 50%, rgba(255,255,255,0.06) 100%)",
          }}
        />

        <div
          className="absolute pointer-events-none rounded-full"
          style={{
            width: 420,
            height: 420,
            top: "50%",
            left: "50%",
            transform: "translate(-50%, -50%)",
            background:
              "radial-gradient(circle, rgba(42,68,154,0.02) 0%, transparent 70%)",
            filter: "blur(60px)",
          }}
        />

        <div className="relative z-10">{cubeElements}</div>
      </motion.div>
    );
  }

  return (
    <div
      className="flex items-center justify-center py-16"
      role="status"
      aria-label="Loading"
    >
      <span className="sr-only">Loading</span>
      {cubeElements}
    </div>
  );
};

export default Loader;

/*
 ╔═══════════════════════════════════════════════╗
 ║               USAGE EXAMPLES                  ║
 ╚═══════════════════════════════════════════════╝

 ── 1. INITIAL WEBSITE LOAD ──────────────────────

 import { useState, useEffect } from "react";
 import { AnimatePresence } from "framer-motion";
 import Loader from "./components/Loader";

 function App() {
   const [loading, setLoading] = useState(true);

   useEffect(() => {
     const timer = setTimeout(() => setLoading(false), 2400);
     return () => clearTimeout(timer);
   }, []);

   return (
     <>
       <AnimatePresence>
         {loading && <Loader fullscreen />}
       </AnimatePresence>
       <MainContent />
     </>
   );
 }


 ── 2. SUSPENSE FALLBACK (LAZY PAGES) ───────────

 import { Suspense, lazy } from "react";
 import Loader from "./components/Loader";

 const Dashboard = lazy(() => import("./pages/Dashboard"));

 function App() {
   return (
     <Suspense fallback={<Loader fullscreen />}>
       <Dashboard />
     </Suspense>
   );
 }


 ── 3. ROUTE TRANSITIONS ────────────────────────

 import { useNavigation } from "react-router-dom";
 import { AnimatePresence } from "framer-motion";
 import Loader from "./components/Loader";

 function Layout() {
   const navigation = useNavigation();
   const isNavigating = navigation.state === "loading";

   return (
     <>
       <AnimatePresence>
         {isNavigating && <Loader overlay />}
       </AnimatePresence>
       <Outlet />
     </>
   );
 }


 ── 4. API LOADING STATE ────────────────────────

 import Loader from "./components/Loader";

 function UserList() {
   const { data, isLoading } = useFetchUsers();

   if (isLoading) return <Loader />;

   return (
     <ul>
       {data.map(u => <li key={u.id}>{u.name}</li>)}
     </ul>
   );
 }


 ── 5. INLINE SMALL LOADER ─────────────────────

 import Loader from "./components/Loader";

 function SubmitButton({ loading }) {
   return (
     <button disabled={loading}>
       {loading ? <Loader small /> : "Submit"}
     </button>
   );
 }
*/
