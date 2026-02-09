export default function SystemStatus() {
  return (
    <div
      className="
        relative w-[280px] h-[180px]
        rounded-2xl
        backdrop-blur-xl
        bg-white/10
        border border-white/20
        shadow-[0_0_30px_rgba(99,102,241,0.25)]
        p-4
      "
    >
      {/* soft glow */}
      <div className="absolute inset-0 rounded-2xl bg-gradient-to-br from-indigo-500/20 to-cyan-400/10 blur-xl" />

      <div className="relative z-10">
        <p className="text-xs tracking-widest opacity-70 mb-3">
          SYSTEM STATUS
        </p>

        <div className="space-y-2 text-xs">
          <StatusRow label="Status" value="Active" active />
          <StatusRow label="Focus" value="Frontend & UI/UX" />
          <StatusRow label="Learning" value="React + Tailwind" />
          <StatusRow label="Availability" value="Open for Project" />
        </div>
      </div>
    </div>
  );
}

function StatusRow({ label, value, active }) {
  return (
    <div className="flex justify-between items-center">
      <span className="opacity-70">{label}</span>
      <span className="flex items-center gap-2">
        {active && (
          <span className="relative flex h-2 w-2">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75"></span>
            <span className="relative inline-flex rounded-full h-2 w-2 bg-green-400"></span>
          </span>
        )}
        <span className="font-medium">{value}</span>
      </span>
    </div>
  );
}
