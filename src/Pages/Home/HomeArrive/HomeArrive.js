import React from "react";
import EditPic from "../../Images/kisspng.png";
import { Link } from "react-router-dom";
const HomeArrive = () => {
  return (
    <section className="container mx-auto">
      <div className="relative flex flex-col lg:flex-row items-center justify-between lg:space-x-16">
        <img className="lg:w-2/5" src={EditPic} alt="" />
        <div className="lg:space-y-7 mt-12 lg:w-6/12 w-11/12">
          <p className="uppercase text-[15px] text-[#050505] font-Poppins">
            New Collection 2020
          </p>
          <h1 className="text-2xl capitalize tracking-wide font-Prosto mt-2 mb-2">
            House Shape Plant
          </h1>
          <p className="lg:text-[15px] text-[13px] text-[#050505] font-Poppins">
            The growth of a plant involves several stages. Fast, a plot of land
            is selected. The land is next dug well with the help of the spade.
            The soil is ground into dust and manure both biological and the
            chemical is added to the soil. Then seeds are collected from the
            market and sown on the bed.
          </p>

          <Link to="/shop">
            <button className="text-[#306D58] border px-5 py-2 tracking-widest text-sm uppercase lg:mt-10 mt-7 hover:bg-[#306D58] hover:text-white duration-500">
              Shop Now
            </button>
          </Link>
        </div>
      </div>
    </section>
  );
};

export default HomeArrive;
