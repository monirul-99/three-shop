import React from "react";
import { Link } from "react-router-dom";

const SignUp = () => {
  return (
    <div>
      <section className="container mx-auto">
        <div className="flex justify-center items-center lg:h-[89vh] h-[70vh]">
          <form className="lg:w-3/12 w-[85%] mx-auto py-10">
            <p className="font-Ubuntu uppercase font-light tracking-widest text-4xl">
              create account
            </p>
            <div className="mt-12">
              <p className="font-Ubuntu uppercase tracking-widest mb-2">
                Full name
              </p>
              <input
                type="name"
                name="text"
                className="border py-2 outline-none pl-3 w-full font-Ubuntu"
              />
            </div>
            <div className="mt-7">
              <p className="font-Ubuntu uppercase tracking-widest mb-2">
                Email
              </p>
              <input
                type="email"
                name="email"
                className="border py-2 outline-none pl-3 w-full font-Ubuntu"
              />
            </div>
            <div className="mt-7">
              <p className="font-Ubuntu uppercase tracking-widest mb-2">
                Password
              </p>
              <input
                type="password"
                name="password"
                className="border py-2 outline-none pl-3 w-full font-Ubuntu"
              />
            </div>
            <div className="mt-7">
              <p className="font-Ubuntu uppercase tracking-widest mb-2">
                confirm Password
              </p>
              <input
                type="password"
                name="password"
                className="border py-2 outline-none pl-3 w-full font-Ubuntu"
              />
            </div>

            <button className="bg-black text-white w-full mt-7 py-2 uppercase tracking-widest font-light">
              create
            </button>
          </form>
        </div>
      </section>
    </div>
  );
};

export default SignUp;
