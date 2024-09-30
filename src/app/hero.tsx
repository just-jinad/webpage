"use client";
import Image from "next/image";
import Link from "next/link";
import { useEffect, useState } from "react";

function Hero() {
  const images = [
    "/image/tesheroone.jpg",
    "/image/tesherotwo.jpeg",
    "/image/tesherothree.jpeg", // Add more images as needed
  ];

  const texts = [
    {
      heading: "Innovative Solutions",
      subheading: "Creative, functional & unique solutions",
      description:
        "At our core, we provide innovative solutions that are tailored to meet your needs.",
      button: "Learn More",
    },
    {
      heading: "Reliable Technology",
      subheading: "Technology you can trust",
      description:
        "Harness the power of reliable technology to boost your business operations.",
      button: "Discover Now",
    },
    {
      heading: "Future Ready",
      subheading: "Building the future with AI",
      description:
        "Prepare for tomorrow's challenges with cutting-edge AI technology solutions.",
      button: "Get Started",
    },
  ];

  const [currentIndex, setCurrentIndex] = useState(0);
  const [nextIndex, setNextIndex] = useState(1);

  useEffect(() => {
    const interval = setInterval(() => {
      setNextIndex((prevIndex) => (prevIndex + 1) % images.length);
      setTimeout(() => {
        setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
      }, 1000); // Transition duration
    }, 5000); // Change image and text every 5 seconds

    return () => clearInterval(interval);
  }, [images.length]);

  return (
    <div className="relative min-h-screen w-full">
      {/* First image layer */}
      <div
        className="absolute inset-0 bg-cover bg-no-repeat transition-opacity duration-1000 opacity-100"
        style={{ backgroundImage: `url(${images[currentIndex]})` }}
      ></div>

      {/* Second image layer for smooth transition */}
      <div
        className="absolute inset-0 bg-cover bg-no-repeat transition-opacity duration-1000 opacity-0"
        style={{ backgroundImage: `url(${images[nextIndex]})` }}
      ></div>

      {/* Overlay */}
      <div className="absolute inset-0 h-full w-full bg-black opacity-50"></div>

      {/* Content */}
      <div className="relative z-10 min-h-screen px-8 flex flex-col justify-center items-center text-center text-white">
        {/* Dynamic Text Layout */}
        <div className="w-full flex flex-col items-center space-y-6">
          {/* Centered Texts */}
          <div className="flex flex-col items-center justify-center transition-all duration-1000 transform mt-32">
            <h3 className="text-2xl mb-4">{texts[currentIndex].subheading}</h3>
            <p className="text-lg max-w-2xl">
              {texts[currentIndex].description}
            </p>
          </div>

          {/* Right Aligned Heading */}
          <div className="absolute top-1/2  transform -translate-y-1/2 transition-all duration-1000">
            <h2 className="text-4xl font-bold mb-2">
              {texts[currentIndex].heading}
            </h2>
          </div>

          {/* Button */}
          <Link href="/register">
            <button className="mt-8 py-3 px-6 bg-red-600 hover:bg-red-700 transition-colors duration-300 text-white rounded-full">
              {texts[currentIndex].button}
            </button>
          </Link>
        </div>

        {/* Constant Four Cards Section */}
        <div className="mt-40 grid grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-4 mb-5">
          {/* Card 1 */}
          <div className="group flex flex-col items-center p-6  bg-[rgba(29,41,60,0.8)] hover:bg-red-600 transition-colors duration-300 rounded-lg">
            <Image src="/image/icon.png" width={50} height={50} alt=""></Image>

            <h4 className="text-lg font-semibold mb-2 mt-3">Stocks</h4>
          </div>

          {/* Card 2 */}
          <div className="group flex flex-col items-center p-6  bg-[rgba(29,41,60,0.8)] hover:bg-red-600 transition-colors duration-300 rounded-lg">
            <Image src="/image/icon.png" width={50} height={50} alt=""></Image>

            <h4 className="text-lg font-semibold mb-2 mt-3">Bonds and ETFs</h4>
          </div>

          {/* Card 3 */}

          <div className="group flex flex-col items-center p-6  bg-[rgba(29,41,60,0.8)] hover:bg-red-600 transition-colors duration-300 rounded-lg">
            <Image src="/image/icon.png" width={50} height={50} alt=""></Image>
            <h4 className="text-lg font-semibold mb-2 mt-3">Our Products</h4>
          </div>

          {/* Card 4 */}
          <div className="group flex flex-col items-center p-6  bg-[rgba(29,41,60,0.8)] hover:bg-red-600 transition-colors duration-300 rounded-lg">
            <Image src="/image/iconn.png" width={50} height={50} alt=""></Image>
            <h4 className="text-lg font-semibold mb-2 mt-3">
              Real Estate Investing
            </h4>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Hero;
