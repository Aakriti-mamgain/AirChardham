import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { FaPhone, FaEnvelope, FaChevronDown, FaBars, FaTimes } from "react-icons/fa";
import logo from "../assets/images/airchardham-logo2.png";
import heroimg from "../assets/images/air-chardham-header.jpg";

const HeroSection = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const [isFleetOpen, setIsFleetOpen] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  },);

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  const toggleDropdown = () => {
    setIsDropdownOpen(!isDropdownOpen);
  };

  const toggleFleet = () => {
    setIsFleetOpen(!isFleetOpen);
  };

  const closeMobileMenu = () => {
    setIsMobileMenuOpen(false);
  };

  return (
    <div className="relative w-full h-[75vh]">
      {/* Hero Image */}
      <img src={heroimg} alt="Chardham Yatra by Charter" className="w-full h-full object-cover" />
      <div className="absolute inset-0 bg-black bg-opacity-50"></div>

      <nav
        className={`fixed top-0 left-0 w-full px-4 md:px-8 z-50 transition-all duration-300 ${
          isScrolled ? "bg-white shadow-md text-black" : "bg-gradient-to-b from-white to-transparent text-white"
        }`}
      >
        {/* Top Contact Section */}
        <div className="hidden md:flex justify-end items-center gap-4 py-0.5 text-sm text-black">
          <span> 15, Sri Chander Nagar Colony, Kankhal, Haridwar, Uttarakhand</span>
          <span className="flex items-center gap-1">
            <FaPhone /> +91-7447037447
          </span>
          <span className="flex items-center gap-1">
            <FaEnvelope /> reservation@airchardham.com
          </span>
        </div>

        {/* Navbar Main Section */}
        <div className="flex items-center justify-between py-2">
          {/* Logo (Adjusted Height) */}
          <img src={logo} alt="Air Chardham Logo" className="h-[4rem] w-[150px]" />

          {/* Mobile Menu Button */}
          <div className="md:hidden pr-2"> {/* Added padding-right */}
            <button onClick={toggleMobileMenu} className="text-2xl text-black">
              {isMobileMenuOpen ? <FaTimes /> : <FaBars />}
            </button>
          </div>

          {/* Navbar Links */}
          <ul
            className={`md:flex space-x-2 items-center ml-auto ${
              isMobileMenuOpen
                ? "flex flex-col absolute top-full left-0 w-full bg-white text-black py-4 px-4 space-y-2"
                : "hidden"
            }`}
          >
            {/* Basic Navigation Links */}
            {[
              { name: "Home", path: "/" },
              { name: "About", path: "/about" },
              { name: "Helicopter Safety Rules", path: "/safety-rules" },
            ].map((item, index) => (
              <li key={index}>
                <Link to={item.path} className="text-base font-medium px-4 py-2 hover:text-red-500 transition" onClick={closeMobileMenu}> {/* Added onClick handler */}
                  {item.name}
                </Link>
              </li>
            ))}

            {/* Chardham Heli Packages Dropdown */}
            <li className="relative">
              <span
                className="flex items-center text-base font-medium px-4 py-2 cursor-pointer hover:text-red-500 transition"
                onClick={toggleDropdown}
              >
                Chardham Heli Packages <FaChevronDown className="ml-1" />
              </span>
              {isDropdownOpen && (
                <ul className="absolute left-0 top-full mt-1 bg-white text-black w-44 rounded-lg shadow-lg z-10"> {/* Added z-index */}
                  {[
                    { name: "Char Dham Yatra", path: "/chardham" },
                    { name: "Do Dham Yatra", path: "/dodham" },
                    { name: "Do Dham Ex Dehradun", path: "/sameday-kedarnath" },
                    { name: "Do Dham Yatra by Heli Ex Phata", path: "/sameday-kedarnath" },
                  ].map((item, index) => (
                    <li key={index}>
                      <Link to={item.path} className="block px-4 py-2 hover:bg-gray-200" onClick={closeMobileMenu}> {/* Added onClick handler */}
                        {item.name}
                      </Link>
                    </li>
                  ))}
                </ul>
              )}
            </li>
            <li>
              <Link to="/fleet" className="flex items-center text-base font-medium px-4 py-2 cursor-pointer hover:text-red-500 transition" onClick={closeMobileMenu}> {/* Added onClick handler */}
                Our Fleet
              </Link>
            </li>

            <li className="relative">
              <span
                className="flex items-center text-base font-medium px-4 py-2 cursor-pointer hover:text-red-500 transition"
                onClick={toggleFleet}
              >
                Our Heli Services <FaChevronDown className="ml-1" />
              </span>
              {isFleetOpen && (
                <ul className="absolute left-0 top-full mt-1 bg-white text-black w-44 rounded-lg shadow-lg z-10"> {/* Added z-index */}
                  {[
                    { name: "Heli Skiing", path: "/heli-skiing" },
                    { name: "air Ambulance", path: "/air-aimbulance" },
                    { name: "Wedding", path: "/air-wedding" },
                    { name: "Flim Shooting", path: "/air-shooting" },
                    { name: "Goverment Surveys", path: "/goverment-survey" },
                    { name: "Political Flying", path: "/political-flying" },
                    { name: "Fixed Wing Charters", path: "/charter" },
                  ].map((item, index) => (
                    <li key={index}>
                      <Link to={item.path} className="block px-4 py-2 hover:bg-gray-200" onClick={closeMobileMenu}> {/* Added onClick handler */}
                        {item.name}
                      </Link>
                    </li>
                  ))}
                </ul>
              )}
            </li>
            {/* Contact Button */}
            <li className="md:hidden">
              <Link to="/contact-us">
                <button className="bg-gradient-to-r from-red-600 to-blue-500 px-5 py-2 rounded-full font-semibold transition-transform duration-300 hover:scale-110 text-white" onClick={closeMobileMenu}> {/* Added onClick handler */}
                  Contact
                </button>
              </Link>
            </li>
          </ul>

          {/* Contact Button */}
          <div className="hidden md:block">
            <Link to="/contact-us">
              <button className="ml-6 bg-gradient-to-r from-red-600 to-blue-500 px-5 py-2 rounded-full font-semibold transition-transform duration-300 hover:scale-110 text-white">
                Contact
              </button>
            </Link>
          </div>
        </div>
      </nav>

      {/* Hero Section Content */}
      <div className="absolute inset-0 flex flex-col items-center justify-end text-center text-white px-4 pb-20">
        <h1 className="text-4xl md:text-6xl font-extrabold">Chardham Yatra by Charter</h1>
        <p className="mt-4 text-lg md:text-xl max-w-2xl">
          Air Chardham is one of the largest Private Charters Helicopter service providers in India.
        </p>
      </div>
    </div>
  );
};

export default HeroSection;
