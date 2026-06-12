import { HashRouter, Route, Routes } from "react-router-dom";
import { HomePage } from "./pages/HomePage";

function App() {
  return (
    <HashRouter>
      <Routes>
        <Route element={<HomePage />} path="/"></Route>
      </Routes>
    </HashRouter>
  );
}

export default App;
