"use client"
import Image from "next/image";
import { useState } from "react";
import interior from "@/assets/carSt.png";
import exterior from "@/assets/bmw.png";
import electronics from "@/assets/carSt.png";
import performance from "@/assets/mobile.png";

const categories = [
  {
    title: "Interior Accessories:",
    subtitle: "BEAUTY STARTS WITHIN",
    image: interior,
    description: "Premium seat covers, floor mats, and interior trims designed to elevate every drive.",
  },
  {
    title: "Exterior Styling:",
    subtitle: "WE JUDGE A CAR BY ITS COVER",
    image: exterior,
    description: "Seat covers, floor mats, and sun control films that are designed to feel as good as they look.",
  },
  {
    title: "Electronics & Gadgets:",
    subtitle: "IT'S ALL ABOUT THE BRAINS",
    image: electronics,
    description: "Smart gadgets and electronics that keep you connected, safe, and in control on every road.",
  },
  {
    title: "Performance Parts:",
    subtitle: "IT'S THE UNDERNEATH THAT MATTERS",
    image: performance,
    description: "High-performance parts engineered to boost power, handling, and the thrill of your drive.",
  },
];

export default function CategorySection() {
  const [hoveredIndex, setHoveredIndex] = useState(null);

  return (
    <div className="bg-black w-full" id="services">

      {/* Heading */}
      <div className="text-center py-10 sm:py-12 md:py-16 px-4">
        <h2 className="font-orbitron text-white text-2xl sm:text-3xl md:text-[40px] font-light leading-tight">
          We know your car deserves
          <br />
          the best, so we've got you covered!
        </h2>
      </div>

      {/* Cards */}
      <div className="px-4 sm:px-8 md:px-16 lg:px-24 xl:px-30 pb-12 sm:pb-14 md:pb-16">
        <div className="flex flex-col sm:flex-row sm:flex-wrap lg:flex-nowrap items-start gap-4 sm:gap-5">

          {categories.map((cat, i) => {
            const isHovered = hoveredIndex === i;

            return (
              <div
                key={i}
                className="w-full sm:w-[calc(50%-10px)] lg:w-0 lg:flex-1 border border-neutral-800 bg-neutral-900 cursor-pointer overflow-hidden"
                onMouseEnter={() => setHoveredIndex(i)}
                onMouseLeave={() => setHoveredIndex(null)}
              >
                {/* Header */}
                <div className="px-4 sm:px-5 pt-4 sm:pt-5 pb-3">
                  <h3
                    className={`font-orbitron text-sm sm:text-base font-bold transition-colors duration-300 ${
                      isHovered ? "text-red-500" : "text-white"
                    }`}
                  >
                    {cat.title}
                  </h3>
                  <p className="text-neutral-400 text-[10px] sm:text-xs tracking-widest uppercase mt-1">
                    {cat.subtitle}
                  </p>
                </div>

                {/* Image — shrinks when description expands, keeping card height stable */}
                <div
                  className={`relative w-full transition-all duration-500 ease-in-out ${
                    isHovered ? "h-44 sm:h-48 lg:h-52" : "h-56 sm:h-64 lg:h-72 xl:h-80"
                  }`}
                >
                  <Image
                    src={cat.image}
                    alt={cat.title}
                    fill
                    className={`object-cover transition-transform duration-500 ${
                      isHovered ? "scale-105" : "scale-100"
                    }`}
                  />
                </div>

                {/* Description + button — expands downward, image shrinks up to compensate */}
                <div
                  className={`overflow-hidden transition-all duration-500 ease-in-out ${
                    isHovered ? "max-h-52" : "max-h-0"
                  }`}
                >
                  <div className="px-4 sm:px-5 py-5 sm:py-6 flex flex-col gap-3 sm:gap-4">
                    <p className="text-white text-xs sm:text-sm leading-relaxed">
                      {cat.description}
                    </p>
                    <button className="self-start border border-neutral-500 text-white text-xs sm:text-sm px-5 sm:px-6 py-2 hover:bg-white hover:text-black transition-colors duration-200">
                      Know More
                    </button>
                  </div>
                </div>

              </div>
            );
          })}

        </div>
      </div>

    </div>
  );
}