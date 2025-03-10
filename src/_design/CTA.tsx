import { IconProps } from "@/_types/icon_type";
import { Typographie } from "./Typographie";
import clsx from "clsx";

interface CTAProps {
  children: React.ReactNode;
  variant: "link" | "External_link";
  textSize: 14 | 12;
  icon?: IconProps;
  href?: string;
  disabled?: boolean;
  isBold?: boolean;
  clickable?: boolean;
  className?: string;
}

export const CTA = ({
  children,
  variant,
  href = "#",
  textSize,
  icon,
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
      {icon && <icon.icon size={textSize === 14 ? 18 : 15} color="white" />}
      <Typographie
        variant={textSize === 14 ? "h3" : "h4"}
        color="white"
        fontFamily="Montserrat"
        isBold={isBold}
        className={clsx(
          variant === "External_link" && "underline underline-offset-2"
        )}
      >
        {children}
      </Typographie>
    </a>
  );
};
