import React, { useState, useRef } from "react";
import { Link } from "react-router-dom";
import "./dropdown.css";

const ShortDropdown = ({ title, items }) => {
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
      className="relative short-dropdown"
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
      ref={dropdownRef}
    >
      <span className="hover:text-[#62ab00] transition-all">{title}</span>
      {isOpen && (
        <ul className="absolute mt-2 bg-white shadow-lg rounded-md short-dropdown-content">
          {items.map((item, index) => (
            <li key={index} className="short-dropdown-item">
              <Link
                to={item.direction}
                className="block px-4 py-2 text-black hover:text-[#62ab00]"
              >
                {item.title}
              </Link>
            </li>
          ))}
          {localStorage.getItem("accessToken") &&
          localStorage.getItem("role") === "66cf7b4a6d1af1a2de4a53c0" ? (
            <li className="short-dropdown-item">
              <Link
                to="/pages/admin"
                className="block px-4 pt-2 pb-4 text-black hover:text-[#62ab00]"
              >
                Admin
              </Link>
            </li>
          ) : null}
        </ul>
      )}
    </div>
  );
};

export default ShortDropdown;
