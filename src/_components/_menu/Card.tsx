import { String } from "@/_types/string_type";
import clsx from "clsx";

interface CardProps {
  variant: "simple" | "double";
  className?: String;
}

export const Card = ({ variant = "simple", className }: CardProps) => {
  let cardSize = "";
  let variantTheme = "";

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

  return <div className={clsx(variantTheme, className)}></div>;
};
