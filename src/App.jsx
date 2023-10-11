import { useEffect } from 'react';
import { useDispatch, useSelector } from "react-redux";
import { getAsyncUsers } from './features/usersSlice';
import './App.css'
import MyLoader from './Loaders/UserLaders';

export default function App() {
  const users = useSelector((state) => state.users);
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getAsyncUsers('https://jsonplaceholder.typicode.com/users'))
  }, [])



  return (
    <div className='flex'>
      {
        users.isPending ? (
          <>
            <div className='loader'>
              <MyLoader />
            </div>
            <div className='loader'>
              <MyLoader />
            </div>
            <div className='loader'>
              <MyLoader />
            </div>
          </>
        )
          : (
            <>
              {
                users.data.map(user => {
                  return (
                    <div key={user.id}>
                      <h2>{user.name}</h2>
                      <p>user.email</p>
                    </div>
                  )
                })
              }
            </>
          )
      }
    </div>

  );
}
