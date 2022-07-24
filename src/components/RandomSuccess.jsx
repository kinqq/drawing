import React, { useState } from "react";

function RandomSuccess() {
  const [percent, setPercent] = useState(0);
  const [isBtnClicked, setIsBtnClicked] = useState(false);
  const [randomValue, setRandomValue] = useState();
  const handlePercentChange = (e) => {
    setPercent(e.target.value);
    setIsBtnClicked(false);
  };
  const randomReturn = (percent) => {
    setRandomValue(
      Math.floor(Math.random() * 99 + 1) <= percent ? "Success" : "Failure"
    );
  };
  return (
    <>
      <h2>Random text by percentage</h2>
      <input
        type="text"
        value={percent}
        onChange={handlePercentChange}
        style={{ width: "25px", textAlign: "center" }}
      />
      <input
        type="range"
        min="0"
        max="100"
        value={percent}
        onChange={handlePercentChange}
      />
      <button
        className="roleBtn"
        onClick={() => {
          setIsBtnClicked(true);
          randomReturn(percent);
        }}
      >
        Role!
      </button>
      <h4 className={randomValue}>{isBtnClicked && randomValue}</h4>
    </>
  );
}

export default RandomSuccess;
