import { ADD_COUNT } from "../actionTypes"

import "./Count.scss"

export default function Count({state,dispatch}) {
  return (
        <div className="App-container">
        <p
          onClick={() =>
            dispatch({
              type: ADD_COUNT
            })
          }>
          Count: {state.actions}
        </p>
        </div>
  )
}
