import React, { useContext, useEffect, useState } from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";
import { HiOutlineHeart } from "react-icons/hi2";
import {
  RiFacebookFill,
  RiInstagramLine,
  RiTwitterFill,
  RiWhatsappFill,
} from "react-icons/ri";

// Import Swiper styles
import "swiper/css";
import "swiper/css/free-mode";
import "swiper/css/navigation";
import "swiper/css/thumbs";

// import required modules
import { FreeMode, Navigation, Thumbs } from "swiper";
import { Link, useLoaderData } from "react-router-dom";
import { IconContext } from "react-icons";
import Footer from "../../../Shared/Footer/Footer";
import Review from "../../Review/Review";
import axios from "axios";
import ProductCard from "./ProductCard";
import { AuthContext } from "../../../Context/userContext";
import { toast } from "react-hot-toast";

export function ProductsDetails() {
  const [quantity, setQuantity] = useState(1);
  const { Orders } = useContext(AuthContext);
  const data = useLoaderData();
  const {
    brandName,
    name,
    available,
    availableStatus,
    categories,
    describe,
    disCountPrice,
    extraTax,
    price,
    productCode,
    review,
    sold,
    imgThumb,
    imgThumbSec,
    _id,
  } = data;
  const [relatedData, setRelatedData] = useState([]);

  useEffect(() => {
    axios
      .get(`http://localhost:5000/related-products/${categories}`)
      .then((data) => setRelatedData(data.data))
      .catch((error) => console.log(error));
  }, [categories]);

  const [thumbsSwiper, setThumbsSwiper] = useState(null);

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
      <section className="py-10">
        <div className="container mx-auto">
          <div className="grid lg:grid-cols-2 gap-10 lg:w-[80%] w-[98%] mx-auto">
            <aside className="lg:w-[500px] w-[380px]">
              <Swiper
                style={{
                  "--swiper-navigation-color": "#fff",
                  "--swiper-pagination-color": "#fff",
                }}
                spaceBetween={10}
                // navigation={true}
                // thumbs={{ swiper: thumbsSwiper }}
                modules={[FreeMode, Navigation, Thumbs]}
                className="mySwiper2"
              >
                {data.imgGallery?.map((img, inx) => (
                  <SwiperSlide key={inx}>
                    <img className="bg-green-50" src={img} alt="" />
                  </SwiperSlide>
                ))}
              </Swiper>
              <Swiper
                onSwiper={setThumbsSwiper}
                spaceBetween={10}
                slidesPerView={4}
                freeMode={true}
                watchSlidesProgress={true}
                modules={[FreeMode, Navigation, Thumbs]}
                className="mySwiper"
              >
                {data.imgGallery?.map((img, inx) => (
                  <SwiperSlide key={inx}>
                    <img className="border" src={img} alt="" />
                  </SwiperSlide>
                ))}
              </Swiper>
            </aside>
            <aside className="px-5">
              <div>
                <p className="font-Ubuntu">
                  <span className="text-xl uppercase font-light text-gray-500 tracking-widest">
                    {brandName}
                  </span>
                </p>
                <h1 className="font-Poppins text-3xl mt-1">{name}</h1>
                <div className="flex items-center space-x-3 font-Poppins text-[0.9rem]">
                  <div className="flex items-center py-5">
                    <svg
                      aria-hidden="true"
                      className="w-4 h-4 text-yellow-400"
                      fill="currentColor"
                      viewBox="0 0 20 20"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <title>First star</title>
                      <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"></path>
                    </svg>
                    <svg
                      aria-hidden="true"
                      className="w-4 h-4 text-yellow-400"
                      fill="currentColor"
                      viewBox="0 0 20 20"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <title>Second star</title>
                      <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"></path>
                    </svg>
                    <svg
                      aria-hidden="true"
                      className="w-4 h-4 text-yellow-400"
                      fill="currentColor"
                      viewBox="0 0 20 20"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <title>Third star</title>
                      <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"></path>
                    </svg>
                    <svg
                      aria-hidden="true"
                      className="w-4 h-4 text-yellow-400"
                      fill="currentColor"
                      viewBox="0 0 20 20"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <title>Fourth star</title>
                      <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"></path>
                    </svg>
                    <svg
                      aria-hidden="true"
                      className="w-4 h-4 text-gray-300 dark:text-gray-500"
                      fill="currentColor"
                      viewBox="0 0 20 20"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <title>Fifth star</title>
                      <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"></path>
                    </svg>
                  </div>
                  <p>({review} Review)</p>
                  <p className="border-r h-4"></p>
                  <p>Write A Review</p>
                </div>

                <div className="flex items-center space-x-3 mb-4">
                  <p className="text-[#3A9943] text-2xl font-bold">${price}</p>
                  <p className="line-through text-2xl">${disCountPrice}</p>
                </div>

                <div className="space-y-2 border-b mt-5 pb-4 mb-3">
                  <p>
                    Ex Tax : <span className="text-[#3A9943]">${extraTax}</span>
                  </p>
                  <p>
                    Brand :{" "}
                    <span className="text-[#3A9943] uppercase">
                      {brandName}
                    </span>
                  </p>
                  <p>
                    Products Code :{" "}
                    <span className="text-[#3A9943] uppercase">
                      {productCode}
                    </span>
                  </p>
                  <p>
                    Available :{" "}
                    <span className="text-[#3A9943]">
                      {availableStatus === true ? "In Stock" : "Sold Out"}
                    </span>
                  </p>
                </div>

                <p className="border-b pb-5 text-[0.9rem] text-justify">
                  {describe}
                </p>

                <div className="mt-7 flex flex-col lg:flex-row lg:items-center space-y-5 lg:space-y-0 lg:space-x-3">
                  <div className="flex items-center space-x-3">
                    <p>Qty</p>
                    <div className="flex items-center justify-between">
                      <p
                        className="text-[1.rem] border px-3 py-1 cursor-pointer"
                        onClick={() => setQuantity(quantity - 1)}
                      >
                        -
                      </p>
                      <p className="text-[1.rem] border px-7 py-1">
                        {quantity}
                      </p>
                      <p
                        className="text-[1.rem] border px-3 py-1 cursor-pointer"
                        onClick={() => setQuantity(quantity + 1)}
                      >
                        +
                      </p>
                    </div>
                  </div>

                  <button
                    onClick={() => Orders(data)}
                    className="bg-[#f67321] text-white px-3  py-1.5 rounded-sm font-Poppins text-[0.9rem] w-[51.3%]"
                  >
                    Add To Cart
                  </button>
                  <button className="bg-[#2ac4f3] text-white px-6 py-1.5 rounded-sm font-Poppins text-[0.9rem] w-[51.3%]">
                    Buy Now
                  </button>
                </div>

                <aside className="font-Poppins text-[1rem] mt-4 flex items-center space-x-1">
                  <IconContext.Provider value={{ color: "", size: 18 }}>
                    <HiOutlineHeart />
                  </IconContext.Provider>
                  <span className="text-[0.9rem]">Add To Wishlist</span>
                </aside>

                <div className="mt-4">
                  <p className="font-Poppins text-[0.9rem]">Share products</p>
                  <aside className="flex items-center space-x-2 mt-2 mb-3">
                    <div className="border p-1">
                      <IconContext.Provider
                        value={{ color: "#1977F2", size: 18 }}
                      >
                        <RiFacebookFill />
                      </IconContext.Provider>
                    </div>
                    <div className="border p-1">
                      <IconContext.Provider
                        value={{ color: "#1DA1F2", size: 18 }}
                      >
                        <RiTwitterFill />
                      </IconContext.Provider>
                    </div>
                    <div className="border p-1">
                      <IconContext.Provider
                        value={{ color: "#44C553", size: 18 }}
                      >
                        <RiWhatsappFill />
                      </IconContext.Provider>
                    </div>
                    <div className="border p-1">
                      <IconContext.Provider
                        value={{ color: "#FB02B2", size: 18 }}
                      >
                        <RiInstagramLine />
                      </IconContext.Provider>
                    </div>
                  </aside>
                </div>
              </div>
            </aside>
          </div>
        </div>

        <div className="container mx-auto lg:w-[65%] border-b pb-1 lg:mt-16 w-[80%]">
          <div className="flex items-center justify-start lg:space-x-10 space-x-3">
            <Link to="/review">
              <h1 className="text-center mt-16 lg:text-xl font-Poppins">
                Review
              </h1>
            </Link>
          </div>
        </div>

        <Review />
      </section>
      <section className="container mx-auto lg:w-[65%] w-11/12 mt-16">
        <h1 className="capitalize text-2xl font-Poppins text-center underline underline-offset-8 mb-5">
          You May also like
        </h1>
        <div className="grid grid-cols-2 lg:grid-cols-5 gap-6 py-10">
          {relatedData?.map((product, inx) => (
            <ProductCard key={inx} product={product}></ProductCard>
          ))}
        </div>
      </section>
      <Footer />
    </>
  );
}
