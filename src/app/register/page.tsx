import React from "react";
import Image from "next/image";

const page = () => {
  return (
    <div className="flex justify-center items-center h-screen bg-gray-100">
      <div className="bg-white p-8 rounded-lg shadow-lg w-full max-w-3xl">
        {/* Logo Section */}
        <div className="flex justify-between items-center mb-4">
          <div className="flex items-center space-x-2">
            <Image src="/image/logo 2.png" alt="Tesla Logo" width={100} height={100} />
            <h1 className="text-2xl font-bold">Tesla Investment And Stocks</h1>
          </div>
          <div>
            <a href="/" className="text-xl text-blue-500">
              <i className="fas fa-home"></i>
            </a>
          </div>
        </div>

        <h2 className="text-2xl font-bold mb-4">Register</h2>

        {/* Form Section */}
        <form className="space-y-4">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div className="mt-5">
              <label htmlFor="fullName" className="block text-sm font-medium text-gray-700">
                Full name
              </label>
              <input
                type="text"
                id="fullName"
                placeholder="Enter Full Name"
                className="mt-1 block w-full border border-gray-300  focus:ring-blue-500 focus:border-blue-500 sm:text-sm p-3"
              />
            </div>

            <div className="mt-5">
              <label htmlFor="username" className="block text-sm font-medium text-gray-700">
                Username
              </label>
              <input
                type="text"
                id="username"
                placeholder="Enter Username"
                className="mt-1 block w-full border border-gray-300  focus:ring-blue-500 focus:border-blue-500 sm:text-sm  p-3"
              />
            </div>
          </div>
          <br />

          <div className="mt-5">
            <label htmlFor="email" className="block text-sm font-medium text-gray-700">
              Email Address
            </label>
            <input
              type="email"
              id="email"
              placeholder="Enter Email"
              className="mt-1 block w-full border p-3 border-gray-300  focus:ring-blue-500 focus:border-blue-500 sm:text-sm"
            />
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div className="mt-5">
              <label htmlFor="password" className="block text-sm font-medium text-gray-700">
                Password
              </label>
              <input
                type="password"
                id="password"
                placeholder="Password"
                className="mt-1 block w-full border  p-3 border-gray-300  focus:ring-blue-500 focus:border-blue-500 sm:text-sm"
              />
            </div>

            <div className="mt-5">
              <label htmlFor="confirmPassword" className="block text-sm font-medium text-gray-700">
                Confirm Password
              </label>
              <input
                type="password"
                id="confirmPassword"
                placeholder="Confirm Password"
                className="mt-1 block w-full  p-3 border  border-gray-300 sm:text-sm"
              />
            </div>
          </div>

          <div>
            <button
              type="submit"
              className="w-full bg-red-500 text-white font-bold py-2 rounded-md hover:bg-red-600 transition-colors"
            >
              Register Now
            </button>
          </div>
        </form>

        <div className="mt-4 text-center">
          <p>
            Already Registered?{" "}
            <a href="/login" className="text-blue-500 hover:underline">
              Login
            </a>
          </p>
        </div>
      </div>
    </div>
  );
};

export default page;
