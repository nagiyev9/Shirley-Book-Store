import React from "react";
import { Carousel } from "antd";
import "./carousel.css";

const CustomCarousel = () => {
  return (
    <div
      className="relative bg-cover bg-center h-[500px] text-white my-12"
      style={{ backgroundImage: "url('/images/banner03.webp')" }}
    >
      <Carousel autoplay dots={false} draggable className="cursor-grab">
        <div className="carousel-item">
          <div className="contentStyle select-none">
            <img
              className="rounded-full w-[100px] h-[100px] mx-auto"
              src="/images/user01.avif"
              alt="Profile"
            />
            <p className="mt-4 md:text-lg text-sm font-medium px-20">
              Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
              enim ad minim veniam, quis nostrud exercitation ullamco laboris
              nisi ut aliquip ex ea commodo consequat Duis aute irure dolor in
              reprehenderit.
            </p>
            <p className="mt-4 font-bold">HESTER PERKINS</p>
          </div>
        </div>
        <div className="carousel-item">
          <div className="contentStyle select-none">
            <img
              className="rounded-full w-[100px] h-[100px] mx-auto"
              src="/images/user02.webp"
              alt="Profile"
            />
            <p className="mt-4 md:text-lg text-sm font-medium px-20">
              Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
              enim ad minim veniam, quis nostrud exercitation ullamco laboris
              nisi ut aliquip ex ea commodo consequat Duis aute irure dolor in
              reprehenderit.
            </p>
            <p className="mt-4 font-bold">HESTER PERKINS</p>
          </div>
        </div>
        <div className="carousel-item">
          <div className="contentStyle select-none">
            <img
              className="rounded-full w-[100px] h-[100px] mx-auto"
              src="/images/user03.webp"
              alt="Profile"
            />
            <p className="mt-4 md:text-lg text-sm font-medium px-20">
              Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
              enim ad minim veniam, quis nostrud exercitation ullamco laboris
              nisi ut aliquip ex ea commodo consequat Duis aute irure dolor in
              reprehenderit.
            </p>
            <p className="mt-4 font-bold">NICOLE VALDEZ</p>
          </div>
        </div>
      </Carousel>
    </div>
  );
};

export default CustomCarousel;
