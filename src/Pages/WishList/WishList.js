import React, { useContext } from "react";
import { AuthContext } from "../../Context/userContext";
import WishCard from "./WishCard";

const WishList = () => {
  const { wishList } = useContext(AuthContext);
  return (
    <>
      <section className="relative bg-[url(https://res.cloudinary.com/dr4o1qswz/image/upload/v1672635981/Tree%20SHOP/UpdateTree/Untitled-2_e9x6ul.jpg)] bg-cover bg-center bg-no-repeat lg:h-[200px] h-[180px]">
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
      <section className="container mx-auto py-12">
        <div className="grid lg:grid-cols-2 gap-5 ">
          {wishList?.map((wish, inx) => (
            <WishCard key={inx} wish={wish}></WishCard>
          ))}
        </div>
      </section>
    </>
  );
};

export default WishList;
