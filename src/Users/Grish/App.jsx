import { useState } from "react";
import "./App.css";

export default function App() {
  const [count, setCount] = useState(
		{
			one:0,
			two:0,
			three:0
		}
	)

  const changeCount = (option) => {
		setCount({ ...count, [option]: count[option] + 1})
  }


  return (
    <div className="App">
      <h1>Hello React</h1>
      <div className="App__count">
        <p className="count count_one ">{count.one}</p>
        <p className="count count_two ">{count.two}</p>
        <p className="count count_three ">{count.three}</p>
      </div>


      <div className="App__button">
		{
			Object.keys(count).map(key => {
				return <button 
				key={key}
				className="btn button__changeOne" 
					onClick={() => changeCount(key)}
				>
					{key}
				</button>
			})
		}
      </div>
    </div>
  );
}
