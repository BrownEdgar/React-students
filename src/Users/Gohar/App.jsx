import { useState, useEffect } from "react"
import classNames from "classnames"
import axios from "./axios";
import Users from "./Component/Users/Users";
import "./App.scss"
import Todos from "./Component/Todos/Todos";
import Posts from "./Component/Posts/Posts";
const arr = ['users', 'posts', 'todos']

export default function App() {
	const [currenIndex, setCurrenIndex] = useState(null);
	const [data, setData] = useState([])

	useEffect(() => {
		if (currenIndex !== null) {
			const target = arr[currenIndex];
			axios(`${target}`, {
				params: {
					_limit: 10
				}
			})
				.then(res => setData(res.data))
				.catch(err => console.log(err))
		}
	}, [currenIndex])


	const renderData = () => {
		switch (currenIndex) {
			case 0:
				return <Users users={data} />
			case 1:
				return <Posts posts={data} />
			case 2:
				return <Todos todos={data} />
			default: return [];
		}
	}

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
				{renderData()}
			</div>
		</div>
	)
}
