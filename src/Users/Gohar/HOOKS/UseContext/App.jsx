import React, { useState } from 'react'
import A from './A'
export const MyContext = React.createContext('')


export default function App() {

  const [names, setNames] = useState([
    "Ani ",
    "Mariam ",
    "Gayane ",
    "Anahit ",
    "Lusine ",
    "Meri ",
    "Gohar ",
    "Oksana ",
    "Tatev ",
    "Nare "

  ])
  const sortNames = () => {
    const sortedNames = [...names];
    sortedNames.sort((a, b) => a.localeCompare(b));
    setNames(sortedNames);



  }
  return (
    <div>
      <h1>Names</h1>
      <MyContext.Provider value={{
        names,
        sortNames,
      }}>
        <A />
      </MyContext.Provider>
    </div>

  )
}
