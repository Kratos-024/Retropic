import { HashRouter, Route, Routes } from "react-router-dom";
import { HomePage } from "./pages/HomePage";
import { WishlistPage } from "./pages/WishlistPage";
import { GameInfoPage } from "./pages/GameInfoPage";

function App() {
  return (
    <HashRouter>
      <Routes>
        <Route element={<HomePage />} path="/"></Route>
        <Route path="/wishlist-section" element={<WishlistPage />} />
        <Route path="/game/:id/:gameTitle" element={<GameInfoPage />} />
      </Routes>
    </HashRouter>
  );
}

export default App;
