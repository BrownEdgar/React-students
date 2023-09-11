import { useState } from "react";

import "./App.css"
export default function App() {
  const [data, setData] = useState([
    {
      id: 1,
      name: "🍔",
      price: 30,
      amount: 10,
    },
    {
      id: 2,
      name: "🍨",
      price: 20,
      amount: 3,
    },
    {
      id: 3,
      name: "🍿",
      price: 10,
      amount: 5,
    },
    {
      id: 4,
      name: "🍵",
      price: 5,
      amount: 9,
    }
  ]);

  const delById = (id) => {
    let result = data.concat().filter((elem) => elem.id !== id);
    setData(result);
  };

  const addPrice = () => {
    let res = data.map((elem) => ({
      ...elem,
      price: elem.name !== "🍔" ? elem.price + 4 : elem.price,
    }));
    setData(res);
  };

  return (
    <div className="App">
      <button className="btn App__btnAddPrice" onClick={addPrice}>
        Add price 4$
      </button>
      {data.map((user) => {
        return (
          <div className="App__item" key={user.id}>
            <button
              className="btn App__item_btnDelete"
              onClick={() => delById(user.id)}>
              &#10006;
            </button>
            <h2 className="item App__item__name">Name: {user.name}</h2>
            <p className="item App__item__price">Price: {user.price}</p>
            <p className="item App__item__amount">Amount: {user.amount}</p>
          </div>
        );
      })}
    </div>
  );
}
