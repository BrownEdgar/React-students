import { useReducer } from "react";
import reducer, { initialState } from "./reducer";
import {ADD_KEY,ADD_NEW_USER,DELETE_ALL_USERS,LIMITED_USERS,DELETE_BODY} from "./actionTypes"
import "./App.scss"

export default function App() {
  const [state, dispatch] = useReducer(reducer, initialState);
  return (
    <div className="App">
      <button
        onClick={() =>
          dispatch({
            type: ADD_KEY,
          })
        }>
        Add Key
      </button>
      <button
        onClick={() =>
          dispatch({
            type: LIMITED_USERS,
            payload: { limit: 20 },
          })
        }>
        Limited users
      </button>
      <button
        onClick={() =>
          dispatch({
            type: DELETE_BODY,
          })
        }>
        Delete body
      </button>
      <button
        onClick={() =>
          dispatch({
            type: DELETE_ALL_USERS,
          })
        }>
        Delete all users
      </button>
      <button
        onClick={() =>
          dispatch({
            type: ADD_NEW_USER,
            payload: {
              userId: 10,
              id:12,
              title: "adasda",
              body: "asdas",
            },
          })
        }>
        Add new user
      </button>
      <h1 className="json">{JSON.stringify(state, null, 1)}</h1>
    </div>
  );
}
