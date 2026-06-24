import Banner from "@/components/Banner";
import BlogsSection from "@/components/BlogsSection";
import BrandBanner from "@/components/BrandBanner";
import About from "@/components/About";
import CategorySection from "@/components/CategorySection";
import ContactSection from "@/components/ContactSection";
import Footer from "@/components/Footer";
import HeroSection from "@/components/Hero";
import Navbar from "@/components/Navbar";
import TestimonialCarousel from "@/components/TestimonialCarousel";
import WhyUsSection from "@/components/WhyUsSection";
import Image from "next/image";

export default function Home() {
  return (
    <>
      <Navbar />
      <HeroSection/>
      <Banner/>
      <About/>
      <CategorySection/>
      <BrandBanner/>
      <WhyUsSection/>
      <TestimonialCarousel/>
      <BlogsSection/>
      <ContactSection/>
      <Footer/>
    </>
  );
}
