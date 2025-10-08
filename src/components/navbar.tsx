"use client";

import { useState } from "react";
import { useEffect, useRef } from "react";
import { FaBars, FaTimes } from "react-icons/fa";
import Image from "next/image";
import Logo from "../images/Logo.png";
import Link from "next/link";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const menuRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
  function handleClickOutside(event: MouseEvent) {
    if (menuRef.current && !menuRef.current.contains(event.target as Node)) {
      setIsOpen(false);
    }
  }

  if (isOpen) {
    document.addEventListener("mousedown", handleClickOutside);
  }

  return () => {
    document.removeEventListener("mousedown", handleClickOutside);
  };
}, [isOpen]);


  return (
    <nav className="fixed top-0 left-0 w-full z-50 bg-white/60 backdrop-blur-md shadow-md">
      <div className="max-w-6xl mx-auto px-4 py-4 flex justify-between items-center">

        <Link href="/" className=""><h3 className="flex items-center gap-2">
          <Image src={Logo} className="w-10" alt="ACE Valuator Logo" />
          <span className="text-xl font-semibold text-gray-800">ACE Intelligence</span>
        </h3>
        </Link>

        {/* Desktop Logo */}
    

        {/* Mobile Menu Button */}
        <button
          className="text-gray-600 text-xl md:hidden"
          onClick={() => setIsOpen(!isOpen)}
        >
          {isOpen ? <FaTimes /> : <FaBars />}
        </button>

        {/* Desktop Menu */}
        <div className="hidden md:flex space-x-6 items-center">
          <Link href="/" className="text-gray-700 hover:text-green-600 hover:underline decoration-solid decoration-2 underline-offset-4 ">Home</Link>
          <Link href="/features" className="text-gray-700 hover:text-green-600 hover:underline decoration-solid decoration-2 underline-offset-4 ">Features</Link>
          <Link href="/explore" className="text-gray-700 hover:text-green-600 hover:underline decoration-solid decoration-2 underline-offset-4 ">Explore</Link>
          <Link href="/pricing" className="text-gray-700 hover:text-green-600 hover:underline decoration-solid decoration-2 underline-offset-4 ">Pricing</Link>
          <Link href='/contact' className=" bg-green-900 text-white px-5 py-2 rounded-lg shadow-md hover:bg-green-800 transition ">
            Get Started
          </Link>
          <span className="text-4xl text-[#173e26]">|</span>
          <Link href='https://ace.uncharted-group.com/login'   className=" w-24 text-center bg-gray-100 backdrop-blur-md shadow-md text-[#173e26] px-5 py-2 rounded-lg hover:border-green-600 border transition">
            Login
          </Link>
        </div>
      </div>

      {/* Mobile Menu */}
      <div
        ref={menuRef}
        className={`md:hidden flex flex-col space-y-4 items-center rounded-b-lg bg-white/90 backdrop-blur-md transition-all duration-300 ${
          isOpen ? "h-auto py-4 " : "h-0 overflow-hidden"
        }`}
      >
        <Link href="/" className="py-2 text-gray-700 hover:text-green-600">Home</Link>
        <Link href="/features" className="py-2 text-gray-700 hover:text-green-600">Features</Link>
        <Link href="/explore" className="py-2 text-gray-700 hover:text-green-600">Explore</Link>
        <Link href="/pricing" className="py-2 text-gray-700 hover:text-green-600">Pricing</Link>
        <Link href='/contact' onClick={() => setIsOpen(false)} className="mt-3 bg-green-600 text-white px-5 py-2 rounded-lg shadow-md hover:bg-green-700 transition">
          Get Started
        </Link>
        <Link href='https://ace.uncharted-group.com/login' className="mt-3 bg-gray-100 backdrop-blur-md shadow-md text-[#173e26] px-5 py-2 rounded-lg hover:border-green-600 border transition">
          Login
        </Link>


      </div>
    </nav>
  );
}
