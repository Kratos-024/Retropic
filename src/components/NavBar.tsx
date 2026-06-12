import { CiSearch } from "react-icons/ci";

export const SearchBar = () => {
  return (
    <div className=" bg-[#1e2022] rounded-xl px-3 gap-3 w-75 py-2  flex items-center">
      {" "}
      <CiSearch className=" fill-gray-200" />
      <input
        className=" placeholder:text-gray-400 outline-0 "
        placeholder="Search here..."
      />
    </div>
  );
};
export const NavBar = () => {
  return (
    <nav>
      <div>
        <SearchBar />
      </div>
    </nav>
  );
};
