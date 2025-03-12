import React from "react";
import SliderCards from "./SliderCards";
import { Typographie } from "@/_design/Typographie";

const ReviewPage = () => {
  return (
    <section className=" bg-bg-review w-full h-max flex flex-col gap-20 py-16 items-center justify-center">
      <div className="w-max h-max flex flex-col gap-6 items-center justify-center">
        <Typographie variant="h2" color="white" fontFamily="Edo">
          Voici Nos Avis
        </Typographie>
        <Typographie variant="h4" color="white" fontFamily="Montserrat">
          Découvrez les avis de nos clients et leur expérience avec nous !
        </Typographie>
      </div>
      <SliderCards />
    </section>
  );
};

export default ReviewPage;
