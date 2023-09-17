import React, { useState } from 'react'
import './App.scss'

// export default function App() {
//   const [users, setUsers] = useState([])
//   const [policy, setPolicy] = useState(false)

//   const handleChange = (e) => {
//     setPolicy(e.target.checked)
//   }

//   return (
//     <div className='container'>
//         <form>
//             <input type="text" name="" id="" placeholder='enter name'/>
//             <input type="checkbox" onChange={handleChange}/> Privacy policy
//             <button type='submit' disabled={!policy}>Add</button>
//         </form>
//     </div>
//   )
// }

export default function App() {
  const [users, setUsers] = useState([])
  const [errors, setErrors] = useState({
    username: '',
    password: ''
  })

  const handleSubmit = (e) => {
    e.preventDefault()
    const {password} = e.target
    const hasUpperCase = /[A-Z]/.test(password.value)
    const hasNumber = /\d/.test(password.value)
    let errorMassage = ''
    if(!hasUpperCase){
      errorMassage = 'must contain upperCase'
    }
    if(!hasNumber){
      errorMassage = errorMassage || 'must contain number'
    }
    setErrors({...errors, password: errorMassage})
  }

  return (
    <div className='container'>
        <form onSubmit={handleSubmit}>
            <input type="text" name="" id="" placeholder='username'/>
            <input type="password" name="" id="password" placeholder='enter password'/>
            <p className="error">{errors.password ? errors.password : ''}</p>
            <input type="submit" name="" id="" value='add'/>
        </form>
    </div>
  )
}
