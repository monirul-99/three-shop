import React from "react";
import HomeArrive from "./HomeArrive/HomeArrive";
import { HomeCover } from "./HomeCover/HomeCover";
import Products from "./Products/Products";
import ThreeService from "./ThreeService/ThreeService";
import TwoCard from "./TwoCard/TwoCard";

const Home = () => {
  return (
    <div>
      <HomeCover />
      <ThreeService />
      <HomeArrive />
      <TwoCard />
      <Products />
    </div>
  );
};

export default Home;
