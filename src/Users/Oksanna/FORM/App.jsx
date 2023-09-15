import  { useState } from 'react'

import './App.scss'






export default function App() {
    const [users, setUsers] = useState([])

    const handleSubmit = (e) => {
        e.preventDefault()
    
    const { email, password } = e.target
    const user = {
        id: Date.now() * Math.random() * 1e5,
        email: email.value.toLowerCase(),
        password: password.value
    }
    const isEmailExist = users.some(elem => elem.email === email.value)
    isEmailExist
    ? alert("this email already used")
    : setUsers([...users, user]);
    e.target.reset()
}


    return (
        <div className='App'>
            <form autoComplete='off' className='form' onSubmit={handleSubmit}>
                <div className='form-group'>
                    <label htmlFor="email">Email</label>
                    <input type="email" id='email' required />
                </div>

                <div className='form-group'>
                    <label htmlFor="password">Password</label>
                    <input type="password" id='password' required />
                </div>

                <div className='form-group'>
                    <input type="submit" value={'register'} />
                </div>
            </form>
        </div>
    )
}
