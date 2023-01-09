import React, { useContext, useRef } from "react";
import { IconContext } from "react-icons";
import { IoCartOutline, IoPersonOutline } from "react-icons/io5";
import { Link } from "react-router-dom";
import { AuthContext } from "../../Context/userContext";

const Navbar = () => {
  const { user, logout, myOrders, wishList, setSearch } =
    useContext(AuthContext);

  const searchRef = useRef();
  const handleSearch = () => {
    setSearch(searchRef.current.value);
  };

  return (
    <>
      <section className="bg-[#F5F5F5] py-2 hidden lg:block md:block">
        <div className="container mx-auto flex justify-between w-[77%]">
          <p className="text-[0.8rem] font-Poppins">
            Free Delivery: Take advantage of our time to save event
          </p>
          <div className="flex items-center space-x-3">
            <Link to="wishlist">
              <p className="capitalize font-Poppins text-[0.9rem] cursor-pointer">
                wishlist <span>{wishList.length}</span>
              </p>
            </Link>
            <p className="h-4 border-r border-black"></p>

            <div className="dropdown dropdown-bottom dropdown-end cursor-pointer">
              <label tabIndex={0} className="">
                <p className="capitalize font-Poppins text-[0.9rem] cursor-pointer">
                  My account
                </p>
              </label>
              <ul
                tabIndex={0}
                className="dropdown-content menu shadow bg-base-200 rounded-md w-36 p-3 font-Poppins text-[0.9rem] mt-3"
              >
                <li className="duration-300 hover:border-b border-gray-200">
                  <Link>Edit Profile</Link>
                </li>
                <li className="duration-300 hover:border-b border-gray-200">
                  {user?.photoURL ? (
                    <Link onClick={logout}>Sign Out</Link>
                  ) : (
                    <Link to="/sign-in">Sign In</Link>
                  )}
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>
      <div className="relative border-b  sticky top-0 z-10 bg-white shadow-sm">
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
                      ref={searchRef}
                      className="h-10 w-full rounded-full border-none bg-white pl-4 pr-10 text-sm shadow-sm sm:w-56"
                      id="search"
                      type="search"
                      placeholder="Search website..."
                    />

                    <Link to="/search-shop">
                      <button
                        onClick={handleSearch}
                        type="button"
                        className="absolute top-1/2 right-1 -translate-y-1/2 rounded-full bg-gray-50 p-2 text-gray-600 transition hover:text-gray-700"
                      >
                        <span className="sr-only">Submit Search</span>
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
                    </Link>
                  </div>

                  <aside className="block shrink-0 rounded-full bg-white  text-gray-600 shadow-sm hover:text-gray-700">
                    <Link to="/my-orders">
                      <div className="relative">
                        <IconContext.Provider value={{ color: "", size: 30 }}>
                          <IoCartOutline />
                        </IconContext.Provider>

                        <aside className="w-5 h-5 bg-[#79A206] rounded-full absolute -top-3 -right-2.5 flex justify-center items-center p- front-Poppins">
                          <p className="font-semibold text-white text-[0.8rem]">
                            {" "}
                            {myOrders?.length}
                          </p>
                        </aside>
                      </div>
                    </Link>
                  </aside>
                </div>

                <span
                  aria-hidden="true"
                  className="block h-6 w-px rounded-full bg-gray-200"
                ></span>

                <p className="block shrink-0">
                  <span className="sr-only">Profile</span>

                  <div className="dropdown dropdown-bottom dropdown-end">
                    <label tabIndex={0} className="cursor-pointer">
                      {user ? (
                        <img
                          className="w-10 h-10 rounded-full"
                          src={user.photoURL}
                          alt=""
                        />
                      ) : (
                        <IconContext.Provider value={{ color: "", size: 20 }}>
                          <IoPersonOutline />
                        </IconContext.Provider>
                      )}
                    </label>
                    <ul
                      tabIndex={0}
                      className="dropdown-content menu shadow bg-base-200 rounded-md w-36 p-3 font-Poppins text-[0.9rem] mt-3"
                    >
                      <li className="duration-300 hover:border-b border-gray-200">
                        <Link>Edit Profile</Link>
                      </li>
                      <li className="duration-300 hover:border-b border-gray-200">
                        {user?.photoURL ? (
                          <Link onClick={logout}>Sign Out</Link>
                        ) : (
                          <Link to="/sign-in">Sign In</Link>
                        )}
                      </li>
                    </ul>
                  </div>
                </p>
              </div>
            </div>

            <div className="relative block lg:hidden w-[80%] mx-auto mt-1">
              <label className="sr-only" htmlFor="search">
                Search
              </label>

              <input
                ref={searchRef}
                className="h-10 w-full rounded-full border-none bg-white pl-4 pr-10 text-sm shadow-sm sm:w-56"
                id="search"
                type="search"
                placeholder="Search website..."
              />
              <Link to="/search-shop">
                <button
                  onClick={handleSearch}
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
              </Link>
            </div>
          </div>
        </header>
      </div>
    </>
  );
};

export default Navbar;
