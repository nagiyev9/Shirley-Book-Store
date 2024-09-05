import React from "react";
import { Input } from "antd";
import { SearchOutlined } from "@ant-design/icons";

const { Search } = Input;

const HomePageContainer = () => {
  return (
    <>
      <div className="home-page-container">
        <div className="overlay">
          <div className="text-center text-white py-24">
            <h1 className="text-3xl md:text-4xl">Welcome to our Shop</h1>
            <p className="text-3xl md:text-4xl mt-4">
              Search your target book here
            </p>
            <div className="mt-12">
              <Search
                placeholder="Search our store"
                enterButton={<SearchOutlined className="text-3xl" />}
                size="large"
                className="search-bar w-[50vw]"
              />
            </div>
            <p className="mt-12 md:w-[52vw] w-[85vw] flex justify-center items-center">
              Lorem Ipsum is simply dummy text of the printing and typesetting
              industry. Lorem Ipsum has been the industry's standard dummy text
              ever since the 1500s, when an unknown printer took a galley of
              type and scrambled it to make a type specimen book.
            </p>
          </div>
        </div>
      </div>
    </>
  );
};

export default HomePageContainer;
