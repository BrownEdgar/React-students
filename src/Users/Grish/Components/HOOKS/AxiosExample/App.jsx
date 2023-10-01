import { useEffect, useState } from "react";
import axios from "axios";
import "./App.scss";
import Comments from"./ShowSearchedData/Comments/Comments"
import Posts from"./ShowSearchedData/Posts/Posts"
import Albums from"./ShowSearchedData/Albums/Albums"
import Photos from"./ShowSearchedData/Photos/Photos"
import Todos from"./ShowSearchedData/Todos/Todos"
import Users from"./ShowSearchedData/Users/Users"


export default function App() {
  const [searchId, setSearchId] = useState();
  const [queryData, setQueryData] = useState();
  const [post, setPost] = useState({});

  useEffect(() => {
    axios(`https://jsonplaceholder.typicode.com/${queryData}/${searchId}`).then(
      (posts) =>
        setPost(posts.data).catch((error) => {
          console.error("Error fetching data:", error);
        })
    );
  }, [queryData,searchId]);



  return (
    <div className="App">
      <select value={queryData} onChange={(e) => setQueryData(e.target.value)}>
        <option ></option>
        <option value="posts">Posts</option>
        <option value="comments">Comments</option>
        <option value="albums">Albums</option>
        <option value="photos">Photos</option>
        <option value="todos">Todos</option>
        <option value="users">Users</option>
      </select>
      <input
        type="text"
        value={searchId}
        className="App-input"
        onChange={(e) => setSearchId(e.target.value)}
      />

      {queryData === "comments" && <Comments comments={post} />}
      {queryData === "posts" && <Posts posts={post} />}
      {queryData === "photos" && <Photos photos={post} />}
      {queryData === "todos" && <Todos todos={post} />}
      {queryData === "users" && <Users users={post} />}
      {queryData === "albums" && <Albums albums={post} />}


    </div>
  );
}
