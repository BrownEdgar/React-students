import {useState, useEffect} from 'react'
import axios from 'axios'
export default function App() {
	const [users, setUsers] = useState([])

	useEffect(() => {
	axios('https://jsonplaceholder.typicode.com/users', {
		params: {
			_limit: 2,
			_start: 2
		}
	})
		.then(res => setUsers(res.data))
	

	}, [])
	
	return (
		<div>
			<h1>axios</h1>
			{
				users.map(user => <h2 key={user.id}>{user.name}</h2>)
			}
		</div>
	)
}
