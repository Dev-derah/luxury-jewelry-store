"use client";

import { useEffect } from "react";
import gsap from "gsap";
export function ScrollingText() {
  useEffect(() => {
    gsap.to(".scrolling-text", {
      xPercent: -50,
      repeat: -1,
      duration: 20,
      ease: "none",
    });
  }, []);

  return (
    <div className="absolute bottom-0 left-0 right-0 bg-neutral-900 overflow-hidden py-6">
      <div className="scrolling-text whitespace-nowrap text-white text-2xl tracking-wider lg:text-8xl">
        EXPERIENCE THE ALLURE ✧ EXPERIENCE THE ALLURE ✧ EXPERIENCE THE ALLURE ✧
      </div>
    </div>
  );
}
