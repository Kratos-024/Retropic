import { MenuSection } from "../components/MenuSection";
import { NavBar } from "../components/NavBar";
import { WhislistSection } from "../components/WhislistSection";

export const WishlistPage = () => {
  return (
    <section className="w-full  px-6 py-4 ">
      <div className="flex gap-5  ">
        {" "}
        <MenuSection />
        <div className="w-full overflow-x-hidden ">
          <NavBar />
          <WhislistSection />
        </div>
      </div>
    </section>
  );
};
