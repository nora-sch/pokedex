import React from "react";
import { useEffect } from "react";

function NavBar({ index, list, updateIndex }) {
  useEffect(() => {
    if (list[index].name === "pikachu") alert("pika pikachu !!!");
  }, [index]);
  const handleChangePrevious = () => {
    if (index > 0) updateIndex(index - 1);
  };
  const handleChangeNext = () => {
    index < list.length - 1 ? updateIndex(index + 1) : updateIndex(index);
  };
  return (
    <nav className="navigation-bar">
      <button index={index} onClick={handleChangePrevious}>
        Previous
      </button>
      <button index={index} onClick={handleChangeNext}>
        Next
      </button>
    </nav>
  );
}

export default NavBar;
