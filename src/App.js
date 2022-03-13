import React, { useState } from "react";
import Wrapper from "./components/helpers/Wrapper";
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
    <Wrapper>
      <AddUser onAddUser={addUSerHandler}></AddUser>
      <UsersList users={usersList}></UsersList>
    </Wrapper>
  );
}

export default App;
