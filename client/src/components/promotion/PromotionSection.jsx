import React, { useState } from "react";
import "./style.css";

const PromotionSection = () => {
  const images = ["/images/serisbook2.webp", "/images/serisbook1.webp"];
  const [currentIndex, setCurrentIndex] = useState(0);

  const handleNextImage = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
  };

  const handlePreviousImage = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? images.length - 1 : prevIndex - 1
    );
  };

  return (
    <div
      className="bg-cover bg-center h-screen my-12 promotion-container"
      style={{ backgroundImage: "url('/images/banner03.webp')" }}
    >
      {/* Wrapper with background color spanning both text and image */}
      <div className="bg-[#19222d] opacity-90 w-full h-full flex flex-col md:flex-row items-center justify-between p-6 md:p-12 lg:p-16 overflow-hidden">
        {/* Text content */}
        <div className="text-content text-white w-full md:w-2/3 lg:w-1/2">
          <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold">
            Start a new series - Up to 50% off
          </h1>
          <p className="mt-4 md:pr-24 lg:pr-52 text-sm md:text-base">
            We have the weekly promotion, keep up with us and you’ll get the best
            deal to get your loved stuff. Our design reflects the purity of
            contemporary forms for enduring appeal.
          </p>

          <div className="flex justify-start gap-2 md:gap-4 lg:gap-8 mt-6">
            <div className="text-center border-x-2 md:border-x-4 border-white rounded-sm px-2 md:px-4 lg:px-6">
              <p className="text-2xl md:text-4xl lg:text-6xl">00</p>
              <p className="text-xs md:text-sm lg:text-lg">Days</p>
            </div>
            <div className="text-center border-x-2 md:border-x-4 border-white rounded-sm px-2 md:px-4 lg:px-6">
              <p className="text-2xl md:text-4xl lg:text-6xl">00</p>
              <p className="text-xs md:text-sm lg:text-lg">Hours</p>
            </div>
            <div className="text-center border-x-2 md:border-x-4 border-white rounded-sm px-2 md:px-4 lg:px-6">
              <p className="text-2xl md:text-4xl lg:text-6xl">00</p>
              <p className="text-xs md:text-sm lg:text-lg">Min</p>
            </div>
            <div className="text-center border-x-2 md:border-x-4 border-white rounded-sm px-2 md:px-4 lg:px-6">
              <p className="text-2xl md:text-4xl lg:text-6xl">00</p>
              <p className="text-xs md:text-sm lg:text-lg">Sec</p>
            </div>
          </div>
          <div>
            <button className="mt-8 px-6 py-2 md:px-8 md:py-3 bg-transparent border border-white text-white font-bold rounded-sm hover:bg-[#62AB00] hover:text-white transition hover:bg-opacity-100 text-sm md:text-base">
              SHOP NOW
            </button>
          </div>
        </div>

        {/* Image controls */}
        <div className="image-controls flex justify-center items-center mt-6 md:mt-0 md:w-1/3 lg:w-1/4">
          <button
            className="left-arrow mr-2 md:mr-4"
            onClick={handlePreviousImage}
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 md:h-6 w-5 md:w-6 text-white hover:text-gray-300 transition"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M15 19l-7-7 7-7"
              />
            </svg>
          </button>

          <img
            src={images[currentIndex]}
            alt="Child Care Book"
            className="max-w-[200px] md:max-w-xs lg:max-w-sm serisbook"
          />

          <button className="right-arrow ml-2 md:ml-4" onClick={handleNextImage}>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 md:h-6 w-5 md:w-6 text-white hover:text-gray-300 transition"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M9 5l7 7-7 7"
              />
            </svg>
          </button>
        </div>
      </div>
    </div>
  );
};

export default PromotionSection;
