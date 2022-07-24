import React, { useState } from "react";

export default function RandomInteger() {
  const [numberA, setNumberA] = useState(1);
  const [numberB, setNumberB] = useState(25);
  const [randomValue, setRandomValue] = useState();
  const [isBtnClicked, setIsBtnClicked] = useState(false);
  const handleNumberAChange = (e) => {
    setNumberA(e.target.value);
  };
  const handleNumberBChange = (e) => {
    setNumberB(e.target.value);
  };
  const randomReturn = () => {
    setRandomValue(
      Math.floor(Math.random() * (numberB - numberA + 1) + numberA)
    );
  };
  return (
    <>
      <h2>Random integer between 2 numbers</h2>
      <p>Number 1: </p>
      <input
        type="text"
        value={numberA}
        onChange={handleNumberAChange}
        style={{ width: "25px", textAlign: "center" }}
      />
      <br />
      <p>Number 2: </p>
      <input
        type="text"
        value={numberB}
        onChange={handleNumberBChange}
        style={{ width: "25px", textAlign: "center" }}
      />
      <br />
      <button
        className="roleBtn"
        onClick={() => {
          setIsBtnClicked(true);
          randomReturn();
        }}
      >
        Role!
      </button>
      {isBtnClicked && "Result: " + randomValue}
    </>
  );
}
