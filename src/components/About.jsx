import Image from "next/image";
import car from '@/assets/carSt.png'

export default function About() {
  return (
    <div className="relative w-full bg-black overflow-hidden px-6 sm:px-10 md:pl-20 py-12 sm:py-16 md:py-20" id="about">

      <h1 className="font-orbitron text-[32px] sm:text-[42px] md:text-[52px] font-light text-red-600 leading-tight mb-2 tracking-tight">
        Love your ride?
      </h1>
      <h2 className="font-orbitron text-[18px] sm:text-[22px] md:text-[26px] font-normal text-white tracking-wide mb-8 sm:mb-10">
        You'll love us too.
      </h2>

      <div className="flex flex-col md:flex-row md:items-center gap-0">

       
        <div className="w-full md:shrink-0 md:w-[52%]">
          <p className="text-[13px] sm:text-[14px] md:text-[15px] text-white leading-relaxed mb-5">
            Not sure where to start your car's upgrade journey? Spoiler: With us. Every time you
            upgrade your car with us, it's more than just finding the best car accessories; it's about
            creating a new look for your car. We work our magic to make sure we meet everything
            on your ride's wishlist, from exterior styling to interior car accessories. We're here to
            bridge the gap between customer aspirations and high-quality car accessories.
            Whether it's ambient lighting to set the mood or performance parts to boost your
            drive, we have it all.
          </p>
          <p className="text-[13px] sm:text-[14px] md:text-[15px] text-white leading-relaxed">
            By bringing the finest brands just a drive away in Bangalore, our expert team ensures
            you customise your car exactly the way you envision it. Since our establishment in
            1992, we have never wavered from the goal of making car customization, car
            upgrades, and car styling easier for you. We take your ride as seriously as you do! Join
            us and let's give it the transformation it's been waiting for.
          </p>
        </div>

        {/* Right: car image — hidden on mobile, shows md+ */}
        <div className="hidden md:block relative flex-1 h-44 md:h-52 lg:h-60 xl:h-64">

          {/* Left fade */}
          <div className="absolute inset-y-0 left-0 w-24 lg:w-32 bg-gradient-to-r from-black to-transparent z-10" />
          {/* Top fade */}
          <div className="absolute inset-x-0 top-0 h-12 lg:h-16 bg-gradient-to-b from-black to-transparent z-10" />
          {/* Bottom fade */}
          <div className="absolute inset-x-0 bottom-0 h-12 lg:h-16 bg-gradient-to-t from-black to-transparent z-10" />
          {/* Right fade */}
        

          <Image
            src={car}
            alt="Car interior"
            fill
            className="object-cover object-left"
            style={{ opacity: 0.55 }}
          />

        </div>

        <div className="block md:hidden relative w-full h-48 mt-8">
          <div className="absolute inset-y-0 left-0 w-16 bg-gradient-to-r from-black to-transparent z-10" />
          <div className="absolute inset-x-0 top-0 h-12 bg-gradient-to-b from-black to-transparent z-10" />
          <div className="absolute inset-x-0 bottom-0 h-12 bg-gradient-to-t from-black to-transparent z-10" />
          <div className="absolute inset-y-0 right-0 w-16 bg-gradient-to-l from-black to-transparent z-10" />
          <Image
            src={car}
            alt="Car interior"
            fill
            className="object-cover object-center"
            style={{ opacity: 0.55 }}
          />
        </div>

      </div>

    </div>
  );
}