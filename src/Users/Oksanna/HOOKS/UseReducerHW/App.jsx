import { useReducer } from "react";
import reducer, { initialState } from "./reducer";
import "./App.scss"

export default function App() {
  const [state, dispatch] = useReducer(reducer, initialState);
  return (
    <div className="App">
        
        <button
        onClick={() =>
          dispatch({
            type: "Delete-body",
          })
        }>
        Delete body
      </button>

      
      <button
        onClick={() =>
          dispatch({
            type: "Add-Key",
          })
        }>
        Add Key
      </button>
     
      
      <button
        onClick={() =>
          dispatch({
            type: "Delete-all-users",
          })
        }>
        Delete all users
      </button>
     
      <h1 className="json">{JSON.stringify(state, null, 1)}</h1>
    </div>
  );
}
