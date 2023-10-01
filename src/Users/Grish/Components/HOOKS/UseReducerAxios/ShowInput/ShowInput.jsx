import { useState } from "react";
import { ADD_TEXT } from "../actionTypes";

import "./ShowInput.scss"

export default function ShowInput({ dispatch, state }) {
  const [inputValue, setInputValue] = useState("");
  const inputChange = (e) => {
    setInputValue(e.target.value);
  };

  const newValueInput = () => {
    inputValue.trim() !== ""
      ? dispatch({
          type: ADD_TEXT,
          payload: {
            value: inputValue,
          },
        })
      : "";
    setInputValue("");
  };

  return (
    <div>
      <label htmlFor="text"> Add text: </label>
      <input
        type="text"
        className="App-input"
        id="text"
        value={inputValue}
        onChange={inputChange}
      />
      <input type="submit" className="App-button" onClick={newValueInput} />
      {state.developers.map((elem, index) => (
        <div key={index} className="showDev">
          <ul>
            <li>{elem}</li>
          </ul>
        </div>
      ))}
    </div>
  );
}
