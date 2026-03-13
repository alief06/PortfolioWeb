import { useEffect, useRef, useState } from "react";
import { useNavigate } from "react-router-dom";
import profileImg from "../assets/profile.png";
import SystemStatus from "../components/SystemStatus";
import { motion, AnimatePresence } from "framer-motion";

export default function Home() {
  const navigate = useNavigate();
  const [animating, setAnimating] = useState(null);

  const glowRef = useRef(null);
  const heroRef = useRef(null);

  /* =======================
      CURSOR GLOW FOLLOWÍ
  ======================== */
  useEffect(() => {
    const move = (e) => {
      if (!glowRef.current) return;
      glowRef.current.style.left = e.clientX - 150 + "px";
      glowRef.current.style.top = e.clientY - 150 + "px";
    };
    window.addEventListener("mousemove", move);
    return () => window.removeEventListener("mousemove", move);
  }, []);

  /* =======================
        PARALLAX HERO
  ======================== */
  useEffect(() => {
    const parallax = (e) => {
      if (!heroRef.current) return;
      const x = (window.innerWidth / 2 - e.clientX) / 40;
      const y = (window.innerHeight / 2 - e.clientY) / 40;
      heroRef.current.style.transform = `translate(${x}px, ${y}px)`;
    };

    window.addEventListener("mousemove", parallax);
    return () => window.removeEventListener("mousemove", parallax);
  }, []);

  /* =======================
        WINDOW DATA
  ======================== */
  const windows = [
    {
      id: "about",
      title: "About",
      route: "/about",
      color: "from-pink-500/30 to-purple-600/30",
      content: (
        <p className="text-sm leading-relaxed">
          👋 Mahasiswa Sistem Informasi dengan fokus Web Development dan UI/UX.
          Terbiasa membangun interface yang rapi, sistematis, dan mudah digunakan.
        </p>
      ),
    },
    {
      id: "skills",
      title: "My Skills",
      route: "/skills",
      color: "from-cyan-500/30 to-blue-600/30",
      content: (
        <div className="space-y-4">
          <div className="space-y-3">
            <div className="flex items-center gap-2 opacity-50 px-1">
              <span className="text-[10px] font-bold uppercase tracking-tighter">Frontend</span>
              <div className="h-px flex-grow bg-white/10" />
            </div>
            <div className="flex flex-wrap gap-2">
              {["React", "JavaScript", "Tailwind", "Framer Motion"].map((skill) => (
                <div key={skill} className="text-[10px] px-2.5 py-1 rounded-full bg-white/5 border border-white/10 hover:border-indigo-500/50 hover:bg-indigo-500/10 transition-all cursor-default">
                  {skill}
                </div>
              ))}
            </div>
          </div>

          <div className="space-y-3">
            <div className="flex items-center gap-2 opacity-50 px-1">
              <span className="text-[10px] font-bold uppercase tracking-tighter">Design & Tools</span>
              <div className="h-px flex-grow bg-white/10" />
            </div>
            <div className="flex flex-wrap gap-2">
              {["Figma", "UI/UX", "Git", "MySQL"].map((skill) => (
                <div key={skill} className="text-[10px] px-2.5 py-1 rounded-full bg-white/5 border border-white/10 hover:border-cyan-500/50 hover:bg-cyan-500/10 transition-all cursor-default">
                  {skill}
                </div>
              ))}
            </div>
          </div>
        </div>
      ),
    },
    {
      id: "experience",
      title: "Experience",
      route: "/experience",
      color: "from-indigo-500/30 to-violet-600/30",
      content: (
        <div className="space-y-3">
          <div className="p-3 rounded-xl bg-white/5 border border-white/10 hover:bg-white/10 transition-colors">
            <p className="text-[11px] font-bold text-indigo-400">Current Studies</p>
            <p className="text-[10px] text-white/70 leading-relaxed mt-1">Focusing on modern web architectures and systematic UI design patterns.</p>
          </div>
          <div className="p-3 rounded-xl bg-white/5 border border-white/10 hover:bg-white/10 transition-colors">
            <p className="text-[11px] font-bold text-indigo-400">Community Focus</p>
            <p className="text-[10px] text-white/70 leading-relaxed mt-1">Active participation in tech workshops and university organizations.</p>
          </div>
        </div>
      ),
    },
    {
      id: "education",
      title: "Education",
      route: "/education",
      color: "from-teal-500/30 to-emerald-600/30",
      content: (
        <div className="space-y-3">
          <div className="p-3 rounded-xl bg-indigo-500/10 border border-indigo-500/20">
            <p className="text-[11px] font-bold text-indigo-300">S1 Sistem Informasi</p>
            <p className="text-[10px] text-white/60 mt-0.5">Universitas Ahmad Dahlan</p>
            <p className="text-[9px] uppercase tracking-wider text-indigo-400/60 mt-2 font-bold">2024 — Present</p>
          </div>
        </div>
      ),
    },
    {
      id: "projects",
      title: "Projects",
      route: "/projects",
      color: "from-green-500/30 to-emerald-600/30",
      content: (
        <div className="space-y-4">
          <div className="p-4 rounded-xl bg-white/5 border border-white/10 hover:bg-white/10 transition-all">
            <div className="flex items-center gap-3 mb-2">
              <span className="text-xl">🛠️</span>
              <p className="text-[11px] font-bold text-indigo-400">Project Collection</p>
            </div>
            <p className="text-[10px] text-white/60 leading-relaxed">
              Kumpulan proyek pengembangan web dan desain UI/UX, termasuk pembaruan sistem dashboard portfolio ini.
            </p>
            <div className="mt-4 flex items-center gap-2 text-[9px] text-white/40 font-bold uppercase tracking-widest">
              <span>Click to view details</span>
              <div className="h-px flex-grow bg-white/10" />
            </div>
          </div>
        </div>
      ),
    },
    {
      id: "contact",
      title: "Contact",
      route: "/contact",
      color: "from-orange-500/30 to-yellow-500/30",
      content: (
        <div className="grid grid-cols-2 gap-2">
          <a href="mailto:alikhsanalief@gmail.com" className="p-2.5 rounded-xl bg-white/5 border border-white/10 flex flex-col items-center gap-1 hover:bg-indigo-500/10 hover:border-indigo-500/30 transition-all group">
            <span className="text-sm group-hover:scale-110 transition-transform">📧</span>
            <span className="text-[9px] font-bold opacity-60 uppercase">Email</span>
          </a>
          <a href="https://github.com/alief06" target="_blank" rel="noopener noreferrer" className="p-2.5 rounded-xl bg-white/5 border border-white/10 flex flex-col items-center gap-1 hover:bg-white/10 transition-all group">
            <span className="text-sm group-hover:scale-110 transition-transform">🌐</span>
            <span className="text-[9px] font-bold opacity-60 uppercase">GitHub</span>
          </a>
        </div>
      ),
    },
  ];

  const handleMaximize = (id, route) => {
    setAnimating(id);
    setTimeout(() => navigate(route), 250);
  };

  const handleMinimize = () => {
    setAnimating("minimize");
    setTimeout(() => navigate("/"), 200);
  };

  /* =======================
        ORBIT ICONS
  ======================== */
  const orbitIcons = [
    "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/vscode/vscode-original.svg",
    "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg",
    "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/github/github-original.svg",
    "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original.svg",
    "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg",
    "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/html5/html5-original.svg",
    "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/css3/css3-original.svg",
    "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/git/git-original.svg"
  ];

  return (
    <div className="relative min-h-screen overflow-hidden bg-animated-gradient text-white">
      {/* BACKGROUND EFFECTS */}
      <div className="ai-ambient opacity-30" />
      <div className="absolute inset-0 bg-grid-soft pointer-events-none opacity-20" />

      {/* CURSOR GLOW */}
      <div ref={glowRef} className="cursor-glow bg-indigo-500" />

      {/* MAIN CONTENT CONTAINER */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1 }}
        className="relative z-10 max-w-7xl mx-auto px-6 md:px-12 py-12 md:py-20"
      >

        {/* HERO SECTION (PROFILE + STATUS + ORBIT) */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          ref={heroRef}
          className="flex flex-col xl:flex-row items-center justify-center xl:justify-start gap-12 mb-16 transition-transform duration-200"
        >
          {/* PROFILE INFO */}
          <div className="flex flex-col md:flex-row items-center gap-8 text-center md:text-left relative">
            {/* Soft Glow behind Profile */}
            <div className="absolute -inset-4 bg-indigo-500/20 blur-[60px] rounded-full pointer-events-none" />

            <div className="relative group">
              <div className="w-32 h-32 md:w-40 md:h-40 rounded-2xl overflow-hidden border border-white/20 shadow-2xl bg-white/5 animate-mini-float">
                <img
                  src={profileImg}
                  alt="Profile"
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                  onError={(e) => {
                    e.target.src = "https://ui-avatars.com/api/?name=Anang+Alief&background=6366f1&color=fff&size=256";
                  }}
                />
              </div>
            </div>

            <div className="relative">
              <h1 className="text-3xl md:text-5xl font-extrabold mb-2 tracking-tight">
                <span className="bg-clip-text text-transparent bg-gradient-to-r from-white via-white to-white/60">
                  M. Anang Alief
                </span>
                <br />
                <span className="text-indigo-400 text-2xl md:text-4xl">Al Ikhsan Setiawan</span>
              </h1>
              <p className="text-sm md:text-lg text-white/60 font-medium max-w-md">
                Systems Information Student <span className="text-indigo-400/80">•</span> Web Developer <span className="text-indigo-400/80">•</span> UI/UX Explorer
              </p>
            </div>
          </div>

          {/* STATUS AND ORBIT */}
          <div className="flex flex-col md:flex-row items-center gap-12">
            <SystemStatus />

            {/* ORBIT TECH ANIMATION */}
            <div className="flex items-center justify-center">
              <div className="relative w-[160px] h-[160px] md:w-[200px] xl:w-[240px] aspect-square group">
                <div className="absolute inset-0 glass rounded-full shadow-[0_0_40px_rgba(99,102,241,0.2)] animate-float overflow-visible">
                  <div className="absolute inset-0 rounded-full bg-gradient-to-br from-indigo-500/10 to-cyan-400/10 blur-md" />

                  <div className="absolute inset-0 flex items-center justify-center animate-spin-slow pause-on-hover">
                    <div className="relative w-full h-full rounded-full border border-indigo-400/30 shadow-[0_0_30px_rgba(99,102,241,0.3)]" />

                    {orbitIcons.map((icon, i) => (
                      <div
                        key={i}
                        title={icon.split('/').pop().split('-')[0].toUpperCase()}
                        className="absolute w-6 h-6 md:w-8 md:h-8 flex items-center justify-center rounded-lg glass border border-white/20 shadow-lg cursor-help transition-all duration-300 hover:scale-150 hover:z-20 group/icon"
                        style={{
                          transform: `rotate(${i * (360 / orbitIcons.length)}deg) translate(50%, 0) translate(max(80px, 45%), 0)`,
                        }}
                      >
                        <img
                          src={icon}
                          alt="tech icon"
                          className="w-4 h-4 md:w-5 md:h-5 object-contain"
                          style={{
                            transform: `rotate(-${i * (360 / orbitIcons.length)}deg)`,
                          }}
                        />
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </motion.div>

        {/* WINDOWS GRID */}
        <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-8">
          {windows.map((win, index) => (
            <motion.div
              key={win.id}
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.15 }}
            >
              <TiltCard>
                <div
                  onClick={() => handleMaximize(win.id, win.route)}
                  className={`
                    glass glass-hover h-full flex flex-col overflow-hidden
                    border-l-2 border-l-white/10 cursor-pointer
                    ${animating === win.id ? "scale-105 opacity-50" : ""}
                    transition-all duration-300
                  `}
                >
                  {/* TITLE BAR */}
                  <div className="flex items-center justify-between px-4 py-3 border-b border-white/5 bg-white/5 backdrop-blur-md">
                    <div className="flex items-center gap-2">
                      <div className="w-2.5 h-2.5 rounded-full bg-indigo-500/40" />
                      <span className="text-[10px] uppercase font-bold tracking-widest text-white/70">{win.title}</span>
                    </div>

                    <div className="flex gap-2">
                      <div className="w-2 h-2 rounded-full bg-white/10" />
                      <div className="w-2 h-2 rounded-full bg-white/10" />
                    </div>
                  </div>

                  {/* CONTENT */}
                  <div className="p-6 flex-grow">
                    {win.content}
                  </div>
                </div>
              </TiltCard>
            </motion.div>
          ))}
        </div>

        {/* FOOTER */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 0.4 }}
          transition={{ delay: 1.5 }}
          className="mt-20 text-[10px] uppercase tracking-[0.3em] font-medium text-center"
        >
          &copy; 2026 Crafted by M. Anang Alief Al Ikhsan Setiawan
        </motion.div>
      </motion.div>
    </div>
  );
}

/* =======================
      TILT COMPONENT
======================= */
function TiltCard({ children }) {
  const ref = useRef(null);

  const onMove = (e) => {
    const rect = ref.current.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;

    const rotateX = ((y / rect.height) - 0.5) * 10;
    const rotateY = ((x / rect.width) - 0.5) * -10;

    ref.current.style.transform =
      `rotateX(${rotateX}deg) rotateY(${rotateY}deg) scale(1.02)`;
  };

  const reset = () => {
    ref.current.style.transform =
      "rotateX(0deg) rotateY(0deg) scale(1)";
  };

  return (
    <div
      ref={ref}
      onMouseMove={onMove}
      onMouseLeave={reset}
      className="transition-transform duration-200 will-change-transform"
      style={{ transformStyle: "preserve-3d" }}
    >
      {children}
    </div>
  );
}