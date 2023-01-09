import React from "react";
import { IconContext } from "react-icons";
import { IoAddOutline, IoRemoveSharp, IoTrashOutline } from "react-icons/io5";
import "./OrderCard.css";
const OrdersCard = ({ order, orderProductsDelete }) => {
  const { name, imgThumb, price, availableStatus, disCountPrice, _id } = order;
  return (
    <section className="font-Poppins extraBorderRemove border-b pb-7 ">
      <div className="flex justify-between">
        <aside className="flex items-center space-x-3">
          <img className="w-2/12 bg-green-50" src={imgThumb} alt="" />
          <div>
            <h1 className="font-Poppins font-semibold">{name}</h1>
            <p className="text-[0.7rem] font-semibold text-green-700 ">
              {availableStatus ? "In Stock" : "Sold Out"}
            </p>

            <div className="flex space-x-3 mt-5">
              <aside className="bg-[#EFEFEF] cursor-pointer p-0.5 rounded-full">
                <IconContext.Provider value={{ size: 20 }}>
                  <IoRemoveSharp />
                </IconContext.Provider>
              </aside>
              <p>4</p>
              <aside className="bg-gray-50 p-0.5 rounded-full cursor-pointer">
                <IconContext.Provider value={{ size: 20 }}>
                  <IoAddOutline />
                </IconContext.Provider>
              </aside>
            </div>
          </div>
        </aside>
        <aside className="flex flex-col items-center justify-between">
          <div
            className="cursor-pointer"
            onClick={() => orderProductsDelete(_id)}
          >
            <IconContext.Provider value={{ color: "gray", size: 20 }}>
              <IoTrashOutline />
            </IconContext.Provider>
          </div>
          <div className="flex space-x-3 ">
            <p className="font-semibold">${price}</p>
            <p className="line-through">${disCountPrice}</p>
          </div>
        </aside>
      </div>
    </section>
  );
};

export default OrdersCard;
