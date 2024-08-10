import { motion } from "framer-motion";

const TextEffectAnimation = ({
  text,
  delay = 0,
  duration = 0.05,
  reverse = false,
  isInView,
}: {
  text: string;
  delay?: number;
  duration?: number;
  reverse?: boolean;
  isInView: boolean;
}) => {
  const textEffect = text.split("");
  return (
    <>
      {textEffect.map((el, i) => (
        <motion.span
          initial={{ opacity: 0 }}
          exit={{ opacity: 0 }}
          transition={{
            duration,
            delay:
              delay + (duration / 2) * (reverse ? textEffect.length - i : i),
          }}
          animate={isInView ? { opacity: 1 } : { opacity: 0 }}
          viewport={{ once: true }}
          key={i}
        >
          {el}
        </motion.span>
      ))}
    </>
  );
};

export default TextEffectAnimation;
