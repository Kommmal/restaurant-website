import React, { useState } from "react";
import { RiCloseLine, RiMenu2Line } from "@remixicon/react";
import { FaShoppingCart } from 'react-icons/fa';
import { FiSearch } from 'react-icons/fi';
import { Link } from "react-router-dom";

const Navbar = () => {
  const [menu, openMenu] = useState(false);

  return (
    <nav className="flex justify-between items-center p-5 bg-black text-white fixed w-full z-[1000] top-0 left-0 h-[16vh]">
      {/* Left side (Menu toggle and links) */}
      <div className="flex items-center justify-between w-2/4">
        {/* Menu Toggle Button (Visible on small screens only) */}
        {menu ? (
          <RiCloseLine
            size={20}
            className="cursor-pointer sm:hidden"
            onClick={() => openMenu(false)} // Close menu on click
          />
        ) : (
          <RiMenu2Line
            size={20}
            className="cursor-pointer sm:hidden"
            onClick={() => openMenu(true)} // Open menu on click
          />
        )}

        {/* Menu Links (Always visible on large screens) */}
        <ul className={`sm:flex sm:flex-row sm:space-x-8  sm:visible ${menu ? "block" : "hidden"} absolute sm:static bg-[rgba(0,0,0,0.8)] w-full text-center flex-col pt-5 right-0 top-[100px] sm:bg-transparent sm:text-white sm:flex-row sm:pt-0`}>
          <li className="text-lg font-semibold cursor-pointer transition-colors duration-300 mx-4 my-0 hover:text-[#e04d29]">
            <Link to="/">Welcome</Link>
          </li>
          <li className="text-lg font-semibold cursor-pointer transition-colors duration-300 mx-4 my-0 hover:text-[#e04d29]">
            <Link to="/about">About</Link>
          </li>
          <li className="text-lg font-semibold cursor-pointer transition-colors duration-300 mx-4 my-0 hover:text-[#e04d29]">
            <Link to="/menu">Our Menu</Link>
          </li>
          <li className="text-lg font-semibold cursor-pointer transition-colors duration-300 mx-4 my-0 hover:text-[#e04d29]">
            <Link to="/achievements">Achievements</Link>
          </li>
          <li className="text-lg font-semibold cursor-pointer transition-colors duration-300 mx-4 my-0 hover:text-[#e04d29]">
            <Link to="/franchies">Franchies</Link>
          </li>
          <li className="text-lg font-semibold cursor-pointer transition-colors duration-300 mx-4 my-0 hover:text-[#e04d29]">
            <Link to="/testimonials">Testimonial</Link>
          </li>
        </ul>
      </div>

      {/* Logo */}
      <div className="sm:left-auto sm:top-auto ">
        <img src="/src/assets/cheffest.PNG" alt="Logo" />
      </div>

      {/* Right side (Cart, Search icons, and Become Member Button) */}
      <div className="flex justify-between items-center gap-[30px] w-2/5 sm:w-auto sm:items-center">
        <ul className="flex lg:gap-5 sm:gap-2 xs:gap-5 xs:ml-7 ">
          <li>
            <FaShoppingCart size={40} color="white" className="xs:w-5 lg:w-10" />
          </li>
          <li>
            <FiSearch size={40} color="white" className="xs:w-5 lg:w-10 " />
          </li>
        </ul>

        {/* Become Member Button */}
        <div className="shadow-[0px_4px_14px_rgba(255,255,255,0.15)] border px-10 py-[15px] rounded-[40px] border-solid border-white bg-white xs:hidden lg:block md:block">
          <button className="text-black text-[15px] xs:hidden lg:block md:block">Become Member</button>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
