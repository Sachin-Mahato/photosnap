export function Line({ type }) {
  const lineVariants = {
    normal:
      "absolute inset-0 left-[33px] h-[6px] w-[128px] border-none bg-gradient-to-t from-bgGradiant1 via-bgGradiant2 to-bgGradiant3 sm:left-0 sm:h-full sm:w-[6px]",
    full: "absolute inset-0 h-[6px] w-full border-none bg-gradient-to-t from-bgGradiant1 via-bgGradiant2 to-bgGradiant3 sm:h-full sm:w-[6px] md:w-full md:h-[6px]",
    fullH:
      "absolute inset-0 left-[33px] h-[6px] w-[128px] sm:h-full sm:w-[6px] sm:left-0 border-none bg-gradient-to-t from-bgGradiant3 via-bgGradiant2 to-bgGradiant1",
  };

  return <hr className={lineVariants[type]} />;
}
