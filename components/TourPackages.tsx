// components/TourPackages.tsx – BẢN HOÀN HẢO NHẤT 2025
"use client";

import { motion } from "framer-motion";
import Image from "next/image";

const tours = [
  {
    id: 1,
    tag: "01",
    title: "ĐÁNH THỨC TÂM HỒN",
    desc: "Trải nghiệm bay dù lượn ngắm cảnh Hạ Long từ trên cao, chiêm ngưỡng Vịnh Hạ Long – kỳ quan thiên nhiên thế giới.",
    highlights: [
      "Vịnh Hạ Long – Di sản UNESCO",
      "Đảo Tuần Châu – Trung tâm nghỉ dưỡng",
      "Hang Sửng Sốt – Hang đẹp nhất",
      "Làng chài Cửa Vạn",
    ],
    price: "2.800.000đ",
    image: "https://thesinhtour.com/wp-content/uploads/2025/04/trang_an_ninh_binh.jpg",
  },
  {
    id: 2,
    tag: "02",
    tagColor: "from-yellow-400 to-orange-500",
    title: "VƯƠNG QUỐC ÁNH SÁNG",
    desc: "Bay và ngắm bình minh hoặc hoàng hôn tuyệt đẹp trên Vịnh Hạ Long.",
    highlights: [
      "Bình minh & Hoàng hôn trên Vịnh",
      "Đảo Tuần Châu & Hang Sửng Sốt",
      "Làng chài Cửa Vạn",
    ],
    price: "3.500.000đ",
    hot: true,
    image: "https://halongparagliding.com/wp-content/uploads/2025/11/z7260492117256_67a136e437d0353ea1eb1bff96adcd9b.jpg",
  },
  {
    id: 3,
    tag: "03",
    title: "HÀNH TRÌNH TRỌN VẸN",
    desc: "Trải nghiệm bay trọn vẹn với tầm nhìn đẹp nhất từ trên cao.",
    highlights: [
      "Bay qua Hang Sửng Sốt & Làng chài",
      "Cầu Bãi Cháy – Biểu tượng",
      "Bãi biển Bãi Cháy",
    ],
    price: "4.200.000đ",
    image: "https://halongparagliding.com/wp-content/uploads/2025/11/z7260492120163_63794d4dbef5656cb23f058445ea2f69.jpg",
  },
];

