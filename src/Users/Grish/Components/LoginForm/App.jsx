import { useState } from "react";
import "./App.scss";
import ShowUsers from "./ShowUsers/ShowUsers";

export default function App() {
  const [users, setUsers] = useState([]);
  const [errors, setErrors] = useState({
    username: "",
    password: "",
    email: "",
  });

  const userdata = (e) => {
    e.preventDefault();

    const user = {
      id: Date.now(),
      email: e.target.email.value,
      password: e.target.password.value,
      username: e.target.username.value,
    };

    if (
      e.target.email.value.trim() === "" ||
      e.target.username.value.trim() === "" ||
      e.target.password.value.trim() === ""
    ) {
      return alert("Empty value");
    }

    const resultRepeatingEmail = users.some(
      (elem) => elem.email === user.email
    );

    const hasUpperCase = /[A-Z]/.test(e.target.password.value);
    const hasNumber = /\d/.test(e.target.password.value);
    let errorMessage = "";

    if (resultRepeatingEmail) {
      errorMessage = "There is a registered user with this email";
    }

    if (!hasUpperCase) {
      errorMessage = errorMessage || "Must contain upperCase";
    }

    if (!hasNumber) {
      errorMessage = errorMessage || "Must by contain a Number!";
    }

    setErrors({ ...errors, password: errorMessage });

    resultRepeatingEmail ? "" : setUsers([...users, user]);

    resultRepeatingEmail || errorMessage ? "" : e.target.reset();
  };

  return (
    <div className="container">
      <form onSubmit={userdata}>
        <label htmlFor="email">Email</label>
        <input type="email" placeholder="Email" id="email" />
        <p className="error">{errors.email ? errors.email : ""}</p>
        <label htmlFor="username">UserName</label>
        <input type="text" placeholder="Username" id="username" />
        <label htmlFor="password">Password</label>
        <input type="password" placeholder="Password" id="password" />
        <p className="error">{errors.password ? errors.password : ""}</p>

        <input type="submit" value="Save" />
      </form>

      <hr />
      <div className="container-showItem">
        {users.map((user) => (
          <ShowUsers key={user.id} userData={user} />
        ))}
      </div>
    </div>
  );
}
