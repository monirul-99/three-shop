import React from "react";
import { Link } from "react-router-dom";
import { Tab } from "@headlessui/react";
import Outdoor from "./Outdoor";
import Indoor from "./Indoor";
import Flowers from "./Flowers";
import "./products.css";

const Products = () => {
  return (
    <div className="container mx-auto py-24">
      <div className="flex flex-col items-center">
        <h1 className="uppercase text-xl font-Prosto tracking-wide text-center">
          Popular Products
        </h1>
      </div>

      <Tab.Group>
        <aside className="flex items-center justify-center space-x-5 py-7">
          <Tab.List className="space-x-4 bg-white customShadow py-1 lg:w-4/12 w-10/12 flex justify-between px-1 rounded-full">
            <Tab className="font-Poppins tracking-wide text-[0.8rem] uppercase p-0.5">
              {({ selected }) => (
                <button
                  className={
                    selected
                      ? "font-Poppins py-2.5 text-blue-600 bg-[#E5EDF9] rounded-full px-3 uppercase font-semibold"
                      : "text-black pl-5 font-semibold uppercase"
                  }
                >
                  <span className="hidden lg:block md:block">
                    Outdoor Plants
                  </span>
                  <span className="lg:hidden md:hidden">Outdoor</span>
                </button>
              )}
            </Tab>
            <Tab className="font-Poppins tracking-wide text-[0.8rem] uppercase p-0.5">
              {({ selected }) => (
                <button
                  className={
                    selected
                      ? "font-Poppins py-2.5 text-blue-600 bg-[#E5EDF9] rounded-full px-3 font-semibold"
                      : "text-black uppercase font-semibold"
                  }
                >
                  <span className="hidden lg:block md:block">
                    Indoor Plants
                  </span>
                  <span className="lg:hidden md:hidden">Indoor</span>
                </button>
              )}
            </Tab>
            <Tab className="font-Poppins tracking-wide text-[0.8rem] uppercase p-0.5">
              {({ selected }) => (
                <button
                  className={
                    selected
                      ? "font-Poppins py-2.5 text-blue-600 bg-[#E5EDF9] rounded-full px-3 font-semibold"
                      : "text-black pr-5 uppercase font-semibold"
                  }
                >
                  <span className="hidden lg:block md:block">
                    Flower Plants
                  </span>
                  <span className="lg:hidden md:hidden">Flower</span>
                </button>
              )}
            </Tab>
          </Tab.List>
        </aside>
        <div className="lg:w-[80%] w-[88%] mx-auto mt-10">
          <div className="flex justify-between">
            <h1 className="lg:text-[1.3rem] text-[1rem] uppercase font-light">
              Outdoors Plants
            </h1>
            <Link to="/shop">
              <p className="capitalize lg:text-[1rem] text-[0.8rem] border px-5 py-1 font-Poppins font-light">
                See All
              </p>
            </Link>
          </div>

          <Tab.Panels>
            <Tab.Panel>
              <Outdoor />
            </Tab.Panel>
            <Tab.Panel>
              <Indoor />
            </Tab.Panel>
            <Tab.Panel>
              <Flowers />
            </Tab.Panel>
          </Tab.Panels>
        </div>
      </Tab.Group>
    </div>
  );
};

export default Products;
