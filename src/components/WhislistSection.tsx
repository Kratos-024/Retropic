import { useEffect, useRef, useState, type SetStateAction } from "react";
import { SectionHeader } from "./BodySection";
import Heart from "./MostPopular";
import data from "../../psp_games.json";
import { Link } from "react-router-dom";
import type { GameData } from "../Apis/GamesInfo";

const ITEMS_PER_LOAD = 12;

export const WhislistSection = ({
  setGameData,
}: {
  setGameData: React.Dispatch<SetStateAction<GameData>>;
}) => {
  const [displayCount, setDisplayCount] = useState(ITEMS_PER_LOAD);
  const observerTarget = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        if (entries[0].isIntersecting && displayCount < data.length) {
          setDisplayCount((prev) =>
            Math.min(prev + ITEMS_PER_LOAD, data.length),
          );
        }
      },
      { threshold: 0.1 },
    );

    if (observerTarget.current) {
      observer.observe(observerTarget.current);
    }

    return () => observer.disconnect();
  }, [displayCount, data.length]);

  const displayedData = data.slice(0, displayCount);

  return (
    <div>
      <SectionHeader title="Most Popular" />
      <div className="w-full overflow-x-auto overflow-y-hidden scroll-smooth scrollbar-hide">
        <div className="grid grid-cols-6 gap-3">
          {displayedData.map((game) => (
            <Link to={`/game/${game.id}/${game.title}`}>
              <div
                key={game.title}
                className="shrink-0 relative cursor-pointer w-56 mt-5 hover:scale-105 transition-transform duration-300 ease-out"
              >
                <Heart gameName={game.title} />
                <div className="rounded-xl flex items-center justify-center mb-2">
                  <img
                    loading="lazy"
                    className="rounded-xl w-full"
                    src={game.imgSrc}
                  />
                </div>
                <span className="text-xs text-[#e5e5e7] line-clamp-1">
                  {game.title}
                </span>
              </div>
            </Link>
          ))}
        </div>

        <div
          ref={observerTarget}
          className="h-1 w-full"
          aria-label="Load more games"
        />
      </div>
    </div>
  );
};
