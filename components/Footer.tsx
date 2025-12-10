"use client";

import { useTranslation } from "react-i18next";

export default function FooterNinhBinh() {
  const { t } = useTranslation("common");
  return (
    <footer className="bg-[#0a1a2f] text-white pt-20 mt-20">

      {/* TOP CTA – Câu hỏi cảm xúc */}
      <div className="text-center px-6">
        <h2 className="text-4xl md:text-5xl font-bold text-white leading-tight">
          {t("footer.cta_title")}
        </h2>

        <p className="text-gray-300 max-w-2xl mx-auto mt-4">
          {t("footer.cta_desc")}
        </p>

        <button className="mt-6 px-8 py-4 bg-emerald-500 hover:bg-emerald-600 rounded-full text-lg font-semibold shadow-xl transition-all">
          {t("footer.cta_button")}
        </button>
      </div>

      {/* MAIN FOOTER */}
      <div className="grid md:grid-cols-4 gap-10 px-6 md:px-16 mt-20 pb-16">

        {/* Brand */}
        <div>
          <h3 className="text-2xl font-bold">{t("footer.brand_title")}</h3>
          <p className="text-gray-400 mt-3 leading-relaxed">
            {t("footer.brand_desc")}
          </p>
        </div>

        {/* Menu */}
        <div>
          <h4 className="font-semibold text-lg mb-4">{t("footer.explore")}</h4>
          <ul className="space-y-3 text-gray-300">
            <li className="hover:text-emerald-400 cursor-pointer">{t("footer.explore_items.home")}</li>
            <li className="hover:text-emerald-400 cursor-pointer">{t("footer.explore_items.tours")}</li>
            <li className="hover:text-emerald-400 cursor-pointer">{t("footer.explore_items.highlights")}</li>
            <li className="hover:text-emerald-400 cursor-pointer">{t("footer.explore_items.blog")}</li>
          </ul>
        </div>

        {/* Support */}
        <div>
          <h4 className="font-semibold text-lg mb-4">{t("footer.support")}</h4>
          <ul className="space-y-3 text-gray-300">
            <li className="hover:text-emerald-400 cursor-pointer">{t("footer.support_items.faq")}</li>
            <li className="hover:text-emerald-400 cursor-pointer">{t("footer.support_items.policy")}</li>
            <li className="hover:text-emerald-400 cursor-pointer">{t("footer.support_items.contact")}</li>
            <li className="hover:text-emerald-400 cursor-pointer">{t("footer.support_items.helpdesk")}</li>
          </ul>
        </div>

        {/* Contact */}
        <div>
          <h4 className="font-semibold text-lg mb-4">{t("footer.contact")}</h4>
          <ul className="space-y-3 text-gray-300">
            <li>{t("footer.contact_items.address")}</li>
            <li>{t("footer.contact_items.phone")}</li>
            <li>{t("footer.contact_items.email")}</li>
          </ul>
        </div>
      </div>

      {/* SUB-FOOTER */}
      <div className="border-t border-white/10 py-6 px-6 md:px-16 flex flex-col md:flex-row items-center justify-between gap-4">

        <p className="text-gray-400 text-sm">
          {t("footer.copyright")}
        </p>

        {/* Social (SVG handmade – không dùng react-icons) */}
        <div className="flex gap-4">
          <a className="hover:text-emerald-400 transition" href="#">
            {/* Facebook icon */}
            <svg width="22" height="22" fill="currentColor" viewBox="0 0 24 24">
              <path d="M22 12a10 10 0 1 0-11.5 9.9v-7h-2v-3h2v-2.3c0-2 1.2-3.1 3-3.1 .9 0 1.8.1 1.8.1v2h-1c-1 0-1.3.6-1.3 1.2V12h2.3l-.4 3h-1.9v7A10 10 0 0 0 22 12" />
            </svg>
          </a>

          <a className="hover:text-emerald-400 transition" href="#">
            {/* Instagram icon */}
            <svg width="22" height="22" fill="currentColor" viewBox="0 0 24 24">
              <path d="M12 2.2c3.2 0 3.6 0 4.9.1 1.2.1 1.9.3 2.4.5a4.3 4.3 0 0 1 1.5 1.5c.2.5.4 1.2.5 2.4.1 1.3.1 1.7.1 4.9s0 3.6-.1 4.9c-.1 1.2-.3 1.9-.5 2.4a4.3 4.3 0 0 1-1.5 1.5c-.5.2-1.2.4-2.4.5-1.3.1-1.7.1-4.9.1s-3.6 0-4.9-.1c-1.2-.1-1.9-.3-2.4-.5a4.3 4.3 0 0 1-1.5-1.5c-.2-.5-.4-1.2-.5-2.4C2.2 15.6 2.2 15.2 2.2 12s0-3.6.1-4.9c.1-1.2.3-1.9.5-2.4A4.3 4.3 0 0 1 4.3 3.2c.5-.2 1.2-.4 2.4-.5C7.9 2.2 8.3 2.2 12 2.2Zm0 3.2A6.6 6.6 0 1 0 18.6 12 6.6 6.6 0 0 0 12 5.4Zm0 10.9A4.3 4.3 0 1 1 16.3 12 4.3 4.3 0 0 1 12 16.3Zm5.4-10.8a1.5 1.5 0 1 1-1.5-1.5 1.4 1.4 0 0 1 1.5 1.5Z" />
            </svg>
          </a>

          <a className="hover:text-emerald-400 transition" href="#">
            {/* Tiktok icon */}
            <svg width="22" height="22" fill="currentColor" viewBox="0 0 24 24">
              <path d="M21 7a5.5 5.5 0 0 1-4-1.5V15a6 6 0 1 1-6-6h1.5v3H11a3 3 0 1 0 3 3V3h2.5A5.5 5.5 0 0 0 21 7Z" />
            </svg>
          </a>
        </div>
      </div>
    </footer>
  );
}
