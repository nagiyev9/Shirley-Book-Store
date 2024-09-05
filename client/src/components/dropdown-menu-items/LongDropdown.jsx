import React, { useState, useRef } from "react";
import "./longDropdown.css";

const LongDropdown = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [timeoutId, setTimeoutId] = useState(null);
  const dropdownRef = useRef(null);

  const handleMouseEnter = () => {
    if (timeoutId) {
      clearTimeout(timeoutId);
    }
    setIsOpen(true);
  };

  const handleMouseLeave = () => {
    const id = setTimeout(() => {
      setIsOpen(false);
    }, 150);
    setTimeoutId(id);
  };

  return (
    <div
      className="relative long-dropdown"
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
      ref={dropdownRef}
    >
      <span className="hover:text-[#62ab00] transition-all">Books</span>
      {isOpen && (
        <div className="long-dropdown-content p-4">
          <div className="long-dropdown-group">
            <h1 className="border-b-2 border-gray-400 pb-4">Children's Books</h1>
            <ul className="flex flex-col gap-3">
              <li className="mt-4">Arts & Photography</li>
              <li>Biographies & Memoirs</li>
              <li>Children's Books</li>
              <li>Cookbook. Food & Wine</li>
              <li>History</li>
              <li>Literature & Fiction</li>
            </ul>
          </div>
          <div className="long-dropdown-group">
            <h1 className="border-b-2 border-gray-400 pb-4">Story Book</h1>
            <ul className="flex flex-col gap-3">
              <li className="mt-4">Mystery & Suspense</li>
              <li>Romance</li>
              <li>Wi-fy & Fantasy</li>
              <li>Teen & Young Adult</li>
              <li>Black Fashion Zapdram</li>
              <li>Coneco Product sample</li>
            </ul>
          </div>
          <div className="long-dropdown-group">
            <h1 className="border-b-2 border-gray-400 pb-4">History Books</h1>
            <ul className="flex flex-col gap-3">
              <li className="mt-4">Daltex Product Example</li>
              <li>Donkix Product Sample</li>
              <li>Finity Product Sample</li>
              <li>Fixair Product Sample</li>
              <li>Geous White Bag</li>
              <li>Geous White Dresses</li>
            </ul>
          </div>
          <div className="long-dropdown-group">
            <h1 className="border-b-2 border-gray-400 pb-4">Cooking book</h1>
            <ul className="flex flex-col gap-3">
              <li className="mt-4">Golddax Product Example</li>
              <li>New Releases</li>
              <li>Best Sellers</li>
              <li>Our Favourites</li>
              <li>Reference Guides</li>
              <li>Faculty Authors</li>
            </ul>
          </div>
        </div>
      )}
    </div>
  );
};

export default LongDropdown;
