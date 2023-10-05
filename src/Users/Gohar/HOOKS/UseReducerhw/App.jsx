import { useReducer } from "react"
import reducer,{initialState} from "./Reducer"


export default function App() {
  const [state, dispatch] = useReducer(reducer ,initialState)

  const handleClick = () =>{
    dispatch({type: "change-title", payload: {
      id:4,
      title: "new title for id 4"
    }  })
  }

  return (
    <div>
      <h1>Use reducer hook</h1>
      <button onClick={handleClick}>Delet use</button>
      <button onClick={() => dispatch({type:"deluser", payload: {id:3}})}>Delete user number one</button>
      <h1 className="json">
        {
          JSON.stringify(state,null,1)
        }
      </h1>
    </div>
  )
}