import { FeatureCard } from "./Card/FeatureCard";

import Responsive from "../assets/features/desktop/responsive.svg";
import NoLimit from "../assets/features/desktop/no-limit.svg";
import Embed from "../assets/features/desktop/embed.svg";
import Custom from "../assets/features/desktop/custom-domain.svg";
import Boost from "../assets/features/desktop/boost-exposure.svg";

const Features = ({ padding, allFeatures }) => {
  return (
    <ul
      className={`flex flex-col gap-14 px-8 pb-[91px] text-center sm:mb-0 sm:gap-x-[13px] sm:gap-y-[72px] sm:pb-[120px] md:max-w-full md:flex-row md:gap-[30px] md:px-[148px] ${
        padding && "pt-16"
      } mx-auto sm:max-w-[535px] ${
        allFeatures &&
        "items-end sm:grid sm:max-w-full sm:grid-cols-2 md:my-[160px] md:grid-cols-3 md:gap-y-[104px] md:py-0"
      }`}
    >
      <FeatureCard
        image={Responsive}
        alt="Depiction of laptops and computers"
        heading="100% Responsive"
        description="No matter which the device you’re on, our site is fully responsive and stories look beautiful on any screen."
      />
      <FeatureCard
        image={NoLimit}
        alt="infinity symbol"
        heading="No Photo Upload Limit"
        description="Our tool has no limits on uploads or bandwidth. Freely upload in bulk and share all of your stories in one go."
        padding
      />
      <FeatureCard
        image={Embed}
        alt="Mixture of social media logos"
        heading="Available to Embed"
        description="Embed Tweets, Facebook posts, Instagram media, Vimeo or YouTube videos, Google Maps, and more."
      />
      {allFeatures && (
        <>
          <FeatureCard
            image={Custom}
            alt="Address bar and magnifying glass"
            heading="Custom Domain"
            description="With Photosnap subscriptions you can host your stories on your own domain. You can also remove our branding!"
          />
          <FeatureCard
            image={Boost}
            alt="Hand hovering over two boxes"
            heading="Boost Your Exposure"
            description="Users that viewed your story or gallery can easily get notifed of new and featured stories with our built in mailing list."
          />
          <FeatureCard
            image={Embed}
            alt="Depiction of photo editing software"
            heading="Drag & Drop Image"
            description="Easily drag and drop your image and get beautiful shots everytime. No over the top tooling to add friction to creating stories."
          />
        </>
      )}
    </ul>
  );
};

export default Features;
