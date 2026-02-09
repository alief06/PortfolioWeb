import { useNavigate } from "react-router-dom";

export default function Contact() {
  const navigate = useNavigate();

  const contacts = [
    {
      label: "Email",
      value: "alikhsanalief@gmail.com",
      icon: "📧",
      desc: "Untuk diskusi project, kerja sama, atau pertanyaan profesional.",
    },
    {
      label: "GitHub",
      value: "github.com/alief06",
      icon: "💻",
      desc: "Lihat source code, portfolio, dan project yang sedang dikembangkan.",
    },
    {
      label: "Instagram",
      value: "@alikhsanalief",
      icon: "📸",
      desc: "Seputar aktivitas, desain, dan proses belajar.",
    },
    {
      label: "LinkedIn",
      value: "linkedin.com/in/M. Anang Alief Al Ikhsan Setiawan",
      icon: "🔗",
      desc: "Koneksi profesional dan pengalaman akademik.",
    },
  ];

  return (
    <div className="relative min-h-screen bg-slate-900 text-white overflow-hidden">
      {/* GRID BACKGROUND */}
      <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.04)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.04)_1px,transparent_1px)] bg-[size:40px_40px]" />

      <div className="relative z-10 max-w-5xl mx-auto px-12 py-12 space-y-12">

        {/* WINDOW HEADER */}
        <div className="flex items-center justify-between rounded-xl border border-white/20 bg-black/50 backdrop-blur-xl px-4 py-2 shadow-lg">
          <span className="text-sm font-semibold">Contact</span>

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

        {/* INTRO */}
        <div className="max-w-3xl space-y-3">
          <h1 className="text-2xl font-bold">
            Mari Terhubung 🤝
          </h1>
          <p className="text-sm opacity-80 leading-relaxed">
            Saya terbuka untuk diskusi, kolaborasi, maupun peluang kerja sama di
            bidang pengembangan web, sistem informasi, dan desain antarmuka.
            Jangan ragu untuk menghubungi saya melalui platform di bawah ini.
          </p>
        </div>

        {/* CONTACT CARDS */}
        <div className="grid md:grid-cols-2 gap-6">
          {contacts.map((item) => (
            <div
              key={item.label}
              className="rounded-xl border border-white/20 backdrop-blur-xl
                         bg-white/5 hover:bg-white/10 transition-all
                         duration-300 hover:-translate-y-1 hover:shadow-xl"
            >
              <div className="px-4 py-3 border-b border-white/10 bg-black/40 rounded-t-xl flex items-center gap-3">
                <span className="text-lg">{item.icon}</span>
                <span className="text-sm font-semibold">
                  {item.label}
                </span>
              </div>

              <div className="p-5 space-y-2">
                <p className="text-sm font-medium">
                  {item.value}
                </p>
                <p className="text-sm opacity-75 leading-relaxed">
                  {item.desc}
                </p>
              </div>
            </div>
          ))}
        </div>

        {/* CTA */}
        <div
          className="rounded-xl border border-indigo-400/30
                     bg-gradient-to-r from-indigo-500/20 to-purple-500/20
                     p-6 backdrop-blur-xl text-center space-y-3"
        >
          <h2 className="text-lg font-semibold">
            🚀 Tertarik Bekerja Sama?
          </h2>
          <p className="text-sm opacity-80 max-w-xl mx-auto">
            Baik itu project individu, kerja tim, pengembangan sistem,
            atau sekadar diskusi ide — saya selalu terbuka untuk peluang
            baru dan kolaborasi yang saling menguntungkan.
          </p>

          <div className="flex justify-center gap-4 pt-2">
            <a
              href="mailto:alikhsanalief@gmail.com"
              className="px-4 py-2 rounded-lg bg-indigo-500/80
                         hover:bg-indigo-500 transition text-sm font-medium"
            >
              Kirim Email
            </a>
            <a
              href="https://github.com/alief06"
              target="_blank"
              rel="noreferrer"
              className="px-4 py-2 rounded-lg bg-white/10
                         hover:bg-white/20 transition text-sm font-medium"
            >
              Lihat GitHub
            </a>
          </div>
        </div>

        <div className="text-xs opacity-60 text-center">
          Contact Page • @aliefalikhsan
        </div>
      </div>
    </div>
  );
}
