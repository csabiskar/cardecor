"use client";
import { useState } from "react";
import logo from "@/assets/logo.png";
import Image from "next/image";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  const navLinks = [
    { label: "About Us", href: "#about" },
    { label: "Services", href: "#services" },
    { label: "Blogs", href: "#blogs" },
  ];

  return (
    <header className="w-full  fixed top-0 left-0 right-0 z-9999 ">
      <div className="mx-auto max-w-[1920px] px-4 sm:px-6 md:px-10 lg:px-12 xl:px-24">
        <div className="flex items-center justify-between h-20 md:h-18">
          {/* Logo */}
          <div className="shrink-0">
            <Image
              src={logo}
              alt="Car Decor"
              className="h-16 sm:h-10 md:h-12 lg:h-24 mt-8 w-auto"
            />
          </div>

          {/* Desktop Menu */}
          <nav className="hidden md:flex items-center gap-8 lg:gap-12 xl:gap-16">
            {navLinks.map((link) => (
              <a
                key={link.label}
                href={link.href}
                className="text-white text-base lg:text-[20px] font-sans font-light transition hover:text-red-500"
              >
                {link.label}
              </a>
            ))}

            <a
              href="#contact"
              className="px-6 lg:px-10 py-3 lg:py-2 border border-white/10 bg-white/10 text-white text-base lg:text-lg hover:border-red-500 transition"
            >
              Contact Us
            </a>
          </nav>

          {/* Mobile Hamburger */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="md:hidden flex flex-col gap-1.5"
          >
            <span
              className={`h-0.5 w-6 bg-white transition ${
                isOpen ? "rotate-45 translate-y-2" : ""
              }`}
            />
            <span
              className={`h-0.5 w-6 bg-white transition ${
                isOpen ? "opacity-0" : ""
              }`}
            />
            <span
              className={`h-0.5 w-6 bg-white transition ${
                isOpen ? "-rotate-45 -translate-y-2" : ""
              }`}
            />
          </button>
        </div>

        {/* Mobile Menu */}
        <div
          className={`md:hidden overflow-hidden transition-all duration-300 ${
            isOpen ? "max-h-96 pb-6" : "max-h-0"
          }`}
        >
          <nav className="flex flex-col gap-5 pt-4">
            {navLinks.map((link) => (
              <a
                key={link.label}
                href={link.href}
                onClick={() => setIsOpen(false)}
                className="text-white text-lg"
              >
                {link.label}
              </a>
            ))}

            <a
              href="#contact"
              onClick={() => setIsOpen(false)}
              className="w-full border border-white/10 py-3 text-white text-center"
            >
              Contact Us
            </a>
          </nav>
        </div>
      </div>
    </header>
  );
}
