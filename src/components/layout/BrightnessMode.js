"use client";

import { useEffect, useState } from "react";
import { FaMoon, FaSun } from "react-icons/fa";

export default function BrightnessModez() {
  const [theme, setTheme] = useState("light");
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    // 1. Check browser theme preference
    const mediaQuery = window.matchMedia("(prefers-color-scheme: dark)");
    const initialTheme = mediaQuery.matches ? "dark" : "light";

    setTheme(initialTheme);
    setMounted(true);

    // Apply class to <html> root
    if (initialTheme === "dark") {
      document.documentElement.classList.add("dark");
    } else {
      document.documentElement.classList.remove("dark");
    }
  }, []);

  const toggleMode = () => {
    const nextTheme = theme === "dark" ? "light" : "dark";
    setTheme(nextTheme);

    // Toggle 'dark' class on <html> for Tailwind dark: variants
    if (nextTheme === "dark") {
      document.documentElement.classList.add("dark");
    } else {
      document.documentElement.classList.remove("dark");
    }
  };

  // Prevent layout shift/hydration mismatch before client mounts
  if (!mounted) return null;

  return (<button onClick={toggleMode} aria-label="Toggle brightness mode" className="fixed z-30 bottom-5 right-10 rounded-full bg-neutral-900 text-white dark:bg-neutral-100 dark:text-black h-12 w-12 shadow-lg backdrop-blur-xl flex items-center justify-center transition-all duration-200 hover:scale-105 active:scale-95">

      {theme === "dark" ? <FaSun className="text-yellow-400 text-xl" /> : <FaMoon className="text-gray-400" />}

    </button>
  );
}