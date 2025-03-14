import React from "react";
import StarsReview from "./StarsReview";
import { Typographie } from "@/_design/Typographie";
import Image from "next/image";
import { GoArrowDownRight } from "react-icons/go";
import { LuClock } from "react-icons/lu";
import Review from "@/_types/review";
import { useRouter } from "next/router";

const ReviewCard = ({
  name,
  text,
  stars,
  picture,
  imagesReview,
  publishableDate,
  reviewUrl,
  countryCode,
}: Review) => {
  const numberOfStars = stars;
  const router = useRouter();
  const { locale } = useRouter();

  let translatedText;

  switch (locale) {
    case "fr":
      translatedText = text[1];
      break;
    case "en":
      translatedText = text[0];
      break;
    case "tr":
      translatedText = text[2];
      break;

    default:
      break;
  }

  const formatedDate = new Date(publishableDate).toLocaleDateString("fr-FR", {
    day: "numeric",
    month: "long",
    year: "numeric",
  });

  return (
    <div
      onClick={() => router.push(reviewUrl)}
      className="rounded-[10px] cursor-pointer group w-full h-[350px] p-[15px] hover:p-[14px] bg-gray-card hover:border border-primary"
    >
      <div className="flex flex-col items-start justify-between w-full gap-[20px] h-full">
        <div className="flex w-full items-center justify-between">
          <div className="flex items-center gap-[10px]">
            <div className="w-[28px] aspect-square rounded-full overflow-hidden relative">
              <Image
                alt="profile picture"
                fill
                src={picture}
                className="absolute object-cover"
              />
            </div>
            <Typographie fontFamily="Edo" isBold variant="h5" color="white">
              {name}
            </Typographie>
          </div>
          <GoArrowDownRight
            className="text-white transform rotate-270 group-hover:rotate-225  transition-all duration-300 ease-in-out"
            size={30}
          />
        </div>

        <div className="flex flex-col gap-[15px] h-full">
          <div className="flex items-center justify-center gap-2 w-max">
            <StarsReview numberOfStars={numberOfStars} />
            <div className="flex items-center gap-[7px]">
              <Typographie
                isBold={false}
                fontFamily="Montserrat"
                variant="h6"
                color="primary"
              >
                ( {countryCode} )
              </Typographie>
            </div>
          </div>
          <div className="flex items-center gap-[7px]">
            <LuClock size={16} color="white" />
            <Typographie
              fontFamily="Montserrat"
              variant="h6"
              color="white"
              className="underline underline-offset-3"
              isBold={false}
            >
              {formatedDate}
            </Typographie>
          </div>
          <Typographie
            className="max-w-[314px]"
            fontFamily="Montserrat"
            variant="h6"
            color="white"
            isBold={false}
          >
            {translatedText &&
              (imagesReview.length > 0
                ? translatedText.slice(0, 100) + "..."
                : translatedText.length > 150
                ? translatedText.slice(0, 150) + "..."
                : translatedText)}
          </Typographie>
          <div className="flex h-full">
            {imagesReview.length > 0 ? (
              <div className="overflow-hidden relative w-[200px] aspect-video rounded-[10px]">
                <Image
                  alt="profile picture"
                  fill
                  className="absolute object-cover"
                  src={imagesReview[0]}
                />
              </div>
            ) : (
              <Typographie
                className="max-w-[314px] h-full content-end underline relative bottom-0"
                fontFamily="Montserrat"
                variant="h6"
                color="primary"
                isBold={false}
              >
                Aucune image Disponible
              </Typographie>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default ReviewCard;
