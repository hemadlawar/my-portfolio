import React from "react";
import { Link } from "react-router-dom"; // Assuming you are using React Router

export default function Navigation() {
  return (
    <nav className="bg-blue-500 p-4">
      <div className="container mx-auto flex justify-between items-center">
        {/* Logo or brand */}
        <p className="text-white text-xl font-bold">Hema Dlawar</p>

        {/* Navigation links */}
        <div className="hidden md:flex space-x-4">
          <Link to="/" className="text-white">
            Home
          </Link>
          <Link to="/skills" className="text-white">
            skills
          </Link>
          <Link to="/education" className="text-white">
            education
          </Link>
          <Link to="/projects" className="text-white">
            projects
          </Link>
          <Link to="/contact" className="text-white">
            contact
          </Link>
        </div>

        {/* Mobile menu button */}
        <div className="md:hidden">
          <button
            className="text-white focus:outline-none"
            // Toggle mobile menu here
          >
            {/* You can use a hamburger icon here */}☰
          </button>
        </div>
      </div>

      {/* Mobile menu */}
      {/* Conditionally render this based on the mobile menu state */}
      {/* You can use a library like react-responsive or implement your logic */}
      <div className="md:hidden">
        <div className="flex flex-col space-y-4 items-center p-4">
          <Link to="/" className="text-white">
            Home
          </Link>
          <Link to="/about" className="text-white">
            About
          </Link>
          <Link to="/portfolio" className="text-white">
            Portfolio
          </Link>
          <Link to="/contact" className="text-white">
            Contact
          </Link>
        </div>
      </div>
    </nav>
  );
}
