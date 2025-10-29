import React, { useEffect, useRef } from "react";
// Swiper komponentlari
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import { Autoplay, Pagination, Navigation } from "swiper/modules";

import { Link } from "react-router-dom";

export default function SwiperHome() {


  const arr = [1, 2, 3, 4, 5];


  return (
    <div className="">
        <div className="3xl:w-full mx-auto select-none overflow-hidden rounded-md bg-[#f7f7f7] font-sans text-sm text-white md:aspect-[16/7] lg:w-[100%]">
          <Swiper
            spaceBetween={0}
            centeredSlides={true}
            autoplay={{
              delay: 5000,
              disableOnInteraction: false,
            }}
            // pagination={{ clickable: true }}
            navigation={{ enabled: window.innerWidth >= 768 }} // faqat md: dan keyin chiqadi
            modules={[Autoplay, Pagination, Navigation]}
            // onAutoplayTimeLeft={onAutoplayTimeLeft}
            className="h-full w-full"
          >
            {arr?.map((item, idx) => {
              // const { kun, oy } = parseDateParts(item.created_at);
              return (
                <SwiperSlide
                  key={idx}
                  className="relative flex items-center justify-center bg-gray-700 text-lg"
                >
                  {/* <img
                    src={item.image}
                    className="h-full w-full object-cover"
                    alt={`${item.id}-slide`}
                  /> */}

                  {/* kontent */}
                  <Link
                    to={`/press/news-info/${idx}`}
                    className="absolute bottom-2 left-2 right-4 z-20 sm:bottom-4 sm:left-4 md:bottom-10 md:left-14"
                  >
                    <div className="flex flex-col gap-2 md:flex-row md:justify-between">
                      <h4 className="w-full font-montserrat text-xs font-bold leading-snug sm:text-sm md:w-[70%] md:text-lg md:uppercase xl:text-[24px] 2xl:text-[30px]">
                        {item}
                      </h4>
                      <div className="text-left sm:text-right mr-14">
                        <div className="text-center">
                          <span className="block font-montserrat text-xs font-bold uppercase sm:text-sm md:text-lg xl:text-[24px] 2xl:text-[30px]">
                          {item}
                        </span>
                        </div>
                      </div>
                    </div>
                  </Link>

                  <div className="absolute inset-0 z-10 bg-gradient-to-b from-transparent via-black/40 to-black/80 opacity-80 transition-opacity duration-300"></div>
                </SwiperSlide>
              );
            })}

            
          </Swiper>
        </div>
    </div>
  );
}
