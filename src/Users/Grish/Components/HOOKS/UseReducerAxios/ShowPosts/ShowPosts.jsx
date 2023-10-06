import { AiFillCloseCircle } from "react-icons/ai";
import { DEL_POST, POSTS } from "../actionTypes";
import { postsUrl } from "./axiosURL";
import { useEffect } from "react";
import axios from "axios";


import "./ShowPosts.scss"

export default function ShowPosts({state,dispatch}) {

    useEffect(() => {
        axios(postsUrl, {
          params: {
            _limit: 10,
          },
        })
          .then((usePost) => {
            dispatch({
              type: POSTS,
              payload: {
                post: usePost.data,
              },
            });
          })
          .catch((error) => {
            console.error("Error fetching posts:", error);
          });
      },[]);
    
    
  return (
    <div className="App-show-item">
    {state.posts.map((elem) => {
      return (
        <div className="App-post" key={elem.id}>
          <button
            className="btn-close"
            onClick={() =>
              dispatch({
                type: DEL_POST,
                payload: {
                  id: elem.id,
                },
              })
            }>
            <AiFillCloseCircle />
          </button>
          <h1>Id: {elem.id}</h1>
          <p>
            <i>User Id: </i>
            {elem.userId}
          </p>
          <p>
            <i>Title:</i> {elem.title}
          </p>
          <p>
            <i>Body:</i> {elem.body}
          </p>
        </div>
      );
    })}
  </div>
  )
}
