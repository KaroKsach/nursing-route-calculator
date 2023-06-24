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
            <a href="#" className="px-4 py-2 transition duration-300 hover:bg-blue-300 rounded-lg">
              Home
            </a>
            <a href="#" className="px-4 py-2 transition duration-300 hover:bg-blue-300 rounded-lg">
              Add Patient
            </a>
            <a href="#" className="px-4 py-2 transition duration-300 hover:bg-blue-300 rounded-lg">
              Plot Route
            </a>
          </div>
        </div>
      </nav>
    </>
  );
}
