import React, { useState } from 'react'
import users from './users.json'
import {AiOutlineEyeInvisible, AiOutlineEye} from 'react-icons/ai'
import './App.scss'

export default function App() {
  const [data, setData] = useState(users)
  const [currentId, setCurrentId] = useState(null)

  // const delUser = (id) => {
  // const result = data.filter(e => e.id !== id)
  // setData(result)
  // }

  const sortByName = () => {
    const result = data.toSorted((a, b) => {
      if (a.first_name < b.first_name) {
        return -1
      }
      return 1
    })
    setData(result)
  }

  const genderCount = () => {
    const femaleCount = data.filter((e) => e.gender === 'Female').length;
    const maleCount = data.filter((e) => e.gender === 'Male').length;
    return { femaleCount, maleCount };
  };

  const { femaleCount, maleCount } = genderCount();

  const showPassword = (id) => {
    setCurrentId(id)
  }

  const clearUserId = (e) => {
    e.stopPropagation()
    setCurrentId(null)
  }

  return (
    <div className='container'>
      <div className='App-btns'>
        <h1>Female:{femaleCount}</h1>
        <h1>Male:{maleCount}</h1>
        <button onClick={sortByName}>Sort by name</button>
      </div>
      <table>
        <tr>
          <th>First name</th>
          <th>Last name</th>
          <th>Email</th>
          <th>Gender</th>
          <th>Ip address</th>
          <th>Password</th>
        </tr>
        {
          data.map(e => {
            return (
              <tr key={e.id}>
                <td>{e.first_name}</td>
                <td>{e.last_name}</td>
                <td>{e.email}</td>
                <td>{e.gender}</td>
                <td>{e.ip_address}</td>
                <td className='password'>
                  {currentId == e.id ? e.password : '*'.repeat(10)}
                  <span onClick={() => showPassword(e.id)}>
                  {
                    currentId == e.id 
                    ? <AiOutlineEye onClick={clearUserId}/>
                    : <AiOutlineEyeInvisible />
                  }
                  </span>
                </td>
              </tr>
            )
          })
        }
      </table>
    </div>
  )
}
