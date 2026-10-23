"use client";

import { useEffect } from "react";

const TawkMessenger = () => {
  useEffect(() => {
    if (typeof window !== "undefined") {
      const Tawk_API = (window as any).Tawk_API || {};
      const Tawk_LoadStart = new Date();

      (function () {
        const s1 = document.createElement("script");
        const s0 = document.getElementsByTagName("script")[0];
        s1.async = true;
        s1.src = "https://embed.tawk.to/67c94118703ff01909ccb629/1ill2ciet";
        s1.charset = "UTF-8";
        s1.setAttribute("crossorigin", "*");

        if (s0 && s0.parentNode) {
          s0.parentNode.insertBefore(s1, s0);
        }
      })();
    }
  }, []);

  return null;
};

export default TawkMessenger;