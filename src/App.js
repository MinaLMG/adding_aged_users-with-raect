import React, { useState } from "react";
import AddUser from "./components/Users/AddUser";
import UsersList from "./components/Users/UsersList";

function App() {
  const [usersList, setUsersList] = useState([]);
  function addUSerHandler(uName, uAge, id) {
    setUsersList((prev) => {
      return [...prev, { name: uName, age: uAge, id: id }];
    });
  }
  return (
    <div>
      <AddUser onAddUser={addUSerHandler}></AddUser>
      <UsersList users={usersList}></UsersList>
    </div>
  );
}

export default App;
