import React, { useState } from 'react'
import './App.scss'

export default function App() {
    const [users, setUsers] = useState([])

    const handleSubmit = (e) => {
        e.preventDefaul()
        const {email, username, password} = e.target
        const user = {
            id: Date.now() * Math.random() * 1e5,
            email: email.value,
            username: username.value,
            password: password.value
        }
        const emailIsExist = users.some(e => e.email == email.value)
        emailIsExist
        ? alert ('this email alredy used')
        : setUsers([...users, user])
        console.log(users);
    }

    return (
        <div className='App'>
            <form onSubmit={handleSubmit}>
                <label htmlFor="email">Email</label>
                <input type="email" id='email' required/>

                <label htmlFor="userName">Username</label>
                <input type="text" id='userName' required/>

                <label htmlFor="password">Password</label>
                <input type="password" id='password' required/>

                <input type="submit" value={'Save'} />
            </form>
        </div>
    )
}
