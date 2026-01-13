// components/BookingSteps.tsx – SIÊU PHẨM 2025
"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { useTranslation } from "react-i18next";
import { 
  MessageCircle, 
  Calendar, 
  MapPin, 
  CreditCard, 
  Ticket, 
  Cloud
} from "lucide-react";

const steps = [
  { key: "contact", icon: MessageCircle },
  { key: "pick_date", icon: Calendar },
  { key: "pick_package", icon: MapPin },
  { key: "payment", icon: CreditCard },
  { key: "ticket", icon: Ticket },
  { key: "fly", icon: Cloud },
];

export default function BookingSteps() {
  const { t } = useTranslation("common");
  return (
    <section className="py-20 lg:py-0 bg-gradient-to-b from-white to-cyan-50 overflow-hidden">
      <div className="container mx-auto px-6 lg:px-12">
        {/* Tiêu đề */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mb-12 lg:mb-16"
        >
           <div className="flex flex-col sm:flex-row items-center justify-center gap-6 sm:gap-10 lg:gap-0 lg:pl-28 xl:pl-38">
    {/* Tiêu đề chính – luôn chính giữa */}
    <h2 className="text-4xl lg:text-6xl font-black tracking-tight bg-gradient-to-r from-gray-800 via-cyan-700 to-gray-900 bg-clip-text text-transparent">
            {t("booking.title")}
          </h2>

    {/* Icon la bàn vàng – trên mobile xuống dưới, desktop bên phải */}
    <motion.div
      animate={{
        rotate: [0, -8, 8, -6, 6, 0],
      }}
      transition={{
        duration: 4,
        repeat: Infinity,
        ease: "easeInOut",
      }}
      className="relative flex-shrink-0 order-2"
    >
      <Image
        // Icon đẹp nhất: vintage brass compass 3D realistic, sáng bóng, transparent
        src="/images/logomini/4.png"
        
        // Option thay thế nếu muốn vàng luxury hơn:
        // src="https://thumbs.dreamstime.com/b/gold-compass-nautical-navigation-tool-direction-travel-golden-png-transparent-image-representing-compasses-tools-368188936.jpg"
        
        alt="Golden Adventure Compass"
        width={500}   // Width gốc lớn để chất lượng cao
        height={500}  // Height gốc
        className="mt-[-30] w-32 h-32 sm:w-36 sm:h-36 lg:w-40 lg:h-40 object-contain drop-shadow-2xl"  
        // Size responsive: mobile 128px → tablet 144px → desktop 160px
      />
    </motion.div>
  </div>
        {/* <h2 className="text-4xl lg:text-6xl font-black tracking-tight bg-gradient-to-r from-gray-800 via-cyan-700 to-gray-900 bg-clip-text text-transparent">
            {t("booking.title")}
          </h2> */}
          <p className="mt-4 text-lg text-gray-600">{t("booking.desc")}</p>
        </motion.div>

        {/* STEPS – Desktop: ngang, Mobile: dọc nhưng cực gọn */}
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-6 lg:gap-8 max-w-6xl mx-auto">
          {steps.map((step, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 80 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.15 }}
              className="group flex flex-col items-center text-center"
            >
              {/* Vòng tròn icon + hiệu ứng hover 3D */}
              <motion.div
                whileHover={{ scale: 1.15, rotate: 360 }}
                transition={{ duration: 0.6 }}
                className={`relative w-20 h-20 lg:w-24 lg:h-24 rounded-full flex items-center justify-center shadow-xl mb-4 transition-all duration-500
                  ${index === 0 && "bg-gradient-to-br from-cyan-500 to-blue-600"}
                  ${index === 1 && "bg-gradient-to-br from-blue-600 to-indigo-700"}
                  ${index === 2 && "bg-gradient-to-br from-orange-500 to-yellow-600"}
                  ${index === 3 && "bg-gradient-to-br from-red-500 to-pink-600"}
                  ${index === 4 && "bg-gradient-to-br from-yellow-500 to-amber-600"}
                  ${index === 5 && "bg-gradient-to-br from-purple-600 to-indigo-700"}
                  group-hover:shadow-2xl group-hover:shadow-cyan-500/50`}
              >
                {/* Số thứ tự nhỏ ở góc */}
                <span className="absolute -top-2 -right-2 w-8 h-8 bg-white rounded-full flex items-center justify-center text-xs font-bold text-gray-800 shadow-lg">
                  0{index + 1}
                </span>

                <step.icon className="w-10 h-10 lg:w-12 lg:h-12 text-white" />
                
                {/* Vòng sáng khi hover */}
                <motion.div
                  className="absolute inset-0 rounded-full bg-white opacity-0 group-hover:opacity-30 blur-xl"
                  initial={{ scale: 0.8 }}
                  whileHover={{ scale: 1.3 }}
                />
              </motion.div>

              {/* Tiêu đề + mô tả */}
              <h3 className="font-bold text-gray-900 text-sm lg:text-base mt-2">
                {t(`booking.steps.${step.key}`)}
              </h3>
              <p className="text-xs lg:text-sm text-gray-600 mt-1 max-w-32 leading-tight">
                {t(`booking.steps.${step.key}_desc`)}
              </p>
            </motion.div>
          ))}
        </div>

        {/* Dòng kẻ nối (chỉ hiện trên desktop) */}
        <div className="hidden lg:block relative -top-32 max-w-9xl mx-auto pointer-events-none">
  <svg className="w-full h-30" viewBox="0 0 1200 80" fill="none">
    <path
      d="M 100 40 Q 300 10, 500 40 T 900 40 Q 1100 70, 1100 40"
      stroke="url(#gradient-line)"
      strokeWidth="3"
      opacity="1"
    />
    <defs>
      <linearGradient id="gradient-line" x1="0%" y1="0%" x2="100%" y2="0%">
        <stop offset="0%"   stopColor="#06b6d4" />
        <stop offset="20%"  stopColor="#3b82f6" />
        <stop offset="40%"  stopColor="#8b5cf6" />
        <stop offset="60%"  stopColor="#ec4899" />
        <stop offset="80%"  stopColor="#f59e0b" />
        <stop offset="100%" stopColor="#06b6d4" />

        <animate attributeName="x1" values="0%;100%" dur="2s" repeatCount="indefinite" />
        <animate attributeName="x2" values="100%;200%" dur="2s" repeatCount="indefinite" />
      </linearGradient>
    </defs>
  </svg>
</div>
      </div>
    </section>
  );
}
