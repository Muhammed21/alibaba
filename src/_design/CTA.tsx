import { IconProps } from "@/_types/icon_type";
import { Typographie } from "./Typographie";
import clsx from "clsx";
import { String } from "@/_types/string_type";
import { Boolean } from "@/_types/boolean_type";

interface CTAProps {
  children: React.ReactNode;
  variant: "link" | "External_link";
  textSize: 14 | 12;
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
  return (
    <a
      href={href}
      onClick={(e) => disabled && e.preventDefault()}
      target={variant === "External_link" ? "_blank" : "_self"}
      rel={variant === "External_link" ? "noopener noreferrer" : undefined}
      className={clsx(
        "flex items-center gap-1",
        disabled && "opacity-50 cursor-not-allowed",
        !clickable && "cursor-default",
        className
      )}
    >
      {icon && <icon.icon size={textSize === 14 ? 18 : 15} color={color} />}
      <Typographie
        variant={textSize === 14 ? "h3" : "h4"}
        fontFamily="Montserrat"
        color={color}
        isBold={isBold}
        className={clsx(
          variant === "External_link" && "underline underline-offset-2",
          clickable &&
            "hover:text-primary transition-all duration-200 ease-in-out"
        )}
      >
        {children}
      </Typographie>
    </a>
  );
};
