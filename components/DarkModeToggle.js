"use client";
import { useEffect, useState } from "react";

export default function DarkModeToggle() {
  const [dark, setDark] = useState(true);

  useEffect(() => {
    document.documentElement.classList.toggle("dark", dark);
  }, [dark]);

  return (
    <button
      onClick={() => setDark(!dark)}
      aria-label="Toggle Dark Mode"
      className="fixed bottom-4 right-4 z-50 p-3 rounded-full bg-dark-card border border-gray-700 text-white shadow-md hover:scale-105 transition duration-200"
    >
      {dark ? "🌙" : "☀️"}
    </button>
  );
}
