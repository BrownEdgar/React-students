// import {useState} from 'react'
// import './App.scss'


// // form-i orinak
// export default function App() {
//   const [users, setUsers] = useState([])
//   const [policy,setPolicy] = useState(false)
//   const handleChange = (e) => {
//     setPrivacy(e.target.checked)
    
//   }
//   return (
//     <div className='contanier'>
//         <form>
//           <input type="text" placeholder='enter name' />
//           <input type="checkbox" onChange={handleChange}/> Privacy polisy
//           <button type='submit' disabled={!policy}>Add</button>

//         </form>
//     </div>
//   )
// }

import React, { useState } from 'react'
import './App.scss'

export default function App() {
  const [users,setUsers] = useState([]);
  const [errors,setErrors] = useState({
    username: '',
    password: '',
  })

  const handleSubmit = (e) =>{
    e.preventDefault();
    const {password} = e.target;
    const hasUpperCase = /[A-Z]/.test(password.value)
    const hasNumber = /\d/.test(password.value)
    let errorMessage = "";
    if(!hasUpperCase){
      errorMessage ='must contain upperCase'
    }
    if(!hasNumber){
      errorMessage = errorMessage || "must by contain a Number!"
    }
    
    
    setErrors({...errors, password: errorMessage})
  }
  return (
    <div className='contanier'>
        <form onSubmit={handleSubmit}>
          <input type="text" placeholder='Username' />
          <input type="password" id='password' placeholder='Enter password' />
         <p className='error'>{errors.password ? errors.password : ""}</p>
         <input type="submit" value='add'/>

      </form>
    </div>
    
  )
}
