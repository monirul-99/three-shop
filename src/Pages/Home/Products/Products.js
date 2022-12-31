import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import ProductCard from "./ProductCard";
// import Flower from "../../Images/Flower.png";
// import TwoFlower from "../../Images/Two Flower.png";
// import { IoChevronBackOutline, IoChevronForward } from "react-icons/io5";
// import { IconContext } from "react-icons";

const Products = () => {
  const [productData, setProductData] = useState([]);
  useEffect(() => {
    fetch("data.json")
      .then((res) => res.json())
      .then((data) => setProductData(data));
  }, []);
  return (
    <div className="container mx-auto py-24">
      <div className="flex flex-col items-center">
        <h1 className="uppercase text-xl font-Prosto tracking-wide text-center">
          Popular Products
        </h1>
      </div>

      <aside className="flex items-center justify-center space-x-5 py-7">
        <Link>
          <span className="border-b py-2">Outdoor Plants</span>
        </Link>
        <Link>
          <span className="border-b py-2">Families plants</span>
        </Link>
        <Link>
          {" "}
          <span className="border-b py-2">Indoor Plants</span>
        </Link>
      </aside>

      {/* <div className="flex justify-between mt-10">
        <h4 className="font-Prosto text-[16px]">New Products</h4>
        <aside className="flex items-center space-x-3">
          <div className="bg-gray-200 p-1.5">
            <IconContext.Provider
              value={{ className: "shared-class", size: 22 }}
            >
              <IoChevronBackOutline />
            </IconContext.Provider>
          </div>
          <div className="bg-gray-200 p-1.5">
            <IconContext.Provider
              value={{ className: "shared-class", size: 22 }}
            >
              <IoChevronForward />
            </IconContext.Provider>
          </div>
        </aside>
      </div> */}
      <div className="grid grid-cols-2 lg:grid-cols-6 gap-10 py-5 w-[95%] mx-auto">
        {productData?.map((product, inx) => (
          <ProductCard key={inx} product={product}></ProductCard>
        ))}
      </div>
      <div className="grid grid-cols-2 lg:grid-cols-6 gap-10 py-5 hidden lg:block">
        {productData?.map((product, inx) => (
          <ProductCard key={inx} product={product}></ProductCard>
        ))}
      </div>
    </div>
  );
};

export default Products;
