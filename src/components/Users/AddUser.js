import { useState } from "react";
import Button from "../UI/Button";
import Card from "../UI/Card";
import "./AddUser.css";
function AddUser() {
  const [enteredUserName, setEnteredUserName] = useState("");
  const [enteredUserAge, setEnteredUserAge] = useState("");
  function addUserHandler(event) {
    event.preventDefault();
  }
  function userNameChangeHandler(event) {
    setEnteredUserName(event.target.value);
  }

  function userAgeChangeHandler(event) {
    setEnteredUserAge(event.target.value);
  }
  return (
    <Card class="input">
      <form onSubmit={addUserHandler}>
        <label htmlFor="username">username</label>
        <input
          type="text"
          id="username"
          onChange={userNameChangeHandler}
        ></input>
        <label htmlFor="age">username</label>
        <input type="number" id="age" onChange={userAgeChangeHandler}></input>
        <Button type="submit">Add User</Button>
      </form>
    </Card>
  );
}
export default AddUser;
