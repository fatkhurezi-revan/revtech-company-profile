import Link from "next/link";
import { cn } from "@/lib/utils";

interface ButtonProps {
  children: React.ReactNode;
  href?: string;
  variant?: "primary" | "secondary" | "outline";
  className?: string;
  ariaLabel?: string;
}

export function Button({ children, href, variant = "primary", className, ariaLabel }: ButtonProps) {
  const baseStyles = "inline-flex items-center justify-center px-6 py-3 font-semibold text-sm transition-all duration-300 ease-in-out relative overflow-hidden rounded-full shadow-md hover:shadow-lg hover:-translate-y-0.5";
  
  const variants = {
    primary: "bg-navy text-white hover:bg-navy-light shadow-navy/20",
    secondary: "bg-gold text-navy hover:bg-gold-light shadow-gold/30 hover:shadow-gold/40",
    outline: "border-2 border-navy text-navy hover:text-white hover:bg-navy shadow-none hover:shadow-navy/20"
  };

  const classes = cn(baseStyles, variants[variant], className);

  if (href) {
    return (
      <Link href={href} className={classes} aria-label={ariaLabel}>
        {children}
      </Link>
    );
  }

  return (
    <button className={classes} aria-label={ariaLabel}>
      {children}
    </button>
  );
}
