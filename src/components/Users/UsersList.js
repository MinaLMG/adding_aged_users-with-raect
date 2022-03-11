import userEvent from "@testing-library/user-event";
import Card from "../UI/Card";
import classes from "./UsersList.module.css";
function UsersList(props) {
  return (
    <Card class={classes.users}>
      <ul>
        {props.users.map((user) => (
          <li>
            {userEvent.name} ( {userEvent.age} years old)
          </li>
        ))}
      </ul>
    </Card>
  );
}
export default UsersList;