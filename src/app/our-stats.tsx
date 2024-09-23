import { FaPlay } from "react-icons/fa";
export function OurStats() {
  return (
    <section className="relative">
      {/* Section 1: Full-width Play Button */}
      <div className="relative bg-[#000426] py-32 w-full text-center">
        <div className="flex justify-center items-center">
          <div className="w-20 h-20 bg-red-500 rounded-full flex items-center justify-center">
            <FaPlay className="text-white text-3xl" />
          </div>
        </div>
        <h2 className="text-white mt-4 text-xl font-semibold">
          Tesla Investment & Stocks has been giving the best consultation
        </h2>
        <p className="text-white text-lg">
          to top Finance companies since 2012
        </p>
      </div>

      {/* Section 2: Overlapping Cards */}
      <div className="relative -mt-16 container mx-auto">
        <div className="flex flex-col md:flex-row justify-between items-center gap-8 p-8 bg-white shadow-lg rounded-lg">
          {/* Excellence Record and Get Free Quote in the same div */}
          <div className="flex-1">
            <h3 className="text-xl font-bold mb-4">Excellence Record</h3>
            <p className="text-gray-600 mb-4">
              From banking and insurance to wealth management and security on
              distribution financial.
            </p>

            <div className="divone flex gap-10">
              <div>
              <img src="/image/setIcon3.png" alt="" />
              </div>
            <div>
              <p className="text-blue-500 font-bold text-lg">
                10+ Years In Business
              </p>
              <p className="text-gray-600">
                We are experienced in what we do and are guaranteed to give the
                best.
              </p>
            </div>
            </div>

            <div className="divtwo mt-5 flex gap-10">
            <div>
              <img src="/image/setIcon4.png" alt="" />
              </div>

              <div>
              <p className="text-blue-500 font-bold text-lg">
                5,000,000+ Happy Investors
              </p>
              <p className="text-gray-600">
                Based on past feedback from investors, we can beat our chest
                that we are one of the best in the industry
              </p>
              </div>
            </div>

            <div className="divtwo mt-5 flex gap-10">
            <div>
              <img src="/image/setIcon5.png" alt="" />
              </div>

              <div>
              <p className="text-blue-500 font-bold text-lg">
                24/7 Customer Support
              </p>
              <p className="text-gray-600">
                At Tesla Investment & Stocks we put our customers above every
                other thing. We provide top notch support to our customers
              </p>
              </div>
            </div>
          </div>

          <div className="flex-1 bg-[#eef2f6]">
            <h3 className="text-xl font-bold mb-4">Get Free Quote</h3>
            <p className="text-gray-600 mb-4">
              From banking and insurance to wealth management and security on
              distribution financial.
            </p>
            <p className="text-blue-500 font-bold text-lg">
              Request a quote today!
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}

export default OurStats;
