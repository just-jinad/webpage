// import { CURRENT_YEAR } from "@/utils/constants"; // Assuming you have the current year logic here

export function Footer() {
  return (
    <footer className="pb-5 p-10 md:pt-10 bg-blue-900 text-white">
      <div className="container mx-auto max-w-7xl">
        {/* Top Section with Call to Action */}
        <div className="flex flex-col justify-center items-center py-10 mb-10 bg-gray-900 rounded-2xl p-5 text-center">
          <h2 className="text-3xl font-bold">Join now and get 30% OFF!</h2>
          <p className="text-base md:w-7/12 mt-3">
            Don&apos;t miss out on this exclusive offer that will end soon.
          </p>
          <div className="flex flex-col md:flex-row gap-3 mt-4">
            <button className="bg-white text-blue-900 py-2 px-4 rounded-md font-semibold">
              Buy Ticket
            </button>
          </div>
        </div>

        {/* Footer Content */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-white">
          {/* About Company */}
          <div>
            <img src="/path-to-logo.png" alt="Logo" className="mb-4" />
            <p>3600 Deer Creek Road, Palo Alto, California, 94304.</p>
            <p>Phone: +1 (910) 760-0205</p>
            <p>Email: support@teslastocksandinvestment.com</p>
          </div>

          {/* Company Links */}
          <div>
            <h3 className="font-bold mb-4">Our Company</h3>
            <ul className="space-y-2">
              <li><a href="#" className="hover:text-gray-300">Home</a></li>
              <li><a href="#" className="hover:text-gray-300">Investment Plans</a></li>
              <li><a href="#" className="hover:text-gray-300">Login</a></li>
              <li><a href="#" className="hover:text-gray-300">Create Account</a></li>
              <li><a href="#" className="hover:text-gray-300">Privacy Policy</a></li>
            </ul>
          </div>

          {/* Newsletter Subscription */}
          <div>
            <h3 className="font-bold mb-4">Subscribe Newsletter</h3>
            <p>Sign up for our latest news & articles. We won't give you spam mails.</p>
            <form className="flex mt-4">
              <input
                type="email"
                placeholder="Enter your email..."
                className="py-2 px-4 rounded-l-md w-full outline-none"
              />
              <button className="bg-red-600 px-4 py-2 rounded-r-md hover:bg-red-700">
                <i className="fa fa-paper-plane"></i>
              </button>
            </form>
            <div className="mt-4">
              <img src="/path-to-hapton-logo.png" alt="Hapton" className="mt-4" />
              <p className="text-xs mt-2">Partnered By Hapton Credit Union</p>
            </div>
          </div>
        </div>

        {/* Bottom Section */}
        <div className="border-t border-gray-500 mt-10 pt-4">
          <p className="text-center">
            &copy;
             {/* {CURRENT_YEAR} Tesla Investment & Stocks. All Rights Reserved. */}
          </p>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
