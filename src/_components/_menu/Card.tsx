import { Typographie } from "@/_design/Typographie";
import { Number } from "@/_types/number_type";
import { String } from "@/_types/string_type";
import clsx from "clsx";
import Image from "next/image";
import { useState } from "react";

interface CardProps {
  variant: "simple" | "double";
  className?: String;
  key: Number;
  src: String;
  price: Number;
  name: String;
}

export const Card = ({
  variant = "simple",
  className,
  key,
  src,
  price,
  name,
}: CardProps) => {
  let cardSize = "";
  let variantTheme = "";

  const [isOpen, setIsOpen] = useState(false);

  const toggleOpen = () => setIsOpen((prev) => !prev);

  switch (variant) {
    case "simple":
      cardSize = "w-full h-height-card";
      variantTheme = cardSize + " " + "bg-white/50 rounded-md";
      break;
    case "double":
      cardSize =
        "w-full h-32 md:h-height-card col-span-2 sm:col-span-3 md:col-span-2";
      variantTheme = cardSize + " " + "bg-white/50 rounded-md";
      break;
  }

  return (
    <div
      className={clsx(
        variantTheme,
        className,
        "relative cursor-cell overflow-hidden group",
        { open: isOpen }
      )}
      key={key}
      onClick={toggleOpen}
    >
      <div
        className={clsx(
          "absolute z-10 top-0 left-0 bg-black w-full h-full transition-all duration-200 ease-in-out",
          {
            "opacity-0 group-hover:opacity-50": !isOpen,
            "opacity-50": isOpen,
          }
        )}
      ></div>

      {/* Image */}
      <Image
        src={src}
        alt="carte"
        fill
        className="absolute object-cover pointer-events-none"
      />

      {/* Contenu affiché */}
      <div
        className={clsx(
          "flex flex-col items-start gap-3 justify-center absolute bottom-4 left-4 z-20 transition-all duration-200 ease-in-out",
          {
            "opacity-0 group-hover:opacity-100": !isOpen,
            "opacity-100": isOpen,
          }
        )}
      >
        <Typographie variant="h3" color="white" fontFamily="Montserrat">
          {name}
        </Typographie>
        <Typographie variant="h3" color="primary" fontFamily="Montserrat">
          {price} €
        </Typographie>
      </div>
    </div>
  );
};
