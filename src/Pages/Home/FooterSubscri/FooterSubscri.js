import React from "react";
import { IconContext } from "react-icons";
import {
  IoCallOutline,
  IoLocationOutline,
  IoMailOpenOutline,
} from "react-icons/io5";

import _pay1 from "../../Images/american-express.svg";
import _pay2 from "../../Images/american-express (1).svg";
import _pay3 from "../../Images/cash.svg";
import _pay4 from "../../Images/maestro.svg";
import { Link } from "react-router-dom";

const FooterSubscribe = () => {
  return (
    <section className="bg-[#D9E5E1] mt-28">
      <div className="py-10 container mx-auto">
        <aside className="">
          <div className="flex justify-center">
            <div className="flex flex-col items-center">
              <IconContext.Provider value={{ color: "#014E37", size: 60 }}>
                <IoMailOpenOutline />
              </IconContext.Provider>

              <h1 className="text-center text-2xl font-semibold capitalize mt-3 mb-3">
                Subscribe Our Newsletter
              </h1>
              <p className="text-center capitalize font-Poppins text-[0.8rem]">
                We’ll never share your email address with a third-party, So be
                careful
              </p>
            </div>
          </div>

          <div className="flex relative justify-center mt-3 w-2/5 mx-auto items-center">
            <input
              className="w-full py-3 rounded-md pl-5 outline-none"
              type="text"
              name=""
              id=""
              placeholder="Your Email Address"
            />
            <p className="absolute right-3 uppercase font-Poppins text-[0.9rem] text-green-600">
              Subscriber
            </p>
          </div>
        </aside>

        <aside className="mt-20">
          <h1 className="uppercase font-Poppins text-xl mb-8">our address</h1>
          <div className="flex justify-between">
            <aside className="space-y-4 font-Poppins text-[0.9rem]">
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
              <h1 className="uppercase font-Poppins text-xl mb-8">account</h1>

              <div>
                <p>Orders Checkout Downloads</p>
                <p>My Account Details</p>
              </div>
            </div>
            <div>
              <h1 className="uppercase font-Poppins text-xl mb-8">
                information
              </h1>
              <div>
                <p>Privacy Policy</p>
                <p>Delivery Information</p>
                <p>Contact Us</p>
              </div>
            </div>
            <div>
              <h1 className="uppercase font-Poppins text-xl mb-8">CATEGORY</h1>
            </div>
          </div>
        </aside>

        <aside>
          <p className="border-b-[0.1rem] border-green-900 pt-12"></p>

          <div className="flex items-center justify-center space-x-8 mt-10">
            <Link>House Plants</Link>
            <p className="border-r border-green-600 h-5"></p>
            <Link>Office Plants</Link>
            <p className="border-r border-green-600 h-5"></p>
            <Link>Hanging planter</Link>
            <p className="border-r border-green-600 h-5"></p>
            <Link>Ceramic Plants</Link>
            <p className="border-r border-green-600 h-5"></p>
            <Link>Contact us</Link>
            <p className="border-r border-green-600 h-5"></p>
            <Link>Help</Link>
          </div>
        </aside>
      </div>
      <div className="bg-[#014E37] py-3">
        <div className="container mx-auto">
          <p className="text-white font-Poppins text-[0.8rem]">
            Designed by Demo Theme All rights reserved.
          </p>
        </div>
      </div>
    </section>
  );
};

export default FooterSubscribe;
