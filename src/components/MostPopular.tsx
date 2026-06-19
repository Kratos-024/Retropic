import { SectionHeader } from "./BodySection";
import data from "../../psp_games.json";
import { CiHeart } from "react-icons/ci";

import { useState } from "react";
import { Link } from "react-router-dom";

export default function Heart({ gameName }: { gameName: string }) {
  const [liked, setLiked] = useState(false);
  const whislistHandler = () => {
    console.log(gameName);
  };
  whislistHandler();
  return (
    <div
      className="absolute top-5 right-1 cursor-pointer"
      onClick={() => setLiked(!liked)}
    >
      <CiHeart
        className={`w-7 h-7 ${liked ? "text-red-500 " : "text-gray-400"}`}
      />
    </div>
  );
}
export const MostPopular = () => {
  return (
    <div className=" ">
      <SectionHeader title="Most Popular" />
      <div className="w-full overflow-x-auto  overflow-y-hidden scroll-smooth scrollbar-hide">
        <div className="flex gap-3">
          {data.slice(0, 20).map((game) => (
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

          <div
            className="shrink-0 w-32 rounded-xl border-2 border-dashed border-[#424245] 
                     flex items-center justify-center cursor-pointer hover:bg-[#1c1c1e] 
                     transition-colors duration-200 aspect-square"
            onClick={() => (window.location.href = "/wishlist-section")}
          >
            <div className="text-center">
              <div className="text-2xl mb-1">→</div>
              <div className="text-xs text-[#e5e5e7]">See more</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
