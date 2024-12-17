import { motion } from "framer-motion";

export function FeatureCard({ image, alt, heading, description, padding }) {
  // Animation Variants
  const cardVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 1, ease: "easeOut" },
    },
  };

  const glowVariants = {
    initial: { boxShadow: "0 0 0 rgba(255, 143, 79, 0)" },
    animate: {
      boxShadow: "0 0 15px rgba(255, 143, 79, 0.5)",
      transition: {
        duration: 2,
        repeat: Infinity,
        repeatType: "reverse",
      },
    },
  };

  return (
    <motion.li
      className={`relative flex flex-col items-center md:min-h-full ${
        padding && "md:pt-[18px]"
      }`}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.3 }}
      variants={cardVariants}
    >
      {/* Glow Effect for Image */}
      <motion.img
        className="mb-12 inline-block"
        src={image}
        alt={alt}
        variants={glowVariants}
        initial="initial"
        animate="animate"
      />
      <motion.h4
        className="mb-4 text-[18px] font-bold leading-[25px]"
        variants={cardVariants}
      >
        {heading}
      </motion.h4>
      <motion.p
        className="text-[15px] leading-[25px] opacity-60"
        variants={cardVariants}
      >
        {description}
      </motion.p>
    </motion.li>
  );
}
