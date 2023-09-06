import React, { useState } from 'react'
import A from './A';
export const MyContext = React.createContext('')

export default function App() {
	const [word, setWord] = useState("amazing")
	const capitalize = () => {  
		
	}
	return (
		<div>
			<h1>App Cpmponent</h1>
			<MyContext.Provider value={word}>
				<A />
			</MyContext.Provider>
		</div>
	)
}
