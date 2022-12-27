import React from "react";
import Card1 from "../../Images/Cart1.jpg";
import Card2 from "../../Images/Cart2.jpg";
const TwoCard = () => {
  return (
    <div className="flex items-center space-x-10 justify-center mb-5">
      <aside className="relative">
        <img src={Card1} alt="" />
        <div className="absolute top-1/3 left-10">
          <p className="uppercase text-[15px] text-[#050505]">Top Products</p>
          <h1 className="text-2xl capitalize tracking-wide font-Prosto mt-2">
            Plants For Healthy
          </h1>
          <div className="overflow-hidden">
            <p className="text-[#306D58] tracking-widest text-sm uppercase  mt-5">
              Shop Now
            </p>
            <p className="border-b w-[83px] pb-0.5 border-[#306D58]"></p>
          </div>
        </div>
      </aside>
      <aside className="relative">
        <img src={Card2} alt="" />
        <div className="absolute top-1/3 left-10">
          <p className="uppercase text-[15px] text-[#050505]">Just For You</p>
          <h1 className="text-2xl capitalize tracking-wide font-Prosto mt-2">
            Indoor plants
          </h1>
          <div className="overflow-hidden">
            <p className="text-[#306D58] tracking-widest text-sm uppercase  mt-5">
              Shop Now
            </p>
            <p className="border-b w-[83px] pb-0.5 border-[#306D58]"></p>
          </div>
        </div>
      </aside>
    </div>
  );
};

export default TwoCard;
