// app/layout.tsx
import type { Metadata } from "next";
import Script from "next/script";
import "./globals.css";
import I18nProvider from "../components/I18nProvider";
const GTM_ID = "GTM-WFSM42DG";
export const metadata: Metadata = {
  title: "Ninh Binh Paragliding",
  description: "Fly once, remember forever",
  verification: {
    google: "google59236dd419bdf09d",
  },
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
        {/* Google Tag Manager */}
        <Script id="gtm" strategy="afterInteractive">
          {`(function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
          new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
          j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
          'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
          })(window,document,'script','dataLayer','${GTM_ID}');`}
        </Script>
        {/* Chatwoot
        <Script id="chatwoot" strategy="afterInteractive">
          {`(function(d,t) {
            var BASE_URL="https://crm.smb.paraglidingvietnam.com";
            var g=d.createElement(t),s=d.getElementsByTagName(t)[0];
            g.src=BASE_URL+"/packs/js/sdk.js";
            g.async = true;
            s.parentNode.insertBefore(g,s);
            g.onload=function(){
              window.chatwootSDK.run({
                websiteToken: '235Uo6i1NE2VZo5JmA3zpgGC',
                baseUrl: BASE_URL
              })
            }
          })(document,"script");`}
        </Script> */}
      </head>
      <body className="font-['Roboto_Condensed'] antialiased">
        {/* GTM noscript fallback */}
        <noscript>
          <iframe
            src={`https://www.googletagmanager.com/ns.html?id=${GTM_ID}`}
            height="0"
            width="0"
            style={{ display: "none", visibility: "hidden" }}
          />
        </noscript>
        <I18nProvider>{children}</I18nProvider>
      </body>
    </html>
  );
}
