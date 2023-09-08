import React, { useState } from 'react'
import A from './A';
export const MyContext = React.createContext('')

export default function App() {
	const [person, setPerson] = useState([
		'Boddy', 
		'Jesse', 
		'Barbara', 
		'Melinda', 
		'Fred', 
		'Pamela', 
		'Jacueline', 
		'Jose', 
		'Rosario',
		'Ronaldo'
	])
	const sort = () => {  
		const result = person.slice().sort((a,b) => {
			if(a < b){
				return -1
			}
		})
		console.log(result);
		setPerson(result)
	}
	return (
		<div>
			<h1>App Cpmponent</h1>
			<MyContext.Provider value={{
				person,
				sort
			}}>
				<A />
			</MyContext.Provider>
		</div>
	)
}
