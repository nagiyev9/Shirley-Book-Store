import React from "react";
import { CloseCircleOutlined } from "@ant-design/icons";
import './style.css'

const BasketDropdown = ({ toggleBasket }) => {
  return (
    <div className="w-[320px] bg-white">
      <div className="dropdown-content px-6 py-4">
        <div className="dropdown-group">
          <div className="flex justify-between border-b-2 border-gray-500 pt-4 pb-7">
            <div className="">
              <h1 className="text-base">
                Shopping Card
              </h1>
            </div>
            <div className="flex items-center">
              <CloseCircleOutlined className="cursor-pointer" onClick={toggleBasket}/>
            </div>
          </div>
          <ul className="flex flex-col gap-4 py-5">
            <li>Your basket is empty</li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default BasketDropdown;
