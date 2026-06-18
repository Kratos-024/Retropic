import { CiSearch } from "react-icons/ci";
import ProfileDropdown from "./ProfileSection";
import { useState } from "react";
import { LoginButton } from "./LoginButton";

export const SearchBar = () => (
  <div className="bg-[#1e2022] rounded-xl px-3 gap-3 w-75 py-2 flex items-center">
    <CiSearch className="fill-gray-200" />
    <input
      className="placeholder:text-gray-400 outline-0"
      placeholder="Search here..."
    />
  </div>
);

export const NavBar = () => {
  const [user, setUser] = useState<{
    email: string;
    name: string;
    picture: string;
  }>();

  return (
    <nav>
      <div className="flex items-center justify-between pb-3">
        <SearchBar />
        {user ? (
          <ProfileDropdown user={user} />
        ) : (
          <LoginButton setUser={setUser} />
        )}
      </div>
    </nav>
  );
};
