import Banner from "@/components/Banner";
import BlogsSection from "@/components/BlogsSection";
import BrandBanner from "@/components/BrandBanner";
import CarHero from "@/components/CarHero";
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
      <CarHero/>
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
