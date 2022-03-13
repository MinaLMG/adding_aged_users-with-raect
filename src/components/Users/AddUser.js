import { useState } from "react";
import Button from "../UI/Button";
import Card from "../UI/Card";
import "./AddUser.css";
function AddUser(props) {
  const [enteredUserName, setEnteredUserName] = useState("");
  const [enteredUserAge, setEnteredUserAge] = useState("");
  function addUserHandler(event) {
    event.preventDefault();
    if (
      enteredUserAge.trim().length === 0 ||
      enteredUserName.trim().length === 0
    ) {
      return;
    }
    if (+enteredUserAge < 1) {
      return;
    }
    props.onAddUser(enteredUserName, enteredUserAge);
    setEnteredUserAge("");
    setEnteredUserName("");
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
        <label htmlFor="username">user name</label>
        <input
          type="text"
          id="username"
          onChange={userNameChangeHandler}
          value={enteredUserName}
        ></input>
        <label htmlFor="age">user age</label>
        <input
          type="number"
          id="age"
          onChange={userAgeChangeHandler}
          value={enteredUserAge}
        ></input>
        <Button type="submit">Add User</Button>
      </form>
    </Card>
  );
}
export default AddUser;
