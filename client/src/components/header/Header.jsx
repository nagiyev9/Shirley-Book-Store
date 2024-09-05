import React, { useState, useEffect, useRef } from "react";
import "./header.css";
import {
  SearchOutlined,
  ShoppingCartOutlined,
  SettingOutlined,
  MenuOutlined,
} from "@ant-design/icons";
import { Link } from "react-router-dom";
import ShortDropdown from "../dropdown-menu-items/ShortDropdown";
import LongDropdown from "../dropdown-menu-items/LongDropdown";
import { Dropdown } from "antd";
import SettingDropdown from "../dropdown-menu-items/SettingDropdown";
import BasketDropdown from "../basket-dropdown/BasketDropdown";
import BurgerMenu from "../burger-menu/BurgerMenu";

const items1 = [
  { direction: "/", title: "Home 1" },
  { direction: "/", title: "Home 2" },
  { direction: "/", title: "Home 3" },
  { direction: "/", title: "Home RTL" },
];

const items3 = [
  { direction: "/", title: "About Us" },
  { direction: "/pages/contact", title: "Contact Us" },
  { direction: "/pages/faq", title: "FAQ Page" },
];

const items4 = [
  { direction: "/", title: "USD - US Dollar" },
  { direction: "/", title: "EUR - Euro" },
  { direction: "/", title: "GBP - British Pound" },
];

const Header = () => {
  const [isBasketOpen, setIsBasketOpen] = useState(false);
  const [isBurgerOpen, setIsBurgerOpen] = useState(false);
  const [isSticky, setIsSticky] = useState(false);
  const basketRef = useRef(null);
  const burgerRef = useRef(null);

  const toggleBasket = () => {
    setIsBasketOpen(!isBasketOpen);
  };

  const handleClickOutside = (event) => {
    if (basketRef.current && !basketRef.current.contains(event.target)) {
      setIsBasketOpen(false);
    }
    if (burgerRef.current && !burgerRef.current.contains(event.target)) {
      setIsBurgerOpen(false);
    }
  };

  const toggleBurger = () => {
    setIsBurgerOpen(!isBurgerOpen);
  };

  const handleScroll = () => {
    if (window.scrollY > 100) {
      setIsSticky(true);
    } else {
      setIsSticky(false);
    }
  };

  useEffect(() => {
    if (isBasketOpen || isBurgerOpen) {
      document.addEventListener("mousedown", handleClickOutside);
    } else {
      document.removeEventListener("mousedown", handleClickOutside);
    }

    window.addEventListener("scroll", handleScroll);

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
      window.removeEventListener("scroll", handleScroll);
    };
  }, [isBasketOpen, isBurgerOpen]);

  return (
    <div
      className={`header ${
        isSticky ? "sticky" : ""
      } flex items-center justify-evenly h-[110px] px-6`}
    >
      <div className="header-left flex items-center gap-8">
        <div>
          <img src="/images/logoshirley_300x.webp" alt="Logo" />
        </div>

        <div className="flex header-left-part2">
          <ul className="flex gap-8 h-max items-center pt-2">
            <li className="cursor-pointer">
              <ShortDropdown title="Home" items={items1} />
            </li>
            <li className="cursor-pointer">
              <LongDropdown />
            </li>
            <li className="cursor-pointer">
              <Link to={"/blogs/news"} className="hover:text-[#62ab00] transition-all">
                Magazines
              </Link>
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
              <Link to={"/collections/all"} className="hover:text-[#62ab00] transition-all">Sale</Link>
            </li>
            <li className="cursor-pointer">
              <ShortDropdown title="Pages" items={items3} />
            </li>
          </ul>
        </div>

        <div className="flex gap-6 responsive-header">
          <div
            className="cursor-pointer pt-6 transition-all flex gap-2"
            onClick={toggleBasket}
          >
            <div>
              <ShoppingCartOutlined className="text-xl" />
            </div>

            <div>
              <span className="transition-all">$0.00</span>
            </div>
          </div>

          <div className="header-burger-menu pt-6">
            <MenuOutlined
              className="text-2xl font-bold cursor-pointer"
              onClick={toggleBurger}
            />
          </div>
        </div>
      </div>

      <div className="header-right relative flex items-center gap-6">
        <ul className="flex gap-6 pt-2 items-center">
          <li className="cursor-pointer">
            <SearchOutlined className="text-xl" />
          </li>
          <li
            className="cursor-pointer flex gap-1 transition-all"
            onClick={toggleBasket}
          >
            <div>
              <ShoppingCartOutlined className="text-xl" />
            </div>
            <div>
              <span className="transition-all">$0.00</span>
            </div>
          </li>
          <li className="cursor-pointer">
            <Dropdown
              overlay={<SettingDropdown title="Currency" items={items4} />}
              placement="bottomRight"
              trigger={["click"]}
            >
              <SettingOutlined className="text-xl" />
            </Dropdown>
          </li>
        </ul>

        {isBasketOpen && (
          <div
            className={`basket-dropdown-overlay ${isBasketOpen ? "open" : ""}`}
            ref={basketRef}
          >
            <BasketDropdown toggleBasket={toggleBasket} />
          </div>
        )}
      </div>

      {isBasketOpen && (
        <div
          className={`basket-dropdown-overlay ${
            isBasketOpen ? "open" : ""
          } basket-2`}
          ref={basketRef}
        >
          <BasketDropdown toggleBasket={toggleBasket} />
        </div>
      )}

      {isBurgerOpen && (
        <div
          className={`burger-menu-overlay ${isBurgerOpen ? "open" : ""}`}
          ref={burgerRef}
        >
          <BurgerMenu toggleBurger={toggleBurger} />
        </div>
      )}
    </div>
  );
};

export default Header;
