import React from "react";
import "../Home/Products/products.css";

const WishCard = ({ wish }) => {
  const { name, imgThumb, price, availableStatus, disCountPrice, _id } = wish;
  return (
    <section className="font-Poppins bg-white customShadow">
      <div className="lg:grid lg:grid-cols-12 justify-between">
        <div className="grid col-span-7">
          <aside className="flex items-center space-x-3">
            <img
              className="lg:w-6/12 w-4/12 bg-green-50"
              src={imgThumb}
              alt=""
            />
            <div>
              <h1 className="font-Poppins font-semibold text-[1.1rem]">
                {name}
              </h1>
              <p className="text-[0.7rem] font-semibold text-green-700 ">
                {availableStatus ? "In Stock" : "Sold Out"}
              </p>

              <div className="flex space-x-3 mt-5">
                <p className="font-semibold">${price}</p>
                <p className="line-through">${disCountPrice}</p>
              </div>

              <div className="lg:hidden md:hidden">
                <button className="buttonCart"> Move To Card</button>

                <button className="delete px-5">
                  <span></span>Delete
                </button>
              </div>
            </div>
          </aside>
        </div>
        <div className="grid col-span-5 hidden lg:block">
          <aside className="py-2 px-3 flex justify-end items-center">
            <div className="flex flex-col items-center space-y-2">
              <button className="buttonCart"> Move To Card</button>

              <button className="delete px-5">
                <span></span>Delete
              </button>
            </div>
          </aside>
        </div>
      </div>
    </section>
  );
};

export default WishCard;
