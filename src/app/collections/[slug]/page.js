"use client";
import { useEffect, useRef, useState } from "react";
import { gsap } from "gsap";
import Link from "next/link";
import { use } from "react";

export default function ComingSoonPage(props) {
  const params = use(props.params);
  const headingRef = useRef(null);
  const contentRef = useRef(null);
  const buttonsRef = useRef(null);
  const backgroundRef = useRef(null);
  const [isAnimationComplete, setIsAnimationComplete] = useState(false);

  const capitalizeFirstLetter = (string) => {
    return string.charAt(0).toUpperCase() + string.slice(1);
  };

  useEffect(() => {
    const ctx = gsap.context(() => {
      const tl = gsap.timeline({
        onComplete: () => setIsAnimationComplete(true),
      });

      // Stagger background layers
      tl.fromTo(
        backgroundRef.current,
        {
          opacity: 0,
          scale: 0.9,
        },
        {
          opacity: 1,
          scale: 1,
          duration: 1,
          ease: "power2.out",
        }
      );

      // Animate heading with more dramatic entrance
      tl.fromTo(
        headingRef.current,
        {
          opacity: 0,
          y: -100,
          rotationX: -90,
        },
        {
          opacity: 1,
          y: 0,
          rotationX: 0,
          duration: 1,
          ease: "elastic.out(1, 0.6)",
        },
        "-=0.5"
      );

      // Animate content with subtle reveal
      tl.fromTo(
        contentRef.current,
        {
          opacity: 0,
          y: 50,
          filter: "blur(20px)",
        },
        {
          opacity: 1,
          y: 0,
          filter: "blur(0px)",
          duration: 0.8,
          ease: "power3.out",
        },
        "-=0.6"
      );

      // Animate buttons with spring effect
      tl.fromTo(
        buttonsRef.current,
        {
          opacity: 0,
          scale: 0.5,
          rotation: -15,
        },
        {
          opacity: 1,
          scale: 1,
          rotation: 0,
          duration: 0.7,
          ease: "back.out(1.7)",
        },
        "-=0.4"
      );
    });

    return () => ctx.revert(); // Clean up animations
  }, []);

  return (
    <div
      ref={backgroundRef}
      className={`min-h-screen bg-gradient-to-br from-neutral-50 to-neutral-200 flex items-center justify-center p-6 transition-all duration-1000 ${
        isAnimationComplete ? "opacity-100" : "opacity-0"
      }`}
    >
      <div className="max-w-2xl w-full text-center bg-white shadow-2xl rounded-3xl p-16 border border-neutral-200 overflow-hidden relative">
        {/* Subtle decorative elements */}
        <div className="absolute top-0 left-0 w-full h-full pointer-events-none">
          <div className="absolute top-0 right-0 w-32 h-32 bg-gradient-to-br from-neutral-100/30 to-neutral-200/30 rounded-full -translate-x-1/2 -translate-y-1/2"></div>
          <div className="absolute bottom-0 left-0 w-24 h-24 bg-gradient-to-br from-neutral-100/20 to-neutral-200/20 rounded-full translate-x-1/2 translate-y-1/2"></div>
        </div>

        <div ref={headingRef}>
          <h1 className="text-6xl font-serif text-neutral-800 mb-6 relative z-10">
            {capitalizeFirstLetter(params.slug)} Collection
          </h1>
        </div>

        <div className="border-t border-b border-neutral-300 py-8 my-8">
          <p className="text-2xl text-neutral-600 italic">
            Crafting Elegance, Coming Soon
          </p>
        </div>

        <div ref={contentRef}>
          <p className="text-xl text-neutral-700 mb-10">
            Our artisans are meticulously preparing a collection that redefines
            luxury. Each piece is being carefully designed to tell a unique
            story of craftsmanship and timeless beauty.
          </p>
        </div>

        <div ref={buttonsRef} className="flex justify-center space-x-6">
          <Link
            href="/"
            className="px-8 py-4 bg-neutral-800 text-white rounded-full text-lg hover:bg-neutral-700 transition-all duration-300 transform hover:-translate-y-1 hover:shadow-lg"
          >
            Back to Collections
          </Link>
        </div>
      </div>
    </div>
  );
}
