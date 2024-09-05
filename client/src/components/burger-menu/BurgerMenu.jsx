import React, { useState } from "react";
import "./burgerMenu.css";
import { PlusOutlined, MinusOutlined } from "@ant-design/icons";
import { Input } from "antd";
import { Link } from "react-router-dom";

const { Search } = Input;

const items1 = [
  { direction: "/", title: "Home 1" },
  { direction: "/", title: "Home 2" },
  { direction: "/", title: "Home 3" },
  { direction: "/", title: "Home RTL" },
];

const items2_1 = [
  { direction: "/", title: "Arts & Photography" },
  { direction: "/", title: "Blographies & Memoirs" },
  { direction: "/", title: "Children's Books" },
  { direction: "/", title: "Cook Food And Wine" },
  { direction: "/", title: "History" },
  { direction: "/", title: "Literature & Fiction" },
];

const items2_2 = [
  { direction: "/", title: "Myster And Suspense" },
  { direction: "/", title: "Romance" },
  { direction: "/", title: "Wi-Fy And Fantasy" },
  { direction: "/", title: "Teen And Young Adult" },
  { direction: "/", title: "Black Fashion Zapdram" },
  { direction: "/", title: "Coneco Product Sample" },
];

const items2_3 = [
  { direction: "/", title: "Daltex Product Example" },
  { direction: "/", title: "Donkix Product Sample" },
  { direction: "/", title: "Finity Product Sample" },
  { direction: "/", title: "Fixair Product Sample" },
  { direction: "/", title: "Geous White Bag" },
  { direction: "/", title: "Geous White Dresses" },
];

const items2_4 = [
  { direction: "/", title: "Golddax Product Example" },
  { direction: "/", title: "New Releases" },
  { direction: "/", title: "Best Sellers" },
  { direction: "/", title: "Our Favourites" },
  { direction: "/", title: "Reference Guides" },
  { direction: "/", title: "Faculty Authors" },
];

const items2 = [
  { direction: "/", title: "Children's Books", submenu: items2_1 },
  { direction: "/", title: "Story Books", submenu: items2_2 },
  { direction: "/", title: "History Books", submenu: items2_3 },
  { direction: "/", title: "Cooking Books", submenu: items2_4 },
];

const items3 = [
  { direction: "/", title: "About Us" },
  { direction: "/pages/contact", title: "Contact Us" },
  { direction: "/pages/faq", title: "FAQ Page" },
  { direction: "/pages/admin", title: "Admin Page" },
];

const items4 = [
  { direction: "/", title: "USD - US Dollar" },
  { direction: "/", title: "EUR - Euro" },
  { direction: "/", title: "GBP - British Pound" },
];

const BurgerMenu = () => {
  const [openMenu, setOpenMenu] = useState(null);
  const [openSubMenu, setOpenSubMenu] = useState(null);

  const handleMenuClick = (menu) => {
    if (openMenu === menu) {
      setOpenMenu(null);
      setOpenSubMenu(null);
    } else {
      setOpenMenu(menu);
      setOpenSubMenu(null);
    }
  };

  const handleSubMenuClick = (submenu) => {
    setOpenSubMenu(openSubMenu === submenu ? null : submenu);
  };

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
    <div className="burger-menu-overlay open overflow-y-scroll">
      <div className="flex h-screen">
        <div className="burger-menu open w-full pt-8 bg-gray-400">
          <ul className="flex flex-col pt-4 mx-6 border-black border-b-2 pb-8">
            <li className="flex pb-12 border-black border-b-2">
              <Search placeholder="Search" />
            </li>
            <li className="cursor-pointer flex flex-col">
              <div
                className="flex justify-between pt-6"
                onClick={() => handleMenuClick("home")}
              >
                <span>Home</span>
                {openMenu === "home" ? <MinusOutlined /> : <PlusOutlined />}
              </div>
              <ul className={openMenu === "home" ? "open" : ""}>
                {items1.map((item, index) => (
                  <li key={index} className="ml-4 mt-2">
                    <Link
                      to={item.direction}
                      className="hover:text-[#62ab00] transition-all text-black"
                    >
                      {item.title}
                    </Link>
                  </li>
                ))}
              </ul>
            </li>
            <li className="cursor-pointer flex flex-col">
              <div
                className="flex justify-between"
                onClick={() => handleMenuClick("books")}
              >
                <span>Books</span>
                {openMenu === "books" ? <MinusOutlined /> : <PlusOutlined />}
              </div>
              <ul className={openMenu === "books" ? "open" : ""}>
                {items2.map((item, index) => (
                  <li key={index} className="ml-4 mt-2 text-black">
                    <div
                      className="flex justify-between"
                      onClick={() => handleSubMenuClick(item.title)}
                    >
                      <span>{item.title}</span>
                      {openSubMenu === item.title ? (
                        <MinusOutlined />
                      ) : (
                        <PlusOutlined />
                      )}
                    </div>
                    <ul
                      className={`${openSubMenu === item.title ? "open" : ""}`}
                    >
                      {item.submenu?.map((subItem, subIndex) => (
                        <li key={subIndex} className="ml-4 mt-2">
                          <Link
                            to={subItem.direction}
                            className="hover:text-[#62ab00]"
                          >
                            {subItem.title}
                          </Link>
                        </li>
                      ))}
                    </ul>
                  </li>
                ))}
              </ul>
            </li>
            <li className="cursor-pointer">
              <span className="hover:text-[#62ab00] transition-all">
                Magazines
              </span>
            </li>
            <li className="cursor-pointer">
              <span className="hover:text-[#62ab00] transition-all">
                Textbooks
              </span>
            </li>
            <li className="cursor-pointer">
              <span className="hover:text-[#62ab00] transition-all">
                Recommended
              </span>
            </li>
            <li className="cursor-pointer">
              <Link
                to={"/collections/all"}
                className="hover:text-[#62ab00] transition-all"
              >
                Sale
              </Link>
            </li>
            <li className="cursor-pointer flex flex-col">
              <div
                className="flex justify-between "
                onClick={() => handleMenuClick("pages")}
              >
                <span>Pages</span>
                {openMenu === "pages" ? <MinusOutlined /> : <PlusOutlined />}
              </div>
              <ul className={openMenu === "pages" ? "open" : ""}>
                {items3.map((item, index) => (
                  <li key={index} className="ml-4 mt-2">
                    <Link
                      to={item.direction}
                      className="hover:text-[#62ab00] transition-all"
                    >
                      {item.title}
                    </Link>
                  </li>
                ))}
              </ul>
            </li>
          </ul>
          <ul className="flex flex-col px-6 pt-8">
            <li className="cursor-pointer flex flex-col">
              <div
                className="flex justify-between "
                onClick={() => handleMenuClick("currency")}
              >
                <span>Currency</span>
                {openMenu === "currency" ? <MinusOutlined /> : <PlusOutlined />}
              </div>
              <ul className={openMenu === "currency" ? "open" : ""}>
                {items4.map((item, index) => (
                  <li key={index} className="ml-4 mt-2">
                    {item.title}
                  </li>
                ))}
              </ul>
            </li>
            <li className="cursor-pointer flex flex-col">
              <div
                className="flex justify-between "
                onClick={() => handleMenuClick("account")}
              >
                <span>Account</span>
                {openMenu === "account" ? <MinusOutlined /> : <PlusOutlined />}
              </div>
              <ul className={openMenu === "account" ? "open" : ""}>
                {localStorage.getItem("accessToken") ? (
                  <>
                    <Link to="#" className="cursor-hover hover:text-[#62ab00]">
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
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default BurgerMenu;
