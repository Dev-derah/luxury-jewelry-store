"use client";
import { useEffect, useRef } from "react";
import gsap from "gsap";

export default function LoadingPage() {
  const loadingRef = useRef(null);
  const ringRef = useRef(null);
  const textRef = useRef(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      const tl = gsap.timeline({ repeat: -1 });

      tl.to(ringRef.current, {
        rotation: 360,
        duration: 2,
        ease: "power1.inOut",
      }).to(ringRef.current, {
        rotation: 720,
        duration: 2,
        ease: "power1.inOut",
      });

      gsap.fromTo(
        textRef.current,
        { opacity: 0, y: 20 },
        { opacity: 1, y: 0, duration: 1, ease: "power3.out" }
      );
    }, loadingRef);

    return () => ctx.revert();
  }, []);

  return (
    <div
      ref={loadingRef}
      className="fixed inset-0 z-50 bg-neutral-50 flex flex-col items-center justify-center"
    >
      <svg
        ref={ringRef}
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 100 100"
        className="w-32 h-32 md:w-48 md:h-48 text-neutral-800"
      >
        <circle
          cx="50"
          cy="50"
          r="40"
          fill="none"
          stroke="currentColor"
          strokeWidth="8"
          strokeDasharray="250"
          strokeDashoffset="250"
          className="animate-[spin_2s_linear_infinite]"
        />
      </svg>
      <h2 ref={textRef} className="mt-8 text-2xl font-serif text-neutral-700">
        Château Bjoux
      </h2>
    </div>
  );
}
