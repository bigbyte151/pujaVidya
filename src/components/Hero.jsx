"use client";

import React, { useEffect, useState } from "react";

const Hero = () => {
  const [scrollOpacity, setScrollOpacity] = useState(1);
  const [scrollScale, setScrollScale] = useState(1);

  useEffect(() => {
    const handleScroll = () => {
      const scrollY = window.scrollY;
      const maxScroll = window.innerHeight;

      // Calculate opacity and scale based on scroll position
      const newOpacity = Math.max(1 - scrollY / maxScroll, 0);
      const newScale = 1 + Math.min(scrollY / maxScroll, 0.2);

      setScrollOpacity(newOpacity);
      setScrollScale(newScale);
    };

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <header className="relative h-screen w-screen overflow-hidden bg-cover bg-center">
      {/* Animation styles */}
      <style jsx>{`
        @keyframes zoomEffect {
          0% {
            transform: scale(1);
          }
          50% {
            transform: scale(1.2);
          }
          100% {
            transform: scale(1);
          }
        }

        .animated-background {
          animation: zoomEffect 10s ease-in-out infinite;
        }

        @keyframes verticalScroll {
          0% {
            transform: translateY(0%);
          }
          100% {
            transform: translateY(-50%);
          }
        }

        .vertical-slider {
          animation: verticalScroll 20s linear infinite;
        }
      `}</style>

      {/* Background Image with Animation */}
      <div
        aria-hidden="true"
        className="absolute inset-0 transition-transform duration-500 ease-in-out animated-background"
        style={{
          backgroundImage: `url('Untitled-5-copy.jpg')`,
          opacity: scrollOpacity,
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      ></div>

      {/* Black overlay */}
      <div className="absolute inset-0 bg-black/60"></div>

      {/* Hero Content */}
      <div
        className="relative z-10 flex flex-col items-left justify-center h-full text-white px-24 transition-opacity duration-500"
        style={{ opacity: scrollOpacity }}
      >
        <h1 className="text-4xl font-bold mb-4 md:text-6xl">
          Welcome to Puja Services
        </h1>
        <p className="text-base md:text-lg">
          Experience divine rituals at your convenience
        </p>
      </div>

      {/* Vertical Scrolling Image Slider */}
      <div className="absolute gap-4 top-0 right-12 h-full w-96 opacity-80 overflow-hidden">
        <div
          className="flex flex-col h-full vertical-slider"
          style={{
            willChange: "transform",
          }}
        >
          {[
            "preist.png",
            "pujabook.png",
            "preist.png",
            "pujabook.png",
          ]
            .concat([
              "preist.png",
              "pujabook.png",
              "preist.png",
              "pujabook.png",
            ]) // Duplicate the array to create a seamless loop
            .map((src, index) => (
              <div
                key={index}
                className="flex-shrink-0 h-56 w-full bg-cover my-5 py-5 border bg-center"
                style={{
                  backgroundImage: `url('${src}')`,
                }}
              ></div>
            ))}
        </div>
      </div>
    </header>
  );
};

export default Hero;