export default function TourPackages() {
  return (
    <section className="py-24 lg:py-32 bg-gradient-to-b from-gray-50 via-white to-gray-50">
      <div className="container mx-auto px-6 lg:px-12">
        {/* TIÊU ĐỀ + ẢNH 3D SIÊU ĐẸP */}
        {/* TIÊU ĐỀ + ẢNH 3D LẮC MẠNH + XÍCH SÁT BANNER */}
<motion.div
  initial={{ opacity: 0, y: 80 }}
  whileInView={{ opacity: 1, y: 0 }}
  viewport={{ once: true }}
  transition={{ duration: 1.2 }}
  className="relative -mt-20 mb-10 lg:-mt-15 lg:mb-16 z-10"   // ← xích sát lên trên!
>
  <div className="relative flex justify-center items-center w-full">
    {/* 3D LẮC MẠNH NHƯ ĐIÊN – ĐỈNH CAO CẢM XÚC */}
    <motion.div
      animate={{ 
        rotateX: [0, 25, -20, 20, -15, 0],
        rotateY: [0, 30, -25, 25, -30, 0],
        rotateZ: [0, 5, -5, 5, 0],
      }}
      transition={{ 
        duration: 14,           // chậm chậm cho đã
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
      
      {/* Hiệu ứng ánh sáng lấp lánh khi lắc */}
      <motion.div
        animate={{ opacity: [0.3, 0.8, 0.3] }}
        transition={{ duration: 3, repeat: Infinity }}
        className="absolute inset-0 bg-gradient-to-tr from-white/40 via-transparent to-white/40 rounded-full blur-3xl"
      />
    </motion.div>
  </div>

  {/* Chữ phụ (tùy chọn giữ lại nếu muốn) */}
  <h2 className="mt-6 text-5xl lg:text-7xl font-black tracking-tight text-center bg-gradient-to-r from-gray-900 via-cyan-700 to-gray-900 bg-clip-text text-transparent">
    CÁC GÓI TOUR
  </h2>
  <p className="mt-4 text-lg lg:text-xl text-gray-600 max-w-4xl mx-auto font-light leading-relaxed">
    Trải nghiệm độc đáo tại Hạ Long – nơi bạn vừa lướt trên mây vừa lưu giữ những khoảnh khắc khó quên...
  </p>
</motion.div>

        {/* GRID CARD NHỎ GỌN – BẰNG NHAU 100% */}
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
              {/* CARD – tone pastel */}
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
                {/* Glow pastel */}
                <div className="absolute inset-0 rounded-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-700 -z-10">
                  <div className="absolute inset-0 rounded-3xl bg-gradient-to-r 
                      from-pink-200 via-purple-200 to-blue-200 blur-2xl animate-pulse" />
                </div>

                {/* Tag */}
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

                {/* HOT pastel đỏ-hồng dịu */}
                {tour.hot && (
                  <div className="absolute top-4 right-4 z-10 bg-gradient-to-r 
                  from-red-300 to-pink-500 text-white px-5 py-2 rounded-full text-sm font-bold shadow-xl animate-pulse">
                    HOT
                  </div>
                )}

                {/* Ảnh */}
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

                {/* Nội dung */}
                <div className="p-6 lg:p-8 flex flex-col flex-grow">
                  <h3 className="text-2xl font-black bg-gradient-to-r 
                  from-pink-600 to-purple-600 bg-clip-text text-transparent mb-3">
                    {tour.title}
                  </h3>

                  <p className="text-gray-600 text-sm leading-relaxed mb-5 flex-grow line-clamp-3">
                    {tour.desc}
                  </p>

                  <div className="space-y-2 mb-6">
                    <p className="font-bold text-gray-700 text-sm">ĐIỂM NỔI BẬT:</p>
                    {tour.highlights.map((item) => (
                      <div key={item} className="flex items-center gap-2">
                        <svg className="w-4 h-4 text-pink-400 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M5 13l4 4L19 7" />
                        </svg>
                        <span className="text-gray-700 text-sm">{item}</span>
                      </div>
                    ))}
                  </div>

                  {/* Nút pastel */}
                  <motion.button
                    whileHover={{ scale: 1.12, y: -4 }}
                    whileTap={{ scale: 0.96 }}
                    className="mt-auto relative w-full py-4 rounded-full font-extrabold text-lg 
                              text-black shadow-[0_4px_14px_rgba(0,0,0,0.1)]
                              border-2 border-pink-300 bg-white overflow-hidden group/button"
                  >
                    <span className="relative z-20">ĐẶT NGAY</span>

                    {/* LAYER: Gradient quét chạy */}
                    <motion.div
                      className="absolute inset-0 rounded-full 
                                bg-gradient-to-r from-pink-200 via-purple-200 to-blue-200"
                      initial={{ x: "-120%" }}
                      whileHover={{ x: "0%" }}
                      transition={{ duration: 0.45, ease: "easeOut" }}
                    />

                    {/* LAYER: Glow pastel mạnh khi hover */}
                    <div className="absolute inset-0 rounded-full bg-gradient-to-r 
                                    from-pink-100 via-purple-100 to-blue-100 
                                    opacity-0 blur-xl group-hover/button:opacity-80 
                                    transition-opacity duration-300" />

                    {/* LAYER: Viền ngoài sắc nét hơn */}
                    <div className="absolute inset-0 rounded-full border border-white/60 z-10 pointer-events-none"></div>
                  </motion.button>

                </div>
              </motion.div>
            </motion.div>

          ))}
        </div>
      </div>
    </section>
  );
}