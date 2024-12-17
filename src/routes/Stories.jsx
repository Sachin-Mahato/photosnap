import { StoryCard } from "../component/Card/StoryCard";
import { FeaturedStoryCard } from "../component/Card/FeaturedStoryCard";

import storyCards from "../storyCards.json";

const Stories = () => {
  return (
    <>
      <FeaturedStoryCard
        image="moon-of-appalacia.jpg"
        alt="Hazy mountains with full moon"
        heading="HAZY FULL MOON OF APPALACHIA"
        description='The dissected plateau area, while not actually made up of geological mountains, is popularly called "mountains," especially in eastern Kentucky and West Virginia, and while the ridges are not high, the terrain is extremely rugged.'
        date="March 2nd 2020"
        author="John Appleseed"
      />
      <ul className="grid-cols-2 sm:grid md:grid-cols-4">
        {storyCards.map((story, key) => (
          <StoryCard
            image={story.image}
            date={story.date}
            alt={story.alt}
            heading={story.heading}
            author={story.author}
            key={key}
          />
        ))}
      </ul>
    </>
  );
};

export default Stories;
