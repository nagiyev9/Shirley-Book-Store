import React, { useEffect, useState } from "react";
import { Button } from "antd";
import "./bookProductPage.css";
import Header from "../../components/header/Header";
import Footer from "../../components/footer/Footer";
import SecondSliderBody from "../../components/book-slider/SecondSliderBody";
import ProductComment from "../../components/product/ProductComment";
import { useParams } from "react-router-dom";
import { getProductBySlug } from "../../services/product-service";

const books = [
  {
    id: 1,
    title: "What Is Life?",
    type: "Type 10",
    originalPrice: 21.0,
    salePrice: 19.0,
    image: "/images/bookCover.webp",
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
];

const ProductDetail = () => {

  const { slug } = useParams();

  const [data, setData] = useState(null);

  useEffect(() => {
    getProductBySlug(slug).then((data) => {
      setData(data);
    });
  }, []);

  return (
    <>
      <Header />

      <div className="breadcrumb flex items-center justify-center mt-4 text-sm text-gray-500 bg-[#F6F6F6] py-12">
        <span>HOME</span> <span className="mx-2">/</span> <span>{data?.name}</span>
      </div>

      <div className="container mx-auto my-10 flex flex-wrap">
        <div className="w-full md:w-1/2 px-4">
          <img
            src={`http://localhost:5000/api/public/images/${data?.image}`}
            alt="Book"
            className="w-full rounded shadow-lg"
          />
        </div>
        <div className="w-full md:w-1/2 px-4">
          <h1 className="text-2xl font-bold my-4">
            {data?.name}
          </h1>
          <div className="text-green-600 text-2xl">${data?.price}</div>
          <p className="my-4">
            Contrary to popular belief, Lorem Ipsum is not simply random text.
            It has roots in a piece of classical Latin literature...
          </p>
          <table className="my-4">
            <tbody>
              <tr>
                <td className="font-bold pr-4">Book Name:</td>
                <td>{data?.name}</td>
              </tr>
              <tr>
                <td className="font-bold pr-4">Author Name:</td>
                <td>{data?.authorName}</td>
              </tr>
              <tr>
                <td className="font-bold pr-4">Product Type:</td>
                <td>{data?.type?.title}</td>
              </tr>
              <tr>
                <td className="font-bold pr-4">Item Publish Date:</td>
                <td>{data?.createdAt || "Unknown"}</td>
              </tr>
            </tbody>
          </table>
          <div className="my-4">
            <div className="mb-2">Size :</div>
            <div>
              {["S", "M", "L", "XL"].map((size) => (
                <Button className="mr-2" key={size}>
                  {size}
                </Button>
              ))}
            </div>
          </div>
          <div className="my-4">
            <div className="mb-2">Color :</div>
            <div>
              {["red", "green", "blue", "yellow", "white"].map((color) => (
                <Button
                  key={color}
                  style={{
                    backgroundColor: color,
                    width: 30,
                    height: 30,
                    margin: "0 5px",
                    borderRadius: "50%",
                    border: "2px solid #ccc",
                  }}
                ></Button>
              ))}
            </div>
          </div>
          <div className="my-4">
            <input
              type="number"
              className="w-16 h-10 text-center border border-gray-300 rounded"
              defaultValue={1}
            />
            <Button className="ml-4 bg-black text-white rounded-none py-6 px-12">
              ADD TO CART
            </Button>
          </div>
          <div>
            <Button className="bg-black text-white rounded-none py-6 px-4">
              BUY IT NOW
            </Button>
          </div>
        </div>
      </div>

      <ProductComment data={data}/>

      <div>
        <h1 className="text-2xl font-bold my-4 text-center">
          You May Also Like
        </h1>
        <SecondSliderBody books={books} />
      </div>

      <Footer />
    </>
  );
};

export default ProductDetail;
