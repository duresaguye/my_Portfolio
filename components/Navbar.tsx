"use client";

import Image from "next/image";
import React, { useState } from "react";

const Navbar: React.FC<{}> = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false); // Mobile menu toggle state

  return (
    <nav className="w-full h-[65px] fixed backdrop-blur-sm z-50 px-5 md:px-10 flex items-center justify-between bg-black/70">
      {/* Logo */}
      <a
        title="Duresa logo"
        href="/"
        className="h-auto w-auto flex flex-row items-center"
      >
        <Image
          src="/Logo.svg"
          alt="Duresa Guye Logo"
          width={100}
          height={100}
          className="w-auto h-auto"
        />
      </a>

      {/* Hamburger Icon for Mobile */}
      <div className="md:hidden">
        <button
          onClick={() => setIsMenuOpen(!isMenuOpen)}
          className="text-white focus:outline-none"
        >
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
              strokeWidth="2"
              d={!isMenuOpen ? "M4 6h16M4 12h16M4 18h16" : "M6 18L18 6M6 6l12 12"}
            />
          </svg>
        </button>
      </div>

      {/* Desktop Menu */}
      <div className="hidden md:flex flex-row gap-5">
        <a
          href="#about"
          className="text-white hover:bg-[#2E2E2E] rounded-xl py-2 px-5 transition-all duration-300"
        >
          About
        </a>
        <a
          href="#mystack"
          className="text-white hover:bg-[#2E2E2E] rounded-xl py-2 px-5 transition-all duration-300"
        >
          My Stack
        </a>
        <div
          onClick={() => window.open("mailto:dureguye2@gmail.com")}
          className="text-white hover:bg-[#2E2E2E] rounded-xl py-2 px-5 cursor-pointer transition-all duration-300"
        >
          Contact
        </div>
      </div>

      {/* Mobile Dropdown Menu */}
      {isMenuOpen && (
        <div className="absolute top-[65px] right-5 w-[200px] bg-black/80 rounded-lg shadow-lg flex flex-col md:hidden z-50">
          <a
            href="#about"
            className="text-white py-3 text-center hover:bg-[#2E2E2E] rounded-t-lg transition-all duration-300"
            onClick={() => setIsMenuOpen(false)}
          >
            About
          </a>
          <a
            href="#mystack"
            className="text-white py-3 text-center hover:bg-[#2E2E2E] transition-all duration-300"
            onClick={() => setIsMenuOpen(false)}
          >
            My Stack
          </a>
          <div
            onClick={() => {
              window.open("mailto:dureguye2@gmail.com");
              setIsMenuOpen(false);
            }}
            className="text-white py-3 text-center hover:bg-[#2E2E2E] rounded-b-lg cursor-pointer transition-all duration-300"
          >
            Contact
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
