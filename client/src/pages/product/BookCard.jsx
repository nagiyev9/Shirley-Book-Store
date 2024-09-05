import React, { useEffect, useState } from "react";
import {
  SearchOutlined,
  HeartOutlined,
  SyncOutlined,
  ShoppingCartOutlined,
} from "@ant-design/icons";
import Header from "../../components/header/Header";
import Footer from "../../components/footer/Footer";
import ProductFilter from "../../components/product/ProductFilter";
import { Link } from "react-router-dom";
import { getAllProducts } from "../../services/product-service";

const bookss = [
  {
    id: 1,
    title: "What Is Life?",
    type: "Type 10",
    originalPrice: 21.0,
    salePrice: 19.0,
    image: "/images/bookCover.webp",
  },
];

const BookCard = () => {

  const [books, setBooks] = useState([]);

  useEffect(() => {
    getAllProducts().then((data) => {
      setBooks(data);
    });
  }, []);

  return (
    <>
      <Header />
      <div className="flex md:flex-nowrap flex-wrap gap-8">
        <ProductFilter newClass={"md:ml-24 md:px-0 px-12 mt-12"} />
        <div className="my-6">
          <div className="slider-container">
            <div className={`slider-track flex gap-4 flex-wrap justify-center`}>
              {books.map((book) => (
                <Link to={`/collection/detail/${book.slug}`} key={book.id} className="slider-item">
                  <div className="icon-overlay">
                    <SearchOutlined className="text-xl cursor-pointer" />
                    <HeartOutlined className="text-xl cursor-pointer" />
                    <SyncOutlined className="text-xl cursor-pointer" />
                    <ShoppingCartOutlined className="text-xl cursor-pointer" />
                  </div>
                  <div>
                    <img
                      src={`http://localhost:5000/api/public/images/${book.image}`}
                      alt={book.title}
                      className="mx-auto"
                      width={269}
                      height={269}
                    />
                  </div>
                  {book.sale && (
                    <div className="sale-badge">SALE {book.sale}</div>
                  )}
                  <p className="text-gray-500">{book.type.title}</p>
                  <h3 className="text-lg">{book.name}</h3>
                  {book.originalPrice ? (
                    <div className="text-gray-600">
                      <span className="line-through">
                        ${book.originalPrice}
                      </span>
                      <span className="text-green-600 ml-2">
                        ${book.salePrice}
                      </span>
                    </div>
                  ) : (
                    <p className="text-green-600">${book.price}</p>
                  )}
                </Link>
              ))}
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default BookCard;
