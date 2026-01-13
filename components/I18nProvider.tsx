"use client";

import { PropsWithChildren, useEffect, useState } from "react";
import i18next from "i18next";
import { I18nextProvider, initReactI18next } from "react-i18next";
async function loadBundles() {
  const [viRes, enRes, koRes] = await Promise.all([
    fetch("/locales/vi/common.json").then((r) => r.json()),
    fetch("/locales/en/common.json").then((r) => r.json()),
    fetch("/locales/ko/common.json").then((r) => r.json()),
  ]);
  i18next.addResourceBundle("vi", "common", viRes, true, true);
  i18next.addResourceBundle("en", "common", enRes, true, true);
  i18next.addResourceBundle("ko", "common", koRes, true, true);
}

export default function I18nProvider({ children }: PropsWithChildren) {
  if (!i18next.isInitialized) {
    i18next.use(initReactI18next).init({
      lng: "en",
      fallbackLng: "en",
      defaultNS: "common",
      interpolation: { escapeValue: false },
    });
  }

  const [loaded, setLoaded] = useState(false);

  useEffect(() => {
    loadBundles().then(() => {
      setLoaded(true);
      i18next.changeLanguage(i18next.language || "vi");
    });
    const updateLang = (lng: string) => {
      document.documentElement.lang = lng || "vi";
    };
    updateLang(i18next.language || "vi");
    i18next.on("languageChanged", updateLang);
    return () => {
      i18next.off("languageChanged", updateLang);
    };
  }, []);

  if (!loaded) return null;
  return <I18nextProvider i18n={i18next}>{children}</I18nextProvider>;
}

