import React from "react";
import { Link } from "react-router-dom";
import "./button.css"

const AdminButtons = () => {
  return (
    <>
      <div className="flex justify-evenly my-10 buttons">
        <Link
          to={"/add/product"}
          className="bg-[#62ab00] text-white px-10 py-6 hover:bg-white hover:text-[#62ab00] border-2 border-[#62ab00] transition-all"
        >
          Add Product
        </Link>
        <Link
          to={"/add/blog"}
          className="bg-[#62ab00] text-white px-10 py-6 hover:bg-white hover:text-[#62ab00] border-2 border-[#62ab00] transition-all"
        >
          Add Blog
        </Link>
        <Link
          to={"/add/product-tag"}
          className="bg-[#62ab00] text-white px-10 py-6 hover:bg-white hover:text-[#62ab00] border-2 border-[#62ab00] transition-all"
        >
          Add Product Tag
        </Link>
        <Link
          to={"/add/blog-tag"}
          className="bg-[#62ab00] text-white px-10 py-6 hover:bg-white hover:text-[#62ab00] border-2 border-[#62ab00] transition-all"
        >
          Add Blog Tag
        </Link>
        <Link
          to={"/add/category"}
          className="bg-[#62ab00] text-white px-10 py-6 hover:bg-white hover:text-[#62ab00] border-2 border-[#62ab00] transition-all"
        >
          Add Category
        </Link>
        <Link
          to={"/add/role"}
          className="bg-[#62ab00] text-white px-10 py-6 hover:bg-white hover:text-[#62ab00] border-2 border-[#62ab00] transition-all"
        >
          Add Role
        </Link>
        <Link
          to={"/add/type"}
          className="bg-[#62ab00] text-white px-10 py-6 hover:bg-white hover:text-[#62ab00] border-2 border-[#62ab00] transition-all"
        >
          Add Type
        </Link>
      </div>
    </>
  );
};

export default AdminButtons;
