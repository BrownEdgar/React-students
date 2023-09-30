

export default function Comments({comments}) {
  return (
    <div className="App-item">
        <p>Post Id: {comments.postId}</p>
        <p>ID: {comments.id}</p>
        <p>Name: {comments.name}</p>
        <p>Email: {comments.email}</p>
        <p>body: {comments.body}</p>
    </div>
  )
}
