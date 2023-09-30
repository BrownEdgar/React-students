

export default function Todos({todos}) {
  return (
    <div className="App-item">
        <p>User Id: {todos.userId}</p>
        <p>ID: {todos.id}</p>
        <p>Title: {todos.title}</p>
    </div>
  )
}
