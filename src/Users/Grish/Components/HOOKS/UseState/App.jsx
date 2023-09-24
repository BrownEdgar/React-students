import { useState } from "react";
import Modal from "./Modal/Modal";

import "./App.css";

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
    },
  ]);

  const [deletingId, setDeletingId] = useState(null);

  const delById = () => {
    let result = data.filter((elem) => elem.id !== deletingId);
    setData(result);
  };
  
  const closeModal = () => {
    setDeletingId(null);
  };

  const addPrice = () => {
    let res = data.map((elem) => {
      return elem.name === "🍔" ? elem : { ...elem, price: elem.price + 4 };
    });
    setData(res);
  };

  const getTotal = () => {
    const total = data.reduce((acc, cv) => {
      acc += cv.price * cv.amount;
      return acc;
    }, 0);
  };

  return (
    <div className="App">
      <button className="btn App__btnAddPrice" onClick={addPrice}>
        Add price 4$
      </button>
      <div className="App__items">
        {data.map((user) => {
          return (
            <div className="App__item" key={user.id}>
              <button
                className="btn App__item_btnDelete"
                onClick={() => setDeletingId(user.id)}>
                &#10006;
              </button>

              <h2 className="item App__item__name">{user.name}</h2>
              <div>
                <p className="item App__item__price">Price: {user.price}</p>
                <p className="item App__item__amount">Amount: {user.amount}</p>
              </div>
            </div>
          );
        })}
      </div>
      {deletingId !== null && (
        <Modal delById={delById} onClose={closeModal} />)}
    </div>
  );
}
