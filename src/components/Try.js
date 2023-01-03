import React, { useState, useEffect } from "react";

const Try = () => {
  let [count, setcount] = useState(0);
  const increasecount = () => {
    setcount(count + 1);
  };
  useEffect(
    (count) => {
      if (count !== 0) {
        console.log("Janice is my angel!");
      }
    },
    [count, setcount]
  );
  return (
    <div>
      <h1>{count}</h1>
      <button id="hello" onClick={increasecount}>
        Add 1
      </button>
    </div>
  );
};

export default Try;
