import { useState } from "react";
import { useNavigate } from "react-router-dom";
import WindowCard from "../components/WindowCard";

import project1Img1 from "../assets/projects/project1/project1_1.png";
import project1Img2 from "../assets/projects/project1/project1_2.png";

import project2Img1 from "../assets/projects/project2/project2_1.jpeg";
import project2Img2 from "../assets/projects/project2/project2_2.jpeg";
import project2Img3 from "../assets/projects/project2/project2_3.jpeg";
import project2Img4 from "../assets/projects/project2/project2_4.jpeg";
import project2Img5 from "../assets/projects/project2/project2_5.jpeg";

import project3Img1 from "../assets/projects/project3/project3_1.jpeg";
import project3Img2 from "../assets/projects/project3/project3_2.jpeg";
import project3Img3 from "../assets/projects/project3/project3_3.jpeg";

import project4Img1 from "../assets/projects/project4/project4_1.jpeg";
import project4Img2 from "../assets/projects/project4/project4_2.jpeg";

export default function Projects() {
  const navigate = useNavigate();
  const [activeProject, setActiveProject] = useState(null);
  const [maximized, setMaximized] = useState(false);

  const goHome = () => {
    navigate("/", { replace: true });
  };

  const projects = [
    {
      id: "portfolio-v2",
      title: "Portfolio OS Enhancement (2026)",
      images: [], // I'll add an SVG or icon later if needed, but for now I'll use text
      description:
        "Pembaruan besar pada portfolio ini untuk meningkatkan pengalaman pengguna dan estetika. Mencakup implementasi: \n\n1. Dynamic Glassmorphism UI\n2. Responsive Layout (Mobile, Tablet, Desktop)\n3. Interactive Component (Orbit Animation & Tooltips)\n4. Framer Motion Entry Animations\n5. Animated Gradient Background\n6. System Status Live Dashboard UI",
      tech: ["React", "Tailwind CSS", "Framer Motion", "Glassmorphism"],
    },
    {
      id: "web-cv-v1",
      title: "Project Web CV V1",
      images: [project1Img1, project1Img2],
      description:
        "Website CV versi pertama yang dibuat menggunakan HTML dan CSS dengan tampilan sederhana, responsive, dan fokus pada struktur layout yang rapi.",
      tech: ["HTML", "CSS"],
    },
    {
      id: "alertime",
      title: "ALERTIME - Aplikasi Mobile Pengingat Tugas",
      images: [
        project2Img1,
        project2Img2,
        project2Img3,
        project2Img4,
        project2Img5,
      ],
      description:
        "Aplikasi mobile pengingat tugas untuk membantu mahasiswa mencatat, mengelola, dan memonitor deadline secara efisien dan terstruktur.",
      tech: ["Flutter", "Firebase"],
    },
    {
      id: "gateva",
      title: "GATEVA - Web App Pemesanan Tiket Online",
      images: [
        project3Img1,
        project3Img2,
        project3Img3,
      ],
      description:
        "GATEVA merupakan web application pemesanan tiket online yang dikembangkan sebagai tugas akhir (kelompok) pada mata kuliah Teknologi Web. Aplikasi ini dibuat menggunakan React dengan fitur pemilihan jadwal, pemesanan tiket, serta antarmuka modern berbasis component.",
      tech: ["React", "React Router", "Tailwind CSS"],
    },
    {
      id: "gemastik-ux",
      title: "UX Design Concept - GEMASTIK 2025",
      images: [
        project4Img1,
        project4Img2,
      ],
      description:
        "Konsep UX Design yang dikembangkan sebagai bagian dari persiapan kompetisi GEMASTIK 2025. Dalam proyek ini saya berperan sebagai perancang ide dan alur pengalaman pengguna dengan fokus pada identifikasi kebutuhan pengguna, perancangan user flow, serta penyusunan konsep fitur utama. Desain antarmuka divisualisasikan menggunakan Figma untuk menggambarkan struktur dan interaksi aplikasi secara konseptual.",
      tech: ["UX Research", "User Flow", "Design Thinking", "Figma"],
    },
  ];

  return (
    <div className="relative min-h-screen bg-slate-900 text-slate-200 overflow-hidden">
      {/* GRID BACKGROUND */}
      <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.04)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.04)_1px,transparent_1px)] bg-[size:40px_40px]" />

      {/* MAIN WINDOW */}
      <div
        className={`relative transition-all duration-300 ${maximized ? "fixed inset-6 z-50" : ""
          }`}
      >
        <WindowCard
          title="PROJECTS"
          bgColor="#020617"
          defaultPos={{ x: 70, y: 70 }}
          width={900}
        >
          <div className="flex items-center gap-2 mb-4">
            <button
              onClick={goHome}
              className="w-3 h-3 rounded-full bg-red-500 hover:scale-110 transition"
            />
            <button
              onClick={goHome}
              className="w-3 h-3 rounded-full bg-yellow-400 hover:scale-110 transition"
            />
            <button
              onClick={() => setMaximized(!maximized)}
              className="w-3 h-3 rounded-full bg-green-500 hover:scale-110 transition"
            />
          </div>

          <div className="max-h-[420px] overflow-y-auto pr-2">
            <div className="grid md:grid-cols-2 gap-4">
              {projects.map((p) => (
                <button
                  key={p.id}
                  onClick={() => setActiveProject(p)}
                  className="text-left rounded-xl border border-white/10 bg-white/5 p-4 hover:bg-white/10 hover:-translate-y-1 transition"
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

      {/* DETAIL WINDOW */}
      {activeProject && (
        <WindowCard
          title={activeProject.title}
          bgColor="#020617"
          defaultPos={{ x: 140, y: 110 }}
          width={760}
        >
          <div className="flex items-center gap-2 mb-4">
            <button
              onClick={() => setActiveProject(null)}
              className="w-3 h-3 rounded-full bg-red-500 hover:scale-110 transition"
            />
            <button
              onClick={() => setActiveProject(null)}
              className="w-3 h-3 rounded-full bg-yellow-400 hover:scale-110 transition"
            />
            <span className="w-3 h-3 rounded-full bg-green-500 opacity-40" />
          </div>

          <div className="max-h-[460px] overflow-y-auto pr-2 space-y-4">
            <div className="grid grid-cols-2 md:grid-cols-3 gap-3">
              {activeProject.images.map((img, i) => (
                <img
                  key={i}
                  src={img}
                  alt={`project-${i}`}
                  className="rounded-lg border border-black/30 object-cover hover:scale-105 transition"
                />
              ))}
            </div>

            <p className="text-sm text-slate-300 leading-relaxed whitespace-pre-wrap">
              {activeProject.description}
            </p>

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