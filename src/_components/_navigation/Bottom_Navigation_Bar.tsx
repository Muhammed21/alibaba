import { useToggle } from "@/_context/Toogle_Menu";
import { CTA } from "@/_design/CTA";
import Image from "next/image";
import { GoArrowDownRight } from "react-icons/go";
import { IoIosMenu } from "react-icons/io";
import { Mobile_Navigation } from "./_mobile/Mobile_Navigation";
import { CountrySwitch } from "../_country/Coutry";
import { useTranslations } from "next-intl";

export const Bottom_Navigation_Bar = () => {
  const tBottom = useTranslations("header.navigation.bottom");
  const { setToggle } = useToggle();
  return (
    <div className="z-15 flex w-full justify-between items-center p-2 md:px-200 md:py-2.5 bg-black/50">
      <div className="w-full justify-start">
        <Image
          src={"/_img/_logo/Logo-AliBaba.png"}
          alt="Logo Alibaba"
          width={100}
          height={50}
        />
      </div>
      <div className="hidden lg:flex w-full gap-8 items-center justify-center ">
        <CTA
          variant="link"
          textSize={14}
          className="w-max"
          href={`#${tBottom("home")}`}
          color="white"
          isBold={false}
        >
          {tBottom("home")}
        </CTA>
        <CTA
          variant="link"
          textSize={14}
          className="w-max"
          href={`#${tBottom("menu")}`}
          color="white"
          isBold={false}
        >
          {tBottom("menu")}
        </CTA>
        <CTA
          variant="link"
          textSize={14}
          className="w-max"
          href={`#${tBottom("review")}`}
          color="white"
          isBold={false}
        >
          {tBottom("review")}
        </CTA>
      </div>
      <div className="flex items-center justify-end w-full gap-7">
        <CTA
          variant="External_link"
          textSize={14}
          icon={{ icon: GoArrowDownRight }}
          className="hidden lg:flex w-full justify-end"
          color="white"
          href="https://www.google.com/search?sca_esv=11a0cbbb8d287e03&q=alibaba+annecy&si=APYL9btvhO6SAb8jF9HqTZMMa7vs_teLnZaEVrJZwRKFIIKjoWr0dCuVW-PFvP0AeoMwJ1iXvTvwuRWKibwRmssCzNUups9bVv6zl3kxPxCXafkSq1liUog%3D&uds=ABqPDvzh2Ji1Kqt-7EMvWRUQDfyqlF-_jbh08GYEE3HgnzS8EJ4nuj5MAAFN-6QPqU_x5G3l7iQrmV0rKm_no9agqr2xlodAhTY2_pq28IWHeNh2ypwtxDM&sa=X&sqi=2&ved=2ahUKEwjQ9ruin4SMAxW8UqQEHWIIMYYQ3PALegQIGxAE&biw=1920&bih=953&dpr=1"
          isBold={false}
        >
          {tBottom("allReview")}
        </CTA>
        <CountrySwitch className="hidden lg:flex" />
      </div>

      {/* BURGER MENU BUTTON */}
      <button
        className="block text-white lg:hidden cursor-pointer"
        onClick={setToggle}
      >
        <IoIosMenu size={32} />
      </button>
      <Mobile_Navigation />
    </div>
  );
};
