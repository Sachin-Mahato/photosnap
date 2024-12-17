import { motion } from "framer-motion";
import { Line } from "../Lines";
import { Link } from "react-router-dom";

export function InfoCard({
  image,
  alt,
  headingType,
  heading,
  description,
  button,
  bgColor,
  textColor,
  line,
  padding,
  imageRight,
}) {
  const cardVariants = {
    bgBlack: "bg-pureBlack",
    bgWhite: "bg-pureWhite",
    textBlack: "text-pureBlack",
    textWhite: "text-pureWhite",
  };

  const headingStyles = `mb-4 text-headingClamp sm:mb-5 sm:leading-[48px] sm:tracking-[4.17px] font-bold leading-[40px] tracking-[3.33px] ${
    padding && "sm:max-w-[330px]"
  }`;

  // Animation variants
  const imageVariants = {
    hidden: { opacity: 0, x: imageRight ? 50 : -50 },
    visible: {
      opacity: 1,
      x: 0,
      transition: { duration: 0.6, ease: "easeOut" },
    },
  };

  const contentVariants = {
    hidden: { opacity: 0, x: imageRight ? -50 : 50 },
    visible: {
      opacity: 1,
      x: 0,
      transition: { duration: 0.6, ease: "easeOut" },
    },
  };

  return (
    <motion.section
      className={`flex flex-col sm:flex-row ${cardVariants[bgColor]} ${cardVariants[textColor]}`}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.3 }}
    >
      {/* Image Section */}
      <motion.picture
        className={`${imageRight && "sm:order-2"}`}
        variants={imageVariants}
      >
        <source
          media="(min-width:900px)"
          srcSet={`../assets/home/desktop/${image}`}
        />
        <source
          media="(min-width:640px)"
          srcSet={`../assets/home/tablet/${image}`}
        />
        <img
          src={`../assets/home/mobile/${image}`}
          alt={alt}
          className="min-w-full sm:max-w-none md:min-h-full md:max-w-full md:object-cover"
        />
      </motion.picture>

      {/* Content Section */}
      <motion.div
        className="relative my-auto py-[72px] pl-[33px] pr-6 sm:py-0 sm:px-[54px] md:max-w-[610px] md:px-[111px] md:py-4"
        variants={contentVariants}
      >
        {line && <Line type="normal" />}
        {headingType === "h1" ? (
          <h1 className={headingStyles}>{heading}</h1>
        ) : (
          <h2 className={headingStyles}>{heading}</h2>
        )}
        <p
          className={`${
            button && "mb-[23px] sm:mb-12"
          } text-[15px] leading-[25px] opacity-60`}
        >
          {description}
        </p>
        {button === "VIEW THE STORIES" ? (
          <Link to={"/stories"}>
            <button className="text-[12px] font-bold tracking-[2px] hover:underline">
              {button}
              <svg
                className="ml-[18px] inline-block"
                xmlns="http://www.w3.org/2000/svg"
                width="43"
                height="16"
              >
                <g fill="none" fillRule="evenodd" stroke="currentColor">
                  <path d="M0 7h41.864M35.428 1l6 6-6 6" />
                </g>
              </svg>
            </button>
          </Link>
        ) : (
          <button className="text-[12px] font-bold tracking-[2px] hover:underline">
            {button}
            <svg
              className="ml-[18px] inline-block"
              xmlns="http://www.w3.org/2000/svg"
              width="43"
              height="16"
            >
              <g fill="none" fillRule="evenodd" stroke="currentColor">
                <path d="M0 7h41.864M35.428 1l6 6-6 6" />
              </g>
            </svg>
          </button>
        )}
      </motion.div>
    </motion.section>
  );
}
