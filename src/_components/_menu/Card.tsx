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
      cardSize = "w-full h-[290px]";
      variantTheme = cardSize + " " + "bg-white/50 rounded-md";
      break;
    case "double":
      cardSize = "w-full h-[290px] col-span-2";
      variantTheme = cardSize + " " + "bg-white/50 rounded-md";
      break;
  }

  return <div className={clsx(variantTheme, className)}></div>;
};
