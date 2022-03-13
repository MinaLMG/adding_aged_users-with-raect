import { Fragment } from "react";
import Button from "./Button";
import Card from "./Card";
import classes from "./ErrorModal.module.css";
import ReactDOM from "react-dom";
function BackDrop(props) {
  return <div className={classes.backdrop} onClick={props.onConfirm}></div>;
}
function Overlay(props) {
  return (
    <Card class={classes.modal}>
      <header className={classes.header}>
        <h2>{props.title}</h2>
      </header>
      <div className={classes.content}>
        <p>{props.message}</p>
      </div>
      <footer className={classes.actions}>
        <Button onClick={props.onConfirm}>Okay</Button>
      </footer>
    </Card>
  );
}
function ErrorModal(props) {
  return (
    <Fragment>
      {ReactDOM.createPortal(
        <BackDrop onConfirm={props.onConfirm}></BackDrop>,
        document.getElementById("backdrop-root")
      )}
      {ReactDOM.createPortal(
        <Overlay
          onConfirm={props.onConfirm}
          title={props.title}
          message={props.message}
        ></Overlay>,
        document.getElementById("overlay-root")
      )}
    </Fragment>
  );
}
export default ErrorModal;
