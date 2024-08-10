import { cn } from "@/lib/utils";
import { motion } from "framer-motion";
import { ReactNode } from "react";

const ScaleAnimation = ({
  children,
  delay = 0,
  duration = 0.5,
  className,
  isInView,
}: {
  children: ReactNode;
  delay?: number;
  duration?: number;
  className?: string;
  isInView: boolean;
}) => {
  return (
    <motion.div
      initial={{
        scale: 0,
      }}
      animate={{
        scale: isInView ? 1 : 0,
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

export default ScaleAnimation;
