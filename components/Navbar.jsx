"use client";
import React, { useState, useEffect } from "react";

const Navbar = () => {
  // State for navbar scroll effect
  const [isScrolled, setIsScrolled] = useState(false);
  // State for mobile menu toggle
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header
      className={`fixed top-0 w-full z-50 transition-all duration-300 ${
        isScrolled ? "bg-gradient-to-r from-blue-50 to-blue-100 shadow-lg" : "bg-transparent"
      }`}
    >
      <div className="container mx-auto px-6 lg:px-12 flex items-center justify-between py-4">
        {/* Left Logo */}
        <div className="flex items-center gap-4">
          <img
            src="/images/2.svg" // Replace with your left logo path
            alt="3CP Logo"
            className="h-12 hover:scale-110 transition-transform duration-300"
          />
        </div>

        {/* Center Navigation */}
        <nav className="hidden lg:flex items-center gap-8 text-center">
          <DropdownMenu title="3CP" />
          <DropdownMenu title="Vision & Mission" />
          <DropdownMenu title="Placements" />
          <DropdownMenu title="Internships" />
          <DropdownMenu title="For Alumni" />
          <DropdownMenu title="Team" />
          <NavLink title="Pravritti" />
          <NavLink title="Downloads" />
          <NavLink title="Contact Us" />
        </nav>

        {/* Right Logo */}
        <div className="hidden lg:flex items-center gap-4">
          <img
            src="/images/iustlogo.png" // Replace with your right logo path
            alt="IUST Logo"
            className="h-12 w-12 hover:rotate-12 transition-transform duration-300"
          />
        </div>

        {/* Mobile Navigation Toggle */}
        <button
          className="lg:hidden text-blue-900 focus:outline-none"
          onClick={() => setIsOpen(!isOpen)}
        >
          <i
            className={`fas ${
              isOpen ? "fa-times" : "fa-bars"
            } text-2xl transition-transform duration-300`}
          ></i>
        </button>

        {/* Mobile Menu */}
        {isOpen && (
          <div className="absolute top-16 left-0 w-full bg-white shadow-lg lg:hidden z-40">
            <nav className="flex flex-col items-start gap-4 p-4">
              <DropdownMenu title="3CP" mobile />
              <DropdownMenu title="IUST" mobile />
              <DropdownMenu title="For Students" mobile />
              <DropdownMenu title="For Recruiters" mobile />
              <DropdownMenu title="For Alumni" mobile />
              <DropdownMenu title="Team" mobile />
              <NavLink title="Pravritti" />
              <NavLink title="Downloads" />
              <NavLink title="Contact Us" />
            </nav>
          </div>
        )}
      </div>
    </header>
  );
};

const DropdownMenu = ({ title, mobile }) => {
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);

  return (
    <div className={`relative ${mobile ? "w-full" : "group"}`}>
      <button
        className={`flex items-center gap-1 ${
          mobile
            ? "w-full text-left text-blue-900 font-medium hover:text-blue-700"
            : "text-blue-900 font-medium hover:text-blue-700 transition-all duration-300"
        }`}
        onClick={mobile ? () => setIsDropdownOpen(!isDropdownOpen) : undefined}
      >
        {title}
        <i
          className={`fas fa-chevron-down ${
            isDropdownOpen || !mobile
              ? "rotate-180"
              : "rotate-0"
          } transition-transform duration-300`}
        ></i>
      </button>
      {(isDropdownOpen || !mobile) && (
        <div
          className={`absolute left-0 mt-2 bg-white text-blue-400 shadow-md rounded-md ${
            mobile ? "w-full mt-1" : "hidden group-hover:block"
          }`}
        >
          <ul className="flex flex-col gap-2 p-4">
            <li className="hover:bg-blue-50 px-4 py-2 rounded transition duration-300">
              Option 1
            </li>
            <li className="hover:bg-blue-50 px-4 py-2 rounded transition duration-300">
              Option 2
            </li>
            <li className="hover:bg-blue-50 px-4 py-2 rounded transition duration-300">
              Option 3
            </li>
          </ul>
        </div>
      )}
    </div>
  );
};

const NavLink = ({ title }) => (
  <a
    href={`#${title.toLowerCase().replace(/\s+/g, "-")}`}
    className="text-blue-900 font-medium hover:text-blue-700 transition-all duration-300"
  >
    {title}
  </a>
);

export default Navbar;
