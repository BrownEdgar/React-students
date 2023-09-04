import { useState, useEffect } from "react"
import classNames from "classnames"
import axios from "axios";
import "./App.scss"
const arr = ['users', 'posts', 'todos']

export default function App() {
	const [currenIndex, setCurrenIndex] = useState(null);
	const [data, setData] = useState([])

	useEffect(() => {
		if (currenIndex !== null) {
			const target = arr[currenIndex];
			axios(`https://jsonplaceholder.typicode.com/${target}`, {
				params: {
					_limit: 10
				}
			})
				.then(res => setData(res.data))
				.catch(err => console.log(err))
		}
	}, [currenIndex])


	return (
		<div className="App">
			<h1>Axios example</h1>
			<div className="App-buttons">
				{
					arr.map((elem, index) => {
						return <button
							key={elem}
							className={classNames('btn', {
								active: currenIndex === index,
							})}
							onClick={() => setCurrenIndex(index)}
						>
							{elem}
						</button>
					})
				}
			</div>
			<div className="App-content">
				<pre>
					{JSON.stringify(data, null, 1)}
				</pre>
			</div>
		</div>
	)
}
