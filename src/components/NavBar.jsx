import React from "react";
import { useEffect } from "react";

function NavBar({ index, list, updateIndex }) {
  useEffect(() => {
    if (list[index].name === "pikachu") alert("pika pikachu !!!");
  }, [index]);

  const handleChangePokemon = (index) =>{
    updateIndex(index);
  }
  return (
    <nav className="navigation-bar">
    {list.map((pokemon, index)=>(<button key = {index} onClick={() => handleChangePokemon(index)}>{pokemon.name}</button>))}
    </nav>
  );
}

export default NavBar;
