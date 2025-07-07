"use client";

import Head from "next/head";

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
    <>
      <Head>
        <title>AI Conclave 2025 – GCT</title>
        <meta
          name="description"
          content="Join us at the AI Conclave 2025 hosted by Govt. Arts and Science College, Tanur. Explore AI, Robotics, Workshops, and more!"
        />

        {/* Open Graph Meta Tags */}
        <meta property="og:title" content="AI Conclave 2025 – GCT" />
        <meta
          property="og:description"
          content="Explore the future of AI and innovation at the AI Conclave 2025 in Tanur!"
        />
        <meta
          property="og:image"
          content="https://aiconclave.gctanur.in/images/ai-updated.jpg"
        />
        <meta property="og:url" content="https://aiconclave.gctanur.in/" />
        <meta property="og:type" content="website" />

        {/* Twitter Card Meta Tags */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="AI Conclave 2025 – GCT" />
        <meta
          name="twitter:description"
          content="Explore the future of AI and innovation at the AI Conclave 2025 in Tanur!"
        />
        <meta
          name="twitter:image"
          content="https://aiconclave.gctanur.in/images/ai-updated.jpg"
        />
      </Head>

      <main className="min-h-screen bg-white text-gray-800 font-sans">
        <Header />
        <Hero />
        <PosterSlider />
        <div className="overflow-hidden">
          <div className="whitespace-nowrap animate-marquee text-red-600 font-semibold py-10 px-4">
            🔔 Workshop registrations are now open! Other event registrations will begin soon. Stay tuned!
          </div>
        </div>
        <About />
        <ChiefGuests />
        <Speaker />
        <Agenda />
        <Workshop />
        <Register />
        <Contact />
        <Footer />
      </main>
    </>
  );
}
