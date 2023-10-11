import { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { getAsyncPost } from "../../features/postsSlice";


export default function Posts() {
  const posts = useSelector((state) => state.post);
  const dispach = useDispatch();

  useEffect(() => {
    dispach(getAsyncPost(`https://jsonplaceholder.typicode.com/posts`))
  }, []);

  return(

      <div>
        {
            JSON.stringify(posts, null, 1)
        }
    </div>
    )
}
