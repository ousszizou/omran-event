import { cn } from "@/lib/utils";
import { motion } from "framer-motion";
import React, { type ReactNode } from "react";

const ShowInAnimation = ({
  children,
  x = 0,
  y = 25,
  delay = 0,
  duration = 0.5,
  className,
  isInView,
}: {
  children: ReactNode;
  x?: number;
  y?: number;
  delay?: number;
  duration?: number;
  className?: string;
  isInView: boolean;
}) => {
  return (
    <motion.div
      initial={{
        opacity: 0,
        x,
        y,
      }}
      animate={{
        opacity: isInView ? 1 : 0,
        x: isInView ? 0 : x,
        y: isInView ? 0 : y,
        transition: {
          duration,
          delay,
          ease: "easeOut",
        },
      }}
      className={cn(className)}
    >
      {children}
    </motion.div>
  );
};

export default ShowInAnimation;
