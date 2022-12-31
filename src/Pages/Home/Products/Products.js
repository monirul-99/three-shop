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
      <div className="lg:w-[80%] w-[95%] mx-auto mt-10">
        <div className="flex justify-between">
          <h1 className="lg:text-[1.3rem] text-[1rem] uppercase font-light">
            Outdoors Plants
          </h1>
          <p className="capitalize lg:text-[1rem] text-[0.8rem] border px-5 py-1 font-Poppins font-light">
            See All
          </p>
        </div>
        <div className="grid grid-cols-2 lg:grid-cols-5 gap-6 py-5">
          {productData?.map((product, inx) => (
            <ProductCard key={inx} product={product}></ProductCard>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Products;
