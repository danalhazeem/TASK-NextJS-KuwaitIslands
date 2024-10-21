import Image from "next/image";
import React from "react";
import IslandsContainer from "./IslandsContainer";

function Island({ island, handleClick }) {
  return (
    <div className="Island" onClick={() => handleClick(island1234)}>
      <h3>{island.name}</h3>
      {/* YOU HAVE TO CHANGE THE VISITORS COUNT */}

      <p>Visitors 0</p>
      <Image src={island.img} alt={island.name} width="300" height="300" />
    </div>
  );
}

export default Island;
