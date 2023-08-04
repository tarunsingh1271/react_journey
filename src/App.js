import React from "react";
import pokemon from "./pokemon.json";
import PropTypes from "prop-types";

import "./App.css";

const PokemonRow = ({ pokemon }) => (
  <>
    <tr key={pokemon.id}>
      <td>{pokemon.name.english}</td>
      <td>{pokemon.type.join(", ")}</td>
    </tr>
  </>
);

PokemonRow.propTypes = {
  pokemon: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
      name: PropTypes.shape({
        english: PropTypes.string.isRequired,
      }),
      type: PropTypes.arrayOf(PropTypes.string.isRequired),
    })
  ),
};

function App() {

  const[filter, filterset] = React.useState("");
  return (
    <div>
      <h1 className="title">Pokemon Search</h1>
      
      <button class="btn-search"> <i class="fas fa-search"> </i></button>

      <input type="text" class="input-search" placeholder="Type to Search..."
      value ={filter}
      onChange={(evt) => filterset(evt.target.value)} />
      
      <table width="100%">
        <thead>
            <tr>
              <th> Name</th>
              <th> Type</th>
            </tr>
        </thead>
        <tbody>
          {pokemon
          .filter((pokemon) => pokemon.name.english.toLowerCase().includes(filter.toLowerCase()))
          .slice(0, 30).map((pokemon) => 
          (
            <PokemonRow pokemon={pokemon} />
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default App;