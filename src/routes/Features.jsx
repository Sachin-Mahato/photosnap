import { InfoCard } from "../component/Card/InfoCard";
import { BetaCard } from "../component/Card/BetaCard";
import FeaturesContainer from "../component/FeaturesContainer";

const Features = () => {
  return (
    <>
      <InfoCard
        image="features.jpg"
        headingType="h1"
        heading="FEATURES"
        description="We make sure all of our features are designed to be loved by every aspiring and even professional photograpers who wanted to share their stories."
        bgColor="bgBlack"
        textColor="textWhite"
        line
        imageRight
      />
      <FeaturesContainer padding allFeatures />
      <BetaCard />
    </>
  );
};

export default Features;
