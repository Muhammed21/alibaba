import { String } from "@/_types/string_type";
import clsx from "clsx";
import Image from "next/image";
import { useState } from "react";

interface CountryProps {
  className?: string;
}

export const CountrySwitch = ({ className }: CountryProps) => {
  const countries = ["fr", "tr", "en"];
  const [countryID, setCountryId] = useState(1);
  const [isIncreasing, setIsIncreasing] = useState(true);

  let countryBorderSwitch: String = "";

  switch (countryID) {
    case 1:
      countryBorderSwitch = "border-[#2867F0]";
      break;
    case 2:
      countryBorderSwitch = "border-red-500";
      break;
    case 3:
      countryBorderSwitch = "border-[#B31942]";
      break;
  }

  const handleCountrySwitch = () => {
    setCountryId((prevID) => {
      let newID;
      if (isIncreasing) {
        newID = prevID < 3 ? prevID + 1 : 1;
      } else {
        newID = prevID > 1 ? (prevID = 1) : 3;
      }

      if (newID === 3) setIsIncreasing(false);
      if (newID === 1) setIsIncreasing(true);

      localStorage.setItem("countryID", countries[newID - 1]);
      return newID;
    });
  };

  return (
    <button
      onClick={handleCountrySwitch}
      className={clsx(
        className,
        countryBorderSwitch,
        "relative cursor-pointer border hover:opacity-80 active:scale-110 transition-all duration-200 ease-in-out rounded-full w-10 aspect-square"
      )}
    >
      <Image
        src={`/_img/_svg/${countries[countryID - 1]}.svg`}
        alt="country switcher"
        fill
        className="absolute object-cover p-0.5 pointer-events-none rounded-full"
      />
    </button>
  );
};
