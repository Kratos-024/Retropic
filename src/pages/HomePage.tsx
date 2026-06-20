import type { SetStateAction } from "react";
import { Body } from "../components/BodySection";
import { HeroSection } from "../components/HeroSection";
import { MenuSection } from "../components/MenuSection";
import { NavBar } from "../components/NavBar";
import type { GameData } from "../Apis/GamesInfo";

export const HomePage = ({
  setGameData,
}: {
  setGameData: React.Dispatch<SetStateAction<GameData>>;
}) => {
  return (
    <section className="w-full  px-6 py-4 ">
      <div className="flex gap-5  ">
        <MenuSection />
        <div className="w-full overflow-x-hidden ">
          <NavBar />
          <HeroSection setGameData={setGameData} />
          <Body setGameData={setGameData} />
        </div>
      </div>
    </section>
  );
};
