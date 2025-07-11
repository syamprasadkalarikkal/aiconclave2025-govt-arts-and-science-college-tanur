"use client";

import Header from "@/components/Header";
import About from "@/components/About";
import Hero from "@/components/Hero";
import Speaker from "@/components/Speaker";
import Agenda from "@/components/Agenda";
import Register from "@/components/Register";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";
import Workshop from "@/components/Workshop";
import PosterSlider from "@/components/PosterSlider";
import ChiefGuests from "@/components/Cheifguest";

export default function HomePage() {
  return (
    <main className="min-h-screen bg-white text-gray-800 font-sans">
      <Header />
      <Hero />
      <PosterSlider />
      <About />
      <ChiefGuests />
      <Speaker />
      <Agenda />
      <Workshop />
      <Register />
      <Contact />
      <Footer />
    </main>
  );
}