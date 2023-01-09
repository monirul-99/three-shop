import React, { useState } from "react";
import { IconContext } from "react-icons";
import FooterSubscribe from "../Home/FooterSubscri/FooterSubscri";
import { IoAppsSharp, IoList } from "react-icons/io5";
import "./Spinner.css";
import { Tab } from "@headlessui/react";
import FourColumns from "./FourColumns";
import TwoColumns from "./TwoColumns";
import { Menu, Transition } from "@headlessui/react";
import { Fragment } from "react";
import { useQuery } from "@tanstack/react-query";
import { MagicSpinner } from "react-spinners-kit";

const Shop = () => {
  const [page, setPage] = useState(0);
  const [size, setSize] = useState(10);
  // const [product, setProducts] = useState([]);
  // const [counts, setCounts] = useState(0);
  // const [products, setProducts] = useState([]);
  // useEffect(() => {
  //   fetch(`http://localhost:5000/card-data`)
  //     .then((res) => res.json())
  //     .then((data) => setProducts(data));
  // }, []);
  // console.log(products.count);

  const { data, isLoading } = useQuery({
    queryKey: [page, size],
    queryFn: async () => {
      const res = await fetch(
        `http://localhost:5000/card-data?page=${page}&size=${size}`,
        {}
      );
      const data = await res.json();
      return data;
    },
  });
  if (isLoading) {
    return (
      <div className="h-screen w-screen z-50 flex justify-center items-center  container mx-auto">
        <MagicSpinner size={100} color="#000000" />
      </div>
    );
  }

  const count = data.count;
  const pages = Math.ceil(count / size);
  return (
    <>
      <section className="relative bg-[url(https://res.cloudinary.com/dr4o1qswz/image/upload/v1672635981/Tree%20SHOP/UpdateTree/Untitled-2_e9x6ul.jpg)] bg-cover bg-center bg-no-repeat lg:h-[300px] h-[180px]">
        <div className="absolute inset-0 bg-black/25 flex items-center justify-center">
          <div className="text-center sm:text-left ">
            <h1 className="lg:text-4xl text-3xl text-center font-Poppins text-white font-bold">
              #stayHome
            </h1>

            <p className="mt-4 font-Poppins text-white">
              Save more with coupons & up to 70% off!
            </p>
          </div>
        </div>
      </section>

      <Tab.Group>
        <div className="lg:w-[85%] w-[88%] mx-auto mt-10">
          <div className="flex justify-between lg:w-[95%]">
            <div className="flex justify-evenly items-center space-x-3">
              <Tab.List className="flex items-center space-x-4">
                <Tab className="">
                  <IconContext.Provider value={{ size: 23 }}>
                    <IoAppsSharp />
                  </IconContext.Provider>
                </Tab>
                <Tab className="hidden lg:block md:block">
                  <IconContext.Provider value={{ size: 28 }}>
                    <IoList />
                  </IconContext.Provider>
                </Tab>
              </Tab.List>
            </div>

            <div className="w-56 text-right">
              <Menu as="div" className="relative inline-block text-left z-10">
                <div>
                  <Menu.Button className="inline-flex w-full justify-center rounded-[3px] bg-black bg-opacity-20 px-5 tracking-widest uppercase py-1.5 text-sm font-medium text-white hover:bg-opacity-30 focus:outline-none focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-opacity-75">
                    Sorting
                  </Menu.Button>
                </div>
                <Transition
                  as={Fragment}
                  enter="transition ease-out duration-100"
                  enterFrom="transform opacity-0 scale-95"
                  enterTo="transform opacity-100 scale-100"
                  leave="transition ease-in duration-75"
                  leaveFrom="transform opacity-100 scale-100"
                  leaveTo="transform opacity-0 scale-95"
                >
                  <Menu.Items className="absolute right-0 mt-2 w-56 origin-top-right divide-y divide-gray-100 rounded-md bg-white shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none">
                    <div className="px-1 py-1 ">
                      <Menu.Item>
                        {({ active }) => (
                          <button
                            className={`${
                              active
                                ? "bg-violet-500 text-white"
                                : "text-gray-900"
                            } group flex w-full items-center rounded-md px-2 py-2 text-sm`}
                          >
                            Price Low To High
                          </button>
                        )}
                      </Menu.Item>
                      <Menu.Item>
                        {({ active }) => (
                          <button
                            className={`${
                              active
                                ? "bg-violet-500 text-white"
                                : "text-gray-900"
                            } group flex w-full items-center rounded-md px-2 py-2 text-sm`}
                          >
                            Price High To Low
                          </button>
                        )}
                      </Menu.Item>
                      <Menu.Item>
                        {({ active }) => (
                          <button
                            className={`${
                              active
                                ? "bg-violet-500 text-white"
                                : "text-gray-900"
                            } group flex w-full items-center rounded-md px-2 py-2 text-sm`}
                          >
                            Price High Discount
                          </button>
                        )}
                      </Menu.Item>
                    </div>
                  </Menu.Items>
                </Transition>
              </Menu>
            </div>
          </div>

          <Tab.Panels>
            <Tab.Panel>
              <FourColumns productData={data} />
            </Tab.Panel>
            <Tab.Panel>
              <TwoColumns productData={data} />
            </Tab.Panel>
          </Tab.Panels>
        </div>

        <div className="container mx-auto flex justify-center">
          <div className="space-x-3 mt-3 font-Poppins">
            {[...Array(pages).keys()].map((number) => (
              <button className="w-10 h-7 bg-white shadow-lg">
                <p
                  onClick={() => setPage(number)}
                  className={page === number && "bg-green-50"}
                  key={number}
                >
                  {number}
                </p>
              </button>
            ))}

            <select
              onChange={(event) => setSize(event.target.value)}
              className="w-10 h-7 shadow-lg font-Poppins"
            >
              <option value="5">5</option>
              <option selected value="10">
                10
              </option>
              <option value="15">15</option>
              <option value="20">20</option>
            </select>
          </div>
        </div>
      </Tab.Group>

      <FooterSubscribe />
    </>
  );
};

export default Shop;
