<<<<<<< HEAD
import { useDispatch, useSelector } from "react-redux";
import { deleteUsersById } from "./features/usersSlice";

export default function App() {
  const users = useSelector((state) => state.users);
  const dispatch = useDispatch();
  return (
    <div>
      <h1>hello redux</h1>
      <pre>{JSON.stringify(users, null, 1)}</pre>
      <button onClick={() => dispatch(deleteUsersById({ id: 2 }))}>
        delete user N 2
      </button>
      <Child />
=======
import { useSelector } from 'react-redux'

import "./App.css"
import ShopingCart from './components/ShopingCart/ShopingCart'

export default function App() {
  const count = useSelector((state) => state.products.count)
  return (
    <div className='App'>
      <h1>
        Shoping Cart <br />
        <span><strong>{count}</strong> items in you cart</span>
      </h1>
      <ShopingCart />
>>>>>>> 8c636b5470c73a663a787351e333b242ed533d7a
    </div>
  );
}
