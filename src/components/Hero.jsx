import Image from "next/image";
import bgImg from "@/assets/bg.jpg";
import carImg from "@/assets/car.png";

export default function HeroSection() {
  return (
   <section className="relative min-h-screen w-full  overflow-hidden bg-black z-0">

      {/* Background */}
      <Image
        src={bgImg}
        alt="Studio background"
        fill
        priority
        className="-mt-30 object-cover object-center "
        style={{ zIndex: 0 }}
      />

      {/* Overlay */}
      <div
        className="absolute inset-0 bg-linear-to-b from-black/45 via-black/15 to-black/60"
        style={{ zIndex: 1 }}
      />

      {/* Hero Text */}
      <div
        className="absolute inset-0 flex flex-col items-center justify-start pt-24 sm:pt-28 md:pt-32 lg:pt-44 px-4 text-center"
        style={{ zIndex: 10 }}
      >
        <h1
          className="text-red-500 uppercase select-none mt-15 md:mt-0 leading-none tracking-widest"
          style={{
            fontFamily: "'Orbitron', sans-serif",
            fontSize: "clamp(1rem, 10vw, 96px)",
            fontWeight: 400,
            textShadow: "0 0 80px rgba(220,38,38,0.35)",
          }}
        >
          ATTENTION
        </h1>

        <p
          className="text-white mt-4 sm:mt-5 font-light tracking-widen font-orbitron"
          style={{
            fontSize: "clamp(1.1rem, 3vw, 40px)",
          }}
        >
          Your car is due for a new look
        </p>

        <p
          className="text-white mt-2 leading-relaxed tracking-wider"
          style={{
            fontFamily: "'Rajdhani', sans-serif",
            fontSize: "clamp(0.8rem, 1.3vw, 24px)",
          }}
        >
          We've been doing this for three decades,
          <br />
          let us upgrade your ride!
        </p>
      </div>

      {/* Car — bottom-left */}
      <div
        className="absolute bottom-24 left-0 md:-bottom-24 md:left-60  w-full sm:w-[90%] md:w-[82%] lg:w-[75%] xl:w-[68%]"
        style={{ zIndex: 10 }}
      >
        {/* Ground glow */}
        <div
          className="absolute bottom-0 left-1/4 w-3/4 h-16 sm:h-20 pointer-events-none"
          style={{
            background:
              "radial-gradient(ellipse at center, rgba(255,255,255,0.06) 0%, transparent 70%)",
          }}
        />

        <Image
          src={carImg}
          alt="Luxury car"
          width={1400}
          height={750}
          priority
          draggable={false}
          className="w-full h-auto object-contain object-bottom select-none"
          style={{
            filter: "drop-shadow(0 40px 80px rgba(0,0,0,0.95))",
            marginBottom: "-4px",
          }}
        />
      </div>

    </section>
  );
}