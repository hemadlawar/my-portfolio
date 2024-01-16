import React from "react";
import { useState } from "react";

export default function NavList() {
  const [showMobileMenu, setShowMobileMenu] = useState(false);
  return (
    <>
      <nav className="bg-gray-400">
        <div className="flex items-center justify-between h-16 px-4 border-b border-solid border-slate-600">
          <div className="flex-shrink-0 font-bold tracking-wider">LOGO</div>
          <button
            type="button"
            className="bg-gray-900 inline-flex items-center justify-center p-2 rounded-md text-gray-400 hover:text-white hover:bg-gray-700 focus:outline-none focus:bg-gray-700 focus:text-white transition duration-150 ease-in-out"
            onClick={() => setShowMobileMenu(!showMobileMenu)}
          >
            <svg
              className="h-6 w-6"
              stroke="currentColor"
              fill="none"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h16M4 18h16"
              ></path>
            </svg>
          </button>
        </div>
      </nav>
      {showMobileMenu && (
        <div className="px-2 md:px-0 py-3 space-y-2 md:space-y-0 md:space-x-2 font-medium text-slate-700">
          <a
            href="#"
            className="block md:inline-block px-3 py-2 rounded-md text-white bg-gray-900 focus:outline-none focus:text-white focus:bg-gray-700"
          >
            Home
          </a>
          <a
            href="#"
            className="block md:inline-block px-3 py-2 rounded-md hover:text-white hover:bg-gray-700 focus:outline-none focus:text-white focus:bg-gray-700"
          >
            educations
          </a>
          <a
            href="#"
            className="block md:inline-block px-3 py-2 rounded-md hover:text-white hover:bg-gray-700 focus:outline-none focus:text-white focus:bg-gray-700"
          >
            skills
          </a>
          <a
            href="#"
            className="block md:inline-block px-3 py-2 rounded-md hover:text-white hover:bg-gray-700 focus:outline-none focus:text-white focus:bg-gray-700"
          >
            Contact
          </a>
        </div>
      )}
    </>
  );
}
/**
 * 
 * 
 * 
 * <nav className="bg-gray-400">
      <div className="flex items-center justify-between h-16 px-4 border-b border-solid border-slate-600">
        <div className="flex-shrink-0 font-bold tracking-wider">
          LOGO
        </div>
        <button
          type="button"
          className="bg-gray-900 inline-flex items-center justify-center p-2 rounded-md text-gray-400 hover:text-white hover:bg-gray-700 focus:outline-none focus:bg-gray-700 focus:text-white transition duration-150 ease-in-out"
          onClick={() => setShowMobileMenu(!showMobileMenu)}>
          <svg
            className="h-6 w-6"
            stroke="currentColor"
            fill="none"
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M4 6h16M4 12h16M4 18h16"
            ></path>
          </svg>
        </button>
      </div>
      {showMobileMenu && <Menu />}
    </nav>
    -------




     <div>
      <div className="px-2 py-3 space-y-2 font-medium text-slate-700">
        <a
          href="#"
          className="block px-3 py-2 rounded-md text-white bg-gray-900 focus:outline-none focus:text-white focus:bg-gray-700"
        >
          Home
        </a>
        <a
          href="#"
          className="block px-3 py-2 rounded-md hover:text-white hover:bg-gray-700 focus:outline-none focus:text-white focus:bg-gray-700"
        >
          Features
        </a>
        <a
          href="#"
          className="block px-3 py-2 rounded-md hover:text-white hover:bg-gray-700 focus:outline-none focus:text-white focus:bg-gray-700"
        >
          Pricing
        </a>
        <a
          href="#"
          className="block px-3 py-2 rounded-md hover:text-white hover:bg-gray-700 focus:outline-none focus:text-white focus:bg-gray-700"
        >
          Contact
        </a>
      </div>
    </div>
 */
