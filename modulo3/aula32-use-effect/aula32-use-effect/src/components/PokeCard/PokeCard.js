import React, { useState } from "react";
import axios from "axios";
import { useEffect } from "react";

export default function PokeCard (props) {
    const [currentPokemon, setCurrentPokemon] = useState({})

    useEffect(() => {
        const getPokemonAtAPI = pokeName => {
            axios.get(`https://pokeapi.co/api/v2/pokemon/${pokeName}`)
            .then(res => {
                setCurrentPokemon(res.data)
            }).catch(err => {
                console.log(`Rolou o erro: ${err}`);
            })
        };
        getPokemonAtAPI(props.pokemon);
    }, [props.pokemon]);

    return (
        <div>
          <p>{currentPokemon.name}</p>
          <p>{currentPokemon.weight} Kg</p>
          {currentPokemon.types && <p>{currentPokemon.types[0].type.name}</p>}
          {currentPokemon.sprites && (
            <img src={currentPokemon.sprites.front_default} alt={currentPokemon.name} />
          )}
        </div>
      );


}
