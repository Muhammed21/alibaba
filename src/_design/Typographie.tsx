import clsx from "clsx";

interface TypographieProps {
  children: React.ReactNode;
  variant: "h1" | "h2" | "h3" | "h4";
  fontFamily: "Edo" | "Montserrat" | "Inter";
  isBold?: boolean;
  color: "white" | "gray";
  className?: string;
}

export const Typographie = ({
  children,
  variant: Variant,
  color,
  fontFamily,
  isBold = true,
  className,
}: TypographieProps) => {
  let variantSwitcher: string = "";
  let fontFamilySwitcher: string = "";
  let colorSwitcher: string = "";

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
