import React from "react";
import SliderCards from "./SliderCards";
import { Typographie } from "@/_design/Typographie";
import { useTranslations } from "next-intl";

const ReviewPage = () => {
  const t = useTranslations("review");
  return (
    <section className=" bg-bg-review w-full h-max flex flex-col gap-20 py-16 items-center justify-center">
      <div className="w-full h-max flex flex-col gap-6 px-4 sm:px-0 items-center justify-center">
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
