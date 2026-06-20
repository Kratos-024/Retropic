import { Body } from "../components/BodySection";
import { HeroSection } from "../components/HeroSection";
import { MenuSection } from "../components/MenuSection";
import { NavBar } from "../components/NavBar";

export const HomePage = () => {
  return (
    <section className="w-full  px-6 py-4 ">
      <div className="flex gap-5  ">
        <MenuSection />
        <div className="w-full overflow-x-hidden ">
          <NavBar />
          <HeroSection />
          <Body />
        </div>
      </div>
    </section>
  );
};
