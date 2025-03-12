import { CTA } from "@/_design/CTA";
import { Typographie } from "@/_design/Typographie";
import { String } from "@/_types/string_type";
import { timeTable } from "@/_utils/Close_Time_Table";
import clsx from "clsx";
import { useEffect, useState } from "react";
import { GoClock } from "react-icons/go";
import { LuMapPin } from "react-icons/lu";

export const Top_Navigation_Bar = () => {
  const [isOpen, setIsOpen] = useState("");

  useEffect(() => {
    const verify_is_open = (table: String[]) => {
      const currentHour = new Date().getHours();
      const currentDay = new Date()
        .toLocaleString("fr-FR", {
          weekday: "long",
        })
        .toLowerCase();

      if (table.includes(currentDay)) {
        setIsOpen("Fermé");
      } else if (currentHour >= 11 && currentHour < 24) {
        setIsOpen("Ouvert");
      } else {
        setIsOpen("Fermé");
      }
    };

    verify_is_open(timeTable);
  }, [timeTable]);

  return (
    <div className="flex w-full justify-center items-center gap-2.5 py-3.5 bg-black">
      <CTA
        variant="link"
        clickable={false}
        textSize={12}
        icon={{ icon: GoClock }}
        className={clsx(isOpen === "Fermé" && "text-primary")}
        color={isOpen === "Ouvert" ? "white" : undefined}
      >
        {isOpen} 11:00-00:00
      </CTA>
      <Typographie variant="h4" color="white" fontFamily="Inter">
        |
      </Typographie>
      <CTA
        variant="External_link"
        textSize={12}
        color="white"
        href="https://www.google.com/maps?sca_esv=11a0cbbb8d287e03&si=APYL9btvhO6SAb8jF9HqTZMMa7vs_teLnZaEVrJZwRKFIIKjoWr0dCuVW-PFvP0AeoMwJ1iXvTvwuRWKibwRmssCzNUups9bVv6zl3kxPxCXafkSq1liUog%3D&uds=ABqPDvzh2Ji1Kqt-7EMvWRUQDfyqlF-_jbh08GYEE3HgnzS8EJ4nuj5MAAFN-6QPqU_x5G3l7iQrmV0rKm_no9agqr2xlodAhTY2_pq28IWHeNh2ypwtxDM&biw=1920&bih=953&dpr=1&um=1&ie=UTF-8&fb=1&gl=fr&sa=X&geocode=KTniDTz6j4tHMcgmOHMaJ-oe&daddr=13+Rue+du+Coll%C3%A8ge+Chappuisien,+74000+Annecy"
        icon={{ icon: LuMapPin }}
        className="hidden sm:flex"
      >
        13 Rue du Collège Chapuisien, 74000, Annecy France
      </CTA>
      <CTA
        variant="External_link"
        textSize={12}
        color="white"
        icon={{ icon: LuMapPin }}
        className="flex sm:hidden"
      >
        13 Rue du Collège Chapuisien...
      </CTA>
    </div>
  );
};
