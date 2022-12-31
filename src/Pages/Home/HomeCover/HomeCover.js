import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import { Autoplay, Pagination, Navigation } from "swiper";
import Cover1 from "../../Images/Cover1.jpg";
import Cover2 from "../../Images/Cover2.jpg";
import Cover3 from "../../Images/Cover3.jpg";

export const HomeCover = () => {
  return (
    <>
      <Swiper
        spaceBetween={30}
        centeredSlides={true}
        // autoplay={{
        //   delay: 4500,
        //   disableOnInteraction: false,
        // }}
        // pagination={{
        //   clickable: true,
        // }}
        // navigation={true}
        modules={[Autoplay, Pagination, Navigation]}
        className="mySwiper"
      >
        <SwiperSlide>
          <div className="border bg-[#F7F7F7] h-[250px] lg:h-full">
            <div className="relative container mx-auto">
              <div>
                <img src={Cover1} alt="" />
              </div>

              <div className="absolute top-1/4 lg:-right-28 right-3">
                <p className="text-[14px] lg:text-[17px] text-[#7A806E] font-Poppins">
                  New Arrival 2021
                </p>
                <h2 className="lg:text-6xl text-[1.2rem] font-bold leading-snug font-Prosto">
                  New Perfect Plant <br /> Collection
                </h2>
                <p className="mt-3 text-[#7A806E] w-1/2 lg:block hidden">
                  There or are many the variations of passages of Lorem Ipsum or
                  available, but the majority have but the majority have
                  suffered alteration...
                </p>

                <button className="bg-[#014E37] text-white px-5 py-1.5 rounded-[3px] lg:mt-16 mt-5">
                  Shop Now
                </button>
              </div>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="border bg-[#F2F7F3] h-[250px] lg:h-full">
            <div className="relative container mx-auto">
              <div>
                <img src={Cover2} alt="" />
              </div>

              <div className="absolute top-1/4 lg:-right-28 right-3">
                <p className="text-[14px] lg:text-[17px] text-[#7A806E] font-Poppins">
                  New Arrival 2021
                </p>
                <h2 className="lg:text-6xl text-[1.2rem] font-bold leading-snug font-Prosto">
                  New Perfect Plant <br /> Collection
                </h2>
                <p className="mt-3 text-[#7A806E] w-1/2 lg:block hidden ">
                  There or are many the variations of passages of Lorem Ipsum or
                  available, but the majority have but the majority have
                  suffered alteration...
                </p>

                <button className="bg-[#014E37] text-white px-5 py-1.5 rounded-[3px] lg:mt-16 mt-5">
                  Shop Now
                </button>
              </div>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="border bg-[#F2F7F3] h-[250px] lg:h-full">
            <div className="relative container mx-auto">
              <div>
                <img src={Cover3} alt="" />
              </div>

              <div className="absolute top-1/4 lg:-right-28 right-3">
                <p className="text-[14px] lg:text-[17px] text-[#7A806E] font-Poppins">
                  New Arrival 2021
                </p>
                <h2 className="lg:text-6xl text-[1.2rem] font-bold leading-snug font-Prosto">
                  New Perfect Plant <br /> Collection
                </h2>
                <p className="mt-3 text-[#7A806E] w-1/2 lg:block hidden">
                  There or are many the variations of passages of Lorem Ipsum or
                  available, but the majority have but the majority have
                  suffered alteration...
                </p>

                <button className="bg-[#014E37] text-white px-5 py-1.5 rounded-[3px] lg:mt-16 mt-5">
                  Shop Now
                </button>
              </div>
            </div>
          </div>
        </SwiperSlide>
      </Swiper>
    </>
  );
};
