import {useContext} from 'react'
import { MyContext } from './App'

export default function C() {
	const patet = useContext(MyContext)
	
	return (
		<div>
			<h3>Component C</h3>
			<p>{patet.person}</p>
			<button onClick={patet.sort}>Sort</button>
		</div>
	)
}
