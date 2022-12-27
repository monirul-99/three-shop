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
      <div className="flex items-center justify-center space-x-16">
        <aside className="flex items-center space-x-5">
          <IconContext.Provider value={{ color: "#79A206", size: 45 }}>
            <RiCaravanLine />
          </IconContext.Provider>

          <div>
            <h3 className="font-semibold text-[18px]">Free Delivery</h3>
            <p className="text-gray-400 text-[15px]">
              Free shipping around the world for all <br /> orders over $120
            </p>
          </div>
        </aside>

        <aside className="border-r h-20"></aside>
        <aside className="flex items-center space-x-5">
          <IconContext.Provider value={{ color: "#79A206", size: 45 }}>
            <RiPaypalLine />
          </IconContext.Provider>

          <div>
            <h3 className="font-semibold text-[18px]">Safe Payment</h3>
            <p className="text-gray-400 text-[15px]">
              With our payment gateway, don’t worry <br />
              about your information
            </p>
          </div>
        </aside>
        <aside className="border-l h-20"></aside>

        <aside className="flex items-center space-x-5">
          <IconContext.Provider value={{ color: "#79A206", size: 45 }}>
            <RiCustomerService2Line />
          </IconContext.Provider>

          <div>
            <h3 className="font-semibold text-[18px]">Friendly Services</h3>
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
