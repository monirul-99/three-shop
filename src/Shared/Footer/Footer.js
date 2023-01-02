import React from "react";
import { IconContext } from "react-icons";
import {
  IoCallOutline,
  IoLocationOutline,
  IoMailOpenOutline,
} from "react-icons/io5";
import _pay1 from "../../Pages/Images/american-express.svg";
import _pay2 from "../../Pages/Images/american-express (1).svg";
import _pay3 from "../../Pages/Images/cash.svg";
import _pay4 from "../../Pages/Images/maestro.svg";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <>
      <div className="bg-[#D9E5E1] py-5">
        <div className="container mx-auto">
          <aside className="mt-20 w-[95%] mx-auto">
            <div className="flex flex-col lg:flex-row justify-between items-start">
              <aside className="space-y-4 font-Poppins text-[0.9rem] mb-10">
                <h1 className="uppercase font-Poppins text-xl mb-5">
                  our address
                </h1>
                <div className="flex items-center space-x-3">
                  <IconContext.Provider value={{ color: "#014E37", size: 20 }}>
                    <IoMailOpenOutline />
                  </IconContext.Provider>
                  <p>sample@gmail.com</p>
                </div>
                <div className="flex items-center space-x-3">
                  <IconContext.Provider value={{ color: "#014E37", size: 20 }}>
                    <IoLocationOutline />
                  </IconContext.Provider>
                  <p>
                    1093 Marigold Lane, Coral Way, Miami, <br /> Florida, 33169
                  </p>
                </div>

                <div className="flex items-center space-x-3">
                  <IconContext.Provider value={{ color: "#014E37", size: 20 }}>
                    <IoCallOutline />
                  </IconContext.Provider>
                  <div className="flex items-center space-x-3">
                    <p>Call us : </p>
                    <p> 0123-456-789</p>
                  </div>
                </div>

                <h1 className="uppercase text-xl font-semibold">payment</h1>
                <div className="flex items-center space-x-2">
                  <img className="w-9" src={_pay1} alt="" />
                  <img className="w-9" src={_pay2} alt="" />
                  <img className="w-9" src={_pay3} alt="" />
                  <img className="w-9" src={_pay4} alt="" />
                </div>
              </aside>
              <div>
                <h1 className="uppercase font-Poppins text-xl mb-3">account</h1>

                <div className="space-y-4">
                  <p>My Account</p>
                  <p>Orders Checkout</p>
                  <p>Order History</p>
                  <p>Shop</p>
                  <p>Shopping Cart</p>
                </div>
              </div>
              <div>
                <h1 className="uppercase font-Poppins text-xl mb-4 mt-7 lg:mt-0">
                  information
                </h1>
                <div className="space-y-4">
                  <p>Privacy Policy</p>
                  <p>Delivery Information</p>
                  <p>Contact Us</p>
                  <p>Frequently Questions</p>
                  <p>Wishlist</p>
                </div>
              </div>
              <div>
                <h1 className="uppercase font-Poppins text-xl mb-4 mt-7 lg:mt-0">
                  customer service
                </h1>

                <div className="space-y-4">
                  <p>Contact us</p>
                  <p>Terms Of Use</p>
                  <p>Privacy Policy</p>
                  <p>Site Map</p>
                  <p>Returns</p>
                </div>
              </div>
            </div>
          </aside>

          <aside>
            <p className="border-b-[0.1rem] border-green-900 pt-12"></p>

            <div className="flex flex-wrap items-center justify-center space-x-8 mt-10">
              <Link>House Plants</Link>
              <p className="border-r border-green-600 h-5 hidden lg:block"></p>
              <Link>Office Plants</Link>
              <p className="border-r border-green-600 h-5 hidden lg:block"></p>
              <Link>Hanging planter</Link>
              <p className="border-r border-green-600 h-5 hidden lg:block"></p>
              <Link>Ceramic Plants</Link>
              <p className="border-r border-green-600 h-5 hidden lg:block"></p>
              <Link>Contact us</Link>
              <p className="border-r border-green-600 h-5 hidden lg:block"></p>
              <Link>Help</Link>
            </div>
          </aside>
        </div>
      </div>

      <div className="bg-[#014E37]">
        <div className="container mx-auto">
          <p className="text-white font-Poppins text-[0.8rem]  py-3 w-[95%] mx-auto">
            Designed by Demo Theme All rights reserved.
          </p>
        </div>
      </div>
    </>
  );
};

export default Footer;
