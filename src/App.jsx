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
    </div>
  );
}
