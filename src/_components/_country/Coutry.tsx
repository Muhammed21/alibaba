import clsx from "clsx";
import Image from "next/image";
import { useState, useEffect } from "react";

interface CountryProps {
  className?: string;
  size?: number;
}

export const CountrySwitch = ({ className, size = 10 }: CountryProps) => {
  const countries = ["fr", "tr", "en"];

  const [countryID, setCountryId] = useState(1);
  const [isIncreasing, setIsIncreasing] = useState(true);

  useEffect(() => {
    if (typeof window !== "undefined") {
      const localCountry = localStorage.getItem("countryID");
      if (localCountry) {
        const index = countries.indexOf(localCountry);
        if (index !== -1) {
          setCountryId(index + 1);
        }
      }
    }
  }, []);

  let countryBorderSwitch = "";

  let sizeSwitcher: string = `w-${size}`;

  if (!["w-10", "w-12", "w-14"].includes(sizeSwitcher)) {
    sizeSwitcher = "w-10";
  }

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
      const newID = isIncreasing
        ? prevID < 3
          ? prevID + 1
          : 1
        : prevID > 1
        ? prevID - 1
        : 3;

      setIsIncreasing(newID !== 3);
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
        sizeSwitcher,
        "relative cursor-pointer border hover:opacity-80 active:scale-110 transition-all duration-200 ease-in-out rounded-full aspect-square"
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
