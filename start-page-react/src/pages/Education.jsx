import { useNavigate } from "react-router-dom";

export default function Education() {
  const navigate = useNavigate();

  const formalEducation = [
    {
      title: "TK",
      place: "TK Qothrunnada Banjarmasin",
      year: "2015 – 2017",
      desc:
        "Memulai petualangan belajar dengan mengenal teman baru, bermain sambil belajar, serta mengasah kreativitas dan kemampuan motorik sejak dini.",
    },
    {
      title: "SD",
      place: "SDN-SN Pasar Lama 3 Banjarmasin",
      year: "2010 – 2018",
      desc:
        "Menanamkan fondasi membaca, menulis, dan berhitung, sekaligus belajar bekerja sama dalam kelompok, mengeksplorasi minat, dan membangun rasa ingin tahu yang tinggi.",
    },
    {
      title: "SMP",
      place: "SMP Negeri 1 Banjarmasin",
      year: "2018 – 2021",
      desc:
        "Mengembangkan kemampuan akademik dan logika, memperluas pengetahuan umum, serta mulai menumbuhkan ketertarikan pada dunia teknologi dan sistem digital.",
    },
    {
      title: "SMA",
      place: "SMA Negeri 2 Banjarmasin",
      year: "2021 – 2024",
      desc:
        "Memperkuat pola pikir logis, kerja tim, dan disiplin, sambil memperdalam minat pada teknologi, sistem informasi, dan pengembangan digital.",
    },
    {
      title: "S1 Sistem Informasi",
      place: "Universitas Ahmad Dahlan",
      year: "2024 – Sekarang",
      desc:
        "Mempelajari pengembangan sistem informasi, manajemen basis data, rekayasa perangkat lunak, serta analisis dan perancangan sistem yang tepat guna bagi kebutuhan pengguna.",
    },
  ];

  const trainings = [
    {
      name: "Bootcamp Data Analyst",
      org: "Online Bootcamp",
      desc:
        "Mempelajari analisis data menggunakan Excel, SQL, dan Python, serta teknik visualisasi data untuk pengambilan keputusan berbasis data.",
    },
    {
      name: "Pelatihan Jurnalistik Tingkat Dasar",
      org: "Offline Workshop",
      desc:
        "Mengenal dasar-dasar jurnalistik, teknik menulis berita, wawancara, serta etika media secara praktis.",
    },
    {
      name: "Pelatihan Jurnalistik Tingkat Lanjut",
      org: "Offline Workshop",
      desc:
        "Pendalaman teknik jurnalistik, investigasi, penulisan feature, serta manajemen konten media untuk laporan yang lebih profesional.",
    },
    {
      name: "Pelatihan Soft Skill",
      org: "Offline Training",
      desc:
        "Meningkatkan kemampuan komunikasi, kepemimpinan, teamwork, problem solving, dan manajemen waktu melalui latihan praktis.",
    },
    {
      name: "Pelatihan Bela Negara",
      org: "Offline Training",
      desc:
        "Pelatihan kedisiplinan, nasionalisme, kerja sama, serta kemampuan bertahan dan beradaptasi dalam berbagai situasi.",
    },
  ];

  return (
    <div className="relative min-h-screen bg-slate-900 text-white overflow-hidden">
      {/* GRID BACKGROUND */}
      <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.04)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.04)_1px,transparent_1px)] bg-[size:40px_40px]" />

      <div className="relative z-10 max-w-6xl mx-auto px-12 py-12 space-y-12">

        {/* WINDOW HEADER */}
        <div className="flex items-center justify-between rounded-xl border border-white/20 bg-black/50 backdrop-blur-xl px-4 py-2 shadow-lg">
          <span className="text-sm font-semibold">Education</span>

          <div className="flex gap-2">
            <button
              onClick={() => navigate("/")}
              className="w-3 h-3 rounded-full bg-yellow-400 hover:scale-110 transition"
              title="Minimize"
            />
            <button
              onClick={() => navigate("/")}
              className="w-3 h-3 rounded-full bg-green-500 hover:scale-110 transition"
              title="Back to Home"
            />
            <button
              onClick={() => navigate("/")}
              className="w-3 h-3 rounded-full bg-red-500 hover:scale-110 transition"
              title="Close"
            />
          </div>
        </div>

        {/* FORMAL EDUCATION */}
        <section className="space-y-6">
          <h2 className="text-lg font-semibold tracking-wide">
            🎓 Pendidikan Formal
          </h2>

          <div className="grid md:grid-cols-2 gap-6">
            {formalEducation.map((edu) => (
              <div
                key={edu.title}
                className="rounded-xl border border-white/20 backdrop-blur-xl
                           bg-white/5 hover:bg-white/10 transition-all
                           duration-300 hover:-translate-y-1 hover:shadow-xl"
              >
                <div className="px-4 py-2 border-b border-white/10 bg-black/40 rounded-t-xl text-xs font-semibold flex justify-between">
                  <span>{edu.title}</span>
                  <span className="opacity-70">{edu.year}</span>
                </div>

                <div className="p-5 space-y-2">
                  <p className="text-sm font-medium">{edu.place}</p>
                  <p className="text-sm opacity-80 leading-relaxed">
                    {edu.desc}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* =======================
            RELEVANT COURSEWORK
        ======================== */}
        <section className="space-y-6">
          <h2 className="text-lg font-semibold tracking-wide">
            📘 Mata Kuliah Relevan
          </h2>

          <div
            className="rounded-xl border border-white/20 backdrop-blur-xl
                       bg-gradient-to-br from-cyan-500/10 to-blue-600/10
                       p-6 space-y-4"
          >
            <p className="text-sm opacity-80">
              Mata kuliah yang mendukung fokus pada Web Development,
              UI/UX, dan Sistem Informasi:
            </p>

            <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-3 text-xs">
              {[
                "Dasar Pemrograman",
                "Algoritma Pemrograman",
                "Konsep Basis Data",
                "Sistem Basis Data",
                "Sistem Informasi Manajemen",
                "Pengembangan Perangkat Lunak",
                "Teknologi Web",
                "Tata Kelola Teknologi Informasi",
                "Analisis Proses Bisnis",
                "Analisis Kebutuhan Sistem Informasi",
              ].map((course) => (
                <div
                  key={course}
                  className="rounded-lg bg-white/10 border border-white/15
                             px-3 py-2 text-center hover:bg-white/20 transition"
                >
                  {course}
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* TRAINING & CERTIFICATION */}
        <section className="space-y-6">
          <h2 className="text-lg font-semibold tracking-wide">
            📚 Pelatihan & Pengembangan Diri
          </h2>

          <div className="grid md:grid-cols-2 gap-6">
            {trainings.map((item) => (
              <div
                key={item.name}
                className="rounded-xl border border-white/20 backdrop-blur-xl
                           bg-gradient-to-br from-indigo-500/10 to-purple-500/10
                           hover:from-indigo-500/20 hover:to-purple-500/20
                           transition-all duration-300 hover:-translate-y-1 hover:shadow-xl"
              >
                <div className="px-4 py-2 border-b border-white/10 bg-black/40 rounded-t-xl text-xs font-semibold">
                  {item.name}
                </div>

                <div className="p-5 space-y-2">
                  <p className="text-xs opacity-70">{item.org}</p>
                  <p className="text-sm opacity-85 leading-relaxed">
                    {item.desc}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </section>

        <div className="text-xs opacity-60 text-center">
          Education Page • @aliefalikhsan
        </div>
      </div>
    </div>
  );
}
