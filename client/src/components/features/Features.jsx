import React from "react";

const Features = () => {
  return (
    <>
      <div className="flex justify-evenly flex-wrap my-12 ml-8">
        <div className="flex my-4 icon-hover-vibration">
          <div>
            <img src="/images/icon01_small.webp" alt="" width={"80%"} />
          </div>
          <div className="flex flex-col w-4/6">
            <b>Quick Delivery</b>
            <span>Most products are free shipping.</span>
          </div>
        </div>
        <div className="flex my-4 icon-hover-vibration">
          <div>
            <img src="/images/icon02_small.avif" alt="" width={"80%"} />
          </div>
          <div className="flex flex-col w-4/6">
            <b>Pay with Easy</b>
            <span>Most products are free shipping.</span>
          </div>
        </div>
        <div className="flex my-4 icon-hover-vibration">
          <div>
            <img src="/images/icon03_small.avif" alt="" width={"80%"} />
          </div>
          <div className="flex flex-col w-4/6">
            <b>Best Deal</b>
            <span>Most products are free shipping.</span>
          </div>
        </div>
        <div className="flex my-4 icon-hover-vibration">
          <div>
            <img src="/images/icon04_small.avif" alt="" width={"80%"} />
          </div>
          <div className="flex flex-col w-4/6">
            <b>Secured Payment</b>
            <span>Most products are free shipping.</span>
          </div>
        </div>
      </div>
    </>
  );
};

export default Features;
