"use client";
import { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/dist/ScrollTrigger";
import Image from "next/image";
import Link from "next/link";

gsap.registerPlugin(ScrollTrigger);

export default function CollectionsSection() {
  const collectionRef = useRef(null);
  const collections = [
    {
      imageUrl:
        "https://res.cloudinary.com/dcvpqwloa/image/upload/v1737707100/jews/anmxybxu1dtxqfnqz7rd.jpg",
      title: "Engagement",
      description: "Crafted to commemorate a timeless moment.",
      slug: "engagement",
    },
    {
      imageUrl:
        "https://res.cloudinary.com/dcvpqwloa/image/upload/v1737707106/jews/h0yb4uay2otyozrqtq0i.jpg",
      title: "Wedding",
      description: "Symbols of eternal love and commitment.",
      slug: "wedding",
    },
    {
      imageUrl:
        "https://res.cloudinary.com/dcvpqwloa/image/upload/v1737707108/jews/tok72r3c3ctk8lfnebjf.jpg",
      title: "Necklaces",
      description: "Exquisite pendants to adorn the décolletage.",
      slug: "necklaces",
    },
    {
      imageUrl:
        "https://res.cloudinary.com/dcvpqwloa/image/upload/v1737707797/jews/da3jqvhf4siic7t8v3v4.jpg",
      title: "Earrings",
      description: "Delicate accents that frame the face.",
      slug: "earrings",
    },
    {
      imageUrl:
        "https://res.cloudinary.com/dcvpqwloa/image/upload/v1737708033/jews/mrsjxreqvjfxxbdxyc47.jpg",
      title: "Bracelets",
      description: "Refined wrist adornments for everyday elegance.",
      slug: "bracelets",
    },
    {
      imageUrl:
        "https://res.cloudinary.com/dcvpqwloa/image/upload/v1737707103/jews/g5frmevmhobpj0zhol6z.jpg",
      title: "Watches",
      description: "Heirlooms to be passed down through generations.",
      slug: "watches",
    },
  ];

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.from(".collection-card", {
        scrollTrigger: {
          trigger: ".collection-card",
          start: "top 80%",
          end: "bottom 20%",
          scrub: true,
        },
        y: 50,
        opacity: 0,
        duration: 1,
        ease: "power3.out",
      });
    }, collectionRef);
    return () => ctx.revert();
  }, []);

  return (
    <section
      ref={collectionRef}
      className="bg-neutral-50 py-32"
      id="collections"
    >
      <div className="max-w-7xl mx-auto px-6 text-center mb-16">
        <h2 className="text-5xl font-serif mb-4 text-black">Our Collections</h2>
        <p className="text-xl text-neutral-600 max-w-3xl mx-auto">
          Discover our meticulously curated collections, each piece telling a
          unique story of craftsmanship and elegance.
        </p>
      </div>
      <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12">
        {collections.map((collection, index) => (
          <CollectionCard
            key={index}
            imageUrl={collection.imageUrl}
            title={collection.title}
            description={collection.description}
            slug={collection.slug}
          />
        ))}
      </div>
    </section>
  );
}

function CollectionCard({ imageUrl, title, description,slug }) {
  return (
    <Link href={`/collections/${slug}`} className="block">
      <div className="collection-card relative h-[500px] overflow-hidden group">
        <Image
          src={imageUrl}
          alt={title}
          fill
          placeholder="blur"
          blurDataURL="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAYAAAAfFcSJAAAADUlEQVR42mP8z8BQDwAEhQGAhKmMIQAAAABJRU5ErkJggg=="
          className="object-cover transition-all duration-1000 group-hover:scale-110"
          onError={(e) => {
            e.target.src = "/fallback-image.jpg"; // Local fallback
          }}
        />
        {/* Persistent Title Section */}
        <div className="absolute bottom-0 left-0 right-0 bg-black/60 text-white p-4 text-center group-hover:hidden">
          <h3 className="text-2xl font-serif">{title}</h3>
        </div>
        {/* Hover Description */}
        <div className="absolute text-center inset-0 bg-black/50 flex flex-col items-center justify-center text-white opacity-0 group-hover:opacity-100 transition-opacity duration-500">
          <h2 className="text-3xl font-bold">{title}</h2>
          <p className="text-lg">{description}</p>
        </div>
      </div>
    </Link>
  );
}
