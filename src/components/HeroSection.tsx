import { useEffect, useState } from "react";

const tags = [
  { label: "Role playing", icon: "🎭" },
  { label: "Action", icon: "⚡" },
  { label: "Shooter", icon: "🎯" },
];

const friends = [
  "https://i.pravatar.cc/24?img=1",
  "https://i.pravatar.cc/24?img=2",
  "https://i.pravatar.cc/24?img=3",
];
// "./public/tekken.jpg",
// "./public/Got.jpg",
const slides = ["./public/got-chain.jpg"];

export const HeroSection = () => {
  const [purchased, setPurchased] = useState(false);
  const [currentIndex, setCurrentIndex] = useState(0);
  const [fade, setFade] = useState(true);

  useEffect(() => {
    const timer = setInterval(() => {
      setFade(false);
      setTimeout(() => {
        setCurrentIndex((prev) => (prev === slides.length - 1 ? 0 : prev + 1));
        setFade(true);
      }, 400);
    }, 5000);
    return () => clearInterval(timer);
  }, []);

  const currentImg = slides[currentIndex];

  return (
    <section className="p-4">
      <div className="flex overflow-hidden w-full">
        <div className="relative w-[75%] min-h-126.5">
          <img
            src={currentImg}
            alt="Ghost of Tsushima"
            className="absolute rounded-4xl inset-0 w-full h-full object-cover"
            style={{
              opacity: fade ? 1 : 0,
              transition: "opacity 400ms ease-in-out",
            }}
          />
          <div className="rounded-4xl absolute inset-0 bg-linear-to-r from-transparent via-transparent to-[#1c1c1e]" />

          <div className="absolute top-3 left-3 flex gap-1.5 z-10">
            {["PS", "XB", "PC"].map((p) => (
              <span
                key={p}
                className="bg-[#2c2c2e] text-white text-[10px] font-bold px-1.5 py-0.5"
              >
                {p}
              </span>
            ))}
          </div>

          <div className="absolute bottom-3 left-3 flex items-center gap-2 z-10">
            <div className="flex">
              {friends.map((src, i) => (
                <img
                  key={i}
                  src={src}
                  className="w-6 h-6 rounded-full border-2 border-[#1c1c1e]"
                  style={{ marginLeft: i > 0 ? "-6px" : "0" }}
                />
              ))}
            </div>
            <div className="bg-[#1877f2] text-white text-xs font-medium px-2.5 py-1 rounded-full">
              + 45 Friends
            </div>
          </div>
        </div>

        <div className="flex-1 flex flex-col justify-center gap-3 px-5 py-5">
          <div>
            <h2 className="text-white text-lg font-semibold">
              Ghost of Tsushima
            </h2>
            <p className="text-[#8e8e93] text-sm mt-0.5">
              Sucker Punch Productions
            </p>
          </div>

          <div className="flex flex-wrap gap-1.5">
            {tags.map(({ label }) => (
              <span
                key={label}
                className="border border-[#3a3a3c] text-[#aeaeb2] text-xs px-2.5 py-0.5 rounded-full"
              >
                {label}
              </span>
            ))}
          </div>

          <button
            onClick={() => setPurchased(true)}
            className={`w-full py-2.5 rounded-xl text-white text-sm font-semibold transition-colors ${
              purchased ? "bg-[#30d158]" : "bg-[#0a84ff] hover:bg-[#0974e0]"
            }`}
          >
            {purchased ? "Added to cart ✓" : "$69.99   Purchase"}
          </button>
        </div>
      </div>
    </section>
  );
};
