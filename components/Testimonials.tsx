"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { Star, Play } from "lucide-react";
import { useRef, useEffect, useState } from "react";
import { FaVolumeUp, FaVolumeMute } from "react-icons/fa";
import { useTranslation } from "react-i18next";

// testimonials from i18n resources will be mapped with avatars inside component

/* ==== Component Video mới: Auto-play khi scroll, click để pause/play ==== */
function VideoExperience() {
  const videoRef = useRef<HTMLVideoElement | null>(null);
  const [isPlaying, setIsPlaying] = useState(true);

  useEffect(() => {
    const video = videoRef.current;
    if (!video) return;

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            video.play().catch(() => {});
            setIsPlaying(true);
          } else {
            video.pause();
            setIsPlaying(false);
          }
        });
      },
      { threshold: 0.5 }
    );

    observer.observe(video);

    return () => observer.disconnect();
  }, []);

  const togglePlay = () => {
    const v = videoRef.current;
    if (!v) return;

    if (v.paused) {
      v.play();
      setIsPlaying(true);
    } else {
      v.pause();
      setIsPlaying(false);
    }
  };

const [isMuted, setIsMuted] = useState(true);
  const toggleSound = () => {
    if (!videoRef.current) return;
    videoRef.current.muted = !videoRef.current.muted;
    setIsMuted(videoRef.current.muted);
  };

  return (
    <div
      className="relative group cursor-pointer overflow-hidden rounded-3xl shadow-2xl"
      onClick={togglePlay}
    >
      {/* VIDEO – auto-play theo scroll */}
      <video
        ref={videoRef}
        src="/videos/video2.mp4"  // ⭐ Thay bằng video thật của bạn
        autoPlay
        loop
        playsInline
        muted={true}
        className="w-full aspect-video rounded-3xl"
      />

      {/* Nút Loa */}
        <button
          onClick={toggleSound}
          className="absolute bottom-6 right-6 z-20 bg-black/40 hover:bg-black/60 text-white p-3 rounded-full backdrop-blur-md transition"
        >
          {isMuted ? (
            <FaVolumeMute size={22} />
          ) : (
            <FaVolumeUp size={22} />
          )}
        </button>

      {/* OVERLAY PLAY */}
      {/* {!isPlaying && (
        <div className="absolute inset-0 bg-black/40 flex items-center justify-center transition-opacity duration-500 pointer-events-none">
          <div className="w-24 h-24 lg:w-32 lg:h-32 bg-white/90 backdrop-blur-md rounded-full flex items-center justify-center shadow-2xl">
            <Play className="w-12 h-12 lg:w-16 lg:h-16 text-emerald-600 ml-2" />
          </div>
        </div>
      )} */}

      {/* GRADIENT HOVER */}
      <div
        className="absolute inset-0 rounded-3xl bg-gradient-to-br from-emerald-500 via-cyan-500 to-teal-600 
        opacity-0 group-hover:opacity-100 transition-opacity duration-700 -z-10 blur-xl scale-105"
      />
    </div>
  );
}

