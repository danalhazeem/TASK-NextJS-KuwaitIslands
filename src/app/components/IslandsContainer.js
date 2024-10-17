"use client";

import { useState } from "react";

import IslandForm from "./IslandForm";
import IslandList from "./IslandList";
import Search from "./Search";

function IslandsContainer({ islands }) {
  const [query, setQuery] = useState("");
  const [currentIsland, setCurrentIsland] = useState(islands[0]);

  function handleChange(e) {
    setQuery(e.target.value);
  }
  function handleClick(island) {
    setCurrentIsland(island);
  }
  const fitleredIslands = islands.filter((island) =>
    island.name.toLowerCase().includes(query.toLowerCase())
  );

  // const findIsland = islands.find((island) => island );
  return (
    <div className="islands-container">
      <div>
        <Search handleChange={handleChange} />
        <IslandList islands={fitleredIslands} handleClick={handleClick} />
      </div>
      <IslandForm island={currentIsland} />
    </div>
  );
}

export default IslandsContainer;
