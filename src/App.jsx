import "./App.css";
import PokemonDetails from "./components/PokemonDetails";
import PokemonList from "./components/PokemonList";
import { useState } from "react";
function App() {
  const [selectedPokemon, setSelectedPokemon] = useState();

  return (
    <>
      {selectedPokemon && (
        <div>
          <h2>Pokemon Seleccionada</h2>
          <PokemonDetails pokemon={selectedPokemon}></PokemonDetails>
        </div>
      )}

      <h2>Lista de Pokemons</h2>
      <PokemonList selectPokemon={setSelectedPokemon}></PokemonList>
    </>
  );
}

export default App;
