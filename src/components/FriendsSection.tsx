import { SectionHeader } from "./BodySection";

const friends = [
  {
    img: "https://i.pravatar.cc/32?img=11",
    name: "Ryan Franci",
    status: "Playing GTA V",
    online: true,
    action: "Join the game",
  },
  {
    img: "https://i.pravatar.cc/32?img=5",
    name: "Kierra Donin",
    status: "Last played 2 hours ago",
    online: false,
  },
  {
    img: "https://i.pravatar.cc/32?img=8",
    name: "Brandon Vaccaro",
    status: "Last played yesterday",
    online: false,
  },
];

export const Friends = () => (
  <div>
    <SectionHeader title="Friends" />
    <div className="flex flex-col gap-4">
      {friends.map((f) => (
        <div key={f.name} className="flex items-center gap-3">
          <div className="relative shrink-0">
            <img src={f.img} className="w-8 h-8 rounded-full" alt={f.name} />
            <span
              className="absolute bottom-0 right-0 w-2.5 h-2.5 rounded-full border-2 border-[#111113]"
              style={{ background: f.online ? "#30d158" : "#8e8e93" }}
            />
          </div>
          <div className="flex-1 min-w-0">
            <p className="text-xs font-medium text-[#e5e5e7] m-0 truncate">
              {f.name}
            </p>
            <p
              className="text-xs m-0"
              style={{ color: f.online ? "#30d158" : "#8e8e93" }}
            >
              {f.status}
            </p>
          </div>
          {f.action && (
            <button className="text-xs text-[#0a84ff] shrink-0 bg-transparent border-none cursor-pointer">
              {f.action}
            </button>
          )}
        </div>
      ))}
    </div>
  </div>
);
