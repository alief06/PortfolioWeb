import { useRef } from "react";

export default function DesktopIcon({ label, onOpen, x, y }) {
  const lastClick = useRef(0);

  const handleClick = () => {
    const now = Date.now();
    if (now - lastClick.current < 300) {
      onOpen();
    }
    lastClick.current = now;
  };

  return (
    <div
      onClick={handleClick}
      className="absolute flex flex-col items-center text-white text-xs cursor-pointer hover:scale-105 transition"
      style={{ left: x, top: y }}
    >
      <div className="w-12 h-12 bg-white/20 rounded-lg mb-1"></div>
      <span>{label}</span>
    </div>
  );
}
