"use client"
import { useState } from 'react';

export function EventContent() {
  const [hoveredIdx, setHoveredIdx] = useState<number | null>(null);

  // const [hoveredIdx, setHoveredIdx] = useState(null);

  const PLANS = [
    {
      type: "Basic",
      min: "$500",
      max: "$4,900",
      bonus: "Referral Bonus",
      multipleInvestments: true,
      customerCare: false,
    },
    {
      type: "Premium",
      min: "$5,000",
      max: "$49,999",
      bonus: "Referral Bonus",
      multipleInvestments: true,
      customerCare: false,
    },
    {
      type: "Gold",
      min: "$100,000",
      max: "$350,000",
      bonus: "Referral Bonus",
      multipleInvestments: true,
      customerCare: false,
    },
    {
      type: "Standard",
      min: "$500,000",
      max: "Unlimited",
      bonus: "Referral Bonus",
      multipleInvestments: true,
      customerCare: false,
    },
  ];

  return (
    <section className="py-8 px-8 lg:py-20 bg-gray-50">
      <div className="w-full flex flex-col items-center">
        <h2 className="text-2xl font-bold mb-4 text-gray-700">Our Investment Plans</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mx-auto container ">
          {PLANS.map((plan, idx) => (
            <div
              key={idx}
              className="bg-white shadow-lg h-96 rounded-lg p-6 text-center transition-all duration-300 hover:shadow-xl"
              onMouseEnter={() => setHoveredIdx(idx)}
              onMouseLeave={() => setHoveredIdx(null)}
            >
              <h3 className="text-xl font-semibold mb-2 text-gray-800">{plan.type}</h3>
              
              {/* Fill Bar that expands on hover */}
              <div className="h-1 w-20 bg-gray-300 mx-auto mb-4">
                <div
                  className={`h-1 ${
                    hoveredIdx === idx ? 'w-full' : 'w-0'
                  } bg-gray-700 hover:bg-red-500 transition-all duration-300`}
                ></div>
              </div>

              {/* Plan Details */}
              <ul className="text-left mb-6">
                <li className="text-black mb-2">
                  <span className="text-green-600">✔</span> Min: {plan.min}
                </li>
                <li className="text-black mb-2">
                  <span className="text-green-600">✔</span> Max: {plan.max}
                </li>
                <li className="text-black mb-2">
                  <span className="text-green-600">✔</span> {plan.bonus}
                </li>
                <li className="text-black mb-2">
                  <span className="text-green-600">✔</span> Multiple Investments Allowed
                </li>
                <li
                  className={`mb-2 ${plan.customerCare ? 'text-black' : 'text-black'}`}
                >
                  <span className="text-green-600">
                    {plan.customerCare ? '✔' : '✖'}
                  </span>{" "}
                  24/7 Customer Care
                </li>
              </ul>

              {/* Button that changes on hover */}
              <button
                className={`py-2 px-8 rounded-full border-2 font-semibold transition-all duration-300 ${
                  hoveredIdx === idx
                    ? 'border-gray-500 text-white bg-gradient-to-r from-red-500 to-gray-500'
                    : 'border-red-500 text-red-500 hover:bg-gradient-to-r from-red-500 to-gray-500 hover:text-white'
                }`}
              >
                Start Investing
              </button>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default EventContent;
