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
          <div className="space-y-3 text-xs">
            <div>
              <p className="mb-1 text-[11px] uppercase tracking-wide opacity-70">
                Frontend
              </p>
              <div className="grid grid-cols-2 gap-2">
                {["HTML", "CSS / Tailwind", "JavaScript", "React"].map((skill) => (
                  <div
                    key={skill}
                    className="rounded bg-white/10 border border-white/10 px-2 py-1 text-center"
                  >
                    {skill}
                  </div>
                ))}
              </div>
            </div>

            <div>
              <p className="mb-1 text-[11px] uppercase tracking-wide opacity-70">
                Design
              </p>
              <div className="grid grid-cols-2 gap-2">
                {["UI / UX Design", "Figma", "Canva", "Lightroom"].map((skill) => (
                  <div
                    key={skill}
                    className="rounded bg-white/10 border border-white/10 px-2 py-1 text-center"
                  >
                    {skill}
                  </div>
                ))}
              </div>
            </div>

            <div>
              <p className="mb-1 text-[11px] uppercase tracking-wide opacity-70">
                Tools & Database
              </p>
              <div className="grid grid-cols-2 gap-2">
                {["MySQL", "Git", "VS Code", "Terminal"].map((skill) => (
                  <div
                    key={skill}
                    className="rounded bg-white/10 border border-white/10 px-2 py-1 text-center"
                  >
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
      <div className="space-y-2 text-xs">
        <div className="p-2 rounded bg-white/10">
          🧪 Praktikum & Kegiatan Laboratorium
        </div>
        <div className="p-2 rounded bg-white/10">
          🤝 Organisasi & Kepanitiaan Mahasiswa
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
      <div className="space-y-2 text-xs">
        <div className="p-2 rounded bg-white/10">
          🎓 Pendidikan Formal  
          <p className="mt-1 opacity-70">
            S1 Sistem Informasi — Universitas Ahmad Dahlan  
            <br />
            2024 – Sekarang
          </p>
        </div>

        <div className="p-2 rounded bg-white/10">
          📚 Pendidikan Non-Formal  
          <p className="mt-1 opacity-70">
            Pelatihan, bootcamp, dan pembelajaran mandiri di berbagai bidang.
          </p>
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
          <div className="space-y-2 text-xs">
            <div className="p-2 rounded bg-white/10">
              💻 Portfolio OS UI
            </div>
            <div className="p-2 rounded bg-white/10">
              📊 Database System
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
          <div className="space-y-1 text-xs">
            <p>📧 alikhsanalief@gmail.com</p>
            <p>🌐 github.com/alief06</p>
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
      <div className="relative min-h-screen overflow-hidden bg-slate-900 text-white">
        {/* FLOATING ORBS */}
        <div className="absolute w-[420px] h-[420px] bg-indigo-500/20 rounded-full blur-[140px] top-[-100px] left-[-100px] animate-float" />
        <div className="absolute w-[300px] h-[300px] bg-cyan-500/20 rounded-full blur-[120px] bottom-[-80px] right-[-80px] animate-float delay-200" />

        {/* CURSOR GLOW */}
        <div ref={glowRef} className="cursor-glow bg-indigo-500" />

        {/* PROFILE + SYSTEM STATUS */}
        <div
          ref={heroRef}
          className="relative z-10 flex items-center gap-10 px-12 pt-10 transition-transform duration-200"
        >
          <div className="flex items-center gap-6">
            <div className="w-36 h-36 rounded-2xl overflow-hidden border border-white/20 shadow-xl">
              <img
                src={profileImg}
                alt="profile"
                className="w-full h-full object-cover"
              />
            </div>

            <div>
              <h1 className="text-2xl font-bold">
                M. Anang Alief Al Ikhsan Setiawan
              </h1>
              <p className="text-sm opacity-70">
                Web & UI-Focused Information Systems Student
              </p>
            </div>
          </div>

          {/* SYSTEM STATUS */}
          <div className="relative z-10">
            <SystemStatus />
          </div>
        </div>

        {/* ================= RIGHT TINY ORBIT ================= */}
        <div className="absolute top-6 right-10 w-[220px] h-[220px] hidden xl:flex items-center justify-center z-10 pointer-events-none">
          <div className="relative w-[160px] h-[160px] rounded-2xl bg-white/5 backdrop-blur-xl border border-white/20 shadow-[0_0_26px_rgba(99,102,241,0.25)] animate-float">
            <div className="absolute inset-0 rounded-2xl bg-gradient-to-br from-indigo-500/10 to-cyan-400/10 blur-md" />

            <div className="absolute inset-[-40px] flex items-center justify-center animate-spin-slow">
              <div className="relative w-[160px] h-[160px] rounded-full border border-indigo-400/40 shadow-[0_0_22px_rgba(99,102,241,0.4)]" />

              {orbitIcons.map((icon, i) => (
                <div
                  key={i}
                  className="absolute w-6 h-6 flex items-center justify-center rounded-full bg-white/10 backdrop-blur-md border border-white/30 shadow-[0_0_10px_rgba(255,255,255,0.2)]"
                  style={{
                    transform: `rotate(${i * (360 / orbitIcons.length)}deg) translate(76px)`,
                  }}
                >
                  <img
                    src={icon}
                    alt="tech icon"
                    className="w-5 h-5 object-contain transition-transform hover:scale-125"
                  />
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* WINDOWS */}
        <div className="relative z-10 px-12 py-10">
          <div className="grid grid-cols-2 lg:grid-cols-3 gap-10">
            {windows.map((win, index) => (
              <TiltCard key={win.id}>
                <div
                  className={`
                    animated-border rounded-xl backdrop-blur-xl 
                    bg-gradient-to-br ${win.color}
                    opacity-0 translate-y-6 scale-95
                    animate-window-in
                  `}
                  style={{
                    animationDelay: `${index * 120}ms`,
                    animationFillMode: "forwards",
                  }}
                >
                  {/* TITLE BAR */}
                  <div className="flex items-center justify-between px-3 py-2 border-b border-white/10 bg-black/40 rounded-t-xl">
                    <span className="text-xs font-semibold">{win.title}</span>

                    <div className="flex gap-2">
                      <button
                        onClick={handleMinimize}
                        className="w-3 h-3 rounded-full bg-red-500/80"
                      />
                      <button
                        onClick={handleMinimize}
                        className="w-3 h-3 rounded-full bg-yellow-400/80"
                      />
                      <button
                        onClick={() => handleMaximize(win.id, win.route)}
                        className="w-3 h-3 rounded-full bg-green-500/80"
                      />
                    </div>
                  </div>

                  {/* CONTENT */}
                  <div className="p-4 min-h-[160px]">
                    {win.content}
                  </div>
                </div>
              </TiltCard>
            ))}
          </div>
        </div>

        {/* FOOTER */}
        <div className="absolute bottom-1 left-12 text-xs opacity-60">
          💻 Portfolio OS UI • @aliefalikhsan
        </div>
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