import { useState } from "react";
import { AiOutlineEyeInvisible, AiOutlineEye } from "react-icons/ai"; // Import the correct icons
import "./ShowUsers.scss";

export default function ShowUsers({ userData }) {
  const [currentId, setCurrentId] = useState(null);

  const showPassword = (id) => {
    setCurrentId(id);
  };

  const clearUserId = (e) => {
    e.stopPropagation();
    setCurrentId(null);
  };

  return (
    <div className="App" key={userData.id}>
      <div className="App-item">
        <p>Email: {userData.email}</p>
        <p>Username: {userData.username}</p>
        <p>
          Password:
          {currentId === userData.id ? userData.password : "*".repeat(10)}
          <span onClick={() => showPassword(userData.id)}>
            {currentId === userData.id ? (
              <AiOutlineEyeInvisible onClick={clearUserId} />
            ) : (
              <AiOutlineEye onClick={() => clearUserId} />
            )}
          </span>
        </p>
      </div>
    </div>
  );
}
