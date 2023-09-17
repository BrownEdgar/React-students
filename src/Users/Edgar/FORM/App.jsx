import { useState } from 'react'
import './App.scss'

export default function App() {
  const [users, setUsers] = useState([]);
  const [errors, setErrors] = useState({
    username: '',
    password: ''
  })

  const handleSubmit = (e) => {

    e.preventDefault();
    const { password } = e.target;
    const hasUpperCase = /[A-Z]/.test(password.value);
    const hasNumber = /\d/.test(password.value);
    let errorMessage = '';
    if (!hasUpperCase) {
      errorMessage = 'must contain upperCase!'
    }
    if (!hasNumber) {
      errorMessage = errorMessage || "must by contain a Number!"
    }
    setErrors({ ...errors, password: errorMessage })
  }
  return (
    <div className='container'>
      <form onSubmit={handleSubmit}>
        <input type="text" placeholder='username' />
        <input type="password" placeholder='enter passowrd' id='password' />
        <p className="error">{errors.password ? errors.password : ''}</p>
        <input type="submit" value="add" />
      </form>
    </div>
  )
}
