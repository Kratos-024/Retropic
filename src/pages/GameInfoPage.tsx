import type { GameData } from "../Apis/GamesInfo";
import { GameInfoSection } from "../components/GameInfoSection";
import { MenuSection } from "../components/MenuSection";
import { NavBar } from "../components/NavBar";
import { SimilarGames } from "../components/SimilarGames";

export const GameInfoPage = ({ gameData }: { gameData: GameData }) => {
  return (
    <section className="w-full  px-6 py-4 ">
      <div className="flex gap-5  ">
        <MenuSection />
        <div>
          <div className="w-full   ">
            <NavBar />
            <GameInfoSection gameData={gameData} />
          </div>

          <SimilarGames />
        </div>
      </div>
    </section>
  );
};
