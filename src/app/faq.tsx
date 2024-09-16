"use client";
import React from "react";

const FAQS = [
  {
    title: "We Are Well-regulated and Safe To Trade With",
    desc: "Your Stock broker will hold your funds. Thus, it is important you verify it is safe. Stock Birds easily circumvents this concern as we are registered with and duly regulated by the US's Securities and Exchange Commission (SEC). Consequently, you can be sure.",
    img: "/image/new1.jpg",
  },

  {
    title: "We Genuinely Want Our Clients to Succeed",
    desc: "Genuinely, we want to see you succeed. Once you open an account with us, we will hold your capital in trust. We will work with you until you succeed. Our platforms are responsive, our execution speed is fast, the markets we cover are broad, and we give you",
    img: "/image/new2.jpg",
  },
  {
    title: "We Are A Broker of Established Repute",
    desc: "Our reputation has been confirmed. We have been around for long and about us our clients from all over the world have nothing but positive things to say. We offer only a market-leading, industry-standard brokerage service, and we know you would not want to deny yourself of it. Stock broker",
    img: "/image/new3.jpg",
  },
];

export function Faq() {
  return (
    <section className="py-8 px-8 lg:py-20" style={{fontFamily:'Rubik'}}>
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
              className="group relative h-auto overflow-hidden bg-[#eef2f6] text-black shadow-[#00000059_0px_5px_15px] transition-all duration-500 ease-in-out"
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
                <p className="text-gray-600 mb-4">{desc}</p>
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
