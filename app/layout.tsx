// app/layout.tsx
import type { Metadata } from "next";
import "./globals.css";
import I18nProvider from "../components/I18nProvider";

export const metadata: Metadata = {
  title: "Hoi An Paragliding",
  description: "Fly once, remember forever",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="vi">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link href="https://fonts.googleapis.com/css2?family=Roboto+Condensed:ital,wght@0,300;0,400;0,700&display=swap" rel="stylesheet" />
      </head>
      <body className="font-['Roboto_Condensed'] antialiased">
        <I18nProvider>{children}</I18nProvider>
      </body>
    </html>
  );
}
