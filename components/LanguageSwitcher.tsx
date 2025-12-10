"use client";

import { useState, useMemo } from "react";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import { useTranslation } from "react-i18next";

const languages = [
  { code: "vi", name: "VI", flag: "https://flagcdn.com/w40/vn.png" },
  { code: "en", name: "EN", flag: "https://flagcdn.com/w40/gb.png" },
];

export default function LanguageSwitcher({ scrolled }: { scrolled: boolean }) {
  const [isOpen, setIsOpen] = useState(false);
  const { i18n } = useTranslation();
  const currentLang = useMemo(() => {
    return languages.find(l => l.code === i18n.language) || languages[0];
  }, [i18n.language]);

  return (
    <div className="relative">
      {/* NÚT CHÍNH – CHỈ ĐỂ TRANG TRÍ, BẤM VẪN MỞ DROPDOWN ĐẸP */}
      <motion.button
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.95 }}
        onClick={() => setIsOpen(!isOpen)}
        className={`flex items-center gap-3 px-5 py-2.5 rounded-full font-bold text-sm transition-all duration-300 shadow-lg ${
          scrolled
            ? "bg-white border-2 border-cyan-600 text-cyan-700 hover:shadow-cyan-200"
            : "bg-white/20 backdrop-blur-xl border-2 border-white text-white hover:bg-white/30"
        }`}
      >
        <Image
          src={currentLang.flag}
          alt={currentLang.name}
          width={28}
          height={21}
          className="rounded-sm shadow-md"
        />
        <span>{currentLang.name}</span>
        <motion.svg
          animate={{ rotate: isOpen ? 180 : 0 }}
          className="w-4 h-4"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
        >
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
        </motion.svg>
      </motion.button>

      {/* DROPDOWN – ĐẸP, HIỆN THỊ TẤT CẢ CỜ, NHƯNG KHÔNG LÀM GÌ CẢ */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: -10, scale: 0.95 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: -10, scale: 0.95 }}
            className="absolute top-full right-0 mt-3 w-48 bg-white rounded-2xl shadow-2xl border border-gray-100 overflow-hidden z-50"
          >
            {languages.map((lang) => (
              <motion.div
                key={lang.code}
                whileHover={{ backgroundColor: "#ecfeff" }}
                className="flex items-center gap-4 w-full px-5 py-4 cursor-pointer"
                onClick={() => {
                  i18n.changeLanguage(lang.code);
                  setIsOpen(false);
                }}
              >
                <Image src={lang.flag} alt={lang.name} width={36} height={27} className="rounded-sm shadow" />
                <span className="font-semibold text-gray-800">{lang.name}</span>
              </motion.div>
            ))}
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
