import { useEffect, useState } from "react";
import "./App.css";
import axios from "axios";
function App() {
  const [myData, setMyData] = useState([]);
  //using promices
  useEffect(() => {
    axios.get("https://jsonplaceholder.typicode.com/posts ").then((res) => {
      setMyData(res.data);
    });
  });

  return (
    <>
      <h1>Axios Learning--</h1>
      {myData.map((post) => {
        const { id, title, body } = post;
        return (
          <div key={id}>
            <h2>{title.slice(0, 15).toUpperCase()}</h2>
            <p>{body}</p>
          </div>
        );
      })}
    </>
  );
}

export default App;
