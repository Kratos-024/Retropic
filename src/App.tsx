import { HashRouter, Route, Routes } from "react-router-dom";
import { HomePage } from "./pages/HomePage";
import { WishlistPage } from "./pages/WishlistPage";
import { GameInfoPage } from "./pages/GameInfoPage";
import type { GameData } from "./Apis/GamesInfo";
import { useState } from "react";

function App() {
  const [gameData, setGameData] = useState<GameData>({
    id: 0,
    name: "",
    summary: "",
    storyline: "",
    genres: [""],
    media: {
      cover: "",
      screenshots: [""],
      videos: [
        {
          videoId: "",
          platform: "",
          url: "",
          embedUrl: "",
          thumbnail: "",
        },
      ],
    },
  });

  return (
    <HashRouter>
      <Routes>
        <Route
          element={<HomePage setGameData={setGameData} />}
          path="/"
        ></Route>
        <Route
          path="/wishlist-section"
          element={<WishlistPage setGameData={setGameData} />}
        />
        <Route
          path="/game/:id/:gameTitle"
          element={<GameInfoPage gameData={gameData} />}
        />
      </Routes>
    </HashRouter>
  );
}

export default App;
