import React, { useContext } from "react";
import { AuthContext } from "../../Context/userContext";
import ProductCard from "../Home/Products/ProductCard";

const SearchShop = () => {
  const { searchData } = useContext(AuthContext);
  return (
    <section className="lg:w-[85%] w-[88%] mx-auto mt-10">
      <div className="grid grid-cols-2 lg:grid-cols-5 gap-5 lg:gap-y-16 py-5 container mx-auto">
        {searchData?.map((product, inx) => (
          <ProductCard key={inx} product={product}></ProductCard>
        ))}
      </div>
    </section>
  );
};

export default SearchShop;
