import clsx from "clsx";
import Image from "next/image";
import { useRouter } from "next/router";
import { useState, useEffect } from "react";

interface CountryProps {
  className?: string;
  size?: number;
}

export const CountrySwitch = ({ className, size = 10 }: CountryProps) => {
  const countries = ["fr", "tr", "en"];
  const { locale, route, push } = useRouter();

  const [countryID, setCountryId] = useState(1);

  // 🟢 Met à jour le drapeau en fonction de la locale
  useEffect(() => {
    const index = countries.indexOf(locale as string);
    if (index !== -1) {
      setCountryId(index + 1);
    }
  }, [locale]);

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
      const newID = prevID < 3 ? prevID + 1 : 1;
      const newLocale = countries[newID - 1];

      push(route, route, { locale: newLocale });

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
