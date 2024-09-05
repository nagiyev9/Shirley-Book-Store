import React from "react";
import {
  SearchOutlined,
  HeartOutlined,
  SyncOutlined,
  ShoppingCartOutlined,
} from "@ant-design/icons";

const SecondSliderBody = ({ books, classname }) => {

  return (
    <div className="sliderBody flex items-center justify-center my-6">
      <div className="slider-container">
        <div className={`slider-track flex gap-4 ${classname}`}>
          {books.map((book) => ( 
            <div key={book.id} className="slider-item">
              <div className="icon-overlay">
                <SearchOutlined className="text-xl cursor-pointer" />
                <HeartOutlined className="text-xl cursor-pointer" />
                <SyncOutlined className="text-xl cursor-pointer" />
                <ShoppingCartOutlined className="text-xl cursor-pointer" />
              </div>
              <div>
                <img
                  src={book.image}
                  alt={book.title}
                  className="mx-auto"
                  width={269}
                  height={269}
                />
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
    </div>
  );
};

export default SecondSliderBody;
