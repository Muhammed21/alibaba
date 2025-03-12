import { Boolean } from "@/_types/boolean_type";
import { String } from "@/_types/string_type";
import clsx from "clsx";

interface TypographieProps {
  children: React.ReactNode;
  variant: "h1" | "h2" | "h3" | "h4" | "h5" | "h6";
  fontFamily: "Edo" | "Montserrat" | "Inter";
  isBold?: Boolean;
  color?: "white" | "gray" | "primary";
  className?: String;
}

export const Typographie = ({
  children,
  variant: Variant,
  color,
  fontFamily,
  isBold = true,
  className,
}: TypographieProps) => {
  let variantSwitcher: String = "";
  let fontFamilySwitcher: String = "";
  let colorSwitcher: String = "";

  switch (Variant) {
    case "h1":
      variantSwitcher = "text-h1 leading-h1";
      break;
    case "h2":
      variantSwitcher = "text-h2 leading-h2";
      break;
    case "h3":
      variantSwitcher = "text-h3 leading-h3";
      break;
    case "h4":
      variantSwitcher = "text-subtitle leading-subtitle";
      break;
    case "h5":
      variantSwitcher = "text-h5 leading-h5";
      break;
    case "h6":
      variantSwitcher = "text-h6 leading-h6";
      break;
  }

  switch (fontFamily) {
    case "Edo":
      fontFamilySwitcher = "font-edo";
      break;
    case "Montserrat":
      isBold
        ? (fontFamilySwitcher = "font-montserrat-bold")
        : (fontFamilySwitcher = "font-montserrat-light font-medium");
      break;
    case "Inter":
      fontFamilySwitcher = "font-inter";
      break;
  }

  switch (color) {
    case "white":
      colorSwitcher = "text-white";
      break;
    case "gray":
      colorSwitcher = "text-white/50";
      break;
    case "primary":
      colorSwitcher = "text-primary";
      break;
  }

  return (
    <Variant
      className={clsx(
        variantSwitcher,
        fontFamilySwitcher,
        colorSwitcher,
        className
      )}
    >
      {children}
    </Variant>
  );
};
