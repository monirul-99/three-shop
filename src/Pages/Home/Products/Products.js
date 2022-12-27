import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import ProductCard from "./ProductCard";
// import Flower from "../../Images/Flower.png";
// import TwoFlower from "../../Images/Two Flower.png";

const Products = () => {
  const [productData, setProductData] = useState([]);
  useEffect(() => {
    fetch("data.json")
      .then((res) => res.json())
      .then((data) => setProductData(data));
  }, []);
  console.log(productData);
  return (
    <div className="container mx-auto py-16">
      <div className="flex flex-col items-center">
        <h1 className="uppercase text-xl font-Prosto tracking-wide">
          Popular Products
        </h1>
        {/* <img className="w-[300px] ml-5 -mt-16" src={TwoFlower} alt="" /> */}
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

      <div className="grid grid-cols-5 gap-12 w-[77%] mx-auto py-5">
        {productData?.map((product, inx) => (
          <ProductCard key={inx} product={product}></ProductCard>
        ))}
      </div>
    </div>
  );
};

export default Products;
