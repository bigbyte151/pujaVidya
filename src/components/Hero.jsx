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

        @keyframes horizontalScroll {
          0% {
            transform: translateX(0%);
          }
          100% {
            transform: translateX(-50%);
          }
        }

        .horizontal-slider {
          animation: horizontalScroll 20s linear infinite;
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
        className="relative z-10 flex flex-col items-start justify-center h-full px-6 sm:px-12 md:px-24 text-white transition-opacity duration-500"
        style={{ opacity: scrollOpacity }}
      >
        <h1 className="text-3xl sm:text-4xl md:text-6xl font-bold mb-4">
          Welcome to Puja Services
        </h1>
        <p className="text-sm sm:text-base md:text-lg">
          Experience divine rituals at your convenience
        </p>
      </div>

      {/* Image Slider */}
      <div className="absolute bottom-4 sm:top-0 sm:right-4 sm:w-80 md:right-12 h-32 sm:h-full w-full overflow-hidden">
        {/* Vertical Slider for Medium and Larger Screens */}
        <div
          className="hidden sm:flex flex-col h-full vertical-slider"
          style={{
            willChange: "transform",
          }}
        >
          {[
             "pics/1.jpg",
             
             "pics/3.jpg",
             "pics/4.jpg",
             "pics/5.jpg",
             "pics/6.jpg",
             "pics/7.jpg",
             "pics/8.jpg",
             "pics/9.jpg",
             "pics/10.jpg",
             "pics/11.jpg",
             "pics/12.jpg",
          ]
            .concat([
              "pics/1.jpg",
            
            "pics/3.jpg",
            "pics/4.jpg",
            "pics/5.jpg",
            "pics/6.jpg",
            "pics/7.jpg",
            "pics/8.jpg",
            "pics/9.jpg",
            "pics/10.jpg",
            "pics/11.jpg",
            "pics/12.jpg",
            ]) // Duplicate the array to create a seamless loop
            .map((src, index) => (
              <div
                key={index}
                className="flex-shrink-0 h-40 sm:h-48 md:h-56 w-full bg-cover my-3 md:my-5 py-3 md:py-5 rounded-3xl bg-center"
                style={{
                  backgroundImage: `url('${src}')`,
                }}
              ></div>
            ))}
        </div>

        {/* Horizontal Slider for Mobile Screens */}
        <div
          className="flex sm:hidden h-full w-full horizontal-slider"
          style={{
            willChange: "transform",
          }}
        >
          {[
            "pics/1.jpg",
            
            "pics/3.jpg",
            "pics/4.jpg",
            "pics/5.jpg",
            "pics/6.jpg",
            "pics/7.jpg",
            "pics/8.jpg",
            "pics/9.jpg",
            "pics/10.jpg",
            "pics/11.jpg",
            "pics/12.jpg",
            "pics/1.jpg",
            
            "pics/3.jpg",
            "pics/4.jpg",
            "pics/5.jpg",
            "pics/6.jpg",
            "pics/7.jpg",
            "pics/8.jpg",
            "pics/9.jpg",
            "pics/10.jpg",
            "pics/11.jpg",
            "pics/12.jpg",


            
          ]
            .concat([
              "pics/1.jpg",
            
            "pics/3.jpg",
            "pics/4.jpg",
            "pics/5.jpg",
            "pics/6.jpg",
            "pics/7.jpg",
            "pics/8.jpg",
            "pics/9.jpg",
            "pics/10.jpg",
            "pics/11.jpg",
            "pics/12.jpg",
            ]) // Duplicate the array to create a seamless loop
            .map((src, index) => (
              <div
                key={index}
                className="flex-shrink-0 h-{100vh} w-60 bg-cover mx-2 rounded-3xl bg-center"
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
