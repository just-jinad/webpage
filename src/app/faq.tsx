"use client";
import React from "react";

const FAQS = [
  {
    title: "1. How do I register for the AI Conference 2023?",
    desc: "You can register for the AI Conference 2023 by visiting our registration page. Follow the simple steps to complete your registration and secure your spot at the conference.",
    img: "/image/new1.jpg",
  },

  {
    title: "2. What are the registration fees, and what is included?",
    desc: "It really matters and then like it really doesn't matter. What matters is the people who are sparked by it...",
    img: "/image/new2.jpg",
  },
  {
    title: "4. Will there be on-site registration available?",
    desc: "I always felt like I could do anything. That's the main thing people are controlled by! Thoughts- their perception of themselves...",
    img: "/image/new3.jpg",
  },
];

export function Faq() {
  return (
    <section className="py-8 px-8 lg:py-20">
      <div className="container mx-auto">
        <div className="text-center mb-12">
          <h1 className="text-3xl font-bold text-blue-gray-800 mb-4">
            Frequently Asked Questions
          </h1>
          <p className="text-lg text-gray-500 mx-auto lg:w-3/5">
            Welcome to the AI Conference 2023 FAQ section. We're here to address your most common queries and provide you with the information you need to make the most of your conference experience.
          </p>
        </div>

        {/* Grid display for FAQ cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {FAQS.map(({ title, desc, img }, key) => (
            <div
              className="group relative h-auto overflow-hidden bg-[#f5f5f5] text-black shadow-[#00000059_0px_5px_15px] transition-all duration-500 ease-in-out rounded-lg"
              key={key}
            >
              {/* Image with hover effect */}
              <img
                className="h-48 w-full object-cover transition-transform duration-500 ease-in-out group-hover:scale-110"
                src={img}
                alt={title}
              />
              <div className="p-4">
                {/* FAQ Title */}
                <h2 className="text-xl font-bold mb-2">{title}</h2>
                {/* FAQ Description */}
                <p className="text-gray-500 mb-4">{desc}</p>
                {/* Read more link with hover effect */}
                <a
                  href="#"
                  className="inline-flex items-center text-[#5f03f4] no-underline after:absolute after:bottom-0 after:left-0 after:right-0 after:top-0 after:cursor-pointer after:content-['']"
                >
                  Read more
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="ml-1.5 mt-px h-5 w-5 translate-x-[-20px] transform opacity-0 transition-all duration-300 group-hover:translate-x-0 group-hover:opacity-100"
                    viewBox="0 0 20 20"
                    fill="currentColor"
                  >
                    <path
                      fillRule="evenodd"
                      d="M12.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-2.293-2.293a1 1 0 010-1.414z"
                      clipRule="evenodd"
                    />
                  </svg>
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Faq;
