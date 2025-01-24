"use client";
import { useState, useEffect, useRef } from "react";
import gsap from "gsap";
import Link from "next/link";

export function NavBar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const menuRef = useRef(null);
  const linksRef = useRef([]);
  const closeButtonRef = useRef(null);

  const toggleMenu = () => {
    setIsMenuOpen((prev) => {
      const newState = !prev;
      animateMenu(newState);
      return newState;
    });
  };

  const animateMenu = (menuState) => {
    const ctx = gsap.context(() => {
      if (menuState) {
        // Background animation
        gsap.fromTo(
          menuRef.current,
          {
            opacity: 0,
            backgroundColor: "rgba(255,255,255,0)",
          },
          {
            opacity: 1,
            backgroundColor: "rgba(255,255,255,1)",
            duration: 0.5,
            ease: "power2.out",
          }
        );

        // Close button animation
        gsap.fromTo(
          closeButtonRef.current,
          {
            scale: 0,
            rotation: -180,
          },
          {
            scale: 1,
            rotation: 0,
            duration: 0.5,
            ease: "back.out(1.7)",
          }
        );

        // Links stagger animation
        gsap.fromTo(
          linksRef.current,
          {
            opacity: 0,
            y: 50,
            scale: 0.8,
          },
          {
            opacity: 1,
            y: 0,
            scale: 1,
            duration: 0.6,
            stagger: 0.1,
            ease: "back.out(1.5)",
          }
        );
      } else {
        // Closing animation
        gsap.to(menuRef.current, {
          opacity: 0,
          y: -50,
          duration: 0.4,
          ease: "power2.in",
        });
      }
    }, menuRef);
    return () => ctx.revert();
  };

  useEffect(() => {
    // Disable scrolling when the menu is open
    document.body.style.overflow = isMenuOpen ? "hidden" : "auto";
  }, [isMenuOpen]);

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-white/95 py-6 px-8">
      <div className="flex justify-between items-center max-w-7xl mx-auto">
        <div className="text-2xl tracking-wide">Château Bijoux</div>
        <button
          className="flex items-center space-x-2 group"
          onClick={toggleMenu}
        >
          <span className="group-hover:text-neutral-600 transition-colors">
            MENU
          </span>
          <div className="space-y-3">
            <div className="w-14 h-0.5 bg-black group-hover:w-10 transition-all"></div>
            <div className="w-14 h-0.5 bg-black group-hover:w-10 transition-all"></div>
          </div>
        </button>
      </div>

      <div
        ref={menuRef}
        className={`fixed inset-0 bg-white z-40 flex flex-col items-center justify-center ${
          isMenuOpen ? "block" : "hidden"
        }`}
      >
        <button
          ref={closeButtonRef}
          className="absolute top-8 right-8 text-4xl hover:rotate-90 transition-transform duration-300"
          onClick={toggleMenu}
        >
          &times;
        </button>
        <nav className="flex flex-col items-center space-y-8 text-3xl font-serif">
          {[
            { href: "/", label: "HOME" },
            { href: "#collections", label: "OUR PRODUCTS" },
            { href: "#about", label: "ABOUT US" },
          ].map((item, index) => (
            <Link
              key={item.href}
              href={item.href}
              onClick={toggleMenu}
              ref={(el) => (linksRef.current[index] = el)}
              className="hover:text-neutral-500 transition-colors duration-300 transform hover:scale-110"
            >
              {item.label}
            </Link>
          ))}
        </nav>
      </div>
    </nav>
  );
}
