import { SectionHeader } from "./BodySection";

const popularGames = [
  {
    title: "F1 22",
    genre: "Racing",
    bg: "linear-gradient(135deg, #0a0a0a, #1a1a2e)",
    label: "F1 22",
    src: " ./public/got-chain.jpg",
  },
  {
    src: " ./public/got-chain.jpg",

    title: "Call of Duty: MW",
    genre: "Action",
    bg: "linear-gradient(135deg, #0d0d0d, #1a1200)",
    label: "MODERN\nWARFARE",
  },
  {
    src: " ./public/got-chain.jpg",
    title: "Fifa 22",
    genre: "Sports",
    bg: " ./public/got-chain.jpg",
    label: "FIFA 22",
  },
  {
    src: " ./public/got-chain.jpg",
    title: "Fifa 22",
    genre: "Sports",
    bg: " ./public/got-chain.jpg",
    label: "FIFA 22",
  },
];

export const MostPopular = () => (
  <div>
    <SectionHeader title="Most Popular" />
    <div className="grid grid-cols-4 gap-3">
      {popularGames.map((game) => (
        <div
          className="hover:scale-110 transition-transform duration-300 ease-out"
          key={game.title}
        >
          <div
            className="rounded-xl flex items-center justify-center mb-2"
            style={{ background: game.bg }}
          >
            <img className="rounded-xl" src={game.src} />
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
