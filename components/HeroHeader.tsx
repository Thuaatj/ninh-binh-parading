/* eslint-disable @typescript-eslint/no-explicit-any */
/* components/HeroHeader.tsx – ĐÃ CHUYỂN HOÀN TOÀN SANG TIẾNG ANH + MẶC ĐỊNH ENGLISH */
"use client";

import { useEffect, useRef, useState } from "react";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronDown, Menu, X } from "lucide-react";
// import LanguageSwitcher from "./LanguageSwitcher";
import { FaVolumeUp, FaVolumeMute } from "react-icons/fa";
import LanguageSwitcher from "./LanguageSwitcher";
import { useTranslation } from "react-i18next";

export default function HeroHeader() {
  const { t } = useTranslation("common");
  const [scrolled, setScrolled] = useState(false);
  const [activeMenu, setActiveMenu] = useState<string | null>(null);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [openMobileItem, setOpenMobileItem] = useState<string | null>(null);

  const videoRef = useRef<HTMLVideoElement>(null);
  const [isMuted, setIsMuted] = useState(true);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const toggleSound = () => {
    if (!videoRef.current) return;
    videoRef.current.muted = !videoRef.current.muted;
    setIsMuted(videoRef.current.muted);
  };

  // DỮ LIỆU ĐÃ ĐƯỢC DỊCH SANG TIẾNG ANH
  const menuData: Record<string, any[]> = {
    booking: [
      { title: "40% OFF for groups of 6+", desc: "Super hot deal", img: "https://halongparagliding.com/wp-content/uploads/2025/11/z7260492120163_63794d4dbef5656cb23f058445ea2f69.jpg" },
      { title: "Tandem flight + Free 4K video", desc: "Professional drone filming", img: "https://halongparagliding.com/wp-content/uploads/2025/11/z7260492120163_63794d4dbef5656cb23f058445ea2f69.jpg" },
    ],
    events: [
      { title: "Morning flight", time: "06:00 – 10:00", price: "1.800.000₫" },
      { title: "Afternoon flight", time: "14:00 – 18:00", price: "2.200.000₫" },
      { title: "Sunset VIP", time: "17:30", price: "3.800.000₫", hot: true },
    ],
    hoi_an: ["Old Town", "Japanese Bridge", "Coconut Forest", "An Bang Beach", "Tra Que Village", "Thanh Ha Pottery"],
    da_nang: ["Dragon Bridge", "Ba Na Hills", "My Khe Beach", "Marble Mountains", "Asia Park", "Love Bridge"],
  };

  // MENU CHÍNH – TIẾNG ANH
  const navItems: { key: string; label: string }[] = [
    { key: "home", label: t("nav.home") },
    { key: "booking", label: t("nav.booking") },
    { key: "events", label: t("nav.events") },
    { key: "travel", label: t("nav.travel") },
    { key: "partners", label: t("nav.partners") },
    { key: "blog", label: t("nav.blog") },
    { key: "flight", label: t("nav.flight") },
  ];

  return (
    <>
      {/* VIDEO BACKGROUND */}
      <div className="relative h-screen w-full overflow-hidden">
        <video
          ref={videoRef}
          src="/videos/backgroud.mp4"
          autoPlay
          loop
          playsInline
          muted={isMuted}
          className="absolute top-0 left-0 w-full h-full object-cover"
        />

        {/* Sound Button */}
        <button
          onClick={toggleSound}
          className="absolute bottom-8 right-8 z-20 bg-black/50 hover:bg-black/70 text-white p-4 rounded-full backdrop-blur-md transition-all duration-300"
          aria-label={isMuted ? "Unmute" : "Mute"}
        >
          {isMuted ? <FaVolumeMute size={24} /> : <FaVolumeUp size={24} />}
        </button>
      </div>

      {/* HEADER */}
      <motion.header
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        transition={{ duration: 0.9, ease: "easeOut" }}
        className={`fixed inset-x-0 top-0 z-50 h-20 transition-all duration-500 
          font-['Roboto_Condensed'] uppercase tracking-wider text-sm font-semibold ${
          scrolled
            ? "bg-gradient-to-r from-[#00101d] via-[#002f4b] to-[#004d73] shadow-2xl backdrop-blur-xl text-[#ffe761]"
            : "bg-gradient-to-b from-black/70 via-black/40 to-transparent text-white"
        }`}
      >
        <div className="container mx-auto px-6 lg:px-16 h-full flex items-center justify-between">

          {/* LOGO */}
          <motion.div
            animate={{ rotateY: [0, 360, 0] }}
            transition={{ duration: 10, repeat: Infinity, ease: "linear" }}
          >
            <Image
              src="/images/logo2.png"
              alt="Ninh Binh Paragliding"
              width={230}
              height={50}
              priority
              className="drop-shadow-xl"
            />
          </motion.div>

          {/* DESKTOP MENU */}
          <nav className="hidden lg:flex items-center gap-4">
            {navItems.map((item) => (
              <div
                key={item.key}
                className="relative"
                onMouseEnter={() => menuData[item.key] && setActiveMenu(item.key)}
                onMouseLeave={() => setActiveMenu(null)}
              >
                <motion.a
                  href="#"
                  className={`flex items-center gap-1.1 px-3 py-1 transition-all duration-300 ${
                    scrolled
                      ? "text-[#ffe761] hover:text-white"
                      : "text-white hover:text-[#ffe761]"
                  }`}
                  whileHover={{ y: -3 }}
                >
                  {item.label}
                  {menuData[item.key] && <ChevronDown className="w-4 h-4" />}
                </motion.a>

                {/* DROPDOWN */}
                <AnimatePresence>
                  {menuData[item.key] && activeMenu === item.key && (
                    <motion.div
                      initial={{ opacity: 0, y: 15 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0, y: 15 }}
                      className="absolute top-full left-1/2 -translate-x-1/2 mt-4 w-96 bg-white rounded-2xl shadow-2xl border border-gray-100 overflow-hidden z-50"
                    >
                      <div className="p-6">
                        {/* OFFERS */}
                        {item.key === "booking" && menuData[item.key].map((x: any) => (
                          <div key={x.title} className="flex gap-4 mb-5 last:mb-0 group">
                            <div className="w-20 h-20 rounded-xl overflow-hidden shadow-lg flex-shrink-0">
                              <Image src={x.img} alt={x.title} width={80} height={80} className="object-cover group-hover:scale-110 transition" />
                            </div>
                            <div>
                              <h4 className="font-bold text-gray-900">{x.title}</h4>
                              <p className="text-sm text-gray-600">{x.desc}</p>
                            </div>
                          </div>
                        ))}

                        {/* BOOK NOW */}
                        {item.key === "events" && menuData[item.key].map((x: any) => (
                          <div key={x.title} className="p-5 mb-4 last:mb-0 bg-gradient-to-r from-cyan-50 to-blue-50 rounded-xl border border-cyan-100">
                            <div className="flex justify-between items-center">
                              <div>
                                <h4 className="font-bold text-gray-900 flex items-center gap-2">
                                  {x.title}
                                  {x.hot && <span className="text-xs bg-red-500 text-white px-2.5 py-1 rounded-full animate-pulse">HOT</span>}
                                </h4>
                                <p className="text-sm text-gray-600">{x.time}</p>
                              </div>
                              <span className="text-2xl font-bold text-cyan-600">{x.price}</span>
                            </div>
                          </div>
                        ))}

                        {(item.key === "hoi_an" || item.key === "da_nang") && (
                          <div className="grid grid-cols-2 gap-3">
                            {menuData[item.key].map((place: string) => (
                              <div key={place} className="py-3 text-center rounded-lg hover:bg-cyan-50 font-medium text-gray-700 cursor-pointer transition">
                                {place}
                              </div>
                            ))}
                          </div>
                        )}
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            ))}
          </nav>

          {/* RIGHT SIDE */}
          <div className="flex items-center gap-4">
            <LanguageSwitcher scrolled={scrolled} />

            {/* SOCIAL ICONS */}
            <div className="hidden md:flex items-center gap-4">
              {[
                { name: "facebook", url: "https://upload.wikimedia.org/wikipedia/commons/e/ee/Logo_de_Facebook.png", link: "https://www.facebook.com/share/1XDTTvezVb/" },
                { name: "instagram", url: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT-LEWI88wVZBQZ4YmnUfwXBQb02j8DbJL--g&s", link: "https://www.instagram.com/paraglidingninhbinh?igsh=MTczYzFvNWI0MnQxOQ==" },
                { name: "tiktok", url: "https://img.freepik.com/vector-cao-cap/logo-tik-tok_578229-290.jpg?w=740", link: "https://tiktok.com/@youraccount" },
              ].map((social) => (
                <motion.a
                  key={social.name}
                  href={social.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  whileHover={{ scale: 1.5, rotate: 360 }}
                  transition={{ duration: 0.5 }}
                >
                  <Image src={social.url} alt={social.name} width={30} height={30} className="drop-shadow-lg" />
                </motion.a>
              ))}
            </div>

            {/* MOBILE MENU BUTTON */}
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="lg:hidden p-2 text-white"
            >
              {mobileMenuOpen ? <X size={30} /> : <Menu size={30} />}
            </button>
          </div>
        </div>
      </motion.header>

      {/* MOBILE MENU – TIẾNG ANH */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <>
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setMobileMenuOpen(false)}
              className="fixed inset-0 bg-black/60 z-40 lg:hidden"
            />
            <motion.div
              initial={{ x: "100%" }}
              animate={{ x: 0 }}
              exit={{ x: "100%" }}
              transition={{ type: "spring", stiffness: 300, damping: 30 }}
              className="fixed right-0 top-0 h-full w-80 bg-white shadow-2xl z-50 lg:hidden overflow-y-auto"
            >
              <div className="p-6 pt-20">
                <button
                  onClick={() => setMobileMenuOpen(false)}
                  className="absolute top-6 right-6"
                >
                  <X size={32} className="text-gray-600" />
                </button>

                {navItems.map((item) => (
                  <div key={item.key} className="border-b border-gray-200 last:border-0">
                    <button
                      onClick={() => setOpenMobileItem(openMobileItem === item.key ? null : item.key)}
                      className={`w-full py-5 flex justify-between items-center text-left uppercase tracking-wider font-['Roboto_Condensed'] text-base ${
                        item.key === "home" ? "text-cyan-600 font-bold" : "text-gray-800"
                      }`}
                    >
                      {item.label}
                      {menuData[item.key] && (
                        <ChevronDown
                          className={`w-5 h-5 transition-transform duration-300 ${
                            openMobileItem === item.key ? "rotate-180" : ""
                          }`}
                        />
                      )}
                    </button>

                    {/* Mobile submenu – đã dịch tiếng Anh */}
                    <AnimatePresence>
                      {menuData[item.key] && openMobileItem === item.key && (
                        <motion.div
                          initial={{ height: 0, opacity: 0 }}
                          animate={{ height: "auto", opacity: 1 }}
                          exit={{ height: 0, opacity: 0 }}
                          className="overflow-hidden pb-4"
                        >
                          <div className="pl-6 space-y-4">
                            {item.key === "events" && menuData[item.key].map((x: any) => (
                              <div key={x.title} className="bg-gradient-to-r from-cyan-50 to-blue-50 rounded-lg p-4">
                                <p className="font-bold text-gray-900">{x.title} {x.hot && "HOT"}</p>
                                <p className="text-sm text-gray-600">{x.time}</p>
                                <p className="text-xl font-bold text-cyan-600 mt-2">{x.price}</p>
                              </div>
                            ))}

                            {item.key === "booking" && menuData[item.key].map((x: any) => (
                              <div key={x.title}>
                                <p className="font-semibold text-gray-800">{x.title}</p>
                                <p className="text-sm text-gray-600">{x.desc}</p>
                              </div>
                            ))}

                            {(item.key === "hoi_an" || item.key === "da_nang") && menuData[item.key].map((place: string) => (
                              <p key={place} className="text-gray-700 py-1">• {place}</p>
                            ))}
                          </div>
                        </motion.div>
                      )}
                    </AnimatePresence>
                  </div>
                ))}
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </>
  );
}
