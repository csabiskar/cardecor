import Image from "next/image";
import logo from "@/assets/logo.png"; 
export default function Footer() {
  return (
    <footer className="bg-neutral-900 w-full  flex flex-col items-center justify-center gap-3">


      <div className="relative w-52 h-20">
        <Image
          src={logo}
          alt="Car Decor"
          fill
          className=" object-cover mt-8"
        />
      </div>

    
      <p className="text-neutral-400 text-sm text-center">
        Copyright © 2025 Car Decor | All Rights Reserved
      </p>

    </footer>
  );
}