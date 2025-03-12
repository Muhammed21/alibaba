import React from "react";
import StarsReview from "./StarsReview";
import { Typographie } from "@/_design/Typographie";
import Image from "next/image";
import { GoArrowDownRight } from "react-icons/go";

const ReviewCard = () => {
  const numberOfStars = 3;

  return (
    <div className="rounded-[10px] cursor-pointer group w-full h-fit px-[15px] py-[20px] bg-gray-card">
      <div className="w-full space-y-[20px]">
        <div className="flex w-full items-center justify-between">
          <StarsReview numberOfStars={numberOfStars} />
          <GoArrowDownRight className="text-white transform rotate-270 group-hover:rotate-225  transition-all duration-300 ease-in-out" size={30} />
        </div>

        <div className="space-y-[15px]">
          <div className="flex items-center gap-[15px]">
            <Typographie
              fontFamily="Montserrat"
              isBold
              variant="h5"
              color="white"
            >
              Zeen Rai
            </Typographie>
            <div className="w-[32px] aspect-square rounded-full overflow-hidden relative">
              <Image
                alt="profile picture"
                fill
                src="/_img/_png/profilePic.jpg"
                className="absolute object-cover"
              />
            </div>
          </div>
          <div className="flex items-center gap-[15px]">
            <div className="flex items-center gap-[7px]">
              <Typographie
                isBold={false}
                fontFamily="Montserrat"
                variant="h6"
                color="primary"
              >
                Fr
              </Typographie>
              <Image
                alt="profile picture"
                width={16}
                height={16}
                src="/_img/_svg/map-pin.svg"
              />
            </div>

            <Typographie
              fontFamily="Montserrat"
              variant="h6"
              color="white"
              isBold={false}
            >
              (15mars 2025)
            </Typographie>
          </div>
          <Typographie
            className="max-w-[314px]"
            fontFamily="Montserrat"
            variant="h6"
            color="white"
            isBold={false}
          >
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore
          </Typographie>
          <div>
            <div className="overflow-hidden relative w-[200px] aspect-video rounded-[10px]">
              <Image
                alt="profile picture"
                fill
                className="absolute"
                src="/_img/_png/imgTest.jpg"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ReviewCard;
