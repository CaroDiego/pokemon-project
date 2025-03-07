import { Link } from "react-router-dom";
import DetailsWrapper from "../hoc/DetailsWrapper";
import "./PokemonDetails.css";
import { useState } from "react";

function PokemonDetails2(props) {
  const { pokemon, likes, increaseLikes } = props;

  return (
    <section className="selected-pokemon">
      <div>
        <h3>Pokemon 2</h3>
        <h3>
          Likes: {likes}
          <button onClick={increaseLikes}>+</button>
        </h3>
        <Link to={`/pokemon/${pokemon.id}`}> Ver detalles</Link> 
      </div>
      <div className="pokemon-container pokemon-2">
        <h2 className="text">{pokemon.name}</h2>
        <img
          src={pokemon.sprites.front_default}
          alt={pokemon.name}
          className="pokemon-img"
        />
        <h3 className="text">HP: {pokemon.stats[0].base_stat}</h3>
      </div>
    </section>
  );
}

// export default DetailsWrapper(PokemonDetails2);
export default PokemonDetails2;
