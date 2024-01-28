import React, { useState } from "react";

const Array = () => {
  const data = [
    { id: 1, name: "ram", sirname: "shiralkar" },
    { id: 2, name: "krishna", sirname: "shiralkar" },
    { id: 3, name: "sam", sirname: "bahadur" },
    { id: 4, name: "arjun", sirname: "shiralkar" },
  ];
  const [myData, setMyData] = useState(data);
  const allClear = () => {
    setMyData([]);
  };
  const clearArray = (id) => {
    const myNewArray = myData.filter((curElem) => {
      return curElem.id !== id;
    });
    setMyData(myNewArray);
  };
  return (
    <>
      {myData.map((cur) => (
        <div key={cur.name}>
          <h3>id:{cur.id}</h3>
          <h1>name:{cur.name} </h1>
          <h2>Sirname:{cur.sirname}</h2>
          <button onClick={() => clearArray(cur.id)}>clear</button>
        </div>
      ))}
      <button onClick={allClear}>clear</button>
    </>
  );
};

export default Array;
