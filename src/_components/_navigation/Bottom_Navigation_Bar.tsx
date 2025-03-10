import { useToggle } from "@/_context/Toogle_Menu";
import { CTA } from "@/_design/CTA";
import Image from "next/image";
import { GoArrowDownRight } from "react-icons/go";
import { IoIosMenu } from "react-icons/io";
import { Mobile_Navigation } from "./_mobile/Mobile_Navigation";

export const Bottom_Navigation_Bar = () => {
  const { toggle, setToggle } = useToggle();
  return (
    <div className="flex w-full justify-between items-center p-2 md:px-200 md:py-2.5 bg-black/50">
      <div className="w-full justify-start">
        <Image
          src={"/_img/_logo/Logo-AliBaba.png"}
          alt="Logo Alibaba"
          width={100}
          height={50}
        />
      </div>
      <div className="hidden lg:flex w-full gap-8 items-center justify-center ">
        <CTA variant="link" textSize={14} className="w-max" isBold={false}>
          Notre Carte
        </CTA>
        <CTA variant="link" textSize={14} className="w-max" isBold={false}>
          Nos Restaurant
        </CTA>
        <CTA variant="link" textSize={14} className="w-max" isBold={false}>
          Nous Rejoindre !
        </CTA>
      </div>
      <CTA
        variant="External_link"
        textSize={14}
        icon={{ icon: GoArrowDownRight }}
        className="hidden lg:flex w-full justify-end"
        isBold={false}
      >
        Voir tous nos avis
      </CTA>

      {/* BURGER MENU BUTTON */}
      <button
        className="block text-white lg:hidden cursor-pointer"
        onClick={setToggle}
      >
        <IoIosMenu size={32} />
      </button>
      {toggle === 1 && <Mobile_Navigation />}
    </div>
  );
};