export default function TestimonialWithVideo() {
  const { t } = useTranslation("common");
  const avatars = [
    "data:image/jpeg;base64,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",
    "data:image/jpeg;base64,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",
    "https://toomva.com/images/posts/2021/03/mau-sac-tieng-anh-cau-vong.jpg",
    "https://www.ismartkids.vn/uploads/images/cau-vong-lua-la-gi-giai-thich-hien-tuong-cau-vong-lua.jpg",
    "https://api-static.bacsicayxanh.vn/pictures/0003987_lua-nuoc_500.png.webp",
    "https://media-cdn-v2.laodong.vn/storage/newsportal/2024/10/22/1411188/Lua-13.jpg",
  ];
  const items = t("testimonials.items", { returnObjects: true }) as Array<{ name: string; role: string; text: string }>;
  const testimonials = items.map((it, i) => ({ ...it, avatar: avatars[i] }));
  return (
    <section className="py-0 lg:py-40 bg-gradient-to-b from-white via-emerald-50/20 to-white overflow-hidden">
      <div className="container mx-auto px-6 lg:px-8 max-w-7xl">

        {/* Title */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 1, ease: "easeOut" }}
          className="text-center mb-16 lg:mb-28"
        >
          <h2 className="text-6xl lg:text-8xl font-black tracking-tighter text-gray-900 leading-none">
            {t("testimonials.title")}
          </h2>
          <p className="mt-6 text-xl lg:text-2xl text-gray-600 font-light">
            {t("testimonials.subtitle")}
          </p>
        </motion.div>

        {/* Testimonials */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12 lg:gap-16 mb-24 lg:mb-32">
          {testimonials.map((t, i) => (
            <motion.article
              key={i}
              initial={{ opacity: 0, y: 60 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: i * 0.15, ease: [0.22, 1, 0.36, 1] }}
              whileHover={{ y: -12 }}
              className="group relative flex flex-col items-center text-center"
            >
              <motion.div whileHover={{ scale: 1.1 }} className="relative mb-8">
                <motion.div
                  animate={{ scale: [1, 1.15, 1] }}
                  transition={{ duration: 4, repeat: Infinity }}
                  className="absolute inset-0 bg-gradient-to-br from-emerald-400/30 to-cyan-400/30 blur-3xl opacity-0 group-hover:opacity-100 transition-opacity"
                />
                <Image
                  src={t.avatar}
                  alt={t.name}
                  width={360}
                  height={360}
                  className="w-32 h-32 lg:w-40 lg:h-40 rounded-full object-cover border-4 border-white shadow-xl group-hover:shadow-2xl transition-all duration-700"
                />
              </motion.div>

              <h3 className="text-2xl lg:text-3xl font-bold text-gray-900">{t.name}</h3>
              <p className="mt-1 text-base lg:text-lg text-gray-600">{t.role}</p>
              <div className="flex gap-1 my-5">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="w-5 h-5 fill-amber-400 text-amber-400" />
                ))}
              </div>
              <p className="text-lg lg:text-xl leading-relaxed text-gray-700 italic max-w-sm">
                “{t.text}”
              </p>
            </motion.article>
          ))}
        </div>

        {/* VIDEO EXPERIENCE */}
        <motion.div
          initial={{ opacity: 0, y: 80 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 1.2, ease: "easeOut" }}
          className="relative max-w-9xl mx-auto"
        >
          <div className="text-center mb-12">
            <h3 className="text-4xl lg:text-6xl font-black tracking-tight text-gray-900">
              {t("testimonials.watch_title")}
            </h3>
            <p className="mt-4 text-lg lg:text-xl text-gray-600">
              {t("testimonials.watch_subtitle")}
            </p>
          </div>

          <VideoExperience />

          <p className="text-center mt-8 text-lg text-gray-600 italic">
            {t("testimonials.video_note")}
          </p>
        </motion.div>

        {/* CTA */}
        <motion.div
          initial={{ opacity: 0, y: 60 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.6, duration: 1.2 }}
          className="text-center mt-32 lg:mt-40"
        >
          <p className="text-5xl lg:text-7xl font-black tracking-tighter text-gray-900">
            {t("testimonials.cta.top")}
          </p>
          <motion.p
            className="text-6xl lg:text-8xl font-black tracking-tighter text-transparent bg-clip-text bg-gradient-to-r from-emerald-600 via-cyan-600 to-teal-700 -mt-6 lg:-mt-12"
            animate={{ backgroundPosition: ["0%", "100%", "0%"] }}
            transition={{ duration: 8, repeat: Infinity, ease: "linear" }}
            style={{ backgroundSize: "200% 200%" }}
          >
            {t("testimonials.cta.bottom")}
          </motion.p>
        </motion.div>
      </div>
    </section>
  );
}

