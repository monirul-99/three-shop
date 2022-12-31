import React from "react";
import Blogs from "./Blogs/Blogs";
import FooterSubscribe from "./FooterSubscri/FooterSubscri";
import HomeArrive from "./HomeArrive/HomeArrive";
import { HomeCover } from "./HomeCover/HomeCover";
import HomeGallery from "./HomeGallery/HomeGallery";
import Products from "./Products/Products";
import ThreeService from "./ThreeService/ThreeService";

const Home = () => {
  return (
    <div>
      <HomeCover />
      <ThreeService />
      <HomeArrive />
      <Products />
      <HomeGallery />
      <Blogs />
      <FooterSubscribe />
    </div>
  );
};

export default Home;
