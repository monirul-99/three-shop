import { useQuery } from "@tanstack/react-query";
import React from "react";
import { MagicSpinner } from "react-spinners-kit";
import ProductCard from "./ProductCard";

const Flowers = () => {
  const url = `http://localhost:5000/related-products-flower`;
  const { data: relatedData, isLoading } = useQuery({
    queryKey: [],
    queryFn: async () => {
      const res = await fetch(url, {});
      const data = await res.json();
      return data;
    },
  });
  if (isLoading) {
    return (
      <div className="h-screen w-screen z-50 flex justify-center items-center  container mx-auto">
        <MagicSpinner size={100} color="#000000" />
      </div>
    );
  }
  return (
    <div className="grid grid-cols-2 lg:grid-cols-5 gap-6 py-5">
      {relatedData?.result?.map((product, inx) => (
        <ProductCard key={inx} product={product}></ProductCard>
      ))}
    </div>
  );
};

export default Flowers;
