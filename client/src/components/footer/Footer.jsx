import React from "react";
import { Input, Button } from "antd";
import {
  SendOutlined,
} from "@ant-design/icons";
import "./footer.css";

const Footer = () => {
  return (
    <div className="footer-container bg-white pt-10">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-4 gap-8 text-center md:text-left">
        <div className="footer-newsletter">
          <h2 className="text-2xl font-bold mb-4 flex items-center justify-center md:justify-start">
            <img
              src="/images/logoshirley_300x.webp"
              alt="Shirley Logo"
              className="mr-2"
            />
          </h2>
          <p className="mb-2">
            Subscribe to our newsletter, Enter your email address
          </p>
          <div className="newsletter-input flex">
            <Input
              placeholder="email@example.com"
              className="rounded-none"
              style={{ borderRight: "none" }}
            />
            <Button
              type="primary"
              icon={<SendOutlined />}
              className="send-button h-[50px] bg-black hover:bg-[#62AB00] rounded-none"
            />
          </div>
        </div>

        <div>
          <h3 className="text-lg font-semibold mb-2">Account</h3>
          <ul>
            <li className="mb-3">
              <a href="#login" className="hover:text-[#62AB00] transition-all">
                Login
              </a>
            </li>
            <li className="mb-3">
              <a href="#register" className="hover:text-[#62AB00] transition-all">
                Register
              </a>
            </li>
            <li className="mb-3">
              <a href="#account" className="hover:text-[#62AB00] transition-all">
                My Account
              </a>
            </li>
          </ul>
        </div>

        <div>
          <h3 className="text-lg font-semibold mb-2">Footer Menu</h3>
          <ul>
            <li className="mb-3">
              <a href="#search" className="hover:text-[#62AB00] transition-all">
                Search
              </a>
            </li>
            <li className="mb-3">
              <a href="#contact" className="hover:text-[#62AB00] transition-all">
                Contact Us
              </a>
            </li>
            <li className="mb-3">
              <a href="#shop" className="hover:text-[#62AB00] transition-all">
                Shop
              </a>
            </li>
          </ul>
        </div>

        <div>
          <h3 className="text-lg font-semibold mb-2">About Store</h3>
          <p>No. 96, Jecica City, NJ 07305, New York, USA</p>
          <p>Phone: 123-456-7890</p>
          <p>Email: support@example.com</p>
          <p>Open Hours: MN - ST: 8:00AM - 9:00PM</p>
        </div>
      </div>

      <div className="flex justify-between items-center mx-12 my-8 last-footer">
        <div className="social-media flex justify-center space-x-6">
          <a
            href="#facebook"
            className="text-gray-500 hover:text-[#62AB00] transition-all"
          >
            <span className="text-sm">Facebook</span>
          </a>
          <a
            href="#twitter"
            className="text-gray-500 hover:text-[#62AB00] transition-all"
          >
            <span className="text-sm">Twitter</span>
          </a>
          <a
            href="#linkedin"
            className="text-gray-500 hover:text-[#62AB00] transition-all"
          >
            <span className="text-sm">Linkedin</span>
          </a>
          <a
            href="#instagram"
            className="text-gray-500 hover:text-[#62AB00] transition-all"
          >
            <span className="text-sm">Instagram</span>
          </a>
        </div>

        <div className="text-center text-gray-500">
          <p className="text-sm">Copyright © All Right Reserved</p>
        </div>

        <div className="payment-methods w-64">
          <img
            src="https://shirley-demo.myshopify.com/cdn/shop/files/1_large.png?v=1613552905"
            alt="Payment Methods"
            height={50}
          />
        </div>
      </div>
    </div>
  );
};

export default Footer;
