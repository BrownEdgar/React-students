import React from 'react'

export default function Products({ filteredProduct }) {
  console.log("produc component render...")
  return (
    <ul>
      {
        filteredProduct().map(elem => {
          return (
            <li key={elem.id}>
              <span>id {elem.userId}</span>
              <span>{elem.title}</span>
            </li>
          )
        })
      }
    </ul>
  )
}
