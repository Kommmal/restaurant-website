import React from 'react';
import { CiLinkedin } from "react-icons/ci";
import { FaGithub, FaTwitter, FaFacebookF, FaDiscord } from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="flex flex-col w-screen gap-[100px] text-white pt-[5vw] pb-[2vw] px-[5vw] bg-[#191919]">
      <div className="flex flex-wrap justify-between gap-4">
        <div>
          <h2 className='text-[1.5rem] font-bold' >Our-products</h2>
          <ul>
            <li className="px-0 py-[5px]">Our Menu</li>
            <li className="px-0 py-[5px]">Our Burger</li>
            <li className="px-0 py-[5px]">Our Time side</li>
            <li className="px-0 py-[5px]">Our Naandwich</li>
          </ul>
        </div>
        <div>
          <h2 className='text-[1.5rem] font-bold '>Legal-information</h2>
          <ul>
            <li className="px-0 py-[5px]">Legal Notice</li>
          </ul>
        </div>
        <div>
          <h2 className='text-[1.5rem] font-bold '>Contact-us</h2>
          <ul>
            <li className="px-0 py-[5px]">Contacts</li>
            <li className="px-0 py-[5px]">Our Address</li>
            <li className="px-0 py-[5px]">Become a Times Square franchisee</li>
          </ul>
        </div>
      </div>

      <div className="flex flex-wrap justify-between pt-5 border-t-[white] border-t border-solid">
        <ul className="flex gap-[30px]">
          <li>
            <CiLinkedin size={24} className="hover:text-[#e04d29]" />
            <a href="" className="hover:text-[#e04d29]"></a>
          </li>
          <li>
            <FaGithub size={24} className="hover:text-[#e04d29]" />
            <a href="https://github.com/Kommmal" target="_blank" className="hover:text-[#e04d29]"></a>
          </li>
          <li>
            <FaFacebookF size={24} className="hover:text-[#e04d29]" />
            <a href="" className="hover:text-[#e04d29]"></a>
          </li>
          <li>
            <FaDiscord size={24} className="hover:text-[#e04d29]" />
            <a href="" className="hover:text-[#e04d29]"></a>
          </li>
          <li>
            <FaTwitter size={24} className="hover:text-[#e04d29]" />
            <a href="" className="hover:text-[#e04d29]"></a>
          </li>
        </ul>
        <p>&copy; 2023 Komal Ayub. All rights reserved.</p>
      </div>
    </footer>
  );
};

export default Footer;
