import { useState } from "react";
import { TrailerPlayer } from "./TrailerPlayer";
import ProductDown from "./ProductDown";
import { ScrollingSlideShow } from "./ScrollingSlideShow";
import type { GameData } from "../Apis/GamesInfo";

export const GameInfoSection = ({ gameData }: { gameData: GameData }) => {
  const [selected, setSelected] = useState("");
  const [mediaLink, setMediaLink] = useState("");
  const mediaLinkHandler = (link: string) => {
    setMediaLink(link);
  };
  return (
    <section>
      <div className="mt-14 ">
        <div className=" flex flex-col gap-6.5 items-start">
          <h2 className=" text-white text-[48px] font-semibold">
            {gameData?.name}
          </h2>
          <div className=" flex gap-4 items-start">
            <p>⭐⭐⭐⭐⭐ 4.9</p>
            <p>Great for Begginers</p>
            <p>🌐Diverse Characters</p>
          </div>
        </div>

        <ul className="flex items-start mt-6 mb-7 gap-5">
          <li
            onClick={() => {
              setSelected("overview");
            }}
            className={` space-y-2   hover:text-white cursor-pointer ${selected ? "text-white" : "text-[#ffffffa6] "}`}
          >
            <p>Overview</p>
            {selected === "overview" && (
              <div className="bg-[#26bbff] ease-in-out duration-200 animate-bounce  w-full h-0.5"></div>
            )}
          </li>

          <li
            onClick={() => {
              setSelected("add-ons");
            }}
            className={` space-y-2 hover:text-white cursor-pointer ${selected ? "text-white" : "text-[#ffffffa6] "}`}
          >
            <p>Add ons</p>
            {selected === "add-ons" && (
              <div className="bg-[#26bbff] w-full  h-0.5"></div>
            )}
          </li>
        </ul>

        <div className="  relative grid grid-cols-[1100px_minmax(0,1fr)]">
          <div className="w-full   h-full flex flex-col gap-20 ">
            <div className="w-full  h-175 mb-20">
              <TrailerPlayer link={gameData?.media.videos[0].url} />
              <ScrollingSlideShow
                gameMediaData={gameData?.media}
                mediaLinkHandler={mediaLinkHandler}
                trailerLink={"https://youtu.be/K0u_kAWLJOA"}
              />
            </div>
            <div className=" ">
              <div className=" flex gap-9 ">
                <div>
                  <h2 className=" text-white text-lg">Genre</h2>
                  <p> {gameData?.genres} </p>
                </div>
                <div className="  border-l-gray-700 px-4 border-l ">
                  <h2 className=" text-white text-lg text-start">Console</h2>
                  <p>Play Station Portable </p>
                </div>
              </div>
              <h3 className=" mt-9  text-start text-white text-lg font-semibold mb-3">
                Kratos and Atreus embark on a mythic journey for answers before
                Ragnarök arrives – now on PC.
              </h3>
              <div className="max-w-4xl mt-6 space-y-6">
                {gameData?.summary && (
                  <div>
                    <h2 className="text-white text-xl md:text-2xl font-semibold mb-2">
                      Summary
                    </h2>
                    <p className="text-gray-300 text-base md:text-lg leading-8 tracking-wide">
                      {gameData.summary}
                    </p>
                  </div>
                )}

                {gameData?.storyline && (
                  <div>
                    <h2 className="text-white text-xl md:text-2xl font-semibold mb-2">
                      Storyline
                    </h2>
                    <p className="text-gray-300 text-base md:text-lg leading-8 tracking-wide">
                      {gameData.storyline}
                    </p>
                  </div>
                )}
              </div>
            </div>
          </div>

          <div className="sticky top-0 self-start right-0 ">
            <ProductDown />
          </div>
        </div>
      </div>
    </section>
  );
};
