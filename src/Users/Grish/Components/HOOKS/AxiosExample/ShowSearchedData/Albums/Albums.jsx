  export default function Albums({albums}) {
  return (
    <div className="App-item">
      <p>User Id: {albums.userId}</p>
      <p>ID: {albums.id}</p>
      <p>Title: {albums.title}</p>
    </div>
  )
}
