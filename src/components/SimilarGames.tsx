import { Link } from "react-router-dom";
import { SectionHeader } from "./BodySection";
import Heart from "./MostPopular";
import data from "../../psp_games.json";

export const SimilarGames = () => {
  return (
    <div className="mt-24">
      <SectionHeader title="Similar Games" />
      <div className="w-full overflow-x-auto  overflow-y-hidden scroll-smooth scrollbar-hide">
        <div className="flex gap-3">
          {data.slice(0, 5).map((game) => (
            <Link to={`/game/${game.id}/${game.title}`}>
              <div
                key={game.title}
                className="shrink-0 relative cursor-pointer w-48 mt-5 hover:scale-105 transition-transform duration-300 ease-out"
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
      </div>
    </div>
  );
};
