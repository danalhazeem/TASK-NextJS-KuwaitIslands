"use client";

import Image from "next/image";
import { useState } from "react";

function IslandForm({ island }) {
  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");

  function fullName() {
    setName(event.target.value);
  }
  function phoneNumber() {
    setPhone(event.target.value);
  }

  function book() {
    event.preventDefault();
    if (
      window.confirm(
        `Are you sure you want to book ${island.name} ${name} ${phone}`
      )
    ) {
      ("you confirmed the booking");
      event.target.reset();
    } else {
      ("you canceled");
    }
  }
  return (
    <div className="form">
      <h2>{island.name}</h2>
      <Image src={island.img} alt={island.name} width="300" height="300" />
      <h3>Book a trip to {island.name} island</h3>
      <form onSubmit={() => book()}>
        <input onChange={fullName} placeholder="Type Full Name" type="text" />
        <input
          onChange={phoneNumber}
          placeholder="Type Phone Number"
          type="tel"
        />
        <button type="submit" className="book">
          Book for today!
        </button>
      </form>
    </div>
  );
}

export default IslandForm;
