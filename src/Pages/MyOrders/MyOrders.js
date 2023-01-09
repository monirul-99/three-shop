import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { AuthContext } from "../../Context/userContext";
import Footer from "../../Shared/Footer/Footer";
import OrdersCard from "./OrdersCard";
import "./Spinner.css";

const MyOrders = () => {
  const { orderProductsDelete, myOrders } = useContext(AuthContext);

  const sum = myOrders.reduce((accumulator, object) => {
    return accumulator + object.price;
  }, 0);

  return (
    <>
      <section className="relative bg-[url(https://res.cloudinary.com/dr4o1qswz/image/upload/v1672635981/Tree%20SHOP/UpdateTree/Untitled-2_e9x6ul.jpg)] bg-cover bg-center bg-no-repeat lg:h-[200px] h-[180px]">
        <div className="absolute inset-0 bg-black/40 flex items-center justify-center">
          <div className="text-center sm:text-left ">
            <h1 className="lg:text-3xl text-2xl text-center font-Poppins text-white font-semibold">
              #orderProducts
            </h1>

            <p className="mt-4 font-Poppins text-white">
              Save more with coupons & up to 70% off!
            </p>
          </div>
        </div>
      </section>
      <section className="bg-[#ece8e8]">
        <section className="container mx-auto py-7 lg:w-[70%]">
          <div className="lg:grid lg:grid-cols-5 flex flex-col-reverse gap-12 relative">
            <div className="lg:grid lg:col-span-3 lg:grid-cols-1 gap-7 bg-white p-5 rounded-md">
              {myOrders?.map((order, inx) => (
                <OrdersCard
                  orderProductsDelete={orderProductsDelete}
                  key={inx}
                  order={order}
                ></OrdersCard>
              ))}
            </div>
            <div className="lg:grid lg:col-span-2 h-[300px] right-0 lg:top-5 top-28 sticky">
              <div className="bg-white p-5 lg:rounded-md rounded-b-3xl border-b-4 lg:border-b-0 border-blue-600">
                <h1 className="font-Poppins capitalize text-xl mb-5">
                  Order summary
                </h1>
                <aside className="flex justify-between mb-5">
                  <p className="capitalize font-Poppins">sub total : </p>
                  <p className="capitalize font-Poppins">${sum}</p>
                </aside>
                <aside className="flex justify-between mb-5">
                  <p className="capitalize font-Poppins">Extra Tax : </p>
                  <p className="capitalize font-Poppins">
                    ${sum ? "17" : "00"}
                  </p>
                </aside>
                <aside className="flex justify-between border-b-2 pb-2">
                  <p className="capitalize font-Poppins">shipping free : </p>
                  <p className="capitalize font-Poppins">
                    ${sum ? "07" : "00"}
                  </p>
                </aside>
                <aside className="flex justify-between pt-3 mb-5">
                  <p className="capitalize font-Poppins">total payable : </p>
                  <p className="capitalize font-Poppins font-bold">
                    ${sum + 17 + 7}
                  </p>
                </aside>
                <Link to="/payments-page">
                  <button className="bg-orange-600 h-12 capitalize text-white font-Poppins w-full rounded-full">
                    Process to checkout
                  </button>
                </Link>
              </div>

              {/* <div className="bg-white p-5 rounded-md mt-5 h-[250px]">
                <h1 className="font-Poppins capitalize text-xl">
                  Payment Methods
                </h1>
                <div className="flex items-center space-x-2">
                  <img className="w-10" src={Visa} alt="" />
                  <img className="w-10" src={Master} alt="" />
                  <img className="w-10" src={American} alt="" />
                  <img className="w-10" src={Discover} alt="" />
                </div>

                <div>
                  <h1 className="font-Poppins capitalize text-xl">
                    Buyer Protection
                  </h1>
                  <p className="border-b w-full"></p>
                  <div>
                    <p className="font-Poppins text-[1rem]">
                      Get full refund if the item is not as described or if is
                      not delivered
                    </p>
                  </div>
                </div>
              </div> */}
            </div>
          </div>
        </section>
      </section>

      <Footer />
    </>
  );
};

export default MyOrders;
