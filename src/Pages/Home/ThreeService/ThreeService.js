import React from "react";
import { IconContext } from "react-icons";
import {
  RiCaravanLine,
  RiCustomerService2Line,
  RiPaypalLine,
} from "react-icons/ri";

const ThreeService = () => {
  return (
    <section className="container mx-auto py-20">
      <div className="flex flex-col lg:flex-row items-center justify-center lg:space-x-16 space-y-5 lg:space-y-0">
        <aside className="flex items-center space-x-5">
          <IconContext.Provider value={{ color: "#79A206", size: 45 }}>
            <RiCaravanLine />
          </IconContext.Provider>

          <div>
            <h3 className="font-semibold text-[18px] mb-1">Free Delivery</h3>
            <p className="text-gray-400 text-[15px]">
              Free shipping around the world for all <br /> orders over $120
            </p>
          </div>
        </aside>

        <aside className="lg:border-r lg:h-20 border-b w-full"></aside>
        <aside className="flex items-center space-x-5">
          <IconContext.Provider value={{ color: "#79A206", size: 45 }}>
            <RiPaypalLine />
          </IconContext.Provider>

          <div>
            <h3 className="font-semibold text-[18px] mb-1">Safe Payment</h3>
            <p className="text-gray-400 text-[15px]">
              With our payment gateway, don’t worry <br />
              about your information
            </p>
          </div>
        </aside>
        <aside className="lg:border-r lg:h-20 border-b w-full"></aside>

        <aside className="flex items-center space-x-5">
          <IconContext.Provider value={{ color: "#79A206", size: 45 }}>
            <RiCustomerService2Line />
          </IconContext.Provider>

          <div>
            <h3 className="font-semibold text-[18px] mb-1">
              Friendly Services
            </h3>
            <p className="text-gray-400 text-[15px]">
              You have 30-day return guarantee for <br /> every single order
            </p>
          </div>
        </aside>
      </div>
    </section>
  );
};

export default ThreeService;
