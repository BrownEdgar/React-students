import React, { useState } from 'react'
import A from './A';
export const MyContext = React.createContext('')

export default function App() {
	const [word, setWord] = useState("amazing")
	const capitalize = () => {  
		const result = word.replaceAll(/\w/g,(key,index) =>{
			if(index === 0 || index === 3){
				return key.toUpperCase()
			}
			return key
		})
		setWord(result)

		
	}
	return (
		<div>
			<h1>App Cpmponent</h1>
			<MyContext.Provider value={{
				word,
				capitalize
			}}>
				<A />
			</MyContext.Provider>
		</div>
	)
}
