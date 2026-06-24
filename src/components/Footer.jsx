import Image from "next/image";
import logo from "@/assets/logo.png"; 

export default function Footer() {
  return (
    <footer className="bg-neutral-900 w-full flex flex-col items-center justify-center ">
      
      <Image
        src={logo}
        alt="Car Decor"
        width={100}
        height={100}
        className="object-contain"
      />

      <p className="text-neutral-400 text-xs text-center">
        Copyright © 2025 Car Decor | All Rights Reserved
      </p>
    </footer>
  );
}