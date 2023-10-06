import React from 'react'

export default function Products({filterProduct}) {
  return (
    <div>
      <ul>
        {
          filterProduct().map(e => {
            return (
            <li key={e.id}>
              <span>{e.name}</span>
              <span>{e.price}</span>
            </li>
            )
          })
        }
      </ul>
    </div>
  )
}
