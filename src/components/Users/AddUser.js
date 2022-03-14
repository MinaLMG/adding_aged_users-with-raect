import { useRef, useState } from "react";
import Wrapper from "../helpers/Wrapper";
import Button from "../UI/Button";
import Card from "../UI/Card";
import ErrorModal from "../UI/ErrorModal";
import "./AddUser.css";
function AddUser(props) {
  const [error, setError] = useState();
  const nameInputRef = useRef();
  const ageInputRef = useRef();
  function addUserHandler(event) {
    event.preventDefault();
    const enteredAge = ageInputRef.current.value;
    const enteredName = nameInputRef.current.value;
    if (enteredAge.trim().length === 0 || enteredName.trim().length === 0) {
      setError({
        title: "Invalid input",
        message: "please enter a valid name and age (non-empty vaues)",
      });
      return;
    }
    if (+enteredName < 1) {
      setError({
        title: "Invalid age",
        message: "please enter a validage (>0)",
      });
      return;
    }
    props.onAddUser(enteredName, enteredAge, Math.random());
    nameInputRef.current.value = "";
    ageInputRef.current.value = "";
  }
  function errorHandler() {
    setError(undefined);
  }
  return (
    <Wrapper>
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
          <input type="text" id="username" ref={nameInputRef}></input>
          <label htmlFor="age">user age</label>
          <input type="number" id="age" ref={ageInputRef}></input>
          <Button type="submit">Add User</Button>
        </form>
      </Card>
    </Wrapper>
  );
}
export default AddUser;
