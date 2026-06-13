import { SectionHeader } from "./BodySection";

const popularGames = [
  {
    title: "F1 22",
    genre: "Racing",
    bg: "linear-gradient(135deg, #0a0a0a, #1a1a2e)",
    label: "F1 22",
  },
  {
    title: "Call of Duty: MW",
    genre: "Action",
    bg: "linear-gradient(135deg, #0d0d0d, #1a1200)",
    label: "MODERN\nWARFARE",
  },
  {
    title: "Fifa 22",
    genre: "Sports",
    bg: "linear-gradient(135deg, #001a3a, #003080)",
    label: "FIFA 22",
  },
];

export const MostPopular = () => (
  <div>
    <SectionHeader title="Most Popular" />
    <div className="grid grid-cols-3 gap-3">
      {popularGames.map((game) => (
        <div key={game.title}>
          <div
            className="rounded-xl h-28 flex items-center justify-center mb-2"
            style={{ background: game.bg }}
          >
            <span className="text-white font-black text-lg text-center whitespace-pre-line leading-tight">
              {game.label}
            </span>
          </div>
          <div className="flex justify-between items-center">
            <span className="text-xs text-[#e5e5e7]">{game.title}</span>
            <span className="text-xs text-[#8e8e93]">{game.genre}</span>
          </div>
        </div>
      ))}
    </div>
  </div>
);
