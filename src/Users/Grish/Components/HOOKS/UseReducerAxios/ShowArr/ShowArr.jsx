import { SHUFFLE_ARRAY } from '../actionTypes';


import "./ShowArr.scss"
export default function ShowArr({state,dispatch}) {
  return (
    <div>
        <button
        className="App-button"
        onClick={() =>
          dispatch({
            type: SHUFFLE_ARRAY,
          })
        }>
        Shuffle array
      </button>
      {state.arr.map((elem, index) => {
        return (
          <div key={index} className="App-show-arr">
            <p> {elem}</p>
          </div>
        );
      })}

    </div>
    )
}
