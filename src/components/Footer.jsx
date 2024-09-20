import React from 'react';
import { FaSquareFacebook, FaSquareXTwitter } from 'react-icons/fa6';
import { FaInstagramSquare } from 'react-icons/fa';

const Footer = () => {
  return (
    <footer className="w-full flex justify-center bg-[#f2f2f2] text-gray-700 text-center py-4 mt-6 border-t border-neutral-300">
      <div className="w-[90%] flex flex-col md:flex-row justify-between items-center text-sm">
        <div className="flex flex-col md:flex-row items-center mb-4 md:mb-0">
          <a href="#" className="mr-2">
            <span className="font-semibold font-Kr">해피펫</span>
          </a>
          <span className="font-En">Email: support@happypet.com</span>
        </div>

        <div className="flex gap-x-4 text-xl">
          <a href="#" className="hover:text-blue-500">
            <FaSquareFacebook />
          </a>
          <a href="#" className="hover:text-pink-500">
            <FaInstagramSquare />
          </a>
          <a href="#" className="hover:text-blue-400">
            <FaSquareXTwitter />
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
