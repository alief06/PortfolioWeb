import { useState } from "react";
import { useNavigate, useLocation } from "react-router-dom";

let globalZ = 10;

export default function WindowCard({
  title,
  to, // route tujuan (contoh: "/projects")
  bgColor = "#fecdd3",
  defaultPos = { x: 100, y: 100 },
  width = 320,
  children,
}) {
  const navigate = useNavigate();
  const location = useLocation();

  const [zIndex, setZIndex] = useState(globalZ);

  const bringToFront = () => {
    globalZ += 1;
    setZIndex(globalZ);
  };

  // 🔥 STATUS MAXIMIZE DIAMBIL DARI ROUTE
  const isMaximized = to && location.pathname === to;

  return (
    <div
      onMouseDown={bringToFront}
      className="rounded-xl shadow-xl border border-black/40 transition-all duration-300 overflow-hidden"
      style={
        isMaximized
          ? {
              position: "fixed",
              inset: 12,
              zIndex,
              backgroundColor: bgColor,
            }
          : {
              position: "absolute",
              left: defaultPos.x,
              top: defaultPos.y,
              width,
              zIndex,
              backgroundColor: bgColor,
            }
      }
    >
      {/* HEADER */}
      <div className="flex items-center justify-between px-3 py-1 bg-black/70 text-white text-xs">
        <span>{title}</span>

        <div className="flex gap-1">
          {/* MINIMIZE */}
          <button
            onClick={() => navigate("/")}
            className="w-3 h-3 rounded-full bg-yellow-400"
            title="Minimize"
          />

          {/* MAXIMIZE */}
          <button
            onClick={() => to && navigate(to)}
            className="w-3 h-3 rounded-full bg-green-500"
            title="Maximize"
          />

          {/* CLOSE */}
          <button
            onClick={() => navigate("/")}
            className="w-3 h-3 rounded-full bg-red-500"
            title="Close"
          />
        </div>
      </div>

      {/* CONTENT */}
      <div
        className={`p-4 text-sm text-black ${
          isMaximized ? "h-full overflow-y-auto" : ""
        }`}
      >
        {children}
      </div>
    </div>
  );
}
