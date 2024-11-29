"use client";

import React from "react";

const Hero = () => {
  return (
    <header className="relative bg-cover bg-center h-screen">
      <style jsx>{`
        @keyframes zoomIn {
          0% {
            transform: scale(1);
          }
          100% {
            transform: scale(1.2);
          }
        }

        .animated-background {
          animation: zoomIn 10s ease-in-out infinite alternate;
        }
      `}</style>

      {/* Background Image with Animation */}
      <div
        className="absolute inset-0 animated-background"
        style={{
          backgroundImage: `url('Untitled-5-copy.jpg')`,
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      ></div>

      {/* Black overlay */}
      <div className="absolute inset-0 bg-black/60"></div>

      {/* Hero Content */}
      <div className="relative z-10 flex flex-col justify-center items-center h-full text-center text-white">
        <h1 className="text-5xl font-bold mb-4">Welcome to Puja Services</h1>
        <p className="text-lg">Experience divine rituals at your convenience</p>
      </div>
    </header>
  );
};

export default Hero;
