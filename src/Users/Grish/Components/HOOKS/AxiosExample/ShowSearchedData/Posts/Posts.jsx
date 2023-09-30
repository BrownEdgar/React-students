

export default function Posts({posts}) {
  return (
    <div className="App-item">
        <p>User Id: {posts.userId}</p>
        <p>ID: {posts.id}</p>
        <p>Title: {posts.title}</p>
        <p>Body: {posts.body}</p>
    </div>
  )
}
