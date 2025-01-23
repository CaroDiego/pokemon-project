import { Route, Routes } from "react-router-dom";
import "./App.css";
import Homepage from "./pages/Homepage";
import PokemonsPage from "./pages/PokemonsPage";
import PokemonPage from "./pages/PokemonPage";

function App() {
  return (
    <Routes>
      <Route path="/" element={<Homepage />} />
      <Route path="/pokemons" element={<PokemonsPage />} />
      <Route path="/pokemon/:id" element={<PokemonPage/>}/>
    </Routes>
  );
}

export default App;
