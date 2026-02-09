import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

// smooth & pelan
const easeInOutCubic = (t) =>
  t < 0.5
    ? 4 * t * t * t
    : 1 - Math.pow(-2 * t + 2, 3) / 2;

export default function Skills() {
  const navigate = useNavigate();

  const skills = [
    // ================= FRONTEND =================
    {
      name: "HTML",
      level: 90,
      category: "Frontend",
      icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/html5/html5-original.svg",
      desc:
        "Membangun struktur halaman yang semantik, rapi, dan mudah dikembangkan kembali.",
    },
    {
      name: "CSS / Tailwind",
      level: 85,
      category: "Frontend",
      icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/tailwindcss/tailwindcss-original.svg",
      desc:
        "Mendesain antarmuka modern, responsif, serta konsisten dengan pendekatan utility-first.",
    },
    {
      name: "JavaScript",
      level: 80,
      category: "Frontend",
      icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg",
      desc:
        "Mengelola logika aplikasi, state, dan interaksi dinamis pada sisi frontend.",
    },
    {
      name: "React",
      level: 75,
      category: "Frontend",
      icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg",
      desc:
        "Membangun komponen reusable, routing SPA, serta struktur frontend yang terorganisir.",
    },

    // ================= DESIGN =================
    {
      name: "UI / UX Design",
      level: 78,
      category: "Design",
      icon: "https://cdn.jsdelivr.net/npm/simple-icons@v9/icons/figma.svg",
      desc:
        "Merancang pengalaman pengguna yang intuitif dengan fokus pada alur dan kenyamanan.",
    },
    {
      name: "Figma",
      level: 76,
      category: "Design",
      icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/figma/figma-original.svg",
      desc:
        "Membuat wireframe, prototype interaktif, serta design system untuk kebutuhan produk digital.",
    },
    {
      name: "Canva",
      level: 72,
      category: "Design",
      icon: "https://cdn.jsdelivr.net/npm/simple-icons@v9/icons/canva.svg",
      desc:
        "Mendesain konten visual sederhana untuk presentasi, sosial media, dan kebutuhan branding.",
    },
    {
      name: "Lightroom",
      level: 70,
      category: "Design",
      icon: "https://cdn.jsdelivr.net/npm/simple-icons@v9/icons/adobelightroom.svg",
      desc:
        "Melakukan color grading dan editing foto untuk keperluan visual portfolio.",
    },

    // ================= TOOLS & DATABASE =================
    {
      name: "MySQL",
      level: 70,
      category: "Tools & Database",
      icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mysql/mysql-original.svg",
      desc:
        "Perancangan basis data relasional, query dasar–menengah, serta normalisasi data.",
    },
    {
      name: "CapCut",
      level: 68,
      category: "Tools & Database",
      icon: "https://www.svgrepo.com/show/504203/capcut.svg",
      desc:
        "Editing video sederhana untuk kebutuhan konten dan presentasi proyek.",
    },
  ];

  const categories = ["Frontend", "Design", "Tools & Database"];

  const categoryColors = {
    Frontend: "from-cyan-400 to-blue-500",
    Design: "from-pink-400 to-purple-500",
    "Tools & Database": "from-emerald-400 to-teal-500",
  };

  const [animatedLevels, setAnimatedLevels] = useState({});

  // ================= FIXED ANIMATION =================
  useEffect(() => {
    const duration = 3000;
    const startTime = performance.now();

    const animate = (time) => {
      const elapsed = time - startTime;
      const progress = Math.min(elapsed / duration, 1);
      const eased = easeInOutCubic(progress);

      const newLevels = {};

      skills.forEach((skill, index) => {
        const delay = index * 0.08;

        // normalize supaya ujungnya tetap ke skill.level
        const localProgress = Math.min(
          Math.max((eased - delay) / (1 - delay), 0),
          1
        );

        newLevels[skill.name] = Math.round(
          localProgress * skill.level
        );
      });

      setAnimatedLevels(newLevels);

      if (progress < 1) {
        requestAnimationFrame(animate);
      }
    };

    requestAnimationFrame(animate);
  }, []);

  return (
    <div className="relative min-h-screen bg-slate-900 text-white overflow-hidden">
      {/* GRID */}
      <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.04)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.04)_1px,transparent_1px)] bg-[size:40px_40px]" />

      <div className="relative z-10 max-w-6xl mx-auto px-12 py-12 space-y-10">

        {/* WINDOW HEADER */}
        <div className="flex items-center justify-between rounded-xl border border-white/20 bg-black/50 backdrop-blur-xl px-4 py-2 shadow-lg">
          <span className="text-sm font-semibold">My Skills</span>

          <div className="flex gap-2">
            <button
              onClick={() => navigate("/")}
              className="w-3 h-3 rounded-full bg-yellow-400 hover:scale-110 transition"
            />
            <button
              onClick={() => navigate("/")}
              className="w-3 h-3 rounded-full bg-green-500 hover:scale-110 transition"
            />
            <button
              onClick={() => navigate("/")}
              className="w-3 h-3 rounded-full bg-red-500 hover:scale-110 transition"
            />
          </div>
        </div>

        {/* SKILLS */}
        <div className="grid md:grid-cols-2 gap-8">
          {categories.map((cat) => (
            <div key={cat} className="md:col-span-2">

              {/* CATEGORY TITLE */}
              <h3
                className={`mb-4 text-xs uppercase tracking-wider
                bg-gradient-to-r ${categoryColors[cat]}
                bg-clip-text text-transparent`}
              >
                {cat}
              </h3>

              <div className="grid md:grid-cols-2 gap-8">
                {skills
                  .filter((skill) => skill.category === cat)
                  .map((skill) => {
                    const value =
                      animatedLevels[skill.name] ?? 0;

                    return (
                      <div
                        key={skill.name}
                        className="rounded-xl border border-white/20 backdrop-blur-xl
                                   bg-white/5 hover:bg-white/10 transition-all
                                   duration-300 hover:-translate-y-1 hover:shadow-xl"
                      >
                        {/* HEADER */}
                        <div className="px-4 py-2 border-b border-white/10 bg-black/40 rounded-t-xl
                                        flex items-center justify-between text-xs font-semibold">
                          <div className="flex items-center gap-2">
                            <img
                              src={skill.icon}
                              alt={`${skill.name} logo`}
                              className="w-5 h-5 object-contain"
                            />
                            <span>{skill.name}</span>
                          </div>
                          <span className="opacity-70">
                            {value}%
                          </span>
                        </div>

                        {/* BODY */}
                        <div className="p-5 space-y-3">
                          <p className="text-sm opacity-80 leading-relaxed">
                            {skill.desc}
                          </p>

                          {/* PROGRESS BAR */}
                          <div className="w-full h-2 bg-white/10 rounded overflow-hidden">
                            <div
                              className={`h-full bg-gradient-to-r ${categoryColors[cat]}`}
                              style={{
                                width: `${value}%`,
                                transition:
                                  "width 0.15s linear",
                              }}
                            />
                          </div>
                        </div>
                      </div>
                    );
                  })}
              </div>
            </div>
          ))}
        </div>

        <div className="text-xs opacity-60 text-center">
          Skills Page • @aliefalikhsan
        </div>
      </div>
    </div>
  );
}
