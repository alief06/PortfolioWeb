import { useEffect, useState } from "react";

const Cursor = () => {
  const [pos, setPos] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const move = (e) => setPos({ x: e.clientX, y: e.clientY });
    window.addEventListener("mousemove", move);
    return () => window.removeEventListener("mousemove", move);
  }, []);

  return (
    <div
      className="fixed pointer-events-none z-[9999]"
      style={{ left: pos.x + 8, top: pos.y + 8 }}
    >
      <span className="text-xl">🖱️</span>
    </div>
  );
};

export default Cursor;
