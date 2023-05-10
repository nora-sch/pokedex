import React from "react";
import { useState } from "react";
import MyTitle from "./components/MyTitle";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import PokemonCard from "./components/PokemonCard";
import NavBar from "./components/NavBar";

function App() {
  const pokemonList = [
    {
      name: "bulbasaur",
      imgSrc:
        "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/1.png",
    },
    {
      name: "charmander",
      imgSrc:
        "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/4.png",
    },
    {
      name: "squirtle",
      imgSrc:
        "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/7.png",
    },
    {
      name: "pikachu",
      imgSrc:
        "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/25.png",
    },
    {
      name: "mew",
    },
  ];
  const [pokemonIndex, setPokemonIndex] = useState(0);
  const handleClickPrevious = () => {
    if (pokemonIndex > 0) setPokemonIndex(pokemonIndex - 1);
  };
  const handleClickNext = () => {
    pokemonIndex < pokemonList.length - 1
      ? setPokemonIndex(pokemonIndex + 1)
      : setPokemonIndex(pokemonIndex);
  };
  return (
    <>
      <div>
        <NavBar index = {pokemonIndex} listLength={pokemonList.length} updateIndex = {setPokemonIndex}/>
        <PokemonCard pokemon={pokemonList[pokemonIndex]} />
        {pokemonIndex > 0 ? (
          <button onClick={handleClickPrevious}>Previous</button>
        ) : (
          ""
        )}
        {pokemonIndex < pokemonList.length - 1 ? (
          <button onClick={handleClickNext}>Next</button>
        ) : (
          ""
        )}
      </div>
    </>
  );
}

export default App;
