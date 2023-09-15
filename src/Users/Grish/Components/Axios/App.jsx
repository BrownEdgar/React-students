import { useState, useEffect } from "react";
import classNames from "classnames";
import axios from "axios";
import Users from "./Users/Users";
import Posts from "./Posts/Posts";
import Todos from "./Todos/Todos";
import "./Axios.scss";

const arr = ["users", "posts", "todos"];

export default function App() {
  const [currenIndex, setCurrenIndex] = useState(2);
  const [data, setData] = useState([]);

  const [count, setCount] = useState(1)
  console.log(data)
  const changeCount = () => {
    setCount(count + 1)
  }

  useEffect(() => {
    if (currenIndex !== null) {
      const target = arr[currenIndex];
      axios(`https://jsonplaceholder.typicode.com/${target}/${count}`,)
        .then((res) => setData(res.data))
        .catch((err) => console.log(err));
    }
  }, [currenIndex, count]);

  const renderData = () => {
    switch (currenIndex) {
      case 0:
        return <Users users={data} />;
      case 1:
        return <Posts posts={data} />;
      case 2:
        return <Todos todos={data} onClick={changeCount} />;
      default:
        return [];
    }
  };

  return (
    <div className="App">
      <h1>Axios example</h1>
      <div className="App-buttons">
        {arr.map((elem, index) => {
          return (
            <button
              key={elem}
              className={classNames("btn", {
                active: currenIndex === index,
              })}
              onClick={() => setCurrenIndex(index)}>
              {elem}
            </button>
          );
        })}
      </div>
      <div className="App-content">
        {renderData()}
      </div>
    </div>
  );
}
