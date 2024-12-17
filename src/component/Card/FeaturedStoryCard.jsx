import { motion } from "framer-motion";
export function FeaturedStoryCard({
  image,
  alt,
  heading,
  date,
  author,
  description,
}) {
  const imageVariants = {
    hidden: { opacity: 0, scale: 1.1 },
    visible: { opacity: 1, scale: 1 },
  };

  const contentVariants = {
    hidden: { opacity: 0, x: -50 },
    visible: { opacity: 1, x: 0 },
  };

  return (
    <motion.section
      className="relative"
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true }}
      transition={{ duration: 1, ease: "easeOut" }}
    >
      <motion.picture variants={imageVariants}>
        <source
          media="(min-width:900px)"
          srcSet={`../assets/stories/desktop/${image}`}
        />
        <motion.img
          className="max-h-[317px] min-w-full object-cover sm:max-h-[650px]"
          src={`../assets/stories/mobile/${image}`}
          alt={alt}
        />
      </motion.picture>

      <motion.section
        className="flex flex-col bg-pureBlack px-[28px] pt-12 text-pureWhite sm:absolute sm:inset-0 sm:max-w-[450px] sm:justify-center sm:bg-transparent md:ml-[112px] md:pl-0 md:pt-0 md:pr-14"
        variants={contentVariants}
        transition={{ duration: 1, delay: 0.2, ease: "easeOut" }}
      >
        <motion.span
          className="mb-4 text-[12px] font-bold tracking-[2px] sm:mb-6"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.4 }}
        >
          LAST MONTH'S FEATURED STORY
        </motion.span>
        <h1 className="mb-4 text-[2rem] font-bold leading-[40px] tracking-[3.33px] sm:text-[40px] sm:leading-[48px] sm:tracking-[4.17px]">
          {heading}
        </h1>
        <div className="mb-6 text-[13px]">
          <span className="mr-[9px] opacity-75">{date}</span>
          <span>by {author}</span>
        </div>
        <p className="mb-6 text-[15px] leading-[25px] opacity-60">
          {description}
        </p>
        <motion.button
          className="mb-12 flex items-center gap-[18px] text-[12px] font-bold tracking-[2px] hover:underline sm:mb-0"
          whileHover={{ scale: 1.05 }}
          transition={{ duration: 0.3, ease: "easeInOut" }}
        >
          READ THE STORY
          <svg xmlns="http://www.w3.org/2000/svg" width="43" height="14">
            <g fill="none" fillRule="evenodd" stroke="currentColor">
              <path d="M0 7h41.864M35.428 1l6 6-6 6" />
            </g>
          </svg>
        </motion.button>
      </motion.section>
    </motion.section>
  );
}
