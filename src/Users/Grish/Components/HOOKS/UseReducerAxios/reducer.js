import { ADD_COUNT, ADD_TEXT, DEL_POST, POSTS, SHUFFLE_ARRAY } from "./actionTypes";

export const initialState ={
        actions: 0,
        developers: [],
        posts: [],
        arr: [154, 42, 1, 87, 695, 36, 2, 10, 39, 9]
      }




export  function reducer(state=initialState,action){
    switch (action.type) {
        case POSTS: return  {...state,posts:action.payload.post}
        case ADD_TEXT:return {...state, developers:[...state.developers, action.payload.value]}
        case SHUFFLE_ARRAY: return {...state, arr:shuffleArray(state.arr)}
        case DEL_POST : return delPost(state,action.payload.id)
        case ADD_COUNT : return {...state,actions:state.actions+1}
        default: return state
    }
}


const shuffleArray=(state)=>{
    const shuffledArray = [...state];
    for (let i = shuffledArray.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i+1));
        console.log(j);
        [shuffledArray[i], shuffledArray[j]] = [shuffledArray[j], shuffledArray[i]];
    }
    return shuffledArray;
  };


  const delPost = (state,id) => {
    const updatePost=state.posts.filter((elem) => elem.id !== id)
      return { ...state, posts: updatePost};  
  };