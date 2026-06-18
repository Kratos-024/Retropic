import { GameInfoSection } from "../components/GameInfoSection";
import MenuSection from "../components/MenuSection";
import { NavBar } from "../components/NavBar";

export const GameInfoPage = () => {
  return (
    <section className="w-full  px-6 py-4 ">
      <div className="flex gap-5  ">
        {" "}
        <MenuSection />
        <div className="w-full overflow-x-hidden ">
          <NavBar />
          <GameInfoSection />
        </div>
      </div>
    </section>
  );
};
