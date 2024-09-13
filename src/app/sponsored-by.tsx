"use client";

import { useState } from "react";
import Image from "next/image";
import { FaChevronDown } from "react-icons/fa"; // Using Font Awesome icons for down arrow

export default function SponsoredBy() {
  const [accordionOpen, setAccordionOpen] = useState<number | null>(null);
  const [hoveredCard, setHoveredCard] = useState<number | null>(null);

  const toggleAccordion = (index: number) => {
    setAccordionOpen(accordionOpen === index ? null : index);
  };

  const handleMouseEnter = (index: number) => {
    setHoveredCard(index);
  };

  const handleMouseLeave = () => {
    setHoveredCard(null);
  };

  return (
    <section className="relative">
      {/* Background Color Split Vertically */}
      <div className="absolute top-0 left-0 right-0">
        <div className="h-[50vh] bg-[#e9eef3]"></div>
      </div>

      <div className="relative z-10 py-12 px-8 lg:py-20">
        <div className="container mx-auto text-center">
         
          {/* Cards Section with Text/Button Above Each */}
          <div className="relative z-10 py-12">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
              {[
                {
                  imgSrc: "/image/pose.jpg",
                  alt: "Stock Trading",
                  aboveText: "Want more out of your Stock trading?",
                  aboveButton: "Explore More",
                },
                {
                  imgSrc: "/image/redCar.jpg",
                  alt: "Tesla Car",
                  aboveText: "High-tech solutions meet Instant execution",
                  aboveButton: "Discover Solutions",
                },
                {
                  imgSrc: "/image/twitter elon.jpg",
                  alt: "Elon Musk",
                  aboveText: "One of the world’s most trusted brokers",
                  aboveButton: "Learn More",
                },
              ].map((card, index) => (
                <div key={index} className="card-container">
                  {/* Above Text and Button for each card */}
                  <div className="mb-4 text-left">
                    <h3 className="text-lg font-semibold text-gray-700">{card.aboveText}</h3>
                    <button className="mt-2 bg-red-500 text-white px-4 py-2 shadow-lg">{card.aboveButton}</button>
                  </div>

                  {/* Image Card */}
                  <div
                    className="relative card bg-white shadow-lg rounded-lg overflow-hidden hover:shadow-xl transition-shadow duration-300"
                    onMouseEnter={() => handleMouseEnter(index)}
                    onMouseLeave={handleMouseLeave}
                  >
                    {/* Image Section */}
                    <div className="relative">
                      <Image
                        src={card.imgSrc}
                        alt={card.alt}
                        width={400}
                        height={300}
                        className="w-full h-[250px] object-cover"
                      />
                    </div>

                    {/* Card Text at the Bottom */}
                    <div className="absolute bottom-0 left-1/2 transform -translate-x-1/2 translate-y-[30%] bg-white w-4/5 py-4 shadow-lg">
                      <p className="text-gray-700 font-semibold text-sm">{card.aboveText}</p>
                    </div>

                    {/* Hover button in the center */}
                    {hoveredCard === index && (
                      <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
                        <button className="bg-red-500 text-white px-4 py-2 shadow-lg">See More</button>
                      </div>
                    )}
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Accordion Section */}
          <div className="lg:flex lg:justify-between lg:items-start lg:gap-8 bg-white w-full p-5 mt-[25px]">
            {/* Image with Overlapping Text */}
            <div className="image-section w-full lg:w-1/2 flex justify-center lg:justify-end mt-8 lg:mt-0 relative">
              <div className="relative">
                <Image
                  src="/image/about_img.png" // Replace with your image
                  alt="Financial Growth"
                  width={500}
                  height={300}
                  className="rounded-lg shadow-lg object-cover"
                />
                <div className="absolute right-0 top-80 bg-white p-4 text-2xl shadow-lg transform translate-x-1/4 -translate-y-1/4">
                  <p className="text-gray-700 font-semibold text-sm">
                    Financial Freedom with Tesla Investments
                  </p>
                </div>
              </div>
            </div>

            {/* Accordion */}
            <div className="accordion-section w-full lg:w-1/2 g">
              <h3 className="text-start text-red-500">About us</h3>
              <h2 className="text-start text-indigo-900 text-2xl mb-4 mt-4">Learn A Little About Us</h2>
              <p className="text-start">
                Tesla Investment And Stocks is a leading financial services company and pioneer in the online brokerage
                industry. Having executed the first-ever electronic trade by an individual investor more than 10 years ago.
              </p>

              <div className="bg-white shadow-lg rounded-lg p-8 mt-8">
                {[
                  "Trading guides",
                  "Daily market commentary",
                  "Breaking news & analysis",
                ].map((title, index) => (
                  <div key={index} className="accordion-item mb-4">
                    <div
                      className="accordion-header border-b border-gray-300 cursor-pointer py-2 text-right flex justify-between items-center"
                      onClick={() => toggleAccordion(index)}
                    >
                      <h3 className="text-gray-700 text-lg font-medium">{title}</h3>
                      <FaChevronDown
                        className={`transition-transform ${accordionOpen === index ? "rotate-180" : ""}`}
                      />
                    </div>
                    {accordionOpen === index && (
                      <div className="accordion-content text-gray-500 py-4">
                        {title === "Trading guides"
                          ? "Detailed trading guides to help investors make informed decisions."
                          : title === "Daily market commentary"
                          ? "Insightful market analysis and news updates daily."
                          : "Stay up-to-date with the latest stock market news."}
                      </div>
                    )}
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
