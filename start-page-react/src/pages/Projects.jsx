import { useState } from "react";
import { useNavigate } from "react-router-dom";
import WindowCard from "../components/WindowCard";

export default function Projects() {
  const navigate = useNavigate();
  const [activeProject, setActiveProject] = useState(null);
  const [maximized, setMaximized] = useState(false);

  const goHome = () => {
    navigate("/", { replace: true });
  };

  const projects = [
    {
      id: "portfolio-os",
      title: "Portfolio OS UI",
      images: [
        "https://picsum.photos/600/400?random=11",
        "https://picsum.photos/600/400?random=12",
      ],
      description:
        "Portfolio dengan konsep desktop OS, di mana setiap halaman direpresentasikan sebagai window interaktif untuk meningkatkan pengalaman pengguna.",
      tech: ["React", "Tailwind", "React Router"],
    },
    {
      id: "si-akademik",
      title: "Sistem Informasi Akademik",
      images: [
        "https://picsum.photos/600/400?random=21",
        "https://picsum.photos/600/400?random=22",
      ],
      description:
        "Aplikasi pengelolaan data akademik mahasiswa, dosen, mata kuliah, KRS, dan KHS secara terintegrasi.",
      tech: ["PHP", "MySQL"],
    },
    {
      id: "pos-umkm",
      title: "POS UMKM",
      images: [
        "https://picsum.photos/600/400?random=31",
        "https://picsum.photos/600/400?random=32",
      ],
      description:
        "Sistem kasir sederhana untuk UMKM dengan fitur transaksi, stok barang, dan laporan penjualan.",
      tech: ["Laravel", "Tailwind"],
    },
    {
      id: "helpdesk",
      title: "IT Helpdesk",
      images: [
        "https://picsum.photos/600/400?random=41",
        "https://picsum.photos/600/400?random=42",
      ],
      description:
        "Aplikasi ticketing untuk mencatat dan memantau penyelesaian masalah IT secara terstruktur.",
      tech: ["React", "Express"],
    },
    {
      id: "dashboard",
      title: "Business Intelligence Dashboard",
      images: [
        "https://picsum.photos/600/400?random=51",
        "https://picsum.photos/600/400?random=52",
      ],
      description:
        "Dashboard visualisasi data untuk membantu pengambilan keputusan berbasis data.",
      tech: ["React", "Chart.js"],
    },
    {
      id: "elearning",
      title: "E-Learning Platform",
      images: [
        "https://picsum.photos/600/400?random=61",
        "https://picsum.photos/600/400?random=62",
      ],
      description:
        "Platform pembelajaran online dengan manajemen kelas, materi, tugas, dan evaluasi.",
      tech: ["Next.js", "Firebase"],
    },
    {
      id: "inventory",
      title: "Inventory Management System",
      images: [
        "https://picsum.photos/600/400?random=71",
        "https://picsum.photos/600/400?random=72",
      ],
      description:
        "Sistem inventaris untuk pencatatan barang masuk, keluar, dan monitoring stok.",
      tech: ["Vue", "MySQL"],
    },
  ];

  return (
    <div className="relative min-h-screen bg-slate-900 text-slate-200 overflow-hidden">
      {/* GRID BACKGROUND */}
      <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.04)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.04)_1px,transparent_1px)] bg-[size:40px_40px]" />

      {/* MAIN PROJECT WINDOW */}
      <div
        className={`relative transition-all duration-300 ${
          maximized ? "fixed inset-6 z-50" : ""
        }`}
      >
        <WindowCard
          title="PROJECTS"
          bgColor="#020617"
          defaultPos={{ x: 70, y: 70 }}
          width={900}
        >
          {/* WINDOW CONTROLS */}
          <div className="flex items-center gap-2 mb-4">
            <button
              onClick={goHome}
              className="w-3 h-3 rounded-full bg-red-500 hover:scale-110 transition"
              title="Close"
            />
            <button
              onClick={goHome}
              className="w-3 h-3 rounded-full bg-yellow-400 hover:scale-110 transition"
              title="Minimize"
            />
            <button
              onClick={() => setMaximized(!maximized)}
              className="w-3 h-3 rounded-full bg-green-500 hover:scale-110 transition"
              title="Maximize"
            />
          </div>

          {/* PROJECT LIST */}
          <div className="max-h-[420px] overflow-y-auto pr-2">
            <div className="grid md:grid-cols-2 gap-4">
              {projects.map((p) => (
                <button
                  key={p.id}
                  onClick={() => setActiveProject(p)}
                  className="text-left rounded-xl border border-white/10 bg-white/5 p-4
                             hover:bg-white/10 hover:-translate-y-1 transition"
                >
                  <h3 className="font-semibold mb-1 text-white">
                    {p.title}
                  </h3>
                  <p className="text-sm text-slate-400">
                    {p.description.slice(0, 90)}...
                  </p>
                </button>
              ))}
            </div>
          </div>
        </WindowCard>
      </div>

      {/* PROJECT DETAIL WINDOW */}
      {activeProject && (
        <WindowCard
          title={activeProject.title}
          bgColor="#020617"
          defaultPos={{ x: 140, y: 110 }}
          width={760}
        >
          {/* DETAIL WINDOW CONTROLS */}
          <div className="flex items-center gap-2 mb-4">
            <button
              onClick={() => setActiveProject(null)}
              className="w-3 h-3 rounded-full bg-red-500 hover:scale-110 transition"
              title="Close"
            />
            <button
              onClick={() => setActiveProject(null)}
              className="w-3 h-3 rounded-full bg-yellow-400 hover:scale-110 transition"
              title="Minimize"
            />
            <span className="w-3 h-3 rounded-full bg-green-500 opacity-40" />
          </div>

          {/* DETAIL CONTENT */}
          <div className="max-h-[460px] overflow-y-auto pr-2 space-y-4">
            {/* IMAGES */}
            <div className="grid grid-cols-2 gap-3">
              {activeProject.images.map((img, i) => (
                <img
                  key={i}
                  src={img}
                  alt=""
                  className="rounded-lg border border-black/30 object-cover hover:scale-105 transition"
                />
              ))}
            </div>

            {/* DESCRIPTION */}
            <p className="text-sm text-slate-300 leading-relaxed">
              {activeProject.description}
            </p>

            {/* TECH STACK */}
            <div className="flex flex-wrap gap-2 text-xs">
              {activeProject.tech.map((t) => (
                <span
                  key={t}
                  className="px-2 py-1 rounded bg-black/30 border border-white/10 text-slate-200"
                >
                  {t}
                </span>
              ))}
            </div>
          </div>
        </WindowCard>
      )}

      <div className="absolute bottom-6 left-6 text-xs text-slate-400">
        Projects • @aliefalikhsan
      </div>
    </div>
  );
}
