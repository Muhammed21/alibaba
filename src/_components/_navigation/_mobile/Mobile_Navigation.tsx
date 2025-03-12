import { useToggle } from "@/_context/Toogle_Menu";
import { CTA } from "@/_design/CTA";
import { Top_Navigation_Bar } from "../Top_Navigation_Bar";
import clsx from "clsx";
import Image from "next/image";
import { CountrySwitch } from "@/_components/_country/Coutry";

export const Mobile_Navigation = () => {
  const { toggle, setToggle } = useToggle();
  return (
    <section
      className={clsx(
        toggle === 0 && "opacity-0 pointer-events-none",
        "fixed transition-all duration-300 ease-in-out top-0 left-0 z-50 bg-black flex flex-col items-center justify-center w-full h-screen"
      )}
    >
      <div className="absolute top-0 left-0 w-full border border-b-white/15">
        <Top_Navigation_Bar />
      </div>
      {/* BURGER MENU BUTTON */}
      <button
        className="absolute top-16 right-2 block text-white lg:hidden cursor-pointer"
        onClick={setToggle}
      >
        <Image
          src="/_img/_svg/close.svg"
          alt="close button"
          width={24}
          height={24}
        />
      </button>
      <div className="flex flex-col items-center justify-center gap-12">
        <CTA
          variant="link"
          textSize={20}
          className="w-max"
          href="#CARTE"
          color="white"
          isBold={false}
        >
          Notre Carte
        </CTA>
        <CTA
          variant="link"
          textSize={20}
          className="w-max"
          color="white"
          isBold={false}
        >
          Nos Restaurant
        </CTA>
        <CTA
          variant="link"
          textSize={20}
          className="w-max"
          color="white"
          isBold={false}
        >
          Nous Rejoindre !
        </CTA>
      </div>
      <div className="absolute bottom-4 right-2.5 w-max h-max">
        <CountrySwitch />
      </div>
    </section>
  );
};
