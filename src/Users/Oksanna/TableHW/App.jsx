import { useState } from 'react'


import './App.scss'
import users from './Users.json'

export default function App() {
    const [data, setData] = useState(users)

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

    const deleteById = (id) => {
        const res = data.filter((user) => user.id !== id);
        setData(res);
    };

    const sorted = (() => {
        const sortedData = [...data].sort((a, b) => a.first_name.localeCompare(b.first_name));
        setData(sortedData);

    });
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
                        <tr key={user.id} onClick={() => deleteById(user.id)}>
                            <td>{user.id}</td>
                            <td>{user.first_name}</td>
                            <td>{user.last_name}</td>
                            <td>{user.email}</td>
                            <td>{user.gender}</td>
                            <td>{user.ip_address}</td>
                            <td>{user.password}</td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    );
}
