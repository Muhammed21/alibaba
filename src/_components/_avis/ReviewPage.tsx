import React from "react";
import SliderCards from "./SliderCards";
import { Typographie } from "@/_design/Typographie";
import { useTranslations } from "next-intl";
import Image from "next/image";

const ReviewPage = () => {
  const t = useTranslations("review");
  const tBottom = useTranslations("header.navigation.bottom");
  return (
    <section
      id={tBottom("review")}
      className="bg-bg-review w-full h-max flex flex-col gap-20 py-24 items-center justify-center relative"
    >
      <Image
        src={"/_img/_pattern/pattern-mountain-reverse.png"}
        alt="Pattern"
        width={1920}
        height={500}
        className="absolute top-[-50px] z-0 lg:h-max sm:h-[800px] h-[600px] left-0 pointer-events-none"
      />
      <div className="w-full h-max flex z-5 flex-col gap-6 px-4 sm:px-0 items-center justify-center">
        <Typographie variant="h2" color="white" fontFamily="Edo">
          {t("title")}
        </Typographie>
        <Typographie
          variant="h4"
          color="white"
          fontFamily="Montserrat"
          className="text-center"
        >
          {t("subtitle")}
        </Typographie>
      </div>
      <SliderCards />
    </section>
  );
};

export default ReviewPage;
