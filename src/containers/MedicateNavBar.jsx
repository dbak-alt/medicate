import React, { useState } from "react";
import '../styles/home.css'; 
import DashBoardIcons from "../utilcontainers/DashborardIcons";
import { Link } from "react-router-dom";

const navButtons = ["Today’s Meds", "Vaccine", "Prescriptions", "Schedule", "Profile"];

const MedicationNavBar = () => {
  // State to toggle the menu visibility
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  // Toggle the menu
  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <div className="w-full">
      <nav className="flex flex-wrap items-center justify-between w-full bg-[#5d477a] bg-opacity-90 backdrop-blur-md shadow-xl px-4 py-2">
        
        {/* Left Logo Section */}
        <div className="flex items-center space-x-3">
          <svg
            className="w-8 h-8 sm:w-10 sm:h-10 fill-white"
            viewBox="0 0 489.6 489.6"
            xmlns="http://www.w3.org/2000/svg"
          >
           
           <path d="M465.785,228c-15.2-15.2-60.9-39.1-100,0l-47.9,47.9v-92.7c0-36.2-24.2-66.6-57.3-76.1V20.8c0-11.5-9.4-20.8-20.8-20.8
      h-162.5c-11.5,0-20.8,9.4-20.8,20.8v86.7c-32.6,9.8-56.2,40-56.2,75.8v227.1c0,43.7,35.4,79.2,79.2,79.2h158.2
      c23.9-0.7,35.1-7.9,36.3-8.8c4.8,1,39.4,7.6,64.7-19.3l130.2-130.2C495.985,303,497.285,259.6,465.785,228z M218.885,40.6v63.5
      h-121.8V40.6H218.885z M41.885,410.3V183.2c0-21.9,16.7-38.5,37.5-38.5h159.3c20.8,0,37.5,17.7,37.5,38.5v134.4l-40.6,40.6
      c-24.2,25.1-26.7,63.4-7.8,90.6h-148.4C58.485,448.8,41.885,431.1,41.885,410.3z M310.585,432.2c-11.5,11.5-30.2,11.5-41.7,0
      c0,0-24.2-20.8-3.1-44.8l50.9-50.9l44.4,45.1L310.585,432.2z M440.785,302l-50.5,50.5l-44.4-45.1l50.1-50.1
      c5.2-5.2,24.2-17.4,44.8,3.1C452.585,272.2,452.185,290.5,440.785,302z"/>
          </svg>

          <h1 className="text-2xl sm:text-3xl md:text-4xl font-bold tracking-wide glossy-text text-white">
            MEDICATE
          </h1>
        </div>

        {/* Hamburger Icon for Mobile */}
        <div className="sm:hidden flex items-center" onClick={toggleMenu}>
          <button className="text-white focus:outline-none">
            <svg
              className="w-6 h-6"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16" />
            </svg>
          </button>
        </div>

        {/* Navigation Links */}
        <div
          className={`sm:flex gap-3 sm:gap-6 mt-3 sm:mt-0 transition-all duration-300 ${
            isMenuOpen ? "block" : "hidden sm:block"
          }`}
        >
          {
        
          navButtons.map((button, index) => (
            <Link key={index} to={`/${button.replace(/\s+/g, '').toLowerCase()}`} className="text-white hover:text-amber-200">
            <DashBoardIcons key={index} iconName={button} />
          </Link>
            
          ))}
        </div>
      </nav>
    </div>
  );
};

export default MedicationNavBar;
