import { useState, useEffect } from 'react';


export default function App() {
  const [post, setPost] = useState({});
  const [postId, setPostId] = useState(1)
  useEffect(() => {
    fetch(`https://jsonplaceholder.typicode.com/posts/${postId}`)
      .then(res => res.json())
      .then(data => setPost(data))
  }, [postId])

  const nextPost = () => {
    setPostId(postId + 1)
  }

  return (
    <div>
      <h1>{post?.title}</h1>
      <button onClick={nextPost}>next</button>
    </div>
  )
}
