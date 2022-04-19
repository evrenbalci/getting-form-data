import React, { useState } from "react";
import AddUser from "./components/Users/AddUser";
import UserList from "./components/Users/UserList";

function App() {
  const [userList, setUserList] = useState([]);
  const userListHandler = (userName, userAge, userEmail) => {
    setUserList((prevList) => {
      return [
        ...prevList,
        {
          name: userName,
          age: userAge,
          email: userEmail,
          id: Math.random().toString(),
        },
      ];
    });
  };

  return (
    <div>
      <AddUser onUserList={userListHandler} />
      <UserList users={userList} />
    </div>
  );
}

export default App;
