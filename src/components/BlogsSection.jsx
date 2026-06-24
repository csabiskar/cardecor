import Image from "next/image";
import blog1 from "@/assets/wheel.png";
import blog2 from "@/assets/carSt.png";
import blog3 from "@/assets/mobile.png";

const blogs = [
  {
    image: blog1,
    title: "Best Alloy Wheel Brands in India (2025 Update)",
  },
  {
    image: blog2,
    title: "10 Best Car Decor Ideas to Transform Your Ride in 2025",
  },
  {
    image: blog3,
    title: "Must-Have Car Accessories 2025: Upgrade Your Ride with Style & Utility",
  },
];

export default function BlogsSection() {
  return (
    <div className="bg-black w-full py-16 px-6 md:px-10 lg:px-16" id="blogs">
      <h2 className="font-orbitron text-white text-3xl sm:text-4xl md:text[40px] text-center mb-12 font-light">
        Blogs
      </h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
        {blogs.map((blog, i) => (
          <div key={i} className="flex flex-col gap-4">
            <div className="relative w-full aspect-4/3 overflow-hidden rounded-sm">
              <Image
                src={blog.image}
                alt={blog.title}
                fill
                className="object-cover hover:scale-105 transition-transform duration-500"
              />
            </div>
            <h3 className="font-orbitron text-white text-base sm:text-lg font-semibold leading-snug">
              {blog.title}
            </h3>
            <button className="self-start bg-neutral-700 hover:bg-neutral-600 text-white text-sm px-6 py-2 transition-colors duration-200">
              Read More
            </button>

          </div>
        ))}
      </div>

    </div>
  );
}