"use client";

import { usePathname } from "next/navigation";
import { useEffect } from "react";

export default function GoogleAnalytics() {
  const pathname = usePathname();

  useEffect(() => {
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    if (typeof window !== "undefined" && (window as any).gtag) {
      // eslint-disable-next-line @typescript-eslint/no-explicit-any
      (window as any).gtag("config", process.env.NEXT_PUBLIC_GA_ID, {
        page_path: pathname,
      });
    }
  }, [pathname]);

  return null;
}
