import React from "react";
import blob from "../../Images/PngItem_2499043.png";
import EditPic from "../../Images/kisspng.png";
const HomeArrive = () => {
  return (
    <section className="container mx-auto">
      <div className="border relative flex items-center">
        <img className="w-2/5" src={EditPic} alt="" />
        <div className="space-y-5">
          <p className="uppercase text-[15px] text-[#050505]">
            New Collection 2020
          </p>
          <h1 className="text-2xl capitalize tracking-wide font-Prosto mt-2">
            House Shape Plant
          </h1>
          <p className="text-[15px] text-[#050505] w-4/5">
            The growth of a plant involves several stages. Fast, a plot of land
            is selected. The land is next dug well with the help of the spade.
            The soil is ground into dust and manure both biological and the
            chemical is added to the soil. Then seeds are collected from the
            market and sown on the bed.
          </p>

          <button className="text-[#306D58] border px-5 py-2 tracking-widest text-sm uppercase mt-10 hover:bg-[#306D58] hover:text-white duration-500">
            Shop Now
          </button>
        </div>
      </div>
    </section>
  );
};

export default HomeArrive;
