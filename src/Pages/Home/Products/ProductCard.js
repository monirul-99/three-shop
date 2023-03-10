import React, { useContext } from "react";
import { IconContext } from "react-icons";
import { IoCartOutline, IoEyeOutline, IoHeartOutline } from "react-icons/io5";
import { Link } from "react-router-dom";
import { AuthContext } from "../../../Context/userContext";
import Discount from "../../Images/discount.png";
import "./products.css";

const ProductCard = ({ product }) => {
  const { Orders, WishListFunc } = useContext(AuthContext);
  const { name, imgThumb, price, disCountPrice, _id, extraTax } = product;
  return (
    <div
      className={`relative card lg:w-[225px] border border-dashed rounded-sm  hover:border-none hover:rounded-md cur transition-all duration-400 active:scale-[0.94] cursor-pointer`}
    >
      <ul className="card-social flex flex-col items-center space-y-3 bg-white w-10 rounded-full customShadow">
        <li
          onClick={() => Orders(product)}
          className="card-social__item mt-2 p-1 cart"
        >
          <IconContext.Provider value={{ size: 18 }}>
            <IoCartOutline />
          </IconContext.Provider>
        </li>
        <li
          onClick={() => WishListFunc(product)}
          className="card-social__item cart p-1"
        >
          <IconContext.Provider value={{ size: 18 }}>
            <IoHeartOutline />
          </IconContext.Provider>
        </li>
        <Link
          to={`/products-details/${_id}`}
          className="card-social__item cart p-1"
        >
          <IconContext.Provider value={{ size: 18 }}>
            <IoEyeOutline />
          </IconContext.Provider>
        </Link>
      </ul>
      <aside>
        <img className="w-[225px]" src={imgThumb} alt="" />
      </aside>
      <aside className="flex flex-col justify-center items-center py-3">
        <div className="flex items-center">
          <svg
            aria-hidden="true"
            className="w-4 h-4 text-yellow-400"
            fill="currentColor"
            viewBox="0 0 20 20"
            xmlns="http://www.w3.org/2000/svg"
          >
            <title>First star</title>
            <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"></path>
          </svg>
          <svg
            aria-hidden="true"
            className="w-4 h-4 text-yellow-400"
            fill="currentColor"
            viewBox="0 0 20 20"
            xmlns="http://www.w3.org/2000/svg"
          >
            <title>Second star</title>
            <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"></path>
          </svg>
          <svg
            aria-hidden="true"
            className="w-4 h-4 text-yellow-400"
            fill="currentColor"
            viewBox="0 0 20 20"
            xmlns="http://www.w3.org/2000/svg"
          >
            <title>Third star</title>
            <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"></path>
          </svg>
          <svg
            aria-hidden="true"
            className="w-4 h-4 text-yellow-400"
            fill="currentColor"
            viewBox="0 0 20 20"
            xmlns="http://www.w3.org/2000/svg"
          >
            <title>Fourth star</title>
            <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"></path>
          </svg>
          <svg
            aria-hidden="true"
            className="w-4 h-4 text-gray-300 dark:text-gray-500"
            fill="currentColor"
            viewBox="0 0 20 20"
            xmlns="http://www.w3.org/2000/svg"
          >
            <title>Fifth star</title>
            <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"></path>
          </svg>
        </div>
        <h2 className="font-semibold capitalize">{name}</h2>

        <div className="flex items-center space-x-3 font-Poppins">
          <p className="text-[15px]">${price}</p>
          <p className="line-through text-[15px]">${disCountPrice}</p>
        </div>
      </aside>

      <img className="absolute top-1 right-0 w-16" src={Discount} alt="" />
      <p className="absolute top-1.5 -right-6 w-16 font-Poppins text-white text-[0.8rem]">
        {extraTax}%
      </p>
    </div>
  );
};

export default ProductCard;
