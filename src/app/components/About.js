import Image from "next/image";
import { Quote }  from "lucide-react";

export default function AboutSection() {
  return (
    <section id="about" className="bg-neutral-50 py-32">
      <div className="max-w-7xl mx-auto px-6 grid md:grid-cols-2 gap-16 items-center">
        {/* Image Section with Decorative Elements */}
        <div className="relative">
          <div className="absolute -top-10 -left-10 w-24 h-24 bg-gold-500 rounded-full opacity-20 blur-2xl"></div>
          <div className="absolute -bottom-10 -right-10 w-24 h-24 bg-gold-500 rounded-full opacity-20 blur-2xl"></div>
          <Image
            src="https://res.cloudinary.com/dcvpqwloa/image/upload/v1737708088/jews/k3kg9vujnvgoo1vzwqn5.jpg"
            width={600}
            height={600}
            alt="Master Jeweler at Work"
            className="rounded-xl shadow-2xl object-cover aspect-1 hover:scale-105 transition-transform duration-500"
          />
          <div className="absolute bottom-8 left-8 bg-white/80 backdrop-blur-sm rounded-xl p-4 shadow-lg">
            <Quote className="text-gold-500 w-8 h-8 mb-2 text-gray-500" />
            <p className="text-sm italic text-neutral-800">
              Precision is our poetry, craftsmanship our passion.
            </p>
          </div>
        </div>

        {/* Content Section */}
        <div className="space-y-8">
          <h2 className="text-5xl font-serif text-neutral-900 mb-6">
            Our Legacy
          </h2>

          <p className="text-xl text-neutral-700 leading-relaxed mb-8">
            For generations, we have dedicated ourselves to creating
            extraordinary jewelry that transcends time. Each piece is a
            testament to our commitment to unparalleled craftsmanship and
            timeless design.
          </p>

          {/* Key Attributes */}
        </div>
      </div>
    </section>
  );
}
