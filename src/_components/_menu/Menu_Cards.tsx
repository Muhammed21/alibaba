import { Typographie } from "@/_design/Typographie";
import { Card } from "./Card";
import { useEffect, useState } from "react";
import { Number } from "@/_types/number_type";
import { String } from "@/_types/string_type";
import clsx from "clsx";

type DataProps = {
  id: Number;
  name: String;
  images: String;
  price: Number;
};

export const MenuCards = () => {
  const [data, setData] = useState<DataProps[]>([]);

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
  }, []);
  return (
    <section
      id="CARTE"
      className="max-w-[1520px] w-full h-max flex flex-col gap-10 sm:gap-20 py-10 sm:py-16 items-center justify-center"
    >
      <div className="w-full h-max flex flex-col gap-6 px-4 items-center justify-center">
        <Typographie variant="h2" color="white" fontFamily="Edo">
          voici notre carte
        </Typographie>
        <Typographie
          variant="h4"
          color="white"
          fontFamily="Montserrat"
          className="text-center"
        >
          Envie de saveurs authentiques ? Découvrez notre carte et régalez-vous
          !
        </Typographie>
      </div>
      {/* GRID DES CARTES */}
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
          <div className="flex items-center justify-center w-full border border-dashed border-white/20 py-12 rounded-md">
            <Typographie variant="h3" color="white" fontFamily="Montserrat">
              Aucune carte trouvée
            </Typographie>
          </div>
        )}
      </div>
    </section>
  );
};
