'use client';
import { cn } from '@/lib/utils';
import { motion, useInView } from 'framer-motion';
import * as React from 'react';

type TextStaggeredFadeProps = {
  text: string;
  className?: string;
  delay?: number;
  duration?: number;
};

export const StaggeredFade: React.FC<TextStaggeredFadeProps> = ({
  text,
  className = '',
  delay = 0.07,
  duration = 0.2,
}) => {
  const variants = {
    hidden: { opacity: 0, y: 20 },
    show: (i: number) => ({
      y: 0,
      opacity: 1,
      transition: {
        delay: i * delay,
        duration: duration,
        ease: 'easeOut'
      },
    }),
  };

  const letters = text.split('');
  const ref = React.useRef(null);
  const isInView = useInView(ref, { once: true });

  return (
    <motion.h2
      ref={ref}
      initial="hidden"
      animate={isInView ? 'show' : ''}
      variants={variants}
      viewport={{ once: true }}
      className={cn(className)}
    >
      {letters.map((letter, i) => (
        <motion.span key={`${letter}-${i}`} variants={variants} custom={i}>
          {letter}
        </motion.span>
      ))}
    </motion.h2>
  );
};
