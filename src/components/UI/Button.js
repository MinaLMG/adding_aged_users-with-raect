import { buildQueries } from "@testing-library/react";
import classes from "./Button.module.css";
function Button(props) {
  return (
    <button
      className={classes.button}
      type={props.type || "button"}
      onclick={props.onclick}
    >
      {props.children}
    </button>
  );
}
export default Button;
