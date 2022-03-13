import { useState } from "react";
import Button from "../UI/Button";
import Card from "../UI/Card";
import ErrorModal from "../UI/ErrorModal";
import "./AddUser.css";
function AddUser(props) {
  const [enteredUserName, setEnteredUserName] = useState("");
  const [enteredUserAge, setEnteredUserAge] = useState("");
  const [error, setError] = useState();
  function addUserHandler(event) {
    event.preventDefault();
    if (
      enteredUserAge.trim().length === 0 ||
      enteredUserName.trim().length === 0
    ) {
      setError({
        title: "Invalid input",
        message: "please enter a valid name and age (non-empty vaues)",
      });
      return;
    }
    if (+enteredUserAge < 1) {
      setError({
        title: "Invalid age",
        message: "please enter a validage (>0)",
      });
      return;
    }
    props.onAddUser(enteredUserName, enteredUserAge, Math.random());
    setEnteredUserAge("");
    setEnteredUserName("");
  }
  function userNameChangeHandler(event) {
    setEnteredUserName(event.target.value);
  }

  function userAgeChangeHandler(event) {
    setEnteredUserAge(event.target.value);
  }
  function errorHandler() {
    setError(undefined);
  }
  return (
    <div>
      {error && (
        <ErrorModal
          title={error.title}
          message={error.message}
          onConfirm={errorHandler}
        ></ErrorModal>
      )}
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
    </div>
  );
}
export default AddUser;
