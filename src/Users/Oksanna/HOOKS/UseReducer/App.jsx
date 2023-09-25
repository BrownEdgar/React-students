import { useReducer } from "react"
import reducer,{initialState} from "./Reducer"

import './App.scss'


export default function App() {
  const [state, dispatch] = useReducer(reducer ,initialState)

  const handleClick = () =>{
    dispatch({type: "change-title", payload: {
      id:4,
      title: "new title for id 13"
    }  })
  }

  return (
    <div>
      <h1>Use reducer hook</h1>
      <button onClick={handleClick}>Delet use</button>
      <h1 className="json">
        {
          JSON.stringify(state,null,1)
        }
      </h1>
    </div>
  )
}