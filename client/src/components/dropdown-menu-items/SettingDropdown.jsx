import React from "react";
import { Link } from "react-router-dom";

const SettingDropdown = ({ title, items }) => {

  const handleLogout = () => {
    localStorage.removeItem("accessToken");
    localStorage.removeItem("refreshToken");
    localStorage.removeItem("id");
    localStorage.removeItem("firstName");
    localStorage.removeItem("lastName");
    localStorage.removeItem("email");
    localStorage.removeItem("role");
    window.location.href = "/account/login";
  };

  return (
    <div className="w-[320px] bg-white">
      <div className="dropdown-content px-6 py-4">
        <div className="dropdown-group">
          <h1 className="text-base py-2 border-b-2 border-gray-500">{title}</h1>
          <ul className="flex flex-col gap-4 py-5">
            {items.map((item, index) => (
              <Link
                to={item.direction}
                key={index}
                className="hover:text-[#62ab00]"
              >
                <li className="text-base">{item.title}</li>
              </Link>
            ))}
          </ul>
        </div>

        <div>
          <h1 className="text-base py-2 border-b-2 border-gray-500">Account</h1>
          <ul className="flex flex-col gap-4 py-5">
            {localStorage.getItem("accessToken") ? (
              <>
                <Link
                  to="#"
                  className="cursor-hover hover:text-[#62ab00]"
                >
                  <li className="text-base">Profile</li>
                </Link>
                <li
                  className="cursor-pointer hover:text-[#62ab00]"
                  onClick={handleLogout}
                >
                  <li className="text-base">Logout</li>
                </li>
              </>
            ) : (
              <>
                <Link
                  to="/account/login"
                  className="cursor-hover hover:text-[#62ab00]"
                >
                  <li className="text-base">Login</li>
                </Link>
                <Link
                  to="/account/register"
                  className="cursor-hover hover:text-[#62ab00]"
                >
                  <li className="text-base">Register</li>
                </Link>
              </>
            )}
          </ul>
        </div>
      </div>
    </div>
  );
};

export default SettingDropdown;
