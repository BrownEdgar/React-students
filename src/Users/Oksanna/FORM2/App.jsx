import { useState } from 'react'
import './App.scss'

export default function App() {
    const [users, setUsers] = useState([])
    const [policy, setPolicy] = useState(false)

    const handleChange = (e) => {
        setPolicy(e.target.checked);
    }
    return (
        <div className='container'>
            <form>
                <input type="text" placeholder='enter name' />
                <input type="checkbox" onChange={handleChange} /> Privacy polisy
                <button type='submit' disabled={!policy}>Add</button>
            </form>
        </div>
    )
}