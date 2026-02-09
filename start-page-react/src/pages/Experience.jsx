import { useState } from "react";
import { useNavigate } from "react-router-dom";

export default function Experience() {
  const navigate = useNavigate();
  const [activeFilter, setActiveFilter] = useState("All");

  const experiences = [
    // ================= LAB / AKADEMIK =================
    {
      category: "Laboratorium & Akademik",
      role: "Asisten Praktikum Dasar Pemrograman",
      company: "Laboratorium Sistem Informasi",
      period: "2025 – 2026 (1 Semester)",
      type: "Lab",
      desc: [
        "Mendampingi mahasiswa dalam memahami dasar pemrograman.",
        "Membantu debugging dan penjelasan logika program.",
        "Menilai tugas serta laporan praktikum.",
        "Berkoordinasi dengan dosen dan tim asisten.",
      ],
    },

    // ================= ORGANISASI =================
    {
      category: "Organisasi Mahasiswa",
      role: "Staff Departemen Kajian Strategis & Advokasi",
      company: "BEM FAST UAD",
      period: "2025 – 2026",
      type: "Organisasi",
      desc: [
        "Menyusun kajian isu akademik dan kebijakan kampus.",
        "Berpartisipasi dalam diskusi internal dan advokasi mahasiswa.",
        "Berkolaborasi lintas departemen dalam program kerja.",
      ],
    },
    {
      category: "Organisasi Mahasiswa",
      role: "Anggota Departemen Keagamaan & Keilmuan",
      company:
        "Persatuan Mahasiswa Kalimantan Selatan – Yogyakarta",
      period: "2025 – 2026",
      type: "Organisasi",
      desc: [
        "Mengikuti kegiatan keilmuan dan pengembangan diri.",
        "Terlibat dalam program pembinaan mahasiswa daerah.",
        "Berpartisipasi dalam diskusi keagamaan dan sosial.",
      ],
    },
    {
      category: "Organisasi Mahasiswa",
      role: "Anggota Bidang Hikmah & Politik Kebijakan Publik",
      company: "IMM FAST",
      period: "2026 – 2027",
      type: "Organisasi",
      desc: [
        "Terlibat dalam kajian isu kebijakan publik dan sosial.",
        "Mengikuti forum diskusi strategis internal organisasi.",
        "Berkontribusi dalam penyusunan sikap organisasi.",
        "Berpartisipasi dalam agenda advokasi mahasiswa.",
      ],
    },

    // ================= KEPANITIAAN =================
    {
      category: "Kepanitiaan",
      role: "Anggota Divisi Acara",
      company: "Program Pengenalan Kampus FAST UAD",
      period: "2025",
      type: "Kepanitiaan",
      desc: [
        "Menyiapkan konsep dan rundown kegiatan.",
        "Mengatur alur acara selama pelaksanaan.",
        "Bekerja sama dengan tim lintas divisi.",
      ],
    },
    {
      category: "Kepanitiaan",
      role: "Anggota Divisi Acara",
      company: "Upgrading Ormawa FAST",
      period: "2025",
      type: "Kepanitiaan",
      desc: [
        "Menyusun konsep kegiatan internal organisasi.",
        "Mengkoordinasikan kebutuhan teknis acara.",
        "Mendukung kelancaran agenda pelaksanaan.",
      ],
    },
    {
      category: "Kepanitiaan",
      role: "Anggota Divisi Acara",
      company: "Kongres KBM FAST",
      period: "2025",
      type: "Kepanitiaan",
      desc: [
        "Terlibat dalam perencanaan acara utama fakultas.",
        "Menyusun jadwal dan alur sidang kongres.",
        "Berkoordinasi dengan panitia inti.",
      ],
    },
  ];

  const filters = ["All", "Lab", "Organisasi", "Kepanitiaan"];

  const badgeColors = {
    Lab: "bg-cyan-500/20 text-cyan-300 border-cyan-400/30",
    Organisasi:
      "bg-purple-500/20 text-purple-300 border-purple-400/30",
    Kepanitiaan:
      "bg-emerald-500/20 text-emerald-300 border-emerald-400/30",
  };

  const filteredExperiences =
    activeFilter === "All"
      ? experiences
      : experiences.filter((e) => e.type === activeFilter);

  return (
    <div className="relative min-h-screen bg-slate-900 text-white overflow-hidden">
      {/* GRID BACKGROUND */}
      <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.04)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.04)_1px,transparent_1px)] bg-[size:40px_40px]" />

      <div className="relative z-10 max-w-5xl mx-auto px-10 py-12">
        {/* WINDOW */}
        <div className="rounded-xl border border-white/20 backdrop-blur-xl bg-white/5 shadow-xl overflow-hidden flex flex-col max-h-[85vh]">

          {/* HEADER */}
          <div className="flex items-center justify-between px-4 py-2 border-b border-white/10 bg-black/40">
            <span className="text-sm font-semibold">Experience</span>

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

          {/* FILTER BAR */}
          <div className="px-4 py-3 border-b border-white/10 bg-black/30 flex gap-3">
            {filters.map((f) => (
              <button
                key={f}
                onClick={() => setActiveFilter(f)}
                className={`px-3 py-1 rounded-md text-[11px] border transition
                  ${
                    activeFilter === f
                      ? "bg-white/20 border-white/40"
                      : "bg-white/5 border-white/10 hover:bg-white/10"
                  }`}
              >
                {f}
              </button>
            ))}
          </div>

          {/* CONTENT */}
          <div className="p-6 space-y-6 overflow-y-auto">
            {filteredExperiences.map((exp, idx) => (
              <div
                key={idx}
                className="rounded-xl border border-white/20 bg-white/5 hover:bg-white/10 transition-all duration-300 hover:-translate-y-1"
              >
                {/* CARD HEADER */}
                <div className="px-4 py-2 border-b border-white/10 bg-black/40 rounded-t-xl flex justify-between text-xs font-semibold">
                  <div className="flex flex-col gap-1">
                    <span>{exp.role}</span>

                    {/* BADGE */}
                    <span
                      className={`w-fit px-2 py-[2px] rounded-full border text-[10px]
                      ${badgeColors[exp.type]}`}
                    >
                      {exp.type}
                    </span>
                  </div>

                  <span className="opacity-70">{exp.period}</span>
                </div>

                {/* CARD BODY */}
                <div className="p-4 space-y-2 text-sm">
                  <p className="font-medium opacity-90">
                    {exp.company}
                  </p>

                  <ul className="list-disc list-inside space-y-1 opacity-80">
                    {exp.desc.map((d, i) => (
                      <li key={i}>{d}</li>
                    ))}
                  </ul>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* FOOTER */}
        <div className="text-xs opacity-60 text-center mt-6">
          Experience Page • @aliefalikhsan
        </div>
      </div>
    </div>
  );
}
