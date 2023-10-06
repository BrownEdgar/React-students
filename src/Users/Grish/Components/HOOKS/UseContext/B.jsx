import { MyContext } from "./App"
import {useContext} from "react"


export default function B() {
  const data=useContext(MyContext)
    return (

    <div>B
        <h2>{data.userData}</h2>
        <button onClick={data.sortData}>Sort Data</button>
    </div>
  )
}
