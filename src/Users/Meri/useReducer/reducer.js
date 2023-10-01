import { SHUFFLE } from "./actionTabs"

export const initialState = {
  actions: 0,
  developers: [],
  posts: [],
  arr: [154, 42, 1, 87, 695, 36, 2, 10, 39, 9]
}

function reducer(state = initialState, action) {
  switch (action.type) {
    case SHUFFLE: return shuffle(state) 

    default: return state
  }
}

const shuffle = (state) => {
  return state.arr.sort(() => 0.5 - Math.random())
}

export default reducer

