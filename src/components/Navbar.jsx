import React, { useState } from "react";
import { Link } from "react-router-dom";
import { FaCaretDown } from 'react-icons/fa';
import HamburgerMenu from "./HamburgerMenu";
import { Link as ScrollLink } from 'react-scroll';

export default function Navbar({ isHomePage }) {
  const [isOpen, setIsOpen] = useState(false);
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  const toggleDropdown = () => {
    setIsDropdownOpen(!isDropdownOpen);
  };

  return (
    <header className="sticky bg-white shadow-md md:sticky top-0 z-10">
      <div className="container mx-auto p-5 flex items-center justify-between">
        <Link to="/" className="title-font font-medium text-black text-xl">
          Jonathan Shamwana
        </Link>
        <div>
          <HamburgerMenu isOpen={isOpen} toggleMenu={toggleMenu} />
        </div>
        <nav
          className={`${
            isOpen ? "flex" : "hidden"
          } md:flex flex-col md:flex-row items-center text-base justify-center w-full md:w-auto mt-4 md:mt-0`}
        >
          { isHomePage === true && (
            <div>
              <ScrollLink to="projects" className="text-gray-600 mr-5 hover:text-purple-800" smooth={true} duration={500}>
                Projects
              </ScrollLink>
              <ScrollLink to="internships" className="text-gray-600 mr-5 hover:text-purple-800" smooth={true} duration={500}>
                Internships
              </ScrollLink>
              <ScrollLink to="blog" className="text-gray-600 mr-5 hover:text-purple-800" smooth={true} duration={500}>
                Blog
              </ScrollLink>
            </div>
          )}
          <Link to="/art" className="text-gray-600 mr-5 hover:text-purple-800">
            Art
          </Link>
          <div className="relative">
            <button
              onClick={toggleDropdown}
              className="text-gray-600 mr-5 hover:text-purple-800 focus:outline-none flex items-center"
            >
              Stuff <FaCaretDown className="ml-1" />
            </button>
            <div
              className={`${
                isDropdownOpen ? "block" : "hidden"
              } absolute mt-2 py-2 w-32 bg-white rounded-lg shadow-xl`}
            >
              <Link
                to="/now"
                className="block px-4 py-2 text-gray-800 hover:text-purple-800"
              >
                Now
              </Link>
              <Link
                to="/people"
                className="block px-4 py-2 text-gray-800 hover:text-purple-800"
              >
                People
              </Link>
              <Link
                to="/exploration"
                className="block px-4 py-2 text-gray-800 hover:text-purple-800"
              >
                Exploration
              </Link>
            </div>
          </div>
        </nav>
      </div>
    </header>
  );
}

