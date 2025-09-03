"use client";
import CTA from "@repo/ui/CTA";
import Features from "@repo/ui/Features";
import Footer from "@repo/ui/Footer";
import Header from "@repo/ui/Header";
import Hero from "@repo/ui/Hero";
import Testimonials from "@repo/ui/Testimonials";
import Image from "next/image";
import { useState } from "react";

export default function Home() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
   return (
    <div className="min-h-screen bg-white">
      <Header isMenuOpen={isMenuOpen} setIsMenuOpen={setIsMenuOpen} />
      <Hero />
      <Features />
      <Testimonials />
      <CTA />
      <Footer />
    </div>
  );
}
