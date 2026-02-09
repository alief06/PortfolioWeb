export default function Taskbar() {
  return (
    <div className="fixed bottom-0 left-0 w-full h-12 bg-black/80 text-white flex items-center px-4 z-50">
      <div className="text-sm font-semibold">Portfolio @aliefalikhsan</div>
      <div className="ml-auto text-xs opacity-70">
        {new Date().toLocaleTimeString()}
      </div>
    </div>
  );
}
