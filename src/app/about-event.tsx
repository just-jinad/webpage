"use client";
import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
} from "recharts";

// Updated Information for the Cards
const EVENT_INFO = [
  {
    icon: "/image/icon1.png", // Replace with an actual icon or SVG
    title: "Payment Options",
    description:
      "We offer a wide variety of payment options for your convenience.",
  },
  {
    icon: "/image/icon2.png", // Replace with an actual icon or SVG
    title: "Strong Security",
    description:
      "Your data and funds are secure with us thanks to cutting-edge security.",
  },
  {
    icon: "/image/icon3.png", // Replace with an actual icon or SVG
    title: "Legal Compliance",
    description:
      "We adhere to strict legal regulations to keep you and your investments safe.",
  },
  {
    icon: "/image/icon4.png", // Replace with an actual icon or SVG
    title: "World Coverage",
    description:
      "We offer global services to ensure you can access our platform anywhere.",
  },
  {
    icon: "/image/icon5.png", // Replace with an actual icon or SVG
    title: "Advanced Reporting",
    description: "Get insightful, advanced reports to make informed decisions.",
  },
  {
    icon: "/image/icon6.png", // Replace with an actual icon or SVG
    title: "Cross-Platform",
    description:
      "Our platform is accessible on all devices to ensure seamless usage.",
  },
];

const data = [
  { year: 2015, security: 5, flexibility: 4 },
  { year: 2016, security: 6, flexibility: 5 },
  { year: 2017, security: 7, flexibility: 6 },
  { year: 2018, security: 6, flexibility: 7 },
  { year: 2019, security: 8, flexibility: 8 },
  { year: 2020, security: 7, flexibility: 9 },
];

export function AboutEvent() {
  return (
    <>
      <section className="container mx-auto  px-4 py-10 bg-[#e3ebf0]">
        <div className="lg:flex lg:justify-between lg:items-center gap-10">
          {/* Left Section - Text */}
          <div className="lg:w-1/2">
            <h2 className="text-left text-red-600 font-semibold mb-2 uppercase">
              Core Features
            </h2>
            <h1 className="text-left text-3xl font-bold mb-4">
              Why We Are Above Others
            </h1>
            <p className="text-left text-gray-600 mb-6">
              Your stock broker will hold your funds. Thus, it is important you
              verify it is safe. Stock Birds easily circumvents this concern as
              we are registered with and duly regulated by the European
              Securities and Investments Commission. Consequently, you can be
              sure that we will always keep you and your funds safe.
            </p>
            <p className="text-left text-gray-600 mb-8">
              Our work draws on more than 10 years of experience. They are
              delivered by over 5,000 professionals in the world&apos;s most
              important financial centers.
            </p>
            <button className="px-6 py-3 bg-blue-600 text-white font-semibold rounded-lg">
              Get Started
            </button>
          </div>

          {/* Right Section - Icon Cards */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:w-1/2 mt-8 lg:mt-0 ">
            {EVENT_INFO.map((item, idx) => (
              <div
                key={idx}
                className="border border-gray-300  p-4 bg-white shadow-lg flex flex-col items-center text-center"
              >
                <img
                  className="text-5xl text-blue-500 mb-4 transform transition-transform duration-300 hover:translate-y-2"
                  src={item.icon}
                  alt=""
                />
                <div>
                  <h3 className="text-lg font-bold mb-2 text-[#16243f]">
                    {item.title}
                  </h3>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
      {/* SECTION 2 PART */}

      {/* SECTION 2 */}
      <section className="container mx-auto px-4 py-10">
        <div className="lg:flex lg:justify-between lg:items-center gap-10">
          {/* Left Section - Text */}
          <div className="lg:w-1/2">
            <h2 className="text-left text-red-600 font-semibold mb-2 uppercase">
              Profit Graph
            </h2>
            <h1 className="text-left text-3xl font-bold mb-4">
              Tesla Investment & Stocks gives you the best Financial solution.
            </h1>

            <div className="flex gap-10 mt-5 mb-5">
              <img src="/image/setIcon1.png" alt="" />
              <div>
                <p className="font-bold text-xl">Security:</p>
                we offer protection when your customers have financial.
              </div>
            </div>

            <div className="flex gap-10 mt-5 mb-10">
              <img className="transform transition-transform duration-300 hover:translate-y-2" src="/image/setIcon2.png" alt="" />
              <div>
                <p className="font-bold text-xl">Flexibility:</p>
                funding grows in line with your daily sales update.
              </div>
            </div>

            <button
              style={{ backgroundColor: "#2a367e" }}
              className="px-6 py-3 text-white w-64 font-semibold rounded-3xl"
            >
              Contact Us
            </button>
          </div>

          {/* Right Section - Profit Graph */}
          <div className="lg:w-1/2 mt-8 lg:mt-0">
            <ResponsiveContainer width="100%" height={300}>
              <LineChart data={data}>
                <CartesianGrid strokeDasharray="3 3" />
                <XAxis dataKey="year" />
                <YAxis />
                <Tooltip />
                <Line type="monotone" dataKey="security" stroke="#f57373" />
                <Line type="monotone" dataKey="flexibility" stroke="#4caf50" />
              </LineChart>
            </ResponsiveContainer>
            <p className="text-right text-gray-600 mt-4">
              <strong>Annual Report:</strong> From 2012 to 2020 the growth rate
              grew +29,999.40%
            </p>
          </div>
        </div>
      </section>
    </>
  );
}

export default AboutEvent;
