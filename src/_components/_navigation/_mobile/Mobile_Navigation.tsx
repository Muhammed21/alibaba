import { useToggle } from "@/_context/Toogle_Menu";
import { IoClose } from "react-icons/io5";
import { CTA } from "@/_design/CTA";
import { Top_Navigation_Bar } from "../Top_Navigation_Bar";

export const Mobile_Navigation = () => {
  const { setToggle } = useToggle();
  return (
    <section className="absolute top-0 left-0 z-50 bg-black flex flex-col items-center justify-center w-full h-screen">
      <div className="absolute top-0 left-0 w-full border border-b-white/15">
        <Top_Navigation_Bar />
      </div>
      {/* BURGER MENU BUTTON */}
      <button
        className="absolute top-15 right-2 block text-white lg:hidden cursor-pointer"
        onClick={setToggle}
      >
        <IoClose size={32} />
      </button>
      <div className="flex flex-col items-center justify-center gap-4">
        <CTA
          variant="link"
          textSize={14}
          className="w-max"
          color="white"
          isBold={false}
        >
          Notre Carte
        </CTA>
        <CTA
          variant="link"
          textSize={14}
          className="w-max"
          color="white"
          isBold={false}
        >
          Nos Restaurant
        </CTA>
        <CTA
          variant="link"
          textSize={14}
          className="w-max"
          color="white"
          isBold={false}
        >
          Nous Rejoindre !
        </CTA>
      </div>
    </section>
  );
};
