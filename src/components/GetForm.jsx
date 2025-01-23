import { useState } from "react";

function GetForm(props) {
  const [from, setFrom] = useState(1);
  const [to, setTo] = useState(10);

  const handleFromChange = (event) => {
    setFrom(event.target.value);
  };
  const handleToChange = (event) => {
    setTo(event.target.value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    props.getPokemons(from, to);
  };

  return (
    <form onSubmit={handleSubmit}>
      <fieldset>
        <label htmlFor="from-pokemon">From: </label>
        <input
          type="number"
          id="from-pokemon"
          min={1}
          onChange={handleFromChange}
        />
      </fieldset>
      <fieldset>
        <label htmlFor="to-pokemon">From: </label>
        <input
          type="number"
          id="to-pokemon"
          min={10}
          onChange={handleToChange}
        />
      </fieldset>
      <button>Get Pokemons</button>
    </form>
  );
}

export default GetForm;
