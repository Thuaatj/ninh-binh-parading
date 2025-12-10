"use client";

import { useState, useEffect } from "react";
import { ChevronUp } from "lucide-react";

export default function BackToTopButton() {
  const [showBackTop, setShowBackTop] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      // Hiện khi lướt xuống hơn 300px
      setShowBackTop(window.scrollY > 300);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <button
      id="backTop"
      type="button"
      aria-label="Lên đầu trang"
      onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
      className={`fixed bottom-6 right-6 z-50 w-12 h-12 rounded-full inline-flex items-center justify-center 
        bg-[#c9e265] text-[#244556] shadow-[0_10px_24px_rgba(0,0,0,0.18)]
        hover:brightness-95 active:translate-y-px focus-visible:outline-none focus-visible:ring-2 
        focus-visible:ring-[#244556]/40 transition-all duration-500 ease-in-out
        ${showBackTop ? "opacity-100 visible" : "opacity-0 invisible translate-y-4"}`}
    >
      <ChevronUp className="w-5 h-5" />
    </button>
  );
}
