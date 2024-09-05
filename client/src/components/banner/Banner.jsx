import React from "react";
import "./banner.css";
import { Link } from "react-router-dom";

const Banner = () => {
  return (
    <>
      <div className="banners flex justify-center gap-8">
        <Link to={"/"} className="banner1 text-white p-12">
          <div className="">
            <span className="text-xl">$50.00</span>
            <h1 className="text-3xl my-2">Praise for the Nigh Child</h1>
            <Link to={"/"} className="text-xl underline"><span className="showNow">Shop Now</span></Link>
          </div>
        </Link> 
        <Link to={"/"} className="banner2 text-white p-12">
          <div className="">
            <span className="text-xl">Speacial Offer</span>
            <h1 className="text-3xl my-2">Buy 3. Get 1 Free</h1>
            <Link to={"/"} className="text-xl underline"><span className="showNow">Shop Now</span></Link>
          </div>
        </Link>
      </div>
    </>
  );
};

export default Banner;
