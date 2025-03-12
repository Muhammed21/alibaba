import { IconProps } from "@/_types/icon_type";
import { Typographie } from "./Typographie";
import clsx from "clsx";
import { String } from "@/_types/string_type";
import { Boolean } from "@/_types/boolean_type";
import { VariantTypography } from "@/_types/typo_variant";

interface CTAProps {
  children: React.ReactNode;
  variant: "link" | "External_link";
  textSize: 20 | 14 | 12;
  icon?: IconProps;
  color?: "white" | "gray";
  href?: String;
  disabled?: Boolean;
  isBold?: Boolean;
  clickable?: Boolean;
  className?: String;
}

export const CTA = ({
  children,
  variant,
  href = "#",
  textSize,
  icon,
  color,
  disabled = false,
  isBold,
  clickable = true,
  className,
}: CTAProps) => {
  let sizeTypo: VariantTypography;
  let iconSize = 0;

  switch (textSize) {
    case 20:
      sizeTypo = "h2";
      iconSize = 21;
      break;
    case 14:
      sizeTypo = "h3";
      iconSize = 18;
      break;
    case 12:
      sizeTypo = "h4";
      iconSize = 15;
      break;
  }

  return (
    <a
      href={href}
      onClick={(e) => disabled && e.preventDefault()}
      target={variant === "External_link" ? "_blank" : "_self"}
      rel={variant === "External_link" ? "noopener noreferrer" : undefined}
      className={clsx(
        "flex items-center gap-1 group",
        disabled && "opacity-50 cursor-not-allowed",
        !clickable && "cursor-default",
        className
      )}
    >
      {icon && <icon.icon size={iconSize} color={color} />}
      <Typographie
        variant={sizeTypo}
        fontFamily="Montserrat"
        color={color}
        isBold={isBold}
        className={clsx(
          variant === "External_link" && "underline underline-offset-2",
          clickable &&
            "hover:text-primary group-focus:text-primary transition-all duration-200 ease-in-out"
        )}
      >
        {children}
      </Typographie>
    </a>
  );
};
