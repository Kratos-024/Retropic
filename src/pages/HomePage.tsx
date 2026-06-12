import { MenuSection } from "../components/MenuSection";
import { NavBar } from "../components/NavBar";

export const HomePage = () => {
  return (
    <section className=" px-6 py-4">
      <div className="flex  ">
        {" "}
        <MenuSection /> <NavBar />
      </div>
    </section>
  );
};
