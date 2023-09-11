import React from 'react'

export default function Todos({ todos, changeCount }) {

  return (
    <div>

      <div >
        <h1>{todos.title}</h1>
        <button onClick={changeCount}>add count</button>
      </div>

    </div>

  )
}
