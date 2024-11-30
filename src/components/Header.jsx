"use client";

import React, { useState, useEffect } from "react";

const Header = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

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
      className={`fixed top-0 left-0 w-full flex items-center justify-between px-4 md:px-8 py-4 z-50 transition-all duration-300 ${
        isScrolled
          ? "bg-black/80 backdrop-blur-md border-b border-gray-700"
          : "bg-transparent border-b border-transparent"
      }`}
    >
      {/* Logo Section */}
      <div className="flex items-center space-x-4">
        <img src="logo.png" alt="Logo" className="w-8 h-8 md:w-10 md:h-10" />
      </div>

      {/* Mobile Menu Toggle */}
      <div className="md:hidden">
        <button
          onClick={() => setMenuOpen(!menuOpen)}
          className="text-white focus:outline-none z-50"
        >
          {menuOpen ? (
            <svg
              className="w-6 h-6"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M6 18L18 6M6 6l12 12"
              />
            </svg>
          ) : (
            <svg
              className="w-6 h-6"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M4 6h16M4 12h16m-7 6h7"
              />
            </svg>
          )}
        </button>
      </div>

      {/* Navigation Links */}
      <ul
        className={`absolute md:static top-11 right-0 w-[80%] md:w-auto bg-black md:bg-transparent px-4 py-2 md:p-0 overflow-hidden transition-all duration-600 ease-in-out ${
          menuOpen ? "block opacity-100 h-auto" : "hidden"
        } md:flex md:opacity-100 md:h-auto md:block space-y-4 md:space-y-0 md:space-x-6`}
      >
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
            className="text-white uppercase text-sm font-medium cursor-pointer relative pb-1 transition-all duration-300 hover:border-b-2 hover:border-yellow-500 hover:text-yellow-500"
          >
            {item}
          </li>
        ))}
      </ul>

      {/* Buttons */}
      <div className="hidden md:flex space-x-4">
        <button className="px-6 py-2 bg-white text-red-900 text-sm font-bold rounded-full hover:bg-gray-200 transition">
          SIGN IN
        </button>
      </div>
    </nav>
  );
};

export default Header;
