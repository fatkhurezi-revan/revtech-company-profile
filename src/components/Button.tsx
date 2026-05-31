import Link from "next/link";
import { ReactNode } from "react";
import { cn } from "@/lib/utils";

interface ButtonProps {
  children: ReactNode;
  href?: string;
  variant?: "primary" | "secondary" | "outline";
  className?: string;
}

export function Button({ children, href, variant = "primary", className }: ButtonProps) {
  const baseStyles = "inline-flex items-center justify-center px-6 py-3 font-semibold text-sm rounded-none transition-all duration-300";
  
  const variants = {
    primary: "bg-navy text-white hover:bg-gold hover:text-navy",
    secondary: "bg-gold text-navy hover:bg-gold-light",
    outline: "border-2 border-navy text-navy hover:bg-navy hover:text-white"
  };

  const classes = cn(baseStyles, variants[variant], className);

  if (href) {
    return (
      <Link href={href} className={classes}>
        {children}
      </Link>
    );
  }

  return (
    <button className={classes}>
      {children}
    </button>
  );
}
