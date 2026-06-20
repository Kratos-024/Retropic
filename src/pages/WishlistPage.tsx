import type { SetStateAction } from "react";
import type { GameData } from "../Apis/GamesInfo";
import { MenuSection } from "../components/MenuSection";
import { NavBar } from "../components/NavBar";
import { WhislistSection } from "../components/WhislistSection";

export const WishlistPage = ({
  setGameData,
}: {
  setGameData: React.Dispatch<SetStateAction<GameData>>;
}) => {
  return (
    <section className="w-full  px-6 py-4 ">
      <div className="flex gap-5  ">
        {" "}
        <MenuSection />
        <div className="w-full overflow-x-hidden ">
          <NavBar />
          <WhislistSection setGameData={setGameData} />
        </div>
      </div>
    </section>
  );
};
