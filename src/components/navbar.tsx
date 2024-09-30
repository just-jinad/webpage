"use client";
import React, { useState, useEffect } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faEnvelope,
  faMapMarkerAlt,
  faPhone,
  faCaretDown,
  faBars,
  faTimes,
} from "@fortawesome/free-solid-svg-icons";
import {
  faFacebookF,
  faTwitter,
  faGooglePlusG,
  faInstagram,
} from "@fortawesome/free-brands-svg-icons";
import Image from "next/image";

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const [navbarVisible, setNavbarVisible] = useState(true);
  const [atTop, setAtTop] = useState(true);
  const [lastScrollY, setLastScrollY] = useState(0); // Track the last scroll position

  useEffect(() => {
    const handleScroll = () => {
      if (typeof window !== "undefined") {
        if (window.scrollY > lastScrollY) {
          setNavbarVisible(false); // Hide navbar when scrolling down
        } else {
          setNavbarVisible(true); // Show navbar when scrolling up
        }

        setAtTop(window.scrollY === 0);
        setLastScrollY(window.scrollY); // Update last scroll position
      }
    };

    if (typeof window !== "undefined") {
      window.addEventListener("scroll", handleScroll);
    }

    return () => {
      if (typeof window !== "undefined") {
        window.removeEventListener("scroll", handleScroll);
      }
    };
  }, [lastScrollY]);

  return (
    <header className="absolute top-0 left-0 w-full z-50">
      {/* Top Information Bar */}
      {atTop && (
        <nav className="py-2 bg-transparent mt-5">
          <div className="max-w-7xl mx-auto flex justify-between items-center text-sm p-4 text-white">
            <div className="flex space-x-6">
              <span>
                <FontAwesomeIcon icon={faEnvelope} className="mr-2" />
                support@teslastckandinvestment.com
              </span>
              <span>
                <FontAwesomeIcon icon={faMapMarkerAlt} className="mr-2" />
                3500 Deer Creek Road, Palo Alto, California, 94304
              </span>
            </div>
            <div className="flex space-x-4">
              <FontAwesomeIcon icon={faFacebookF} />
              <FontAwesomeIcon icon={faTwitter} />
              <FontAwesomeIcon icon={faGooglePlusG} />
              <FontAwesomeIcon icon={faInstagram} />
            </div>
          </div>
        </nav>
      )}

      {/* Main Navbar */}
      <nav
        className={`fixed w-full top-0 z-50 mt-5 transition-transform duration-300 ${
          navbarVisible ? "translate-y-0" : "-translate-y-full"
        } ${atTop ? "bg-transparent text-white" : "bg-transparent text-white shadow-md"}`}
      >
        <div className="max-w-7xl mx-auto flex mt-5 justify-between items-center py-6 px-4 md:px-10">
          {/* Logo */}
          <div className="flex items-center space-x-2">
            <Image
              src="/image/logo.png"
              alt="Tesla Logo"
              className="h-10"
              width={50}
              height={50}
            />
            <h1 className="text-lg font-bold">Tesla Investment And Stocks</h1>
          </div>

          {/* Navbar Links */}
          <ul className="hidden md:flex space-x-8 font-semibold">
            <li className="cursor-pointer hover:text-red-600">Home</li>
            <li className="cursor-pointer hover:text-red-600 flex items-center">
              Our Company <FontAwesomeIcon icon={faCaretDown} className="ml-1" />
            </li>
            <li className="cursor-pointer text-red-600">Plans</li>
            <li className="cursor-pointer hover:text-red-600">Login</li>
            <li className="cursor-pointer hover:text-red-600">Register</li>
            <li className="cursor-pointer hover:text-red-600 flex items-center">
              Demo <FontAwesomeIcon icon={faCaretDown} className="ml-1" />
            </li>
            <li className="cursor-pointer hover:text-red-600 flex items-center">
              Legal <FontAwesomeIcon icon={faCaretDown} className="ml-1" />
            </li>
          </ul>

          {/* Contact Support */}
          <div className="hidden md:flex items-center space-x-2">
            <FontAwesomeIcon icon={faPhone} className="text-red-600" />
            <div>
              <span className="text-sm">Contact for support</span>
              <strong className="block text-md">+1 (510) 766-0205</strong>
            </div>
          </div>

          {/* Mobile Hamburger Menu */}
          <button
            className="block md:hidden"
            onClick={() => setMenuOpen(!menuOpen)}
          >
            <FontAwesomeIcon
              icon={menuOpen ? faTimes : faBars}
              className="h-6 w-6"
            />
          </button>
        </div>

        {/* Mobile Menu */}
        {menuOpen && (
          <ul className="md:hidden flex flex-col space-y-4 bg-white text-black p-4">
            <li className="cursor-pointer hover:text-red-600">Home</li>
            <li className="cursor-pointer hover:text-red-600">Our Company</li>
            <li className="cursor-pointer hover:text-red-600">Plans</li>
            <li className="cursor-pointer hover:text-red-600">Register</li>
          </ul>
        )}
      </nav>
    </header>
  );
};

export default Navbar;
