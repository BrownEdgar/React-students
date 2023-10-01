import React, {useReducer} from 'react'
import reducer, { initialState } from './reducer'
import { SHUFFLE } from './actionTabs'
import './App.scss'

export default function App() {
  const [state, dispatch] = useReducer(reducer, initialState)

  const handleSubmit = (values, {resetForm}) => {

  }

  return (
    <div>
      <h1>Use Reducer</h1>
      <button onClick={() => dispatch({type: SHUFFLE})}>
        Shuffle
      </button>
      <pre className='json'>
        {
          JSON.stringify(state, null, 1)
        }
      </pre>
    </div>
  )
}           
