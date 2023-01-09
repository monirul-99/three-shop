import React from "react";
import TwoColumnCard from "./TwoColumnCard";

const TwoColumns = ({ productData }) => {
  return (
    <div className="grid grid-cols-2 gap-5 lg:gap-16 py-5 lg:w-[95%]">
      {productData?.result?.map((product, inx) => (
        <TwoColumnCard key={inx} product={product}></TwoColumnCard>
      ))}
    </div>
  );
};

export default TwoColumns;
