import React from "react";
import { IconContext } from "react-icons";
import { IoCartOutline, IoPersonOutline } from "react-icons/io5";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <div className="relative border-b">
      <header aria-label="Page Header">
        <div className="mx-auto container px-4 py-8 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between gap-4">
            <Link to="/">
              <h2 className="text-start font-Prosto text-2xl">BrandPlants</h2>
            </Link>
            <div className="flex items-center space-x-5">
              <div className="flex items-center gap-4">
                <div className="relative hidden lg:block">
                  <label className="sr-only" htmlFor="search">
                    Search
                  </label>

                  <input
                    className="h-10 w-full rounded-full border-none bg-white pl-4 pr-10 text-sm shadow-sm sm:w-56"
                    id="search"
                    type="search"
                    placeholder="Search website..."
                  />

                  <button
                    type="button"
                    className="absolute top-1/2 right-1 -translate-y-1/2 rounded-full bg-gray-50 p-2 text-gray-600 transition hover:text-gray-700"
                  >
                    <span className="sr-only">Submut Search</span>
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="h-4 w-4"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                      strokeWidth="2"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
                      />
                    </svg>
                  </button>
                </div>

                <a
                  href="/"
                  className="block shrink-0 rounded-full bg-white p-2.5 text-gray-600 shadow-sm hover:text-gray-700"
                >
                  <span className="sr-only">Notifications</span>
                  <IconContext.Provider value={{ color: "", size: 20 }}>
                    <IoCartOutline />
                  </IconContext.Provider>
                </a>
              </div>

              <span
                aria-hidden="true"
                className="block h-6 w-px rounded-full bg-gray-200"
              ></span>

              <a href="/" className="block shrink-0">
                <span className="sr-only">Profile</span>
                <Link to="sign-in">
                  <IconContext.Provider value={{ color: "", size: 20 }}>
                    <IoPersonOutline />
                  </IconContext.Provider>
                </Link>
              </a>
            </div>
          </div>

          <div className="relative block lg:hidden w-[80%] mx-auto mt-1">
            <label className="sr-only" htmlFor="search">
              Search
            </label>

            <input
              className="h-10 w-full rounded-full border-none bg-white pl-4 pr-10 text-sm shadow-sm sm:w-56"
              id="search"
              type="search"
              placeholder="Search website..."
            />

            <button
              type="button"
              className="absolute top-1/2 right-1 -translate-y-1/2 rounded-full bg-gray-50 p-2 text-gray-600 transition hover:text-gray-700"
            >
              <span className="sr-only">Submut Search</span>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-4 w-4"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                strokeWidth="2"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
                />
              </svg>
            </button>
          </div>
        </div>
      </header>
    </div>
  );
};

export default Navbar;
