import { GoHome } from "react-icons/go";
import { MdOutlineLocalGroceryStore } from "react-icons/md";
import { IoLibrary } from "react-icons/io5";

export const MenuSection = () => {
  return (
    <section className="bg- w-[300px] ">
      <div className=" flex items-start  flex-col">
        <div className="  mb-10 flex items-center  w-fit gap-2">
          <img className=" w-12" src="./public/logo.png" />
          <p className=" text-[28px] text-white font-semibold font-sans">
            RETROPIC
          </p>
        </div>
        <div className="px-4 gap-9 flex flex-col">
          <div className="   flex items-center justify-center gap-3 text-primary">
            <GoHome />
            <p>Home </p>
          </div>
          <div className="   flex items-center justify-center gap-3 text-primary">
            <GoHome />
            <p>Store </p>
          </div>
          <div className="   flex items-center justify-center gap-3 text-primary">
            <GoHome />
            <p>Home </p>
          </div>
        </div>
      </div>
    </section>
  );
};
