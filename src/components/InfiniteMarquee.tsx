"use client";

import { motion } from "framer-motion";
import { ReactNode } from "react";

interface InfiniteMarqueeProps {
  children: ReactNode;
  speed?: number; // Duration in seconds for one full loop
}

export function InfiniteMarquee({ children, speed = 20 }: InfiniteMarqueeProps) {
  return (
    <div className="relative flex overflow-hidden group">
      <motion.div
        className="flex whitespace-nowrap"
        animate={{ x: ["0%", "-50%"] }}
        transition={{
          repeat: Infinity,
          ease: "linear",
          duration: speed,
        }}
      >
        <div className="flex shrink-0 px-4">{children}</div>
        <div className="flex shrink-0 px-4">{children}</div>
      </motion.div>
    </div>
  );
}
