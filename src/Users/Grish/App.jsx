import { useState } from "react";
import "./App.css";

export default function App() {
  const [CountOne, setCountOne] = useState(0);
  const [CountTwo, setCountTwo] = useState(0);
  const [CountThree, setCountThree] = useState(0);

  const changeCountOne = () => {
    setCountOne(CountOne + 1);
  };

  const changeCountTwo = () => {
    setCountTwo(CountTwo + 1);
  };

  const changeCountThree = () => {
    setCountThree(CountThree + 1);
  };

  return (
    <div className="App">
      <h1>Hello React</h1>
      <div className="App__count">
        <p className="count count_one ">{CountOne}</p>
        <p className="count count_two ">{CountTwo}</p>
        <p className="count count_three ">{CountThree}</p>
      </div>


      <div className="App__button">
        <button className="btn button__changeOne" onClick={changeCountOne}>One</button>
        <button className="btn button__changeTwo" onClick={changeCountTwo}>Two</button>
        <button className="btn button__changeThree" onClick={changeCountThree}>Three</button>
      </div>
    </div>
  );
}


