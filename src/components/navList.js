import React, { useState } from "react";
import { Routes, Route, Link } from "react-router-dom";

export default function NavList() {
  const [showMobileMenu, setShowMobileMenu] = useState(false);

  const toggleMobileMenu = () => {
    setShowMobileMenu(!showMobileMenu);
  };

  return (
    <>
      <nav className="border-gray-200 dark:bg-gray-900 flex flex-wrap items-center">
        <div className="ml-2 mt-0 ">
          <p className="block py-3 px-4 text-black bg-yellow-500 rounded-md md:bg-transparent md:text-blue-500 md:p-0 font-bold text-lg dark:text-white md:dark:text-blue-500">
            HEMA DLAWAR
          </p>
        </div>
        <div className="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-4">
          <div
            className={`${
              showMobileMenu ? "block" : "hidden"
            } w-full md:hidden`}
            id="navbar-mobile"
          >
            {/* Mobile Menu */}
            <ul className="font-medium flex flex-col p-4 mt-4 border border-gray-100 rounded-lg bg-gray-50 dark:bg-gray-800 dark:border-gray-700">
              <li>
                <a
                  href="#"
                  className="block py-2 px-3 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0 dark:text-white md:dark:hover:text-blue-500 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent"
                  onClick={toggleMobileMenu}
                >
                  Home
                </a>
              </li>
              {/* Add other mobile menu items here */}
            </ul>
          </div>

          <div className="hidden w-full md:block md:w-auto" id="navbar-default">
            {/* Desktop Menu */}
            <ul className="font-medium flex flex-col md:flex-row md:space-x-8 rtl:space-x-reverse md:mt-0 md:border-0 md:bg-white dark:bg-gray-800 md:dark:bg-gray-900 dark:border-gray-700">
              <li>
                <a
                  href="#"
                  className="block py-2 px-3 text-white bg-blue-700 rounded md:bg-transparent md:text-blue-700 md:p-0 dark:text-white md:dark:text-blue-500"
                  aria-current="page"
                >
                  Home
                </a>
              </li>

              <li>
                <a
                  href="#"
                  className="block py-2 px-3 text-white bg-blue-700 rounded md:bg-transparent md:text-blue-700 md:p-0 dark:text-white md:dark:text-blue-500"
                  aria-current="page"
                >
                  educations
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="block py-2 px-3 text-white bg-blue-700 rounded md:bg-transparent md:text-blue-700 md:p-0 dark:text-white md:dark:text-blue-500"
                  aria-current="page"
                >
                  skills
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="block py-2 px-3 text-white bg-blue-700 rounded md:bg-transparent md:text-blue-700 md:p-0 dark:text-white md:dark:text-blue-500"
                  aria-current="page"
                >
                  projects
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="block py-2 px-3 text-white bg-blue-700 rounded md:bg-transparent md:text-blue-700 md:p-0 dark:text-white md:dark:text-blue-500"
                  aria-current="page"
                >
                  ccontacts
                </a>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </>
  );
}
