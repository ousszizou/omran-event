'use client';

import React from 'react';
import { motion } from "framer-motion";

export const TypingEffect = ({
  children,
  delay = 0,
  duration = 0.05,
  reverse = false,
  isInView,
}: {
  children: React.ReactNode;
  delay?: number;
  duration?: number;
  reverse?: boolean;
  isInView: boolean;
}) => {
  const words = children.split(/\s+/);
  const characters = words.map(word => word.split(''));

  return (
    <span style={{ direction: 'rtl', unicodeBidi: 'bidi-override' }}>
      {characters.map((word, wordIndex) => (
        <React.Fragment key={wordIndex}>
          {word.map((char, charIndex) => (
            <motion.span
              key={`${wordIndex}-${charIndex}`}
              initial={{ opacity: 0 }}
              exit={{ opacity: 0 }}
              transition={{
                duration,
                delay: delay + (duration / 2) * (reverse ? (characters.flat().length - (wordIndex * word.length + charIndex)) : (wordIndex * word.length + charIndex)),
              }}
              animate={isInView ? { opacity: 1 } : { opacity: 0 }}
              viewport={{ once: true }}
            >
              {char}
            </motion.span>
          ))}
          {wordIndex < words.length - 1 && " "}
        </React.Fragment>
      ))}
    </span>
  );
};
