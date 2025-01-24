"use client";
import { useEffect, useRef } from "react";
import gsap from "gsap";
import {
  Facebook,
  Instagram,
  Twitter,
  Mail,
  Phone,
  MapPin,
} from "lucide-react";

export default function Footer() {
  const footerRef = useRef(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.fromTo(
        footerRef.current,
        { opacity: 0, y: 50 },
        { opacity: 1, y: 0, duration: 1.2, ease: "power4.out" }
      );
    }, footerRef);
    return () => ctx.revert();
  }, []);

  return (
    <footer
      ref={footerRef}
      className="bg-neutral-900 text-start text-white py-20 relative overflow-hidden"
    >
      {/* Luxurious Gradient Overlay */}
      <div className="absolute inset-0 bg-gradient-to-br from-neutral-800 to-black opacity-60 pointer-events-none"></div>

      {/* Decorative Gold Line */}
      <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-transparent via-gold-500 to-transparent"></div>

      <div className="relative z-10 max-w-7xl mx-auto px-6 grid md:grid-cols-3 gap-12">
        {/* Brand Section */}
        <div className="space-y-6 text-center md:text-left">
          <h3 className="text-3xl font-serif tracking-wider text-gold-400">
            Château Bijoux
          </h3>
          <p className="text-neutral-300 text-sm leading-relaxed">
            A legacy of exceptional craftsmanship, creating jewelry that
            transcends time and captures the essence of individual elegance.
          </p>
          <div className="flex space-x-4 justify-center md:justify-start">
            <SocialIcon href="#" icon={<Facebook className="w-5 h-5" />} />
            <SocialIcon href="#" icon={<Instagram className="w-5 h-5" />} />
            <SocialIcon href="#" icon={<Twitter className="w-5 h-5" />} />
          </div>
        </div>

        {/* Contact Information */}
        <div className="space-y-6 text-center">
          <h4 className="text-2xl font-serif text-gold-400">Contact</h4>
          <div className="space-y-3 text-neutral-300">
            <ContactItem
              icon={<Mail className="w-5 h-5 text-gold-500" />}
              text="contact@chateaubijoux.com"
            />
            <ContactItem
              icon={<Phone className="w-5 h-5 text-gold-500" />}
              text="+33 1 23 45 67 89"
            />
            <ContactItem
              icon={<MapPin className="w-5 h-5 text-gold-500" />}
              text="123 Rue de la Joaillerie, Paris"
            />
          </div>
        </div>

        {/* Quick Links */}
        <div className="space-y-6 text-center md:text-right">
          <h4 className="text-2xl font-serif text-gold-400">Explore</h4>
          <div className="text-neutral-300 space-y-2">
            <FooterLink href="#collections">Collections</FooterLink>
            <FooterLink href="#about">Our Story</FooterLink>
            <FooterLink href="#contact">Book Consultation</FooterLink>
            <FooterLink href="#">Privacy Policy</FooterLink>
          </div>
        </div>
      </div>

      {/* Copyright Section */}
      <div className="relative z-10 text-center text-neutral-500 mt-12 pt-6 border-t border-neutral-700">
        <p className="text-sm">
          © 2024 Château Bijoux. All Rights Reserved. Handcrafted with passion
          in Paris.
        </p>
      </div>
    </footer>
  );
}

function SocialIcon({ href, icon }) {
  return (
    <a
      href={href}
      className="w-10 h-10 bg-neutral-800 text-neutral-300 rounded-full flex items-center justify-center hover:bg-gold-500 hover:text-black transition-all duration-300"
    >
      {icon}
    </a>
  );
}

function ContactItem({ icon, text }) {
  return (
    <div className="flex items-center justify-center md:justify-start space-x-3">
      {icon}
      <span>{text}</span>
    </div>
  );
}

function FooterLink({ href, children }) {
  return (
    <a
      href={href}
      className="block text-neutral-300 hover:text-gold-400 transition-colors duration-300"
    >
      {children}
    </a>
  );
}
