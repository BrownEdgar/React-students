import { useState, useEffect } from "react";
import classNames from "classnames";
import axios from "axios";
import "./Axios.scss";

const arr = ["users", "posts", "todos"];

async function fetchData(target) {
  try {
    const res = await axios(`https://jsonplaceholder.typicode.com/${target}`, {
      params: {
        _limit: 10,
      },
    });

    return res.data;
  } catch (e) {
    throw e;
  }
}

function Users() {
  const [users, setUsers] = useState([]);
  useEffect(() => {
    (async () => {
      try {
        const data = await fetchData("users");
        setUsers(data);
      } catch (error) {
        console.error(error);
      }
    })();
  }, []);

  return (
    <div className="Users__content">
      {users.map((user) => {
        <div className="Users__item" key={user.id}>
          <h1>{user.name}</h1>
          <h2>{user.username}</h2>
          <p>{user.email}</p>
          <p>{user.phone}</p>
        </div>;
      })}
    </div>
  );
}

function Posts() {
  const [posts, setPosts] = useState([]);
  useEffect(() => {
    (async () => {
      try {
        const data = await fetchData("posts");
        setPosts(data);
      } catch (error) {
        console.error(error);
      }
    })();
  }, []);

  return posts.map((post) => {});
}

function Todos() {
  const [todos, setTodos] = useState([]);

  useEffect(() => {
    (async () => {
      try {
        const data = await fetchData("todos");
        setTodos(data);
      } catch (error) {
        console.error(error);
      }
    })();
  }, []);

  console.table(todos);
}

export default function Axios() {
  const [currentIndex, setCurrenIndex] = useState(null);

  return (
    <div className="Axios">
      <h1>Axios Example</h1>
      <div className="Axios-buttons">
        {arr.map((elem, index) => {
          return (
            <button
              key={elem}
              className={classNames("btn", {
                active: currentIndex === index,
              })}
              onClick={() =>
                setCurrenIndex(index === currentIndex ? null : index)
              }>
              {elem}
            </button>
          );
        })}
      </div>
      <div className="Axios-content">
        {currentIndex === 0 && <Users />}
        {currentIndex === 1 && <Posts />}
        {currentIndex === 2 && <Todos />}
      </div>
    </div>
  );
}
