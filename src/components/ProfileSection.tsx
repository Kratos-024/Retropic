import { useState, useRef, useEffect } from "react";
import { menuItems } from "../../public/Constants";

export default function ProfileDropdown({ user }: { user: any }) {
  const [open, setOpen] = useState(false);
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handler = (e: MouseEvent) => {
      if (ref.current && !ref.current.contains(e.target as Node)) {
        setOpen(false);
      }
    };
    document.addEventListener("mousedown", handler);
    return () => document.removeEventListener("mousedown", handler);
  }, []);

  return (
    <div className="  flex items-start justify-end ">
      <div className="relative" ref={ref}>
        <button
          onClick={() => setOpen(!open)}
          className="flex items-center gap-2.5 px-3 py-1.5 rounded-xlborder border-white/10 transition-all duration-200"
        >
          <img
            src={user.picture}
            alt={user.name}
            className="w-8 h-8 rounded-full object-cover ring-2 ring-white/20"
          />
          <span className="text-white text-sm font-medium">{user.name}</span>
          <svg
            className={`w-4 h-4 text-gray-400 transition-transform duration-200 ${open ? "rotate-180" : ""}`}
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M19 9l-7 7-7-7"
            />
          </svg>
        </button>

        {open && (
          <div className="absolute right-0 mt-3 w-72 rounded-2xl bg-[#1e1f35] border border-white/10 shadow-2xl shadow-black/50 overflow-hidden z-50 animate-in">
            <div className="p-4 border-b border-white/10">
              <div className="flex items-center gap-3">
                <div className="relative">
                  <img
                    src={user.picture}
                    alt={user.name}
                    className="w-12 h-12 rounded-full object-cover ring-2 ring-blue-500/50"
                  />
                  <span className="absolute bottom-0 right-0 w-3 h-3 bg-green-400 rounded-full border-2 border-[#1e1f35]" />
                </div>
                <div>
                  <p className="text-white font-semibold text-sm">
                    {user.name}
                  </p>
                  <p className="text-gray-400 text-xs">{user.username}</p>
                </div>
                <div className="ml-auto text-right">
                  <p className="text-xs text-gray-400">Balance</p>
                  <p className="text-sm font-semibold text-green-400">
                    {user.balance}
                  </p>
                </div>
              </div>

              <div className="flex gap-3 mt-3">
                {[
                  { label: "Games", value: "47" },
                  { label: "Friends", value: "45" },
                  { label: "Reviews", value: "12" },
                ].map((stat) => (
                  <div
                    key={stat.label}
                    className="flex-1 text-center bg-white/5 rounded-lg py-1.5"
                  >
                    <p className="text-white text-sm font-semibold">
                      {stat.value}
                    </p>
                    <p className="text-gray-400 text-xs">{stat.label}</p>
                  </div>
                ))}
              </div>
            </div>

            {/* Menu Items */}
            <div className="p-2">
              {menuItems.map((item) => (
                <button
                  key={item.label}
                  className="w-full flex items-center gap-3 px-3 py-2.5 rounded-xl text-gray-300 hover:bg-white/5 hover:text-white transition-all duration-150 group"
                >
                  <span className="text-base w-5 text-center">{item.icon}</span>
                  <span className="text-sm flex-1 text-left">{item.label}</span>
                  <svg
                    className="w-3.5 h-3.5 text-gray-600 group-hover:text-gray-400 transition-colors"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M9 5l7 7-7 7"
                    />
                  </svg>
                </button>
              ))}
            </div>

            {/* Footer */}
            <div className="p-2 border-t border-white/10">
              <button className="w-full flex items-center gap-3 px-3 py-2.5 rounded-xl text-red-400 hover:bg-red-500/10 hover:text-red-300 transition-all duration-150">
                <span className="text-base w-5 text-center">🚪</span>
                <span className="text-sm">Sign out</span>
              </button>
            </div>
          </div>
        )}
      </div>

      <style>{`
        @keyframes animate-in {
          from { opacity: 0; transform: translateY(-8px) scale(0.97); }
          to   { opacity: 1; transform: translateY(0)   scale(1);    }
        }
        .animate-in { animation: animate-in 0.18s ease-out forwards; }
      `}</style>
    </div>
  );
}
