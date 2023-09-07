import React from 'react'

export default function Users({ users }) {
  return (
    <div>
      {
        users.map((user) => {
          return (
            <div key={user.id}>
              <h1>{user.name}</h1>
              <p>{user.email}</p>
              <p>{user.phone}</p>
              <p>{user.website}</p>
            </div>
          )
        })
      }
    </div>
  )
}

  