import React, { Component, useState } from "react";
import axios from "axios";
import PokeCard from "./components/PokeCard/PokeCard";
import { useEffect } from "react";
import "./App.css"

function App() {
const [pokeList, setPokelist] = useState([]);

const [pokeName, setPokeName] = useState('');

useEffect(() => {
axios.get("https://pokeapi.co/api/v2/pokemon/?limit=151")
.then(res => {
  setPokelist(res.data.results)
}).catch(err => {
  console.log(`Rolou o erro: ${err}`);
})
});

const changePokeName = event => {
  setPokeName(event.target.value);
}

  return (
    <div className="App">
      <select onChange={changePokeName}>
        <option value={''}>Nenhum</option>
        {pokeList.map(pokemon => {
          return(
            <option key={pokemon.name} value={pokemon.name}>{pokemon.name}</option>
          )
        })}
      </select>
      <div className="CardContainer">
      {pokeName && <PokeCard pokemon = {pokeName}/>}
      </div>
    </div>
  );
}

export default App;
