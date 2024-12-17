import { motion } from "framer-motion";
import { Line } from "../Lines";

export default function PlanCard({
  heading,
  description,
  price,
  type,
  onClick,
}) {
  const cardVariants = {
    normal: "bg-[#F5F5F5] text-pureBlack",
    pro: "bg-pureBlack text-pureWhite md:min-h-[470px]",
  };

  const buttonVariants = {
    normal: "bg-pureBlack text-pureWhite",
    pro: "bg-pureWhite text-pureBlack",
  };

  // Framer Motion animation variants
  const motionVariants = {
    normal: { scale: 1, transition: { duration: 0.3 } },
    pro: { scale: 1.05, transition: { duration: 0.3 } },
  };

  return (
    <motion.div
      className={`relative mx-7 flex cursor-pointer flex-col items-center justify-center px-[22px] pt-14 text-center sm:grid sm:grid-cols-2 sm:p-[40px] sm:text-left md:mx-0 md:flex md:max-h-[407px] md:max-w-[350px] md:text-center ${cardVariants[type]}`}
      onClick={onClick} // Handles the click event for toggling
      animate={type} // Applies Framer Motion animations dynamically
      variants={motionVariants} // Links to the motion variants
    >
      {type === "pro" && <Line type="full" />}
      <div>
        <h2 className="mb-[18px] text-[24px] font-bold leading-[25px]">
          {heading}
        </h2>
        <p className="mb-10 text-[15px] leading-[25px] opacity-60 sm:mb-8">
          {description}
        </p>
      </div>

      <h3 className="mb-10 text-[40px] font-bold leading-[48px] tracking-[4.17px] sm:self-start sm:text-right md:self-center md:text-center">
        {price}
        <span className="block text-[15px] leading-[25px] tracking-normal opacity-60">
          per month
        </span>
      </h3>
      <button
        className={`text-bold mb-10 min-w-[95%] py-3 px-4 text-[12px] tracking-[2px] md:min-w-full ${buttonVariants[type]} hover:bg-lightGrey hover:text-pureBlack sm:mb-0`}
      >
        PICK PLAN
      </button>
    </motion.div>
  );
}
