import "./PokemonCard.css";
import { memo } from "react";

function PokemonCard(props) {
  const { pokemon, selectPokemon, selectPokemon2 } = props;

  console.log("Pokemon Card Rendered");

  return pokemon.id ? (
    <li
      className="pokemon-card"
      onClick={() => selectPokemon(pokemon)}
      onAuxClick={() => selectPokemon2(pokemon)}
    >
      <h2 className="pokemon-name">{pokemon.name}</h2>
      <img
        src={pokemon.sprites.front_default}
        alt="pokemon img"
        className="pokemon-img"
      ></img>
      <h3 className="text">HP: {pokemon.stats[0].base_stat}</h3>
    </li>
  ) : (
    <p className="loading">Loading...</p>
  );
}

export default PokemonCard;
//export default memo(PokemonCard);
