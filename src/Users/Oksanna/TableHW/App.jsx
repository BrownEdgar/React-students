import { useState } from 'react'


import './App.scss'
import users from './Users.json'
import { AiOutlineEye, AiOutlineEyeInvisible } from 'react-icons/ai'

export default function App() {
  const [data, setData] = useState(users)
  const [currentId, setCurrentId] = useState(null)

  const gender = {
    male: 0,
    female: 0,
  };

  const genderCounts = data.reduce((counts, user) => {
    if (user.gender === 'Male') {
      counts.male += 1;
    } else if (user.gender === 'Female') {
      counts.female += 1;
    }
    return counts;
  }, gender);



  const sorted = (() => {
    const sortedData = [...data].sort((a, b) => a.first_name.localeCompare(b.first_name));
    setData(sortedData);

  });

  const showPassword = (userId) => {
    setCurrentId(userId)
  }

  const clearUserID =() =>{
    e.propagetion();
    setCurrentId(null)
  }


  return (
    <div>


      <div className='gender'>
        <p className='gender-male'>Male: {genderCounts.male}</p>
        <p className='gender-female'>Female: {genderCounts.female}</p> <br />
        <button className='gender-sort' onClick={() => sorted(data.id)}>Sort</button>
      </div>
      <table>
        <thead>
          <tr>
            <th>ID</th>
            <th>First Name</th>
            <th>Last Name</th>
            <th>Email</th>
            <th>Gender</th>
            <th>IP Address</th>
            <th>Password</th>
          </tr>
        </thead>
        <tbody>
          {data.map((user) => (
            <tr key={user.id}>
              <td>{user.id}</td>
              <td>{user.first_name}</td>
              <td>{user.last_name}</td>
              <td>{user.email}</td>
              <td>{user.gender}</td>
              <td>{user.ip_address}</td>
              <td className='password'>
                {currentId === user.id ? user.password : '*'.repeat(10)}
                <span onClick={() => showPassword(user.id)}>

                  {currentId === user.id
                    ? <AiOutlineEyeInvisible onClick={clearUserID} />
                    : <AiOutlineEye />
                  }
                </span>

              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
