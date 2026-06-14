import { GoHome } from "react-icons/go";
import { MdOutlineLocalGroceryStore } from "react-icons/md";
import { IoLibrary } from "react-icons/io5";
import { FaChevronDown, FaChevronUp } from "react-icons/fa";
import { FaUserFriends } from "react-icons/fa";

import { useState } from "react";

export default function Sidebar() {
  const [openStore, setOpenStore] = useState(false);

  return (
    <div className="flex flex-col gap-6 w-46 text-primary">
      <div className="relative flex   items-center gap-3 cursor-pointer hover:text-blue-700">
        <p className="absolute -left-6 top-1/2 -translate-y-1/2 w-1 h-5 bg-blue-600 opacity-0 hover:opacity-100 transition-all"></p>
        <GoHome />
        <p>Home</p>
      </div>

      <div className="flex flex-col">
        <div
          onClick={() => setOpenStore(!openStore)}
          className={`relative   flex items-center gap-3 cursor-pointer hover:text-blue-700 ${openStore ? "mb-3" : ""}`}
        >
          <p className="absolute -left-6 top-1/2 -translate-y-1/2 w-1 h-5 bg-blue-600 opacity-0 hover:opacity-100 transition-all"></p>

          <MdOutlineLocalGroceryStore />
          <p>Store</p>

          <div className="ml-auto transition-transform duration-300">
            {openStore ? (
              <FaChevronUp className="transition-all duration-300" />
            ) : (
              <FaChevronDown className="transition-all duration-300" />
            )}
          </div>
        </div>

        <ul
          className={`
            flex flex-col items-start  w-25 mx-auto pl-6 gap-4 overflow-hidden
            transition-all duration-300 ease-in-out
            ${openStore ? "max-h-40 opacity-100 mt-2" : "max-h-0 opacity-0 mt-0"}
          `}
        >
          <li className="hover:text-white   cursor-pointer">Featured</li>
          <li className="hover:text-white  cursor-pointer">Categories</li>
          <li className="hover:text-white  cursor-pointer">Discover</li>
          <li className="hover:text-white  cursor-pointer">Wallet</li>
        </ul>
      </div>

      <div className="flex items-center gap-3 cursor-pointer hover:text-blue-700">
        <IoLibrary />
        <p>Library</p>
      </div>

      <div className="flex items-center gap-3 cursor-pointer hover:text-blue-700">
        <FaUserFriends />
        <p>Friends</p>
      </div>
    </div>
  );
}
export const MenuSection = () => {
  return (
    <section className="relative  ">
      <p className=" absolute w-px h-screen bg-gray-600  right-0"></p>
      <div className="w-75">
        <div className=" flex items-start  flex-col">
          <div className="  mb-10 flex items-center  w-fit gap-2">
            <img className=" w-12" src="./public/logo.png" />
            <p className=" text-[28px] text-white font-semibold font-sans">
              RETROPIC
            </p>
          </div>
          <Sidebar />
        </div>
      </div>
    </section>
  );
};
