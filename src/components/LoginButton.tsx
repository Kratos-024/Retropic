import { useState } from "react";
import { GoogleLoginModal } from "./GoogleLogin";

export const LoginButton = ({ setUser }: { setUser: any }) => {
  const [open, setOpen] = useState(false);

  return (
    <>
      <button
        onClick={() => setOpen(true)}
        className="px-4 py-2 text-sm text-white bg-blue-500 hover:bg-blue-600 rounded-xl transition"
      >
        Login
      </button>

      {open && (
        <GoogleLoginModal setUser={setUser} onClose={() => setOpen(false)} />
      )}
    </>
  );
};
