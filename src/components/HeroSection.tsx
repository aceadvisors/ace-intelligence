"use client";

import Particles from "react-tsparticles";
import { loadFull } from "tsparticles";
import { useCallback } from "react";
import { Engine } from "tsparticles-engine";
import Image from "next/image";
import heroImage from "@/images/heroImage.png"; // replace with your actual image

export default function HeroSection() {
  const particlesInit = useCallback(async (engine: Engine) => {
    await loadFull(engine);
  }, []);

  return (
    <section className="relative w-full min-h-screen overflow-hidden text-background">
      {/* Particles Background */}
      <Particles
        id="tsparticles"
        init={particlesInit}
        options={{
          fullScreen: { enable: false },
          background: { color: "transparent" },
          particles: {
            number: { value: 40, density: { enable: true, area: 800 } },
            color: { value: "#173e26" },
            shape: { type: "circle" },
            opacity: { value: 0.2 },
            size: { value: 3 },
            links: {
              enable: true,
              distance: 120,
              color: "#173e26",
              opacity: 0.1,
              width: 2,
            },
            move: {
              enable: true,
              speed: 1.5,
              direction: "none",
              outModes: "bounce",
            },
          },
          interactivity: {
            events: {
              onHover: { enable: true, mode: "repulse" },
              onClick: { enable: true, mode: "push" },
              resize: true,
            },
            modes: {
              repulse: { distance: 100 },
              push: { quantity: 4 },
            },
          },
          detectRetina: true,
        }}
        className="absolute inset-0 z-0"
      />



      {/* Content */}
      <div className="relative z-10 max-w-6xl mx-auto px-6 gap-2 min-h-screen flex flex-col md:flex-row items-center justify-between">
        {/* Left Side: Message */}
        <div className="max-w-xl text-center md:text-left md:m-0 bg-green-300/5 backdrop-blur-sm shadow-md md:p-8 p-12">
          <h1 className="text-4xl md:text-4xl font-bold mb-4">
            Generate Accurate <span className="text-green-900">Valuation Reports</span> for Businesses!
          </h1>
          <p className="text-lg md:text-xl text-background mb-6">
            Value businesses with an AI-powered tool built for the local market.
          </p>
          <button className="bg-[#173e26] hover:bg-green-900 text-white px-6 py-3 rounded-lg text-lg transition">
            Get Started
          </button>
        </div>

        {/* Right Side: Image */}
        <div className="mt-10 md:mt-0">
          <Image
            src={heroImage}
            alt="Tech Valuation Illustration"
            width={500}
            height={500}
            priority
          />
        </div>
      </div>
    </section>
  );
}
