"use client";
import { useState } from "react";
import quout from '@/assets/quote.png'
import Image from "next/image";

const testimonials = [
      {
    text: "Absolutely fantastic service! Got my car's ambient lighting installed and the results exceeded my expectations. The team was professional, punctual, and very detail-oriented. Will definitely be coming back for more upgrades.",
    author: "Priya Ramesh",
  },
  {
    text: "Had a great experience getting my car's infotainment screen and reverse camera fixed here. The team did a clean and efficient job everything is working perfectly now. Special thanks to Mr. Kiran for his clear and professional communication. He kept me informed at every step and made the whole process smooth and hassle-free. Great service and very reliable. Highly recommend this place for any car accessory work!",
    author: "Karthik Sudarshan",
  },
  {
    text: "Best place in Bangalore for car accessories. Got seat covers and a dashcam installed. The quality is top-notch and the pricing is very fair. The staff is knowledgeable and helped me pick the right products for my car.",
    author: "Arjun Menon",
  },
];

export default function TestimonialCarousel() {
  const [current, setCurrent] = useState(0);
  const [animating, setAnimating] = useState(false);
  const [direction, setDirection] = useState(null);

  const navigate = (dir) => {
    if (animating) return;
    setDirection(dir);
    setAnimating(true);
    setTimeout(() => {
      setCurrent((prev) =>
        dir === "next"
          ? (prev + 1) % testimonials.length
          : (prev - 1 + testimonials.length) % testimonials.length
      );
      setAnimating(false);
    }, 300);
  };

  return (
    <div className="bg-black w-full py-20 px-0 md:px-4 overflow-hidden">

      {/* Heading */}
      <div className="text-center mb-14">
        <p className="font-orbitron text-white text-3xl sm:text-4xl md:text-[40px] font-light mb-2">
          Trust our customers,
        </p>
        <p className="font-orbitron text-red-500 text-4xl sm:text-5xl md:text-[64px] font-light">
          not just us
        </p>
      </div>

      {/* Carousel area */}
      <div className="relative flex items-center justify-center max-w-5xl mx-auto">

        {/* Blurred side cards — left */}
        <div className="hidden md:block absolute -left-76 top-11 w-56 lg:w-120 h-52 rounded-2xl bg-neutral-800/60 blur-sm scale-90 origin-right opacity-60 pointer-events-none" />

        {/* Main card */}
        <div
          className={`relative z-10 w-full max-w-xl mx-4 md:mx-16 transition-all duration-300 ease-in-out ${
            animating
              ? direction === "next"
                ? "-translate-x-8 opacity-0"
                : "translate-x-8 opacity-0"
              : "translate-x-0 opacity-100"
          }`}
        >
          {/* Quote mark */}
          <div className="text-white text-8xl font-serif leading-none -mb-4 -ml-3 select-none">
            <Image
            alt="iamge"
            src={quout}
            className="w-9 md:w-18"
            />
          </div>

          {/* Card */}
          <div className="bg-[#1A1A1A] rounded-2xl px-8 py-8">
            <p className="font-sans text-white text-sm leading-relaxed text-justify">
              {testimonials[current].text}
            </p>
            <p className="font-orbitron text-white text-right mt-6 text-base font-semibold">
              -{testimonials[current].author}
            </p>
          </div>
        </div>

        {/* Blurred side cards — right */}
        <div className="hidden md:block absolute -right-70 top-11 w-56 lg:w-120 h-52 rounded-2xl bg-neutral-800/60 blur-sm scale-90 origin-left opacity-60 pointer-events-none" />

      </div>

      {/* Navigation buttons */}
      <div className="flex justify-center gap-4 mt-12">
        <button
          onClick={() => navigate("prev")}
          className="w-12 h-12 rounded-full bg-neutral-700 hover:bg-neutral-600 text-white flex items-center justify-center transition-colors duration-200"
          aria-label="Previous"
        >
          ◀
        </button>
        <button
          onClick={() => navigate("next")}
          className="w-12 h-12 rounded-full bg-neutral-700 hover:bg-neutral-600 text-white flex items-center justify-center transition-colors duration-200"
          aria-label="Next"
        >
          ▶
        </button>
      </div>

    </div>
  );
}