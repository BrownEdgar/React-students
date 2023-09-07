import React, { useState } from "react";
import A from "./A";

import "./UseContext.css";

export const MyContext=React.createContext('')

export default function UseContext() {
  const [userData, setUserData] = useState([
    " Sona ",
    " Saqo ",
    " Mane ",
    " Nane",
    " vazgen",
    " Aram",
    " hayk",
    " levon",
  ]);

  const sortData = () => {
    const result = userData.slice().sort((a,b) => a.localeCompare(b));
    setUserData(result);
  };
  return (
    <div>
      UseContext
      <MyContext.Provider
        value={{
          userData,
          sortData,
        }}>
        <A />
      </MyContext.Provider>
    </div>
  );
}
