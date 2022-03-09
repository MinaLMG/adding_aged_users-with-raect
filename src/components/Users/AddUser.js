function AddUser() {
  function addUserHandler(event) {
    event.preventDefault();
  }
  return (
    <form onSubmit={addUserHandler}>
      <label htmlFor="username">username</label>
      <input type="text" id="username"></input>
      <label htmlFor="age">username</label>
      <input type="number" id="age"></input>
      <button type="submit">Add User</button>
    </form>
  );
}
export default AddUser;
