import React from "react";
import "./slider.css";
import SliderBody from "./SliderBody";
import { Link } from "react-router-dom";

const Slider = ({ title }) => {
  return (
    <>
      <div className="slider-header flex justify-between mx-24">
        <div className="slider-header-p1">
          <h1 className="text-2xl">{title}</h1>
        </div>

        <div className="flex gap-4 slider-header-p2">
          <div className="text-2xl">
            <span className="border-r-2 border-black px-4">00 Days</span>
            <span className="border-r-2 border-black px-4">00 Hours</span>
            <span className="border-r-2 border-black px-4">00 Min</span>
            <span className="px-4">00 Sec</span>
          </div>
          
          <div className="text-2xl hover:text-[#62AB00] transition-all slider-header-p2">
            <Link to={"/"}>View More</Link>
          </div>
        </div>
      </div>
      <SliderBody />
    </>
  );
};

export default Slider;
