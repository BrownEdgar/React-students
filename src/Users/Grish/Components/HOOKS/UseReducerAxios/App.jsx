import {  useReducer } from "react";
import { initialState, reducer } from "./reducer";
import ShowInput from "./ShowInput/ShowInput";
import Count from "./Count/Count";
import ShowArr from "./ShowArr/ShowArr";
import ShowPosts from "./ShowPosts/ShowPosts";

import "./App.scss";

export default function App() {
  const [state, dispatch] = useReducer(reducer, initialState);

  return (
    <div className="App-container">
      <Count dispatch={dispatch} state={state} />
      <ShowInput  dispatch={dispatch} state={state}/>
      <ShowArr dispatch={dispatch} state={state} />
      <ShowPosts dispatch={dispatch} state={state}/>
    </div>
  );    
}
