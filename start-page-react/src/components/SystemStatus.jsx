export default function SystemStatus() {
  return (
    <div
      className="
        relative w-[280px] min-h-[180px]
        glass glass-hover
        p-5 z-10
      "
    >
      <div className="relative z-10">
        <div className="flex items-center justify-between mb-4">
          <p className="text-[10px] font-bold tracking-[0.2em] text-indigo-400 uppercase">
            System OS v2.0
          </p>
          <div className="flex gap-1">
            <div className="w-1.5 h-1.5 rounded-full bg-indigo-500/50" />
            <div className="w-1.5 h-1.5 rounded-full bg-indigo-500/30" />
          </div>
        </div>

        <div className="space-y-3">
          <StatusRow label="Status" value="Active" active />
          <StatusRow label="Core" value="Frontend Tech" />
          <StatusRow label="Stack" value="React / Tailwind" />
          <StatusRow label="Uptime" value="100% Available" />
        </div>
      </div>
    </div>
  );
}

function StatusRow({ label, value, active }) {
  return (
    <div className="flex justify-between items-center group">
      <span className="text-[11px] text-white/50 font-medium">{label}</span>
      <div className="flex items-center gap-2">
        {active && (
          <div className="relative flex h-2 w-2">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75"></span>
            <span className="relative inline-flex rounded-full h-2 w-2 bg-green-400"></span>
          </div>
        )}
        <span className={`text-[11px] font-mono ${active ? 'text-green-400' : 'text-white/90'}`}>
          {value}
        </span>
      </div>
    </div>
  );
}
