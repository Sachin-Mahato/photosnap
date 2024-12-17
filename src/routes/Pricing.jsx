import { motion } from "framer-motion";
import { useState } from "react";
import { BetaCard } from "../component/Card/BetaCard";
import { InfoCard } from "../component/Cards";
import PlanCard from "../component/Card/PlansCard";
import PricingTable from "../component/PricingTable";

const Pricing = () => {
  const [planToggle, setPlanToggle] = useState(true);
  const [selectedPlan, setSelectedPlan] = useState("Pro"); // Default selected plan

  // Handle plan selection
  const handlePlanClick = (plan) => {
    setSelectedPlan(plan); // Update the selected plan
  };

  return (
    <>
      <motion.div
        initial={{ opacity: 0, scale: 0.95 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
      >
        <InfoCard
          image="pricing.jpg"
          alt="Evening sunset with a silhouette of a girl"
          headingType="h1"
          heading="Enjoy the Evening Vibes"
          description="Capture the serenity of the evening with beautiful photography. This platform empowers you to create and share your stories with the world."
          button="VIEW THE STORIES"
          bgColor="bgBlack"
          textColor="textWhite"
          line
          padding
          imageRight
        />
      </motion.div>

      <section className="pt-16 sm:pt-[7rem]">
        <div className="mb-12 flex items-center justify-center gap-8">
          <span>Monthly</span>
          <div className="flex">
            <input
              type="checkbox"
              id="switch"
              onClick={() => setPlanToggle(!planToggle)}
            />
            <label htmlFor="switch">Toggle</label>
          </div>
          <span>Yearly</span>
        </div>

        <ul className="mb-16 flex flex-col gap-6 sm:mb-[124px] md:mx-4 md:flex-row md:items-center md:justify-center md:gap-[30px]">
          <PlanCard
            heading="Basic"
            description="Includes basic usage of our platform. Recommended for new and aspiring photographers."
            price={planToggle ? "$19.00" : "$190.00"}
            type={selectedPlan === "Basic" ? "pro" : "normal"} // Dynamic style
            onClick={() => handlePlanClick("Basic")} // Update selected plan
          />

          <PlanCard
            heading="Pro"
            description="More advanced features available. Recommended for photography veterans and professionals."
            price={planToggle ? "$39.00" : "$390.00"}
            type={selectedPlan === "Pro" ? "pro" : "normal"} // Dynamic style
            onClick={() => handlePlanClick("Pro")} // Update selected plan
          />

          <PlanCard
            heading="Business"
            description="Additional features available such as more detailed metrics.
          Recommended for business owners."
            price={planToggle ? "$99.00" : "$990.00"}
            type={selectedPlan === "Business" ? "pro" : "normal"} // Dynamic style
            onClick={() => handlePlanClick("Business")} // Update selected plan
          />
        </ul>
        <PricingTable />
      </section>
      <BetaCard />
    </>
  );
};

export default Pricing;
