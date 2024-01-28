import React, { useState } from "react";

const UseState = () => {
  const [name, setName] = useState("ram");
  const changeName = () => {
    let val = name;
    val === "ram" ? setName("krishna") : setName("ram");
  };
  return (
    <>
      <h1>welcome {name}</h1>
      <button onClick={changeName}>click me</button>
    </>
  );
};

export default UseState;
