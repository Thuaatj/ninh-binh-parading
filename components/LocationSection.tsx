// components/LocationSection.tsx – PHIÊN BẢN HOÀN HẢO 2025
"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { MapPin, Navigation, Clock, Phone } from "lucide-react";
import { useTranslation } from "react-i18next";

export default function LocationSection() {
  const { t } = useTranslation("common");
  return (
    <section className="py-0 lg:py-15 bg-gradient-to-br from-cyan-50 via-white to-teal-50 overflow-hidden">
      <div className="container mx-auto px-6 lg:px-12">
        {/* TIÊU ĐỀ + ẢNH 3D ĐẸP PHÁT KHÓC */}
        <motion.div
          initial={{ opacity: 0, y: 80 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 1.2 }}
          className="text-center mb-16 lg:mb-24"
        >

          <h2 className="mt-8 text-5xl lg:text-7xl font-black tracking-tight bg-gradient-to-r from-cyan-600 via-teal-600 to-emerald-700 bg-clip-text text-transparent">
            {t("location.title")}
          </h2>
          <p className="mt-6 text-xl lg:text-2xl text-gray-700 max-w-4xl mx-auto font-light leading-relaxed">
            {t("location.subtitle")}
          </p>
        </motion.div>

        {/* BỐ CỤC HIỆN ĐẠI: INFO CARD NỔI + MAP */}
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center max-w-7xl mx-auto">
          {/* CARD THÔNG TIN – SIÊU ĐẸP, NỔI 3D */}
          <motion.div
            initial={{ opacity: 0, x: -80 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.9, delay: 0.3 }}
            className="relative group"
          >
            <motion.div
              whileHover={{ y: -16, scale: 1.02 }}
              transition={{ duration: 0.6 }}
              className="bg-white/95 backdrop-blur-2xl rounded-3xl shadow-2xl p-10 lg:p-12 border border-white/60 overflow-hidden"
            >
              <div className="absolute inset-0 bg-gradient-to-br from-cyan-400/10 via-teal-400/10 to-emerald-400/10 -z-10" />

              <div className="flex items-center gap-5 mb-10">
                <div className="w-20 h-20 bg-gradient-to-br from-cyan-500 to-teal-600 rounded-3xl flex items-center justify-center shadow-xl">
                  <MapPin className="w-10 h-10 text-white" />
                </div>
                <div>
                  <h3 className="text-3xl lg:text-4xl font-black text-gray-900">{t("location.card.title")}</h3>
                  <p className="text-cyan-600 font-bold text-lg">{t("location.card.city")}</p>
                </div>
              </div>

              <div className="space-y-8 text-gray-700">
                <div className="flex items-start gap-5">
                  <Navigation className="w-7 h-7 text-cyan-600 mt-1 flex-shrink-0" />
                  <div>
                    <p className="font-bold text-xl text-gray-900">{t("location.address.label")}</p>
                    <p className="text-lg leading-relaxed mt-2">
                      {t("location.address.content").split("\n").map((line: string, i: number) => (
                        <span key={i}>{line}<br /></span>
                      ))}
                    </p>
                  </div>
                </div>

                <div className="flex items-center gap-5">
                  <Clock className="w-7 h-7 text-emerald-600" />
                  <p className="text-lg"><span className="font-bold">{t("location.hours.label")}</span> {t("location.hours.value")}</p>
                </div>

                <div className="flex items-center gap-5">
                  <Phone className="w-7 h-7 text-teal-600" />
                  <p className="text-lg"><span className="font-bold">{t("location.hotline.label")}</span> {t("location.hotline.number")}</p>
                </div>
              </div>

              <motion.a
                href="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3727.297926958594!2d105.9418685!3d20.2769872!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x313679003e1af52b%3A0xb614cdf238156678!2sD%C3%B9%20L%C6%B0%E1%BB%A3n%20%7C%20Paragliding%20%7C%20Paramotor%20Ninh%20Binh%20-%20Landing!5e0!3m2!1svi!2s!4v1733922900000!5m2!1svi!2s" // Thay link thật của bạn vào đây
                target="_blank"
                rel="noopener noreferrer"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="mt-12 inline-flex items-center gap-4 px-10 py-6 bg-gradient-to-r from-cyan-600 to-teal-600 text-white font-bold text-xl rounded-2xl shadow-2xl hover:shadow-cyan-500/60 transition-all duration-300"
              >
                <Navigation className="w-7 h-7" />
                {t("location.map.button")}
              </motion.a>
            </motion.div>
          </motion.div>

          {/* GOOGLE MAPS – GHIM CHÍNH XÁC */}
          <motion.div
            initial={{ opacity: 0, x: 80 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.9, delay: 0.4 }}
            className="relative"
          >
            <div className="rounded-3xl overflow-hidden shadow-2xl border-12 border-white">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3727.297926958594!2d105.9418685!3d20.2769872!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x313679003e1af52b%3A0xb614cdf238156678!2sD%C3%B9%20L%C6%B0%E1%BB%A3n%20%7C%20Paragliding%20%7C%20Paramotor%20Ninh%20Binh%20-%20Landing!5e0!3m2!1svi!2s!4v1733922900000!5m2!1svi!2s"
                width="100%"
                height="560"
                style={{ border: 0 }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                className="grayscale hover:grayscale-0 transition-all duration-1000"
              />
            </div>

            <div className="absolute bottom-6 left-1/2 -translate-x-1/2 bg-white/95 backdrop-blur px-8 py-4 rounded-full shadow-2xl flex items-center gap-4">
              <div className="w-4 h-4 bg-red-500 rounded-full animate-ping" />
              <div className="w-4 h-4 bg-red-500 rounded-full absolute" />
              <span className="font-bold text-gray-800 text-lg">{t("location.status")}</span>
            </div>
          </motion.div>

          
        </div>
        {/* === SECTION: HÀNH TRÌNH BAY === */}


      </div>
     <section className="py-28 bg-gradient-to-b from-white to-cyan-70 overflow-hidden">
        <div className="mx-auto max-w-[1400px] px-6 lg:px-12">

          {/* TITLE */}
          <motion.div
            initial={{ opacity: 0, y: 60 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 1 }}
            className="text-center mb-20"
          >
            <h2 className="text-4xl lg:text-6xl font-black tracking-tight bg-gradient-to-r from-cyan-600 to-teal-600 bg-clip-text text-transparent">
              {t("location.timeline.title")}
            </h2>
            <p className="text-gray-600 text-xl mt-4 max-w-3xl mx-auto">
              {t("location.timeline.subtitle")}
            </p>
          </motion.div>

          {/* TIMELINE */}
          <div className="relative w-full flex items-center justify-between">

            {/* DESKTOP LINE */}
            <div className="absolute top-1/2 left-0 w-full h-1 bg-gradient-to-r 
              from-cyan-300 via-teal-400 to-emerald-400 rounded-full 
              hidden md:block" />

            {/* STEPS */}
            <div
              className="
                relative 
                grid 
                grid-cols-1      /* mobile */
                sm:grid-cols-2   /* tablet nhỏ */
                md:grid-cols-5   /* desktop */
                gap-10 sm:gap-4 md:gap-12 -space-y-8 md:space-y-0
                w-full 
                md:top-20
              "
            >

              {/* STEP 1 */}
              <div className="relative text-center 
                md:-mt-12      /* desktop */
                mt-10          /* mobile */
              ">
                <p className="absolute -top-10 left-1/2 -translate-x-1/2 
                  text-sm font-bold text-cyan-700 tracking-wider hidden md:block">
                  {t("location.timeline.steps.0.label")}
                </p>

                <motion.div
                  whileHover={{ y: -10, scale: 1.02 }}
                  transition={{ duration: 0.4 }}
                  className="bg-white rounded-3xl p-8 shadow-xl 
                    border border-cyan-100 hover:shadow-cyan-300/40 
                    max-w-[350px] mx-auto"
                >
                  <div className="w-16 h-16 mx-auto bg-cyan-500 text-white rounded-2xl
                    flex items-center justify-center shadow-lg">
                    <MapPin className="w-8 h-8" />
                  </div>
                  <h3 className="font-bold text-xl mt-5">{t("location.timeline.steps.0.title")}</h3>
                  <p className="mt-3 text-gray-600 leading-relaxed">
                    {t("location.timeline.steps.0.desc")}
                  </p>
                </motion.div>

                {/* DOT DESKTOP */}
                <div className="hidden md:block absolute left-1/2 -translate-x-1/2 
                  top-full mt-3 w-5 h-5 bg-cyan-500 rounded-full shadow-lg" />

                {/* MOBILE LINE */}
                <div className="md:hidden flex flex-col items-center mt-6">
                  <div className="w-4 h-4 bg-cyan-500 rounded-full mb-2" />
                  <div className="w-1 h-12 bg-cyan-300 rounded-full" />
                </div>
              </div>

              {/* STEP 2 */}
              <div className="relative text-center 
                md:mt-12 
                mt-10
              ">
                <p className="absolute -top-10 left-1/2 -translate-x-1/2 
                  text-sm font-bold text-teal-700 tracking-wider hidden md:block">
                  {t("location.timeline.steps.1.label")}
                </p>

                <motion.div
                  whileHover={{ y: -10, scale: 1.02 }}
                  transition={{ duration: 0.4 }}
                  className="bg-white rounded-3xl p-8 shadow-xl 
                    border border-cyan-100 hover:shadow-cyan-300/40 
                    max-w-[350px] mx-auto"
                >
                  <div className="w-16 h-16 mx-auto bg-teal-500 text-white rounded-2xl 
                    flex items-center justify-center shadow-lg">
                    <Navigation className="w-8 h-8" />
                  </div>
                  <h3 className="font-bold text-xl mt-5">{t("location.timeline.steps.1.title")}</h3>
                  <p className="mt-3 text-gray-600 leading-relaxed">
                    {t("location.timeline.steps.1.desc")}
                  </p>
                </motion.div>

                <div className="hidden md:block absolute left-1/2 -translate-x-1/2 
                  -top-6 w-5 h-5 bg-teal-500 rounded-full shadow-lg" />

                <div className="md:hidden flex flex-col items-center mt-6">
                  <div className="w-4 h-4 bg-teal-500 rounded-full mb-2" />
                  <div className="w-1 h-12 bg-teal-300 rounded-full" />
                </div>
              </div>

              {/* STEP 3 */}
              <div className="relative text-center md:-mt-12 mt-10">
                <p className="absolute -top-10 left-1/2 -translate-x-1/2 
                  text-sm font-bold text-emerald-700 tracking-wider hidden md:block">
                  {t("location.timeline.steps.2.label")}
                </p>

                <motion.div
                  whileHover={{ y: -10, scale: 1.02 }}
                  transition={{ duration: 0.4 }}
                  className="bg-white rounded-3xl p-8 shadow-xl 
                    border border-cyan-100 hover:shadow-cyan-300/40 
                    max-w-[350px] mx-auto"
                >
                  <div className="w-16 h-16 mx-auto bg-emerald-500 text-white rounded-2xl 
                    flex items-center justify-center shadow-lg">
                    <Clock className="w-8 h-8" />
                  </div>
                  <h3 className="font-bold text-xl mt-5">{t("location.timeline.steps.2.title")}</h3>
                  <p className="mt-3 text-gray-600 leading-relaxed">
                    {t("location.timeline.steps.2.desc")}
                  </p>
                </motion.div>

                <div className="hidden md:block absolute left-1/2 -translate-x-1/2 
                  top-full mt-3 w-5 h-5 bg-emerald-500 rounded-full shadow-lg" />

                <div className="md:hidden flex flex-col items-center mt-6">
                  <div className="w-4 h-4 bg-emerald-500 rounded-full mb-2" />
                  <div className="w-1 h-12 bg-emerald-300 rounded-full" />
                </div>
              </div>

              {/* STEP 4 */}
              <div className="relative text-center md:mt-12 mt-10">
                <p className="absolute -top-10 left-1/2 -translate-x-1/2 
                  text-sm font-bold text-teal-700 tracking-wider hidden md:block">
                  {t("location.timeline.steps.3.label")}
                </p>

                <motion.div
                  whileHover={{ y: -10, scale: 1.02 }}
                  transition={{ duration: 0.4 }}
                  className="bg-white rounded-3xl p-8 shadow-xl 
                    border border-cyan-100 hover:shadow-cyan-300/40 
                    max-w-[350px] mx-auto"
                >
                  <div className="w-16 h-16 mx-auto bg-teal-500 text-white rounded-2xl 
                    flex items-center justify-center shadow-lg">
                    <Navigation className="w-8 h-8" />
                  </div>
                  <h3 className="font-bold text-xl mt-5">{t("location.timeline.steps.3.title")}</h3>
                  <p className="mt-3 text-gray-600 leading-relaxed">
                    {t("location.timeline.steps.3.desc")}
                  </p>
                </motion.div>

                <div className="hidden md:block absolute left-1/2 -translate-x-1/2 
                  -top-6 w-5 h-5 bg-teal-500 rounded-full shadow-lg" />

                <div className="md:hidden flex flex-col items-center mt-6">
                  <div className="w-4 h-4 bg-teal-500 rounded-full mb-2" />
                  <div className="w-1 h-12 bg-teal-300 rounded-full" />
                </div>
              </div>

              {/* STEP 5 */}
              <div className="relative text-center md:-mt-12 mt-10">
                <p className="absolute -top-10 left-1/2 -translate-x-1/2 
                  text-sm font-bold text-cyan-700 tracking-wider hidden md:block">
                  {t("location.timeline.steps.4.label")}
                </p>

                <motion.div
                  whileHover={{ y: -10, scale: 1.02 }}
                  transition={{ duration: 0.4 }}
                  className="bg-white rounded-3xl p-8 shadow-xl 
                    border border-cyan-100 hover:shadow-cyan-300/40 
                    max-w-[350px] mx-auto"
                >
                  <div className="w-16 h-16 mx-auto bg-cyan-500 text-white rounded-2xl 
                    flex items-center justify-center shadow-lg">
                    <Phone className="w-8 h-8" />
                  </div>
                  <h3 className="font-bold text-xl mt-5">{t("location.timeline.steps.4.title")}</h3>
                  <p className="mt-3 text-gray-600 leading-relaxed">
                    {t("location.timeline.steps.4.desc")}
                  </p>
                </motion.div>

                <div className="hidden md:block absolute left-1/2 -translate-x-1/2 
                  top-full mt-3 w-5 h-5 bg-cyan-500 rounded-full shadow-lg" />

                <div className="md:hidden flex flex-col items-center mt-6">
                  <div className="w-4 h-4 bg-cyan-500 rounded-full mb-2" />
                  <div className="w-1 h-12 bg-cyan-300 rounded-full" />
                </div>
              </div>

            </div>
          </div>
        </div>
      </section>

    </section>

    
  );
}
