import Image from "next/image";
import wheels from "@/assets/wheels.png";

export default function WhyUsSection() {
  return (
    <div className="relative bg-black w-full overflow-hidden">

      {/* Top content */}
      <div className="relative z-10 flex flex-col items-center text-center pt-16 pb-10 px-6">

        {/* Heading */}
        <h2 className="font-orbitron text-white text-3xl sm:text-4xl md:text-[40px] font-light leading-tight mb-2">
          Why Your Ride Deserves a
        </h2>
        <h2 className="font-orbitron text-red-500 text-4xl sm:text-5xl md:text-[64px] font-light mb-10">
          Stop Here
        </h2>

        {/* Body text */}
        <p className="font-sans text-white text-sm sm:text-base leading-relaxed text-justify max-w-3xl">
          At Car Decor, we believe your car deserves more than just accessories - it deserves a
          personality. Our services are designed to transform every journey into an experience,
          blending style, safety, and comfort seamlessly. With fast and secure shipping, getting
          your upgrades has never been easier. From cutting-edge upgrades to timeless enhancements,
          we handpick and install only the best, ensuring your ride feels as good as it looks. With
          a modern showroom that lets you imagine the possibilities and a team ready to guide you at
          every step, we make the process of upgrading your car simple, exciting, and truly your own.
        </p>

      </div>

      {/* Bottom — wheels image with top fade */}
      <div className="relative w-full h-72 sm:h-80 md:h-96 lg:h-105">

        
        <div className="absolute top-0 left-0 right-0 h-32 bg-linear-to-b from-black to-transparent z-10" />

      
        <div className="absolute inset-y-0 left-0 w-24 bg-linear-to-r from-black to-transparent z-10" />


        <div className="absolute inset-y-0 right-0 w-24 bg-linear-to-l from-black to-transparent z-10" />


        <div className="absolute bottom-0 left-0 right-0 h-24 bg-linear-to-t from-black to-transparent z-10" />

        <Image
          src={wheels}
          alt="Alloy wheels"
          fill
          className="object-contain object-top"
          priority
        />

      </div>

    </div>
  );
}