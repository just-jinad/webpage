import Image from "next/image";

const CURRENT_YEAR = new Date().getFullYear();

export function Footer() {
  return (
    <footer className="bg-blue-900 text-white py-10">
      <div className="container mx-auto max-w-7xl">
        {/* Footer top section with a banner */}
        <div className="bg-red-600 text-white text-center py-6 rounded-lg mb-10">
          <h2 className="text-2xl md:text-3xl font-bold">Work with the best Finance Team</h2>
          <button className="mt-4 bg-white text-red-600 px-6 py-2 rounded-full font-bold shadow-lg hover:bg-gray-100 transition">
            Get Started
          </button>
        </div>

        {/* Footer columns */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-white mb-10">
          {/* About Company */}
          <div>
            <h3 className="font-bold text-lg mb-4">About Company</h3>
            <p>3600 Deer Creek Road, Palo Alto, California, 94304.</p>
            <p>Phone: +1 (910) 760-0205</p>
            <p>Email: support@teslastocksandinvestment.com</p>
          </div>

          {/* Company Links */}
          <div>
            <h3 className="font-bold text-lg mb-4">Our Company</h3>
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
            <h3 className="font-bold text-lg mb-4">Subscribe Newsletter</h3>
            <p>Sign up for our latest news & articles. We won't give you spam mails.</p>
            <form className="flex mt-4">
              <input
                type="email"
                placeholder="Enter your email..."
                className="py-2 px-4 rounded-l-md w-full outline-none text-gray-900"
              />
              <button className="bg-red-600 px-4 py-2 rounded-r-md hover:bg-red-700">
                <i className="fa fa-paper-plane"></i>
              </button>
            </form>
            <div className="mt-4">
              <Image
              src="/path-to-hapton-logo.png" alt="Hapton" className="mt-4" 
              width={50}
              height={50}
              >

              </Image>
              <img />
              <p className="text-xs mt-2">Partnered By Hapton Credit Union</p>
            </div>
          </div>
        </div>

        {/* Footer Bottom */}
        <div className="border-t border-gray-700 pt-4 text-center">
          <p className="text-xs">
            &copy; {CURRENT_YEAR} Tesla Investment & Stocks. All Rights Reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
