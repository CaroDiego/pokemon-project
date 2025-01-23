import { Route, Routes } from "react-router-dom";
import "./App.css";
import Homepage from "./pages/Homepage";
import PokemonsPage from "./pages/PokemonsPage";

function App() {
  return (
    <Routes>
      <Route path="/" element={<Homepage />} />
      <Route path="/pokemons" element={<PokemonsPage />} />
    </Routes>
  );
}

export default App;
