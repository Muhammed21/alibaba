import { Typographie } from "@/_design/Typographie";
import { Card } from "./Card";
import { useEffect, useState } from "react";
import { Number } from "@/_types/number_type";
import { String } from "@/_types/string_type";
import { useTranslations } from "next-intl";
import clsx from "clsx";

type DataProps = {
  id: Number;
  name: String;
  images: String;
  price: Number;
};

export const MenuCards = () => {
  const [data, setData] = useState<DataProps[]>([]);
  const [isLoading, setIsLoading] = useState(true);

  const t = useTranslations("menu");
  const tBottom = useTranslations("header.navigation.bottom");

  useEffect(() => {
    const fetch_all_images = async () => {
      try {
        const data = await fetch("/api/menu-image");
        const json = await data.json();
        setData(json);
        console.log(json);
      } catch (error) {
        console.error(error);
      }
    };

    fetch_all_images();
    setIsLoading(false);
  }, []);
  return (
    <section
      id={tBottom("menu")}
      className="max-w-[1520px] w-full h-max flex flex-col gap-10 sm:gap-20 py-10 sm:py-16 items-center justify-center"
    >
      <div className="w-full h-max flex flex-col gap-6 px-4 items-center justify-center">
        <Typographie variant="h2" color="white" fontFamily="Edo">
          {t("title")}
        </Typographie>
        <Typographie
          variant="h4"
          color="white"
          fontFamily="Montserrat"
          className="text-center"
        >
          {t("subtitle")}
        </Typographie>
      </div>
      {/* GRID DES CARTES */}
      {isLoading ? (
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 gap-2 max-w-[1520px] w-full">
          <div className="w-full col-span-2 h-height-card bg-white/10 rounded-lg animate-pulse"></div>
          <div className="w-full h-height-card bg-white/10 rounded-lg animate-pulse"></div>
          <div className="w-full h-height-card bg-white/10 rounded-lg animate-pulse"></div>
          <div className="w-full h-height-card bg-white/10 rounded-lg animate-pulse"></div>
          <div className="w-full h-height-card bg-white/10 rounded-lg animate-pulse"></div>
          <div className="w-full h-height-card bg-white/10 rounded-lg animate-pulse"></div>
          <div className="w-full h-height-card bg-white/10 rounded-lg animate-pulse"></div>
          <div className="w-full h-height-card bg-white/10 rounded-lg animate-pulse"></div>
          <div className="w-full h-height-card bg-white/10 rounded-lg animate-pulse"></div>
        </div>
      ) : (
        <div
          className={clsx(
            data.length > 0 && "grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5",
            " max-w-[1520px] w-full p-4 gap-2"
          )}
        >
          {data.length > 0 ? (
            data.map((item, id) => (
              <Card
                key={id}
                variant={id === 0 ? "double" : "simple"}
                src={item.images}
                price={item.price}
                name={item.name}
              />
            ))
          ) : (
            <div className="flex items-center justify-center w-full border border-dashed border-white/20 bg-white/5 py-12 rounded-md">
              <Typographie variant="h3" color="white" fontFamily="Montserrat">
                {t("error")}
              </Typographie>
            </div>
          )}
        </div>
      )}
    </section>
  );
};
