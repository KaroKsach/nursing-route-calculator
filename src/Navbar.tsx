import React from "react";

export default function Navbar() {
  return (
    <>
      <nav className="bg-white border-gray-200">
        <div className="border flex items-center justify-center mx-auto p-4">
          <a href="#" className="flex items-center">
            <span className="text-2xl whitespace-nowrap font-bold">
              Nursing Route Calculator
            </span>
          </a>
          <div className="flex flex-grow justify-start pl-16">
            <a href="#" className="px-4 py-2 transition duration-300 hover:text-white hover:bg-blue-500 rounded-lg border hover:border-transparent border-blue-500 mr-2">
              Home
            </a>
            <a href="#" className="px-4 py-2 transition duration-300 hover:text-white hover:bg-blue-500 rounded-lg border hover:border-transparent border-blue-500 mr-2">
              Add Patient
            </a>
            <a href="#" className="px-4 py-2 transition duration-300 hover:text-white hover:bg-blue-500 rounded-lg border hover:border-transparent border-blue-500 mr-2">
              Plot Route
            </a>
          </div>
        </div>
      </nav>
    </>
  );
}
