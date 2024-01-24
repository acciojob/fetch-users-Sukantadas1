import React, { useState } from "react";
import "../styles/UserList.css";

function UserList() {
  const [users, setUsers] = useState([]);

  const getUserList = async () => {
    try {
      const response = await fetch("https://reqres.in/api/users");
      const data = await response.json();
      setUsers(data.data);
    } catch (error) {
      console.error("Error fetching user list:", error);
    }
  };

  return (
    <div>
      <button className="btn" onClick={getUserList}>
        Get User List
      </button>
      <table>
        <thead>
          <tr>
            <th>ID</th>
            <th>Email</th>
            <th>First Name</th>
            <th>Last Name</th>
            <th>Avatar</th>
          </tr>
        </thead>
        <tbody>
          {users.map((user) => (
            <tr key={user.id}>
              <td>{user.id}</td>
              <td>{user.email}</td>
              <td>{user.first_name}</td>
              <td>{user.last_name}</td>
              <td>
                <img
                  src={user.avatar}
                  alt={`${user.first_name} ${user.last_name}`}
                />
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default UserList;
