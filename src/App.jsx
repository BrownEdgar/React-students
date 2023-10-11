import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux'
import { deletePost, getAsyncUsers } from './features/userSlice';
import './App.css'


export default function App() {
  const users = useSelector((state) => state.users)
  console.log(users);
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getAsyncUsers('https://jsonplaceholder.typicode.com/posts'))
  }, [])

  return (
    <>
    <button onClick={handleClick}>Delete</button>
    <div className='flex'>

      {
        users.data.map(user => {
          return (
            <div key={user.id} >
              <h2>{user.title}</h2>
              <p>{user.body}</p>
            </div>
          )
        })
      }
    </div>
    </>
  )
}
