import { Link } from "react-router-dom";
export function StoryCard({ image, date, alt, heading, author }) {
  return (
    <li className="group relative bottom-0 transition-all hover:bottom-6">
      <picture>
        <source
          media="(min-width:640px)"
          srcSet={`../assets/stories/desktop/${image}`}
        />
        <img
          className="min-w-full brightness-[65%]"
          src={`../assets/stories/mobile/${image}`}
          alt={alt}
        />
      </picture>

      <div className="absolute inset-0 mb-10 flex flex-col justify-end px-8 text-pureWhite">
        {date && <span className="mb-1 text-[13px]">{date}</span>}
        <h3 className="mb-1 text-[18px] font-bold leading-[25px]">{heading}</h3>
        <span className="mb-4 text-[13px]">{`by ${author}`}</span>
        <hr className="mb-5 opacity-25" />
        <Link to={"/stories"}>
          <button className="flex min-w-full items-center justify-between text-[12px] font-bold tracking-[2px] hover:underline">
            READ STORY
            <svg xmlns="http://www.w3.org/2000/svg" width="43" height="14">
              <g fill="none" fillRule="evenodd" stroke="currentColor">
                <path d="M0 7h41.864M35.428 1l6 6-6 6" />
              </g>
            </svg>
          </button>
        </Link>
      </div>
      <hr className="absolute bottom-0 hidden h-[6px] w-full border-none bg-gradient-to-t from-bgGradiant1 via-bgGradiant2 to-bgGradiant3 group-hover:block" />
    </li>
  );
}
