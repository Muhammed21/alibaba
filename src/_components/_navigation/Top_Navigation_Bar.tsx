import { CTA } from "@/_design/CTA";
import { Typographie } from "@/_design/Typographie";
import { Number } from "@/_types/number_type";
import { String } from "@/_types/string_type";
import clsx from "clsx";
import { useTranslations } from "next-intl";
import { useEffect, useState } from "react";
import { GoClock } from "react-icons/go";
import { LuMapPin } from "react-icons/lu";

type DataProps = {
  openH: Number;
  closeH: Number;
  days: {
    day: String;
  }[];
};

export const Top_Navigation_Bar = () => {
  const [isOpen, setIsOpen] = useState("");
  const [info, setInfo] = useState<DataProps | null>(null);
  const [isloading, setIsLoading] = useState(true);
  const [translatedText, setTranslatedText] = useState({ open: "", close: "" });

  const tTop = useTranslations("header.navigation.top");

  useEffect(() => {
    setTranslatedText({
      open: tTop("open"),
      close: tTop("close"),
    });
  }, [tTop]); // Met à jour la traduction après le premier rendu

  const fetch_info_api = async () => {
    const res = await fetch("/api/information");
    const json = await res.json();

    if (Array.isArray(json) && json.length > 0) {
      setInfo(json[0]);
    }
  };

  useEffect(() => {
    fetch_info_api();
  }, []);

  useEffect(() => {
    if (!info || !translatedText.open || !translatedText.close) return;

    const verify_is_open = (info: DataProps) => {
      const currentHour = new Date().getHours();
      const currentDay = new Date()
        .toLocaleString("fr-FR", { weekday: "long" })
        .toLowerCase();

      const todayInfo = info.days.find((day) => day.day.toLowerCase());

      if (todayInfo) {
        const { openH, closeH } = info;
        if (todayInfo.day === currentDay) {
          setIsOpen(translatedText.close);
        } else if (currentHour >= openH && currentHour < closeH) {
          setIsOpen(translatedText.open);
        } else {
          setIsOpen(translatedText.close);
        }
      } else {
        setIsOpen(translatedText.open);
      }
    };

    setIsLoading(false);
    verify_is_open(info);
  }, [info, translatedText]);

  return (
    <div className="flex w-full justify-center items-center gap-2.5 py-3.5 bg-black">
      {isloading ? (
        <div className="flex gap-2.5 w-max h-max">
          <div className="bg-white/10 w-5 h-5 rounded-full animate-pulse"></div>
          <div className="bg-white/10 w-28 h-5 rounded-lg animate-pulse"></div>
        </div>
      ) : (
        <CTA
          variant="link"
          clickable={false}
          textSize={12}
          icon={{ icon: GoClock }}
          className={clsx(isOpen === translatedText.close && "text-primary")}
          color={isOpen === translatedText.open ? "white" : undefined}
        >
          {isOpen} 11:00-00:00
        </CTA>
      )}
      <Typographie variant="h4" color="white" fontFamily="Inter">
        |
      </Typographie>
      <CTA
        variant="External_link"
        textSize={12}
        color="white"
        href="https://www.google.com/maps..."
        icon={{ icon: LuMapPin }}
        className="hidden sm:flex"
      >
        13 Rue du Collège Chapuisien, 74000, Annecy France
      </CTA>
      <CTA
        variant="External_link"
        textSize={12}
        color="white"
        href="https://www.google.com/maps..."
        icon={{ icon: LuMapPin }}
        className="flex sm:hidden"
      >
        13 Rue du Collège Chapu ...
      </CTA>
    </div>
  );
};
