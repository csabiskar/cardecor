import React from "react";

function Banner() {
  return (
    <section className="bg-[#1A1A1A] py-8">
      <div className="container mx-auto px-4">
        <div className="flex flex-wrap items-center justify-center gap-3 md:gap-6 text-white italic">
          
          <h1 className="text-sm sm:text-lg md:text-2xl lg:text-3xl font-bold leading-none">
            High-quality Accessories
          </h1>
          <span className="text-lg md:text-2xl lg:text-3xl font-bold leading-none flex items-center justify-center">
            •
          </span>
          <h1 className="text-sm sm:text-lg md:text-2xl lg:text-3xl font-bold leading-none">
            30 Years of Experience
          </h1>
          <span className="text-lg md:text-2xl lg:text-3xl font-bold leading-none flex items-center justify-center">
            •
          </span>
          <h1 className="text-sm sm:text-lg md:text-2xl lg:text-3xl font-bold leading-none">
            Personalised Service
          </h1>

        </div>
      </div>
    </section>
  );
}

export default Banner;