import React from "react";
import StarsReview from "./StarsReview";
import { Typographie } from "@/_design/Typographie";
import Image from "next/image";
import { GoArrowDownRight } from "react-icons/go";
import { LuClock } from "react-icons/lu";

const ReviewCard = () => {
  const numberOfStars = 3;

  return (
    <div className="rounded-[10px] cursor-pointer group w-full h-fit p-[15px] hover:p-[14px] bg-gray-card hover:border border-primary">
      <div className="w-full space-y-[20px]">
        <div className="flex w-full items-center justify-between">
          <div className="flex items-center gap-[10px]">
            <div className="w-[28px] aspect-square rounded-full overflow-hidden relative">
              <Image
                alt="profile picture"
                fill
                src="/_img/_png/profilePic.jpg"
                className="absolute object-cover"
              />
            </div>
            <Typographie
              fontFamily="Montserrat"
              isBold
              variant="h5"
              color="white"
            >
              Zeen Rai
            </Typographie>
          </div>
          <GoArrowDownRight
            className="text-white transform rotate-270 group-hover:rotate-225  transition-all duration-300 ease-in-out"
            size={30}
          />
        </div>

        <div className="space-y-[15px]">
          <div className="flex items-center justify-center gap-2 w-max">
            <StarsReview numberOfStars={numberOfStars} />
            <div className="flex items-center gap-[7px]">
              <Typographie
                isBold={false}
                fontFamily="Montserrat"
                variant="h6"
                color="primary"
              >
                ( fr )
              </Typographie>
              {/* <Image
                alt="profile picture"
                width={16}
                height={16}
                src="/_img/_svg/map-pin.svg"
              /> */}
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
              15 mars 2025
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
