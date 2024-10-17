"use client";

import Island from "./Island";

function IslandList({ islands, handleClick }) {
  const islandCards = islands.map((island) => (
    <Island key={island.id} island={island} handleClick={handleClick} />
  ));

  return <div className="islandList">{islandCards}</div>;
}

export default IslandList;
