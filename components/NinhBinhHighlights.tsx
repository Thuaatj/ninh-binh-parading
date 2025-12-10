/* components/NewsCards.tsx – BẢN ĐẸP MẮT NHẤT */
"use client";

import Image from "next/image";
import { motion } from "framer-motion";

const news = [
  {
    tag: "NINH BINH",
    title: "Khám phá Tràng An – Di sản văn hóa & thiên nhiên thế giới",
    date: "05 THÁNG 12 2025",
    image:
      "https://res.klook.com/image/upload/c_crop,h_1187,w_1899,x_1,y_92,z_0.4/w_750,h_469,c_fill,q_85/w_80,x_15,y_15,g_south_west,l_Klook_water_br_trans_yhcmh3/activities/go7r5rtj3qxexkbodyhf.jpg",
  },
  {
    tag: "DU LỊCH",
    title: "Chinh phục Hang Múa – Nơi ngắm toàn cảnh Tam Cốc đẹp nhất",
    date: "20 THÁNG 11 2025",
    image:
      "https://onevivu.vn/wp-content/uploads/2020/10/Hang-Mua-Ninh-Binh-7.jpg",
  },
  {
    tag: "TRẢI NGHIỆM",
    title: "Tam Cốc mùa lúa chín – Vẻ đẹp vàng rực hiếm nơi nào có",
    date: "10 THÁNG 12 2025",
    image:
      "https://cdn3.ivivu.com/2016/06/tam-coc-mua-lua-chin-ivivu-2.jpg",
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

          {/* Đường kẻ dọc */}
          <div className="hidden md:block absolute left-1/3 top-0 bottom-0 w-px bg-gray-200" />
          <div className="hidden md:block absolute left-2/3 top-0 bottom-0 w-px bg-gray-200" />

          {news.map((item, index) => (
            <motion.article
              key={index}
              className="group cursor-pointer"
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{
                duration: 0.8,
                ease: "easeOut",
                delay: index * 0.15, // SO LE ĐẸP MẮT
              }}
            >
              {/* ẢNH */}
              <div className="mb-12 relative h-[380px] overflow-visible">
                <motion.div
                  className="absolute inset-0 origin-center"
                  initial={{ rotate: 0, scale: 1 }}
                  whileHover={{ rotate: -5, scale: 0.9 }}
                  transition={{ type: "spring", stiffness: 300, damping: 30 }}
                >
                  <div className="bg-white shadow-2xl overflow-hidden h-full">
                    <motion.div
                      initial={{ scale: 1 }}
                      whileHover={{ scale: 1.35 }}
                      transition={{ type: "spring", stiffness: 320, damping: 28 }}
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

              {/* Text */}
              <div className="space-y-5">
                <h3 className="text-xl lg:text-2xl font-bold text-gray-900 leading-tight">
                  {item.title}
                </h3>

                {/* UNDERLINE HIỆN KHI HOVER */}
                <div className="h-1 bg-gradient-to-r from-cyan-600 to-emerald-600 rounded-full origin-left w-0 group-hover:w-[90px] transition-all duration-500 ease-out" />

                <p className="text-sm font-medium text-gray-500 uppercase tracking-wider pt-2">
                  {item.date}
                </p>
              </div>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  );
}
