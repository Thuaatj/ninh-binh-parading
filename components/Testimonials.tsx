"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { Star, Play } from "lucide-react";
import { useRef, useEffect, useState } from "react";
import { FaVolumeUp, FaVolumeMute } from "react-icons/fa";

const testimonials = [
  { name: "Ngọc Anh", role: "Đã bay 7 lần", text: "Ninh Bình thật sự yên bình đúng như tên gọi. Cảnh núi non hữu tình quá đẹp!", avatar: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=800&h=800&fit=crop&crop=face" },
  { name: "Chị Xuân", role: "Travel Blogger", text: "Đi Tràng An một lần là nhớ cả đời. Nước xanh, núi đá, trời mây hội tụ.", avatar: "https://images.unsplash.com/photo-1580489944761-15a19d654956?w=800&h=800&fit=crop&crop=face" },
  { name: "Cô Lan", role: "Singapore", text: "Tam Cốc buổi sáng sương mờ đẹp như tranh. Một trải nghiệm đáng thử.", avatar: "https://images.unsplash.com/photo-1544005313-94ddf0286df2?w=800&h=800&fit=crop&crop=face" },
  { name: "Anh Minh", role: "Bay 12 lần", text: "Tuyệt Tình Cốc có màu nước xanh ngọc đặc trưng, lên hình rất nổi bật, là điểm check-in mới nổi được giới trẻ yêu thích.", avatar: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=800&h=800&fit=crop&crop=face" },
  { name: "Chị Diệp", role: "Lần đầu bay", text: "Khu du lịch Tuyệt Tình Cốc khá vắng, chụp ảnh siêu đẹp, thích hợp đi cặp đôi.", avatar: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=800&h=800&fit=crop&crop=face" },
  { name: "Chị Xuân", role: "Travel Blogger", text: "Không chỉ đẹp, Ninh Bình còn mang vẻ trầm mặc rất Việt Nam. Rất xứng đáng để quay lại.", avatar: "https://images.unsplash.com/photo-1580489944761-15a19d654956?w=800&h=800&fit=crop&crop=face" },
];

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
  return (
    <section className="py-24 lg:py-40 bg-gradient-to-b from-white via-emerald-50/20 to-white overflow-hidden">
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
            KHÁCH HÀNG CHIA SẺ
          </h2>
          <p className="mt-6 text-xl lg:text-2xl text-gray-600 font-light">
            Hơn 12.000 chuyến bay • 100% muốn quay lại lần nữa
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
              Xem khách bay thực tế
            </h3>
            <p className="mt-4 text-lg lg:text-xl text-gray-600">
              Cảm xúc thật – Hành trình thật – Bay thật
            </p>
          </div>

          <VideoExperience />

          <p className="text-center mt-8 text-lg text-gray-600 italic">
            Video được quay thực tế tại Đà Lạt • Phi công có chứng chỉ quốc tế
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
            BÂY GIỜ LÀ LƯỢT
          </p>
          <motion.p
            className="text-6xl lg:text-8xl font-black tracking-tighter text-transparent bg-clip-text bg-gradient-to-r from-emerald-600 via-cyan-600 to-teal-700 -mt-6 lg:-mt-12"
            animate={{ backgroundPosition: ["0%", "100%", "0%"] }}
            transition={{ duration: 8, repeat: Infinity, ease: "linear" }}
            style={{ backgroundSize: "200% 200%" }}
          >
            CỦA BẠN
          </motion.p>
        </motion.div>
      </div>
    </section>
  );
}
function setIsMuted(muted: boolean) {
  throw new Error("Function not implemented.");
}

