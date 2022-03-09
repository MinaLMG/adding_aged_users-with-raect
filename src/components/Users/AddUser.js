import Button from "../UI/Button";
import Card from "../UI/Card";
import "./AddUser.css";
function AddUser() {
  function addUserHandler(event) {
    event.preventDefault();
  }
  return (
    <Card class="input">
      <form onSubmit={addUserHandler}>
        <label htmlFor="username">username</label>
        <input type="text" id="username"></input>
        <label htmlFor="age">username</label>
        <input type="number" id="age"></input>
        <Button type="submit">Add User</Button>
      </form>
    </Card>
  );
}
export default AddUser;
