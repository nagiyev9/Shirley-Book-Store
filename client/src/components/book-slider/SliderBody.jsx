import React, { useState } from "react";
import "./sliderBody.css";
import {
  SearchOutlined,
  HeartOutlined,
  SyncOutlined,
  ShoppingCartOutlined,
} from "@ant-design/icons";

const Slider = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const books = [
    {
      id: 1,
      title: "What Is Life?",
      type: "Type 10",
      originalPrice: 21.0,
      salePrice: 19.0,
      image: "/images/bookCover.webp",
      sale: "-10%",
    },
    {
      id: 2,
      title: "Blew In The Wind",
      type: "Type 7",
      price: 29.0,
      image: "/images/bookCover.webp",
    },
    {
      id: 3,
      title: "Pyramid",
      type: "Type 5",
      price: 50.0,
      image: "/images/bookCover.webp",
    },
    {
      id: 4,
      title: "The Golden Memorise",
      type: "Type 2",
      price: 80.0,
      image: "/images/bookCover.webp",
    },
    {
      id: 5,
      title: "The Golden Memorise",
      type: "Type 2",
      price: 80.0,
      image: "/images/bookCover.webp",
    },
    {
      id: 6,
      title: "The Golden Memorise",
      type: "Type 2",
      price: 80.0,
      image: "/images/bookCover.webp",
    },
    {
      id: 7,
      title: "The Golden Memorise",
      type: "Type 2",
      price: 80.0,
      image: "/images/bookCover.webp",
    },
    {
      id: 8,
      title: "The Golden Memorise",
      type: "Type 2",
      price: 80.0,
      image: "/images/bookCover.webp",
    },
  ];

  const handlePrevClick = () => {
    setCurrentIndex(
      (prevIndex) => (prevIndex - 1 + books.length) % books.length
    );
  };

  const handleNextClick = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % books.length);
  };

  const itemsToShow = Math.floor(window.innerWidth / 300); 
  const slideWidth = 100 / itemsToShow;

  return (
    <div className="sliderBody flex items-center justify-center my-6">
      <button onClick={handlePrevClick} className="arrow-button">
        &#8249;
      </button>
      <div className="slider-container">
        <div
          className="slider-track"
          style={{ transform: `translateX(-${currentIndex * slideWidth}%)` }}
        >
          {books.map((book) => (
            <div key={book.id} className="slider-item">
              <div className="icon-overlay">
                <SearchOutlined className="text-xl cursor-pointer" />
                <HeartOutlined className="text-xl cursor-pointer" />
                <SyncOutlined className="text-xl cursor-pointer" />
                <ShoppingCartOutlined className="text-xl cursor-pointer" />
              </div>
              <div>
                <img src={book.image} alt={book.title} className="mx-auto" width={269} height={269} />
              </div>
              {book.sale && <div className="sale-badge">SALE {book.sale}</div>}
              <p className="text-gray-500">{book.type}</p>
              <h3 className="text-lg">{book.title}</h3>
              {book.originalPrice ? (
                <div className="text-gray-600">
                  <span className="line-through">${book.originalPrice}</span>
                  <span className="text-green-600 ml-2">${book.salePrice}</span>
                </div>
              ) : (
                <p className="text-green-600">${book.price}</p>
              )}
            </div>
          ))}
        </div>
      </div>
      <button onClick={handleNextClick} className="arrow-button">
        &#8250;
      </button>
    </div>
  );
};

export default Slider;
