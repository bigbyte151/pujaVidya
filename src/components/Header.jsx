"use client";

import React, { useState, useEffect } from "react";

const Header = () => {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <nav
      className={`fixed top-0 left-0 w-full flex items-center justify-between px-8 py-4 z-10 transition-all duration-300 ${
        isScrolled
          ? "bg-black/80 backdrop-blur-md border-b border-gray-700"
          : "bg-transparent"
      }`}
    >
      {/* Logo Section */}
      <div className="flex items-center space-x-4">
        <img src="logo.png" alt="Logo" className="w-10 h-10" />
      </div>

      {/* Navigation Links */}
      <ul className="flex items-center space-x-6">
        {[
          "HOME",
          "ABOUT US",
          "SERVICES",
          "GIFT A PUJA",
          "PUJAS",
          "TEMPLES",
          "FESTIVALS",
          "BLOGS",
          "CONTACT US",
        ].map((item) => (
          <li
            key={item}
            className="text-white uppercase text-sm font-medium cursor-pointer hover:text-pink-500 transition relative"
          >
            <span className="pb-1 border-b-2 border-transparent hover:border-pink-500 transition">
              {item}
            </span>
          </li>
        ))}
      </ul>

      {/* Buttons */}
      <div className="flex space-x-4">
        {/* <button className="px-6 py-2 bg-yellow-500 text-white text-sm font-medium rounded-full hover:bg-yellow-600 transition">
          SIGN UP
        </button> */}
        <button className="px-6 py-2 bg-white text-red-900  text-sm font-bold rounded-full hover:bg-gray-200 transition">
          SIGN IN
        </button>
      </div>
    </nav>
  );
};

export default Header;
