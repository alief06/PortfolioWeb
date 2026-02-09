import React, { useState, useEffect } from "react";
import { NavLink } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const [dark, setDark] = useState(false);

  // DARK MODE ke <html>
  useEffect(() => {
    const root = document.documentElement;
    dark ? root.classList.add("dark") : root.classList.remove("dark");
  }, [dark]);

  const links = [
    { to: "/", label: "Home" },
    { to: "/skills", label: "Skills" },
    { to: "/experience", label: "Experience" },
    { to: "/education", label: "Education" },
    { to: "/contact", label: "Contact" },
  ];

  return (
    <nav className="fixed top-4 left-1/2 -translate-x-1/2 z-50 w-[92%] max-w-5xl">
      {/* BAR */}
      <div className="flex items-center justify-between px-6 py-3 rounded-2xl border border-white/20 bg-white/70 dark:bg-slate-900/70 backdrop-blur shadow-md">
        {/* LOGO */}
        <span className="font-mono font-bold tracking-[0.25em] text-sm dark:text-white">
          MYRESUME.OS
        </span>

        {/* DESKTOP MENU */}
        <div className="hidden md:flex gap-6">
          {links.map((l) => (
            <NavLink key={l.to} to={l.to}>
              {({ isActive }) => (
                <motion.span
                  whileHover={{ y: -2 }}
                  transition={{ type: "spring", stiffness: 300 }}
                  className={`relative text-sm cursor-pointer ${
                    isActive
                      ? "text-yellow-400"
                      : "text-slate-700 dark:text-slate-300"
                  }`}
                >
                  {l.label}
                  {isActive && (
                    <motion.span
                      layoutId="nav-underline"
                      className="absolute -bottom-1 left-0 h-[2px] w-full bg-yellow-400"
                    />
                  )}
                </motion.span>
              )}
            </NavLink>
          ))}
        </div>

        {/* CONTROLS */}
        <div className="flex items-center gap-2">
          {/* DARK MODE */}
          <button
            onClick={() => setDark(!dark)}
            className="text-xs px-2 py-1 rounded border border-slate-300 dark:border-slate-600 dark:text-white"
          >
            {dark ? "🌙" : "☀️"}
          </button>

          {/* MOBILE BUTTON */}
          <button
            onClick={() => setOpen(!open)}
            className="md:hidden text-xl dark:text-white"
          >
            ☰
          </button>
        </div>
      </div>

      {/* MOBILE MENU */}
      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            className="md:hidden mt-2 overflow-hidden rounded-xl bg-white dark:bg-slate-900 shadow-md"
          >
            <div className="flex flex-col gap-3 p-4">
              {links.map((l) => (
                <NavLink
                  key={l.to}
                  to={l.to}
                  onClick={() => setOpen(false)}
                  className="text-slate-700 dark:text-slate-300"
                >
                  {l.label}
                </NavLink>
              ))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
}