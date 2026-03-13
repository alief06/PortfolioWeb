import { useNavigate } from "react-router-dom";

export default function About() {
  const navigate = useNavigate();

  return (
    <div className="relative min-h-screen bg-slate-900 text-white overflow-hidden">
      {/* GRID BACKGROUND */}
      <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.04)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.04)_1px,transparent_1px)] bg-[size:40px_40px]" />

      <div className="relative z-10 max-w-6xl mx-auto px-12 py-12 space-y-10">

        {/* WINDOW HEADER */}
        <div className="flex items-center justify-between rounded-xl border border-white/20 bg-black/50 backdrop-blur-xl px-4 py-2 shadow-lg">
          <span className="text-sm font-semibold">About Me</span>

          {/* WINDOW CONTROLS */}
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

        {/* CONTENT */}
        <div className="grid md:grid-cols-2 gap-8">

          {/* PROFILE */}
          <div className="rounded-xl border border-white/20 shadow-xl backdrop-blur-xl bg-gradient-to-br from-pink-500/30 to-purple-600/30">
            <div className="px-4 py-2 border-b border-white/10 bg-black/40 rounded-t-xl text-xs font-semibold">
              👤 Profile
            </div>
            <div className="p-5 text-sm space-y-3 leading-relaxed">

              <p>
                Saya adalah mahasiswa{" "}
                <span className="font-semibold">Sistem Informasi</span> yang
                berfokus pada pengembangan web modern dengan pendekatan UI/UX-driven.
                Saya senang membangun aplikasi yang tidak hanya berjalan dengan baik,
                tetapi juga terasa intuitif dan menyenangkan digunakan.
              </p>

              <p>
                Dalam beberapa proyek akademik dan personal, saya terbiasa
                mengerjakan frontend menggunakan React dan Tailwind,
                merancang prototype di Figma, serta menyusun struktur aplikasi
                yang rapi dan mudah dikembangkan.
              </p>

              <p>
                Saya dikenal sebagai pribadi yang teliti, cepat belajar,
                dan nyaman bekerja dalam tim maupun secara mandiri,
                terutama ketika mengerjakan produk digital dari tahap ide
                hingga implementasi.
              </p>

            </div>
          </div>

          {/* INFO */}
          <div className="rounded-xl border border-white/20 shadow-xl backdrop-blur-xl bg-gradient-to-br from-cyan-500/30 to-blue-600/30">
            <div className="px-4 py-2 border-b border-white/10 bg-black/40 rounded-t-xl text-xs font-semibold">
              📌 Info
            </div>

            <div className="p-5 text-sm space-y-2 leading-relaxed">

              <p>
                <span className="opacity-70">Nama:</span>{" "}
                M. Anang Alief Al Ikhsan Setiawan
              </p>

              <p>
                <span className="opacity-70">Program Studi:</span>{" "}
                Sistem Informasi
              </p>

              <p>
                <span className="opacity-70">Fokus:</span>{" "}
                Frontend Development • UI/UX • Design System
              </p>

              <p>
                <span className="opacity-70">Target Karier:</span>{" "}
                Frontend Engineer / UI Engineer (Intern / Junior)
              </p>

              <p>
                <span className="opacity-70">Pengalaman:</span>{" "}
                Mini project akademik & personal
              </p>

              <p className="pt-2 opacity-80">
                Saat ini saya aktif memperdalam accessibility,
                component-driven development, serta eksplorasi
                OS-style interface sebagai identitas visual portfolio saya.
              </p>

            </div>
          </div>

        </div>

        <div className="text-xs opacity-60 text-center">
          About Page • @aliefalikhsan
        </div>
      </div>
    </div>
  );
}
