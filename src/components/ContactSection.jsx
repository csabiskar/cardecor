"use client";
import Image from "next/image";
import { useState } from "react";
import car from "@/assets/contact.png";

export default function ContactSection() {
  const [form, setForm] = useState({
    name: "",
    email: "",
    number: "",
    requirements: "",
    message: "",
  });

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = () => {
    console.log(form);
  };

  return (
    <div className="relative bg-black w-full min-h-screen lg:min-h-125 flex items-center overflow-hidden">

     
      <div className="absolute inset-0 w-full h-full lg:w-1/2">
        <Image
          src={car}
          alt="Car"
          fill
          className="object-cover object-center"
          priority
        />

       
        <div className="absolute top-0 left-0 right-0 h-48 sm:h-64 lg:h-77 bg-gradient-to-b from-black to-transparent" />

        <div className="absolute bottom-0 left-0 right-0 h-24 sm:h-32 bg-gradient-to-t from-black to-transparent" />

       
        <div className="hidden lg:block absolute inset-y-0 right-0 w-48 bg-gradient-to-r from-transparent to-black" />

       
        <div className="absolute inset-0 bg-black/60 lg:bg-black/20" />
      </div>

     
      <div className="relative z-10 w-full lg:ml-auto lg:w-1/2 px-6 sm:px-10 md:px-14 lg:px-16 py-14 sm:py-16 md:py-20">

      
        <div className="mb-8 sm:mb-10">
          <p className="font-orbitron text-white text-2xl sm:text-3xl md:text-4xl font-light leading-tight">
            A better ride is just a
          </p>
          <p className="font-orbitron text-red-500 text-3xl sm:text-4xl md:text-5xl font-light mt-1">
            call away!
          </p>
        </div>

     
        <div className="flex flex-col gap-3 w-full max-w-xl">

       
          <div className="flex flex-col sm:flex-row gap-3">
            <input
              type="text"
              name="name"
              placeholder="Name"
              value={form.name}
              onChange={handleChange}
              className="flex-1 bg-black/40 lg:bg-transparent border border-neutral-700 text-white placeholder-neutral-400 text-sm px-4 py-3 outline-none focus:border-neutral-500 transition-colors"
            />
            <input
              type="email"
              name="email"
              placeholder="Email"
              value={form.email}
              onChange={handleChange}
              className="flex-1 bg-black/40 lg:bg-transparent border border-neutral-700 text-white placeholder-neutral-400 text-sm px-4 py-3 outline-none focus:border-neutral-500 transition-colors"
            />
          </div>

         
          <div className="flex flex-col sm:flex-row gap-3">
            <input
              type="tel"
              name="number"
              placeholder="Number"
              value={form.number}
              onChange={handleChange}
              className="flex-1 bg-black/40 lg:bg-transparent border border-neutral-700 text-white placeholder-neutral-400 text-sm px-4 py-3 outline-none focus:border-neutral-500 transition-colors"
            />
            <select
              name="requirements"
              value={form.requirements}
              onChange={handleChange}
              className="flex-1 bg-black/40 lg:bg-black border border-neutral-700 text-neutral-400 text-sm px-4 py-3 outline-none focus:border-neutral-500 transition-colors appearance-none cursor-pointer"
            >
              <option value="" disabled>Requirements</option>
              <option value="interior">Interior Accessories</option>
              <option value="exterior">Exterior Styling</option>
              <option value="electronics">Electronics & Gadgets</option>
              <option value="performance">Performance Parts</option>
            </select>
          </div>

         
          <input
            type="text"
            name="message"
            placeholder="Message"
            value={form.message}
            onChange={handleChange}
            className="w-full bg-black/40 lg:bg-transparent border border-neutral-700 text-white placeholder-neutral-400 text-sm px-4 py-3 outline-none focus:border-neutral-500 transition-colors"
          />

        
          <div className="mt-2">
            <button
              onClick={handleSubmit}
              className="w-full sm:w-auto bg-neutral-700 hover:bg-neutral-600 text-white text-sm px-8 py-3 transition-colors duration-200"
            >
              Get a Consultation
            </button>
          </div>

        </div>
      </div>

    </div>
  );
}