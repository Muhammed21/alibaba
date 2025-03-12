import { Boolean } from "@/_types/boolean_type";
import { String } from "@/_types/string_type";
import { VariantTypography } from "@/_types/typo_variant";
import clsx from "clsx";

interface TypographieProps {
  children: React.ReactNode;
  variant: VariantTypography;
  fontFamily: "Edo" | "Montserrat" | "Inter";
  isBold?: Boolean;
  color?: "white" | "gray";
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
  }

  switch (fontFamily) {
    case "Edo":
      fontFamilySwitcher = "font-edo";
      break;
    case "Montserrat":
      if (isBold) {
        fontFamilySwitcher = "font-montserrat-bold";
      } else {
        fontFamilySwitcher = "font-montserrat-light font-medium";
      }
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
