import { motion } from "framer-motion";
import { Line } from "../Lines";

export function BetaCard() {
  // Animation Variants
  const backgroundVariants = {
    hidden: { scale: 1.2, opacity: 0 },
    visible: {
      scale: 1,
      opacity: 1,
      transition: { duration: 1.2, ease: "easeOut" },
    },
  };

  const textVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.8, ease: "easeOut" },
    },
  };

  const buttonHover = {
    hover: { scale: 1.1, transition: { type: "spring", stiffness: 300 } },
  };

  return (
    <motion.section
      className="relative flex flex-col overflow-hidden bg-pureBlack text-pureWhite"
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.5 }}
    >
      {/* Animated Background Image */}
      <motion.picture variants={backgroundVariants}>
        <source
          media="(min-width:900px)"
          srcSet={`../assets/shared/desktop/bg-beta.jpg`}
        />
        <source
          media="(min-width:640px)"
          srcSet={`../assets/shared/tablet/bg-beta.jpg`}
        />
        <img
          src={`../assets/shared/mobile/bg-beta.jpg`}
          className="absolute max-h-[288px] min-w-full object-cover sm:min-h-full"
          alt="Inside of a ravine"
        />
      </motion.picture>

      {/* Content Section */}
      <section className="relative flex flex-col items-center justify-center py-[64px] pl-[33px] pr-6 text-left sm:flex-row sm:justify-between sm:px-10">
        <Line type="fullH" />
        {/* Heading Animation */}
        <motion.h2
          className="mb-6 text-[2rem] font-bold leading-[40px] tracking-[3.33px] sm:max-w-[400px] sm:text-[40px] sm:leading-[48px] sm:tracking-[4.17px]"
          variants={textVariants}
        >
          WE'RE IN BETA. GET YOUR INVITE TODAY!
        </motion.h2>
        {/* Button Animation */}
        <motion.button
          className="flex items-center gap-[18px] self-start text-[12px] font-bold tracking-[2px] sm:self-center"
          variants={textVariants}
          whileHover="hover"
          initial="hidden"
        >
          GET AN INVITE
          <svg xmlns="http://www.w3.org/2000/svg" width="43" height="14">
            <g fill="none" fillRule="evenodd" stroke="currentColor">
              <path d="M0 7h41.864M35.428 1l6 6-6 6" />
            </g>
          </svg>
        </motion.button>
      </section>
    </motion.section>
  );
}
