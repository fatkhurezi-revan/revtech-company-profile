"use client";

import { useRef, useState } from "react";
import { motion } from "framer-motion";
import Link from "next/link";
import { cn } from "@/lib/utils";

interface MagneticButtonProps {
  children: React.ReactNode;
  href?: string;
  variant?: "primary" | "secondary" | "outline";
  className?: string;
}

export function MagneticButton({ children, href, variant = "primary", className }: MagneticButtonProps) {
  const ref = useRef<HTMLDivElement>(null);
  const [position, setPosition] = useState({ x: 0, y: 0 });

  const handleMouse = (e: React.MouseEvent<HTMLDivElement>) => {
    const { clientX, clientY } = e;
    const { height, width, left, top } = ref.current!.getBoundingClientRect();
    const middleX = clientX - (left + width / 2);
    const middleY = clientY - (top + height / 2);
    setPosition({ x: middleX * 0.2, y: middleY * 0.2 });
  };

  const reset = () => {
    setPosition({ x: 0, y: 0 });
  };

  const baseStyles = "inline-flex items-center justify-center px-6 py-3 font-semibold text-sm transition-colors duration-300 relative overflow-hidden group";
  
  const variants = {
    primary: "bg-navy text-white hover:bg-navy-light",
    secondary: "bg-gold text-navy hover:bg-gold-light",
    outline: "border-2 border-navy text-navy hover:text-white"
  };

  const classes = cn(baseStyles, variants[variant], className);

  const innerContent = (
    <>
      {variant === "outline" && (
        <span className="absolute inset-0 bg-navy transform scale-x-0 origin-left group-hover:scale-x-100 transition-transform duration-500 ease-out z-0"></span>
      )}
      <span className="relative z-10 flex items-center">{children}</span>
    </>
  );

  return (
    <motion.div
      ref={ref}
      onMouseMove={handleMouse}
      onMouseLeave={reset}
      animate={{ x: position.x, y: position.y }}
      transition={{ type: "spring", stiffness: 150, damping: 15, mass: 0.1 }}
      className="inline-block"
    >
      {href ? (
        <Link href={href} className={classes}>
          {innerContent}
        </Link>
      ) : (
        <button className={classes}>
          {innerContent}
        </button>
      )}
    </motion.div>
  );
}
