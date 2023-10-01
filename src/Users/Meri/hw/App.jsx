import React, { useEffect, useState } from 'react'

export default function App() {
  const [data, setData] = useState({})
  const [miBan, setMiBan] = useState()

  useEffect(() => {
    fetch(`https://jsonplaceholder.typicode.com/${miBan}`)
    .then(res => res.json())
    .then(data => setData(data))
  }, [])

  const handleChange = (e) => {
    const message = e.target.value
    setMiBan(message)
  }

  return (
    <div>
      <form>
        <select name="miBan" id="miBan" onChange={handleChange}>
          <option value="posts">posts</option>
          <option value="comments">comments</option>
          <option value="albums">albums</option>
          <option value="photos">photos</option>
          <option value="todos">todos</option>
          <option value="users">users</option>
        </select>
      </form>
      <h1>
        {
          data?.title
        }
      </h1>
    </div>
  )
}
