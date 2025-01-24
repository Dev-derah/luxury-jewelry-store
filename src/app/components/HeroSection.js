'use client'
import { useEffect, useRef } from "react";
import gsap from "gsap";
import { NavBar } from "./NavBar";
import { ScrollingText } from "./ScrollingText";
import Image from "next/image";
import Link from "next/link";

export default function HeroSection() {
  const heroRef = useRef(null);
  const ringRef = useRef(null);
  const buttonRef = useRef(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      const tl = gsap.timeline();

      tl.from(".hero-title", {
        y: 100,
        opacity: 0,
        duration: 1.2,
        ease: "power4.out",
      })
        .from(
          ringRef.current,
          {
            scale: 0,
            rotation: 360,
            opacity: 0,
            duration: 1.5,
            ease: "back.out(1.7)",
          },
          "-=0.5"
        )
        .from(
          ".hero-name",
          {
            y: 50,
            opacity: 0,
            duration: 1,
            ease: "power3.out",
          },
          "-=1"
        )
        .from(
          buttonRef.current,
          {
            y: 30,
            opacity: 1,
            duration: 0.8,
            ease: "power2.out",
          },
          "-=0.8"
        );
    }, heroRef);

    return () => ctx.revert();
  }, []);

  return (
    <div ref={heroRef} className="relative min-h-screen bg-white text-black">
      <NavBar />

      <main className="relative flex flex-col items-center min-h-screen px-4 pt-32 md:pt-40 2xl:pt-48">
        <h1 className="hero-title font-bold text-5xl md:text-6xl tracking-wider text-center mb-32">
          JEWELRY SPECIALIST
        </h1>

        <div
          ref={ringRef}
          className="absolute mt-8 z-20 w-52 h-52 md:w-80 md:h-80 mb-16 lg:mt-2"
        >
          <Image
            src="https://res.cloudinary.com/dcvpqwloa/image/upload/v1737709707/jews/zglg5c5vwpbrntyqy50n.svg"
            alt="ring"
            className=" object-contain"
            fill
          />
        </div>

        <h2 className="font-alex-brush hero-name text-center text-6xl md:text-[12rem] italic mb-20">
          Château Bijoux
        </h2>

        <Link
          href="#collections"
          className="discover-btn px-8 py-1 border rounded-full border-black hover:bg-black hover:text-white transition-all duration-300 text-sm tracking-widest"
        >
          ✧ DISCOVER OUR COLLECTION ✧
        </Link>
      </main>

      <ScrollingText />
    </div>
  );
}
