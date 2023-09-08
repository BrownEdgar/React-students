import {useContext} from 'react'
import { MyContext } from './App'

export default function C() {
	const patet = useContext(MyContext)
	
	return (
		<div>
			<h3>Component C</h3>
			<p>{patet.people}</p>
			<button onClick={patet.sortPeople}>Sort</button>
		</div>
	)
}
