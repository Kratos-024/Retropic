import { useEffect, useState } from "react";
import GoogleIcon from "../../public/svgs/Google";
import type { authUser, GoogleLoginModalProps } from "../types/Props";
import { data } from "react-router-dom";

export const GoogleLoginModal = ({
  onClose,
  setUser,
}: GoogleLoginModalProps) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [remember, setRemember] = useState(false);
  const [loading, setLoading] = useState(false);

  const handleSubmit = () => {
    setLoading(true);
    setTimeout(() => setLoading(false), 2000);
  };

  useEffect(() => {
    window.electronApi.checkExistingSession().then((savedUser) => {
      if (savedUser) {
        setUser(savedUser);
      }
    });

    // const unsubscribe = window.electronApi?.onLoginSuccess((sessionData) => {
    //   console.log("sessionDatasessionDatasessionData", sessionData);
    //   setUser(sessionData);
    // });

    // return () => {
    //   unsubscribe?.();
    // };
  }, []);

  const handleLogin = async () => {
    window.electronApi.startGoogleLogin();
    const userInfo = await window.electronApi.checkExistingSession();
    setUser(userInfo);
  };
  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center backdrop-blur-sm bg-black/50"
      onClick={onClose}
    >
      <div
        className="relative bg-white/10 backdrop-blur-xl border border-white/20 rounded-2xl p-10 w-full max-w-sm shadow-2xl"
        onClick={(e) => e.stopPropagation()}
      >
        <button
          onClick={onClose}
          className="absolute top-4 right-4 text-white/50 hover:text-white text-xl leading-none"
        >
          ✕
        </button>

        <div className="text-center mb-7">
          <div className="flex justify-center mb-4">
            <GoogleIcon />
          </div>
          <h1 className="text-2xl font-medium text-white">Sign in</h1>
          <p className="text-sm text-white/60 mt-1">Use your Google Account</p>
        </div>

        <div className="mb-4">
          <label className="block text-sm text-white/70 mb-1.5">
            Email or phone
          </label>
          <input
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder="example@gmail.com"
            className="w-full px-3 py-2.5 text-sm bg-white/10 border border-white/20 text-white placeholder:text-white/30 rounded-lg outline-none focus:border-blue-400 focus:ring-2 focus:ring-blue-400/20 transition"
          />
        </div>

        <div className="mb-4">
          <div className="flex justify-between items-center mb-1.5">
            <label className="text-sm text-white/70">Password</label>
            <a href="#" className="text-sm text-blue-400 hover:underline">
              Forgot password?
            </a>
          </div>
          <input
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            placeholder="Enter your password"
            className="w-full px-3 py-2.5 text-sm bg-white/10 border border-white/20 text-white placeholder:text-white/30 rounded-lg outline-none focus:border-blue-400 focus:ring-2 focus:ring-blue-400/20 transition"
          />
        </div>

        <div className="flex items-center gap-2 mb-6">
          <input
            type="checkbox"
            id="remember"
            checked={remember}
            onChange={(e) => setRemember(e.target.checked)}
            className="w-4 h-4 accent-blue-400 cursor-pointer"
          />
          <label
            htmlFor="remember"
            className="text-sm text-white/60 cursor-pointer"
          >
            Stay signed in
          </label>
        </div>

        <button
          onClick={handleSubmit}
          disabled={loading}
          className="w-full py-2.5 bg-blue-500 hover:bg-blue-600 active:scale-[0.98] text-white text-sm font-medium rounded-lg transition disabled:opacity-70"
        >
          {loading ? "Signing in…" : "Next"}
        </button>

        <div className="flex items-center gap-3 my-5">
          <div className="flex-1 h-px bg-white/20" />
          <span className="text-xs text-white/40">or</span>
          <div className="flex-1 h-px bg-white/20" />
        </div>

        <button
          onClick={handleLogin}
          className="cursor-pointer w-full flex items-center justify-center gap-2.5 py-2.5 bg-white/10 border border-white/20 rounded-lg text-sm text-white hover:bg-white/20 active:scale-[0.98] transition"
        >
          <GoogleIcon />
          Continue with Google
        </button>

        <p className="text-center text-sm text-white/50 mt-6">
          Don't have an account?{" "}
          <a href="#" className="text-blue-400 hover:underline">
            Create account
          </a>
        </p>
      </div>
    </div>
  );
};
