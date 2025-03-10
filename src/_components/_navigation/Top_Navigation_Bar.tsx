import { CTA } from "@/_design/CTA";
import { Typographie } from "@/_design/Typographie";
import { GoClock } from "react-icons/go";
import { LuMapPin } from "react-icons/lu";

export const Top_Navigation_Bar = () => {
  return (
    <div className="flex w-full justify-center items-center gap-2.5 py-3.5 bg-black">
      <CTA
        variant="link"
        clickable={false}
        textSize={12}
        icon={{ icon: GoClock }}
      >
        Ouvert 11:00-0:00
      </CTA>
      <Typographie variant="h4" color="white" fontFamily="Inter">
        |
      </Typographie>
      <CTA
        variant="External_link"
        textSize={12}
        icon={{ icon: LuMapPin }}
        className="hidden sm:flex"
      >
        13 Rue du Collège Chapuisien, 74000, Annecy France
      </CTA>
      <CTA
        variant="External_link"
        textSize={12}
        icon={{ icon: LuMapPin }}
        className="flex sm:hidden"
      >
        13 Rue du Collège Chapuisien...
      </CTA>
    </div>
  );
};
