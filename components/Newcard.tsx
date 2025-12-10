/* components/NewsCards.tsx – GẠCH CHÂN HIỆN KHI RÊ VÀO TOÀN CARD, MƯỢT CỰC ĐỈNH */
"use client";

import Image from "next/image";
import { motion } from "framer-motion";

const news = [
  {
    tag: "RH",
    title: "Covivio labellisé Great Place To Work 2025° en Allemagne, France et Italie",
    date: "08 JUILLET 2025",
    image: "https://images.unsplash.com/photo-1517245386807-bb43f82c33c4?w=800&q=80",
  },
  {
    tag: "BUREAU · FINANCE",
    title: "Covivio reprend la pleine propriété de la tour CB21 dans un contexte dynamique",
    date: "16 JUIN 2025",
    image: "https://images.unsplash.com/photo-1497366216548-37526070297c?w=800&q=80",
  },
  {
    tag: "FINANCE",
    title: "Résultats semestriels 2025 : forte croissance des résultats et perspectives relevées",
    date: "21 JUILLET 2025",
    image: "https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?w=800&q=80",
  },
];

export default function NewsCards() {
  return (
    <section className="py-20 lg:py-32 bg-white">
      <div className="container mx-auto px-6 lg:px-12">
        <h2 className="text-center text-5xl lg:text-6xl font-black bg-gradient-to-r from-gray-800 to-gray-600 bg-clip-text text-transparent mb-20">
          TIN TỨC & SỰ KIỆN
        </h2>

        <div className="grid md:grid-cols-3 gap-12 lg:gap-20 max-w-7xl mx-auto relative">
          {/* Đường kẻ dọc giữa các card */}
          <div className="hidden md:block absolute left-1/3 top-0 bottom-0 w-px bg-gray-200" />
          <div className="hidden md:block absolute left-2/3 top-0 bottom-0 w-px bg-gray-200" />

          {news.map((item, index) => (
            /* CARD CHÍNH – CÓ CLASS "group" ĐỂ DÙNG group-hover */
            <article key={index} className="group cursor-pointer">
              {/* KHUNG ẢNH */}
              <div className="mb-12 relative h-[380px] overflow-visible">
                <motion.div
                  className="absolute inset-0 origin-center"
                  initial={{ rotate: 0, scale: 1 }}
                  whileHover={{
                    rotate: -5,
                    scale: 0.90,
                  }}
                  transition={{
                    type: "spring",
                    stiffness: 300,
                    damping: 30,
                  }}
                >
                  <div className="bg-white shadow-2xl overflow-hidden h-full">
                    <motion.div
                      initial={{ scale: 1 }}
                      whileHover={{ scale: 1.35 }}
                      transition={{
                        type: "spring",
                        stiffness: 320,
                        damping: 28,
                      }}
                      className="w-full h-full"
                    >
                      <Image
                        src={item.image}
                        alt={item.title}
                        width={700}
                        height={700}
                        className="w-full h-full object-cover"
                      />
                    </motion.div>

                    <span className="absolute top-6 left-6 z-10 px-4 py-2 bg-white/95 backdrop-blur-sm text-xs font-bold text-gray-700 rounded-full shadow-lg">
                      {item.tag}
                    </span>
                  </div>
                </motion.div>
              </div>

              {/* PHẦN CHỮ – DÙNG group-hover ĐỂ GẠCH CHÂN HIỆN KHI RÊ VÀO TOÀN CARD */}
              <div className="space-y-5">
                <h3 className="text-xl lg:text-2xl font-bold text-gray-900 leading-tight">
                  {item.title}
                </h3>

                {/* GẠCH CHÂN HIỆN KHI RÊ VÀO BẤT KỲ CHỖ NÀO TRÊN CARD */}
                <motion.div
                  initial={{ width: 0 }}
                  className="h-1 bg-gradient-to-r from-cyan-600 to-emerald-600 rounded-full origin-left"
                  animate={{
                    width: 0,
                  }}
                  whileHover={{ width: "90px" }}
                  transition={{
                    type: "spring",
                    stiffness: 400,
                    damping: 30,
                  }}
                />

                <p className="text-sm font-medium text-gray-500 uppercase tracking-wider pt-2">
                  {item.date}
                </p>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}