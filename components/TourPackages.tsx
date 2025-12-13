// components/TourPackages.tsx – BẢN HOÀN HẢO NHẤT 2025 (ĐÃ THÊM PHẦN TRẢI NGHIỆM NINH BÌNH)
"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { useTranslation } from "react-i18next";
import type { TFunction } from "i18next";

function getToursData(t: TFunction) {
  const base = [
    {
      id: 1,
      tag: "01",
      price: "2.800.000đ",
      image: "/images/Ninh Bình 1 .jpg",
    },
    {
      id: 2,
      tag: "02",
      tagColor: "from-yellow-400 to-orange-500",
      price: "3.500.000đ",
      hot: true,
      image: "/images/Ninh Bình 2.jpg",
    },
    {
      id: 3,
      tag: "03",
      price: "4.200.000đ",
      image: "/images/Ninh Bình 3.jpg",
    },
  ];
  const localized = t("tours.items", { returnObjects: true }) as Array<{
    title: string;
    desc: string;
    highlights: string[];
  }>;
  return base.map((b, i) => ({ ...b, ...localized[i] }));
}

export default function TourPackages() {
  const { t } = useTranslation("common");
  const tours = getToursData(t);

  return (
    <section className="py-20 lg:py-32 bg-gradient-to-b from-gray-50 via-white to-gray-50">
      <div className="container mx-auto px-6 lg:px-12">
        {/* TIÊU ĐỀ + ẢNH 3D SIÊU ĐẸP */}
        <motion.div
          initial={{ opacity: 0, y: 80 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 1.2 }}
          className="relative -mt-20 mb-10 lg:-mt-15 lg:mb-16 z-10"
        >
          <div className="relative flex justify-center items-center w-full">
            <motion.div
              animate={{ 
                rotateX: [0, 25, -20, 20, -15, 0],
                rotateY: [0, 30, -25, 25, -30, 0],
                rotateZ: [0, 5, -5, 5, 0],
              }}
              transition={{ 
                duration: 14,
                repeat: Infinity, 
                ease: "easeInOut",
                times: [0, 0.2, 0.4, 0.6, 0.8, 1]
              }}
              className="relative"
            >
              {/* <Image
                src="https://png.pngtree.com/png-clipart/20220604/original/pngtree-3d-summer-travel-supplies-transportation-png-image_7927356.png"
                alt="CÁC GÓI TOUR"
                width={500}
                height={100}
                className="drop-shadow-2xl"
                priority
              /> */}
              
              <motion.div
                animate={{ opacity: [0.3, 0.8, 0.3] }}
                transition={{ duration: 3, repeat: Infinity }}
                className="absolute inset-0 bg-gradient-to-tr from-white/40 via-transparent to-white/40 rounded-full blur-3xl"
              />
            </motion.div>
          </div>

          <h2 className="mt-6 text-5xl lg:text-7xl font-black tracking-tight text-center bg-gradient-to-r from-gray-900 via-cyan-700 to-gray-900 bg-clip-text text-transparent">
            {t("tours.section_title")}
          </h2>
          <p className="mt-4 text-lg lg:text-xl text-gray-600 text-center max-w-4xl mx-auto font-light leading-relaxed">
            {t("tours.section_subtitle")}
          </p>
        </motion.div>

        {/* GRID CARD TOUR */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-7xl mx-auto">
          {tours.map((tour, index) => (
            <motion.div
              key={tour.id}
              initial={{ opacity: 0, y: 100 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: index * 0.2 }}
              className="group h-full"
            >
              {/* CARD – giữ nguyên code cũ */}
              <motion.div
                whileHover={{ y: -20, scale: 1.04 }}
                transition={{ duration: 0.6, type: "spring", stiffness: 300 }}
                className="relative h-full bg-white rounded-3xl overflow-hidden border border-pink-100 
                          flex flex-col shadow-sm
                          [background:linear-gradient(145deg,#ffffff,#fef6fb)]
                          before:absolute before:inset-0 before:rounded-3xl before:p-[2px] 
                          before:bg-gradient-to-r before:from-pink-200 before:via-purple-200 before:to-blue-200 
                          before:opacity-0 before:transition-opacity before:duration-500
                          hover:before:opacity-100 before:-z-10
                          after:absolute after:inset-0 after:rounded-3xl 
                          after:bg-gradient-to-r after:from-pink-100/40 after:via-purple-100/40 after:to-blue-100/40
                          after:opacity-0 after:transition-opacity after:duration-700
                          hover:after:opacity-100 after:-z-10"
              >
                {/* Giữ nguyên toàn bộ nội dung card cũ ở đây */}
                {/* ... (tag, hot, image, content, button) ... */}
                {/* (Đoạn code card giữ nguyên như bản gốc để tránh dài dòng) */}
                <div className="absolute top-4 left-4 z-10">
                  <span
                    className={`text-5xl font-extrabold drop-shadow-xl 
                    ${tour.tagColor 
                      ? `bg-gradient-to-r ${tour.tagColor} bg-clip-text text-transparent` 
                      : "text-white/30"
                    } 
                    [text-shadow:_0_0_12px_rgba(255,255,255,0.45)] 
                    [-webkit-text-stroke:2px_rgba(255,255,255,0.45)]`}
                  >
                    {tour.tag}
                  </span>
                </div>

                {tour.hot && (
                  <div className="absolute top-4 right-4 z-10 bg-gradient-to-r 
                  from-red-300 to-pink-500 text-white px-5 py-2 rounded-full text-sm font-bold shadow-xl animate-pulse">
                    HOT
                  </div>
                )}

                <div className="relative overflow-hidden">
                  <Image
                    src={tour.image}
                    alt={tour.title}
                    width={600}
                    height={320}
                    className="w-full h-64 object-cover group-hover:scale-110 transition-transform duration-800"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-pink-300/40 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-700" />
                </div>

                <div className="p-6 lg:p-8 flex flex-col flex-grow">
                  <h3 className="text-2xl font-black bg-gradient-to-r 
                  from-pink-600 to-purple-600 bg-clip-text text-transparent mb-3">
                    {tour.title}
                  </h3>

                  <p className="text-gray-600 text-sm leading-relaxed mb-5 flex-grow line-clamp-3">
                    {tour.desc}
                  </p>

                  <div className="space-y-2 mb-6">
                    <p className="font-bold text-gray-700 text-sm">{t("tours.highlights_label")}</p>
                    {tour.highlights.map((item) => (
                      <div key={item} className="flex items-center gap-2">
                        <svg className="w-4 h-4 text-pink-400 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M5 13l4 4L19 7" />
                        </svg>
                        <span className="text-gray-700 text-sm">{item}</span>
                      </div>
                    ))}
                  </div>

                  <motion.button
                    whileHover={{ scale: 1.12, y: -4 }}
                    whileTap={{ scale: 0.96 }}
                    className="mt-auto relative w-full py-4 rounded-full font-extrabold text-lg 
                              text-black shadow-[0_4px_14px_rgba(0,0,0,0.1)]
                              border-2 border-pink-300 bg-white overflow-hidden group/button"
                  >
                    <span className="relative z-20">{t("tours.button_book")}</span>

                    <motion.div
                      className="absolute inset-0 rounded-full 
                                bg-gradient-to-r from-pink-200 via-purple-200 to-blue-200"
                      initial={{ x: "-120%" }}
                      whileHover={{ x: "0%" }}
                      transition={{ duration: 0.45, ease: "easeOut" }}
                    />

                    <div className="absolute inset-0 rounded-full bg-gradient-to-r 
                                    from-pink-100 via-purple-100 to-blue-100 
                                    opacity-0 blur-xl group-hover/button:opacity-80 
                                    transition-opacity duration-300" />

                    <div className="absolute inset-0 rounded-full border border-white/60 z-10 pointer-events-none"></div>
                  </motion.button>
                </div>
              </motion.div>
            </motion.div>
          ))}
        </div>

      {/* PHẦN TRẢI NGHIỆM – ĐÃ ĐA NGÔN NGỮ 100% */}
        <motion.div
          initial={{ opacity: 0, y: 120 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 1, delay: 0.4 }}
          className="mt-24 lg:mt-32 max-w-7xl mx-auto"
        >
          <div className="text-center mb-12 lg:mb-16">
            <h2 className="text-4xl lg:text-6xl font-black tracking-tight bg-gradient-to-r from-green-600 via-emerald-600 to-teal-700 bg-clip-text text-transparent">
              {t("tours.experience.title")}
            </h2>
            <p className="mt-4 text-2xl lg:text-3xl font-bold text-gray-800">
              {t("tours.experience.subtitle")}
            </p>
            <p className="mt-6 text-lg lg:text-xl text-gray-600 max-w-4xl mx-auto leading-relaxed">
              {t("tours.experience.main_desc")}
            </p>
            <p className="mt-6 text-2xl font-bold text-emerald-700">
              {t("tours.experience.activities")}
            </p>
            <p className="mt-4 text-gray-600 max-w-3xl mx-auto">
              {t("tours.experience.desc")}
            </p>
          </div>

          {/* 3 ảnh ngang lớn */}
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-0 rounded-3xl overflow-hidden shadow-2xl">
            {[
              "https://api.sovaba.travel/uploads/Nhung_canh_dong_lua_menh_mong_bat_ngat_714fbfebae.jpg",
              "https://dulichvn.org.vn/nhaptin/uploads/images/cuoitrauchangvit.jpg",
              "https://photo.znews.vn/w660/Uploaded/spuoouo/2024_12_23/Shan_7.jpg"
            ].map((src, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8, delay: idx * 0.2 }}
                className="relative group overflow-hidden h-96 lg:h-[520px]"
              >
                <Image
                  src={src}
                  alt={t(`tours.experience.photo_titles.${idx}`)}
                  fill
                  className="object-cover transition-transform duration-1000 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/30 to-transparent" />
                <div className="absolute bottom-0 left-0 right-0 p-8 text-white text-center">
                  <h3 className="text-2xl lg:text-3xl font-black mb-2">
                    {t(`tours.experience.photo_titles.${idx}`)}
                  </h3>
                </div>
                <div className="absolute inset-0 bg-gradient-to-t from-emerald-500/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-700" />
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}