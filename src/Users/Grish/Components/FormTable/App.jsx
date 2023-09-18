import { useState } from "react";
import data from "./data.json";

import "./App.css";

export default function App() {
  const [users, setUsers] = useState(data);

  let male = 0;
  const serachgenderMale = users.map(
    (item) => item.gender === "Male" && male++
  );

  let female = 0;
  const serachgenderFemale = users.map(
    (item) => item.gender === "Female" && female++
  );

  const deleteById = (id) => {
    const resultId = users.filter((item) => item.id !== id);
    setUsers(resultId);
  };

  return (
    <div className="App">
      <p>Male: {male}</p>
      <p>Female: {female}</p>
      <table className="App__table">
        <thead className="App__thead">
          <tr className="App__titles">
            <th className="App_title App-id">Id</th>
            <th className="App_title App-first_name">First Name</th>
            <th className="App_title App-last_name">Last Name</th>
            <th className="App_title App-email">Email</th>
            <th className="App_title App-gender">Gender</th>
            <th className="App_title App-ip_address">Ip Address</th>
            <th className="App_title App-password">Password</th>
          </tr>
        </thead>
        <tbody>
          <tr className="controlPanel">
            <td> - </td>
            <td> - </td>
            <td> - </td>
            <td> - </td>
            <td> - </td>
            <td> - </td>
            <td> - </td>
          </tr>
          {users.map((user) => (
            <tr
              className="App__items"
              key={user.id}
              onClick={() => deleteById(user.id)}>
              <td className="App_item App-id">{user.id}</td>
              <td className="App_item App-first_name">{user.first_name}</td>
              <td className="App_item App-last_name">{user.last_name}</td>
              <td className="App_item App-email">{user.email}</td>
              <td className="App_item App-gender">{user.gender}</td>
              <td className="App_item App-ip_address">{user.ip_address}</td>
              <td className="App_item App-password">{user.password}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
