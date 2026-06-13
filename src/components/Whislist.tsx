import { SectionHeader } from "./BodySection";

const wishlistGames = [
  {
    title: "Grand Theft Auto V",
    bg: "linear-gradient(135deg, #1a0a00, #3d1a00)",
    watermark: "GTA V",
  },
  {
    title: "Death Stranding",
    bg: "linear-gradient(135deg, #0a1a1a, #002222)",
    watermark: "DEATH\nSTRANDING",
  },
];

export const Wishlist = () => (
  <div>
    <SectionHeader title="Wishlist" />
    <div className="grid grid-cols-2 gap-3">
      {wishlistGames.map((game) => (
        <div
          key={game.title}
          className="rounded-xl h-32 flex items-end p-3 relative overflow-hidden"
          style={{ background: game.bg }}
        >
          <span className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 text-2xl font-black text-white/10 whitespace-pre-line text-center leading-tight">
            {game.watermark}
          </span>
          <span className="text-xs font-semibold text-[#e5e5e7] relative z-10">
            {game.title}
          </span>
        </div>
      ))}
    </div>
  </div>
);
