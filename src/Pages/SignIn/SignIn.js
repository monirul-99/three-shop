import React from "react";
import { Link } from "react-router-dom";
import Footer from "../../Shared/Footer/Footer";

const SignIn = () => {
  return (
    <>
      <section className="container mx-auto">
        <div className="flex justify-center items-center lg:h-[89vh] h-[70vh]">
          <form className="lg:w-3/12 w-[85%] mx-auto py-10">
            <p className="font-Ubuntu uppercase font-light tracking-widest text-4xl">
              login
            </p>
            <div className="mt-12">
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
              <aside className="flex justify-between mb-2">
                <p className="font-Ubuntu uppercase tracking-widest">
                  Password
                </p>
                <p className="font-Ubuntu capitalize tracking-widest text-[0.8rem]">
                  Forget Password?
                </p>
              </aside>
              <input
                type="password"
                name="password"
                className="border py-2 outline-none pl-3 w-full font-Ubuntu"
              />
            </div>

            <button className="bg-black text-white w-full mt-7 py-2 uppercase tracking-widest font-light">
              sign in
            </button>

            <Link to="/sign-up">
              <p className="text-center uppercase mt-5 font-Ubuntu underline">
                create account
              </p>
            </Link>
          </form>
        </div>
      </section>

      <Footer />
    </>
  );
};

export default SignIn;
