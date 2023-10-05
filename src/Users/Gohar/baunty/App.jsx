import { useEffect, useState } from 'react'
import './App.scss'

export default function App() { 
    const [post,setPost] = useState({})
    const [postid,setPostid] = useState(1)
    useEffect(() => {
       fetch(`https://jsonplaceholder.typicode.com/posts/${postid}`)
        .then(res => res.json())
        .then(data => setPost(data))
    
    }, [postid])
    

    const nextPost = () =>{
        setPostid(postid +1)
    }

    const Post = () =>{
        setPostid(postid -1)
    }
  return (
    <div>
       <h1> {post.title}</h1>
       <button onClick={nextPost}>next</button>
       <button onClick={Post}>prev</button>
    </div>
  )
}
