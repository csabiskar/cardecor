import React from 'react'
import audi from '@/assets/audi.png'
import kia from '@/assets/kia.png'
import tata from '@/assets/tata.png'
import hyundai from '@/assets/hyundai.png'
import honda from '@/assets/honda.png'
import renault from '@/assets/renault.png'
import Image from "next/image";

function BrandBanner() {
    const brands = [
      { name: "TATA", logo: tata },
      { name: "HYUNDAI", logo:hyundai },
      { name: "HONDA", logo: honda },
      { name: "KIA", logo:kia },
      { name: "AUDI", logo: audi },
      { name: "RENAULT", logo: renault },
    ];
  return (
    <>
       <div className="bg-[#1A1A1A] border-t border-neutral-800 w-full py-6 px-6 md:px-10">
            <div className="flex flex-wrap items-center justify-around gap-6">
              {brands.map((brand, i) => (
                <div key={i} className="relative h-10 w-28 sm:w-32">
                  <Image
                    src={brand.logo}
                    alt={brand.name}
                    fill
                    className="object-contain brightness-0 invert"
                  />
                </div>
              ))}
            </div>
          </div>
    </>
  )
}

export default BrandBanner