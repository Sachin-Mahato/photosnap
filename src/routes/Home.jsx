import { InfoCard } from "../component/Card/InfoCard";
import { StoryCard } from "../component/Card/StoryCard";
import FeaturesContainer from "../component/FeaturesContainer";

const Home = () => {
  return (
    <>
      <InfoCard
        image="create-and-share.jpg"
        alt="Man standing on dock holding camera"
        headingType="h1"
        heading="CREATE AND SHARE YOUR PHOTO STORIES."
        description="Photosnap is a platform for photographers and visual storytellers. We
  make it easy to share photos, tell stories and connect with others."
        button="GET AN INVITE"
        bgColor="bgBlack"
        textColor="textWhite"
        line
        imageRight
        main
      />
      <InfoCard
        image="beautiful-stories.jpg"
        alt="Laptop with photo editing software open"
        headingType="h2"
        heading="BEAUTIFUL STORIES EVERY TIME"
        description="We provide design templates to ensure your stories look terrific. Easily add photos, text, embed maps and media from other networks. Then share your story with everyone."
        button="VIEW THE STORIES"
        bgColor="bgWhite"
        textColor="textBlack"
        padding
      />
      <InfoCard
        image="designed-for-everyone.jpg"
        alt="Man holding large camera"
        headingType="h2"
        heading="DESIGNED FOR EVERYONE"
        description="Photosnap can help you create stories that resonate with your audience.  Our tool is designed for photographers of all levels, brands, businesses you name it."
        button="VIEW THE STORIES"
        bgColor="bgWhite"
        textColor="textBlack"
        imageRight
      />
      <ul className="mb-[80px] sm:mb-[120px] sm:grid sm:grid-cols-2 md:grid-cols-4">
        <StoryCard
          image="mountains.jpg"
          alt="Mountains"
          heading="The Mountains"
          author="John Appleseed"
        />
        <StoryCard
          image="cityscapes.jpg"
          alt="Cityscape"
          heading="Sunset Cityscapes"
          author="Benjamin Cruz"
        />
        <StoryCard
          image="18-days-voyage.jpg"
          alt="Man walking at sunset"
          heading="18 Days Voyage"
          author="Alexei Borodin"
        />
        <StoryCard
          image="architecturals.jpg"
          alt="Large building with many windows"
          heading="Architecturals"
          author="Samantha Brooke"
        />
      </ul>
      <FeaturesContainer />
    </>
  );
};

export default Home;
