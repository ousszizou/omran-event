"use client"
import { cn } from '@/lib/utils';
import { motion, useInView } from 'framer-motion';
import * as React from 'react';

export function WordsPullUp({
  text,
  className = '',
  delay = 0.1,
  duration = 0.5,
}: {
  text: string;
  className?: string;
    delay?: number;
    duration?: number;
}) {
  const splittedText = text.split(' ');

  const pullupVariant = {
    initial: { y: 20, opacity: 0 },
    animate: (i: number) => ({
      y: 0,
      opacity: 1,
      transition: {
        delay: i * delay,
        duration: duration,
        ease: 'easeOut',
      },
    }),
  };
  const ref = React.useRef(null);
  const isInView = useInView(ref, { once: true });

  return (
    <div className="flex flex-wrap justify-center">
      {splittedText.map((current, i) => (
        <motion.div
          key={`${current}-${i}`}
          ref={ref}
          variants={pullupVariant}
          initial="initial"
          animate={isInView ? 'animate' : ''}
          custom={i}
          className={cn(
            "mx-2",
            className
          )}
        >
          {current === '' ? <span>&nbsp;</span> : current}
        </motion.div>
      ))}
    </div>
  );
}
