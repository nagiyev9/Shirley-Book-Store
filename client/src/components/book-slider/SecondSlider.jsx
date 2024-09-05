import React from "react";
import "./secondSlider.css";
import { Link } from "react-router-dom";
import SecondSliderBody from "./SecondSliderBody";

const SecondSlider = ({ books }) => {
  return (
    <>
      <div className="slider-header flex justify-between mx-36 my-4">
        <div className="slider-header-p1 flex items-center">
          <h1 className="text-2xl">Most Popular Book</h1>
        </div>

        <div className="flex gap-4 slider-header-p2">
          <Link className="bg-[#62AB00] text-white rounded-none px-6 py-3 text-sm">
                TOP RATED BOOKS
          </Link>
          <Link className="bg-[#F1F1F1] rounded-none px-6 py-3 text-sm">
                BEST SELLING BOOKS 
          </Link>
        </div>
      </div>

      <SecondSliderBody books={books} classname={" "}/>
    </>
  );
};

export default SecondSlider;
