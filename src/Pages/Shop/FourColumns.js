import React from "react";
import ProductCard from "../Home/Products/ProductCard";

const FourColumns = ({ productData }) => {
  return (
    <div className="grid grid-cols-2 lg:grid-cols-5 gap-5 lg:gap-y-16 py-5">
      {productData?.result?.map((product, inx) => (
        <ProductCard key={inx} product={product}></ProductCard>
      ))}
    </div>
  );
};

export default FourColumns;
