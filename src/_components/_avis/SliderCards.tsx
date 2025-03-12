import React, { useRef, useEffect } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import type { Swiper as SwiperCore } from "swiper"; // Import the Swiper type
import { Navigation, Autoplay } from "swiper/modules"; // Import Autoplay module
import "swiper/swiper-bundle.css";
import Image from "next/image";
import ReviewCard from "./ReviewCard";

const SliderCards = () => {
  const prevButtonRef = useRef<HTMLDivElement>(null);
  const nextButtonRef = useRef<HTMLDivElement>(null);
  const swiperRef = useRef<SwiperCore | null>(null); // Use SwiperCore type

  useEffect(() => {
    if (
      swiperRef.current?.params?.navigation &&
      typeof swiperRef.current.params.navigation === "object"
    ) {
      swiperRef.current.params.navigation.prevEl = prevButtonRef.current;
      swiperRef.current.params.navigation.nextEl = nextButtonRef.current;
      swiperRef.current.navigation.init();
      swiperRef.current.navigation.update();
    }
  }, []);

  return (
    <div className="relative max-w-[1520px] px-4 sm:px-[76px] gap-12 items-center w-full">
      <Swiper
        spaceBetween={20}
        slidesPerView={1}
        navigation={{
          prevEl: prevButtonRef.current,
          nextEl: nextButtonRef.current,
        }}
        modules={[Navigation, Autoplay]}
        loop={true}
        autoplay={{
          delay: 2000,
          disableOnInteraction: false,
        }}
        breakpoints={{
          500: {
            slidesPerView: 1,
            spaceBetween: 20,
          },
          950: {
            slidesPerView: 2,
            spaceBetween: 40,
          },
          1200: {
            slidesPerView: 3,
            spaceBetween: 50,
          },
        }}
        onSwiper={(swiper) => {
          swiperRef.current = swiper;
        }}
      >
        <SwiperSlide>
          <ReviewCard />
        </SwiperSlide>
        <SwiperSlide>
          <ReviewCard />
        </SwiperSlide>
        <SwiperSlide>
          <ReviewCard />
        </SwiperSlide>
        <SwiperSlide>
          <ReviewCard />
        </SwiperSlide>
        <SwiperSlide>
          <ReviewCard />
        </SwiperSlide>
      </Swiper>

      <div
        ref={prevButtonRef}
        className="absolute hidden md:block top-1/2 left-0 transform -translate-y-1/2 cursor-pointer z-10"
      >
        <Image
          alt="previous"
          width={55}
          height={55}
          src="/_img/_svg/nextButton.svg"
        />
      </div>

      <div
        ref={nextButtonRef}
        className="absolute top-1/2 right-0 transform -translate-y-1/2 cursor-pointer z-10"
      >
        <Image
          className="transform hidden md:block rotate-180"
          alt="next"
          width={55}
          height={55}
          src="/_img/_svg/nextButton.svg"
        />
      </div>
    </div>
  );
};

export default SliderCards;
