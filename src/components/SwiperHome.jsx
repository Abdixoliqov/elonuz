import React, { useRef, useEffect } from 'react'
import { Swiper, SwiperSlide } from 'swiper/react'
import 'swiper/css'
import 'swiper/css/navigation'
import { Autoplay, Navigation } from 'swiper/modules'
import { Link } from 'react-router-dom'

export default function SwiperHome() {
  const arr = [1, 2, 3, 4, 5]

  const prevRef = useRef(null)
  const nextRef = useRef(null)
  const swiperRef = useRef(null)

  useEffect(() => {
    if (swiperRef.current) {
      // 🔹 Swiper yaratilgach, navigationni qayta bog‘lash
      swiperRef.current.params.navigation.prevEl = prevRef.current
      swiperRef.current.params.navigation.nextEl = nextRef.current

      swiperRef.current.navigation.destroy()
      swiperRef.current.navigation.init()
      swiperRef.current.navigation.update()
    }
  }, [])

  return (
    <div className="relative">
      <div className="3xl:w-full relative mx-auto overflow-hidden rounded-md font-sans text-sm text-white select-none md:aspect-[16/6] lg:w-[100%] shadow">
        <Swiper
          onSwiper={(swiper) => {
            swiperRef.current = swiper
          }}
          spaceBetween={0}
          centeredSlides={true}
          autoplay={{
            delay: 5000,
            disableOnInteraction: false,
          }}
          modules={[Autoplay, Navigation]}
          navigation={{
            prevEl: prevRef.current,
            nextEl: nextRef.current,
          }}
          className="h-full w-full"
        >
          {arr.map((item, idx) => (
            <SwiperSlide
              key={idx}
              className="relative flex items-center justify-center bg-[#f4efeb] text-lg"
            >
              <div className="flex">
                <Link to={`/press/news-info/${idx}`} className="w-[40%]">
                  <div className="flex flex-col items-center mt-10">
                    <h4 className="font-montserrat w-full text-xs leading-snug font-bold sm:text-sm md:w-[70%] md:text-lg md:uppercase xl:text-[24px] 2xl:text-[30px] text-[#a77b52]">
                      Bu yerda premium e'lonlar sarlavhalari joylashadi
                    </h4>
                    {/* / */}
                  </div>
                </Link>
                <div className="w-[60%]">
                  <img
                    src={'carousel.webp'}
                    className="h-full w-full object-cover"
                    alt={`slide-${idx}`}
                  />
                </div>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>

        {/* 🔹 Custom navigation buttons */}
        <button
          ref={prevRef}
          className="absolute top-1/2 left-4 z-30 hidden h-14 w-8 -translate-y-1/2 cursor-pointer items-center justify-center rounded-md bg-white shadow transition-all hover:bg-[#f7f7f7] active:scale-95 md:flex"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-6 w-6 text-black/40"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M15 19l-7-7 7-7"
            />
          </svg>
        </button>

        <button
          ref={nextRef}
          className="absolute top-1/2 right-4 z-30 hidden h-14 w-8 -translate-y-1/2 cursor-pointer items-center justify-center rounded-md bg-white shadow transition-all hover:bg-[#f7f7f7] active:scale-95 md:flex"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-6 w-6 text-black/40"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5l7 7-7 7" />
          </svg>
        </button>
      </div>
    </div>
  )
}
