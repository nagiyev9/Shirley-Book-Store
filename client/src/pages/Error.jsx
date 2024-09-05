import React from "react";
import Header from "../components/header/Header";
import Footer from "../components/footer/Footer";
import { Link } from "react-router-dom";
import { ArrowLeftOutlined } from "@ant-design/icons";

const Error = () => {
  return (
    <>
      <Header />
      <div className="text-center flex flex-col gap-5 bg-gray-200 py-12">
        <h1 className="text-5xl">Error 404</h1>
        <p className="text-3xl">Page Not Found</p>
        <Link
          to="/"
          className="text-black hover:text-[#62ab00] transition-all text-2xl flex justify-center items-center gap-2"
        >
          <ArrowLeftOutlined />
          <p>Back To Home</p>
        </Link>
      </div>
      <Footer />
    </>
  );
};

export default Error;
