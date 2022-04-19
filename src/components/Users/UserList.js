import React from "react";

const UserList = (props) => {
  return (
    <div className='container'>
      <ul type='none'>
        {props.users.map((user) => (
          <li key={user.id}>
            {user.name}, {user.age}, {user.email}
          </li>
        ))}
      </ul>
    </div>
  );
};
export default UserList;
