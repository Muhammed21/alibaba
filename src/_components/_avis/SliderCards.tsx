import React, { useRef, useEffect, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import type { Swiper as SwiperCore } from "swiper";
import { Navigation, Autoplay } from "swiper/modules";
import "swiper/swiper-bundle.css";
import Image from "next/image";
import ReviewCard from "./ReviewCard";
import Review from "@/_types/review";

const SliderCards = () => {
  const prevButtonRef = useRef<HTMLDivElement>(null);
  const nextButtonRef = useRef<HTMLDivElement>(null);
  const swiperRef = useRef<SwiperCore | null>(null);

  const [reviewContent, setReviewContent] = useState<Review[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchReviews = async () => {
      try {
        const response = await fetch("/api/getReviewsFromDb");
        if (!response.ok) {
          throw new Error("Erreur lors de la récupération des avis");
        }
        const data: Review[] = await response.json();
        setReviewContent(data);
      } catch (err: unknown) {
        console.error(err);
        setError(
          err instanceof Error ? err.message : "Une erreur est survenue"
        );
      } finally {
        setLoading(false);
      }
    };

    fetchReviews();
  }, []);

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

  if (loading) return <div>Loading...</div>;
  if (error) return <div className="text-white text-xl">{error}</div>;

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
          delay: 3000,
          disableOnInteraction: false,
        }}
        breakpoints={{
          500: { slidesPerView: 1, spaceBetween: 20 },
          950: { slidesPerView: 2, spaceBetween: 40 },
          1200: { slidesPerView: 3, spaceBetween: 50 },
        }}
        onSwiper={(swiper) => (swiperRef.current = swiper)}
      >
        {reviewContent.map((item, index) => (
          <SwiperSlide key={index}>
            <ReviewCard
              name={item.name}
              text={item.text}
              stars={item.stars}
              picture={item.picture ? item.picture : "/_img/_png/ppBlank.png"}
              imagesReview={item.imagesReview}
              publishableDate={item.publishableDate}
              reviewUrl={item.reviewUrl}
              countryCode={item.countryCode}
            />
          </SwiperSlide>
        ))}
      </Swiper>

      <div
        ref={prevButtonRef}
        className="absolute hidden md:block top-1/2 left-0 transform -translate-y-1/2 cursor-pointer z-10 hover:opacity-70 transition-opacity ease-linear duration-200"
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
        className="absolute top-1/2 right-0 transform -translate-y-1/2 cursor-pointer z-10 hover:opacity-70 transition-opacity ease-linear duration-200"
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
