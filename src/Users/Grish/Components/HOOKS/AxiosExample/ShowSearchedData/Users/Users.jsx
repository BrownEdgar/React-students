

export default function Users({users}) {
  return (
    <div className="App-item">

    <p>ID: {users.id}</p>
    <p>User Name: {users.username}</p>
    <p>Name: {users.name}</p>
    <p>Email: {users.email}</p>
  </div>
  )
}
