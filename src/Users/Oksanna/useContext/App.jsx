import React, { useState } from 'react'
import A from './A'
export const MyContext = React.createContext('')


export default function App() {

  const [people, setPeople] = useState([
    " Angelina ",
    " Abel ",
    " William ",
    " John ",
    " Tom ",
    " Michael ",
    " Daniel ",
    " Joseph ",
    " Ian ",
    " Paul "

  ])
  const sortPeople = () => {
    const sortPeople = [...people];
    sortPeople.sort((a, b) => a.localeCompare(b));
    setPeople(sortPeople);



  }
  return (
    <div>
      <h1>People</h1>
      <MyContext.Provider value={{
        people,
        sortPeople,
      }}>
        <A />
      </MyContext.Provider>
    </div>

  )
}
