import React from "react";
import Gallery1 from "../../Images/Many4.png";
import Gallery6 from "../../Images/Many1.png";
import Gallery7 from "../../Images/Many2.png";
import Gallery2 from "../../Images/Gallery2.png";
import Gallery3 from "../../Images/Gallery3.png";
import Gallery4 from "../../Images/Gallery4.png";
import Gallery5 from "../../Images/Gallery5.png";

const HomeGallery = () => {
  return (
    <section className="container mx-auto">
      <div className="lg:grid lg:grid-cols-12 gap-8 w-[95%] mx-auto">
        <aside className="grid col-span-4 border bg-[#EEEEEE] mb-8 lg:mb-0 rounded-md duration-500 hover:bg-green-50">
          <div className="space-y-3 mt-20 ml-10">
            <p className="text-[#7A7A7A] font-Poppins">Upto 55% Off</p>
            <h1 className="text-2xl font-Prosto  pb-8">House Shape Plant</h1>
            <button className="inline-block rounded-[3px] text-white bg-[#306D58] border py-2 px-5 tracking-widest text-sm uppercase hover:bg-black hover:text-white duration-500">
              Shop Now
            </button>
          </div>
          <img className="w-3/5 ml-32 -mt-20" src={Gallery4} alt="" />
        </aside>
        <aside className="grid col-span-8 items-center gap-8">
          <div className="grid lg:grid-cols-2 justify-between items-center gap-8">
            <aside className="border flex flex-row-reverse items-center justify-end bg-[#EEEEEE] relative h-[280px] rounded-md duration-500 hover:bg-green-50">
              <img className="w-1/2 -mt-20" src={Gallery2} alt="" />
              <div className="space-y-3 ml-5">
                <p className="text-[#7A7A7A] font-Poppins">Upto 30% Off</p>
                <h1 className="lg:text-2xl text-xl font-Prosto inline-block pb-8">
                  Indoor Plants
                </h1>
                <button className="inline-block rounded-[3px] text-white bg-[#306D58] border py-2 px-5 tracking-widest text-sm uppercase hover:bg-black hover:text-white duration-500">
                  Shop Now
                </button>
              </div>
            </aside>
            <aside className="border flex flex-row-reverse items-center justify-end bg-[#EEEEEE] h-[280px] rounded-md duration-500 hover:bg-green-50">
              <img className="w-1/2 -mt-20" src={Gallery5} alt="" />
              <div className="space-y-3 ml-5">
                <p className="text-[#7A7A7A] font-Poppins">Upto 40% Off</p>
                <h1 className="lg:text-2xl text-xl font-Prosto inline-block pb-8">
                  Office Plants
                </h1>
                <button className="inline-block rounded-[3px] text-white bg-[#306D58] border py-2 px-5 tracking-widest text-sm uppercase hover:bg-black hover:text-white duration-500">
                  Shop Now
                </button>
              </div>
            </aside>
          </div>
          <div className="grid gap-8 hidden lg:block">
            <aside className="border flex flex-row-reverse items-center justify-between bg-[#EEEEEE] h-[280px] rounded-md duration-500 hover:bg-green-50">
              <img className="w-1/2 -mt-20" src={Gallery1} alt="" />
              <div className="space-y-3 ml-5">
                <p className="text-[#7A7A7A] font-Poppins">Upto 55% Off</p>
                <h1 className="text-2xl font-Prosto  pb-8">
                  Ceramic Pot & Plant
                </h1>
                <button className="inline-block rounded-[3px] text-white bg-[#306D58] border py-2 px-5 tracking-widest text-sm uppercase hover:bg-black hover:text-white duration-500">
                  Shop Now
                </button>
              </div>
            </aside>
          </div>
        </aside>
      </div>
    </section>
  );
};

export default HomeGallery;
