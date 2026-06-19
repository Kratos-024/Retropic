import { useState } from "react";
import { TrailerPlayer } from "./TrailerPlayer";
import ProductDown from "./ProductDown";

export const GameInfoSection = () => {
  const [selected, setSelected] = useState("");

  return (
    <section>
      <div className=" mt-14 ">
        <div className=" flex flex-col gap-[26px] items-start">
          <h2 className=" text-white text-[48px] font-semibold">
            God Of War Ragnarok
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
              <div className="bg-[#26bbff] ease-in-out duration-200 animate-bounce  w-full h-[2px]"></div>
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
              <div className="bg-[#26bbff] w-full  h-[2px]"></div>
            )}
          </li>
        </ul>

        <div className=" grid grid-cols-[1100px_minmax(0,1fr)]">
          <div className="w-full   h-[700px] ">
            <TrailerPlayer trailer={"https://youtu.be/K0u_kAWLJOA"} />
          </div>
          <div>
            {" "}
            <ProductDown />
          </div>
        </div>

        <div></div>
      </div>
    </section>
  );
};
